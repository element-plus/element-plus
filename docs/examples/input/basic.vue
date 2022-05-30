<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<template>
  <el-input v-model="input" placeholder="Please input" />
</template>
