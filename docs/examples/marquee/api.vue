<template>
  <div class="demo-marquee">
    <h2>Marquee 跑马灯</h2>
    <p>用于在有限空间内循环展示文本内容的组件。</p>

    <h3>基础用法</h3>
    <el-marquee>
      <el-marquee-item>这是一个基础的跑马灯组件</el-marquee-item>
    </el-marquee>

    <h3>代码示例</h3>
    <el-card class="code-example">
      <template #header>
        <span>基础用法</span>
      </template>
      <pre><code>&lt;el-marquee&gt;
  &lt;el-marquee-item&gt;这是一个基础的跑马灯组件&lt;/el-marquee-item&gt;
&lt;/el-marquee&gt;</code></pre>
    </el-card>

    <h3>属性</h3>
    <el-table :data="propsData" border style="width: 100%">
      <el-table-column prop="name" label="参数" width="180" />
      <el-table-column prop="description" label="说明" />
      <el-table-column prop="type" label="类型" width="180" />
      <el-table-column prop="default" label="默认值" width="120" />
    </el-table>

    <h3>事件</h3>
    <el-table :data="eventsData" border style="width: 100%">
      <el-table-column prop="name" label="事件名称" width="180" />
      <el-table-column prop="description" label="说明" />
      <el-table-column prop="parameters" label="回调参数" width="180" />
    </el-table>

    <h3>方法</h3>
    <el-table :data="methodsData" border style="width: 100%">
      <el-table-column prop="name" label="方法名" width="180" />
      <el-table-column prop="description" label="说明" />
      <el-table-column prop="parameters" label="参数" width="180" />
    </el-table>

    <h3>插槽</h3>
    <el-table :data="slotsData" border style="width: 100%">
      <el-table-column prop="name" label="插槽名" width="180" />
      <el-table-column prop="description" label="说明" />
    </el-table>

    <h3>MarqueeItem 属性</h3>
    <el-table :data="itemPropsData" border style="width: 100%">
      <el-table-column prop="name" label="参数" width="180" />
      <el-table-column prop="description" label="说明" />
      <el-table-column prop="type" label="类型" width="180" />
      <el-table-column prop="default" label="默认值" width="120" />
    </el-table>

    <h3>MarqueeItem 事件</h3>
    <el-table :data="itemEventsData" border style="width: 100%">
      <el-table-column prop="name" label="事件名称" width="180" />
      <el-table-column prop="description" label="说明" />
      <el-table-column prop="parameters" label="回调参数" width="180" />
    </el-table>
  </div>
</template>

<script setup>
import {
  ElCard,
  ElMarquee,
  ElMarqueeItem,
  ElTable,
  ElTableColumn,
} from 'element-plus'

const propsData = [
  {
    name: 'direction',
    description: '滚动方向',
    type: 'string',
    default: 'horizontal',
  },
  {
    name: 'speed',
    description: '滚动速度（像素/秒）',
    type: 'number',
    default: '50',
  },
  {
    name: 'autoStart',
    description: '是否自动开始滚动',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'showControls',
    description: '是否显示控制按钮',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'loop',
    description: '是否循环滚动',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'pauseOnHover',
    description: '鼠标悬停时是否暂停',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'pauseButtonText',
    description: '暂停状态按钮文案',
    type: 'string',
    default: '—',
  },
  {
    name: 'resumeButtonText',
    description: '继续状态按钮文案',
    type: 'string',
    default: '—',
  },
  {
    name: 'resetButtonText',
    description: '重置按钮文案',
    type: 'string',
    default: '—',
  },
]

const eventsData = [
  {
    name: 'scroll-start',
    description: '滚动开始时触发',
    parameters: '—',
  },
  {
    name: 'scroll-pause',
    description: '滚动暂停时触发',
    parameters: '—',
  },
  {
    name: 'scroll-resume',
    description: '滚动恢复时触发',
    parameters: '—',
  },
  {
    name: 'scroll-end',
    description: '滚动结束时触发',
    parameters: '—',
  },
]

const methodsData = [
  {
    name: 'pauseScroll',
    description: '暂停滚动',
    parameters: '—',
  },
  {
    name: 'resumeScroll',
    description: '恢复滚动',
    parameters: '—',
  },
  {
    name: 'togglePause',
    description: '切换暂停状态',
    parameters: '—',
  },
  {
    name: 'resetScroll',
    description: '重置滚动',
    parameters: '—',
  },
  {
    name: 'startScroll',
    description: '开始滚动',
    parameters: '—',
  },
  {
    name: 'stopScroll',
    description: '停止滚动',
    parameters: '—',
  },
  {
    name: 'getScrollStatus',
    description: '获取滚动状态',
    parameters: '—',
  },
]

const slotsData = [
  {
    name: 'default',
    description: '跑马灯内容',
  },
]

const itemPropsData = [
  {
    name: 'label',
    description: '项目标签',
    type: 'string',
    default: '—',
  },
]

const itemEventsData = [
  {
    name: 'click',
    description: '点击项目时触发',
    parameters: '—',
  },
]
</script>

<style scoped>
.demo-marquee {
  padding: 20px;
}

.demo-marquee h2 {
  margin-bottom: 10px;
  color: #303133;
}

.demo-marquee h3 {
  margin: 30px 0 15px 0;
  font-size: 18px;
  color: #303133;
}

.demo-marquee p {
  margin-bottom: 20px;
  color: #606266;
  line-height: 1.6;
}

.el-marquee {
  margin-bottom: 20px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  padding: 10px;
}

.code-example {
  margin-bottom: 20px;
}

.code-example pre {
  margin: 0;
  background-color: #f5f7fa;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}

.code-example code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #303133;
}

.el-table {
  margin-bottom: 20px;
}
</style>
