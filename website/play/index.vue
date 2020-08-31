<template>
  <div class="block">
    value1: {{ value1 }}
    <el-date-picker
      v-model="value1"
      type="monthrange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month"
      :shortcuts="shortcuts"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      shortcuts: [{
        text: 'This month',
        onClick(picker) {
          picker.emit('pick', [new Date(), new Date()])
        },
      }, {
        text: 'This year',
        onClick(picker) {
          const end = new Date()
          const start = new Date(new Date().getFullYear(), 0)
          picker.emit('pick', [start, end])
        },
      }, {
        text: 'Last 6 months',
        onClick(picker) {
          const end = new Date()
          const start = new Date()
          start.setMonth(start.getMonth() - 6)
          picker.emit('pick', [start, end])
        },
      }],
    }
  },
}
</script>
