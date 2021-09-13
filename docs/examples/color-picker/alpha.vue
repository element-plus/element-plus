<template>
  <el-color-picker v-model="color" show-alpha />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const color = ref('rgba(19, 206, 102, 0.8)')
    return {
      color,
    }
  },
})
</script>
