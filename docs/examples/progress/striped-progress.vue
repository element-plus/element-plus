<template>
  <div class="demo-progress">
    <el-progress :percentage="50" :stroke-width="15" striped />
    <el-progress
      :percentage="30"
      :stroke-width="15"
      status="warning"
      striped
      striped-flow
    />
    <el-progress
      :percentage="100"
      :stroke-width="15"
      status="success"
      striped
      striped-flow
      :duration="10"
    />
    <el-progress
      :percentage="percentage"
      :stroke-width="15"
      status="exception"
      striped
      striped-flow
      :duration="duration"
    />
    <el-button @click="percentage -= 10">-</el-button>
    <el-button @click="percentage += 10">+</el-button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const percentage = ref<number>(70)
const duration = computed(() => Math.floor(percentage.value / 10))
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
