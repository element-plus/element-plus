## Calendar calendar

显示日期

### 基本

:::demo 设置 `value` 来指定当前显示的月份。如果 `value` 未指定，则显示当月。`value` 支持 `v-model` 双向绑定。
```html
<el-calendar v-model="value">
</el-calendar>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const value = ref(new Date());

      return {
        value,
      };
    },
  });

</setup>
-->
```
:::

### 自定义内容

:::demo 通过设置名为 `dateCell` 的 `scoped-slot` 来自定义日历单元格中显示的内容。在 `scoped-slot` 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。详情解释参考下方的 API 文档。
```html
<el-calendar>
  <template #dateCell="{data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
    </p>
  </template>
</el-calendar>
<style>
  .is-selected {
    color: #1989FA;
  }
</style>
```
:::

### 自定义范围

:::demo 设置 `range` 属性指定日历的显示范围。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。
```html
<el-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]">
</el-calendar>
```
:::

### 国际化

默认语言是英语 (English), 如需使用其他语言, 请参考 [国际化](#/zh-CN/component/i18n)

注意：时间日期相关的语言配置如 (月份名, 每周第一天是周几等) 也是在国际化里配置。

### Attributes
| 参数             | 说明          | 类型      | 可选值        | 默认值  |
|-----------------|-------------- |---------- |------------ |-------- |
| model-value / v-model | 绑定值         | Date | —  | —      |
| range           | 时间范围，包括开始时间与结束时间。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。 | [Date]Array     | —           | —      |

### dateCell scoped slot 参数
| 参数             | 说明          | 类型      | 可选值        | 默认值  |
|-----------------|-------------- |---------- |------------ |-------- |
| data            | { type, isSelected, day, date }，`type` 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；`isSelected` 标明该日期是否被选中；`day` 是格式化的日期，格式为 yyyy-MM-dd；`date` 是单元格的日期    | Object      | —           | —      |
