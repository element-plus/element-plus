---
title: Migration
lang: en-US
---

# Migration

[This guide](https://github.com/element-plus/element-plus/discussions/5658) will help you upgrade from Element 2.x to Element Plus.

## Vue 3 migration build

You may encounter some issues when using Element Plus with Vue 3 migration build. Some of the components rely on Vue 3 internal API's. It's worth trying to adjust compatConfig mode to 3, either globally or [per component in your project](https://v3-migration.vuejs.org/migration-build.html).

## Migration Tool :hammer_and_wrench:

We have made a migration tool for you to migrate your project from [Element UI](https://element.eleme.io) to Element Plus.
You can find the [gogo code migration tool](https://github.com/thx/gogocode/tree/main/packages/gogocode-plugin-element) here.

We have tested this on [Vue Element Admin](https://github.com/PanJiaChen/vue-element-admin) (Vue 2 + Element UI). You can find the transpiled code [here](https://github.com/gogocodeio/vue-element-admin).

<style scoped>
  details {
    margin-top: 8px;
  }
</style>
