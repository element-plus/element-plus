<template>
  <div style="max-width: 800px">
    <div class="sub-title my-2 text-sm text-gray-600">
      基础用法 - 横向自动滚动文本
    </div>
    <el-auto-scroll-text
      text="这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示，支持无缝循环滚动。"
      :speed="50"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
    />

    <div class="sub-title my-2 text-sm text-gray-600 mt-8">
      基础用法 - 纵向自动滚动文本
    </div>
    <el-auto-scroll-text
      text="这是一段很长的文本内容，当文本内容超过容器高度时会自动纵向滚动显示，支持无缝循环滚动。这是一段很长的文本内容，当文本内容超过容器高度时会自动纵向滚动显示，支持无缝循环滚动。"
      direction="vertical"
      :speed="30"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
      style="height: 100px"
    />
  </div>
</template>

<style scoped>
.el-auto-scroll-text {
  margin: 20px 0 0;
}
.el-auto-scroll-text:first-child {
  margin: 0;
}
</style>
