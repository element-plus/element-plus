---
title: Built-in transitions
lang: en-US
---

# Built-in transition

You can use Element's built-in transitions directly.
Before that, please read the [transition docs](https://vuejs.org/v2/api/#transition).

## fade

:::demo We have two fading effects: `el-fade-in-linear` and `el-fade-in`.

transition/fade

:::

## zoom

:::demo `el-zoom-in-center`, `el-zoom-in-top` and `el-zoom-in-bottom` are provided.

transition/zoom

:::

## collapse

For collapse effect, use the `el-collapse-transition` component.

:::demo

transition/collapse

:::

## On demand

```ts
// fade/zoom
import 'element-plus/lib/theme-chalk/base.css'
// collapse
import { ElCollapseTransition } from 'element-plus'
import Vue from 'vue'

Vue.component(ElCollapseTransition.name, ElCollapseTransition)
```
