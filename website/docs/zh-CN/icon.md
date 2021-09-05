## Icon 图标

提供了一套常用的图标集合。

:::warning
Element Plus 团队正在将原有组件内的 **Font Icon** 向 **SVG Icon** 迁移，请多多留意 [ChangeLog](/#/zh-CN/component/changelog), 及时获取到更新信息，**Font Icon** 将会在第一个正式发布被废弃，请尽快迁移
:::

### SvgIcon 使用方法

- 如果你想像用例一样**直接使用**，你需要[全局注册组件](https://v3.vuejs.org/guide/component-registration.html#global-registration)，才能够直接在项目里使用。

- 若想查看所有的组件，请访问 [@element-plus/icons](https://unpkg.com/browse/@element-plus/icons@latest/lib/) 和源代码 [Github/ElementPlus/icons](https://github.com/element-plus/element-plus-icons)，或者 [SVG 图标集合](/#/zh-CN/component/icon#svg-tu-biao-ji-he)

### 安装图标

当前的图标只适用于 [Vue3](https://v3.vuejs.org)。

#### 使用 yarn

```shell
$ yarn add @element-plus/icons
```

#### 使用 npm

```shell
$ npm install @element-plus/icons
```

#### 基础用法

```html
<!-- 用 el-icon 为 SVG 提供属性 -->
<el-icon :size="size" :color="color">
  <edit />
</el-icon>
<!-- 或者单独使用，不从祖先节点继承任何属性 -->
<edit />

<script lang="ts">
  import { Edit } from '@element-plus/icons'

  export default defineComponent({
    components: {
      // 全名
      [Edit.name]: Edit,
      // 或者以缩写的方式,
      Edit,
    },
  })
</script>
```

#### 结合 `el-icon` 使用

:::demo `el-icon` 为 raw SVG 图标提供额外的属性, 提供的详细属性请继续阅读

```html
<p>
  通过添加额外的类名 <b>is-loading</b>，你的图标就可以在 2 秒内旋转 360
  度，但让你也可以自己改写想要的动画。
</p>
<el-icon :size="20">
  <edit />
</el-icon>
<el-icon color="#409EFC" class="no-inherit">
  <share />
</el-icon>
<el-icon>
  <delete />
</el-icon>
<el-icon class="is-loading">
  <loading />
</el-icon>
<el-button type="primary">
  <el-icon style="vertical-align: middle;">
    <search />
  </el-icon>
  <span style="vertical-align: middle;"> 搜索 </span>
</el-button>
```

:::

#### 直接使用 SVG icon

:::demo

```html
<div style="font-size: 20px;">
  <!-- SVG icon 自身不带任何属性，你需要额外提供属性。-->
  <edit style="width: 1em; height: 1em; margin-right: 8px;" />
  <share style="width: 1em; height: 1em; margin-right: 8px;" />
  <delete style="width: 1em; height: 1em; margin-right: 8px;" />
  <search style="width: 1em; height: 1em; margin-right: 8px;" />
</div>
```

:::

### SVG 图标集合

:::tip
`el-icon (包裹组件)` 更新于 **ElementPlus@1.0.2-beta.66**，适用于 **1.0.2-beta.66(包含 66)** 以后的版本，你只能在该版本之后的版本使用 `el-icon`。

**SVG 图标可以在任意版本使用。**

**点击图标可复制到剪贴板。**
:::

<ul class="icon-list">
  <li
    v-for="component in $svgIcons"
    :key="component"
    @click="$copySvgIcon(component)">
    <span class="demo-svg-icon">
      <el-icon color="#000">
        <component :is="component" />
      </el-icon>
      <span class="icon-name">{{component}}</span>
    </span>
  </li>
</ul>

### Font Icon 使用方法

直接通过设置类名为 `el-icon-iconName` 来使用即可。例如：

:::demo

```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">搜索</el-button>
```

:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>

### SvgIcon 属性

| 参数  | 说明                        | 类型                           | 可选值 | 默认值  |
| ----- | --------------------------- | ------------------------------ | ------ | ------- |
| color | svg 的 fill 颜色            | Pick\<CSSProperties, 'color'\> | -      | inherit |
| size  | svg 图标的大小, size x size | number                         | -      | inherit |
