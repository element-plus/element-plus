## Checkbox

複数の選択肢がある場合の選択肢グループ

### 基本的な使い方

checkbox 単独で使用して 2 つの状態を切り替えることができます。

:::demo `el-checkbox` の `v-model` バインド変数)を定義する。デフォルト値は単一の `checkbox` の場合、 `Boolean` で、チェックを選択した場合は `true` になります。el-checkbox`タグ内の内容は、checkbox のボタンに続く説明文になります。

```html
<template>
  <div>
    <el-checkbox v-model="checked1" label="Option 1"></el-checkbox>
    <el-checkbox v-model="checked2" label="Option 2"></el-checkbox>
  </div>
  <div>
    <el-checkbox
      v-model="checked3"
      label="Option 1"
      size="medium"
    ></el-checkbox>
    <el-checkbox
      v-model="checked4"
      label="Option 2"
      size="medium"
    ></el-checkbox>
  </div>
  <div>
    <el-checkbox v-model="checked5" label="Option 1" size="small"></el-checkbox>
    <el-checkbox v-model="checked6" label="Option 2" size="small"></el-checkbox>
  </div>
  <div>
    <el-checkbox v-model="checked7" label="Option 1" size="mini"></el-checkbox>
    <el-checkbox v-model="checked8" label="Option 2" size="mini"></el-checkbox>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
      }
    },
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const checked1 = ref(true);
      const checked2 = ref(false);
      const checked3 = ref(false);
      const checked4 = ref(false);
      const checked5 = ref(false);
      const checked6 = ref(false);
      const checked7 = ref(false);
      const checked8 = ref(false);
      return {
        checked1,
        checked2,
        checked3,
        checked4,
        checked5,
        checked6,
        checked7,
        checked8,
      };
    },
  });

</setup>
-->
```

:::

### 無効状態

checkbox を無効にした状態。

:::demo `disabled` 属性を設定する。

```html
<template>
  <el-checkbox v-model="checked1" disabled>Option</el-checkbox>
  <el-checkbox v-model="checked2" disabled>Option</el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true,
      }
    },
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const checked1 = ref(false);
      const checked2 = ref(true);
      return {
        checked1,
        checked2,
      };
    },
  });
</setup>
-->
```

:::

### Checkbox グループ

1 つのグループに固定された複数の checkbox に使用され、選択肢が選択されているかどうかをチェックして表示します。

:::demo `checkbox-group` 要素は `Array` としてバインドされた `v-model` を用いて複数の checkbox を一つのグループにまとめて管理することができる。`el-checkbox` 要素の内部では、`label` が checkbox の値である。このタグにコンテンツが入れ子になっていない場合、`label` は checkbox のボタンに続く説明文としてレンダリングされます。`label` は配列の要素の値にも対応する。 指定された値が配列に存在する場合は選択され、その逆(指定されていない値は選択されない)も同様である。

```html
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="Option A"></el-checkbox>
    <el-checkbox label="Option B"></el-checkbox>
    <el-checkbox label="Option C"></el-checkbox>
    <el-checkbox label="disabled" disabled></el-checkbox>
    <el-checkbox label="selected and disabled" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
  export default {
    data() {
      return {
        checkList: ['selected and disabled', 'Option A'],
      }
    },
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const checkList = ref(['selected and disabled','Option A']);
      return {
        checkList,
      };
    },
  });

</setup>
-->
```

:::

### 不確定

`indeterminate`プロパティは「すべてをチェックする」効果を加えるのに役立ちます。

:::demo

```html
<template>
  <el-checkbox
    :indeterminate="isIndeterminate"
    v-model="checkAll"
    @change="handleCheckAllChange"
    >Check all</el-checkbox
  >
  <el-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <el-checkbox v-for="city in cities" :label="city" :key="city"
      >{{city}}</el-checkbox
    >
  </el-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true,
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.cities.length
      },
    },
  }
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default defineComponent({
    setup() {
      const state = reactive({
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true,
      });
      const handleCheckAllChange = (val) => {
        state.checkedCities = val ? cityOptions : [];
        state.isIndeterminate = false;
      };
      const handleCheckedCitiesChange = (value) => {
        const checkedCount = value.length;
        state.checkAll = checkedCount === state.cities.length;
        state.isIndeterminate = checkedCount > 0 && checkedCount < state.cities.length;
      };
      return {
        ...toRefs(state),
        handleCheckAllChange,
        handleCheckedCitiesChange,
      };
    },
  });

