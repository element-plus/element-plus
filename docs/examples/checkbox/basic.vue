<template>
  <el-checkbox v-model="checked" label="Option 1"></el-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(true)
</script>
