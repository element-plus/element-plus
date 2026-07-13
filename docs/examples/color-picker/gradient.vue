<template>
  <el-color-picker v-model="color" show-gradient />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref(
  'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(0, 0, 255) 100%)'
)
</script>
