<template>
  <div class="custom-tree-container">
    <p>Using render-content</p>
    <el-tree
      ref="treeRef1"
      :data="dataSource1"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent"
    />
    <p>Using scoped slot</p>
    <el-tree
      ref="treeRef2"
      :data="dataSource2"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <a @click="append(data, false)"> Append </a>
            <a style="margin-left: 8px" @click="remove(node, data, false)">
              Delete
            </a>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTree } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}
let id = 1000
const treeRef1 = ref<InstanceType<typeof ElTree>>()
const treeRef2 = ref<InstanceType<typeof ElTree>>()

const append = (data: Tree, isTreeOne: boolean) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (isTreeOne) {
    treeRef1.value?.append(newChild, data)
  } else {
    treeRef2.value?.append(newChild, data)
  }
}

const remove = (node: Node, data: Tree, isTreeOne: boolean) => {
  if (isTreeOne) {
    treeRef1.value?.remove(data)
  } else {
    treeRef2.value?.remove(data)
  }
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
    'span',
    {
      class: 'custom-tree-node',
    },
    h('span', null, node.label),
    h(
      'span',
      null,
      h(
        'a',
        {
          onClick: () => append(data, true),
        },
        'Append '
      ),
      h(
        'a',
        {
          style: 'margin-left: 8px',
          onClick: () => remove(node, data, true),
        },
        'Delete'
      )
    )
  )
}

const dataSource1 = ref<Tree[]>([
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
const dataSource2 = ref<Tree[]>([
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

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
