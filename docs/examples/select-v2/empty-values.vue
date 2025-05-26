<template>
  <el-select-v2
    v-model="value"
    :options="options"
    :empty-values="[null, undefined]"
    :value-on-clear="null"
    clearable
    placeholder="Select"
    style="width: 240px"
    @clear="handleClear"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const value = ref('')

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))

options.unshift({
  value: '',
  label: 'All',
})

const handleClear = () => {
  ElMessage.info(`The clear value is: ${value.value}`)
}
</script>
