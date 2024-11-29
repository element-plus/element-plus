<template>
  <el-input-tag v-model="input" :max="3" placeholder="enter up to 3 tags" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref<string[]>()
</script>
