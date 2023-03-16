<template>
  <el-main class="affix-container">
    <el-affix target=".affix-container" :offset="80">
      <el-button type="primary">Target container</el-button>
    </el-affix>
  </el-main>
</template>

<style scoped>
.affix-container {
  display: block;
  text-align: center;
  height: 400px;
  padding: 0;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
}
</style>
