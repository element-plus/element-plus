<template>
  <el-collection-item :id="id" :focusable="focusable" :active="active">
    <el-slot
      ref="itemRef"
      tag="span"
      :tabindex="isCurrentTab ? 0 : -1"
      v-bind="$attrs"
    >
      <slot />
    </el-slot>
  </el-collection-item>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, unref, nextTick } from 'vue'
import {
  COLLECTION_INJECTION_KEY,
  ElCollectionItem,
} from '@element-plus/components/collection'
import { ElSlot } from '@element-plus/components/slot'
import { useId } from '@element-plus/hooks'
import { composeEventHandlers } from '@element-plus/utils/dom'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { ROVING_FOCUS_GROUP_INJECTION_KEY } from './tokens'
import { getFocusIntent, reorderArray, focusFirst } from './utils'

export default defineComponent({
  components: {
    ElCollectionItem,
    ElSlot,
  },
  props: {
    focusable: {
      type: Boolean,
      default: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['mousedown', 'focus', 'keydown'],
  setup(props, { emit }) {
    const rovingFocusInjection = inject(
      ROVING_FOCUS_GROUP_INJECTION_KEY,
      undefined
    )!
    const { getItems } = inject(COLLECTION_INJECTION_KEY, undefined)!
    const id = useId()
    const itemRef = ref(null)
    const handleMousedown = composeEventHandlers(
      (e: Event) => {
        emit('mousedown', e)
      },
      (e) => {
        if (!props.focusable) {
          e.preventDefault()
        } else {
          rovingFocusInjection.onItemFocus(unref(id))
        }
      }
    )

    const handleFocus = composeEventHandlers(
      (e: Event) => {
        emit('focus', e)
      },
      () => {
        rovingFocusInjection.onItemFocus(unref(id))
      }
    )

    const handleKeydown = composeEventHandlers(
      (e: Event) => {
        emit('keydown', e)
      },
      (e) => {
        const { key, shiftKey, target, currentTarget } = e as KeyboardEvent
        if (key === EVENT_CODE.tab && shiftKey) {
          rovingFocusInjection.onItemShiftTab()
          return
        }
        if (target !== currentTarget) return
        const focusIntent = getFocusIntent(e as KeyboardEvent)

        if (focusIntent) {
          e.preventDefault()
          const items = getItems<typeof props>().filter(
            (item) => item.focusable
          )

          let elements = items.map((item) => item.ref!)

          switch (focusIntent) {
            case 'last': {
              elements.reverse()
              break
            }
            case 'prev':
            case 'next': {
              if (focusIntent === 'prev') {
                elements.reverse()
              }
              const currentIdx = elements.indexOf(currentTarget as HTMLElement)
              elements = rovingFocusInjection.loop
                ? reorderArray(elements, currentIdx + 1)
                : elements.slice(currentIdx + 1)
              break
            }
            default: {
              break
            }
          }

          nextTick(() => {
            focusFirst(elements)
          })
        }
      }
    )

    const isCurrentTab = computed(
      () => rovingFocusInjection.currentTabbedId === unref(id)
    )
    return {
      id,
      itemRef,
      isCurrentTab,
      handleKeydown,
      handleFocus,
      handleMousedown,
    }
  },
})
</script>
