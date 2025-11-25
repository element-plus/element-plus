<template>
  <el-popover
    v-for="i in 500"
    :key="i"
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button class="m-2">Hover to activate</el-button>
    </template>
  </el-popover>
</template>
<script setup lang="ts"></script>
<style></style>
