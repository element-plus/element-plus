<template>
  <el-slider v-model="value" vertical height="200px" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>
