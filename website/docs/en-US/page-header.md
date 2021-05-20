## PageHeader

If path of the page is simple, it is recommended to use PageHeader instead of the Breadcrumb.

### Basic usage

:::demo
```html
<el-page-header @back="goBack" content="detail">
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
```
:::

### Custom icon

:::demo
```html
<el-page-header icon="el-icon-arrow-left" content="detail"></el-page-header>
```
:::

### Attributes
| Attribute | Description   | Type      | Accepted Values               | Default |
|---------- |-------------- |---------- |------------------------------ | ------ |
| icon     |  icon    | string    |  —                            | el-icon-back   |
| title     | main title    | string    |  —                            | Back   |
| content   | content       | string    |  —                            | —      |

### Events
| Event Name | Description   | Parameters |
|----------- |-------------- |----------- |
| back       | triggers when right side is clicked | — |

### Slots
| Name      | Description            |
|---------- | ---------------------- |
| icon     | custom icon          |
| title     | title content          |
| content   | content                |
