<template>
  <div class="flex flex-wrap gap-1">
    <el-button class="!ml-0" plain @click="dialogVisible = true">
      Open a draggable Dialog
    </el-button>
    <el-button class="!ml-0" plain @click="dialogOverflowVisible = true">
      Open a overflow draggable Dialog
    </el-button>
    <el-button class="!ml-0" plain @click="customDraggingVisible = true">
      Open a custom dragging style Dialog
    </el-button>
  </div>

  <el-dialog v-model="dialogVisible" title="Tips" width="500" draggable>
    <span>It's a draggable Dialog</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="dialogOverflowVisible"
    title="Tips"
    width="500"
    draggable
    overflow
  >
    <span>It's a overflow draggable Dialog</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogOverflowVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogOverflowVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="customDraggingVisible"
    class="custom-dragging-style"
    title="Custom Dragging Style"
    width="500"
    draggable
  >
    <span
      >This dialog has custom dragging styles. Try dragging it to see the
      effects!</span
    >
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="customDraggingVisible = false">Cancel</el-button>
        <el-button type="primary" @click="customDraggingVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const dialogOverflowVisible = ref(false)
const customDraggingVisible = ref(false)
</script>

<style scoped>
:global(.custom-dragging-style.is-dragging) {
  border: 2px dashed var(--el-color-primary);
  opacity: 0.65;
}
</style>
