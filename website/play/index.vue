<template>
  <div>
    {{ value1 }}
    <el-date-picker
      v-model="value1"
      type="monthrange"
      unlink-panels
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :default-value="[new Date(2000, 1, 1), new Date(2002, 1, 1)]"
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
        text: 'Yesterday',
        value: new Date(Date.now() - 86400000),
      }],
    }
  },
}
</script>
