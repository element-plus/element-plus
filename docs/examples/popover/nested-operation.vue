<template>
  <el-popover :visible="visible" placement="top" :width="160">
    <el-text tag="p">Are you sure to delete this?</el-text>
    <el-row class="justify-end">
      <el-button size="small" text @click="visible = false">cancel</el-button>
      <el-button size="small" type="primary" @click="visible = false">
        confirm
      </el-button>
    </el-row>
    <template #reference>
      <el-button @click="visible = true">Delete</el-button>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
