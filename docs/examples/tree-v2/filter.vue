<template>
  <el-input
    v-model="query"
    style="width: 240px"
    placeholder="Please enter keyword"
    @input="onQueryChanged"
  />
  <el-tree-v2
    ref="treeRef"
    style="max-width: 600px"
    :data="data"
    :props="props"
    :filter-method="filterMethod"
    :height="208"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTreeV2 } from 'element-plus'
import type { TreeNodeData } from 'element-plus/es/components/tree-v2/src/types'

interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const getKey = (prefix: string, id: number) => `${prefix}-${id}`

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
      }
    })
}

const query = ref('')
const treeRef = ref<InstanceType<typeof ElTreeV2>>()
const data = createData(4, 30, 5)
const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}

const onQueryChanged = (query: string) => {
  treeRef.value!.filter(query)
}
const filterMethod = (query: string, node: TreeNodeData) =>
  node.label!.includes(query)
</script>
