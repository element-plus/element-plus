<template>
  <el-time-select
    v-model="value"
    start="08:30"
    step="00:15"
    end="18:30"
    placeholder="Select time"
  >
  </el-time-select>
</template>

<script lang="ts">
export default {
  data() {
    return {
      value: '',
    }
  },
}
</script>
