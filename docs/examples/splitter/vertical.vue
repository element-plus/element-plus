<template>
  <div
    style="height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px"
  >
    <el-splitter layout="vertical">
      <el-splitter-panel>
        <div class="demo-panel">1</div>
      </el-splitter-panel>
      <el-splitter-panel>
        <div class="demo-panel">2</div>
      </el-splitter-panel>
    </el-splitter>
  </div>
</template>

<style scoped>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
