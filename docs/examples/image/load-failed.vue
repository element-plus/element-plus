<template>
  <div class="demo-image__error">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-image></el-image>
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
      <el-image>
        <template #error>
          <div class="image-slot">
            <el-icon><icon-picture /></el-icon>
          </div>
        </template>
      </el-image>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Picture as IconPicture } from '@element-plus/icons'
</script>
