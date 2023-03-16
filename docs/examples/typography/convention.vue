<template>
  <el-table :data="fontSizes">
    <el-table-column label="Level">
      <template #default="scope">
        <el-text :style="`font-size: var(--el-font-size-${scope.row.type})`">
          {{ scope.row.level }}
        </el-text>
      </template>
    </el-table-column>
    <el-table-column label="Font Size">
      <template #default="scope">
        <el-text :style="`font-size: var(--el-font-size-${scope.row.type})`">
          {{
            useCssVar(`--el-font-size-${scope.row.type}`).value +
            ' ' +
            formatType(scope.row.type)
          }}
        </el-text>
      </template>
    </el-table-column>
    <el-table-column label="Demo">
      <template #default="scope">
        <el-text :style="`font-size: var(--el-font-size-${scope.row.type})`">
          Build with Element
        </el-text>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { useCssVar } from '@vueuse/core'

const fontSizes = [
  {
    level: 'Supplementary text',
    type: 'extra-small',
  },
  {
    level: 'Body (small)',
    type: 'small',
  },
  {
    level: 'Body',
    type: 'base',
  },
  {
    level: 'Small Title',
    type: 'medium',
  },
  {
    level: 'Title',
    type: 'large',
  },
  {
    level: 'Main Title',
    type: 'extra-large',
  },
]

function formatType(type: string) {
  return type
    .split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ')
}
</script>
