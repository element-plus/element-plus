<template>
  <el-progress :percentage="50" />
  <el-progress :percentage="100" :format="() => '满'" />
  <el-progress :percentage="100" status="success" />
  <el-progress :percentage="100" status="warning" />
  <el-progress :percentage="50" status="exception" />
  <el-progress
    :text-inside="true"
    :stroke-width="24"
    :percentage="100"
    status="success"
  />
  <el-progress
    :text-inside="true"
    :stroke-width="22"
    :percentage="80"
    status="warning"
  />
  <el-progress type="circle" :percentage="25" />
  <el-progress type="circle" :percentage="100" status="success" />
  <el-progress type="circle" :percentage="70" status="warning" />
  <div>
    <el-progress type="dashboard" :percentage="percentage" :color="colors" />
    <el-button-group>
      <el-button icon="el-icon-minus" @click="decrease" />
      <el-button icon="el-icon-plus" @click="increase" />
    </el-button-group>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Basic',
  setup() {
    const percentage = ref(10)
    const colors = ref([
      { color: '#f56c6c', percentage: 20 },
      { color: '#e6a23c', percentage: 40 },
      { color: '#5cb87a', percentage: 60 },
      { color: '#1989fa', percentage: 80 },
      { color: '#6f7ad3', percentage: 100 },
    ])
    const increase = () => {
      percentage.value += 10
      if (percentage.value > 100) {
        percentage.value = 100
      }
    }
    const decrease = () => {
      percentage.value -= 10
      if (percentage.value < 0) {
        percentage.value = 0
      }
    }

    return {
      percentage,
      colors,
      decrease,
      increase,
    }
  },
})
</script>

<style>
  div[role=progressbar] {
    margin: 5px 0;
  }
</style>
