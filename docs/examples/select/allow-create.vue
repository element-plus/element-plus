<template>
  <el-select
    v-model="value1"
    multiple
    filterable
    allow-create
    default-first-option
    :reserve-keyword="false"
    placeholder="Choose tags for your article"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <p>
    Try to copy <el-text type="primary">Lucy,Jack</el-text> and paste to the
    input:
  </p>
  <el-select
    v-model="value2"
    multiple
    filterable
    allow-create
    default-first-option
    :reserve-keyword="false"
    token-separator=","
    placeholder="Choose tags for your article"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref<string[]>([])
const value2 = ref<string[]>([])
const options = [
  {
    value: 'HTML',
    label: 'HTML',
  },
  {
    value: 'CSS',
    label: 'CSS',
  },
  {
    value: 'JavaScript',
    label: 'JavaScript',
  },
]
</script>
