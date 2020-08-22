<template>
  <transition
    name="el-zoom-in-top"
    @after-leave="doDestroy"
  >
    <ul
      v-show="showPopper"
      class="el-dropdown-menu el-popper"
      :class="[size && `el-dropdown-menu--${size}`]"
    >
      <slot></slot>
    </ul>
  </transition>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
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
    const size = ref(_elDropdownSize || '')

    return {
      size,
    }
  },
})
</script>
<style scoped>
</style>
