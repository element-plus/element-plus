<template>
  <div class="demo-progress">
    <el-progress type="dashboard" :percentage="percentage" :color="colors" />
    <el-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <div>
      <el-button-group>
        <el-button :icon="Minus" @click="decrease" />
        <el-button :icon="Plus" @click="increase" />
      </el-button-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { Minus, Plus } from '@element-plus/icons'

export default defineComponent({
  setup() {
    const state = reactive({
      percentage: 10,
      percentage2: 0,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
    })
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
    onMounted(() => {
      setInterval(() => {
        state.percentage2 = (state.percentage2 % 100) + 10
      }, 500)
    })

    return {
      ...toRefs(state),
      increase,
      decrease,
      Minus,
      Plus,
    }
  },
})
</script>
