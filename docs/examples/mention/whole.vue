<template>
  <el-mention
    v-model="value1"
    whole
    :options="options1"
    style="width: 320px"
    placeholder="Please input"
  />
  <el-divider />
  <el-mention
    v-model="value2"
    :options="options2"
    :prefix="['@', '#']"
    whole
    :check-is-whole="checkIsWhole"
    style="width: 320px"
    placeholder="input @ to mention people, # to mention tag"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MentionOption } from 'element-plus'

const MOCK_DATA: Record<string, string[]> = {
  '@': ['Fuphoenixes', 'kooriookami', 'Jeremy', 'btea'],
  '#': ['1.0', '2.0', '3.0'],
}
const value1 = ref('')
const value2 = ref('')
const options1 = ref<MentionOption[]>(
  MOCK_DATA['@'].map((value) => ({ value }))
)
const options2 = ref<MentionOption[]>([])

const handleSearch = (_: string, prefix: string) => {
  options2.value = (MOCK_DATA[prefix] || []).map((value) => ({
    value,
  }))
}

const checkIsWhole = (pattern: string, prefix: string) => {
  return (MOCK_DATA[prefix] || []).includes(pattern)
}
</script>
