<template>
  <div class="block">
    <span class="demonstration">When you have few pages</span>
    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">When you have more than 7 pages</span>
    <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>
