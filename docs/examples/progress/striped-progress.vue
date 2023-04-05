<template>
  <div class="demo-progress">
    <el-progress :percentage="50" :stroke-width="15" striped />
    <el-progress
      :percentage="100"
      :stroke-width="15"
      status="success"
      striped
    />
    <el-progress :percentage="70" :stroke-width="15" status="warning" striped />
    <el-progress
      :percentage="40"
      :stroke-width="15"
      status="exception"
      striped
    />
  </div>
</template>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
