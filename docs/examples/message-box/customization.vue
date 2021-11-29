<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
export default defineComponent({
  setup() {
    const open = () => {
      ElMessageBox({
        title: 'Message',
        message: h('p', null, [
          h('span', null, 'Message can be '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = 'Loading...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        },
      }).then((action) => {
        ElMessage({
          type: 'info',
          message: `action: ${action}`,
        })
      })
    }

    return {
      open,
    }
  },
})
</script>
