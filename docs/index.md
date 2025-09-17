---
title: 'A Vue 3 UI Framework'
lang: en-US
page: true
---

<!-- Placeholder -->

<script setup lang="ts">
import { useRouter } from 'vitepress'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  // 有时候 locale 的自动跳转会失效
  setTimeout(() => {
    const path = router.route?.path
    if (path === '/') {
      router.go('/en-US/')
    }
  }, 500)
})
</script>
