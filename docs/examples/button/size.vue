<template>
  <div class="flex flex-wrap items-center mb-4">
    <el-button size="large">Large</el-button>
    <el-button>Default</el-button>
    <el-button size="small">Small</el-button>
    <el-button size="large" :icon="Search">Search</el-button>
    <el-button :icon="Search">Search</el-button>
    <el-button size="small" :icon="Search">Search</el-button>
  </div>
  <div class="flex flex-wrap items-center mb-4">
    <el-button size="large" round>Large</el-button>
    <el-button round>Default</el-button>
    <el-button size="small" round>Small</el-button>
    <el-button size="large" :icon="Search" round>Search</el-button>
    <el-button :icon="Search" round>Search</el-button>
    <el-button size="small" :icon="Search" round>Search</el-button>
  </div>
  <div class="flex flex-wrap items-center">
    <el-button :icon="Search" size="large" circle />
    <el-button :icon="Search" circle />
    <el-button :icon="Search" size="small" circle />
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
