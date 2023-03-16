<template>
  <el-time-picker v-model="value1" placeholder="Arbitrary time" class="mr-2" />
  <el-time-picker v-model="value2" arrow-control placeholder="Arbitrary time" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref()
const value2 = ref()
</script>
