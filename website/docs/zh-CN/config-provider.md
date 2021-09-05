# Config Provider

Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到，Config Provider 使用了 [Vue 的 provide/inject 特性](https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity)

```html
<template>
  <el-config-provider :locale="locale">
    <app />
  </el-config-provider>
</template>

<script>
  import { defineComponent } from 'vue'
  import { ElConfigProvider } from 'element-plus'

  import zhCn from 'element-plus/lib/locale/lang/zh-cn'

  export default defineComponent({
    components: {
      ElConfigProvider,
    },
    setup() {
      return {
        locale: zhCn,
      }
    },
  })
</script>
```

## 代码演示

:::demo

```html
<div>
  <el-config-provider :locale="locale1">
    <div style="margin: 8px;">
      <el-empty />
    </div>
    <div style="margin: 8px;">
      <el-transfer />
    </div>
  </el-config-provider>
  <el-button @click="toggle" style="margin-left: 8px; vertical-align: middle;">
    切换语言
  </el-button>
</div>
<script>
  import { ref } from 'vue'
  // import { ConfigProvider } from 'element-plus'
  export default {
    setup() {
      const locale1 = ref({
        name: 'zh-cn',
        el: {
          table: {
            emptyText: '无数据',
          },
          transfer: {
            titles: ['列表1', '列表2'],
            noData: '无数据',
          },
        },
      })
      const locale2 = ref({
        name: 'en',
        el: {
          table: {
            emptyText: 'no data',
          },
          transfer: {
            titles: ['list 1', 'list 2'],
            noData: 'no data',
          },
        },
      })
      const toggle = () => {
        const temp = locale1.value
        locale1.value = locale2.value
        locale2.value = temp
      }
      return {
        locale1,
        locale2,
        toggle,
      }
    },
  }
</script>
```

:::

### ConfigProvider 属性

| 参数   | 说明         | 类型               | 可选值                                                                                  | 默认值  |
| ------ | ------------ | ------------------ | --------------------------------------------------------------------------------------- | ------- |
| locale | 翻译文本对象 | Object\<Language\> | [languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) | English |
