<template>
  <el-row :gutter="16">
    <el-col :span="8">
      <el-text tag="div" class="statistic-card">
        <el-statistic :value="98500">
          <template #title>
            <el-text>
              Daily active users
              <el-tooltip
                effect="dark"
                content="Number of users who logged into the product in one day"
                placement="top"
              >
                <el-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </el-icon>
              </el-tooltip>
            </el-text>
          </template>
        </el-statistic>
        <el-text>
          than yesterday
          <el-text type="success">
            24%
            <el-icon>
              <CaretTop />
            </el-icon>
          </el-text>
        </el-text>
      </el-text>
    </el-col>
    <el-col :span="8">
      <el-text tag="div" class="statistic-card">
        <el-statistic :value="693700">
          <template #title>
            <el-text>
              Monthly Active Users
              <el-tooltip
                effect="dark"
                content="Number of users who logged into the product in one month"
                placement="top"
              >
                <el-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </el-icon>
              </el-tooltip>
            </el-text>
          </template>
        </el-statistic>
        <el-text>
          month on month
          <el-text type="error">
            12%
            <el-icon>
              <CaretBottom />
            </el-icon>
          </el-text>
        </el-text>
      </el-text>
    </el-col>
    <el-col :span="8">
      <el-text tag="div" class="statistic-card">
        <el-statistic :value="72000" title="New transactions today">
          <template #title>
            <el-text> New transactions today </el-text>
          </template>
        </el-statistic>
        <el-row>
          <el-col :span="20">
            <el-text>
              than yesterday
              <el-text type="success">
                16%
                <el-icon>
                  <CaretTop />
                </el-icon>
              </el-text>
            </el-text>
          </el-col>
          <el-col :span="4" class="text-right">
            <el-icon :size="14">
              <ArrowRight />
            </el-icon>
          </el-col>
        </el-row>
      </el-text>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: var(--el-border-radius-base);
  background-color: var(--el-fill-color-light);
}
</style>
