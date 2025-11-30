<template>
  <div>
    <el-radio-group v-model="iconPlacement" style="margin-bottom: 20px">
      <el-radio-button value="">default</el-radio-button>
      <el-radio-button value="title">title</el-radio-button>
      <el-radio-button value="message">message</el-radio-button>
    </el-radio-group>

    <div>
      <el-button plain @click="open">Click to open Message Box</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { markRaw, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'

const iconPlacement = ref('')

const open = () => {
  ElMessageBox.confirm(
    'It will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      icon: markRaw(Delete),
      iconPlacement: iconPlacement.value,
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
