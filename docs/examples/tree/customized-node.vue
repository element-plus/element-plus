<template>
  <el-text tag="p" size="large" class="my-3">Using render-content</el-text>
  <el-tree
    :data="dataSource"
    show-checkbox
    node-key="id"
    default-expand-all
    :expand-on-click-node="false"
    :render-content="renderContent"
  />
  <el-text tag="p" size="large" class="my-3">Using scoped slot</el-text>
  <el-tree
    :data="dataSource"
    show-checkbox
    node-key="id"
    default-expand-all
    :expand-on-click-node="false"
  >
    <template #default="{ node, data }">
      <el-text class="custom-tree-node">
        <el-text>{{ node.label }}</el-text>
        <el-text>
          <el-link type="primary" :underline="false" @click="append(data)">
            Append
          </el-link>
          <el-link
            type="primary"
            :underline="false"
            style="margin-left: 8px"
            @click="remove(node, data)"
          >
            Delete
          </el-link>
        </el-text>
      </el-text>
    </template>
  </el-tree>
</template>

<script lang="ts" setup>
import { ref, resolveComponent } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}
let id = 1000

const append = (data: Tree) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

const remove = (node: Node, data: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const renderContent = (
  h,
  {
    node,
    data,
    store,
  }: {
    node: Node
    data: Tree
    store: Node['store']
  }
) => {
  return h(
    resolveComponent('el-text'),
    {
      class: 'custom-tree-node',
    },
    h(resolveComponent('el-text'), null, node.label),
    h(
      resolveComponent('el-text'),
      null,
      h(
        resolveComponent('el-link'),
        {
          type: 'primary',
          underline: false,
          onClick: () => append(data),
        },
        'Append '
      ),
      h(
        resolveComponent('el-link'),
        {
          type: 'primary',
          underline: false,
          style: 'margin-left: 8px',
          onClick: () => remove(node, data),
        },
        'Delete'
      )
    )
  )
}

const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
])
</script>

<style scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
