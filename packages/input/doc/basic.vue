<template>
  <div class="demo-input">
    <h3>基础用法</h3>
    <el-input v-model="input1" placeholder="请输入内容" />
  </div>
  <div class="demo-input">
    <h3>禁用状态</h3>
    <el-input v-model="input1" placeholder="请输入内容" :disabled="true" />
  </div>
  <div class="demo-input">
    <h3>可清空</h3>
    <el-input v-model="input2" placeholder="请输入内容" clearable />
  </div>
  <div class="demo-input">
    <h3>密码框</h3>
    <el-input v-model="input3" placeholder="请输入密码" show-password />
  </div>
  <div class="demo-input">
    <h3>带 icon 的输入框</h3>
    <div class="demo-input-suffix">
      属性方式：
      <el-input v-model="input1" placeholder="请选择日期" suffix-icon="el-icon-date" />
      <el-input v-model="input2" placeholder="请输入内容" prefix-icon="el-icon-search" />
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <el-input v-model="input3" placeholder="请选择日期">
        <template #suffix>
          <i class="el-input__icon el-icon-date"></i>
        </template>
      </el-input>
      <el-input v-model="input4" placeholder="请输入内容">
        <template #prefix>
          <i class="el-input__icon el-icon-search"></i>
        </template>
      </el-input>
    </div>
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
.demo-input-suffix {
  margin-bottom: 15px;
}
.demo-input .el-input {
  width: 180px;
  margin-right: 15px;
}
</style>
