<template>
  <el-text class="w-100px" truncated>Self element set width 100px</el-text>
  <el-row>
    <el-col :span="4">
      <el-text truncated>Squeezed by parent element</el-text>
    </el-col>
  </el-row>
</template>
