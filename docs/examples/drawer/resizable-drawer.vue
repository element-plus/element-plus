<template>
  <el-radio-group v-model="direction">
    <el-radio value="ltr">left to right</el-radio>
    <el-radio value="rtl">right to left</el-radio>
    <el-radio value="ttb">top to bottom</el-radio>
    <el-radio value="btt">bottom to top</el-radio>
  </el-radio-group>

  <el-button type="primary" style="margin-left: 16px" @click="visible = true">
    Open a resizable Drawer
  </el-button>

  <el-drawer v-model="visible" :direction="direction" resizable>
    <template #header="{ titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
    </template>
    This is drawer content.
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { DrawerProps } from 'element-plus'

const visible = ref(false)
const direction = ref<DrawerProps['direction']>('rtl')
</script>
