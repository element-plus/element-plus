<template>
  <el-captcha
    v-model="model"
    size="large"
    help-text="custom help text"
    complete-text="custom complete text"
    class="mb-4"
  />
  <div class="mb-4">v-model: {{ model }}</div>
  <el-button @click="model = false">reset</el-button>
  <el-button @click="model = true">enable</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const model = ref(false)
</script>
