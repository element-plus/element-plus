---
title: Built-in Transitions
lang: en-US
---

# Built-in Transition

You can use Element's built-in transitions directly.
Before that, please read the [transition docs](https://vuejs.org/v2/api/#transition).

## Fade

:::demo We have two fading effects: `el-fade-in-linear` and `el-fade-in`.

transition/fade

:::

## Zoom

:::demo `el-zoom-in-center`, `el-zoom-in-top` and `el-zoom-in-bottom` are provided.

transition/zoom

:::

## Collapse

For collapse effect, use the `el-collapse-transition` component.

:::demo

transition/collapse

:::

## On-demand import

```ts
// collapse
import { ElCollapseTransition } from 'element-plus'
// fade/zoom
import 'element-plus/lib/theme-chalk/base.css'
import App from './App.vue'

const app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
```
