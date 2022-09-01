<template>
  <el-tooltip :content="'Switch value: ' + value" placement="top">
    <el-switch
      v-model="value"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      active-value="100"
      inactive-value="0"
    />
  </el-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('100')
</script>
