<template>
  <el-button plain @click="open"> Click to open the Message Box </el-button>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    modal: false,
    modalPenetrable: true,
  })
}
</script>
