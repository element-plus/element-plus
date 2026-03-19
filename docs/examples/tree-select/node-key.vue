<template>
  <el-tree-select
    v-model="value"
    style="width: 240px"
    :data="data"
    node-key="id"
    show-checkbox
    multiple
    default-expand-all
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([2])
const data = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 2,
        label: 'Level two 1-1',
      },
      {
        id: 3,
        label: 'Level two 1-2',
      },
    ],
  },
]
</script>
