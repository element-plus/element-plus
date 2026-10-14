<template>
  <div class="flex flex-wrap gap-4 items-center">
    <el-cascader
      v-model="value"
      :options="options"
      placeholder="Default expanding panel"
      filterable
    />

    <el-cascader
      v-model="value"
      :options="options"
      placeholder="Fit input width"
      filterable
      fit-input-width
    />

    <el-cascader
      v-model="value"
      :options="options"
      placeholder="Fixed width (400px)"
      filterable
      :fit-input-width="400"
    >
      <template #suggestion-item="{ item }">
        <div>{{ item.text }} (Custom content that is very long)</div>
      </template>
    </el-cascader>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
]
</script>
