<template>
  <el-radio-group v-model="direction">
    <el-radio label="ltr">left to right</el-radio>
    <el-radio label="rtl">right to left</el-radio>
    <el-radio label="ttb">top to bottom</el-radio>
    <el-radio label="btt">bottom to top</el-radio>
  </el-radio-group>

  <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </el-button>

  <el-drawer
    v-model="drawer"
    title="I am the title"
    :direction="direction"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMessageBox } from 'element-plus'

export default defineComponent({
  setup() {
    const drawer = ref(false)
    const direction = ref('rtl')
    const handleClose = (done) => {
      ElMessageBox.confirm('Are you sure you want to close this?')
        .then(() => {
          done()
        })
        .catch(() => {
          // catch error
        })
    }
    return {
      drawer,
      direction,
      handleClose,
    }
  },
})
</script>
