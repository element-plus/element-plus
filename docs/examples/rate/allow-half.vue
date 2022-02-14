<template>
  <el-rate v-model="value" allow-half />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
</script>
