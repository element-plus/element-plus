## Select V2 virtualized selector

:::tip
This component is still under testing, if you found any bug or issue please report it at [Github](https://github.com/element-plus/element-plus/issues) for us to fix.
:::

### Background

Now days, with tons of data came from the backend server through the internet, one single selector could have ended up loading tens of thousands of data from the backend, but rendering
that much data into the DOM could be a burden to the browser which could crash the browser. For better user experience and developer experience, we decided to add this component.

### Basic usage

The simplest selector
:::demo

```html
<template>
  <el-select-v2
    v-model="value"
    :options="options"
    placeholder="Please select"
    style="width: 240px;"
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option ${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`,
        })),
        value: '',
      }
    },
  }
</script>
```

:::

### Multi select

The basic multi-select selector with tags
:::demo

```html
<template>
  <el-select-v2
    v-model="value"
    :options="options"
    placeholder="Please select"
    style="width: 240px;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option ${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`,
        })),
        value: [],
      }
    },
  }
</script>
```

:::

### Hide extra tags when the selected items are too many.

:::demo

```html
<template>
  <el-select-v2
    v-model="value"
    :options="options"
    placeholder="Please select"
    style="width: 240px;"
    multiple
    collapse-tags
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option ${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`,
        })),
        value: [],
      }
    },
  }
</script>
```

:::

### Filterable multi-select

When the options are overwhelmingly too many, you can use `filterable` option to enable filter feature for finding out the desired option
:::demo

```html
<template>
  <el-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`,
        })),
        value: [],
      }
    },
  }
</script>
```

:::

### Disabled selector and select options

You can choose to disable selector itself or the option.
:::demo

```html
<template>
  <el-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px; margin-right: 16px; vertical-align: middle;"
    multiple
  />
  <el-select-v2
    disabled
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px; vertical-align: middle;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`,
          disabled: idx % 10 === 0,
        })),
        value: [],
      }
    },
  }
</script>
```

:::

### Option Grouping

We can group option as we wanted, as long as the data satisfies the pattern.

:::demo

```html
<template>
  <el-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px;"
    multiple
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 10 }).map((_, idx) => {
          const label = idx + 1
          return {
            value: `Group ${label}`,
            label: `Group ${label}`,
            options: Array.from({ length: 10 }).map((_, idx) => ({
              value: `Option ${idx + 1 + 10 * label}`,
              label: `${initials[idx % 10]}${idx + 1 + 10 * label}`,
            })),
          }
        }),
        value: [],
      }
    },
  }
</script>
```

:::

### Customized option renderer

We can define our own template for rendering the option in the popup.

:::demo

```html
<template>
  <el-select-v2
    v-model="value"
    filterable
    :options="options"
    placeholder="Please select"
    style="width: 240px;"
    multiple
  >
    <template #default="{item}">
      <span style="margin-right: 8px;">{{ item.label }}</span>
      <span style="color: var(--el-text-color-secondary); font-size: 13px">
        {{ item.value }}
      </span>
    </template>
  </el-select-v2>
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`,
        })),
        value: [],
      }
    },
  }
</script>
```

:::

### Clearable selector

We can clear all the selected options at once, also applicable for single select.

:::demo

```html
<template>
  <el-select-v2
    v-model="value1"
    :options="options"
    placeholder="Please select"
    style="width: 240px; margin-right: 16px; vertical-align: middle;"
    multiple
    clearable
  />
  <el-select-v2
    v-model="value2"
    :options="options"
    placeholder="Please select"
    style="width: 240px; vertical-align: middle;"
    clearable
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option ${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`,
        })),
        value1: [],
        value2: '',
      }
    },
  }
</script>
```

:::

### Crear nuevos items

Crear y seleccionar nuevos items que no están incluidas en las opciones de selección.

:::demo Al utilizar el atributo `allow-create`, los usuarios pueden crear nuevos elementos escribiendo en el cuadro del input. Tenga en cuenta que para que `allow-create` funcione, `filterable` debe ser `true`.

```html
<template>
  <el-select-v2
    v-model="value1"
    :options="options"
    placeholder="Please select"
    style="width: 240px; margin-right: 16px; vertical-align: middle;"
    allow-create
    filterable
    multiple
    clearable
  />
  <el-select-v2
    v-model="value2"
    :options="options"
    placeholder="Please select"
    style="width: 240px; vertical-align: middle;"
    allow-create
    filterable
    clearable
  />
</template>

<script>
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  export default {
    data() {
      return {
        options: Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option ${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`,
        })),
        value1: [],
        value2: '',
      }
    },
  }
