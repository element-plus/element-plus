<template>
  <el-divider class="item" />
  <el-divider class="item" @click="handleClick">click me</el-divider>
  <el-divider class="item" content-position="left">清风徐来</el-divider>
  <el-divider class="item" content-position="right">水波不兴</el-divider>
  <el-divider class="item"><i class="el-icon-mobile-phone"></i></el-divider>
  <div class="item">
    <span>雨纷纷</span>
    <el-divider direction="vertical" />
    <span>旧故里</span>
    <el-divider direction="vertical" />
    <span>草木深</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Basic',
  setup() {
    const handleClick = () => alert('click')
    return {
      handleClick,
    }
  },
})
</script>

<style scoped>
.item {
  margin-bottom: 40px;
}
</style>
