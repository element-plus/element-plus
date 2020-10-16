<template>
  <div>
    <el-button class="item" @click="onClick">Centered text</el-button>
  </div>
</template>

<script lang="ts">
import Message from '../src/message'

export default {
  methods: {
    onClick(): void {
      Message({ message: 'Centered text', center: true })
    },
  },
}
</script>
