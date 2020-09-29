<template>
  <div>
    {{ value }}
    <el-time-picker
      v-model="value"
    />
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
      disabledHours(role) {
        if (role === 'start') {
          return makeRange(0, 7).concat(makeRange(13, 23))
        }
        return makeRange(0, 10).concat(makeRange(17, 23))
      },
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
      shortcuts: [{
        text: 'Yesterday',
        value: new Date(Date.now() - 86400000),
      }],
    }
  },
}
</script>
