<template>
  <div>
    <el-input v-model="input1" placeholder="请输入内容">
      <template #prepend>Http://</template>
    </el-input>
  </div>
  <div style="margin-top: 15px;">
    <el-input v-model="input2" placeholder="请输入内容">
      <template #append>.com</template>
    </el-input>
  </div>
  <div style="margin-top: 15px;">
    <el-input v-model="input3" class="input-with-select" placeholder="请输入内容">
      <!-- <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select> -->
      <template #append>
        <el-button icon="el-icon-search" />
      </template>
    </el-input>
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
    }
  },
})

export default basic
</script>

<style>
.demo-input .el-input {
  width: 180px;
  margin-right: 15px;
}
</style>
