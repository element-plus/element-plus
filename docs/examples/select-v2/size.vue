<template>
  <div class="flex flex-wrap gap-4 items-center">
    <el-select-v2
      v-model="value"
      :options="options"
      placeholder="Please select"
      size="large"
      style="width: 240px"
    />
    <el-select-v2
      v-model="value"
      :options="options"
      placeholder="Please select"
      style="width: 240px"
    />
    <el-select-v2
      v-model="value"
      :options="options"
      placeholder="Please select"
      size="small"
      style="width: 240px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>

<style scoped>
.example-showcase .el-select-v2 {
  margin-right: 20px;
}
</style>
