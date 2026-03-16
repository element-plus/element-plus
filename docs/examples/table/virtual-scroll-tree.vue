<template>
  <div>
    <div style="margin-bottom: 20px">
      <span style="margin-right: 20px"
        >Total rows: {{ getTotalRows(tableData) }}</span
      >
      <el-button @click="loadTreeData(100)">Load 100 parent nodes</el-button>
      <el-button @click="loadTreeData(500)">Load 500 parent nodes</el-button>
      <el-button @click="loadTreeData(1000)">Load 1,000 parent nodes</el-button>
    </div>
    <el-table
      :data="tableData"
      :use-virtual="true"
      :height="500"
      :row-height="50"
      :excess-rows="5"
      row-key="id"
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55" :selectable="selectable" />
      <el-table-column prop="customIndex" width="80">
        <template #default="scope">
          {{ scope.treeNode.level ? scope.treeNode.childIndex + 1 : '' }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="300" />
      <el-table-column prop="date" label="Date" width="200" />
      <el-table-column prop="status" label="Status" width="150">
        <template #default="scope">
          <el-tag :type="scope.row.status === 'Active' ? 'success' : 'info'">
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="Description" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface TreeRow {
  id: string
  name: string
  date: string
  status: string
  description: string
  children?: TreeRow[]
}

const tableData = ref<TreeRow[]>([])

const getTotalRows = (data: TreeRow[]): number => {
  let count = data.length
  data.forEach((item) => {
    if (item.children && item.children.length > 0) {
      count += getTotalRows(item.children)
    }
  })
  return count
}

const loadTreeData = (parentCount: number) => {
  const data: TreeRow[] = []
  for (let i = 0; i < parentCount; i++) {
    const parent: TreeRow = {
      id: `${i + 1}`,
      name: `Parent ${i + 1}`,
      date: new Date(
        Date.now() - Math.random() * 10000000000
      ).toLocaleDateString(),
      status: Math.random() > 0.5 ? 'Active' : 'Inactive',
      description: `This is parent node ${i + 1}`,
      children: [],
    }

    // Add 3-5 children for each parent
    const childCount = Math.floor(Math.random() * 3) + 3
    for (let j = 0; j < childCount; j++) {
      parent.children!.push({
        id: `${i + 1}-${j + 1}`,
        name: `Child ${i + 1}-${j + 1}`,
        date: new Date(
          Date.now() - Math.random() * 10000000000
        ).toLocaleDateString(),
        status: Math.random() > 0.5 ? 'Active' : 'Inactive',
        description: `This is child node ${i + 1}-${j + 1}`,
      })
    }

    data.push(parent)
  }
  tableData.value = data
}

function selectable(row: TreeRow) {
  return row.status === 'Active'
}

// Load initial data
loadTreeData(100)
</script>
