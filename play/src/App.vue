<template>
  <div>
    <div style="display: flex; gap: 10px">
      <el-select
        v-model="url"
        style="width: 200px"
        placeholder="请选择测试页面"
      >
        <el-option
          v-for="item in options"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-input-number v-model="num" />
      <el-input-number
        v-model="time1"
        :controls="false"
        placeholder="default time"
      >
        <template #suffix> S </template>
      </el-input-number>
      <el-input-number
        v-model="time2"
        :controls="false"
        placeholder="target time"
      >
        <template #suffix> S </template>
      </el-input-number>
      <el-button :disabled="!url || !num" @click="startTest">
        开始测试
      </el-button>
    </div>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/select">select</RouterLink>
      <RouterLink to="/el-input">el-input</RouterLink>
      <RouterLink to="/el-select">el-select</RouterLink>
      <RouterLink to="/el-date-picker">el-date-picker</RouterLink>
      <RouterLink to="/el-dropdown">el-dropdown</RouterLink>
      <RouterLink to="/el-popover">el-popover</RouterLink>
      <RouterLink to="/el-tooltip">el-tooltip</RouterLink>
    </nav>
  </div>

  <br />
  <RouterView v-slot="{ Component }">
    <component :is="Component" :key="$route.name"></component>
  </RouterView>
</template>
<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

import { onBeforeUnmount, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const num = ref(10)
const time1 = ref(2)
const time2 = ref(6)

const url = ref('')
const options = [
  '/select',
  '/el-tooltip',
  '/el-input',
  '/el-select',
  '/el-date-picker',
  '/el-dropdown',
  '/el-popover',
]

const route = useRoute()
const router = useRouter()

let timer: number | null = null
let isTestRunning = false
let currentIndex = 0

const startTest = () => {
  if (isTestRunning || !url.value) return

  isTestRunning = true
  currentIndex = options.indexOf(url.value)

  if (currentIndex === -1) {
    currentIndex = 0
    url.value = options[0]
  }

  // 先跳转到选中的页面
  router.push(url.value)

  // 根据当前路径设置不同的延迟时间
  const scheduleNext = () => {
    const delay = route.path === '/' ? time2.value * 1000 : time1.value * 1000
    timer = window.setTimeout(() => {
      if (route.path === '/') {
        // 在首页，跳转到测试页面
        router.push(url.value)
        scheduleNext()
      } else {
        // 在测试页面，返回首页
        router.push('/')

        // 如果达到测试次数，停止测试
        num.value--
        if (num.value <= 0) {
          stopTest()
        } else {
          scheduleNext()
        }
      }
    }, delay)
  }

  // 启动首次调度（在目标页停留8秒）
  scheduleNext()
}

const stopTest = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  isTestRunning = false
  // 最后返回首页
  router.push('/')
}

onBeforeUnmount(() => {
  stopTest()
})

// 监听路由变化，记录日志
watch(
  () => route.path,
  (val) => {
    console.log('当前路由:', val, '剩余测试次数:', num.value)
  }
)
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
