(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[281],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/transfer.md?vue&type=template&id=2da7a590

const transfervue_type_template_id_2da7a590_hoisted_1 = {
  class: "content element-doc"
};

const transfervue_type_template_id_2da7a590_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("トランスファー ");

const transfervue_type_template_id_2da7a590_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な使い方 ");

const transfervue_type_template_id_2da7a590_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("データは "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を用いて転送に渡されます。データはオブジェクトの配列である必要があり、各オブジェクトは以下の属性を持つ必要があります。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" はデータ項目の識別情報、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は表示されるテキスト、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" はデータ項目が無効かどうかを示す。ターゲットリスト内の項目は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" にバインドされた変数と同期しており、その変数の値はターゲット項目のキーの配列となる。したがって、ターゲットリストを初期状態で空にしたくない場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を配列で初期化することができる。")])], -1);

const transfervue_type_template_id_2da7a590_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-transfer v-model=\"value\" :data=\"data\"> </el-transfer>\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = (_) => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `Option ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      return {\n        data: generateData(),\n        value: [1, 4],\n      }\n    },\n  }\n</script>\n")], -1);

const transfervue_type_template_id_2da7a590_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("フィルタリング可能 ");

const transfervue_type_template_id_2da7a590_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "データ項目の検索やフィルタリングができます。", -1);

