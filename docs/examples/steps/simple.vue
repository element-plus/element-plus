<template>
  <el-steps :space="200" :active="1" simple>
    <el-step title="Step 1" icon="el-icon-edit"></el-step>
    <el-step title="Step 2" icon="el-icon-upload"></el-step>
    <el-step title="Step 3" icon="el-icon-picture"></el-step>
  </el-steps>

  <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
    <el-step title="Step 1"></el-step>
    <el-step title="Step 2"></el-step>
    <el-step title="Step 3"></el-step>
  </el-steps>
</template>
