<template>
  value1: {{ value1 }}
  <el-time-picker
    v-model="value1"
  />
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
