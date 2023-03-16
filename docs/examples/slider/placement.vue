<template>
  <el-slider v-model="value1" />
  <el-slider v-model="value2" placement="bottom" class="mt-3" />
  <el-slider v-model="value3" placement="right" class="mt-3" />
  <el-slider v-model="value4" placement="left" class="mt-3" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
</script>
