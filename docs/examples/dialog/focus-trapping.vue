<template>
  <el-button text @click="dialogVisible = true">
    Click to open the Dialog
  </el-button>

  <el-text tag="p" class="block my-2">
    Close dialog and the input will be focused
  </el-text>
  <el-input ref="inputRef" placeholder="Please input" />

  <el-dialog
    v-model="dialogVisible"
    destroy-on-close
    title="Tips"
    width="30%"
    @close-auto-focus="handleCloseAutoFocus"
  >
    <el-text>This is a message</el-text>
    <el-divider />
    <el-input placeholder="Initially focused" />
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
import { ElInput } from 'element-plus'

const dialogVisible = ref(false)
const inputRef = ref<InstanceType<typeof ElInput>>()

const handleCloseAutoFocus = () => {
  inputRef.value?.focus()
}
</script>
