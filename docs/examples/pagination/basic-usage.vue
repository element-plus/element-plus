<template>
  <el-text class="block my-2">When you have few pages</el-text>
  <el-pagination layout="prev, pager, next" :total="50" />

  <el-text class="block my-2">When you have more than 7 pages</el-text>
  <el-pagination layout="prev, pager, next" :total="1000" />
</template>
