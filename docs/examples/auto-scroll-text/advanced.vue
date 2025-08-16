<template>
  <div style="max-width: 800px">
    <div class="sub-title my-2 text-sm text-gray-600">
      高级用法 - 动态内容和响应式功能
    </div>

    <div class="mb-4">
      <el-input
        v-model="dynamicText"
        placeholder="输入文本内容"
        class="w-full"
        @input="updateText"
      />
    </div>

    <el-auto-scroll-text
      ref="dynamicScrollRef"
      :text="dynamicText"
      :direction="scrollDirection"
      :speed="scrollSpeed"
      :auto-start="true"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
      :type="alertType"
      :title="alertTitle"
      :description="alertDescription"
    />

    <div class="mt-4 grid grid-cols-2 gap-4">
      <div>
        <label class="text-sm text-gray-600">滚动方向：</label>
        <el-select v-model="scrollDirection" class="w-full mt-1">
          <el-option label="横向" value="horizontal" />
          <el-option label="纵向" value="vertical" />
        </el-select>
      </div>

      <div>
        <label class="text-sm text-gray-600">Alert 类型：</label>
        <el-select v-model="alertType" class="w-full mt-1">
          <el-option label="信息" value="info" />
          <el-option label="成功" value="success" />
          <el-option label="警告" value="warning" />
          <el-option label="错误" value="error" />
        </el-select>
      </div>
    </div>

    <div class="mt-4">
      <label class="text-sm text-gray-600"
        >滚动速度：{{ scrollSpeed }}px/s</label
      >
      <el-slider
        v-model="scrollSpeed"
        :min="10"
        :max="200"
        :step="10"
        show-input
        class="mt-2"
      />
    </div>

    <div class="mt-4">
      <label class="text-sm text-gray-600">Alert 标题：</label>
      <el-input v-model="alertTitle" placeholder="输入标题" class="mt-1" />
    </div>

    <div class="mt-4">
      <label class="text-sm text-gray-600">Alert 描述：</label>
      <el-input
        v-model="alertDescription"
        placeholder="输入描述"
        class="mt-1"
      />
    </div>

    <div class="mt-4">
      <div class="sub-title my-2 text-sm text-gray-600">组件状态：</div>
      <div class="bg-gray-100 p-3 rounded text-sm">
        <p>当前文本长度：{{ dynamicText.length }} 字符</p>
        <p>
          滚动方向：{{ scrollDirection === 'horizontal' ? '横向' : '纵向' }}
        </p>
        <p>滚动速度：{{ scrollSpeed }}px/s</p>
        <p>Alert 类型：{{ alertType }}</p>
        <p>是否需要滚动：{{ scrollStatus.shouldScroll ? '是' : '否' }}</p>
        <p>是否正在滚动：{{ scrollStatus.isScrolling ? '是' : '否' }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

const dynamicScrollRef = ref()
const dynamicText = ref(
  '这是一段很长的文本内容，当文本内容超过容器宽度时会自动横向滚动显示，支持动态更新和响应式配置。'
)
const scrollDirection = ref<'horizontal' | 'vertical'>('horizontal')
const scrollSpeed = ref(60)
const alertType = ref<'info' | 'success' | 'warning' | 'error'>('info')
const alertTitle = ref('动态标题')
const alertDescription = ref('这是动态描述信息')

const scrollStatus = ref({
  shouldScroll: false,
  isScrolling: false,
})

const updateText = () => {
  // 文本更新时的处理逻辑
  console.log('文本已更新:', dynamicText.value)
}

const updateStatus = () => {
  if (dynamicScrollRef.value) {
    scrollStatus.value = dynamicScrollRef.value.getScrollStatus()
  }
}

// 监听方向变化，重置滚动
watch(scrollDirection, () => {
  if (dynamicScrollRef.value) {
    dynamicScrollRef.value.resetScroll()
  }
})

// 监听速度变化
watch(scrollSpeed, () => {
  if (dynamicScrollRef.value && !dynamicScrollRef.value.isPaused) {
    dynamicScrollRef.value.stopScroll()
    dynamicScrollRef.value.startScroll()
  }
})

onMounted(() => {
  updateStatus()
})
</script>

<style scoped>
.el-auto-scroll-text {
  margin: 20px 0 0;
}
.el-auto-scroll-text:first-child {
  margin: 0;
}
</style>
