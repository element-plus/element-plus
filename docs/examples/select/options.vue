<template>
  <el-select
    v-model="value"
    :options="options"
    :props="props"
    placeholder="Select"
    style="width: 240px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const props = {
  value: 'id',
  label: 'label',
  options: 'options',
  disabled: 'disabled',
}

const options = [
  {
    id: 'Option1',
    label: 'Option1',
  },
  {
    id: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    id: 'Option3',
    label: 'Option3',
  },
  {
    id: 'Option4',
    label: 'Option4',
    disabled: true,
  },
  {
    id: 'Option5',
    label: 'Option5',
  },
]
</script>
