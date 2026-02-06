---
title: Custom Defaults
lang: en-US
---

# Custom Defaults

The component library allows you to customize the default values of component props.

By configuring defaults in advance, you can reduce repetitive prop declarations and keep your templates cleaner and more consistent.

## Basic Usage

You can customize a component’s default props using the static `setPropsDefaults` method provided by the component.

:::tip

Note that default customization **only applies to declarative usage** and **must be performed before the component is initialized**.

:::

```ts [main.ts]
import { ElButton } from 'element-plus'

ElButton.setPropsDefaults({
  type: 'primary',
  size: 'small',
})
```

After applying the customization, the following two usages are equivalent:

```vue [App.vue]
<template>
  <el-button>Hello</el-button>
  <el-button type="primary" size="small">Hello</el-button>
</template>
```
