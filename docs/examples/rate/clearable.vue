<template>
  <el-rate v-model="value" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(3)
</script>
