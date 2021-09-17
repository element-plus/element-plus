<template>
  <div class="demo-progress">
    <el-progress :percentage="50" />
    <el-progress :percentage="100" :format="format" />
    <el-progress :percentage="100" status="success" />
    <el-progress :percentage="100" status="warning" />
    <el-progress :percentage="50" status="exception" />
  </div>
</template>

<script lang="ts">
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
