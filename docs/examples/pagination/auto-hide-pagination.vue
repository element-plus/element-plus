<template>
  <el-switch v-model="value" />
  <el-divider />
  <el-pagination
    :hide-on-single-page="value"
    :total="5"
    layout="prev, pager, next"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
</script>
