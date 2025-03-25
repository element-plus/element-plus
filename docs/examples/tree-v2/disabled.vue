<template>
  <el-tree-v2
    style="max-width: 600px"
    :data="data"
    :props="props"
    show-checkbox
    :height="208"
  />
</template>

<script lang="ts" setup>
interface Tree {
  id: string
  label: string
  children?: Tree[]
  disabled: boolean
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node'
): Tree[] => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber =
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
        disabled: nodeKey.includes('2'),
      }
    })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
  disabled: 'disabled',
}
const data = createData(4, 30, 40)
</script>
