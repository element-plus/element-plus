<template>
  <el-row>
    <el-col v-for="(shadow, i) in shadowGroup" :key="i" :span="6">
      <el-text size="large" class="block mb-2">
        {{ shadow.name }}
      </el-text>
      <el-text size="small" type="info" class="mb-2 block">
        {{ getCssVarName(shadow.type) }}
      </el-text>
      <el-button
        :style="{
          boxShadow: `var(${getCssVarName(shadow.type)})`,
        }"
      >
        Button
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const shadowGroup = ref([
  {
    name: 'Basic Shadow',
    type: '',
  },
  {
    name: 'Light Shadow',
    type: 'light',
  },
  {
    name: 'Lighter Shadow',
    type: 'lighter',
  },
  {
    name: 'Dark Shadow',
    type: 'dark',
  },
])

const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? '-' : ''}${type}`
}
</script>
