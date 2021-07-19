## PageHeader 页头

如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。

### 基础用法

:::demo
```html
<el-page-header @back="goBack" content="详情页面">
</el-page-header>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const goBack = () => {
        console.log('go back');
      };

      return {
        goBack,
      };
    },
  });

</setup>
-->
```
:::

### 自定义图标

:::demo
```html
<el-page-header icon="el-icon-arrow-left" content="详情页面"></el-page-header>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |------------------------------ | ------ |
| icon     | 图标           | string    |  —                            | el-icon-back   |
| title     | 标题           | string    |  —                            | 返回   |
| content   | 内容           | string    |  —                            | —      |


### Events
| 事件名称   | 说明           | 回调参数   |
|---------- |-------------- |---------- |
| back      | 点击左侧区域触发 | —        |

### Slots
| 事件名称    | 说明         |
|---------- |------------- |
| icon     | 自定义图标      |
| title     | 标题内容      |
| content   | 内容         |