const transfervue_type_template_id_2da7a590_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("フィルタモードを有効にするには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定する。デフォルトでは、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に検索キーワードが含まれている場合は検索結果に含まれる。また、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を用いて独自のフィルタメソッドを実装することもできる。これはメソッドを受け取り、キーワードが変更されるたびに検索キーワードと各データ項目をそれに渡す。あるデータ項目については、そのメソッドが真を返した場合、そのデータが検索結果リストに含まれる。")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    filterable\n    :filter-method=\"filterMethod\"\n    filter-placeholder=\"State Abbreviations\"\n    v-model=\"value\"\n    :data=\"data\"\n  >\n  </el-transfer>\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = (_) => {\n        const data = []\n        const states = [\n          'California',\n          'Illinois',\n          'Maryland',\n          'Texas',\n          'Florida',\n          'Colorado',\n          'Connecticut ',\n        ]\n        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']\n        states.forEach((city, index) => {\n          data.push({\n            label: city,\n            key: index,\n            initial: initials[index],\n          })\n        })\n        return data\n      }\n      return {\n        data: generateData(),\n        value: [],\n        filterMethod(query, item) {\n          return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタマイズ可能 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "リストのタイトル、ボタンのテキスト、データ項目のレンダリング機能、リストフッターのステータステキストの確認、リストフッターの内容をカスタマイズすることができます。", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "button-texts"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を使って、リストのタイトル、ボタンのテキスト、データ項目のレンダリング機能、リストヘッダのステータステキストのチェックをそれぞれカスタマイズします。さらに、スコープ付きスロットを使ってデータ項目をカスタマイズすることもできます。リストのフッターの内容には、2 つの名前付きスロットが用意されています。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "左フッター"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("と"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "右フッター"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("です。さらに、いくつかの項目を最初にチェックしたい場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left-default-checked"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "right-default-checked"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を使うことができます。最後に、この例では "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" イベントのデモを行います。このデモは JSX 構文をサポートしていないので、jsfiddle では実行できないことに注意してください。実際のプロジェクトでは、関連する依存関係が正しく設定されていれば "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は動作します。")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <p style=\"text-align: center; margin: 0 0 20px\">\n    Customize data items using render-content\n  </p>\n  <div style=\"text-align: center\">\n    <el-transfer\n      style=\"text-align: left; display: inline-block\"\n      v-model=\"leftValue\"\n      filterable\n      :left-default-checked=\"[2, 3]\"\n      :right-default-checked=\"[1]\"\n      :render-content=\"renderFunc\"\n      :titles=\"['Source', 'Target']\"\n      :button-texts=\"['To left', 'To right']\"\n      :format=\"{\n        noChecked: '${total}',\n        hasChecked: '${checked}/${total}'\n      }\"\n      @change=\"handleChange\"\n      :data=\"data\"\n    >\n      <template #left-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n      </template>\n      <template #right-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n      </template>\n    </el-transfer>\n    <p style=\"text-align: center; margin: 50px 0 20px\">\n      Customize data items using scoped slot\n    </p>\n    <div style=\"text-align: center\">\n      <el-transfer\n        style=\"text-align: left; display: inline-block\"\n        v-model=\"rightValue\"\n        filterable\n        :left-default-checked=\"[2, 3]\"\n        :right-default-checked=\"[1]\"\n        :titles=\"['Source', 'Target']\"\n        :button-texts=\"['To left', 'To right']\"\n        :format=\"{\n          noChecked: '${total}',\n          hasChecked: '${checked}/${total}'\n        }\"\n        @change=\"handleChange\"\n        :data=\"data\"\n      >\n        <template #default=\"{ option }\">\n          <span>{{ option.key }} - {{ option.label }}</span>\n        </template>\n        <template #left-footer>\n          <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n        </template>\n        <template #right-footer>\n          <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n        </template>\n      </el-transfer>\n    </div>\n  </div>\n</template>\n\n<style>\n  .transfer-footer {\n    margin-left: 20px;\n    padding: 6px 5px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      const generateData = (_) => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `Option ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      return {\n        data: generateData(),\n        rightValue: [1],\n        leftValue: [1],\n        renderFunc(h, option) {\n          return h('span', null, option.key, ' - ', option.label)\n        },\n      }\n    },\n\n    methods: {\n      handleChange(value, direction, movedKeys) {\n        console.log(value, direction, movedKeys)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("プロップのエイリアス ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("デフォルトでは、Transfer はデータ項目の中から "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を探します。データ項目に異なるキー名がある場合、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を使ってエイリアスを定義することができます。")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("この例のデータ項目には "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" や "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" がなく、代わりに "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "desc"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" があります。そのため、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("と"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("にエイリアスを設定する必要があります。")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    :props=\"{\n      key: 'value',\n      label: 'desc'\n    }\"\n    :data=\"data\"\n  >\n  </el-transfer>\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = (_) => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            value: i,\n            desc: `Option ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      return {\n        data: generateData(),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値</td><td>array</td><td>—</td><td>—</td></tr><tr><td>data</td><td>データソース</td><td>array[{ key, label, disabled }]</td><td>—</td><td>[ ]</td></tr><tr><td>filterable</td><td>転送がフィルタリング可能かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-placeholder</td><td>フィルタ入力のプレースホルダ</td><td>string</td><td>—</td><td>Enter keyword</td></tr><tr><td>filter-method</td><td>カスタムフィルタメソッド</td><td>function</td><td>—</td><td>—</td></tr><tr><td>target-order</td><td>ターゲットリストの要素の順序を指定します。<code>original</code> に設定されている場合、要素はデータソースと同じ順序を保ちます。<code>push</code> に設定すると、新しく追加された要素はボトムに押し出されます。<code>unshift</code> に設定すると、新たに追加された要素はトップに挿入される。</td><td>string</td><td>original / push / unshift</td><td>original</td></tr><tr><td>titles</td><td>カスタムリストタイトル</td><td>array</td><td>—</td><td>[&#39;List 1&#39;, &#39;List 2&#39;]</td></tr><tr><td>button-texts</td><td>カスタムボタンテキスト</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>render-content</td><td>データ項目のカスタムレンダリング関数</td><td>function(h, option)</td><td>—</td><td>—</td></tr><tr><td>format</td><td>リストヘッダの状態を確認するためのテキスト</td><td>object{noChecked, hasChecked}</td><td>—</td><td>{ noChecked: &#39;${checked}/${total}&#39;, hasChecked: &#39;${checked}/${total}&#39; }</td></tr><tr><td>props</td><td>データソース用のプロップエイリアス</td><td>object{key, label, disabled}</td><td>—</td><td>—</td></tr><tr><td>left-default-checked</td><td>左リストの初期チェックデータ項目のキー配列</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>right-default-checked</td><td>右リストの初期チェックデータ項目のキー配列</td><td>array</td><td>—</td><td>[ ]</td></tr></tbody></table>", 1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スロット ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "left-footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "左リストフッターの内容")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "right-footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "右リストフッターの内容")])])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スコープされたスロット ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "データ項目のカスタムコンテンツ。スコープパラメータは { オプション } です。")])])], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("メソッド ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Method"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clearQuery"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "特定のパネルのフィルタキーワードをクリア"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "'left' / 'right'")])])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("イベント ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>右側のリストでデータ項目が変更された場合にトリガーされる</td><td>key array of current data items in the right list, transfer direction (left or right), moved item keys</td></tr><tr><td>left-check-change</td><td>エンドユーザーが左リストのデータ項目のチェック状態を変更した場合にトリガーされます。</td><td>key array of currently checked items, key array of items whose checked state have changed</td></tr><tr><td>right-check-change</td><td>エンドユーザーが右のリスト内の任意のデータ項目のチェック状態を変更した場合にトリガーされます。</td><td>key array of currently checked items, key array of items whose checked state have changed</td></tr></tbody></table>", 1);

function transfervue_type_template_id_2da7a590_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", transfervue_type_template_id_2da7a590_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "toransuhua",
    content: "トランスファー",
    href: "#toransuhua",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_2da7a590_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#toransuhua"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-de-nashi-ifang",
    content: "基本的な使い方",
    href: "#ji-ben-de-nashi-ifang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_2da7a590_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-de-nashi-ifang"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_2da7a590_hoisted_5]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_2da7a590_hoisted_4]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "huirutaringuke-neng",
    content: "フィルタリング可能",
    href: "#huirutaringuke-neng",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_2da7a590_hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#huirutaringuke-neng"
    })]),
    _: 1
  }), transfervue_type_template_id_2da7a590_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_2da7a590_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamaizuke-neng",
    content: "カスタマイズ可能",
    href: "#kasutamaizuke-neng",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamaizuke-neng"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "purotupunoeiriasu",
    content: "プロップのエイリアス",
    href: "#purotupunoeiriasu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#purotupunoeiriasu"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "surotuto",
    content: "スロット",
    href: "#surotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#surotuto"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sukopusaretasurotuto",
    content: "スコープされたスロット",
    href: "#sukopusaretasurotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sukopusaretasurotuto"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "mesotudo",
    content: "メソッド",
    href: "#mesotudo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#mesotudo"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ibento",
    content: "イベント",
    href: "#ibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ibento"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/transfer.md?vue&type=template&id=2da7a590

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/transfer.md?vue&type=script&lang=ts

