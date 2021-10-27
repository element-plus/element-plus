<template>
  <el-dropdown>
    <el-button type="primary">
      Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dropdown split-button type="primary" @click="handleClick">
    Dropdown List
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowDown } from '@element-plus/icons'

export default defineComponent({
  components: {
    ArrowDown,
  },
  setup() {
    const handleClick = () => {
      alert('button click')
    }
    return {
      handleClick,
    }
  },
})
</script>
