<template>
  <main :class="prefixClass">
    <slot></slot>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
export default defineComponent({
  name: 'ElMain',
  setup() {
    const prefixClass = usePrefixClass('main')
    return {
      prefixClass,
    }
  },
})
</script>
