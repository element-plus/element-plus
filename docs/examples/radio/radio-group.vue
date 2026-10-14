<template>
  <el-radio-group v-model="radio">
    <el-radio :value="3">Option A</el-radio>
    <el-radio :value="6">Option B</el-radio>
    <el-radio :value="9">Option C</el-radio>
  </el-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
</script>
