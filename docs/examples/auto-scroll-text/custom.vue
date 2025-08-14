<template>
  <div style="max-width: 800px">
    <div class="sub-title my-2 text-sm text-gray-600">自定义样式和配置</div>

    <el-auto-scroll-text
      text="这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示，支持自定义样式和配置。"
      title="自定义标题"
      description="这是自定义描述信息"
      type="warning"
      effect="dark"
      :center="true"
      :show-icon="true"
      :closable="true"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
      :speed="70"
      class="custom-scroll-text"
    />

    <div class="sub-title my-2 text-sm text-gray-600 mt-8">无循环滚动示例</div>

    <el-auto-scroll-text
      text="这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示，但不循环滚动，滚动结束后会停止。"
      type="info"
      :loop="false"
      :auto-start="true"
      :pause-on-hover="true"
      :show-controls="true"
      :speed="50"
    />

    <div class="sub-title my-2 text-sm text-gray-600 mt-8">不自动开始示例</div>

    <el-auto-scroll-text
      text="这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示，但不会自动开始滚动，需要手动控制。"
      type="success"
      :auto-start="false"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
      :speed="60"
    />

    <div class="sub-title my-2 text-sm text-gray-600 mt-8">
      不显示控制按钮示例
    </div>

    <el-auto-scroll-text
      text="这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示，但不显示控制按钮，只能通过鼠标悬停来控制。"
      type="error"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="false"
      :speed="40"
    />

    <div class="sub-title my-2 text-sm text-gray-600 mt-8">
      自定义按钮文案示例
    </div>

    <el-auto-scroll-text
      text="这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示，支持自定义控制按钮的文案。"
      type="info"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
      :speed="60"
      pause-button-text="暂停滚动"
      reset-button-text="重新开始"
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

.custom-scroll-text {
  border: 2px solid #e6a23c;
  border-radius: 8px;
}

.custom-scroll-text :deep(.el-alert) {
  border-radius: 6px;
}
</style>
