<template>
  <el-button type="primary" @click="open = true">Begin Tour</el-button>

  <el-divider />

  <el-space>
    <el-button id="btn1">Upload</el-button>
    <el-button id="btn2" type="primary">Save</el-button>
    <el-button ref="btnRef" :icon="MoreFilled" />
  </el-space>

  <el-tour v-model="open">
    <el-tour-step
      target="#btn1"
      title="Upload File"
      description="Put you files here."
    />
    <el-tour-step :target="el" title="Save" description="Save your changes" />
    <el-tour-step
      :target="btnRef?.$el"
      title="Other Actions"
      description="Click to see other"
    />
  </el-tour>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
import type { ButtonInstance } from 'element-plus'

const el = () => document.querySelector<HTMLElement>('#btn2')
const btnRef = ref<ButtonInstance>()

const open = ref(false)
</script>
