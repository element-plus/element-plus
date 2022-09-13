<template>
  <el-button text @click="dialogVisible = true"
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
    @close-auto-focus="handleCloseAutoFocus"
  >
    <span>This is a message</span>
    <el-divider />
    <el-input placeholder="Initially focused" />
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
import { ElInput } from 'element-plus'

const dialogVisible = ref(false)
const inputRef = ref<InstanceType<typeof ElInput>>()

const handleCloseAutoFocus = () => {
  inputRef.value?.focus()
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
