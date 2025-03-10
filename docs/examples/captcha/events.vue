<template>
  <el-captcha
    v-model="model"
    class="mb-4"
    @start="start"
    @fail="fail"
    @success="success"
  />
  <el-button @click="model = false">reset</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

function start() {
  console.log('start')
}

function fail() {
  console.log('fail')
}

function success() {
  console.log('success')
}

const model = ref(false)
</script>
