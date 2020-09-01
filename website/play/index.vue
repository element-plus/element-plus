<template>
  <el-date-picker
    v-model="value2"
    type="daterange"
    align="right"
    unlink-panels
    range-separator="To"
    start-placeholder="Start date"
    end-placeholder="End date"
    :shortcuts="shortcuts"
  />
</template>

<script>
export default {
  data() {
    return {
      shortcuts: [{
        text: 'Last week',
        onClick(picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          picker.emit('pick', [start, end])
        },
      }, {
        text: 'Last month',
        onClick(picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          picker.emit('pick', [start, end])
        },
      }, {
        text: 'Last 3 months',
        onClick(picker) {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          picker.emit('pick', [start, end])
        },
      }],
      value2: '',
    }
  },
}
</script>
