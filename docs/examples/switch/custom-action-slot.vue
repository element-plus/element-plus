<template>
  <el-switch v-model="value1">
    <template #active-action>
      <span class="custom-active-action">T</span>
    </template>
    <template #inactive-action>
      <span class="custom-inactive-action">F</span>
    </template>
  </el-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
</script>
