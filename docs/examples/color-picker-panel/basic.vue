<template>
  <el-color-picker-panel v-model="color" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('#409EFF')
</script>
