<script lang="ts" setup>
import { h, ref } from 'vue'
import { ElDivider } from 'element-plus'

const size = ref(10)
const spacer = h(ElDivider, { direction: 'vertical' })
</script>

<template>
  <el-space :size="size" :spacer="spacer">
    <div v-for="i of 2" :key="i">
      <el-button> button {{ i }} </el-button>
    </div>
  </el-space>
</template>
