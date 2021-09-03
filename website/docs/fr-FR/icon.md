## Icônes

Element Plus fournit un ensemble d'icônes basiques.

:::warning
Element Plus team is replacing all **Font Icon** in the previously built components to **SVG Icon**, please keep you eyes on [ChangeLog](/#/fr/component/changelog), for getting latest updates, **Font Icon** will be deprecated after the first stable release.
:::

### SVG Icon Usage
- If you want to **use directly** like the example, you need to [globally register](https://v3.vuejs.org/guide/component-registration.html#global-registration) the components before using it.

- If you want to see all available SVG icons please check [@element-plus/icons](https://unpkg.com/browse/@element-plus/icons@latest/lib/) and the source [Github/ElementPlus/icons](https://github.com/element-plus/element-plus-icons) out or [SVG icons](/#/fr/component/icon#svg-tu-biao-ji-he)

### Installation
The current icon is only targeted to [Vue3](https://v3.vuejs.org).
#### Using yarn
```shell
$ yarn add @element-plus/icons
```

#### Using npm
```shell
$ npm install @element-plus/icons
```

#### Simple usage

```html
<!-- Use el-icon to provide attributes to SVG icon -->
<el-icon :size="size" :color="color">
  <edit />
</el-icon>
<!-- Or use it independently without derive attributes from parent -->
<edit />

<script lang="ts">
import { Edit } from '@element-plus/icons'

export default defineComponent({
  components: {
    // Full name
    [Edit.name]: Edit,
    // or Shorthanded,
    Edit,
  },
})
</script>
```
#### Combined with `el-icon`
:::demo  `el-icon` provides extra attributes for raw SVG icon, for more detail, please read to the end.
```html
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2 seconds, you can also override this
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
    <span style="vertical-align: middle;">
      Search
    </span>
  </el-button>
```
:::

#### Using SVG icônes directly

:::demo
```html
  <div style="font-size: 20px;">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <edit style="width: 1em; height: 1em; margin-right: 8px;" />
    <share style="width: 1em; height: 1em; margin-right: 8px;" />
    <delete style="width: 1em; height: 1em; margin-right: 8px;" />
    <search style="width: 1em; height: 1em; margin-right: 8px;" />
  </div>
```
:::

### SVG icônes collection
:::tip
This collection is updated after ElementPlus@1.0.2-beta.66(included), you can only use `el-icon` to wrap it after ElementPlus@1.0.2-beta.66(included), or directly use it without version constrains

**You can use SVG icon in any version as long as you install it**

**You can click the icon to copy it**
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

### Font Icônes Basic usage

Just assign the class name to `el-icon-iconName`.

:::demo

```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">Search</el-button>

```
:::

### Font Icônes

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>


### SVG icônes Attributs
| Attribute      | Description    | Type      | Acceptable Value       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| color    | SVG tag's fill attribute | Pick\<CSSProperties, 'color'\> | - | inherit from color |
| size | SVG icon size, size x size | number | - | inherit from font size |
