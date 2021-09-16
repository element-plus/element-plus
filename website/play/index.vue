<template>
  <el-alert title="success alert" type="success" show-icon> </el-alert>
  <el-alert title="info alert" type="info" show-icon> </el-alert>
  <el-alert title="warning alert" type="warning" show-icon desc> </el-alert>
  <el-alert title="error alert" type="error" show-icon> </el-alert>
  <el-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon
  >
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon
  >
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon
  >
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon
  >
  </el-alert>

  <el-alert title="unclosable alert" type="success" :closable="false">
  </el-alert>
  <el-alert title="customized close-text" type="info" close-text="Gotcha">
  </el-alert>
  <el-alert title="alert with callback" type="warning" @close="hello">
  </el-alert>
</template>
