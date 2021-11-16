<template>
  <el-button ref="buttonRef" v-click-outside="onClickOutside"
    >Click me</el-button
  >

  <el-tooltip ref="tooltipRef" :triggering-element="buttonRef" trigger="click">
    <template #content>
      <span> Some content </span>
    </template>
  </el-tooltip>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
const buttonRef = ref()
const tooltipRef = ref()
const onClickOutside = () => {
  unref(tooltipRef).popperRef?.delayHide?.()
}
</script>
