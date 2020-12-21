## Space 间距
虽然我们拥有 [Divider 组件](#/zh-CN/component/divider), 但很多时候我们需要不是一个被 [Divider 组件](#/zh-CN/component/divider) 分割开的页面结构, 因此我们会重复的使用很多的 [Divider 组件](#/zh-CN/component/divider), 这在我们的开发效率上造成了一定的困扰, **间距组件**就是为了解决这种困扰应运而生的.

### 基础用法
最基础的用法, 通过这个组件来给组件之间提供统一的间距

:::demo 通过间距组件来给多个组件之间提供间距

```html
<template>
  <el-space wrap>
    <el-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
      <template #header>
        <div class="clearfix">
          <span>Card name</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >Operation button</el-button
          >
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
</template>
```
:::

### 垂直布局
使用 `direction` 来控制布局的方式, 背后实际上是利用了 `flex-direction` 来控制.

:::demo 当然也提供垂直布局的方式

```html
<template>
  <el-space direction="vertical">
    <el-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
      <template #header>
        <div class="clearfix">
          <span>Card name</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >Operation button</el-button
          >
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
</template>
```

:::

### 控制间距的大小
通过调整 `size` 的值来控制间距的大小

可供选择的内建的值有 `mini`, `small`, `medium`, `large`, 分别对应 `4px`, `8px`, `12px`, `16px`. 默认的间距大小为 `small` 也就是 `8px`

您也可以通过自定义的 `size` 来控制大小，详见下一部分
:::demo 使用 `size` 属性控制大小

```html
<template>
  <el-space direction="vertical" alignment="start" :size="30">
  <el-radio-group v-model="size">
    <el-radio :label="'mini'">迷你</el-radio>
    <el-radio :label="'small'">小</el-radio>
    <el-radio :label="'medium'">中等</el-radio>
    <el-radio :label="'large'">大号</el-radio>
  </el-radio-group>

  <el-space wrap :size="size">
    <el-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
      <template #header>
        <div class="clearfix">
          <span>Card name</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >Operation button</el-button
          >
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
  </el-space>
</template>

<script>

export default {

  data() {
    return {
      size: 'mini',
    }
  }
}
</script>
```
:::

### 自定义 Size
很多时候, 内建的大小不满足设计师的要求, 我们可以通过传入自己定义的大小 (数字类型) 来设置

:::demo
```html
<template>
  <el-slider v-model="size" />
  <el-space wrap :size="size">
    <el-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
      <template #header>
        <div class="clearfix">
          <span>Card name</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >Operation button</el-button
          >
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
</template>

<script>
export default {

  data() {
    return {
      size: 20,
    }
  }
}
</script>
```
:::

:::tip
不要与使用依赖父元素百分比宽度 (高度) 的元素一起使用, 例如 `ElSlider`, 这样会造成光标不同步
:::

### 自动换行
在**水平 (horizontal)** 模式下,通过控制 `wrap` **(布尔类型)** 来控制是否自动换行

:::demo 利用 `wrap` 控制换行

```html
<el-space wrap>
  <div v-for="i in 20" :key="i">
    <el-button type="text">
      文字按钮
    </el-button>
  </div>
</el-space>
```
:::

### 行间分隔符
有时候, 仅仅在行间加空白, 并不能满足我们的日常需求, 此时分隔符 (spacer) 就可以发挥非常好的作用了.

#### 字符串 或 数字类型的分隔符

:::demo

```html
<template>
 <el-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <el-button>
        button {{ i }}
      </el-button>
    </div>
  </el-space>
</template>

<script>

export default {
  data() {
    return {
      size: 10,
    }
  },
}
</script>
```
:::

#### 分隔符还可以是 VNode 类型

:::demo
```html
<template>
 <el-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <el-button>
        button {{ i }}
      </el-button>
    </div>
  </el-space>
</template>

<script>
import { h, resolveComponent } from 'vue'
import { ElDivider } from 'element-plus'
export default {
  data() {
    return {
      size: 10,
      spacer: h(ElDivider, { direction: 'vertical' }),
    }
  },
}
</script>

```
:::

### 对齐方式
设置该值可以调整所有子节点在容器内的对齐方式, 可设置的值与 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) 一致

:::demo 用 alignment 来控制对齐

```html

<template>
  <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
    <el-space>
      string
      <el-button>
        button
      </el-button>
      <el-card>
        <template #header>
          header
        </template>
        body
      </el-card>
    </el-space>
  </div>
  <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
    <el-space alignment="flex-start">
      string
      <el-button>
        button
      </el-button>
      <el-card>
        <template #header>
          header
        </template>
        body
      </el-card>
    </el-space>
  </div>
  <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
    <el-space alignment="flex-end">
      string
      <el-button>
        button
      </el-button>
      <el-card>
        <template #header>
          header
        </template>
        body
      </el-card>
    </el-space>
  </div>
</template>

```
:::

### Space Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| alignment | 对齐的方式 | string | [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) | 'center' |
| class     | 类名      | string / Array<Object \| String> / Object | - | - |
| direction | 排列的方向 | string | vertical/horizontal | horizontal |
| prefixCls | 给 space-items 的类名前缀 | string | el-space | - |
| style     | 额外样式   | string / Array<Object \| String> / Object | - | - |
| spacer    | 间隔符     | string / number / VNode | - | - |
| size      | 间隔大小   | string / number / [number, number] | - | 'small' |
| wrap      | 设置是否自动折行 | boolean | true / false  | false |
### Space Slot
| name | 说明  |
|----|----|
| default | 需要添加间隔的元素 |
