<template>
  <el-radio-group v-model="direction" @change="drawer = true">
    <el-radio-button value="ttb">top</el-radio-button>
    <el-radio-button value="rtl">right</el-radio-button>
    <el-radio-button value="btt">bottom</el-radio-button>
    <el-radio-button value="ltr">left</el-radio-button>
  </el-radio-group>

  <el-drawer v-model="drawer" :direction="direction" resizable>
    This is drawer content.
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { DrawerProps } from 'element-plus'

const direction = ref<DrawerProps['direction']>()
const drawer = ref(false)
</script>
