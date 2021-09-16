<template>
  <el-switch v-model="value1" loading />
  <el-switch v-model="value2" loading />
</template>

<script lang="ts">
export default {
  data() {
    return {
      value1: true,
      value2: false,
    }
  },
}
</script>
