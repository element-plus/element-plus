<template>
  <el-table :data="tableData" show-overflow-tooltip style="width: 100%">
    <el-table-column
      property="address"
      label="simple formatter"
      width="240"
      :tooltip-formatter="(row) => `${row.address}: formatter`"
    />
    <el-table-column
      property="tags"
      label="formatter object"
      width="240"
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
    <el-table-column
      property="url"
      label="with vnode"
      width="240"
      :tooltip-formatter="withVNode"
    />
  </el-table>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElLink, ElTable } from 'element-plus'

const tableData = [
  {
    address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
    tags: ['Office', 'Home', 'Park', 'Garden'],
    url: 'https://github.com/element-plus/element-plus/issues',
  },
  {
    address: '760 A Street, South Frankfield, Illinois',
    tags: ['error', 'warning', 'success', 'info'],
    url: 'https://github.com/element-plus/element-plus/pulls',
  },
  {
    address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
    tags: ['one', 'two', 'three', 'four', 'five'],
    url: 'https://github.com/element-plus/element-plus/discussions',
  },
  {
    address: '23618 Windsor Drive, West Ricardoview, Idaho',
    tags: ['blue', 'white', 'dark', 'gray', 'red', 'bright'],
    url: 'https://github.com/element-plus/element-plus/actions',
  },
]

const withVNode = (_row: string, _column: any, url: string) => {
  return h(ElLink, { type: 'primary', href: url }, () => h('span', null, url))
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
