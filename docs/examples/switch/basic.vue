<template>
  <el-switch v-model="value1" />
  <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" />
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
