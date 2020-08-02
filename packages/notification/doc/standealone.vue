<template>
  <el-button @click="onClick">
    click me
  </el-button>
</template>

<script lang="ts">
import Notification from '../src/standalone'
export default {
  methods: {
    onClick(): void {
      Notification({
        message: 'HI',
      })
    },
  },
}
</script>