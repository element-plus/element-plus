<template>
  <el-button text @click="centerDialogVisible = true">
    Click to open Dialog
  </el-button>

  <el-dialog
    v-model="centerDialogVisible"
    title="Notice"
    width="30%"
    destroy-on-close
    center
  >
    <el-text>
      Notice: before dialog gets opened for the first time this node and the one
      bellow will not be rendered<br />
      <el-text tag="strong">Extra content (Not rendered)</el-text>
    </el-text>
    <template #footer>
      <el-button @click="centerDialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="centerDialogVisible = false">
        Confirm
      </el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>
