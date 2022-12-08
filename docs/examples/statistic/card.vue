<template>
  <div class="play-container3">
    <div class="s-card s-bg">
      <el-row :gutter="16">
        <el-col :span="8">
          <el-card class="itemCard">
            <ElStatistic :value="98500" :value-style="{ fontSize: '28px' }">
              <template #title>
                <div class="titleLeft">
                  <span> Daily active users </span>

                  <el-tooltip
                    class="box-item"
                    effect="dark"
                    content="Number of users who logged into the product in one day"
                    placement="top"
                  >
                    <el-icon :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </ElStatistic>
            <div class="s-Bottom">
              <el-row>
                <el-col :span="12" :xs="24" class="item">
                  <div>than yesterday</div>
                  <div class="green">
                    24%
                    <el-icon>
                      <CaretTop />
                    </el-icon>
                  </div>
                </el-col>
                <el-col
                  :span="12"
                  :xs="24"
                  class="item"
                  style="text-align: right"
                >
                  <div>two days ago</div>
                  <div class="red">
                    17%
                    <el-icon>
                      <CaretBottom />
                    </el-icon>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="itemCard">
            <ElStatistic :value="693700" :value-style="{ fontSize: '28px' }">
              <template #title>
                <div class="titleLeft">
                  Monthly Active Users
                  <el-tooltip
                    class="box-item"
                    effect="dark"
                    content="Number of users who logged into the product in one day"
                    placement="top"
                  >
                    <el-icon :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </ElStatistic>
            <div class="s-Bottom">
              <el-row>
                <el-col :span="12" :xs="24" class="item">
                  <div>year on year</div>
                  <div class="green">
                    24%
                    <el-tooltip
                      class="box-item"
                      effect="dark"
                      content="Top Center prompts info"
                      placement="top"
                    >
                      <el-icon :size="12">
                        <Warning />
                      </el-icon>
                    </el-tooltip>
                  </div>
                </el-col>
                <el-col
                  :span="12"
                  :xs="24"
                  class="item"
                  style="text-align: right"
                >
                  <div>month on month</div>
                  <div class="red">
                    12%
                    <el-icon>
                      <CaretBottom />
                    </el-icon>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="itemCard">
            <ElStatistic :value-style="{ fontSize: '28px' }" :value="72000">
              <template #title>
                <div class="titleLeft">
                  New transactions today
                  <!-- <el-icon>
                    <Warning />
                  </el-icon> -->
                </div>
              </template>
            </ElStatistic>
            <div class="s-Bottom">
              <el-row>
                <el-col :span="22">
                  <span class="item">
                    than yesterday
                    <span class="red">
                      16%
                      <el-icon>
                        <CaretBottom />
                      </el-icon>
                    </span>
                  </span>
                </el-col>
                <el-col :span="2">
                  <el-icon :size="14" @click="onClick">
                    <ArrowRight />
                  </el-icon>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
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
.el-statistic {
  --el-statistic-head-justify-content: flex-start;
  --el-statistic-content-justify-content: flex-start;
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
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    background: var(--el-fill-color);
  }
}

.itemCard {
  width: 100%;
}

.titleLeft {
  display: inline-flex;
  align-items: center;
  text-align: left;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;

  i {
    margin-left: 4px;
  }
}

.s-Bottom {
  margin-top: 16px;
  font-size: 12px;

  color: var(--el-text-color-regular);

  .item {
    height: 20px;
    padding-left: 4px;
    padding-bottom: 4px;
    display: inline-block;
    margin-bottom: 0px;
  }

  .green {
    color: var(--el-color-success);
  }

  .red {
    color: var(--el-color-error);
  }
}
</style>
