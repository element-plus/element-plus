<template>
  <div class="demo-progress">
    <el-progress :percentage="50" reverse />
    <el-progress :percentage="30" status="warning" reverse />
    <el-progress :percentage="100" status="success" reverse />
    <el-progress :percentage="70" status="exception" reverse />

    <el-progress type="circle" :percentage="50" reverse />
    <el-progress type="circle" :percentage="30" status="warning" reverse />
    <el-progress type="circle" :percentage="100" status="success" reverse />
    <el-progress type="circle" :percentage="70" status="exception" reverse />

    <el-progress type="dashboard" :percentage="50" reverse />
    <el-progress type="dashboard" :percentage="30" status="warning" reverse />
    <el-progress type="dashboard" :percentage="100" status="success" reverse />
    <el-progress type="dashboard" :percentage="70" status="exception" reverse />
  </div>
</template>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .el-progress--circle,
.demo-progress .el-progress--dashboard {
  margin-right: 15px;
}
</style>
