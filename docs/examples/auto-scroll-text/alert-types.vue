<template>
  <div style="max-width: 800px">
    <div class="sub-title my-2 text-sm text-gray-600">
      不同类型的 Alert 样式
    </div>

    <el-auto-scroll-text
      text="这是一段成功提示信息，当文本内容超过容器宽度时会自动横向滚动显示。"
      type="success"
      title="成功提示"
      :speed="40"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
    />

    <el-auto-scroll-text
      text="这是一段警告提示信息，当文本内容超过容器宽度时会自动横向滚动显示。"
      type="warning"
      title="警告提示"
      :speed="40"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
    />

    <el-auto-scroll-text
      text="这是一段错误提示信息，当文本内容超过容器宽度时会自动横向滚动显示。"
      type="error"
      title="错误提示"
      :speed="40"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
    />

    <el-auto-scroll-text
      text="这是一段信息提示，当文本内容超过容器宽度时会自动横向滚动显示。"
      type="info"
      title="信息提示"
      :speed="40"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
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
