<template>
  <el-switch v-model="value" size="large" />
  <br />
  <el-switch v-model="value" />
  <br />
  <el-switch v-model="value" size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
</script>
