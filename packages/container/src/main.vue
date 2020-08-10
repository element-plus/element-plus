<template>
  <main class="el-main">
    <slot></slot>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElMain',
})
</script>
