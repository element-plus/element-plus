<template>
  <el-switch v-model="value1" disabled />
  <el-switch v-model="value2" />
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
    }
  },
}
</script>
