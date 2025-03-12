<template>
  <div
    style="background-color: rgb(240, 242, 245); padding: 20px"
    class="flex flex-wrap gap-4"
  >
    <el-card style="width: 480px" shadow="always" :border="false"
      >Always</el-card
    >
    <el-card style="width: 480px" shadow="hover" :border="false">Hover</el-card>
    <el-card style="width: 480px" shadow="never" :border="false">Never</el-card>
  </div>
</template>
