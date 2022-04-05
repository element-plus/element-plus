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

let id = 0

const load = (node, resolve) => {
  if (node.isLeaf) return resolve([])

  setTimeout(() => {
    resolve([
      {
        value: ++id,
        label: `lazy load node${id}`,
      },
      {
        value: ++id,
        label: `lazy load node${id}`,
        isLeaf: true,
      },
    ])
  }, 400)
}
</script>
```
