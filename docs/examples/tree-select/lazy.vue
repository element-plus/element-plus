<template>
  <el-tree-select v-model="value" lazy :load="load" :props="props" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()

const props = {
  label: 'label',
  children: 'children',
  isLeaf: 'isLeaf',
}

const load = (node, resolve) => {
  setTimeout(() => {
    resolve([
      {
        value: Date.now(),
        label: 'lazy load node',
      },
      {
        value: Date.now() + 1,
        label: 'lazy load node',
        isLeaf: true,
      },
    ])
  }, 400)
}
</script>
```
