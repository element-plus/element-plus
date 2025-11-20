<template>
  <el-input v-for="i in 500" :key="i" />
</template>
<script setup lang="ts"></script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
