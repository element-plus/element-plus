<template>
  <el-switch v-model="value1" disabled />
  <el-switch v-model="value2" />
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
