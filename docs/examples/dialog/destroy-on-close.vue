<template>
  <el-button type="text" @click="centerDialogVisible = true"
    >Click to open Dialog</el-button
  >

  <el-dialog
    v-model="centerDialogVisible"
    title="Notice"
    width="30%"
    destroy-on-close
    center
  >
    <span
      >Notice: before dialog gets opened for the first time this node and the
      one bellow will not be rendered</span
    >
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
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
