<template>
  <el-input
    v-model="textarea1"
    autosize
    type="textarea"
    placeholder="Please input"
    class="mb-3"
  />
  <el-input
    v-model="textarea2"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea1 = ref('')
const textarea2 = ref('')
</script>
