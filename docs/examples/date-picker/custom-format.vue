<script setup lang="ts">
import { ref } from 'vue'

const vaule = ref('')
const extractTimeFormat = (f: string) => {
  const time = f.split(' ')[1]
  return time
}
const extractDateFormat = (f: string) => {
  const date = f.split(' ')[0]
  return date
}

const value1 = ref('')
const extractTimeFormat1 = (f: string) => {
  return f.slice(-5)
}
const extractDateFormat1 = (f: string) => {
  return f.slice(0, -5)
}
</script>

<template>
  <div class="demo-custom-format">
    <el-date-picker
      v-model="vaule"
      :extract-date-format="extractDateFormat"
      :extract-time-format="extractTimeFormat"
      type="datetime"
      format="YYYY年MM月DD日 HH时mm分ss秒"
      placeholder="Select date and time"
    />
    <el-date-picker
      v-model="value1"
      class="two"
      :extract-date-format="extractDateFormat1"
      :extract-time-format="extractTimeFormat1"
      type="datetime"
      format="MMM DD, YYYY HH:mm"
      placeholder="Select date and time"
    />
  </div>
</template>
<style scoped>
.demo-custom-format {
  .two {
    margin-left: 20px;
  }
}
</style>
