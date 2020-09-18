<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day"
    />
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
