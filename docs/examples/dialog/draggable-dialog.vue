<template>
  <el-button plain @click="dialogVisible = true">
    Open a draggable Dialog
  </el-button>

  <el-button plain @click="dialogOverflowVisible = true">
    Open a overflow draggable Dialog
  </el-button>

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
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const dialogOverflowVisible = ref(false)
</script>
