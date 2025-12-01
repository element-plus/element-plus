<template>
  <el-row :gutter="16">
    <el-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <el-statistic title="Daily active users" :value="268500" />
    </el-col>
    <el-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <el-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of men to women
            <el-icon style="margin-left: 4px" :size="12">
              <Male />
            </el-icon>
          </div>
        </template>
        <template #suffix>/100</template>
      </el-statistic>
    </el-col>
    <el-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <el-statistic title="Total Transactions" :value="outputValue" />
    </el-col>
    <el-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <el-statistic title="Feedback number" :value="562">
        <template #suffix>
          <el-icon style="vertical-align: -0.125em">
            <ChatLineRound />
          </el-icon>
        </template>
      </el-statistic>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ChatLineRound, Male } from '@element-plus/icons-vue'

// use useTransition
// import { useTransition } from '@vueuse/core'

// const source = ref(0)
// const outputValue = useTransition(source, {
//   duration: 1500,
// })
// source.value = 172000

const outputValue = ref(0)

const executeTransition = (from: number, to: number, duration: number) => {
  const startTime = Date.now()
  const endTime = Date.now() + duration
  const speed = (to - from) / duration

  const tick = () => {
    const now = Date.now()
    outputValue.value = from + (now - startTime) * speed
    if (now < endTime) {
      window.requestAnimationFrame(tick)
    } else {
      outputValue.value = to
    }
  }

  tick()
}

executeTransition(outputValue.value, 172000, 1500)
</script>
