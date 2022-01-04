<template>
  <el-radio v-model="radio" disabled label="disabled">Option A</el-radio>
  <el-radio v-model="radio" disabled label="selected and disabled"
    >Option B</el-radio
  >
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>
