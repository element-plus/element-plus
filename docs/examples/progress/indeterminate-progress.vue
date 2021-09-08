<template>
  <el-progress :percentage="50" :indeterminate="true"></el-progress>
  <el-progress
    :percentage="100"
    :format="format"
    :indeterminate="true"
  ></el-progress>
  <el-progress
    :percentage="100"
    status="success"
    :indeterminate="true"
    :duration="5"
  ></el-progress>
  <el-progress
    :percentage="100"
    status="warning"
    :indeterminate="true"
    :duration="1"
  ></el-progress>
  <el-progress
    :percentage="50"
    status="exception"
    :indeterminate="true"
  ></el-progress>
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
