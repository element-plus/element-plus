<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('409EFF')
</script>

<template>
  <div class="demo-color-sizes">
    <el-color-picker v-model="color" size="large" />
    <el-color-picker v-model="color" />
    <el-color-picker v-model="color" size="small" />
  </div>
</template>

<style>
.demo-color-sizes .el-color-picker:not(:last-child) {
  margin-right: 16px;
}
</style>
