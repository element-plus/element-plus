<template>
  <div>
    <el-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="place holder"
      :default-value="new Date(2016, 9, 10, 18, 40)"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      :disabled-seconds="disabledSeconds"
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
    disabledHours() {
      return range(0, 24).splice(4, 20)
    },
    disabledMinutes() {
      return range(30, 60)
    },
    disabledSeconds() {
      return [55, 56]
    },
  },
}
</script>
