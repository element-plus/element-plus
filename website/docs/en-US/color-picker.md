## ColorPicker

ColorPicker is a color selector supporting multiple color formats.

### Basic usage

:::demo ColorPicker requires a string typed variable to be bound to v-model.
```html
<div class="block">
  <span class="demonstration">With default value</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">With no default value</span>
  <el-color-picker v-model="color2"></el-color-picker>
</div>

<script>
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const color1 = ref('#409EFF');
      const color2 = ref(null);
      return {
        color1,
        color2,
      };
    },
  });
</script>
```
:::

### Alpha

:::demo ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the `show-alpha` attribute.
```html
<el-color-picker v-model="color" show-alpha></el-color-picker>

<script>
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const color = ref('rgba(19, 206, 102, 0.8)');
      return {
        color,
      };
    },
  });
</script>
```
:::

### Predefined colors

:::demo ColorPicker supports predefined color options
```html
<el-color-picker
  v-model="color"
  show-alpha
  :predefine="predefineColors">
</el-color-picker>

<script>
    import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const color = ref('rgba(255, 69, 0, 0.68)');
      const predefineColors = ref([
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577',
      ]);
      return {
        color,
        predefineColors,
      };
    },
  });
</script>
```
:::


### Sizes

:::demo
```html
<el-color-picker v-model="color"></el-color-picker>
<el-color-picker v-model="color" size="medium"></el-color-picker>
<el-color-picker v-model="color" size="small"></el-color-picker>
<el-color-picker v-model="color" size="mini"></el-color-picker>

<script>
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const color = ref('409EFF');

      return {
        color,
      };
    },
  });
</script>
```
:::

### Attributes
| Attribute | Description | Type | Accepted Values | Default |
|---------- |-------- |---------- |-------------  |-------- |
| model-value / v-model | binding value | string | — | — |
| disabled | whether to disable the ColorPicker | boolean | — | false |
| size | size of ColorPicker | string | medium / small / mini | — |
| show-alpha | whether to display the alpha slider | boolean | — | false |
| color-format | color format of v-model | string | hsl / hsv / hex / rgb | hex (when show-alpha is false)/ rgb (when show-alpha is true) |
| popper-class | custom class name for ColorPicker's dropdown | string | — | — |
| predefine | predefined color options | array | — | — |

### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when input value changes | color value |
| active-change | triggers when the current active color changes | active color value |
