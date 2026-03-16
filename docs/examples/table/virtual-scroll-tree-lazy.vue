<template>
  <el-table
    :data="treeData"
    :use-virtual="true"
    :row-height="50"
    :height="500"
    row-key="id"
    lazy
    :load="loadChildren"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    style="width: 100%"
  >
    <el-table-column prop="name" label="Name" width="300" />
    <el-table-column prop="value" label="Value" width="200" />
    <el-table-column prop="count" label="Count" width="120" />
    <el-table-column prop="description" label="Description" />
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface TreeNode {
  id: string | number
  name: string
  value: string
  count: number
  description: string
  hasChildren: boolean
  children?: TreeNode[]
}

const treeData = ref<TreeNode[]>([
  {
    id: 1,
    name: 'Root Node 1',
    value: 'root-1',
    count: 100,
    description: 'First level node with lazy loading',
    hasChildren: true,
  },
  {
    id: 2,
    name: 'Root Node 2',
    value: 'root-2',
    count: 200,
    description: 'First level node with lazy loading',
    hasChildren: true,
  },
  {
    id: 3,
    name: 'Root Node 3',
    value: 'root-3',
    count: 150,
    description: 'First level node with lazy loading',
    hasChildren: true,
  },
])

// Simulate async loading of child nodes
const loadChildren = (
  row: TreeNode,
  treeNode: any,
  resolve: (data: TreeNode[]) => void
) => {
  setTimeout(() => {
    const children: TreeNode[] = Array.from({ length: 10 }, (_, i) => ({
      id: `${row.id}-${i}`,
      name: `${row.name} - Child ${i}`,
      value: `child-${row.id}-${i}`,
      count: Math.floor(Math.random() * 100),
      description: `Child node of ${row.name}`,
      hasChildren: Math.random() > 0.5, // Randomly determine if node has children
    }))
    resolve(children)
  }, 500)
}
</script>
