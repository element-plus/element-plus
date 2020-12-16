## Space 间距组件
虽然我们拥有 [Divider 组件](#/zh-CN/component/divider)，但很多时候，我们需要不仅仅是被一个 [Divider 组件](#/zh-CN/component/divider) 分割开的页面结构，因此我们会重复的使用很多的 [Divider 组件](#/zh-CN/component/divider)，这在我们的开发效率上造成了一定的困扰，**间距组件**就是为了解决这种困扰应运而生的

### 基础用法
最基础的用法，通过这个组件来给组件之间提供统一的间距

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
使用 `direction` 来控制布局的方式，背后实际上是利用了 `flex-direction` 来控制。

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
可供选择的内建的值有 `mini` `small` `medium` `large`，分别对应 `8px` `12px` `16px` `20px`
默认的间距大小为 `small` 也就是 `12px`
您也可以通过自定义的 `size` 来控制大小，详见下一部分
:::demo 使用 `size` 属性控制大小

```html

<template>
  <el-space direction="vertical" alignment="start" :size="30">
  <el-radio-group v-model="size">
    <el-radio value="mini" :label="'mini'">迷你</el-radio>
    <el-radio value="small" :label="'small'">小</el-radio>
    <el-radio value="medium" :label="'medium'">中等</el-radio>
    <el-radio value="large" :label="'large'">大号</el-radio>
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
很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小（数字类型）来设置

:::demo
```html

<template>
  <el-space direction="vertical" alignment="start" :size="30">
  <el-radio-group v-model="size">
    <el-radio value="mini" :label="'mini'">迷你</el-radio>
    <el-radio value="small" :label="'small'">小</el-radio>
    <el-radio value="medium" :label="'medium'">中等</el-radio>
    <el-radio value="large" :label="'large'">大号</el-radio>
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

<!-- <template>
  <el-space :size="size" wrap :spacer="spacer">
    <div v-for="i in 20" :key="i">
      <el-card class="box-card" style="width: 480px;">
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
    </div>
    <div class="1" v-if="value">111</div>
  </el-space>
  <el-button @click="size ++"> click </el-button>
</template>

<script>
import ElDivider from '@element-plus/divider'
import { h } from 'vue'
export default {
  data() {
    return {
      value: false,
      spacer: h(ElDivider),
      size: 10,
    }
  },
}
</script> -->

