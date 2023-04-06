<template>
  <el-page-header>
    <template #breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: './page-header.html' }">
          homepage
        </el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="./page-header.html">route 1</a></el-breadcrumb-item
        >
        <el-breadcrumb-item>route 2</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #content>
      <span class="text-lg font-600 mr-3"> Title </span>
    </template>
  </el-page-header>
</template>
<style scoped>
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.font-600 {
  font-weight: 600;
}

.mr-3 {
  margin-right: 0.75rem;
}
</style>
