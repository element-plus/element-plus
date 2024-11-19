<template>
  <el-tree-v2
    style="max-width: 600px"
    :data="data"
    show-checkbox
    :expand-on-click-node="false"
    :props="{ class: customNodeClass }"
  />
</template>

<script lang="ts" setup>
import type {
  TreeNode,
  TreeNodeData,
} from 'element-plus/es/components/tree-v2/src/types'

interface Tree {
  id?: string
  value?: string
  label?: string
  isPenultimate?: boolean
  children?: Tree[]
}

const customNodeClass = ({ isPenultimate }: TreeNodeData, node: TreeNode) =>
  isPenultimate ? 'is-penultimate' : ''

const data: Tree[] = [
  {
    id: '1',
    label: 'Level one 1',
    children: [
      {
        id: '4',
        label: 'Level two 1-1',
        isPenultimate: true,
        children: [
          {
            id: '9',
            label: 'Level three 1-1-1',
          },
          {
            id: '10',
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Level one 2',
    isPenultimate: true,
    children: [
      {
        id: '5',
        label: 'Level two 2-1',
      },
      {
        id: '6',
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: '3',
    label: 'Level one 3',
    isPenultimate: true,
    children: [
      {
        id: '7',
        label: 'Level two 3-1',
      },
      {
        id: '8',
        label: 'Level two 3-2',
      },
    ],
  },
]
</script>

<style>
.is-penultimate > .el-tree-node__content {
  color: var(--el-color-primary);
}
</style>
