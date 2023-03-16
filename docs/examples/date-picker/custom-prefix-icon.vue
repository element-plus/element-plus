<template>
  <el-text type="info" class="block mb-2">set prefix-icon</el-text>
  <el-date-picker
    v-model="value1"
    type="date"
    placeholder="Pick a day"
    :prefix-icon="customPrefix"
  />
</template>

<script lang="ts" setup>
import { h, ref, shallowRef } from 'vue'

const value1 = ref('')

const customPrefix = shallowRef({
  render() {
    return h('p', 'pre')
  },
})
</script>
