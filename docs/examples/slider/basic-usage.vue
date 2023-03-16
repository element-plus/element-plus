<template>
  <el-row class="mr-6">
    <el-text class="w-180px text-right mr-6">Default value</el-text>
    <el-slider v-model="value1" class="w-60% inline-flex" />
  </el-row>

  <el-row class="mr-6">
    <el-text class="w-180px text-right mr-6">Customized initial value</el-text>
    <el-slider v-model="value2" class="w-60% inline-flex" />
  </el-row>

  <el-row class="mr-6">
    <el-text class="w-180px text-right mr-6">Hide Tooltip</el-text>
    <el-slider
      v-model="value3"
      :show-tooltip="false"
      class="w-60% inline-flex"
    />
  </el-row>

  <el-row class="mr-6">
    <el-text class="w-180px text-right mr-6">Format Tooltip</el-text>
    <el-slider
      v-model="value4"
      :format-tooltip="formatTooltip"
      class="w-60% inline-flex"
    />
  </el-row>

  <el-row class="mr-6">
    <el-text class="w-180px text-right mr-6">Disabled</el-text>
    <el-slider v-model="value5" disabled class="w-60% inline-flex" />
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
const value5 = ref(0)

const formatTooltip = (val: number) => {
  return val / 100
}
</script>
