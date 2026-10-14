<template>
  <!-- If you want to apply a custom namespace, uncomment the following and apply the css configuration in `vite.config.ts`. -->
  <!-- <el-config-provider namespace="ep"> -->
  <div class="play-container">
    <el-icon color="#409EFC">
      <el-icon-check />
    </el-icon>
    <el-icon>
      <el-icon-menu />
    </el-icon>
    <el-button>test</el-button>
    <div v-loading="true" />
  </div>
  <!-- </el-config-provider> -->
</template>

<script setup lang="ts">
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;

    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
