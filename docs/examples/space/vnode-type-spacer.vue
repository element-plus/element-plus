<template>
  <el-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <el-button> button {{ i }} </el-button>
    </div>
  </el-space>
</template>

<script lang="ts">
import { h, resolveComponent } from 'vue'
import { ElDivider } from 'element-plus'
export default {
  data() {
    return {
      size: 10,
      spacer: h(ElDivider, { direction: 'vertical' }),
    }
  },
}
</script>
