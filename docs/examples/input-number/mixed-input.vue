<template>
  <div>
    <el-input-number v-model="input1" class="w-full">
      <template #prepend>+</template>
      <template #append>￥</template>
    </el-input-number>
  </div>
  <div class="mt-4">
    <el-input-number v-model="input2" class="w-full">
      <template #append>元</template>
    </el-input-number>
  </div>
  <div class="mt-4">
    <el-input-number
      v-model="input3"
      class="input-with-select w-full"
      controls-position="right"
    >
      <template #prepend>
        <el-select v-model="select1" style="width: 60px">
          <el-option label="+" value="add" />
          <el-option label="-" value="minus" />
        </el-select>
      </template>
      <template #append>
        <el-select v-model="select2" style="width: 60px">
          <el-option label="$" value="USD" />
          <el-option label="€" value="EUR" />
          <el-option label="£" value="GBP" />
          <el-option label="¥" value="CNY" />
        </el-select>
      </template>
    </el-input-number>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref(1)
const input2 = ref(1)
const input3 = ref(1)
const select1 = ref('add')
const select2 = ref('CNY')
</script>

<style></style>
