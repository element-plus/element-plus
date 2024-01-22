<template>
  <el-switch v-model="value1" loading />
  <el-switch v-model="value2" loading class="ml-2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
<style scoped>
.ml-2 {
  margin-left: 0.5rem;
}
</style>
