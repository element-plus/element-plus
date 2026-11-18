<template>
  <el-autocomplete
    v-model="value"
    :fetch-suggestions="querySearch"
    virtual-scroll
    :height="280"
    :item-size="34"
    placeholder="Search 10,000 suggestions"
    style="width: 300px"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const suggestions = Array.from({ length: 10000 }, (_, index) => ({
  value: `Item ${index + 1}`,
}))

const querySearch = (query: string) =>
  suggestions.filter((item) =>
    item.value.toLowerCase().includes(query.toLowerCase())
  )
</script>
