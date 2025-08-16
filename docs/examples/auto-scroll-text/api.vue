<template>
  <div style="max-width: 800px">
    <div class="sub-title my-2 text-sm text-gray-600">
      API 文档示例 - 展示所有属性和方法
    </div>

    <el-auto-scroll-text
      ref="apiScrollRef"
      text="这是一段很长的文本内容，用于展示组件的所有功能和 API。当文本内容超过容器宽度时会自动横向滚动显示，支持各种配置选项和事件监听。"
      title="API 示例"
      description="这是组件的描述信息，展示了 title 和 description 属性的使用。"
      type="info"
      effect="light"
      :center="false"
      :show-icon="true"
      :closable="true"
      :auto-start="false"
      :loop="true"
      :pause-on-hover="true"
      :show-controls="true"
      :speed="50"
      direction="horizontal"
      @scroll-start="logEvent('scroll-start')"
      @scroll-pause="logEvent('scroll-pause')"
      @scroll-resume="logEvent('scroll-resume')"
      @scroll-end="logEvent('scroll-end')"
      @close="logEvent('close')"
    />

    <div class="mt-6">
      <h3 class="text-lg font-semibold mb-4">属性 (Props)</h3>
      <el-table :data="propsData" border style="width: 100%">
        <el-table-column prop="name" label="属性名" width="150" />
        <el-table-column prop="type" label="类型" width="120" />
        <el-table-column prop="default" label="默认值" width="100" />
        <el-table-column prop="description" label="说明" />
      </el-table>
    </div>

    <div class="mt-6">
      <h3 class="text-lg font-semibold mb-4">事件 (Events)</h3>
      <el-table :data="eventsData" border style="width: 100%">
        <el-table-column prop="name" label="事件名" width="150" />
        <el-table-column prop="description" label="说明" />
        <el-table-column prop="callback" label="回调参数" width="200" />
      </el-table>
    </div>

    <div class="mt-6">
      <h3 class="text-lg font-semibold mb-4">方法 (Methods)</h3>
      <el-table :data="methodsData" border style="width: 100%">
        <el-table-column prop="name" label="方法名" width="150" />
        <el-table-column prop="description" label="说明" />
        <el-table-column prop="params" label="参数" width="200" />
      </el-table>
    </div>

    <div class="mt-6">
      <h3 class="text-lg font-semibold mb-4">插槽 (Slots)</h3>
      <el-table :data="slotsData" border style="width: 100%">
        <el-table-column prop="name" label="插槽名" width="150" />
        <el-table-column prop="description" label="说明" />
        <el-table-column prop="scope" label="作用域" width="200" />
      </el-table>
    </div>

    <div class="mt-6">
      <h3 class="text-lg font-semibold mb-4">方法调用示例</h3>
      <div class="flex gap-2 mb-4">
        <el-button @click="callMethod('startScroll')">开始滚动</el-button>
        <el-button @click="callMethod('pauseScroll')">暂停滚动</el-button>
        <el-button @click="callMethod('resumeScroll')">恢复滚动</el-button>
        <el-button @click="callMethod('resetScroll')">重置滚动</el-button>
        <el-button @click="callMethod('stopScroll')">停止滚动</el-button>
        <el-button @click="callMethod('getScrollStatus')">获取状态</el-button>
      </div>

      <div v-if="methodResult" class="bg-gray-100 p-3 rounded text-sm">
        <strong>方法调用结果：</strong>
        <pre>{{ JSON.stringify(methodResult, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const apiScrollRef = ref()
const methodResult = ref<{
  method: string
  result?: any
  error?: string
  timestamp: string
} | null>(null)

const propsData = [
  {
    name: 'text',
    type: 'string',
    default: '—',
    description: '滚动文本内容（必填）',
  },
  {
    name: 'direction',
    type: 'string',
    default: 'horizontal',
    description: '滚动方向，可选值：horizontal / vertical',
  },
  {
    name: 'speed',
    type: 'number',
    default: '50',
    description: '滚动速度（像素/秒）',
  },
  {
    name: 'autoStart',
    type: 'boolean',
    default: 'true',
    description: '是否自动开始滚动',
  },
  {
    name: 'showControls',
    type: 'boolean',
    default: 'true',
    description: '是否显示控制按钮',
  },
  {
    name: 'loop',
    type: 'boolean',
    default: 'true',
    description: '是否循环滚动',
  },
  {
    name: 'pauseOnHover',
    type: 'boolean',
    default: 'true',
    description: '鼠标悬停时是否暂停',
  },
  { name: 'title', type: 'string', default: '—', description: 'Alert 标题' },
  {
    name: 'type',
    type: 'string',
    default: 'info',
    description: 'Alert 类型：success / warning / info / error',
  },
  {
    name: 'description',
    type: 'string',
    default: '—',
    description: 'Alert 描述',
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: '是否可关闭',
  },
  {
    name: 'showIcon',
    type: 'boolean',
    default: 'true',
    description: '是否显示图标',
  },
  {
    name: 'center',
    type: 'boolean',
    default: 'false',
    description: '是否居中显示',
  },
  {
    name: 'effect',
    type: 'string',
    default: 'light',
    description: 'Alert 主题：light / dark',
  },
]

const eventsData = [
  { name: 'scroll-start', description: '滚动开始时触发', callback: '—' },
  { name: 'scroll-pause', description: '滚动暂停时触发', callback: '—' },
  { name: 'scroll-resume', description: '滚动恢复时触发', callback: '—' },
  { name: 'scroll-end', description: '滚动结束时触发', callback: '—' },
  { name: 'close', description: '关闭时触发', callback: '—' },
]

const methodsData = [
  { name: 'startScroll', description: '开始滚动', params: '—' },
  { name: 'pauseScroll', description: '暂停滚动', params: '—' },
  { name: 'resumeScroll', description: '恢复滚动', params: '—' },
  { name: 'togglePause', description: '切换暂停状态', params: '—' },
  { name: 'resetScroll', description: '重置滚动', params: '—' },
  { name: 'stopScroll', description: '停止滚动', params: '—' },
  { name: 'getScrollStatus', description: '获取滚动状态', params: '—' },
]

const slotsData = [{ name: 'default', description: '自定义内容', scope: '—' }]

const logEvent = (eventName: string) => {
  console.log(`事件触发: ${eventName}`)
}

const callMethod = (methodName: string) => {
  if (
    apiScrollRef.value &&
    typeof apiScrollRef.value[methodName] === 'function'
  ) {
    try {
      const result = apiScrollRef.value[methodName]()
      methodResult.value = {
        method: methodName,
        result,
        timestamp: new Date().toLocaleTimeString(),
      }
    } catch (error) {
      methodResult.value = {
        method: methodName,
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toLocaleTimeString(),
      }
    }
  } else {
    methodResult.value = {
      method: methodName,
      error: '方法不存在',
      timestamp: new Date().toLocaleTimeString(),
    }
  }
}
</script>

<style scoped>
.el-auto-scroll-text {
  margin: 20px 0 0;
}
.el-auto-scroll-text:first-child {
  margin: 0;
}
</style>
