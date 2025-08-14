<template>
  <div style="max-width: 800px">
    <div class="sub-title my-2 text-sm text-gray-600">滚动速度控制</div>

    <div class="mb-4">
      <label class="text-sm text-gray-600">滚动速度：{{ speed }}px/s</label>
      <el-slider
        v-model="speed"
        :min="10"
        :max="200"
        :step="10"
        show-input
        class="mt-2"
      />
    </div>

    <el-auto-scroll-text
      text="这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示，可以通过滑块调整滚动速度。"
      :speed="speed"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
    />

    <div class="sub-title my-2 text-sm text-gray-600 mt-8">不同速度对比</div>

    <el-auto-scroll-text
      text="慢速滚动示例 - 这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示。"
      :speed="20"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="false"
    />

    <el-auto-scroll-text
      text="中速滚动示例 - 这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示。"
      :speed="80"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="false"
    />

    <el-auto-scroll-text
      text="快速滚动示例 - 这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示。"
      :speed="150"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const speed = ref(60)
</script>

<style scoped>
.el-auto-scroll-text {
  margin: 20px 0 0;
}
.el-auto-scroll-text:first-child {
  margin: 0;
}
</style>
