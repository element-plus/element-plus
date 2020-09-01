<template>
  <div>
    <el-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="Arbitrary time"
    />
    <el-time-picker
      v-model="value2"
      arrow-control
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="Arbitrary time"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
    }
  },
}
</script>
