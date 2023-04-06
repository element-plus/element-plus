<template>
  <el-page-header>
    <template #content>
      <span class="text-lg font-600 mr-3"> Title </span>
    </template>
    <div class="mt-4 text-sm font-bold">
      Your additional content can be added with default slot, You may put as
      many content as you want here.
    </div>
  </el-page-header>
</template>
<style scoped>
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.font-600 {
  font-weight: 600;
}

.mr-3 {
  margin-right: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-bold {
  font-weight: 700;
}
</style>
