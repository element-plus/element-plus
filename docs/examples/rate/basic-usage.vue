<template>
  <el-row>
    <el-col
      :span="12"
      class="text-center"
      style="border-right: 1px solid var(--el-border-color)"
    >
      <el-text class="block">Default</el-text>
      <el-rate v-model="value1" />
    </el-col>
    <el-col :span="12" class="text-center">
      <el-text class="block">Color for different levels</el-text>
      <el-rate v-model="value2" :colors="colors" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>
