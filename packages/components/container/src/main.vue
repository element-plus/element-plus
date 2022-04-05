<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'

export default defineComponent({
  name: 'ElMain',
  setup() {
    const ns = useNamespace('main')

    return {
      ns,
    }
  },
})
</script>
