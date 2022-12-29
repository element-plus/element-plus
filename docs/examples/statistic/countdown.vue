<template>
  <el-row>
    <el-col :span="8">
      <el-countdown title="Start to grab" :value="value" />
    </el-col>
    <el-col :span="8">
      <el-countdown
        title="Remaining VIP time"
        format="HH:mm:ss"
        :value="value1"
      />
      <el-button class="countdown-footer" type="primary" @click="reset"
        >Reset
      </el-button>
    </el-col>
    <el-col :span="8">
      <el-countdown format="DD [days] HH [hours] mm:ss" :value="value2">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            <el-icon style="margin-right: 4px" :size="12">
              <Calendar />
            </el-icon>
            New Year's Day is still to come
          </div>
        </template>
      </el-countdown>
      <div class="countdown-footer">2023-01-01 00:00:00</div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { Calendar } from '@element-plus/icons-vue'

const value = ref(Date.now() + 1000 * 60 * 60 * 7)
const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
const value2 = ref(dayjs('2023-01-01 00:00:00'))

function reset() {
  value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
</script>

<style scoped>
.el-col {
  text-align: center;
}

.countdown-footer {
  margin-top: 8px;
}
</style>
