<template>
  <aside class="el-aside" :style="{ '--el-aside-width': width }">
    <slot></slot>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: null,
    },
  },
})
</script>
