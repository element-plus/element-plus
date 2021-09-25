<template>
  <el-input-number v-model="num" :disabled="true" />
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
