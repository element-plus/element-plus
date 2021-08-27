## インプット

マウスやキーボードを使ってデータを入力します。

:::warning
インプットは制御されたコンポーネントであり、**常にVueのバインディング値**を表示します。

通常の状況においては、`input` イベントは処理されるべきである。そのハンドラはコンポーネントのバインディング値を更新しなければなりません (あるいは `v-model` を使用しなければなりません)。そうでなければ、入力ボックスの値は変更されません。

`v-model` 修飾子はサポートしていません。
:::


### 基本的な使い方

:::demo

```html
<el-input placeholder="Please input" v-model="input"></el-input>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>
```
:::

### 無効化

:::demo インプットを`disabled`属性で無効にする。

```html
<el-input
  placeholder="Please input"
  v-model="input"
  :disabled="true">
</el-input>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>
```
:::

### クリア可能

:::demo インプットを `clearable` 属性でクリア可能にできます。

```html
<el-input
  placeholder="Please input"
  v-model="input"
  clearable>
</el-input>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>
```
:::

### パスワードボックス

:::demo `show-password`属性を用いて、トグル可能なパスワードインプットを作成する。

```html
<el-input placeholder="Please input password" v-model="input" show-password></el-input>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>
```
:::

### アイコン付きインプット

インプットタイプを示すアイコンを追加します。

:::demo インプットにアイコンを追加するには、`prefix-icon` と `suffix-icon` 属性を使えばよい。また、`prefix` と `suffix` という名前のスロットも同様に機能します。
```html
<div class="demo-input-suffix">
  <span class="demo-input-label">Using attributes</span>
  <el-input
    placeholder="Pick a date"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
  <el-input
    placeholder="Type something"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
</div>
<div class="demo-input-suffix">
  <span class="demo-input-label">Using slots</span>
  <el-input
    placeholder="Pick a date"
    v-model="input3">
    <template #suffix>
      <i class="el-input__icon el-icon-date"></i>
    </template>
  </el-input>
  <el-input
    placeholder="Type something"
    v-model="input4">
    <template #prefix>
      <i class="el-input__icon el-icon-search"></i>
    </template>
  </el-input>
</div>

<style>
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
</style>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref('')
    }
  }
})
</script>
```
:::

### テキストエリア

複数行のテキスト情報を入力できるようにリサイズ可能。属性 `type="textarea"` を追加して、`input` をネイティブの `textarea` に変更します。

:::demo Control the height by setting the `rows` prop.

```html
<el-input
  type="textarea"
  :rows="2"
  placeholder="Please input"
  v-model="textarea">
</el-input>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      textarea: ref('')
    }
  }
})
</script>
```
:::

### テキストエリアの自動サイズ

インプットタイプのテキストエリアに `autosize` プロップを設定すると、内容に応じて自動的に高さが調整されます。オプションオブジェクトを `autosize` に渡すことで、テキストエリアが自動的に調整できる最小行数と最大行数を指定できます。

:::demo

```html
<el-input
  type="textarea"
  autosize
  placeholder="Please input"
  v-model="textarea1">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Please input"
  v-model="textarea2">
</el-input>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      textarea1: ref(''),
      textarea2: ref('')
    }
  }
})
</script>
```
:::

### ミックスインプット

要素（一般的にはラベルやボタン）を前置または追加します。

:::demo 入力に前置または追加する要素を配置するには `slot` を用いる。

```html
<div>
  <el-input placeholder="Please input" v-model="input1">
    <template #prepend>Http://</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Please input" v-model="input2">
    <template #append>.com</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Please input" v-model="input3" class="input-with-select">
    <template #prepend>
      <el-select v-model="select" placeholder="Select">
        <el-option label="Restaurant" value="1"></el-option>
        <el-option label="Order No." value="2"></el-option>
        <el-option label="Tel" value="3"></el-option>
      </el-select>
    </template>
    <template #append>
      <el-button icon="el-icon-search"></el-button>
    </template>
  </el-input>
</div>

<style>
  .el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      select: ref('')
    }
  }
})
</script>
```
:::

### サイズ

:::demo インプットサイズを変更するために`size`属性を追加する。デフォルトのサイズの他に、3つのオプションがある: `large`, `small`, `mini`
```html
<div class="demo-input-size">
  <el-input
    placeholder="Please Input"
    v-model="input1">
  </el-input>
  <el-input
    size="medium"
    placeholder="Please Input"
    v-model="input2">
  </el-input>
  <el-input
    size="small"
    placeholder="Please Input"
    v-model="input3">
  </el-input>
  <el-input
    size="mini"
    placeholder="Please Input"
    v-model="input4">
  </el-input>
</div>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref('')
    }
  }
})
</script>
```
:::

### オートコンプリート

現在のインプットをもとに、おすすめのヒントを得ることができます。