/* harmony default export */ var transfervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      const democomponentExport = {
        data() {
          const generateData = _ => {
            const data = [];

            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `Option ${i}`,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            value: [1, 4]
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_transfer, {
          filterable: "",
          "filter-method": _ctx.filterMethod,
          "filter-placeholder": "State Abbreviations",
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          data: _ctx.data
        }, null, 8, ["filter-method", "modelValue", "data"])]);
      }

      const democomponentExport = {
        data() {
          const generateData = _ => {
            const data = [];
            const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
            const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
            states.forEach((city, index) => {
              data.push({
                label: city,
                key: index,
                initial: initials[index]
              });
            });
            return data;
          };

          return {
            data: generateData(),
            value: [],

            filterMethod(query, item) {
              return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
            }

          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        toDisplayString: _toDisplayString,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("p", {
        style: {
          "text-align": "center",
          "margin": "0 0 20px"
        }
      }, " Customize data items using render-content ", -1);

      const _hoisted_2 = {
        style: {
          "text-align": "center"
        }
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Operation");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Operation");

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("p", {
        style: {
          "text-align": "center",
          "margin": "50px 0 20px"
        }
      }, " Customize data items using scoped slot ", -1);

      const _hoisted_6 = {
        style: {
          "text-align": "center"
        }
      };

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Operation");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("Operation");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createElementBlock("div", null, [_hoisted_1, _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_transfer, {
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          modelValue: _ctx.leftValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.leftValue = $event),
          filterable: "",
          "left-default-checked": [2, 3],
          "right-default-checked": [1],
          "render-content": _ctx.renderFunc,
          titles: ['Source', 'Target'],
          "button-texts": ['To left', 'To right'],
          format: {
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          },
          onChange: _ctx.handleChange,
          data: _ctx.data
        }, {
          "left-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          "right-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "render-content", "onChange", "data"]), _hoisted_5, _createElementVNode("div", _hoisted_6, [_createVNode(_component_el_transfer, {
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          modelValue: _ctx.rightValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.rightValue = $event),
          filterable: "",
          "left-default-checked": [2, 3],
          "right-default-checked": [1],
          titles: ['Source', 'Target'],
          "button-texts": ['To left', 'To right'],
          format: {
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          },
          onChange: _ctx.handleChange,
          data: _ctx.data
        }, {
          default: _withCtx(({
            option
          }) => [_createElementVNode("span", null, _toDisplayString(option.key) + " - " + _toDisplayString(option.label), 1)]),
          "left-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          })]),
          "right-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "onChange", "data"])])])]);
      }

      const democomponentExport = {
        data() {
          const generateData = _ => {
            const data = [];

            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `Option ${i}`,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            rightValue: [1],
            leftValue: [1],

            renderFunc(h, option) {
              return h('span', null, option.key, ' - ', option.label);
            }

          };
        },

        methods: {
          handleChange(value, direction, movedKeys) {
            console.log(value, direction, movedKeys);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          props: {
            key: 'value',
            label: 'desc'
          },
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      const democomponentExport = {
        data() {
          const generateData = _ => {
            const data = [];

            for (let i = 1; i <= 15; i++) {
              data.push({
                value: i,
                desc: `Option ${i}`,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            value: []
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/transfer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/transfer.md



transfervue_type_script_lang_ts.render = transfervue_type_template_id_2da7a590_render

/* harmony default export */ var transfer = __webpack_exports__["default"] = (transfervue_type_script_lang_ts);

/***/ })

}]);