<script setup lang="ts">
import { ref, computed } from 'vue'
import PageFooter from '../components/page-footer.vue'
import PageNav from '../components/page-nav.vue'
const showBackToTop = ref(false)
</script>

<template>
  <main class="page">
    <div class="content-wrapper">
      <Content class="content" />
      <PageFooter />
      <PageNav />
    </div>
  </main>
  <el-backtop
    v-if="showBackToTop"
    target=".page-component__scroll .el-scrollbar__wrap"
    :right="100"
    :bottom="50"
  />
</template>
