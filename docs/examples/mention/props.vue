<template>
  <el-mention
    v-model="value"
    :options="options"
    :props="props"
    style="width: 320px"
    placeholder="Please input"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('@')
const props = { label: 'name', value: 'id', disabled: 'unable' }
const options = ref([
  {
    name: 'Fuphoenixes',
    id: 'Fuphoenixes',
    unable: true,
  },
  {
    name: 'kooriookami',
    id: 'kooriookami',
  },
  {
    name: 'Jeremy',
    id: 'Jeremy',
    unable: true,
  },
  {
    name: 'btea',
    id: 'btea',
  },
])
</script>
