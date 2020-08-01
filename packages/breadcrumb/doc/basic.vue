<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item to="/">First</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">Second</a></el-breadcrumb-item>
    <el-breadcrumb-item>Third</el-breadcrumb-item>
    <el-breadcrumb-item>Forth</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Basic',
})
</script>
