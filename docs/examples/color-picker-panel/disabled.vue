<template>
  <el-color-picker-panel
    v-model="color"
    disabled
    show-alpha
    :predefine="predefineColors"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('#ff6900')
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
]
</script>
