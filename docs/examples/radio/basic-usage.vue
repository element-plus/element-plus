<template>
  <div>
    <el-radio v-model="radio1" label="1">Option 1</el-radio>
    <el-radio v-model="radio1" label="2">Option 2</el-radio>
  </div>
  <div>
    <el-radio v-model="radio2" label="1" size="medium">Option 1</el-radio>
    <el-radio v-model="radio2" label="2" size="medium">Option 2</el-radio>
  </div>
  <div>
    <el-radio v-model="radio3" label="1" size="small">Option 1</el-radio>
    <el-radio v-model="radio3" label="2" size="small">Option 2</el-radio>
  </div>
  <div>
    <el-radio v-model="radio4" label="1" size="mini">Option 1</el-radio>
    <el-radio v-model="radio4" label="2" size="mini">Option 2</el-radio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      radio1: ref('1'),
      radio2: ref('1'),
      radio3: ref('1'),
      radio4: ref('1'),
    }
  },
})
</script>
