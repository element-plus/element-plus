<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
export default defineComponent({
  setup() {
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
        .catch((action) => {
          ElMessage({
            type: 'info',
            message:
              action === 'cancel'
                ? 'Changes discarded. Proceeding to a new route.'
                : 'Stay in the current route',
          })
        })
    }

    return {
      open,
    }
  },
})
</script>
