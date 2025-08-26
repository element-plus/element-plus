<template>
  <el-button type="text" @click="dialogVisible = true"
    >click to open the Dialog</el-button
  >

  <el-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button style="margin-right: 10px" @click="dialogVisible = false"
          >Cancel</el-button
        >
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(true)
</script>
