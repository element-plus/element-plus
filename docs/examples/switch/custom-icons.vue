<template>
  <el-switch v-model="value1" :active-icon="Check" :inactive-icon="Close">
  </el-switch>
  <br />
  <el-switch
    v-model="value2"
    style="margin-left: 24px"
    inline-prompt
    :active-icon="Check"
    :inactive-icon="Close"
  >
  </el-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Check, Close } from '@element-plus/icons'
const value1 = ref(true)
const value2 = ref(true)
</script>
