<template>
  <el-input-number v-model="num" :precision="2" :step="0.1" :max="10" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const num = ref(1)
    return {
      num,
    }
  },
})
</script>
