<template>
  <div class="example-block">
    <span class="example-demonstration">When you have few pages</span>
    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
  </div>
  <div class="example-block">
    <span class="example-demonstration">When you have more than 7 pages</span>
    <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<style lang="scss" scoped>
.example-block {
  margin: 1rem;
}
.example-demonstration {
  margin: 1rem;
}
</style>
