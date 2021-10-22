---
title: Migration
lang: en-US
---

# Migration

## From Element UI 2.x

This document will help you upgrade from Element 2.x to Element Plus.

## Breaking changes

Here is the list of breaking changes.

For now, check [list of breaking changes](https://github.com/element-plus/element-plus/issues/162)
for full details before more thorough documentation is available.

## Vue 3 migration build

You may encounter some issues when using ElementPlus with Vue 3 migration build. Some of the components rely on Vue 3 internal API's. It's worth trying to adjust compatConfig mode to 3, either globally or [per component in your project](https://v3.vuejs.org/guide/migration/migration-build.html#per-component-config).
