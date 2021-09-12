## Popover

### 基本的な使い方

Tooltip と同様に、Popover も `Vue-popper` で構築されています。そのため、重複する属性については、Tooltip のドキュメントを参照してください。

:::demo `trigger` 属性は、popover がどのようにトリガーされるかを定義するために使用されます: `hover`, `click`, `focus`, `manual`。それは、`#reference` という名前のスロットを使うか、`v-popover` ディレクティブを使って popover の `ref` に設定するかです。

```html
<template>
  <el-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>Hover to activate</el-button>
    </template>
  </el-popover>

  <el-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>Hover to activate</el-button>
    </template>
  </el-popover>

  <el-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>Focus to activate</el-button>
    </template>
  </el-popover>

  <el-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model:visible="visible"
  >
    <template #reference>
      <el-button @click="visible = !visible">Manual to activate</el-button>
    </template>
  </el-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      }
    },
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        visible: ref(false),
      };
    },
  });

</setup>
-->
```

:::

### 入れ子になっている情報

popover の中には、他のコンポーネントを入れ子にすることができます。以下はネストされたテーブルの例です。

:::demo `content`属性をデフォルトの`slot`に置き換えています。

```html
<el-popover placement="right" :width="400" trigger="click">
  <template #reference>
    <el-button>Click to activate</el-button>
  </template>
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="date"></el-table-column>
    <el-table-column width="100" property="name" label="name"></el-table-column>
    <el-table-column
      width="300"
      property="address"
      label="address"
    ></el-table-column>
  </el-table>
</el-popover>

<script>
  export default {
    data() {
      return {
        gridData: [
          {
            date: '2016-05-02',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-04',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-01',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-03',
            name: 'Jack',
            address: 'New York City',
          },
        ],
      }
    },
  }
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        gridData: [
          {
            date: '2016-05-02',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-04',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-01',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-03',
            name: 'Jack',
            address: 'New York City',
          },
        ],
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

### 入れ子になった操作

もちろん、他の操作をネストすることもできます。ダイアログを使うよりも軽量です。

:::demo

```html
<el-popover placement="top" :width="160" v-model:visible="visible">
  <p>Are you sure to delete this?</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible = false"
      >cancel</el-button
    >
    <el-button type="primary" size="mini" @click="visible = false"
      >confirm</el-button
    >
  </div>
  <template #reference>
    <el-button @click="visible = true">Delete</el-button>
  </template>
</el-popover>

<script>
  export default {
    data() {
      return {
        visible: false,
      }
    },
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        visible: ref(false),
      };
    },
  });

</setup>
-->
```

:::

### 属性

| Attribute                 | Description                                                                                                                          | Type           | Accepted Values                                                                                           | Default                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| trigger                   | popover がどのようにトリガーされるか                                                                                                 | string         | click/focus/hover/manual                                                                                  | click                                                   |
| title                     | popover のタイトル                                                                                                                   | string         | —                                                                                                         | —                                                       |
| content                   | popover コンテンツ、デフォルトの `slot` で置き換えることができます。                                                                 | string         | —                                                                                                         | —                                                       |
| width                     | popover 幅                                                                                                                           | string, number | —                                                                                                         | Min width 150px                                         |
| placement                 | popover 配置                                                                                                                         | string         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                                  |
| disabled                  | popover が無効になっているかどうか                                                                                                   | boolean        | —                                                                                                         | false                                                   |
| visible / v-model:visible | popover が表示されているかどうか                                                                                                     | Boolean        | —                                                                                                         | false                                                   |
| offset                    | popover オフセット                                                                                                                   | number         | —                                                                                                         | 0                                                       |
| transition                | popover トランジションアニメーション                                                                                                 | string         | —                                                                                                         | el-fade-in-linear                                       |
| show-arrow                | ツールチップの矢印が表示されているかどうかを指定します。詳細については [Vue-popper](https://github.com/element-component/vue-popper) | boolean        | —                                                                                                         | true                                                    |
| popper-options            | [popper.js](https://popper.js.org/documentation.html) のためのパラメータ                                                             | object         | please refer to [popper.js](https://popper.js.org/documentation.html)                                     | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class              | popover 用カスタムクラス名                                                                                                           | string         | —                                                                                                         | —                                                       |
| show-after                | ミリ秒単位の出現の遅延                                                                                                               | number         | —                                                                                                         | 0                                                       |
| hide-after                | ミリ秒単位の消えるの遅延                                                                                                             | number         | —                                                                                                         | 0                                                       |
| auto-close                | ツールチップを非表示にするタイムアウト（ミリ秒単位）                                                                                 | number         | —                                                                                                         | 0                                                       |
| tabindex                  | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) の popover                                  | number         | —                                                                                                         | —                                                       |

### スロット

| Name      | Description                      |
| --------- | -------------------------------- |
| —         | popover のテキストコンテンツ     |
| reference | popover をトリガーする HTML 要素 |

### イベント

| Event Name  | Description                                  | Parameters |
| ----------- | -------------------------------------------- | ---------- |
| show        | popover が表示されたときにトリガー           | —          |
| after-enter | 入力トランジションの終了時にトリガされます。 | —          |
| hide        | popover が非表示になったときにトリガー       | —          |
| after-leave | 離脱トランジション終了時のトリガー           | —          |
