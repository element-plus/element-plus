## Scrollbar

Used to replace the browser's native scrollbar.

### Basic usage

:::demo Use `height` property to set the height of the scrollbar, or if not set, it adapts according to the parent container height.

```html
<el-scrollbar height="400px">
  <p class="item" v-for="item in 20">{{ item }}</p>
</el-scrollbar>
```

:::

### Horizontal scroll

:::demo When the element width is greater than the scrollbar width, the horizontal scrollbar is displayed.

```html
<el-scrollbar>
  <div class="flex-content">
    <p class="item" v-for="item in 50">{{ item }}</p>
  </div>
</el-scrollbar>
```

:::

### Max height

:::demo The scrollbar is displayed only when the element height exceeds the max height.

```html
<template>
  <el-button @click="add">Add Item</el-button>
  <el-button @click="delete">Delete Item</el-button>
  <el-scrollbar max-height="400px">
    <p class="item" v-for="item in count">{{ item }}</p>
  </el-scrollbar>
</template>

<script>
  export default {
    data() {
      return {
        count: 3
      }
    },
    methods: {
      add() {
        this.count++
      },
      delete() {
        if (this.count > 0) {
          this.count--
        }
      }
    }
  }
</script>
```

:::

### Scrollbar Attributes

| Attribute       | Description        | Type        | Accepted Values        | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| height          | height of scrollbar         | string / number  |          —             |    —     |
| max-height          | max height of scrollbar         | string / number  |          —             |    —     |
| native          | whether to use the native scrollbar style         | boolean  |          —             |    false     |
| wrap-style    | style of warp container  | string | — |    —  |
| wrap-class  |class of warp container    | string  |    —  |  — |
| view-style  | style of view    | string  |    —  |  — |
| view-class  | class of view    | string  |    —  |  — |
| noresize  | do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance    | boolean  |    —  |  false |
| tag  | element tag of the view    | string  |    —  |  div |

### Events

| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| scroll | triggers when scrolling | distance of scrolling { scrollLeft, scrollTop }|
