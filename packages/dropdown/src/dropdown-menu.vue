<template>
  <ul
    class="el-dropdown-menu"
    :class="[size && `el-dropdown-menu--${size}`]"
  >
    <slot></slot>
  </ul>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import { useDropdown } from './useDropdown'

export default defineComponent({
  name: 'ElDropdownMenu',
  props: {
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    arrowOffset: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const { _elDropdownSize } = useDropdown()
    const size = _elDropdownSize.value

    return {
      size,
    }
  },
})
</script>
<style scoped>
</style>
