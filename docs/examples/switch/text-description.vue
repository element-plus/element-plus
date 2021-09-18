<template>
  <el-switch
    v-model="value1"
    active-text="Pay by month"
    inactive-text="Pay by year"
  >
  </el-switch>
  <el-switch
    v-model="value2"
    style="display: block"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
</template>

<script lang="ts">
export default {
  data() {
    return {
      value1: true,
      value2: true,
    }
  },
}
</script>
