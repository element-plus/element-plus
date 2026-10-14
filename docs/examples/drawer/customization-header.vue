<template>
  <el-button @click="visible = true">
    Open Drawer with customized header
  </el-button>
  <el-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    This is drawer content.
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(false)
</script>
