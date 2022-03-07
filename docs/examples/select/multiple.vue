<template>
  <div style="display: inline-block">
    <p style="margin-left: 10px">default</p>
    <el-select
      v-model="value1"
      multiple
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
  <div style="display: inline-block; margin-left: 20px">
    <p style="margin-left: 10px">use collapse-tags</p>
    <el-select
      v-model="value2"
      multiple
      collapse-tags
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
  <div style="display: inline-block; margin-left: 20px">
    <p style="margin-left: 10px">use collapse-tags-tooltip</p>
    <el-select
      v-model="value3"
      multiple
      collapse-tags
      collapse-tags-tooltip
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
