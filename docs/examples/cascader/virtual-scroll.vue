<template>
  <el-cascader
    v-model="value"
    :options="options"
    :filter-method="filterMethod"
    filterable
    virtual-scroll
    placeholder="Select with large data"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([])

const filterMethod = (node: any, keyword: string) => {
  return node.text.toLowerCase().includes(keyword.toLowerCase())
}

const generateOptions = (count: number) => {
  return Array.from({ length: count }).map((_, index) => ({
    value: `option-${index}`,
    label: `Option ${index + 1}`,
    children: [
      {
        value: `child-${index}-1`,
        label: `Child ${index + 1}-1`,
        children: [
          {
            value: `grandchild-${index}-1-1`,
            label: `Grandchild ${index + 1}-1-1`,
          },
          {
            value: `grandchild-${index}-1-2`,
            label: `Grandchild ${index + 1}-1-2`,
          },
        ],
      },
      {
        value: `child-${index}-2`,
        label: `Child ${index + 1}-2`,
      },
    ],
  }))
}

const options = generateOptions(20000)
</script>
