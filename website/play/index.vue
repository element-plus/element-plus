<template>
  <div>
    <el-button @click="visible = true">{{ value1 }}</el-button>
    <el-dialog v-model="visible" :destroy-on-close="false">
      dialog content
      <el-button @click="innerVisible = true">
        inner button
      </el-button>
      <el-dialog v-model="innerVisible" destroy-on-close>
        I am inner dialog
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 'TEST',
      visible: false,
      innerVisible: false,
    }
  },
}
</script>
