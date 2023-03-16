<template>
  <el-row>
    <el-col
      :span="8"
      class="text-center"
      style="border-right: 1px solid var(--el-border-color)"
    >
      <el-avatar :icon="UserFilled" />
    </el-col>
    <el-col
      :span="8"
      class="text-center"
      style="border-right: 1px solid var(--el-border-color)"
    >
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </el-col>
    <el-col :span="8" class="text-center">
      <el-avatar> user </el-avatar>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
</script>
