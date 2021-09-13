<template>
  <el-button type="text" @click="centerDialogVisible = true"
    >Click to open the Dialog</el-button
  >

  <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span
      >It should be noted that the content will not be aligned in center by
      default</span
    >
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      centerDialogVisible: ref(false),
    }
  },
})
</script>
