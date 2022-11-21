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
                <div class="titleLeft">
                  <span> 日活跃用户数 </span>
                  <el-popover
                    placement="top-start"
                    title="Title"
                    :width="200"
                    trigger="hover"
                    content="this is content, this is content, this is content"
                  >
                    <template #reference>
                      <el-icon :size="12"><Warning /></el-icon>
                    </template>
                  </el-popover>
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
                <div class="titleLeft">
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
                <div class="titleLeft">
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
              <el-icon :size="14" @click="onClick"><ArrowRight /></el-icon>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'

function onClick() {
  ElMessage({
    message: 'Are you going far away?',
    type: 'success',
  })
}

// code here
</script>

<style lang="scss" scoped>
>>> .example-showcase {
  border: solid red 1px;
}

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
  // height: 200px;
}

.titleLeft {
  display: inline-flex;
  align-items: center;
  text-align: left;
  text-align: left;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-left: -5px;
  i {
    margin-left: 4px;
  }
}

.s-Bottom {
  display: flex;
  align-items: center;
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
