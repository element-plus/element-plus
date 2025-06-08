<template>
  <el-input-tag v-model="input" size="large" placeholder="Please input" />
  <br />
  <el-input-tag v-model="input" placeholder="Please input" />
  <br />
  <el-input-tag v-model="input" size="small" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref<string[]>()
</script>
