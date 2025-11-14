<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div>
    <el-button color="#626aef" :dark="isDark">Default</el-button>
    <el-button color="#626aef" :dark="isDark" plain>Plain</el-button>

    <el-button color="#626aef" :dark="isDark" disabled>Disabled</el-button>
    <el-button color="#626aef" :dark="isDark" disabled plain>
      Disabled Plain
    </el-button>
  </div>
</template>
