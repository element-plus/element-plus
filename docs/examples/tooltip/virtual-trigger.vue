<template>
  <el-tooltip
    v-model:visible="visible"
    content="Bottom center"
    placement="bottom"
    effect="light"
    trigger="click"
    virtual-triggering
    :virtual-ref="triggerRef"
  />
  <el-button @click="visible = !visible">test</el-button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const visible = ref(false)
const triggerRef = ref({
  getBoundingClientRect: () => position.value,
})
const position = ref(DOMRect.fromRect())

const mousemoveHandler = ({ clientX, clientY }: MouseEvent) => {
  position.value = DOMRect.fromRect({
    x: clientX,
    y: clientY,
  })
}

onMounted(() => {
  document.addEventListener('mousemove', mousemoveHandler)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', mousemoveHandler)
})
</script>
