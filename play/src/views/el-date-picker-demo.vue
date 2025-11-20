<template>
  <el-date-picker
    v-for="i in 500"
    :key="i"
    v-model="value1"
    type="date"
    placeholder="Pick a day"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
</script>
<style></style>
