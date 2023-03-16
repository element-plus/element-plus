<template>
  <el-button ref="buttonRef" v-click-outside="onClickOutside"
    >Click me</el-button
  >

  <el-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    title="With title"
    virtual-triggering
  >
    <el-text> Some content </el-text>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'

const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
</script>
