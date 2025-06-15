<template>
  <el-mention
    v-model="value"
    :options="options"
    :prefix="['@', '#']"
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
const value = ref('')
const options = ref<MentionOption[]>([])

const handleSearch = (_: string, prefix: string) => {
  options.value = (MOCK_DATA[prefix] || []).map((value) => ({
    value,
  }))
}
</script>
