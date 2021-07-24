
## DatePicker 日期选择器

用于选择或输入日期

###  选择日

以「日」为基本单位，基础的日期选择控件

:::demo 基本单位由`type`属性指定。通过`shortcuts`配置快捷选项，禁用日期通过 `disabledDate` 设置，传入函数
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期"
      :disabled-date="disabledDate"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: 'Today',
          value: new Date(),
        }, {
          text: 'Yesterday',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          },
        }, {
          text: 'A week ago',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          },
        }],
        value1: '',
        value2: '',
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: 'Today',
            value: new Date(),
          },
          {
            text: 'Yesterday',
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
          },
          {
            text: 'A week ago',
            value: () => {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
          },
        ],
        value1: '',
        value2: '',
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

###  其他日期单位

通过扩展基础的日期选择，可以选择周、月、年或多个日期

:::demo
```html
<div class="container">
  <div class="block">
    <span class="demonstration">周</span>
    <el-date-picker
      v-model="value1"
      type="week"
      format="gggg 第 ww 周"
      placeholder="选择周">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">月</span>
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="选择月">
    </el-date-picker>
  </div>
</div>
<div class="container">
  <div class="block">
    <span class="demonstration">年</span>
    <el-date-picker
      v-model="value3"
      type="year"
      placeholder="选择年">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">多个日期</span>
    <el-date-picker
      type="dates"
      v-model="value4"
      placeholder="选择一个或多个日期">
    </el-date-picker>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        value1: '',
        value2: '',
        value3: '',
        value4: '',
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

### 选择日期范围

可在一个选择器中便捷地选择一个时间范围

:::demo 在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用`unlink-panels`属性解除联动。
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: '最近一周',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          },
        }, {
          text: '最近一个月',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          },
        }, {
          text: '最近三个月',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          },
        }],
        value1: '',
        value2: ''
      };
    }
  };
</script>
<!--
<setup>

import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        shortcuts: [
          {
            text: '最近一周',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },
          {
            text: '最近一个月',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          {
            text: '最近三个月',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            },
          },
        ],
        value1: '',
        value2: '',
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::


### 选择月份范围

可在一个选择器中便捷地选择一个月份范围

:::demo 在选择月份范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前年份，可以使用`unlink-panels`属性解除联动。
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="monthrange"
      unlink-panels
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: '本月',
          value: [new Date(), new Date()],
        }, {
          text: '今年至今',
          value: () => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
          },
        }, {
          text: '最近六个月',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
          },
        }],
        value1: '',
        value2: ''
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        shortcuts: [
          {
            text: '本月',
            value: [new Date(), new Date()],
          },
          {
            text: '今年至今',
            value: () => {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              return [start, end];
            },
          },
          {
            text: '最近六个月',
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              return [start, end];
            },
          },
        ],
        value1: '',
        value2: '',
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

### 默认值

如果用户没有选择日期，那默认展示当前日的月份。你可以使用 `default-value` 来设置成其他的日期。

如果类型是 `daterange`, `default-value` 则会设置左边窗口的默认值。

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">date</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a date"
      :default-value="new Date(2010, 9, 1)">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">daterange</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const value1 = ref('');
      const value2 = ref('');

      return {
        value1,
        value2,
      };
    },
  });

</setup>
-->
```
:::

###  日期格式

使用`format`指定输入框的格式。使用`value-format`指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。

在 [这里](https://day.js.org/docs/zh-CN/display/format) 查看 Day.js 支持的 format 参数。

:::warning
请注意大小写
:::

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">默认为 Date 对象</span>
    <div class="demonstration">值：{{ value1 }}</div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      format="YYYY 年 MM 月 DD 日">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">使用value-format</span>
    <div class="demonstration">值：{{ value2 }}</div>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期"
      format="YYYY 年 MM 月 DD 日"
      value-format="YYYY/MM/DD">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">时间戳</span>
    <div class="demonstration">值：{{ value3 }}</div>
    <el-date-picker
      v-model="value3"
      type="date"
      placeholder="选择日期"
      format="YYYY 年 MM 月 DD 日"
      value-format="x">``
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
</script>
<!--
<setup>

import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        value1: ref(''),
        value2: ref(''),
        value3: ref('')
      };
    },
  });

</setup>
-->
```
:::

###  默认显示日期

在选择日期范围时，指定起始日期和结束日期的默认时刻。

:::demo 选择日期范围时，默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒。通过`default-time`可以分别指定二者的具体时刻。`default-time`接受一个数组，第一个值控制起始日期的时刻，第二个值控制结束日期的时刻。
```html
<template>
  <div class="block">
    <p>组件值：{{ value }}</p>
    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="defaultTime"
    ></el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        defaultTime: [
          new Date(2000, 1, 1, 0, 0, 0),
          new Date(2000, 2, 1, 23, 59, 59)
        ] // '00:00:00', '23:59:59'
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const value = ref('');
      const defaultTime = ref([
        new Date(2000, 1, 1, 0, 0, 0),
        new Date(2000, 2, 1, 23, 59, 59),
      ]); // '00:00:00', '23:59:59'

      return {
        value,
        defaultTime,
      };
    },
  });

</setup>
-->
```
:::

### 国际化

默认语言是英语 (English), 如需使用其他语言, 请参考 [国际化](#/zh-CN/component/i18n)

注意：时间日期相关的语言配置如 (月份名, 每周第一天是周几等) 也是在国际化里配置。

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model | 绑定值 | date(DatePicker) / array(DateRangePicker) | — | — |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| size          | 输入框尺寸     | string          | large/medium/small/mini  | large |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时结束日期的占位内容 | string | — | — |
| type | 显示类型 | string | year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange | date |
| format | 显示在输入框中的格式 | string | 见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi) | YYYY-MM-DD |
| popper-class | DatePicker 下拉框的类名 | string | — | — |
| range-separator | 选择范围时的分隔符 | string | — | '-' |
| default-value | 可选，选择器打开时默认显示的时间 | Date | 可被`new Date()`解析 | — |
| default-time | 范围选择时选中日期所使用的当日内具体时刻 | Date[] | 数组，长度为 2，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 `00:00:00` | — |
| value-format | 可选，绑定值的格式。不指定则绑定值为 Date 对象 | string | 见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi) | — |
| name | 原生属性 | string | — | — |
| unlink-panels | 在范围选择器里取消两个日期面板之间的联动 | boolean | — | false |
| prefix-icon | 自定义头部图标的类名 | string | — | el-icon-date |
| clear-icon | 自定义清空图标的类名 | string | — | el-icon-circle-close |
| validate-event | 输入时是否触发表单的校验 | boolean | - | true |
| shortcuts | 设置快捷选项，需要传入数组对象 | object[{ text: string, value: date / function }] | — | — |
| disabledDate | 设置禁用状态，参数为当前日期，要求返回 Boolean | Function | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------|--------|---------|
| change | 用户确认选定的值时触发 | 组件绑定值 |
| blur | 当 input 失去焦点时触发 | 组件实例 |
| focus | 当 input 获得焦点时触发 | 组件实例 |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |
