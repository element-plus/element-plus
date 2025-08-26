<template>
  <el-tooltip-v2 aria-label="content" teleported to="body">
    <template #trigger>
      <el-button>hover me</el-button>
    </template>
    <div>I am attached to document.body</div>
  </el-tooltip-v2>
</template>
