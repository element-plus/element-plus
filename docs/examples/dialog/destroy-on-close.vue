<template>
  <el-button plain @click="centerDialogVisible = true">
    Click to open Dialog
  </el-button>

  <el-dialog
    v-model="centerDialogVisible"
    title="Notice"
    width="500"
    destroy-on-close
    center
  >
    <span>
      Notice: before dialog gets opened for the first time this node and the one
      bellow will not be rendered
    </span>
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>
