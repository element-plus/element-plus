<template>
  <li
    class="el-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'el-dropdown-menu__item--divided': divided,
    }"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
    @click="handleClick"
  >
    <el-icon v-if="icon"><component :is="icon" /></el-icon>
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { useDropdown } from './useDropdown'
import { dropdownItemProps } from './dropdown-item'

export default defineComponent({
  name: 'ElDropdownItem',
  components: { ElIcon },
  props: dropdownItemProps,
  setup(props) {
    const { elDropdown } = useDropdown()
    const _instance = getCurrentInstance()

    function handleClick(e: UIEvent) {
      // if disabled don't collapse the drop-down list
      if (props.disabled) {
        e.stopImmediatePropagation()
        return
      }
      if (elDropdown.hideOnClick!.value) {
        elDropdown.handleClick?.()
      }
      elDropdown.commandHandler?.(props.command, _instance, e)
    }

    return {
      handleClick,
    }
  },
})
</script>
