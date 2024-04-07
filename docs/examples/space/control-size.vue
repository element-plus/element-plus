<template>
  <el-space direction="vertical" alignment="start" :size="30">
    <el-radio-group v-model="size">
      <el-radio value="large">Large</el-radio>
      <el-radio value="default">Default</el-radio>
      <el-radio value="small">Small</el-radio>
    </el-radio-group>

    <el-space wrap :size="size">
      <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </el-space>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')
</script>