</setup>
-->
```

:::

### 最小/最大チェック項目

`min` と `max` プロパティは、チェックする項目の数を制限するのに役立つ。

:::demo

```html
<template>
  <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <el-checkbox v-for="city in cities" :label="city" :key="city"
      >{{city}}</el-checkbox
    >
  </el-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
  export default {
    data() {
      return {
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
      }
    },
  }
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default defineComponent({
    setup() {
      const state = reactive({
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
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

### ボタンスタイル

ボタンスタイルの checkbox。

:::demo `EL-CHECKBOX` 要素を `EL-CHECKBOX-BUTTON` 要素に変更すればよい。また、`size` 属性も提供されています。

```html
<template>
  <div>
    <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="city in cities" :label="city" :key="city"
        >{{city}}</el-checkbox-button
      >
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup2" size="medium">
      <el-checkbox-button v-for="city in cities" :label="city" :key="city"
        >{{city}}</el-checkbox-button
      >
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup3" size="small">
      <el-checkbox-button
        v-for="city in cities"
        :label="city"
        :disabled="city === 'Beijing'"
        :key="city"
        >{{city}}</el-checkbox-button
      >
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <el-checkbox-button v-for="city in cities" :label="city" :key="city"
        >{{city}}</el-checkbox-button
      >
    </el-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

  export default {
    data() {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions,
      }
    },
  }
</script>
<!--
<setup>

import { defineComponent, reactive, toRefs } from 'vue';

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

export default defineComponent({
  setup() {
    const state = reactive({
      checkboxGroup1: ['Shanghai'],
      checkboxGroup2: ['Shanghai'],
      checkboxGroup3: ['Shanghai'],
      checkboxGroup4: ['Shanghai'],
      cities: cityOptions,
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

### 境界線をつける

:::demo `border`属性は checkbox に境界線を追加することができます。

```html
<template>
  <div>
    <el-checkbox v-model="checked1" label="Option1" border></el-checkbox>
    <el-checkbox v-model="checked2" label="Option2" border></el-checkbox>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox
      v-model="checked3"
      label="Option1"
      border
      size="medium"
    ></el-checkbox>
    <el-checkbox
      v-model="checked4"
      label="Option2"
      border
      size="medium"
    ></el-checkbox>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup1" size="small">
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border disabled></el-checkbox>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: [],
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
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: [],
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

### Checkbox 属性

| Attribute             | Description                                         | Type                               | Options               | Default |
| --------------------- | --------------------------------------------------- | ---------------------------------- | --------------------- | ------- |
| model-value / v-model | バインディング値                                    | string / number / boolean          | —                     | —       |
| label                 | `checkbox-group` の中で使われる場合の checkbox の値 | string / number / boolean / object | —                     | —       |
| true-label            | checkbox がチェックされている場合は、checkbox の値  | string / number                    | —                     | —       |
| false-label           | checkbox がチェックされていない場合の checkbox の値 | string / number                    | —                     | —       |
| disabled              | checkbox を無効にするかどうか                       | boolean                            | —                     | false   |
| border                | checkbox の周りにボーダーを追加するかどうか         | boolean                            | —                     | false   |
| size                  | checkbox のサイズ                                   | string                             | medium / small / mini | —       |
| name                  | ネイティブ 'name' 属性                              | string                             | —                     | —       |
| checked               | checkbox がチェックされているかどうか               | boolean                            | —                     | false   |
| indeterminate         | ネイティブ checkbox の `indeterminate` と同じ       | boolean                            | —                     | false   |

### Checkbox のイベント

| Event Name | Description                                        | Parameters        |
| ---------- | -------------------------------------------------- | ----------------- |
| change     | バインディング値が変更された場合にトリガされます。 | the updated value |

### Checkbox グループの属性

| Attribute             | Description                                | Type    | Options               | Default |
| --------------------- | ------------------------------------------ | ------- | --------------------- | ------- |
| model-value / v-model | バインディング値                           | array   | —                     | —       |
| size                  | checkbox の大きさ                          | string  | medium / small / mini | —       |
| disabled              | ネスティング checkbox を無効にするかどうか | boolean | —                     | false   |
| min                   | checkbox の最小チェック数                  | number  | —                     | —       |
| max                   | checkbox の最大チェック数                  | number  | —                     | —       |
| text-color            | ボタンがアクティブなときのフォント色       | string  | —                     | #ffffff |
| fill                  | ボタンがアクティブなときの境界線と背景色   | string  | —                     | #409EFF |

### Checkbox グループのイベント

| Event Name | Description                                        | Parameters        |
| ---------- | -------------------------------------------------- | ----------------- |
| change     | バインディング値が変更された場合にトリガされます。 | the updated value |

### Checkbox ボタンの属性

| Attribute   | Description                                         | Type                               | Options | Default |
| ----------- | --------------------------------------------------- | ---------------------------------- | ------- | ------- |
| label       | `checkbox-group` の中で使われる場合の checkbox の値 | string / number / boolean / object | —       | —       |
| true-label  | チェックされている場合の、checkbox の値             | string / number                    | —       | —       |
| false-label | チェックされていない場合の、checkbox の値           | string / number                    | —       | —       |
| disabled    | checkbox を無効にするかどうか                       | boolean                            | —       | false   |
| name        | ネイティブ 'name' 属性                              | string                             | —       | —       |
| checked     | checkbox がチェックされているかどうか               | boolean                            | —       | false   |
