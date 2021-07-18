## anchor 锚点

用于跳转到页面指定位置。

### 基本用法

固钉默认固定在页面顶部。

:::demo 通过设置 `offset` 属性来改变吸顶距离，默认值为 0。
```html
<el-anchor target=".page-component__scroll .el-scrollbar__wrap" :affix="true" :offset="120">
  <el-anchor-link title="Attributes" href="#attributes"/>
  <el-anchor-link title="Events" href="#events"/>
</el-anchor>
<div id="block" :style="{
    marginTop: '1000px'
}">
</div>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| offset     | 偏移距离           | number | — | 0 |
| target | 指定容器（CSS 选择器） | string | — | — |
| bounds | 锚点区域边界	 | number | — | 5 |
| targetOffset     | 锚点滚动偏移量,默认与 offsetTop 相同           | number | — | offset |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | click 事件的 handler | (e: Event, info: {href: string}) |
| change | 监听锚点链接改变	 | （currentActiveLink: string） |

