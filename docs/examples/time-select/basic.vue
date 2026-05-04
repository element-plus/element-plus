<template>
  <el-time-select
    v-model="value"
    style="width: 240px"
    start="08:30"
    step="00:15"
    end="18:30"
    placeholder="Select time"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
