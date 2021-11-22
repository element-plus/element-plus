<template>
  <el-button ref="buttonRef" v-click-outside="onClickOutside"
    >Click me</el-button
  >

  <el-popover
    ref="popoverRef"
    :triggering-element="buttonRef"
    trigger="click"
    title="With title"
  >
    <span> Some content </span>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
</script>
