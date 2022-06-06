<template>
  <div style="display: inline-block">
    <p style="margin: 10px">use collapse-tags</p>
    <el-select-v2
      v-model="value"
      :options="options"
      placeholder="Please select"
      style="width: 240px"
      multiple
      collapse-tags
    />
  </div>
  <div style="display: inline-block; margin-left: 20px">
    <p style="margin: 10px">use collapse-tags-tooltip</p>
    <el-select-v2
      v-model="value2"
      :options="options"
      placeholder="Please select"
      style="width: 240px"
      multiple
      collapse-tags
      collapse-tags-tooltip
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const value2 = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>
