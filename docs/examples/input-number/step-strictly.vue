<template>
  <el-input-number v-model="num" :step="2" step-strictly />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const num = ref(2)
    return {
      num,
    }
  },
})
</script>
