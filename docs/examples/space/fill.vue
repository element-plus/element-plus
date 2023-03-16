<template>
  <el-row class="mb-3">
    <el-text>fill:</el-text>
    <el-switch v-model="fill" />
  </el-row>
  <el-space :fill="fill" wrap class="w-100%">
    <el-card v-for="i in 3" :key="i">
      <template #header> Card name </template>
      <el-text v-for="o in 4" :key="o" class="block">
        {{ 'List item ' + o }}
      </el-text>
    </el-card>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fill = ref(true)
</script>
