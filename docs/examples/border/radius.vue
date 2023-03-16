<template>
  <el-row :gutter="12">
    <el-col
      v-for="(radius, i) in radiusGroup"
      :key="i"
      :span="6"
      :xs="{ span: 12 }"
    >
      <el-text size="large" class="block mb-2">{{ radius.name }}</el-text>
      <el-text size="small" type="info" class="block mb-2">
        border-radius: {{ getValue(radius.type) || '0px' }}
      </el-text>
      <el-button
        :style="{
          borderRadius: radius.type
            ? `var(--el-border-radius-${radius.type})`
            : '0',
        }"
      >
        Button
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radiusGroup = ref([
  {
    name: 'No Radius',
    type: '',
  },
  {
    name: 'Small Radius',
    type: 'small',
  },
  {
    name: 'Large Radius',
    type: 'base',
  },
  {
    name: 'Round Radius',
    type: 'round',
  },
])

const getValue = (type: string) => {
  const getCssVarValue = (prefix, type) =>
    getComputedStyle(document.documentElement).getPropertyValue(
      `--el-${prefix}-${type}`
    )
  return getCssVarValue('border-radius', type)
}
</script>
