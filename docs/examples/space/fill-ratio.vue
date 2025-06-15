<template>
  <div>
    <div style="margin-bottom: 15px">
      direction:
      <el-radio v-model="direction" value="horizontal">horizontal</el-radio>
      <el-radio v-model="direction" value="vertical">vertical</el-radio>
    </div>
    <div style="margin-bottom: 15px">
      fillRatio:<el-slider v-model="fillRatio" />
    </div>
    <el-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 100%"
    >
      <el-card v-for="i in 5" :key="i" class="box-card">
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { SpaceInstance } from 'element-plus'

const direction = ref<SpaceInstance['direction']>('horizontal')
const fillRatio = ref(30)
</script>
