<template>
  <el-input
    v-model="text"
    style="width: 240px"
    maxlength="10"
    placeholder="Please input"
    show-word-limit
    type="text"
  />
  <div style="margin: 20px 0" />
  <el-input
    v-model="textarea"
    maxlength="30"
    style="width: 240px"
    placeholder="Please input"
    show-word-limit
    type="textarea"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const text = ref('')
const textarea = ref('')
</script>
