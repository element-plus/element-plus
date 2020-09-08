<template>
  <div>
    <el-time-picker
      v-model="value"
      is-range
      :enabled-hours="enabledHours"
    />
    value1: {{ value }}
    <br>
    // left ['08:00:00 - 12:59:59'] right ['11:00:00 - 16:59:59']
  </div>
</template>

<script>
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
      value: '',
    }
  },
  methods: {
    enabledHours(role) {
      if (role === 'start') {
        return makeRange(8, 12)
      }
      return makeRange(11, 16)
    },
  },
}
</script>
