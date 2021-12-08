<template>
  <el-tooltip
    content="Bottom center"
    placement="bottom"
    effect="light"
    trigger="click"
    :virtual-ref="triggerRef"
    v-model:visible="visible"
  />
  <el-button @click="visible = !visible">test</el-button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(false)
const triggerRef = ref({
  getBoundingClientRect() {
    return position.value
  },
})

const position = ref({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
})

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    position.value = DOMRect.fromRect({
      width: 0,
      height: 0,
      x: e.clientX,
      y: e.clientY,
    })
  })
})
</script>
