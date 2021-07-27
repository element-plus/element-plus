## Config Provider

Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到。

### 国际化相关配置

通过 Config Provider 来配置国际化相关的服务，能让你的应用完成语言切换和获取。

:::demo 通过两个属性来提供国际化相关的语言配置

```html
<div>
  <el-config-provider :locale="locale1">
    <el-color-picker :modelValue="''" style="vertical-align: middle;" />
  </el-config-provider>
  <el-button @click="toggle" style="margin-left: 8px; vertical-align: middle;">
    切换语言
  </el-button>
</div>

<script>
  // import { ConfigProvider } from 'element-plus'
  export default {
    data() {
      return {
        locale1: {
          name: 'zh-cn',
          el: {
            colorpicker: {
              confirm: '确定',
              clear: '清空',
            },
          },
        },
        locale2: {
          name: 'en',
          el: {
            colorpicker: {
              confirm: 'Confirm',
              clear: 'Clear',
            },
          },
        },
      }
    },
    methods: {
      toggle() {
        const temp = this.locale1
        this.locale1 = this.locale2
        this.locale2 = temp
      },
    },
  }
</script>
```

:::

### ConfigProvider 属性

| 参数   | 说明                                                                                               | 类型                                 | 可选值                                                                                  | 默认值  |
| ------ | -------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------- | ------- |
| locale | 翻译文本对象                                                                                       | Object\<Language\>                   | [languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) | English |
| i18n   | 外部的翻译方法，当该方法被提供时，会优先使用该方法进行翻译的操作，若返回空值便会落回到自带翻译方法 | Function\<(...args: []) =\> string\> | -                                                                                       | -       |
