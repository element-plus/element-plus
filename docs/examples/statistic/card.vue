<template>
  <div class="play-container3">
    <div class="s-card s-bg">
      <el-row :gutter="16">
        <el-col :span="8">
          <el-card class="itemCard">
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
            <div class="s-Bottom">
              <span class="item"
                >比昨日
                <span class="green">
                  24% <el-icon><CaretTop /></el-icon>
                </span>
              </span>
              <span class="item"
                >比前日
                <span class="red">
                  17% <el-icon><CaretBottom /></el-icon>
                </span>
              </span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="itemCard">
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
            <div class="s-Bottom">
              <span class="item"
                >月同比
                <span class="green">
                  24% <el-icon><CaretTop /></el-icon>
                </span>
              </span>
              <span class="item"
                >月环比
                <span class="red">
                  12% <el-icon><CaretBottom /></el-icon>
                </span>
              </span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="itemCard">
            <ElStatistic
              style="width: 110px"
              :value-style="{ fontSize: '28px' }"
              :value="268500"
            >
              <template #title>
                <div>
                  今日新增成交
                  <el-icon><Warning /></el-icon>
                </div>
              </template>
            </ElStatistic>
            <div class="s-Bottom">
              <span class="item"
                >本月总成交单数比上月
                <span class="green">
                  16% <el-icon><CaretTop /></el-icon>
                </span>
              </span>
              <el-icon><ArrowRight /></el-icon>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'

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

<style lang="scss" scoped>
:root {
  --bg-color: red;
}

#play {
  height: 100%;
  width: 100%;
  .play-container3 {
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
  }
  .itemCard {
    width: 100%;
    height: 200px;
    border: solid red 1px;
    text-align: left;
  }
}

.s-Bottom {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 16px;
  // padding-bottom: 20px;
  font-size: 12px;

  color: #606266;
  .item {
    height: 20px;
    padding-left: 4px;
    display: inline-block;
  }
  .green {
    color: #67c23a;
  }
  .red {
    color: #f56c6c;
  }
}
</style>
