<template>
  <el-roving-focus-collection-item
    :id="id"
    :focusable="focusable"
    :active="active"
  >
    <slot />
  </el-roving-focus-collection-item>
</template>

<script lang="ts">
import { computed, defineComponent, inject, provide, ref, unref } from 'vue'
import { useId } from '@element-plus/hooks'
import { composeEventHandlers, getEventCode } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { ElCollectionItem as ElRovingFocusCollectionItem } from './roving-focus-group'
import {
  ROVING_FOCUS_GROUP_INJECTION_KEY,
  ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY,
} from './tokens'

export default defineComponent({
  components: {
    ElRovingFocusCollectionItem,
  },
  props: {
    focusable: {
      type: Boolean,
      default: true,
    },
    active: Boolean,
  },
  emits: ['mousedown', 'focus', 'keydown'],
  setup(props, { emit }) {
    const { currentTabbedId, onItemFocus, onItemShiftTab, onKeydown } = inject(
      ROVING_FOCUS_GROUP_INJECTION_KEY,
      undefined
    )!

    const id = useId()
    const rovingFocusGroupItemRef = ref<HTMLElement>()

    const handleMousedown = composeEventHandlers(
      (e: Event) => {
        emit('mousedown', e)
      },
      (e) => {
        if (!props.focusable) {
          e.preventDefault()
        } else {
          onItemFocus(unref(id))
        }
      }
    )

    const handleFocus = composeEventHandlers(
      (e: Event) => {
        emit('focus', e)
      },
      () => {
        onItemFocus(unref(id))
      }
    )

    const handleKeydown = composeEventHandlers(
      (e: Event) => {
        emit('keydown', e)
      },
      (e) => {
        const { shiftKey, target, currentTarget } = e as KeyboardEvent
        const code = getEventCode(e as KeyboardEvent)

        if (code === EVENT_CODE.tab && shiftKey) {
          onItemShiftTab()
          return
        }
        if (target !== currentTarget) return
        onKeydown(e as KeyboardEvent)
      }
    )

    const isCurrentTab = computed(() => currentTabbedId.value === unref(id))

    provide(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, {
      rovingFocusGroupItemRef,
      tabIndex: computed(() => (unref(isCurrentTab) ? 0 : -1)),
      handleMousedown,
      handleFocus,
      handleKeydown,
    })

    return {
      id,
      handleKeydown,
      handleFocus,
      handleMousedown,
    }
  },
})
</script>
