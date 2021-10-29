<template>
  <el-switch
    v-model="value1"
    active-text="Pay by month"
    inactive-text="Pay by year"
  >
  </el-switch>
  <br />
  <el-switch
    v-model="value2"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <el-switch v-model="value3" inline-prompt active-text="是" inactive-text="否">
  </el-switch>
  <el-switch
    v-model="value4"
    inline-prompt
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="Y"
    inactive-text="N"
  />
</template>

<script lang="ts">
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
    }
  },
}
</script>
