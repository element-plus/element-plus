<template>
  <el-time-select
    v-model="value"
    start="08:30"
    step="00:15"
    end="24:00"
    placeholder="Select time"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
