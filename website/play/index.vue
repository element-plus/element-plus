<template>
  <div>
    value1: {{ value1 }}
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day"
    />
    <div>
    </div>
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
