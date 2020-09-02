<template>
  <div>
    <el-time-picker
      v-model="value1"
      placeholder="Arbitrary time"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
    }
  },
}
</script>
