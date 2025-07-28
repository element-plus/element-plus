<template>
  <el-color-picker-panel v-model="color" disabled class="box-content" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref<string>()
</script>
