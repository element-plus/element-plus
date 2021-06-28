## Notification

Displays a global notification message at a corner of the page.

### Basic usage

:::demo Element Plus has registered the `$notify` method and it receives an object as its parameter. In the simplest case, you can set the `title` field and the` message` field for the title and body of the notification. By default, the notification automatically closes after 4500ms, but by setting `duration` you can control its duration. Specifically, if set to `0`, it will not close automatically. Note that `duration` receives a `Number` in milliseconds.

```html
<template>
  <el-button
    plain
    @click="open1">
    Closes automatically
  </el-button>
  <el-button
    plain
    @click="open2">
    Won't close automatically
    </el-button>
</template>

<script>
  import { h } from 'vue';

  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, h } from 'vue';
  import { ElNotification } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const open1 = () => {
        ElNotification({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
      };

      const open2 = () => {
        ElNotification({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      };
      return {
        open1,
        open2,
      };
    },
  });

</setup>
-->
```
:::

### With types

We provide four types: success, warning, info and error.

:::demo Element Plus provides four notification types: `success`, `warning`, `info` and `error`. They are set by the `type` field, and other values will be ignored. We also registered methods for these types that can be invoked directly like `open3` and `open4` without passing a `type` field.
```html
<template>
  <el-button
    plain
    @click="open1">
    Success
  </el-button>
  <el-button
    plain
    @click="open2">
    Warning
  </el-button>
  <el-button
    plain
    @click="open3">
    Info
  </el-button>
  <el-button
    plain
    @click="open4">
    Error
  </el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { ElNotification } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const open1 = () => {
        ElNotification({
          title: 'Success',
          message: 'This is a success message',
          type: 'success',
        });
      };

      const open2 = () => {
        ElNotification({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning',
        });
      };

      const open3 = () => {
        ElNotification({
          title: 'Info',
          message: 'This is an info message',
        });
      };

      const open4 = () => {
        ElNotification({
          title: 'Error',
          message: 'This is an error message',
        });
      };
      return {
        open1,
        open2,
        open3,
        open4,
      };
    },
  });

</setup>
-->
```
:::

### Custom position

Notification can emerge from any corner you like.

:::demo The `position` attribute defines which corner Notification slides in. It can be `top-right`, `top-left`, `bottom-right` or `bottom-left`. Defaults to `top-right`.
```html
<template>
  <el-button
    plain
    @click="open1">
    Top Right
  </el-button>
  <el-button
    plain
    @click="open2">
    Bottom Right
  </el-button>
  <el-button
    plain
    @click="open3">
    Bottom Left
  </el-button>
  <el-button
    plain
    @click="open4">
    Top Left
  </el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top right corner'
        });
      },

      open2() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom right corner',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom left corner',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top left corner',
          position: 'top-left'
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { ElNotification } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const open1 = () => {
        ElNotification({
          title: 'Custom Position',
          message: 'I\'m at the top right corner',
        });
      };

      const open2 = () => {
        ElNotification({
          title: 'Custom Position',
          message: 'I\'m at the bottom right corner',
          position: 'bottom-right',
        });
      };

      const open3 = () => {
        ElNotification({
          title: 'Custom Position',
          message: 'I\'m at the bottom left corner',
          position: 'bottom-left',
        });
      };

      const open4 = () => {
        ElNotification({
          title: 'Custom Position',
          message: 'I\'m at the top left corner',
          position: 'top-left',
        });
      };
      return {
        open1,
        open2,
        open3,
        open4,
      };
    },
  });

</setup>
-->
```
:::

### With offset

Customize Notification's offset from the edge of the screen.

:::demo Set the `offset` attribute to customize Notification's offset from the edge of the screen. Note that every Notification instance of the same moment should have the same offset.
```html
<template>
  <el-button
    plain
    @click="open">
    Notification with offset
  </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { ElNotification } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const open = () => {
        ElNotification.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100,
        });
      };

      return {
        open,
      };
    },
  });

</setup>
-->
```
:::

### Use HTML string
`message` supports HTML string.

:::demo Set `dangerouslyUseHTMLString` to true and `message` will be treated as an HTML string.
```html
<template>
  <el-button
    plain
    @click="open">
    Use HTML String
  </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { ElNotification } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const open = () => {
        ElNotification({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>',
        });
      };

      return {
        open,
      };
    },
  });

</setup>
-->
```
:::

:::warning
Although `message` property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). So when `dangerouslyUseHTMLString` is on, please make sure the content of `message` is trusted, and **never** assign `message` to user-provided content.
:::

### Hide close button

It is possible to hide the close button

:::demo Set the `showClose` attribute to `false` so the notification cannot be closed by the user.
```html
<template>
  <el-button
    plain
    @click="open">
    Hide close button
    </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { ElNotification } from 'element-plus';

  export default defineComponent({
    setup() {
      
      const open = () => {
        ElNotification.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false,
        });
      };

      return {
        open,
      };
    },
  });

</setup>
-->
```
:::

### Global method

Element Plus has added a global method `$notify` for `app.config.globalProperties`. So in a vue instance you can call `Notification` like what we did in this page.

### Local import

```javascript
import { ElNotification } from 'element-plus';
```

In this case you should call `ElNotification(options)`. We have also registered methods for different types, e.g. `ElNotification.success(options)`. You can call `ElNotification.closeAll()` to manually close all the instances.

### Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | title | string | — | — |
| message | description text | string/Vue.VNode | — | — |
| dangerouslyUseHTMLString | whether `message` is treated as HTML string | boolean | — | false |
| type | notification type | string | success/warning/info/error | — |
| iconClass | custom icon's class. It will be overridden by `type` | string | — | — |
| customClass | custom class name for Notification | string | — | — |
| duration | duration before close. It will not automatically close if set 0 | number | — | 4500 |
| position | custom position | string | top-right/top-left/bottom-right/bottom-left | top-right |
| showClose | whether to show a close button | boolean | — | true |
| onClose | callback function when closed | function | — | — |
| onClick | callback function when notification clicked | function | — | — |
| offset | offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset | number | — | 0 |

### Methods
`Notification` and `this.$notify` returns the current Notification instance. To manually close the instance, you can call `close` on it.
| Method | Description |
| ---- | ---- |
| close | close the Notification |
