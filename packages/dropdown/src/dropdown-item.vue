<template>
  <li
    class="el-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'el-dropdown-menu__item--divided': divided
    }"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </li>
</template>
<script lang='ts'>
import { defineComponent, getCurrentInstance } from 'vue'
import { useDropdown } from './useDropdown'

export default defineComponent({
  name: 'ElDropdownItem',
  props: {
    command: {
      type: Object,
      defautl: () => ({}),
    },
    disabled: Boolean,
    divided: Boolean,
    icon: String,
  },
  setup(props) {
    const { elDropdown } = useDropdown()

    function handleClick(e: UIEvent) {
      elDropdown.ClickEvent?.(props.command, getCurrentInstance(), e)
    }
    return { handleClick }
  },
})
</script>
<style scoped>
</style>
