<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-sub-menu label="Action 3">
          <el-dropdown-item>Action 3-1</el-dropdown-item>
          <el-dropdown-item>Action 3-2</el-dropdown-item>
        </el-dropdown-sub-menu>
        <el-dropdown-sub-menu label="Action 4" divided>
          <el-dropdown-sub-menu label="Action 4-1">
            <el-dropdown-item>Action 4-1-1</el-dropdown-item>
            <el-dropdown-item>Action 4-1-2</el-dropdown-item>
          </el-dropdown-sub-menu>
          <el-dropdown-item>Action 4-2</el-dropdown-item>
        </el-dropdown-sub-menu>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
