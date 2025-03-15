<template>
  <el-input-number
    v-model="num"
    :min="1"
    :max="10"
    class="mx-4"
    :controls="false"
    hover
    size="large"
    controls-position="right"
    @change="handleChange"
  />
  <el-input-number
    v-model="num"
    :min="1"
    :max="10"
    class="mx-4"
    hover
    size="large"
    @change="handleChange"
  />
  <el-input-number
    v-model="num"
    :min="1"
    :max="10"
    hover
    controls-position="right"
    @change="handleChange"
  />
  <el-input-number
    v-model="num"
    :min="1"
    :max="10"
    class="mx-4"
    hover
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
