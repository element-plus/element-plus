<template>
  <div>
    :picker-options="{
    selectableRange: '18:30:05 - 20:30:50'
    }"

    <el-time-picker
      v-model="value1"
      arrow-control
      placeholder="Arbitrary time"
      :enabled-hours="enabledHours"
      :enabled-minutes="enabledMinutes"
      :enabled-seconds="enabledSeconds"
    />
    value1: {{ value1 }}
  </div>
</template>

<script>
function range(start, end) {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
}
export default {
  data() {
    return {
      value1: '',
    }
  },
  methods: {
    enabledHours() {
      // type start | end
      return range(5, 10)
    },
    enabledMinutes() {
      return range(30, 60)
    },
    enabledSeconds() {
      return [55, 56]
    },
  },
}
</script>
