<template>
  <el-radio-group v-model="radio">
    <el-radio :label="3">Option A</el-radio>
    <el-radio :label="6">Option B</el-radio>
    <el-radio :label="9">Option C</el-radio>
  </el-radio-group>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      radio: ref(3),
    }
  },
})
</script>
