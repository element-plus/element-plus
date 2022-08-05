<template>
  <el-page-header :icon="null" content="detail">
    <template #breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: './page-header.html' }"
          >homepage</el-breadcrumb-item
        >
        <el-breadcrumb-item
          ><a href="./page-header.html">route 1</a></el-breadcrumb-item
        >
        <el-breadcrumb-item>route 2</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #content>
      <div class="flex items-center">
        <el-avatar
          class="mr-4"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="text-large font-600 mr-4"> Title </span>
        <span class="text-sm mr-4"> Sub title </span>
        <el-tag type="primary">Default</el-tag>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-radio-group v-model="radio1" size="small">
          <el-radio-button label="Action 1" />
          <el-radio-button label="Action 2" />
        </el-radio-group>
        <el-button type="danger" size="small" class="ml-2">Delete</el-button>
      </div>
    </template>
  </el-page-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio1 = ref('')
</script>
