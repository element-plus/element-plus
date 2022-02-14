<template>
  <el-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>
