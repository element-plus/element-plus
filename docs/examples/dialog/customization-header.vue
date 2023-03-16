<template>
  <el-button @click="visible = true">
    Open Dialog with customized header
  </el-button>
  <el-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <el-row>
        <el-col :span="16">
          <el-text :id="titleId" tag="h4" :class="titleClass">
            This is a custom header!
          </el-text>
        </el-col>
        <el-col :span="8" class="text-right">
          <el-button type="danger" @click="close">
            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
            Close
          </el-button>
        </el-col>
      </el-row>
    </template>
    This is dialog content.
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(false)
</script>
