<template>
  <el-radio-group v-model="size" class="mb-3">
    <el-radio :label="'large'">large</el-radio>
    <el-radio :label="'default'">default</el-radio>
    <el-radio :label="'small'">small</el-radio>
  </el-radio-group>

  <el-space wrap :size="size">
    <el-card v-for="i in 3" :key="i" class="w-250px">
      <template #header> Card name </template>
      <el-text v-for="o in 4" :key="o" class="block">
        {{ 'List item ' + o }}
      </el-text>
    </el-card>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref('default')
</script>
