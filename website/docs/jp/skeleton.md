## Skeleton

When loading data, and you need a rich experience for visual and interactions for your end users, you can choose `skeleton`. 

### 基本的な使い方

The basic skeleton.

:::demo
```html
<template>
  <el-skeleton />
</template>
```
:::

### より多くの行

You can config the row number, in order to match the real DOM structure.

:::demo
```html
<el-skeleton :rows="5" />
```
:::

### アニメーション

Whether to show the animation, the loading effect would be more attractive. but **be careful** with this flag, sometimes users hate this kind of flashy effect.

:::demo
```html
<el-skeleton :rows="5" loading />
```
:::

### Skeleton Attributes
| Attribute          | Description            | Type            | Accepted Value                | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| rows      | The number of rows you need to show  | number  |  int value  |    3     |
| loading      | Flag for the flashy animation state | boolean  |  true / false  |  false |