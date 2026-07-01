<template>
  <el-button plain @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElButton, ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.confirm(
    ({ confirm, cancel, close }) => {
      return h('div', [
        h(
          'p',
          { style: 'margin-bottom: 8px' },
          'Custom buttons with MessageBox action handlers'
        ),
        h(
          ElButton,
          {
            type: 'primary',
            onClick: () => {
              confirm()
            },
          },
          () => 'Resolve'
        ),
        h(
          ElButton,
          {
            type: 'danger',
            onClick: () => {
              cancel()
            },
          },
          () => 'Reject'
        ),
        h(
          ElButton,
          {
            onClick: () => {
              close()
            },
          },
          () => 'Close'
        ),
      ])
    },
    {
      title: 'Message',
      showConfirmButton: false,
      showCancelButton: false,
      distinguishCancelAndClose: true,
    }
  )
    .then((action) => {
      ElMessage({
        type: 'success',
        message: `resolved: ${action}`,
      })
    })
    .catch((reason) => {
      ElMessage({
        type: 'error',
        message: `rejected: ${reason}`,
      })
    })
}
</script>
