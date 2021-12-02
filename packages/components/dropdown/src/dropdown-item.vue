<template>
  <el-collection-item
    :disabled="disabled"
    :text-value="textValue ?? textContent"
  >
    <el-roving-focus-item as-child :focusable="!disabled">
      <el-slot
        ref="itemRef"
        v-bind="$attrs"
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': disabled,
          'el-dropdown-menu__item--divided': divided,
        }"
        tag="div"
        :aria-disabled="disabled"
        role="menuitem"
        @pointermove="handlePointerMove"
        @pointerleave="handlePointerLeave"
      >
        <el-icon v-if="icon"><component :is="icon" /></el-icon>
        <slot />
      </el-slot>
    </el-roving-focus-item>
  </el-collection-item>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  ref,
  unref,
} from 'vue'
import ElIcon from '@element-plus/components/icon'
import { ElCollectionItem } from '@element-plus/components/collection'
import { ElRovingFocusItem } from '@element-plus/components/roving-focus-group'
import { ElSlot } from '@element-plus/components/slot'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { composeEventHandlers, whenMouse } from '@element-plus/utils/dom'
import { useDropdown } from './useDropdown'
import { DROPDOWN_INJECTION_KEY } from './tokens'
import type { Component } from 'vue'

export default defineComponent({
  name: 'ElDropdownItem',
  components: { ElIcon, ElCollectionItem, ElRovingFocusItem, ElSlot },
  props: buildProps({
    command: {
      type: [Object, String, Number],
      default: () => ({}),
    },
    disabled: Boolean,
    divided: Boolean,
    textValue: String,
    icon: {
      type: definePropType<string | Component>([String, Object]),
    },
  } as const),
  emits: ['pointermove', 'pointerleave'],
  setup(props, { emit }) {
    const { elDropdown } = useDropdown()
    const _instance = getCurrentInstance()
    const itemRef = ref<HTMLElement | null>(null)
    const textContent = computed(() => unref(itemRef)?.textContent ?? '')
    const { onItemEnter, onItemLeave } = inject(
      DROPDOWN_INJECTION_KEY,
      undefined
    )!

    onMounted(() => {
      // console.log(itemRef)
      // const itemEl = unref(itemRef)
      // itemMap.set(itemEl, {
      //   ref: itemEl,
      //   ...props,
      // })
    })

    const handlePointerMove = composeEventHandlers(
      (e: PointerEvent) => {
        emit('pointermove', e)
      },
      whenMouse((e) => {
        if (props.disabled) {
          onItemLeave(e)
        } else {
          onItemEnter(e)
          if (!e.defaultPrevented) {
            ;(e.currentTarget as HTMLElement)?.focus()
          }
        }
      })
    )

    const handlePointerLeave = composeEventHandlers(
      (e: PointerEvent) => {
        emit('pointerleave', e)
      },
      whenMouse((e) => {
        onItemLeave(e)
      })
    )
    function handleClick(e: UIEvent) {
      // if disabled don't collapse the drop-down list
      if (props.disabled) {
        e.stopImmediatePropagation()
        return
      }
      if (elDropdown?.hideOnClick?.value) {
        elDropdown.handleClick?.()
      }
      elDropdown.commandHandler?.(props.command, _instance, e)
    }

    return {
      handleClick,
      handlePointerMove,
      handlePointerLeave,
      itemRef,
      textContent,
    }
  },
})
</script>
