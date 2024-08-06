<template>
  <el-dropdown-collection-item
    :disabled="disabled"
    :text-value="textValue ?? textContent"
  >
    <el-roving-focus-item :focusable="!disabled">
      <el-dropdown-item-impl
        v-bind="propsAndAttrs"
        @pointerleave="handlePointerLeave"
        @pointermove="handlePointerMove"
        @clickimpl="handleClick"
      >
        <slot />
      </el-dropdown-item-impl>
    </el-roving-focus-item>
  </el-dropdown-collection-item>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  ref,
  unref,
} from 'vue'
import { ElRovingFocusItem } from '@element-plus/components/roving-focus-group'
import { composeEventHandlers, whenMouse } from '@element-plus/utils'
import ElDropdownItemImpl from './dropdown-item-impl.vue'
import { useDropdown } from './useDropdown'
import {
  ElCollectionItem as ElDropdownCollectionItem,
  dropdownItemProps,
} from './dropdown'
import { DROPDOWN_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'ElDropdownItem',
  components: {
    ElDropdownCollectionItem,
    ElRovingFocusItem,
    ElDropdownItemImpl,
  },
  inheritAttrs: false,
  props: dropdownItemProps,
  emits: ['pointermove', 'pointerleave', 'click'],
  setup(props, { emit, attrs }) {
    const { elDropdown } = useDropdown()
    const _instance = getCurrentInstance()
    const itemRef = ref<HTMLElement | null>(null)
    const textContent = computed(() => unref(itemRef)?.textContent ?? '')
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
          target?.focus()
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
      textContent,
      propsAndAttrs,
    }
  },
})
</script>
