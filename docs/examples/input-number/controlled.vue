<template>
  <el-input-number
    v-model="num"
    :min="1"
    :max="10"
    controls-position="right"
    size="large"
    @change="handleChange"
  />
  <el-input-number
    v-model="num"
    class="mx-4"
    :min="1"
    :max="10"
    controls-position="right"
    @change="handleChange"
  />
  <el-input-number
    v-model="num"
    :min="1"
    :max="10"
    size="small"
    controls-position="right"
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
