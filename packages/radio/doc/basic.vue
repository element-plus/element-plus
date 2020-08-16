<template>
  <div>
    <el-radio v-model="radio" label="1">1</el-radio>
    <el-radio v-model="radio" label="2">2</el-radio>
  </div>
  <div>
    <el-radio-group v-model="radio0">
      <el-radio label="3">3</el-radio>
      <el-radio label="6">6</el-radio>
      <el-radio label="9">9</el-radio>
    </el-radio-group>
  </div>
  <div>
    <el-radio-group v-model="radio1">
      <el-radio-button label="A" />
      <el-radio-button label="B" />
      <el-radio-button label="C" />
      <el-radio-button label="D" />
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const basic = defineComponent({
  data() {
    return {
      radio: '1',
      radio0: '3',
      radio1: 'A',
    }
  },
})
export default basic
</script>
