<template>
  <div class="demo-input-size">
    <el-input v-model="input1" placeholder="请输入内容" suffix-icon="el-icon-date" />
    <el-input
      v-model="input2"
      size="medium"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
    />
    <el-input
      v-model="input3"
      size="small"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
    />
    <el-input
      v-model="input4"
      size="mini"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const basic = defineComponent({
  data() {
    return {
      input1: '1111',
      input2: '2222',
      input3: '',
      input4: '',
    }
  },
})

export default basic
</script>

<style>
.demo-input-size .el-input {
  width: 180px;
  margin-right: 15px;
}
</style>
