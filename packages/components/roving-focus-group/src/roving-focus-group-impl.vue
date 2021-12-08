<template>
  <div
    ref="rovingFocusGroupRef"
    v-bind="$attrs"
    :tabindex="isBackingOut ? -1 : 0"
    :style="rovingFocusRootStyle"
    @blur="handleBlur"
    @focus="handleFocus"
    @mousedown="handleMousedown"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  provide,
  onBeforeUnmount,
  onMounted,
  ref,
  unref,
  inject,
  watch,
  reactive,
  readonly,
  toRef,
} from 'vue'
import { composeEventHandlers, on, off } from '@element-plus/utils/dom'
import { COLLECTION_INJECTION_KEY } from '@element-plus/components/collection'
import { rovingFocusGroupProps } from './roving-focus-group'
import { ROVING_FOCUS_GROUP_INJECTION_KEY } from './tokens'
import { focusFirst } from './utils'

import type { StyleValue } from 'vue'
import type { ElOnlyChildExpose } from '@element-plus/components/slot'

const ENTRY_FOCUS_EVT = 'rovingFocusGroup.entryFocus'
const EVT_OPTS: EventInit = { bubbles: false, cancelable: true }
export default defineComponent({
  name: 'ElRovingFocusGroupImpl',
  inheritAttrs: false,
  props: rovingFocusGroupProps,
  setup(props, { emit }) {
    const currentTabbedId = ref<string | null>(
      (props.currentTabId || props.defaultCurrentTabId) ?? null
    )
    const isBackingOut = ref(false)
    const isClickFocus = ref(false)
    const rovingFocusGroupRef = ref<ElOnlyChildExpose>()
    const { getItems } = inject(COLLECTION_INJECTION_KEY, undefined)!
    const rovingFocusRootStyle = computed(() => {
      // casting to any for fix compiler error since HTMLElement.StyleValue does not
      // support CSSProperties
      return [
        {
          outline: 'none',
        },
        props.style as StyleValue,
      ] as any
    })
    const onItemFocus = (tabbedId: string) => {
      currentTabbedId.value = tabbedId
      emit('currentTabIdChange', tabbedId)
    }

    const onItemShiftTab = () => {
      isBackingOut.value = true
    }

    const handleMousedown = composeEventHandlers(
      (e: Event) => {
        emit('mousedown', e)
      },
      () => {
        isClickFocus.value = true
      }
    )

    const handleFocus = composeEventHandlers(
      (e: FocusEvent) => {
        emit('focus', e)
      },
      (e) => {
        const isKeyboardFocus = !unref(isClickFocus)
        const { target, currentTarget } = e
        if (
          target === currentTarget &&
          isKeyboardFocus &&
          !unref(isBackingOut)
        ) {
          const entryFocusEvt = new Event(ENTRY_FOCUS_EVT, EVT_OPTS)
          currentTarget?.dispatchEvent(entryFocusEvt)

          if (!entryFocusEvt.defaultPrevented) {
            const items = getItems<{
              id: string
              focusable: boolean
              active: boolean
            }>().filter((item) => item.focusable)
            const activeItem = items.find((item) => item.active)
            const currentItem = items.find(
              (item) => item.id === unref(currentTabbedId)
            )
            const candidates = [activeItem!, currentItem!, ...items].filter(
              Boolean
            )
            const candidateNodes = candidates.map((item) => item.ref!)
            focusFirst(candidateNodes)
          }
        }

        isClickFocus.value = false
      }
    )

    const handleBlur = composeEventHandlers(
      (e: Event) => {
        emit('blur', e)
      },
      () => {
        isBackingOut.value = false
      }
    )

    const handleEntryFocus = (...args: any[]) => {
      emit('entryFocus', ...args)
    }

    provide(
      ROVING_FOCUS_GROUP_INJECTION_KEY,
      reactive({
        currentTabbedId: readonly(currentTabbedId),
        onItemFocus,
        onItemShiftTab,
        loop: toRef(props, 'loop'),
        orientation: toRef(props, 'orientation'),
        dir: toRef(props, 'dir'),
      })
    )

    watch(
      () => props.currentTabId,
      (val) => {
        currentTabbedId.value = val ?? null
      }
    )

    onMounted(() => {
      const rovingFocusGroupEl = unref(rovingFocusGroupRef)!

      on(rovingFocusGroupEl.forwardRef.value, ENTRY_FOCUS_EVT, handleEntryFocus)
    })

    onBeforeUnmount(() => {
      const rovingFocusGroupEl = unref(rovingFocusGroupRef)!
      off(
        rovingFocusGroupEl.forwardRef.value,
        ENTRY_FOCUS_EVT,
        handleEntryFocus
      )
    })

    return {
      isBackingOut,
      rovingFocusGroupRef,
      rovingFocusRootStyle,
      handleBlur,
      handleFocus,
      handleMousedown,
    }
  },
})
</script>
