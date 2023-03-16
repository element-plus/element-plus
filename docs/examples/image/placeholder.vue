<template>
  <el-row>
    <el-col :span="12" class="text-center">
      <el-text class="block mb-2">Default</el-text>
      <el-image :src="src" class="w-200px h-200px" />
    </el-col>
    <el-col :span="12" class="text-center">
      <el-text class="block mb-2">Custom</el-text>
      <el-image :src="src" class="w-200px h-200px">
        <template #placeholder>
          <el-icon class="w-100% h-100% text-30px is-loading">
            <Loading />
          </el-icon>
        </template>
      </el-image>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { Loading } from '@element-plus/icons-vue'

const src =
  'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
</script>
