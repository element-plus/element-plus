<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')
</script>

<template>
  <el-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</template>