:::demo オートコンプリートコンポーネントはインプットサジェスチョンを提供します。`fetch-suggestions` 属性は、提案されたインプットを返すメソッドです。この例では、`querySearch(queryString, cb)` は、準備ができたら `cb(data)` を経由してオートコンプリートにサジェスチョンを返します。
```html
<el-row class="demo-autocomplete">
  <el-col :span="12">
    <div class="sub-title">list suggestions when activated</div>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12">
    <div class="sub-title">list suggestions on input</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const restaurants = ref([]);
    const querySearch = (queryString, cb) => {
      var results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value;
        // call callback function to return suggestions
        cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const loadAll = () => {
      return [
        { "value": "vue", "link": "https://github.com/vuejs/vue" },
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
        { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
        { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
        { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      restaurants.value = loadAll();
    });
    return {
      restaurants,
      state1: ref(''),
      state2: ref(''),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
    };
  },
});
</script>
```
:::

### カスタムテンプレート

サジェスチョンの表示方法をカスタマイズします。

:::demo サジェスチョンアイテムをカスタマイズするには、`scoped slot`を使う。スコープでは、`item` キーを使ってサジェスチョンオブジェクトにアクセスすることができます。
```html
<el-autocomplete
  popper-class="my-autocomplete"
  v-model="state"
  :fetch-suggestions="querySearch"
  placeholder="Please input"
  @select="handleSelect"
>
  <template #suffix>
    <i class="el-icon-edit el-input__icon" @click="handleIconClick"></i>
  </template>
  <template #default="{ item }">
    <div class="value">{{ item.value }}</div>
    <span class="link">{{ item.link }}</span>
  </template>
</el-autocomplete>

<style>
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
</style>

<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const links = ref([]);

    const querySearch = (queryString, cb) => {
      var results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value;
      // call callback function to return suggestion objects
      cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const loadAll = () => {
      return [
        { "value": "vue", "link": "https://github.com/vuejs/vue" },
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
        { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
        { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
        { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
    };
    const handleSelect = (item) => {
      console.log(item);
    };

    const handleIconClick = (ev) => {
      console.log(ev);
    };

    onMounted(() => {
      links.value = loadAll();
    });

    return {
      links,
      state: ref(''),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
      handleIconClick,
    };
  },
});
</script>
```
:::

### リモート検索

サーバーサイドからデータを検索します。

:::demo
```html
<el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="Please input"
  @select="handleSelect"
></el-autocomplete>
<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const links = ref([]);
    const loadAll = () => {
      return [
        { "value": "vue", "link": "https://github.com/vuejs/vue" },
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
        { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
        { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
        { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
    };
    let timeout;
    const querySearchAsync = (queryString, cb) => {
      var results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      links.value = loadAll();
    });
    return {
      links,
      state: ref(''),
      querySearchAsync,
      createFilter,
      loadAll,
      handleSelect
    };
  },
});
</script>
```
:::

### 限界長さ

:::demo `maxlength` と `minlength` 属性であり、ユーザが入力できる文字数の制限を宣言するものである。テキストやテキストエリア型のインプットに対して `maxlength` プロップを設定すると、インプット値の長さを制限することができ、同時に `show-word-limit` を `true` に設定することで単語数を表示することができます。

```html
<el-input
  type="text"
  placeholder="Please input"
  v-model="text"
  maxlength="10"
  show-word-limit
>
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  placeholder="Please input"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      text: ref(''),
      textarea: ref('')
    }
  }
})
</script>
```
:::

