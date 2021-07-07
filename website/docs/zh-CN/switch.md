## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。

```html
<el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
</el-switch>

<script>
  export default {
    data() {
      return {
        value: true,
      }
    },
  }
</script>
```

:::

### 文字描述

:::demo 使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

```html
<el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费">
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费"
>
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
      }
    },
  }
</script>
```

:::

### 扩展的 value 类型

:::demo 设置`active-value`和`inactive-value`属性，接受`Boolean`, `String`或`Number`类型的值。

```html
<el-tooltip :content="'Switch value: ' + value" placement="top">
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0"
  >
  </el-switch>
</el-tooltip>

<script>
  export default {
    data() {
      return {
        value: '100',
      }
    },
  }
</script>
```

:::

### 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```html
<el-switch v-model="value1" disabled> </el-switch>
<el-switch v-model="value2" disabled> </el-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
      }
    },
  }
</script>
```

:::

### 加载中

:::demo 设置`loading`属性，接受一个`Boolean`，设置`true`即加载中状态。

```html
<el-switch v-model="value1" loading> </el-switch>
<el-switch v-model="value2" loading> </el-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
      }
    },
  }
</script>
```

:::

### 阻止切换

:::demo 设置`beforeChange`属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。

```html
<el-switch v-model="value1" :loading="loading1" :beforeChange="beforeChange1">
</el-switch>
<el-switch v-model="value2" :loading="loading2" :beforeChange="beforeChange2">
</el-switch>
<script>
  import { reactive, toRefs } from 'vue'
  import { ElMessage } from 'element-plus'

  export default {
    setup() {
      const status1 = reactive({
        value1: false,
        loading1: false,
      })

      const beforeChange1 = () => {
        status1.loading1 = true
        return new Promise(resolve => {
          setTimeout(() => {
            status1.loading1 = false
            ElMessage.success('切换成功')
            return resolve(true)
          }, 1000)
        })
      }

      const status2 = reactive({
        value2: false,
        loading2: false,
      })

      const beforeChange2 = () => {
        status2.loading2 = true
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            status2.loading2 = false
            ElMessage.error('切换失败')
            return reject(new Error('error'))
          }, 1000)
        })
      }

      return {
        ...toRefs(status1),
        ...toRefs(status2),
        beforeChange1,
        beforeChange2,
      }
    },
  }
</script>
```

:::

### Attributes

| 参数                | 说明                                                                        | 类型                      | 可选值 | 默认值  |
| ------------------- | --------------------------------------------------------------------------- | ------------------------- | ------ | ------- |
| model-value / v-model     | 绑定值，必须等于`active-value`或`inactive-value`，默认为`Boolean`类型       | boolean / string / number | —      | —       |
| disabled            | 是否禁用                                                                    | boolean                   | —      | false   |
| loading             | 是否显示加载中                                                              | boolean                   | —      | false   |
| width               | switch 的宽度（像素）                                                       | number                    | —      | 40      |
| active-icon-class   | switch 打开时所显示图标的类名，设置此项会忽略 `active-text`                 | string                    | —      | —       |
| inactive-icon-class | switch 关闭时所显示图标的类名，设置此项会忽略 `inactive-text`               | string                    | —      | —       |
| active-text         | switch 打开时的文字描述                                                     | string                    | —      | —       |
| inactive-text       | switch 关闭时的文字描述                                                     | string                    | —      | —       |
| active-value        | switch 打开时的值                                                           | boolean / string / number | —      | true    |
| inactive-value      | switch 关闭时的值                                                           | boolean / string / number | —      | false   |
| active-color        | switch 打开时的背景色                                                       | string                    | —      | #409EFF |
| inactive-color      | switch 关闭时的背景色                                                       | string                    | —      | #C0CCDA |
| name                | switch 对应的 name 属性                                                     | string                    | —      | —       |
| validate-event      | 改变 switch 状态时是否触发表单的校验                                        | boolean                   | —      | true    |
| before-change       | switch 状态改变前的钩子，返回 false 或者返回 Promise 且被 reject 则停止切换 | function                  | —      | —       |

### Events

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| change   | switch 状态发生变化时的回调函数 | 新状态的值 |

### Methods

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| focus  | 使 Switch 获取焦点 | -    |
