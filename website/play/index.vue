<template>
  <div>
    {{ value1 }}
    <el-date-picker
      v-model="value1"
      :default-value="new Date(2000, 1,1)"
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
