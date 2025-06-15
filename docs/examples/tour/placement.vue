<template>
  <el-button ref="btnRef" type="primary" @click="open = true">
    Begin Tour
  </el-button>

  <el-tour v-model="open">
    <el-tour-step
      title="Center"
      description="Displayed in the center of screen."
    />
    <el-tour-step
      title="Right"
      description="On the right of target."
      placement="right"
      :target="btnRef?.$el"
    />
    <el-tour-step
      title="Top"
      description="On the top of target."
      placement="top"
      :target="btnRef?.$el"
    />
  </el-tour>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonInstance } from 'element-plus'

const btnRef = ref<ButtonInstance>()

const open = ref(false)
</script>
