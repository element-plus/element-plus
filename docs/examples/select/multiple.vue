<template>
  <el-text tag="p" class="my-3">default</el-text>
  <el-select v-model="value1" multiple placeholder="Select" class="w-240px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

  <el-text tag="p" class="my-3">use collapse-tags</el-text>
  <el-select
    v-model="value2"
    multiple
    collapse-tags
    placeholder="Select"
    class="w-240px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

  <el-text tag="p" class="my-3">use collapse-tags-tooltip</el-text>
  <el-select
    v-model="value3"
    multiple
    collapse-tags
    collapse-tags-tooltip
    placeholder="Select"
    class="w-240px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

  <el-text tag="p" class="my-3">use max-collapse-tags</el-text>
  <el-select
    v-model="value4"
    multiple
    collapse-tags
    collapse-tags-tooltip
    :max-collapse-tags="3"
    placeholder="Select"
    class="w-240px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const value4 = ref([])
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
