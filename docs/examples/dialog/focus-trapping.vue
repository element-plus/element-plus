<template>
  <el-button type="text" @click="dialogVisible = true"
    >click to open the Dialog</el-button
  >

  <div>
    <p>Close dialog and the input will be focused</p>
    <el-input ref="inputRef" placeholder="Please input" />
  </div>

  <el-dialog
    v-model="dialogVisible"
    destroy-on-close
    title="Tips"
    width="30%"
    :before-close="handleClose"
    @close-auto-focus="handleCloseAutoFocus"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { ElInput } from 'element-plus'

const dialogVisible = ref(false)
const inputRef = ref<InstanceType<typeof ElInput>>()

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
      dialogVisible.value = false
    })
    .catch(() => {
      // catch error
    })
}

const handleCloseAutoFocus = () => {
  inputRef.value?.focus()
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
