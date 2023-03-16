<template>
  <el-table :data="borders">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="thickness" label="Thickness" />
    <el-table-column label="Demo">
      <template #default="scope">
        <el-divider
          :style="
            scope.row.name === 'Solid'
              ? 'border-top: 1px solid var(--el-border-color)'
              : 'border-top: 1px dashed var(--el-border-color)'
          "
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const borders = [
  {
    name: 'Solid',
    thickness: '1px',
  },
  {
    name: 'Dashed',
    thickness: '2px',
  },
]
</script>
