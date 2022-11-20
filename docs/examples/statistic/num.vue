<template>
  <div class="play-container">
    <div class="s-card">
      <el-row>
        <el-col :span="6">
          <el-statistic title="日活跃用户数" :value="268500" />
        </el-col>
        <el-col :span="6">
          <el-statistic :value="138">
            <template #title>
              <div>
                男女比
                <el-icon><Male /></el-icon>
              </div>
            </template>
            <template #suffix> /100 </template>
          </el-statistic>
        </el-col>
        <el-col :span="6">
          <el-statistic title="总成交" :value="172000">
            <template #suffix> 单 </template>
          </el-statistic>
        </el-col>
        <el-col :span="6">
          <el-statistic title="反馈数" :value="562">
            <template #suffix>
              <el-icon><ChatLineRound /></el-icon>
            </template>
          </el-statistic>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChatLineRound, Male } from '@element-plus/icons-vue'
// import { ElStatistic } from '@element-plus/components'
const value: any = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
const value1: any = ref(Date.now() + 1000 * 60 * 60 * 7)

const value4: any = ref(Date.now() + 1000 * 60 * 60 * 24 * 82)

const value3: any = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)

const value2: any = ref(0)
function add() {
  value.value = value.value + 1000 * 60 * 10
}
function reset() {
  value3.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
// code here
</script>

<style lang="scss">
.play-container {
  height: 100%;
  width: 100%;

  .f-center {
    text-align: center;
    margin-top: 10px;
  }

  .s-card {
    width: 100%;
    margin-top: 20px;
  }

  .s-bg {
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    background: #f0f2f5;
    border: 1px solid #dcdfe6;
  }

  .item {
    width: 100%;
    height: 200px;
    text-align: left;
  }
}
</style>
