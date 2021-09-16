<template>
  <el-input-number v-model="num" :step="2" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const num = ref(5)
    return {
      num,
    }
  },
})
</script>
