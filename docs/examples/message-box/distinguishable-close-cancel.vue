<template>
  <el-button plain @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'

const open = () => {
  ElMessageBox.confirm(
    'You have unsaved changes, save and proceed?',
    'Confirm',
    {
      distinguishCancelAndClose: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Discard Changes',
    }
  )
    .then(() => {
      ElMessage({
        type: 'info',
        message: 'Changes saved. Proceeding to a new route.',
      })
    })
    .catch((action: Action) => {
      ElMessage({
        type: 'info',
        message:
          action === 'cancel'
            ? 'Changes discarded. Proceeding to a new route.'
            : 'Stay in the current route',
      })
    })
}
</script>
