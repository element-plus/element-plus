---
title: 'A Vue 3 UI framework'
lang: en-US
page: true
---

<script setup>

if (typeof window !== 'undefined') {
  const preferredLang = localStorage.getItem('preferred_lang') || 'en-US'
  window.location.pathname = `/${preferredLang}/`
}

</script>
