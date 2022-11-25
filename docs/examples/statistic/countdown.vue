<template>
  <div class="play-container2">
    <div class="s-card">
      <el-row>
        <el-col :span="8">
          <ElStatistic title="开始抢购" time-indices :value="value1" />
        </el-col>
        <el-col :span="8">
          <ElStatistic
            title="剩余VIP时长"
            format="HH:mm:ss"
            time-indices
            :value="value3"
          />
          <div class="f-center">
            <el-button type="primary" @click="reset">重置</el-button>
          </div>
        </el-col>
        <el-col :span="8">
          <ElStatistic
            :value="value4"
            time-indices
            format="DD 天 HH 时 mm 分 ss 秒"
          >
            <template #title>
              <el-icon style="margin-right: 4px" :size="12"
                ><Calendar
              /></el-icon>
              <span> 距离放假还有 </span>
            </template>
          </ElStatistic>
          <div class="f-center">2022年12月30日</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@element-plus/icons-vue'
const value: any = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
const value1: any = ref(Date.now() + 1000 * 60 * 60 * 7)

const value4: any = ref(Date.now() + 1000 * 60 * 60 * 24 * 82)

const value3: any = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)

function reset() {
  value3.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
// code here
</script>

<style lang="scss" scoped>
.play-container2 {
  height: 100%;
  width: 100%;
  .f-center {
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
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
