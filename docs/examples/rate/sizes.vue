<template>
  <el-rate v-model="value" size="large" />
  <br />
  <el-rate v-model="value" />
  <br />
  <el-rate v-model="value" size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>
