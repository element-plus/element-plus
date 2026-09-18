<template>
  <div class="demo-marquee">
    <h2>Marquee 跑马灯</h2>
    <p>用于在有限空间内循环展示文本内容的组件。</p>

    <h3>基础用法</h3>
    <el-marquee> 这是一个基础的跑马灯组件 </el-marquee>

    <h3>代码示例</h3>
    <el-card class="code-example">
      <template #header>
        <span>基础用法</span>
      </template>
      <pre><code>&lt;el-marquee&gt;
  这是一个基础的跑马灯组件
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

    <h3>暴露的属性</h3>
    <el-table :data="exposedPropsData" border style="width: 100%">
      <el-table-column prop="name" label="属性名" width="180" />
      <el-table-column prop="description" label="说明" />
      <el-table-column prop="type" label="类型" width="180" />
    </el-table>
  </div>
</template>

<script setup>
import { ElCard, ElMarquee, ElTable, ElTableColumn } from 'element-plus'

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
    name: 'startScroll',
    description: '开始滚动',
    parameters: '—',
  },
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
    description: '自定义内容',
  },
]

const exposedPropsData = [
  {
    name: 'isPaused',
    description: '当前是否暂停',
    type: 'Ref<boolean>',
  },
  {
    name: 'scrollPosition',
    description: '当前滚动位置',
    type: 'Ref<number>',
  },
  {
    name: 'shouldScroll',
    description: '是否需要滚动',
    type: 'ComputedRef<boolean>',
  },
  {
    name: 'singleContentSize',
    description: '单份内容尺寸',
    type: 'ComputedRef<number>',
  },
  {
    name: 'containerSize',
    description: '容器尺寸',
    type: 'ComputedRef<number>',
  },
  {
    name: 'requiredCopies',
    description: '所需副本数量',
    type: 'ComputedRef<number>',
  },
  {
    name: 'containerRef',
    description: '容器引用',
    type: 'Ref<HTMLElement>',
  },
  {
    name: 'textRef',
    description: '文本引用',
    type: 'Ref<HTMLElement>',
  },
]
</script>

<style scoped>
.demo-marquee {
  padding: 20px;
}

.demo-marquee h2 {
  margin-bottom: 10px;
  color: #333;
}

.demo-marquee h3 {
  margin: 20px 0 10px 0;
  font-size: 16px;
  color: #333;
}

.demo-marquee p {
  margin-bottom: 20px;
  color: #666;
  line-height: 1.6;
}

.el-marquee {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.code-example {
  margin-bottom: 20px;
}

.code-example pre {
  margin: 0;
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
  overflow-x: auto;
}

.code-example code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  color: #333;
}
</style>
