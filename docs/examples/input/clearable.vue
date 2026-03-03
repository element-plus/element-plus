<template>
  <div class="input-group">
    <el-input
      v-model="input"
      style="width: 240px"
      placeholder="Please input"
      clearable
    />
    <el-input
      v-model="textareaInput"
      style="width: 240px"
      placeholder="Please input"
      type="textarea"
      clearable
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')
const textareaInput = ref('')
</script>

<style>
.input-group {
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>
