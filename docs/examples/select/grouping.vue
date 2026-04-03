<template>
  <el-select v-model="value" placeholder="Select" style="width: 240px">
    <el-option-group
      v-for="(group, index) in options"
      :key="index"
      :label="group.label"
    >
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-option-group>
  </el-select>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'

const value = ref('')
const options = [
  {
    label: 'Popular cities',
    options: [
      {
        value: 'Shanghai',
        label: 'Shanghai',
      },
      {
        value: 'Beijing',
        label: 'Beijing',
      },
    ],
  },
  {
    label: h(
      'em',
      {
        style: {
          color: 'var(--el-color-primary-light-5)',
          marginLeft: '20px',
        },
      },
      'City name'
    ),
    options: [
      {
        value: 'Chengdu',
        label: 'Chengdu',
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen',
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou',
      },
      {
        value: 'Dalian',
        label: 'Dalian',
      },
    ],
  },
]
</script>
