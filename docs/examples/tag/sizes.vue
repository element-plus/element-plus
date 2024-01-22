<template>
  <el-row>
    <el-tag class="mx-1" size="large">Large</el-tag>
    <el-tag class="mx-1">Default</el-tag>
    <el-tag class="mx-1" size="small">Small</el-tag>
  </el-row>

  <el-row class="mt-4">
    <el-tag class="mx-1" size="large" closable>Large</el-tag>
    <el-tag class="mx-1" closable>Default</el-tag>
    <el-tag class="mx-1" size="small" closable>Small</el-tag>
  </el-row>
</template>
<style scoped>
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.mt-4 {
  margin-top: 1rem;
}
</style>