</script>
```

:::

### Búsqueda remota

Introduzca palabras y datos para buscar desde el servidor.

:::demo Configure el valor de `filterable` y `remote` con `true` para habilitar la búsqueda remota, y debería pasar el método `remote-method`. `remote-method` es una función que se llama cuando el valor del input cambia, y su parámetro es el valor del input actual.

```html
<template>
  <el-select-v2
    v-model="value"
    style="width: 240px"
    multiple
    size="medium"
    filterable
    remote
    :remote-method="remoteMethod"
    clearable
    :options="options"
    :loading="loading"
    placeholder="Please enter a keyword"
  />
</template>

<script>
  export default {
    created() {
      this.list = this.states.map((item) => {
        return { value: `value:${item}`, label: `label:${item}` }
      })
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.options = this.list.filter((item) => {
              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
            })
          }, 200)
        } else {
          this.options = []
        }
      },
    },
    data() {
      return {
        list: [],
        loading: false,
        states: [
          'Alabama',
          'Alaska',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'Florida',
          'Georgia',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Pennsylvania',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
        options: [],
        value: [],
      }
    },
  }
</script>
```

:::

### SelectV2 Attributes

| Param                 | Description                                                                                                                 | Type                               | Accepted Values   | Default              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------------- | -------------------- |
| model-value / v-model | biding value                                                                                                                | string / number / boolean / object | —                 | —                    |
| multiple              | is multiple                                                                                                                 | boolean                            | —                 | false                |
| disabled              | is disabled                                                                                                                 | boolean                            | —                 | false                |
| value-key             | unique identity key name for value, required when value is an object                                                        | string                             | —                 | value                |
| size                  | input box size                                                                                                              | string                             | medium/small/mini | —                    |
| clearable             | whether select can be cleared                                                                                               | boolean                            | —                 | false                |
| collapse-tags         | whether to collapse tags to a text when multiple selecting                                                                  | boolean                            | —                 | false                |
| multiple-limit        | maximum number of options user can select when multiple is true. No limit when set to 0                                     | number                             | —                 | 0                    |
| name                  | the name attribute of select input                                                                                          | string                             | —                 | —                    |
| autocomplete          | select input 的 autocomplete 属性                                                                                           | string                             | —                 | off                  |
| placeholder           | the autocomplete attribute of select input                                                                                  | string                             | —                 | Please select        |
| filterable            | is filterable                                                                                                               | boolean                            | —                 | false                |
| filter-method         | método de filtrado personalizado                                                                                            | function                           | —                 | —                    |
| remote                | si las opciones se traerán desde el servidor                                                                                | boolean                            | —                 | false                |
| remote-method         | método de búsqueda remota personalizada                                                                                     | function                           | —                 | —                    |
| allow-create          | si esta permitido crear nuevos items. Para usar esto, `filterable` debe ser `true`.                                         | boolean                            | —                 | false                |
| no-data-text          | displayed text when there is no options, you can also use slot empty                                                        | string                             | —                 | No Data              |
| popper-class          | custom class name for Select's dropdown                                                                                     | string                             | —                 | —                    |
| popper-append-to-body | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false | boolean                            | -                 | false                |
| popper-options        | Customized popper option see more at [popper.js](https://popper.js.org/documentation.html)                                  | object                             | -                 | -                    |
| automatic-dropdown    | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                           | boolean                            | -                 | false                |
| clear-icon            | Customized clear icon class                                                                                                 | string                             | —                 | el-icon-circle-close |
| height                | The height of the dropdown panel, 34px for each item                                                                        | number                             | -                 | 170                  |

<span style="display: none;">
<!-- | no-match-text | 搜索条件无匹配时显示的文字，也可以使用`#empty`设置 | string | — | 无匹配数据 | -->
<!-- | reserve-keyword | 多选且可搜索时，是否在选中一个Option后保留当前的搜索关键词 | boolean | — | false |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | boolean | - | false |
| clear-icon | 自定义清空图标的类名 | string | — | el-icon-circle-close |
| allow-create | 是否允许用户创建新条目，需配合 `filterable` 使用 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 | -->
</span>

### SelectV2 Events

| Event Name     | Description                                                   | Params                                    |
| -------------- | ------------------------------------------------------------- | ----------------------------------------- |
| change         | triggers when the selected value changes                      | current selected value                    |
| visible-change | triggers when the dropdown appears/disappears                 | true when it appears, and false otherwise |
| remove-tag     | triggers when a tag is removed in multiple mode               | removed tag value                         |
| clear          | triggers when the clear icon is clicked in a clearable Select | —                                         |
| blur           | triggers when Input blurs                                     | (event: Event)                            |
| focus          | triggers when Input focuses                                   | (event: Event)                            |

### SelectV2 Slots

|   name  | 说明               |
| ------- | ------------------ |
| default | Option renderer    |
| empty   | 无 Option 时的列表 |

<!-- | prefix  | Select 组件头部内容 | -->
