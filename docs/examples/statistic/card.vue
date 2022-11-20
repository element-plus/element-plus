<template>
  <div class="play-container">
    <div class="s-card s-bg">
      <el-row :gutter="16">
        <el-col :span="8">
          <el-card class="item">
            <ElStatistic
              :value="268500"
              style="width: 110px"
              :value-style="{ fontSize: '28px' }"
            >
              <template #title>
                <div style="text-align: left">
                  日活跃用户数
                  <el-icon><Warning /></el-icon>
                </div>
              </template>
            </ElStatistic>

            <ElStatistic style="width: 110px; margin-top: 40px" :value="138">
              <template #suffix> /100 </template>
            </ElStatistic>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="item">
            <ElStatistic
              :value="268500"
              style="width: 110px"
              :value-style="{ fontSize: '28px' }"
            >
              <template #title>
                <div style="text-align: left">
                  月活跃用户数
                  <el-icon><Warning /></el-icon>
                </div>
              </template>
            </ElStatistic>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="item">
            <ElStatistic :value="268500">
              <template #title>
                <div>
                  今日新增成交
                  <el-icon><Warning /></el-icon>
                </div>
              </template>
            </ElStatistic>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Warning } from '@element-plus/icons-vue'

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
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;
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
  }
}
</style>
