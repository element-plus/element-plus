<template>
  <el-space :size="10" :spacer="spacer">
    <el-button v-for="i in 2" :key="i"> button {{ i }} </el-button>
  </el-space>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElDivider } from 'element-plus'

const spacer = h(ElDivider, { direction: 'vertical' })
</script>
