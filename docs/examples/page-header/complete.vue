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

    <el-descriptions :column="3" size="small mt-4">
      <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
      <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
      <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
      <el-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Address"
        >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
    <p class="mt-4 text-sm">
      Element Plus 团队在正常情况下使用 每周 发布策略， 但关键的 bug
      修复将需要热修复，所以实际发布版本 可能 每周超过 1 次。
      在这个页面上，你只能看到我们最近更新的 30 条。
    </p>
  </el-page-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio1 = ref('')
</script>
