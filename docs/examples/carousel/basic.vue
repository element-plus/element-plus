<template>
  <el-text type="info" class="block text-center my-2">
    Switch when indicator is hovered (default)
  </el-text>
  <el-carousel height="150px">
    <el-carousel-item v-for="item in 4" :key="item">
      <el-text tag="h3" class="opacity-70 lh-150px" text="2xl" justify="center">
        {{ item }}
      </el-text>
    </el-carousel-item>
  </el-carousel>

  <el-text type="info" class="block text-center my-2">
    Switch when indicator is clicked
  </el-text>
  <el-carousel trigger="click" height="150px">
    <el-carousel-item v-for="item in 4" :key="item">
      <el-text tag="h3" class="opacity-70 lh-150px" text="2xl" justify="center">
        {{ item }}
      </el-text>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
