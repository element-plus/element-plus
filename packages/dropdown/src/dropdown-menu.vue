<template>
  <ul
    :class="[size && `el-dropdown-menu--${size}`]"
    class="el-dropdown-menu"
    @mouseenter.stop="show"
    @mouseleave.stop="hide"
  >
    <slot></slot>
  </ul>
</template>
<script lang='ts'>
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
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
    const { _elDropdownSize, elDropdown } = useDropdown()
    const size = _elDropdownSize.value
    function show() {
      elDropdown.show?.()
    }
    function hide() {
      elDropdown.hide?.()
    }

    onMounted(() => {
      const dropdownMenu = getCurrentInstance()
      elDropdown.initDom?.(dropdownMenu)
    })

    return {
      size,
      show,
      hide,
    }
  },
})
</script>
<style>
.el-dropdown-menu {
  position: relative;
  margin: 0;
  box-shadow: none;
}
</style>
