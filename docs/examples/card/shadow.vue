<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card shadow="always"> Always </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover"> Hover </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="never"> Never </el-card>
    </el-col>
  </el-row>
</template>
