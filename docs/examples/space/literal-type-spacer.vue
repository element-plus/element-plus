<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(10)
</script>

<template>
  <el-space :size="size" spacer="|">
    <div v-for="i of 2" :key="i">
      <el-button> button {{ i }} </el-button>
    </div>
  </el-space>
</template>
