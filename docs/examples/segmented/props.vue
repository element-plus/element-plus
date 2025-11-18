<template>
  <div>
    <el-segmented v-model="value" :options="options" :props="props" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Mon')
const props = {
  label: 'myLabel',
  value: 'myValue',
  disabled: 'myDisabled',
}
const options = [
  {
    myLabel: 'Mon',
    myValue: 'Mon',
    myDisabled: true,
  },
  {
    myLabel: 'Tue',
    myValue: 'Tue',
  },
  {
    myLabel: 'Wed',
    myValue: 'Wed',
    myDisabled: true,
  },
  {
    myLabel: 'Thu',
    myValue: 'Thu',
  },
  {
    myLabel: 'Fri',
    myValue: 'Fri',
    myDisabled: true,
  },
  {
    myLabel: 'Sat',
    myValue: 'Sat',
  },
  {
    myLabel: 'Sun',
    myValue: 'Sun',
  },
]
</script>
