<template>
  <el-row>
    <el-col :span="8">
      <el-input
        v-model="input1"
        class="w-50 m-2"
        size="large"
        placeholder="Please Input"
      />
    </el-col>
    <el-col :span="8">
      <el-input v-model="input2" class="w-50 m-2" placeholder="Please Input" />
    </el-col>
    <el-col :span="8">
      <el-input
        v-model="input3"
        class="w-50 m-2"
        size="small"
        placeholder="Please Input"
      />
    </el-col>

    <el-col :span="8">
      <el-input
        v-model="input1"
        class="w-50 m-2"
        size="large"
        placeholder="Please Input"
        :suffix-icon="Search"
      />
    </el-col>
    <el-col :span="8">
      <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Please Input"
        :suffix-icon="Search"
      />
    </el-col>
    <el-col :span="8">
      <el-input
        v-model="input3"
        class="w-50 m-2"
        size="small"
        placeholder="Please Input"
        :suffix-icon="Search"
      />
    </el-col>

    <el-col :span="8">
      <el-input
        v-model="input1"
        class="w-50 m-2"
        size="large"
        placeholder="Please Input"
        :prefix-icon="Search"
      />
    </el-col>
    <el-col :span="8">
      <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Please Input"
        :prefix-icon="Search"
      />
    </el-col>
    <el-col :span="8">
      <el-input
        v-model="input3"
        class="w-50 m-2"
        size="small"
        placeholder="Please Input"
        :prefix-icon="Search"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>
