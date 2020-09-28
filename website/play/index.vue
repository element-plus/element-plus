<template>
  <div>
    {{ value1 }}
    <el-date-picker
      v-model="value1"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date(2000, 9, 1),
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
      shortcuts: [{
        text: '最近一周',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          return [start, end]
        })(),
      }, {
        text: '最近一个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          return [start, end]
        })(),
      }, {
        text: '最近三个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          return [start, end]
        })(),
      }],
    }
  },
}
</script>
