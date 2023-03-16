<template>
  <el-tooltip-v2 aria-label="content" teleported to="body">
    <template #trigger>
      <el-button>hover me</el-button>
    </template>
    <el-text>I am attached to document.body</el-text>
  </el-tooltip-v2>
</template>
