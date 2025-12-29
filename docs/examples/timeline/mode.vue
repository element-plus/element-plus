<template>
  <el-radio-group v-model="mode">
    <el-radio-button label="left" value="left" />
    <el-radio-button label="alternate" value="alternate" />
    <el-radio-button label="right" value="right" />
  </el-radio-group>

  <el-timeline class="mt-4" style="max-width: 600px" :mode="mode">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]

const mode = ref<'left' | 'alternate' | 'right'>('left')
</script>
