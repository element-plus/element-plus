<template>
  <el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>
  <el-checkbox v-model="checked2">Not disabled</el-checkbox>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(true)
    return {
      checked1,
      checked2,
    }
  },
})
</script>
