---
title: Migration
lang: en-US
---

# Migration

[This guide](https://github.com/element-plus/element-plus/discussions/5658) will help you upgrade from Element 2.x to Element Plus.

## Vue 3 migration build

You may encounter some issues when using Element Plus with Vue 3 migration build. Some of the components rely on Vue 3 internal API's. It's worth trying to adjust compatConfig mode to 3, either globally or [per component in your project](https://v3.vuejs.org/guide/migration/migration-build.html#per-component-config).

<style scoped>
  details {
    margin-top: 8px;
  }
</style>
