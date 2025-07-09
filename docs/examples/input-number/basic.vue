<template>
  <el-input-number
    v-model="num"
    disable-scientific
    :min="1"
    :max="10"
    @change="handleChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number | undefined) => {
  console.log(value)
}
</script>
