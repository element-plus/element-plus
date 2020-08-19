<template>
  <div>
    <!-- <el-time-picker
      v-model="value1"
      is-range
      range-separator="To"
      start-placeholder="Start time"
      end-placeholder="End time"
    /> -->
    value2: {{ value2 }}
    <el-time-picker
      v-model="value2"
      placeholder="placeholderplaceholder"
      :picker-options="{
        format: 'HH:mm',
      }"
    />
    <div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value2: '',
    }
  },
}
</script>
