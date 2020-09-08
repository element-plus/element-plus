<template>
  <div>
    <el-time-picker
      v-model="value1"
      is-range
      placeholder="Arbitrary time"
      :enabled-hours="enabledHours"
      :enabled-minutes="enabledMinutes"
      :enabled-seconds="enabledSeconds"
    />
    value1: {{ value1 }}
    :picker-options="{
    selectableRange: '18:30:05 - 20:30:50'
    }"
    arrow-control
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
    enabledHours(type) {
      // if (type === 'end') {
      //   return range(11, 13)
      // }
      // type start | end
      return range(5, 10)
    },
    enabledMinutes(hour) {
      if (hour === 8) {
        return range(0, 29)
      }
      return range(30, 60)
    },
    enabledSeconds() {
      return [55, 56]
    },
  },
}
</script>
