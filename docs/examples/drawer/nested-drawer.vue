<template>
  <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </el-button>

  <el-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
    <el-button @click="innerDrawer = true">Click me!</el-button>
    <el-drawer
      v-model="innerDrawer"
      title="I'm inner Drawer"
      :append-to-body="true"
      :before-close="handleClose"
    >
      <el-text tag="p">_(:зゝ∠)_</el-text>
    </el-drawer>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('You still have unsaved data, proceed?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
