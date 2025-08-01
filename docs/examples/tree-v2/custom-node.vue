<template>
  <el-tree-v2
    style="max-width: 600px"
    :data="data"
    :props="props"
    :height="200"
  >
    <template #default="{ node }">
      <el-icon class="el-icon--left">
        <Document v-if="node.isLeaf" />
        <Folder v-else-if="!node.expanded" />
        <FolderOpened v-else />
      </el-icon>
      <span class="prefix" :class="{ 'is-leaf': node.isLeaf }"
        >[ElementPlus]</span
      >
      <span>{{ node.label }}</span>
    </template>
  </el-tree-v2>
</template>

<script lang="ts" setup>
import { Document, Folder, FolderOpened } from '@element-plus/icons-vue'

interface Tree {
  id: string
  label: string
  children?: Tree[]
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
      }
    })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
const data = createData(4, 30, 40)
</script>

<style scoped>
.prefix {
  color: var(--el-color-primary);
  margin-right: 10px;
}
.prefix.is-leaf {
  color: var(--el-color-success);
}
</style>
