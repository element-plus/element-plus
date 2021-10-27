<template>
  <div class="demo-type">
    <div>
      <el-avatar :icon="UserFilled"></el-avatar>
    </div>
    <div>
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    </div>
    <div>
      <el-avatar> user </el-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons'
</script>
