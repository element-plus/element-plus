<template>
  <div class="demo-time-range">
    <el-time-select
      v-model="startTime"
      style="width: 240px"
      :max-time="endTime"
      class="mr-4"
      placeholder="Start time"
      start="08:30"
      step="00:15"
      end="18:30"
    />
    <el-time-select
      v-model="endTime"
      style="width: 240px"
      :min-time="startTime"
      placeholder="End time"
      start="08:30"
      step="00:15"
      end="18:30"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startTime = ref('')
const endTime = ref('')
</script>
