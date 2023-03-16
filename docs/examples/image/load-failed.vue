<template>
  <el-row>
    <el-col :span="12" class="text-center">
      <el-text class="block mb-2">Default</el-text>
      <el-image class="w-200px h-200px" />
    </el-col>
    <el-col :span="12" class="text-center">
      <el-text class="block mb-2">Custom</el-text>
      <el-image class="w-200px h-200px">
        <template #error>
          <el-icon
            class="w-100% h-100% text-30px"
            style="
              color: var(--el-text-color-secondary);
              background: var(--el-fill-color-light);
            "
          >
            <icon-picture />
          </el-icon>
        </template>
      </el-image>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { Picture as IconPicture } from '@element-plus/icons-vue'
</script>
