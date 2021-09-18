<template>
  <div class="demo-basic">
    <el-time-picker
      v-model="value1"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      :disabled-seconds="disabledSeconds"
      placeholder="Arbitrary time"
    >
    </el-time-picker>
    <el-time-picker
      v-model="value2"
      arrow-control
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      :disabled-seconds="disabledSeconds"
      placeholder="Arbitrary time"
    >
    </el-time-picker>
  </div>
</template>

<script lang="ts">
const makeRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
export default {
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
    }
  },
  methods: {
    // e.g. allow 17:30:00 - 18:30:00
    disabledHours() {
      return makeRange(0, 16).concat(makeRange(19, 23))
    },
    disabledMinutes(hour) {
      if (hour === 17) {
        return makeRange(0, 29)
      }
      if (hour === 18) {
        return makeRange(31, 59)
      }
    },
    disabledSeconds(hour, minute) {
      if (hour === 18 && minute === 30) {
        return makeRange(1, 59)
      }
    },
  },
}
</script>

<style lang="scss">
.demo-basic {
  .el-date-editor {
    margin: 8px;
  }
}
</style>
