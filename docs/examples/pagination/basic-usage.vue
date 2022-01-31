<template>
  <div class="demo-pagination-block">
    <div class="demonstration">When you have few pages</div>
    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
  </div>
  <div class="demo-pagination-block">
    <div class="demonstration">When you have more than 7 pages</div>
    <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<style>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
