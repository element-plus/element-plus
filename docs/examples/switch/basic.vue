<template>
  <el-switch v-model="value1" />
  <el-switch
    v-model="value2"
    class="ml-2"
    active-color="#13ce66"
    inactive-color="#ff4949"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
