<template>
  <el-steps
    class="mb-4"
    style="max-width: 600px"
    :space="200"
    :active="1"
    simple
  >
    <el-step title="Step 1" :icon="Edit" />
    <el-step title="Step 2" :icon="UploadFilled" />
    <el-step title="Step 3" :icon="Picture" />
  </el-steps>

  <el-steps style="max-width: 600px" :active="1" finish-status="success" simple>
    <el-step title="Step 1" />
    <el-step title="Step 2" />
    <el-step title="Step 3" />
  </el-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
</script>
