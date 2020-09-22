<template>
  <label>
    <input type="radio" :checked="direction === 'ltr'" @click="change('ltr')">从左到右
  </label>
  <label>
    <input type="radio" :checked="direction === 'rtl'" @click="change('rtl')">从右到左
  </label>
  <label>
    <input type="radio" :checked="direction === 'ttb'" @click="change('ttb')">从上到下
  </label>
  <label>
    <input type="radio" :checked="direction === 'btt'" @click="change('btt')">从下到上
  </label>
  <el-button @click="open">点击打开</el-button>
  <el-drawer
    v-model="visible"
    size="50%"
    title="我是标题"
    :direction="direction"
  >
    <span>嵌套一层!</span>
    <el-button @click="visible2 = true">点击打开</el-button>
    <el-drawer
      v-model="visible2"
      :append-to-body="true"
      title="我是标题"
      :direction="direction"
    >
      <span>第二层!</span>
    </el-drawer>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent(() => {
  const direction = ref('ltr')
  const visible = ref(false)
  const visible2 = ref(false)
  const open = () => {
    visible.value = true
  }
  const change = val => {
    direction.value = val
  }
  return {
    open,
    direction,
    visible,
    visible2,
    change,
  }
})
</script>
