<template>
  <el-progress :percentage="50"></el-progress>
  <el-progress :percentage="100" :format="format"></el-progress>
  <el-progress :percentage="100" status="success"></el-progress>
  <el-progress :percentage="100" status="warning"></el-progress>
  <el-progress :percentage="50" status="exception"></el-progress>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const format = (percentage) =>
      percentage === 100 ? 'Full' : `${percentage}%`
    return {
      format,
    }
  },
})
</script>
