<template>
  <div class="demo-progress">
    <el-progress :percentage="percentage" :color="customColor" />

    <el-progress :percentage="percentage" :color="customColorMethod" />

    <el-progress :percentage="percentage" :color="customColors" />
    <el-progress :percentage="percentage" :color="customColors" />
    <div>
      <el-button-group>
        <el-button :icon="Minus" @click="decrease" />
        <el-button :icon="Plus" @click="increase" />
      </el-button-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { Minus, Plus } from '@element-plus/icons'

export default defineComponent({
  setup() {
    const state = reactive({
      percentage: 20,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
    })
    const customColorMethod = (percentage) => {
      if (percentage < 30) {
        return '#909399'
      }
      if (percentage < 70) {
        return '#e6a23c'
      }
      return '#67c23a'
    }
    const increase = () => {
      state.percentage += 10
      if (state.percentage > 100) {
        state.percentage = 100
      }
    }
    const decrease = () => {
      state.percentage -= 10
      if (state.percentage < 0) {
        state.percentage = 0
      }
    }

    return {
      ...toRefs(state),
      customColorMethod,
      increase,
      decrease,
      Minus,
      Plus,
    }
  },
})
</script>
