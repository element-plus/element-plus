<template>
  <div class="demo-input-size">
    <el-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
    />
    <el-input v-model="input2" class="w-50 m-2" placeholder="Please Input" />
    <el-input
      v-model="input3"
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
    />
  </div>
  <div class="demo-input-size">
    <el-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
    <el-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
    <el-input
      v-model="input3"
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
  </div>
  <div class="demo-input-size">
    <el-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
    <el-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
    <el-input
      v-model="input3"
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>
