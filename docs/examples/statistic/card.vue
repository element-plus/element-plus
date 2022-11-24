<template>
  <div class="play-container3">
    <div class="s-card s-bg">
      <el-row :gutter="16">
        <el-col :span="8">
          <el-card class="itemCard">
            <ElStatistic
              :value="98500"
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
                      <el-icon :size="12">
                        <Warning />
                      </el-icon>
                    </template>
                  </el-popover>
                </div>
              </template>
            </ElStatistic>
            <div class="s-Bottom">
              <el-row>
                <el-col :span="12" :xs="24">
                  <span class="item"
                    >比昨日
                    <span class="green">
                      24%
                      <el-icon>
                        <CaretTop />
                      </el-icon>
                    </span> </span
                ></el-col>
                <el-col :span="12" :xs="24">
                  <span class="item" style="text-align: right"
                    >比前日
                    <span class="red">
                      17%
                      <el-icon>
                        <CaretBottom />
                      </el-icon>
                    </span> </span
                ></el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="itemCard">
            <ElStatistic
              :value="693700"
              style="width: 110px"
              :value-style="{ fontSize: '28px' }"
            >
              <template #title>
                <div class="titleLeft">
                  月活跃用户数
                  <el-icon>
                    <Warning />
                  </el-icon>
                </div>
              </template>
            </ElStatistic>
            <div class="s-Bottom">
              <el-row>
                <el-col :span="12" :xs="24">
                  <span class="item"
                    >月同比
                    <span class="green">
                      24%
                      <el-icon>
                        <CaretTop />
                      </el-icon>
                    </span> </span
                ></el-col>
                <el-col :span="12" :xs="24">
                  <span class="item" style="text-align: right"
                    >月环比
                    <span class="red">
                      12%
                      <el-icon>
                        <CaretBottom />
                      </el-icon>
                    </span> </span
                ></el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="itemCard">
            <ElStatistic
              style="width: 110px"
              :value-style="{ fontSize: '28px' }"
              :value="72000"
            >
              <template #title>
                <div class="titleLeft">
                  今日新增成交
                  <el-icon>
                    <Warning />
                  </el-icon>
                </div>
              </template>
            </ElStatistic>
            <div class="s-Bottom">
              <el-row>
                <el-col :span="20">
                  <span class="item"
                    >比昨日
                    <span class="red">
                      16%
                      <el-icon>
                        <CaretBottom />
                      </el-icon>
                    </span> </span
                ></el-col>
                <el-col :span="4">
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
  }

  .green {
    color: var(--el-color-success);
  }

  .red {
    color: var(--el-color-error);
  }
}
</style>
