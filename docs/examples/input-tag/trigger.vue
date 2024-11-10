<template>
  <div>
    <el-radio-group v-model="trigger" aria-label="trigger control">
      <el-radio-button label="Enter" value="Enter" />
      <el-radio-button label="Space" value="Space" />
    </el-radio-group>
  </div>
  <br />
  <el-input-tag v-model="input" :trigger="trigger" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const trigger = ref<'Enter' | 'Space'>('Enter')
const input = ref<string[]>()
</script>
