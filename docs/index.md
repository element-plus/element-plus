---
title: 'A Desktop UI Toolkit for Web'
lang: en-US
page: true
---

<script setup>

  if (typeof window !== 'undefined') {
    const preferredLang = localStorage.getItem('preferred_lang') || navigator.language || ''
    const supportedLang = ['en-US', 'es-ES', 'fr-FR', 'ja-JP', 'zh-CN']
    const language = supportedLang.indexOf(preferredLang) > -1 ? preferredLang : supportedLang[0]
    window.location.pathname = `/${language}/`
  }

</script>
