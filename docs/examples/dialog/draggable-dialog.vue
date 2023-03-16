<template>
  <el-button text @click="dialogVisible = true">
    Click to open Dialog
  </el-button>

  <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <el-text>It's a draggable Dialog</el-text>
    <template #footer>
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false">
        Confirm
      </el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
