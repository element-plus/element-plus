<template>
  <el-button plain @click="visible = true">Open a draggable Drawer</el-button>
  <el-drawer v-model="visible" draggable>
    <template #header="{ titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
    </template>
    This is drawer content.
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
