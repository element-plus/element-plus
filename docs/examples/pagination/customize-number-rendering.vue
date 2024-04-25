<template>
  <div class="example-pagination-block">
    <div class="example-demonstration">Make pagination is crawlable:</div>
    <el-pagination layout="prev, pager, next" :total="500">
      <template #number="{ page }"> {{ page }}P </template>
    </el-pagination>
  </div>
</template>

<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}

.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
