<template>
  <el-rate v-model="value" size="large"></el-rate>
  <br />
  <el-rate v-model="value"></el-rate>
  <br />
  <el-rate v-model="value" size="small"></el-rate>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
</script>
