<template>
  <g-roving-focus-item :focusable="!disabled">
    <g-dropdown-item-impl
      v-bind="propsAndAttrs"
      @pointerleave="handlePointerLeave"
      @pointermove="handlePointerMove"
      @clickimpl="handleClick"
    >
      <template v-if="$slots.icon" #icon>
        <slot name="icon" />
      </template>

      <slot />
    </g-dropdown-item-impl>
  </g-roving-focus-item>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject } from 'vue'
import { GRovingFocusItem } from '@element-plus/components/roving-focus-group'
import { composeEventHandlers, whenMouse } from '@element-plus/utils'
import GDropdownItemImpl from './dropdown-item-impl.vue'
import { useDropdown } from './useDropdown'
import { dropdownItemProps } from './dropdown'
import { DROPDOWN_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'GDropdownItem',
  components: {
    GRovingFocusItem,
    GDropdownItemImpl,
  },
  inheritAttrs: false,
  props: dropdownItemProps,
  emits: ['pointermove', 'pointerleave', 'click'],
  setup(props, { emit, attrs }) {
    const { elDropdown } = useDropdown()
    const _instance = getCurrentInstance()
    const { onItemEnter, onItemLeave } = inject(
      DROPDOWN_INJECTION_KEY,
      undefined
    )!

    const handlePointerMove = composeEventHandlers(
      (e: PointerEvent) => {
        emit('pointermove', e)
        return e.defaultPrevented
      },
      whenMouse((e) => {
        if (props.disabled) {
          onItemLeave(e)
          return
        }

        const target = e.currentTarget as HTMLElement
        /**
         * This handles the following scenario:
         *   when the item contains a form element such as input element
         *   when the mouse is moving over the element itself which is contained by
         *   the item, the default focusing logic should be prevented so that
         *   it won't cause weird action.
         */
        if (
          target === document.activeElement ||
          target.contains(document.activeElement)
        ) {
          return
        }

        onItemEnter(e)
        if (!e.defaultPrevented) {
          target?.focus({
            preventScroll: true,
          })
        }
      })
    )

    const handlePointerLeave = composeEventHandlers((e: PointerEvent) => {
      emit('pointerleave', e)
      return e.defaultPrevented
    }, whenMouse(onItemLeave))

    const handleClick = composeEventHandlers(
      (e: PointerEvent) => {
        if (props.disabled) {
          return
        }
        emit('click', e)
        return e.type !== 'keydown' && e.defaultPrevented
      },
      (e) => {
        if (props.disabled) {
          e.stopImmediatePropagation()
          return
        }
        if (elDropdown?.hideOnClick?.value) {
          elDropdown.handleClick?.()
        }
        elDropdown.commandHandler?.(props.command, _instance, e)
      }
    )

    // direct usage of v-bind={ ...$props, ...$attrs } causes type errors
    const propsAndAttrs = computed(() => ({ ...props, ...attrs }))

    return {
      handleClick,
      handlePointerMove,
      handlePointerLeave,
      propsAndAttrs,
    }
  },
})
</script>
