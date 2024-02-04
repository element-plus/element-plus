<template>
  <el-anchor :offset="70" @change="handleChange">
    <el-anchor-link href="#basic-usage">Basic Usage</el-anchor-link>
    <el-anchor-link href="#horizontal-mode">Horizontal Mode</el-anchor-link>
    <el-anchor-link href="#scroll-container">Scroll Container</el-anchor-link>
    <el-anchor-link href="#anchor-api">
      Anchor API
      <template #sub-link>
        <el-anchor-link href="#anchor-attributes">
          Anchor Attributes
        </el-anchor-link>
        <el-anchor-link href="#anchor-events">Anchor events</el-anchor-link>
      </template>
    </el-anchor-link>
  </el-anchor>
</template>

<script setup lang="ts">
const handleChange = (href: string) => {
  console.log(`anchor change: ${href}`)
}
</script>
