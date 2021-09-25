<template>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="defaultTime1"
    >
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration"
      >Start date time 12:00:00, end date time 08:00:00</span
    >
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="defaultTime2"
    >
    </el-date-picker>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      value1: '',
      value2: '',
      defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)], // '12:00:00'
      defaultTime2: [
        new Date(2000, 1, 1, 12, 0, 0),
        new Date(2000, 2, 1, 8, 0, 0),
      ], // '12:00:00', '08:00:00'
    })

    return toRefs(state)
  },
})
</script>
