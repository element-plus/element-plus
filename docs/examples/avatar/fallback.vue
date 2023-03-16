<template>
  <el-avatar :size="60" src="https://empty" @error="errorHandler">
    <el-image
      src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
    />
  </el-avatar>
</template>

<script lang="ts" setup>
const errorHandler = () => true
</script>
