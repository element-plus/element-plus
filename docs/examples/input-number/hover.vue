<template>
  <div>
    <el-input-number
      v-model="num"
      :min="1"
      :max="10"
      hover-controls
      @change="handleChange"
    />
    <el-input-number
      v-model="num"
      class="mx-4"
      :min="1"
      :max="10"
      hover-controls
      controls-position="right"
      @change="handleChange"
    />
  </div>
  <div class="mt-4">
    <el-input-number v-model="num" hover-controls :min="1" :max="10">
      <template #prefix>
        <span>￥</span>
      </template>
    </el-input-number>
    <el-input-number
      v-model="num"
      class="mx-4"
      hover-controls
      :min="1"
      :max="10"
    >
      <template #suffix>
        <span>RMB</span>
      </template>
    </el-input-number>
  </div>
  <div class="mt-4">
    <el-input-number
      v-model="num"
      hover-controls
      :min="1"
      :max="10"
      controls-position="right"
    >
      <template #prefix>
        <span>￥</span>
      </template>
    </el-input-number>
    <el-input-number
      v-model="num"
      class="mx-4"
      hover-controls
      :min="1"
      :max="10"
      controls-position="right"
    >
      <template #suffix>
        <span>RMB</span>
      </template>
    </el-input-number>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number | undefined) => {
  console.log(value)
}
</script>
