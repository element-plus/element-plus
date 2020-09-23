<template>
  <div>
    {{ value1 }}
    <el-date-picker
      v-model="value1"
      type="monthrange"
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
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
      shortcuts: [{
        text: 'This month',
        value: [new Date(), new Date()],
      }, {
        text: 'This year',
        value: (() => {
          const end = new Date()
          const start = new Date(new Date().getFullYear(), 0)
          return [start, end]
        })(),
      }, {
        text: 'Last 6 months',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setMonth(start.getMonth() - 6)
          return [start, end]
        })(),
      }],
    }
  },
}
</script>
