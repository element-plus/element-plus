<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div>
    <el-button color="#626aef" :dark="isDark">Default</el-button>
    <el-button color="#626aef" :dark="isDark" plain>Plain</el-button>
    <el-button color="#626aef" :dark="isDark" link>Link</el-button>
    <el-button color="#626aef" :dark="isDark" text>Text</el-button>
    <el-button color="#626aef" :dark="isDark" text bg>Text BG</el-button>

    <el-button color="#626aef" :dark="isDark" disabled>Disabled</el-button>
    <el-button color="#626aef" :dark="isDark" disabled plain>
      Disabled Plain
    </el-button>
    <el-button color="#626aef" :dark="isDark" disabled link>
      Disabled Link
    </el-button>
    <el-button color="#626aef" :dark="isDark" disabled text>
      Disabled Text
    </el-button>
    <el-button color="#626aef" :dark="isDark" disabled text bg>
      Disabled Text BG
    </el-button>
  </div>
</template>
