## スイッチ

スイッチは、2 つの状態を切り替えるために使用されます。

### 基本的な使い方

:::demo `v-model` を `Boolean` 型変数にバインドする。`active-color`と`inactive-color`属性は、2 つの状態の背景色を決定する。

```html
<el-switch v-model="value1"> </el-switch>
<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
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

### テキストの説明

:::demo テキストを表示するために `active-color` と `inactive-color` 属性を追加することができます。

```html
<el-switch
  v-model="value1"
  active-text="Pay by month"
  inactive-text="Pay by year"
>
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Pay by month"
  inactive-text="Pay by year"
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

### 拡張された値型

:::demo `active-value`と`inactive-value`を設定することができる。どちらも `Boolean`, `String` または `Number` 型の値を受け取る。

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

### 無効化

:::demo `disabled`属性を追加すると、スイッチを無効にすることができます。

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

### ローディング

:::demo `loading`属性を`true`に設定すると、ロード状態を表示することができます。

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

### 切り替えを防ぐ

:::demo `beforeChange`プロパティを設定します。false を返すか、Promise を返し、拒否された場合は、切り替えを停止します。

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
            ElMessage.success('正常に切り替えます')
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
            ElMessage.error('スイッチに失敗しました')
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

### 属性

| Attribute           | Description                                                                                                        | Type                      | Accepted Values | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------- | --------------- | ------- |
| model-value / v-model     | バインド値は、"active-value "または "inactive-value "と等しくなければなりません。デフォルトの型は "boolean "です。 | boolean / string / number | —               | —       |
| disabled            | スイッチが無効になっているかどうか                                                                                 | boolean                   | —               | false   |
| loading             | スイッチがロード中になっているかどうか                                                                             | boolean                   | —               | false   |
| width               | スイッチの幅                                                                                                       | number                    | —               | 40      |
| active-icon-class   | `on` 状態のときに表示されるアイコンのクラス名で、`active-text` を上書きします。                                    | string                    | —               | —       |
| inactive-icon-class | `off` 状態のときに表示されるアイコンのクラス名で、`inactive-text` を上書きします。                                 | string                    | —               | —       |
| active-text         | `on` 状態のときに表示されるテキスト                                                                                | string                    | —               | —       |
| inactive-text       | `off` 状態のときに表示されるテキスト                                                                               | string                    | —               | —       |
| active-value        | `on` 状態のときのスイッチの値                                                                                      | boolean / string / number | —               | true    |
| inactive-value      | `off` 状態のときのスイッチの値                                                                                     | boolean / string / number | —               | false   |
| active-color        | `on` 状態のときの背景色                                                                                            | string                    | —               | #409EFF |
| inactive-color      | `off` 状態のときの背景色                                                                                           | string                    | —               | #C0CCDA |
| name                | スイッチのインプット名                                                                                             | string                    | —               | —       |
| validate-event      | フォームバリデーションをトリガするかどうか                                                                         | boolean                   | —               | true    |
| before-change       | スイッチの状態が変化する前のフックは、false を返すか、Promise を返し、切り替えを停止するために拒否されます         | function                  | —               | —       |

### イベント

| Event Name | Description          | Parameters           |
| ---------- | -------------------- | -------------------- |
| change     | 値が変わるとトリガー | value after changing |

### メソッド

| Method | Description                        | Parameters |
| ------ | ---------------------------------- | ---------- |
| focus  | スイッチコンポーネントにフォーカス | —          |
