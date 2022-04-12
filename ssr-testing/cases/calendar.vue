<template>
  <el-calendar v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date('Aug 18, 2020'))
</script>
