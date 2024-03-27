<template>
  <el-space direction="vertical">
    <el-space>
      <el-input-number v-model="num" />
      <el-input-number v-model="num">
        <template #prepend>
          <el-icon>
            <ArrowDown />
          </el-icon>
        </template>
        <template #append>
          <el-icon>
            <ArrowUp />
          </el-icon>
        </template>
      </el-input-number>
    </el-space>
    <el-space>
      <el-input-number v-model="num" controls-position="right" />
      <el-input-number v-model="num" controls-position="right">
        <template #prepend>
          <el-icon>
            <Minus />
          </el-icon>
        </template>
        <template #append>
          <el-icon>
            <Plus />
          </el-icon>
        </template>
      </el-input-number>
    </el-space>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowDown, ArrowUp, Minus, Plus } from '@element-plus/icons-vue'

const num = ref(1)
</script>
