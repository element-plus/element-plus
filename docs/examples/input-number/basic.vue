<template>
  <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const num = ref(1)
    const handleChange = (value: string) => {
      console.log(value)
    }
    return {
      num,
      handleChange,
    }
  },
})
</script>
