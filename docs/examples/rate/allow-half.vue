<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <el-rate v-model="value" allow-half />
</template>
