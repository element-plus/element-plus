<template>
  <footer class="el-footer" :style="{ '--el-footer-height': height }">
    <slot></slot>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElFooter',
  props: {
    height: {
      type: String,
      default: null,
    },
  },
})
</script>
