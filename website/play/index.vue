<template>
  <div>
    <el-button @click="visible = true">{{ value1 }}</el-button>
    <el-dialog v-model="visible" :destroy-on-close="false">
      dialog content
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 'TEST',
      visible: false,
    }
  },
}
</script>