### インプット属性

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ----| ----| ----| ---- | ----- |
|type| インプットタイプ | string | text, textarea and other [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
|modelValue / v-model| バインディング値 | string / number| — | — |
|maxlength| 最大長さ | string / number | — | — |
|minlength| ネイティブインプットの `minlength` と同じ | number | — | — |
|show-word-limit | `type` が 'text' または 'textarea' の場合に単語数を表示するかどうかを指定する | boolean    |  —  | false |
|placeholder| インプットのプレースホルダー | string | — | — |
| clearable | クリアボタンを表示するかどうか | boolean | — | false |
| show-password | トグル可能なパスワード入力を表示するかどうか| boolean         | — | false |
|disabled | 入力が無効化されているかどうか | boolean | — | false |
|size | インプットサイズ、`type` が 'textarea' でない場合に動作します。 | string | medium / small / mini | — |
| prefix-icon   | プレフィックスアイコンクラス  | string          | — | — |
| suffix-icon   | サフィックスアイコンクラス  | string          | — | — |
|rows | textareaの行数、`type`が'textarea'の場合にのみ動作します。 | number | — | 2 |
|autosize | textareaが適応的な高さを持つかどうか、`type`が'textarea'の場合にのみ動作します。オブジェクトを受け取ることができます。 e.g. { minRows: 2, maxRows: 6 }  | boolean / object | — | false |
|autocomplete | ネイティブインプットの `autocomplete` と同じ | string | — | off |
|name | ネイティブインプットの `name` と同じ | string | — | — |
| readonly | ネイティブインプットの `readonly` と同じ | boolean | — | false |
|max | ネイティブインプットの `max` と同じ | — | — | — |
|min | ネイティブインプットの `min` と同じ | — | — | — |
|step| ネイティブインプットの `step` と同じ | — | — | — |
|resize| リサイズ性を制御する | string | none, both, horizontal, vertical | — |
|autofocus | ネイティブインプットの `autofocus` と同じ | boolean | — | false |
|form | ネイティブインプットの `form` と同じ | string | — | — |
| label | ラベルインデックス | string | — | — |
| tabindex | インプットタビインデックス | string / number | - | - |
| validate-event | フォームバリデーションをトリガするかどうか | boolean | - | true |

### インプットスロット

| Name | Description |
|------|--------|
| prefix | インプットプレフィックスとしての内容、 `type` が 'text' の場合のみ動作します。 |
| suffix | インプットサフィックスとしての内容、 `type` が 'text' の場合のみ動作します。 |
| prepend | インプットの前に付加する内容、 `type` が 'text' の場合のみ動作します。 |
| append | インプットの後に付加する内容、 `type` が 'text' の場合のみ動作します。 |

### インプットイベント

| Event Name | Description | Parameters |
|----| ----| ----|
| blur | インプットがぼやけたときにトリガーされます | (event: Event) |
| focus | インプットがフォーカスされたときトリガーされます | (event: Event) |
| change | インプットボックスがフォーカスを失ったとき、またはユーザーが Enter キーを押したときにのみトリガされます | (value: string \| number) |
| input | インプット値が変更されたときにトリガーされます | (value: string \| number) |
| clear | クリアボタンをクリックしてインプットがクリアされたときにトリガされます。 | — |

### インプットメソッド

| Method | Description | Parameters |
|------|--------|-------|
| focus | インプット要素にフォーカスを当てる | — |
| blur | インプット要素にフォーカスをぼやけさせる | — |
| select | インプット要素のテキストを選択 | — |

### オートコンプリート属性

Attribute | Description | Type | Options | Default
|----| ----| ----| ---- | -----|
|placeholder| オートコンプリートでのインプットプレースホルダー | string | — | — |
| clearable | クリアボタンを表示するかどうか | boolean | — | false |
|disabled | オートコンプリートを無効にしているかどうか  | boolean | — | false|
| value-key | 表示用インプットサジェスチョンオブジェクトのキー名 | string | — | value |
|icon | アイコン名 | string | — | — |
| model-value / v-model | バインディング値 | string | — | — |
| debounce | タイプ時のデバウンス遅延（ミリ秒単位） | number | — | 300 |
| placement | ポップアップメニューの配置 | string | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
|fetch-suggestions | インプットサジェスチョンを取得するためのメソッドです。サジェスチョンの準備ができたら、`callback(data:[])` を呼び出してオートコンプリートに返す。 | Function(queryString, callback) | — | — |
| popper-class | オートコンプリートのドロップダウン用カスタムクラス名 | string | — | — |
| trigger-on-focus | インプットフォーカス時にサジェスチョンを表示するかどうか | boolean | — | true |
| name | ネイティブインプットの `name` と同じ | string | — | — |
| select-when-unmatched | オートコンプリートにマッチするイベントがない場合に、入力時に `select` イベントを発生させるかどうか。 | boolean | — | false |
| label | ラベルテキスト | string | — | — |
| prefix-icon | プレフィックスアイコンクラス | string | — | — |
| suffix-icon | サフィックスアイコンクラス | string | — | — |
| hide-loading | リモート検索で読み込みアイコンを非表示にするかどうか | boolean | — | false |
| popper-append-to-body | ドロップダウンをボディに追加するかどうかを指定します。ドロップダウンの位置が間違っている場合は、このプロップをfalseに設定してみてください。 | boolean | - | false |
| highlight-first-item | リモート検索サジェスチョンの最初の項目をデフォルトで強調表示するかどうか | boolean | — | false |
| input-style | the style of the input element or textarea element | object | - | {} |

### オートコンプリートスロット

| Name | Description |
|------|--------|
| prefix | インプットプレフィックスとしての内容 |
| suffix | インプットサフィックスとしての内容 |
| prepend | インプット前に付加する内容 |
| append | インプット後に付加する内容 |

### オートコンプリートスコープスロット
| Name | Description |
|------|--------|
| — | インプットサジェスチョンのためのカスタムコンテンツ。スコープパラメータは { item } です。 |

### オートコンプリートイベント

| Event Name | Description | Parameters |
|----| ----| ----|
|select | サジェストがクリックされた時にトリガーされます。 | suggestion being clicked |
| change | 入力値の中のアイコンが変化したときにトリガーされます。 | (value: string \| number) |

### オートコンプリートメソッド

| Method | Description | Parameters |
|------|--------|-------|
| focus | インプット要素にフォーカスします | — |
