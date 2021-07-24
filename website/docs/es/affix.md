## Affix

Fix the element to a specific visible area.

### Basic usage

Affix is fixed at the top of the page by default.

:::demo You can set `offset` attribute to change the offset top，the default value is 0。
```html
<el-affix :offset="120">
  <el-button type="primary">Offset top 120px</el-button>
</el-affix>
```
:::

### Target container

You can set `target` attribute to keep the affix in the container at all times. It will be hidden if out of range.

:::demo Please notice that the container avoid having scrollbar.
```html
<div class="affix-container">
  <el-affix target=".affix-container" :offset="80">
    <el-button type="primary">Target container</el-button>
  </el-affix>
</div>
```
:::

### Fixed position

The affix component provides two fixed positions: `top` and `bottom`.

:::demo You can set `position` attribute to change the fixed position, the default value is `top`.
```html
<el-affix position="bottom" :offset="20">
  <el-button type="primary">Offset bottom 20px</el-button>
</el-affix>
```
:::

### Attributes
| Attribute  | Description    | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| offset     | offset distance      | number | — | 0 |
| position | position of affix | string | top / bottom | top |
| target | target container (CSS selector) | string | — | — |
| z-index | z-index of affix | number | — | 100 |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change | 	triggers when fixed state changed | (value: boolean) |
| scroll | 	triggers when scrolling | scroll top and fixed state |

### Methods
| Method | Description | Parameters |
|------|--------|-------|
| update | update affix state manually | — |