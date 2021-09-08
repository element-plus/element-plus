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
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { useDropdown } from './useDropdown'

export default defineComponent({
  name: 'ElDropdownItem',
  props: {
    command: {
      type: [Object, String, Number],
      default: () => ({}),
    },
    disabled: Boolean,
    divided: Boolean,
    icon: String,
  },
  setup(props) {
    const { elDropdown } = useDropdown()
    const _instance = getCurrentInstance()

    function handleClick(e: UIEvent) {
      // if disabled don't collapse the drop-down list
      if (props.disabled) {
        e.stopImmediatePropagation()
        return
      }
      if (elDropdown.hideOnClick.value) {
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
