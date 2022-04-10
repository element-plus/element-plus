<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div class="flex">
    <el-button color="#626aef" :dark="isDark">Light</el-button>
    <el-button color="#626aef" :dark="isDark" plain>Light</el-button>

    <el-button color="#626aef" :dark="isDark" disabled>Disabled</el-button>
    <el-button color="#626aef" :dark="isDark" disabled plain
      >Disabled</el-button
    >
  </div>
</template>
