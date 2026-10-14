<template>
  <el-radio-group v-model="controllerType">
    <el-radio-button label="select" value="select" />
    <el-radio-button label="button" value="button" />
  </el-radio-group>

  <el-calendar v-model="value" :controller-type="controllerType" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const controllerType = ref<'select' | 'button'>('select')
const value = ref(new Date())
</script>
