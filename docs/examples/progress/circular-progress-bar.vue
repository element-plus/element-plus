<template>
  <div class="demo-progress">
    <el-progress type="circle" :percentage="0" />
    <el-progress type="circle" :percentage="25" />
    <el-progress type="circle" :percentage="100" status="success" />
    <el-progress type="circle" :percentage="70" status="warning" />
    <el-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>

<style scoped>
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
