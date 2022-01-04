<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">set prefix-icon</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day"
        :prefix-icon="customPrefix"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef, h } from 'vue'

const value1 = ref('')

const customPrefix = shallowRef({
  render() {
    return h('p', 'pre')
  },
})
</script>
