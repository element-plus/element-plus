<template>
  <el-button type="text" @click="dialogVisible = true"
    >click to open the Dialog</el-button
  >

  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :draggable="true"
    :resettable="true"
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

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const dialogVisible = ref(false)

    return {
      dialogVisible,
    }
  },
})
</script>
