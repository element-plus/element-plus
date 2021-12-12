<template>
  <el-dropdown-collection-item
    :disabled="disabled"
    :text-value="textValue ?? textContent"
  >
    <el-roving-focus-item :focusable="!disabled">
      <el-dropdown-item-impl
        v-bind="$props"
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
import ElIcon from '@element-plus/components/icon'
import { ElRovingFocusItem } from '@element-plus/components/roving-focus-group'
import { composeEventHandlers, whenMouse } from '@element-plus/utils/dom'
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
    ElIcon,
    ElDropdownCollectionItem,
    ElRovingFocusItem,
    ElDropdownItemImpl,
  },
  props: dropdownItemProps,
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
      textContent,
    }
  },
})
</script>
