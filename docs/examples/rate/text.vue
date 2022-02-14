<template>
  <el-rate
    v-model="value"
    :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
    show-text
  >
  </el-rate>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
</script>
