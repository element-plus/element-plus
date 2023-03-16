<template>
  <el-row>
    <el-text class="w-70px text-right mr-6">direction:</el-text>
    <el-radio v-model="direction" label="horizontal">horizontal</el-radio>
    <el-radio v-model="direction" label="vertical">vertical</el-radio>
  </el-row>
  <el-row class="mb-3">
    <el-text class="w-70px text-right mr-6">fillRatio:</el-text>
    <el-slider v-model="fillRatio" class="w-60% inline-flex" />
  </el-row>

  <el-space
    fill
    wrap
    :fill-ratio="fillRatio"
    :direction="direction"
    class="w-100%"
  >
    <el-card v-for="i in 5" :key="i">
      <template #header> Card name </template>
      <el-text v-for="o in 4" :key="o" class="block">
        {{ 'List item ' + o }}
      </el-text>
    </el-card>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const direction = ref('horizontal')
const fillRatio = ref(30)
</script>
