<template>
  <el-page-header @back="onBack">
    <template #breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: './page-header.html' }">
          homepage
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <el-link href="./page-header.html">route 1</el-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>route 2</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #content>
      <el-row class="items-center">
        <el-avatar
          class="mr-3"
          :size="32"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <el-text class="text-large font-600 mr-3"> Title </el-text>
        <el-text
          class="text-sm mr-2"
          style="color: var(--el-text-color-regular)"
        >
          Sub title
        </el-text>
        <el-tag>Default</el-tag>
      </el-row>
    </template>
    <template #extra>
      <el-button>Print</el-button>
      <el-button type="primary" class="ml-2">Edit</el-button>
    </template>

    <el-descriptions :column="3" size="small" class="mt-4">
      <el-descriptions-item label="Username">
        kooriookami
      </el-descriptions-item>
      <el-descriptions-item label="Telephone">
        18100000000
      </el-descriptions-item>
      <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
      <el-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Address">
        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
    <el-text tag="p" class="mt-4 text-sm">
      Element Plus team uses <el-text tag="b">weekly</el-text> release strategy
      under normal circumstance, but critical bug fixes would require hotfix so
      the actual release number <el-text tag="b">could be</el-text> more than 1
      per week.
    </el-text>
  </el-page-header>
</template>

<script lang="ts" setup>
import { ElNotification as notify } from 'element-plus'

const onBack = () => {
  notify('Back')
}
</script>
