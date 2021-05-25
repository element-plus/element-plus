## Select V2  虚拟列表选择器

:::tip
这个组件目前在测试当中，如果在使用中发现任何漏洞和问题，请在 [Github](https://github.com/element-plus/element-plus/issues) 中提交 issue 以便我们进行处理
:::

### 背景
在数据量爆发的今天，很多时候一个选择器可能从服务器加载非常多的数据，然而浏览器在一次性把这些数据渲染到页面上的时候会出现卡顿甚至是崩溃的情况，所以虚拟化技术应运而生，为了更好的用户体验和更好的使用体验，我们决定添加这个组件。

### 基础用法

:::demo 适用广泛的基础选择器

```html
<template>
  <el-select-v2
    v-model="value"
    :options="options"
    placeholder="请选择"
    style="width: 200px;"
    filterable
  />
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>

```


:::
