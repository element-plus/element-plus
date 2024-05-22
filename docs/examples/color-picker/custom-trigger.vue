<template>
  <el-color-picker v-model="color">
    <el-button :color="color">trigger</el-button>
  </el-color-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('rgba(19, 206, 102, 0.8)')
</script>
