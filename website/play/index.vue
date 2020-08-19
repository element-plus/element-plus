<template>
  <div>
    value1: {{ value1 }}
    <el-time-picker
      v-model="value1"
      is-range
      size="mini"
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
