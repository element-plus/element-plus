<template>
  <el-badge :value="12" class="item">
    <el-button size="small">comments</el-button>
  </el-badge>
  <el-badge :value="3" class="item">
    <el-button size="small">replies</el-button>
  </el-badge>
  <el-badge :value="1" class="item" type="primary">
    <el-button size="small">comments</el-button>
  </el-badge>
  <el-badge :value="2" class="item" type="warning">
    <el-button size="small">replies</el-button>
  </el-badge>
</template>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
