<template>
  <el-menu
    ellipsis
    class="el-menu-ellipsis-demo"
    mode="horizontal"
    :ellipsis-popper-offset="10"
    :ellipsis-icon="MoreFilled"
    style="width: 400px"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2" :popper-offset="10">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@element-plus/icons-vue'
</script>
