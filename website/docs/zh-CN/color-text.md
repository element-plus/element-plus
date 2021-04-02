## ColorText 文本色彩

### 基础用法

:::demo 使用`type`属性来定义 ColorText 的样式。

```html
<el-space alignment="start" :size="48">
  <el-color-text 
    v-for="item in [
      'primary',
      'success',
      'warning',
      'danger',
      'default',
      'info'
    ]"
    :key="item"
    :type="item"
  >
    {{ item }}
  </el-color-text>
</el-space>
```

:::

### 自定义颜色

:::demo 使用`value`、`options` 和 `colors` 属性来自定义 ColorText 的样式。

```html
<el-space alignment="start" :size="48">
  <el-color-text 
    v-for="item in 4"
    :value="`${item}`"
    :colors="['#8d4bbb','#ff0097','#ff3300', '#0aa344']"
    :options="['1','2','3','4']"
  >
    Color Text
  </el-color-text>
</el-space>
```

:::

### 全局配置

:::demo 使用 `colorTextOprions` 来配置

```html
<template>
  <el-space alignment="start" :size="48">
    <el-color-text 
      v-for="item in 4"
      :value="`${item}`"
    >
      Color Text
    </el-color-text>
  </el-space>
  <el-divider />
  <el-table
    border
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      align="center"
      label="名称"
    />
    <el-table-column
      align="center"
      prop="type"
      label="类"
    >
      <template #default="{ row }">
        <el-color-text :value="row.type">{{ row.typeName }}</el-color-text>
      </template>
    </el-table-column>
  </el-table>
</template>

<!-- 注册时传入配置

app.use(ElementPlus, {
  colorTextOprions: {
    color: ['#8d4bbb','#ff0097','#ff3300', '#0aa344'],
    options: [
      ['1', 'CEREAL'],
      ['2', 'ANIMAL_FOOD'],
      ['3', 'NUTS'],
      ['4', 'VEGETABLES'],
    ],
  },
}) -->


  <!-- 在入口文件中配置

  import { install } from 'element-plus'

  const app = createApp(App)

  install(app, {
    colorTextOptions: {
      colors: ['#8d4bbb','#ff0097','#ff3300', '#0aa344'],
      options: [
        ['1', 'CEREAL'],
        ['2', 'ANIMAL_FOOD'],
        ['3', 'NUTS'],
        ['4', 'VEGETABLES'],
      ],
    },
  }) -->

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {

    const tableData = ref([
      {
        name: '面',
        typeName: '谷类',
        type: 'CEREAL'
      },
      {
        name: '蛋',
        typeName: '动物性食物',
        type: 'ANIMAL_FOOD'
      },
      {
        name: '核桃',
        typeName: '坚果类',
        type: 'NUTS'
      },
      {
        name: '蔬菜类',
        typeName: '豌豆尖',
        type: 'VEGETABLES'
      },
    ])

    return {
      tableData,
    }
  },
})
</script>
```

:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type     | 类型         | string | primary / success / warning / danger / info / default |default |
| tag | 渲染目标（参考vue `<component />` is）  | string/Component | — | span |
| value | 需配合`options`使用 | string/number | — | — |
| options | 匹配value的合集  | string[]/string[string[]] | — | — |
| colors | 颜色合集  | string[] | — | ['primary', 'success ', 'warning', 'danger', 'info',' default'] |