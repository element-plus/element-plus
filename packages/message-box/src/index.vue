<template>
  <transition name="msgbox-fade">
    <slot></slot>
  </transition>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ElMessageBox',
  props: { },
  setup(props) {
    // init here
  },
})
</script>
<style scoped>
</style>
