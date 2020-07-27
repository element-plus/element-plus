<template>
  <el-divider class="item" />
  <el-divider class="item" @click="handleClick">click me</el-divider>
  <el-divider class="item" content-position="left">撸起袖子加油干</el-divider>
  <el-divider class="item" content-position="right">一张蓝图绘到底</el-divider>
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
export default {
  name: 'Basic',
  methods: {
    handleClick() {
      alert('click')
    },
  },
}
</script>

<style scoped>
.item {
  margin-bottom: 40px;
}
</style>
