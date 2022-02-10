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
        @click="handleClick"
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
import { composeEventHandlers, whenMouse } from '@element-plus/utils-v2'
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
        return e.defaultPrevented
      },
      whenMouse((e) => {
        onItemLeave(e)
      })
    )

    const handleClick = composeEventHandlers(
      (e: PointerEvent) => {
        emit('click', e)
        return e.defaultPrevented
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
    const propsAndAttrs = computed(() => {
      return { ...props, ...attrs }
    })

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
