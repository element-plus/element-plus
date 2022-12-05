<template>
  <div class="play-container1">
    <div class="s-card">
      <el-row>
        <el-col :span="6">
          <el-statistic title="Daily active users" :value="268500" />
        </el-col>
        <el-col :span="6">
          <el-statistic :value="138">
            <template #title>
              Ratio of men to women
              <el-icon style="" :size="12">
                <Male />
              </el-icon>
            </template>
            <template #suffix> /100 </template>
          </el-statistic>
        </el-col>
        <el-col :span="6">
          <el-statistic title="Total Transactions" :value="172000">
            <template #suffix>
              <span style="font-size: 12px" />
            </template>
          </el-statistic>
        </el-col>
        <el-col :span="6">
          <el-statistic title="Feedback number" :value="562">
            <template #suffix>
              <el-icon>
                <ChatLineRound />
              </el-icon>
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
const value: any = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
function add() {
  value.value = value.value + 1000 * 60 * 10
}
</script>

<style lang="scss" scoped>
.play-container1 {
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
    background: var(--el-fill-color);
  }

  .item {
    width: 100%;
    height: 200px;
    text-align: left;
  }
}
</style>
