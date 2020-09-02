<template>
  <div>
    <el-time-picker
      v-model="value1"
      is-range
      arrow-control
      placeholder="Arbitrary time"
      :default-value="new Date(2016, 9, 10, 18, 40)"
    />
    value1: {{ value1 }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
    }
  },
}
</script>
