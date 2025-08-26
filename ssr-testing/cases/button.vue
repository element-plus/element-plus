<template>
  <el-row style="margin-block-end: 8px">
    <el-button size="large">Large</el-button>
    <el-button>Default</el-button>
    <el-button size="small">Small</el-button>
    <el-button size="large" :icon="Search">Search</el-button>
    <el-button :icon="Search">Search</el-button>
    <el-button size="small" :icon="Search">Search</el-button>
  </el-row>
  <el-row style="margin-block-end: 8px">
    <el-button size="large" round>Large</el-button>
    <el-button round>Default</el-button>
    <el-button size="small" round>Small</el-button>
    <el-button size="large" :icon="Search" round>Search</el-button>
    <el-button :icon="Search" round>Search</el-button>
    <el-button size="small" :icon="Search" round>Search</el-button>
  </el-row>
  <el-row style="margin-block-end: 8px">
    <el-button :icon="Search" size="large" circle />
    <el-button :icon="Search" circle />
    <el-button :icon="Search" size="small" circle />
  </el-row>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
