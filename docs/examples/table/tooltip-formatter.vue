<template>
  <el-row :gutter="20">
    <el-col :lg="8" :sm="8">
      <p>simple formatter</p>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          property="address"
          label="simple formatter"
          width="240"
          show-overflow-tooltip
          :tooltip-formatter="(row) => `${row.address}: formatter`"
        />
      </el-table>
    </el-col>
    <el-col :lg="8" :sm="8">
      <p>formatter object</p>
      <el-table :data="tableData2" style="width: 100%">
        <el-table-column
          property="tags"
          label="format tags"
          width="240"
          show-overflow-tooltip
          :tooltip-formatter="(row) => row.tags.join(', ')"
        >
          <template #default="{ row }">
            <el-tag
              v-for="tag in row.tags"
              :key="tag"
              class="tag-item"
              type="primary"
            >
              {{ tag }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :lg="8" :sm="8">
      <p>with vnode</p>
      <el-table :data="tableData3" style="width: 100%">
        <el-table-column
          property="url"
          label="element-plus github"
          width="240"
          show-overflow-tooltip
          :tooltip-formatter="withVNode"
        />
      </el-table>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElLink, ElTable } from 'element-plus'

const tableData = [
  { address: 'Lohrbergstr. 86c, Süd Lilli, Saarland' },
  { address: '760 A Street, South Frankfield, Illinois' },
  { address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen' },
  { address: '23618 Windsor Drive, West Ricardoview, Idaho' },
]

const tableData2 = [
  {
    tags: ['Office', 'Home', 'Park', 'Garden'],
  },
  {
    tags: ['error', 'warning', 'success', 'info'],
  },
  {
    tags: ['one', 'two', 'three', 'four', 'five'],
  },
  {
    tags: ['blue', 'white', 'dark', 'gray', 'red', 'bright'],
  },
]

const tableData3 = [
  {
    url: 'https://github.com/element-plus/element-plus/issues',
  },
  {
    url: 'https://github.com/element-plus/element-plus/pulls',
  },
  {
    url: 'https://github.com/element-plus/element-plus/discussions',
  },
  {
    url: 'https://github.com/element-plus/element-plus/actions',
  },
]

const withVNode = (_row: string, _column: any, url: string) => {
  return h(ElLink, { type: 'primary', href: url }, url)
}
</script>

<style scoped>
p {
  margin: 10px;
  padding: 0;
}
.tag-item + .tag-item {
  margin-left: 5px;
}
</style>
