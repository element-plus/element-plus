<template>
  <el-switch
    v-model="value"
    size="large"
    active-text="Open"
    inactive-text="Close"
  />
  <br />
  <el-switch v-model="value" active-text="Open" inactive-text="Close" />
  <br />
  <el-switch
    v-model="value"
    size="small"
    active-text="Open"
    inactive-text="Close"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
</script>
