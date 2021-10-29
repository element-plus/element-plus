<template>
  <el-switch v-model="value1" active-text="是" inactive-text="否"> </el-switch>
  <el-switch
    v-model="value2"
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
    }
  },
}
</script>
