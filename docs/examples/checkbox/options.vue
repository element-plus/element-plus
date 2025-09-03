<template>
  <el-checkbox-group v-model="checkList" :options="options" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['Value selected and disabled', 'Value A'])
const options = [
  { label: 'Option A', value: 'Value A' },
  { label: 'Option B', value: 'Value B' },
  { label: 'Option C', value: 'Value C' },
  { label: 'disabled', value: 'Value disabled', disabled: true },
  {
    label: 'selected and disabled',
    value: 'Value selected and disabled',
    disabled: true,
  },
]
</script>
