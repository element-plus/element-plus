<script setup lang="ts">
import { ref, computed } from 'vue'
const showBackToTop = ref(false)


</script>

<template>
  <main class="page">
    <div class="content-wrap">
      <el-scrollbar>
        <Content class="content" />
      </el-scrollbar>
    </div>
  </main>
  <el-backtop
    v-if="showBackToTop"
    target=".page-component__scroll .el-scrollbar__wrap"
    :right="100"
    :bottom="50"
  />
</template>
