<template>
  value1: {{ value1 }}
  <el-date-picker
    v-model="value1"
    type="dates"
    placeholder="Pick a month"
  />
</template>

<script>
export default {
  data() {
    return {
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
      shortcuts: [{
        text: 'Today',
        onClick(picker) {
          picker.emit('pick', new Date())
        },
      }, {
        text: 'Yesterday',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          picker.emit('pick', date)
        },
      }, {
        text: 'A week ago',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          picker.emit('pick', date)
        },
      }],
      value1: '',
    }
  },
}
</script>
