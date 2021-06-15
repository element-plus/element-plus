## Calendar

Display date.

### Basic

:::demo Set `value` to specify the currently displayed month. If `value` is not specified, current month is displayed. `value` supports two-way binding.
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

### Custom Content

:::demo Customize what is displayed in the calendar cell by setting `scoped-slot` named `dateCell`. In `scoped-slot` you can get the date (the date of the current cell), data (including the type, isSelected, day attribute). For details, please refer to the API documentation below.
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

### Range

:::demo Set the `range` attribute to specify the display range of the calendar. Start time must be Monday, end time must be Sunday, and the time span cannot exceed two months.
```html
<el-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]">
</el-calendar>
```
:::

### Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](#/en-US/component/i18n)

Note, date time locale (month name, first day of the week ...) are also configed in localization.

### Attributes
| Attribute       | Description        | Type      | Accepted Values       | Default  |
|-----------------|------------------- |---------- |---------------------- |--------- |
| model-value / v-model | binding value      | Date | —            | —        |
| range           | time range, including start time and end time. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months. | [Date]Array  | —  | —  |

### dateCell scoped slot 参数
| Attribute       | Description   | Type      | Accepted Values       | Default  |
|-----------------|-------------- |---------- |---------------------- |--------- |
| data            | { type, isSelected, day, date }. `type` indicates which month the date belongs, optional values are prev-month, current-month, next-month; `isSelected` indicates whether the date is selected; `day` is the formatted date in the format YYYY-MM-DD; `date` is date the cell represents    | Object      | —           | —      |
