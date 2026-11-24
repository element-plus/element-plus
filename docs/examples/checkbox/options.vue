<template>
  <el-checkbox-group v-model="checkList" :options="options" :props="props" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['Value selected and disabled', 'Value A'])
const props = { label: 'name', value: 'id', disabled: 'unable' }
const options = [
  { name: 'Option A', id: 'Value A' },
  { name: 'Option B', id: 'Value B' },
  { name: 'Option C', id: 'Value C' },
  { name: 'disabled', id: 'Value disabled', unable: true },
  {
    name: 'selected and disabled',
    id: 'Value selected and disabled',
    unable: true,
  },
]
</script>
