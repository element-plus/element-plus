## Config Provider

Config Provider is used for providing global configurations, which enables your entire application to access these configurations everywhere

### i18n related configurations

Configure i18n related properties via Config Provider, to get language switching feature

:::demo Use two attributes to provide i18n related config

```html
<div>
  <el-config-provider :locale="locale2">
    <el-color-picker :modelValue="''" style="vertical-align: middle;" />
  </el-config-provider>
  <el-button @click="toggle" style="margin-left: 8px; vertical-align: middle;">
    Switch Lang
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

### ConfigProvider Attributes

| Attribute | Description                                                                                                                                                       | Type                                 | Accepted Values                                                                         | Default |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------- | ------- |
| locale    | Locale Object                                                                                                                                                     | Object\<Language\>                   | [languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) | English |
| i18n      | External translator, when this attribute is provided, it will be used at first, and it will fallback to default translator when this method returns nullish value | Function\<(...args: []) =\> string\> | -                                                                                       | -       |
