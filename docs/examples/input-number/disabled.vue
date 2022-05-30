<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>

<template>
  <el-input-number v-model="num" :disabled="true" />
</template>
