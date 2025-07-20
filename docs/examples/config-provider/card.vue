<script lang="ts" setup>
import { reactive } from 'vue'

const config = reactive({
  shadow: 'always',
})
</script>

<template>
  Shadow:
  <div class="flex flex-col justify-center">
    <el-radio-group v-model="config.shadow">
      <el-radio value="always">always</el-radio>
      <el-radio value="hover">hover</el-radio>
      <el-radio value="never">never</el-radio>
    </el-radio-group>
    <el-divider />
    <el-config-provider :card="config">
      <el-card>Card desu!</el-card>
    </el-config-provider>
  </div>
</template>
