(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[188],{

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/transfer.md?vue&type=template&id=27cdd840

var transfervue_type_template_id_27cdd840_hoisted_1 = {
  class: "content element-doc"
};

var transfervue_type_template_id_27cdd840_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "toransuhua"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#toransuhua"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" トランスファー")], -1);

var transfervue_type_template_id_27cdd840_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var transfervue_type_template_id_27cdd840_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("データは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を用いて転送に渡されます。データはオブジェクトの配列である必要があり、各オブジェクトは以下の属性を持つ必要があります。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" はデータ項目の識別情報、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" は表示されるテキスト、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" はデータ項目が無効かどうかを示す。ターゲットリスト内の項目は "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" にバインドされた変数と同期しており、その変数の値はターゲット項目のキーの配列となる。したがって、ターゲットリストを初期状態で空にしたくない場合は、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("を配列で初期化することができる。")])], -1);

var transfervue_type_template_id_27cdd840_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    :data=\"data\">\n  </el-transfer>\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `Option ${ i }`,\n            disabled: i % 4 === 0\n          });\n        }\n        return data;\n      };\n      return {\n        data: generateData(),\n        value: [1, 4]\n      };\n    }\n  };\n</script>\n")], -1);

var transfervue_type_template_id_27cdd840_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "huirutaringu-ke-neng"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#huirutaringu-ke-neng"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" フィルタリング可能")], -1);

var transfervue_type_template_id_27cdd840_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "データ項目の検索やフィルタリングができます。", -1);

var transfervue_type_template_id_27cdd840_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("フィルタモードを有効にするには、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定する。デフォルトでは、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に検索キーワードが含まれている場合は検索結果に含まれる。また、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を用いて独自のフィルタメソッドを実装することもできる。これはメソッドを受け取り、キーワードが変更されるたびに検索キーワードと各データ項目をそれに渡す。あるデータ項目については、そのメソッドが真を返した場合、そのデータが検索結果リストに含まれる。")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    filterable\n    :filter-method=\"filterMethod\"\n    filter-placeholder=\"State Abbreviations\"\n    v-model=\"value\"\n    :data=\"data\">\n  </el-transfer>\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];\n        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];\n        states.forEach((city, index) => {\n          data.push({\n            label: city,\n            key: index,\n            initial: initials[index]\n          });\n        });\n        return data;\n      };\n      return {\n        data: generateData(),\n        value: [],\n        filterMethod(query, item) {\n          return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kasutamaizu-ke-neng"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamaizu-ke-neng"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" カスタマイズ可能")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "リストのタイトル、ボタンのテキスト、データ項目のレンダリング機能、リストフッターのステータステキストの確認、リストフッターの内容をカスタマイズすることができます。", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "button-texts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使って、リストのタイトル、ボタンのテキスト、データ項目のレンダリング機能、リストヘッダのステータステキストのチェックをそれぞれカスタマイズします。さらに、スコープ付きスロットを使ってデータ項目をカスタマイズすることもできます。リストのフッターの内容には、2つの名前付きスロットが用意されています。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "左フッター"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("と"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "右フッター"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("です。さらに、いくつかの項目を最初にチェックしたい場合は、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "left-default-checked"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "right-default-checked"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使うことができます。最後に、この例では "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" イベントのデモを行います。このデモはJSX構文をサポートしていないので、jsfiddleでは実行できないことに注意してください。実際のプロジェクトでは、関連する依存関係が正しく設定されていれば "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" は動作します。")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <p style=\"text-align: center; margin: 0 0 20px\">Customize data items using render-content</p>\n  <div style=\"text-align: center\">\n    <el-transfer\n      style=\"text-align: left; display: inline-block\"\n      v-model=\"leftValue\"\n      filterable\n      :left-default-checked=\"[2, 3]\"\n      :right-default-checked=\"[1]\"\n      :render-content=\"renderFunc\"\n      :titles=\"['Source', 'Target']\"\n      :button-texts=\"['To left', 'To right']\"\n      :format=\"{\n        noChecked: '${total}',\n        hasChecked: '${checked}/${total}'\n      }\"\n      @change=\"handleChange\"\n      :data=\"data\"\n    >\n      <template #left-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n      </template>\n      <template #right-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n      </template>\n    </el-transfer>\n    <p style=\"text-align: center; margin: 50px 0 20px\">Customize data items using scoped slot</p>\n    <div style=\"text-align: center\">\n      <el-transfer\n        style=\"text-align: left; display: inline-block\"\n        v-model=\"rightValue\"\n        filterable\n        :left-default-checked=\"[2, 3]\"\n        :right-default-checked=\"[1]\"\n        :titles=\"['Source', 'Target']\"\n        :button-texts=\"['To left', 'To right']\"\n        :format=\"{\n          noChecked: '${total}',\n          hasChecked: '${checked}/${total}'\n        }\"\n        @change=\"handleChange\"\n        :data=\"data\"\n      >\n        <template #default=\"{ option }\">\n          <span>{{ option.key }} - {{ option.label }}</span>\n        </template>\n        <template #left-footer>\n          <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n        </template>\n        <template #right-footer>\n          <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n        </template>\n      </el-transfer>\n    </div>\n  </div>\n</template>\n\n<style>\n  .transfer-footer {\n    margin-left: 20px;\n    padding: 6px 5px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `Option ${ i }`,\n            disabled: i % 4 === 0\n          });\n        }\n        return data;\n      };\n      return {\n        data: generateData(),\n        rightValue: [1],\n        leftValue: [1],\n        renderFunc(h, option) {\n          return h(\"span\", null, option.key, \" - \", option.label);\n        }\n      };\n    },\n\n    methods: {\n      handleChange(value, direction, movedKeys) {\n        console.log(value, direction, movedKeys);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "purotupunoeiriasu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#purotupunoeiriasu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" プロップのエイリアス")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("デフォルトでは、Transferはデータ項目の中から "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を探します。データ項目に異なるキー名がある場合、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を使ってエイリアスを定義することができます。")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("この例のデータ項目には "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" や "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" がなく、代わりに "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "desc"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" があります。そのため、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("と"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("にエイリアスを設定する必要があります。")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    :props=\"{\n      key: 'value',\n      label: 'desc'\n    }\"\n    :data=\"data\">\n  </el-transfer>\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            value: i,\n            desc: `Option ${ i }`,\n            disabled: i % 4 === 0\n          });\n        }\n        return data;\n      };\n      return {\n        data: generateData(),\n        value: []\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value / v-model</td><td>バインディング値</td><td>array</td><td>—</td><td>—</td></tr><tr><td>data</td><td>データソース</td><td>array[{ key, label, disabled }]</td><td>—</td><td>[ ]</td></tr><tr><td>filterable</td><td>転送がフィルタリング可能かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-placeholder</td><td>フィルタ入力のプレースホルダ</td><td>string</td><td>—</td><td>Enter keyword</td></tr><tr><td>filter-method</td><td>カスタムフィルタメソッド</td><td>function</td><td>—</td><td>—</td></tr><tr><td>target-order</td><td>ターゲットリストの要素の順序を指定します。<code>original</code> に設定されている場合、要素はデータソースと同じ順序を保ちます。<code>push</code> に設定すると、新しく追加された要素はボトムに押し出されます。<code>unshift</code> に設定すると、新たに追加された要素はトップに挿入される。</td><td>string</td><td>original / push / unshift</td><td>original</td></tr><tr><td>titles</td><td>カスタムリストタイトル</td><td>array</td><td>—</td><td>[&#39;List 1&#39;, &#39;List 2&#39;]</td></tr><tr><td>button-texts</td><td>カスタムボタンテキスト</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>render-content</td><td>データ項目のカスタムレンダリング関数</td><td>function(h, option)</td><td>—</td><td>—</td></tr><tr><td>format</td><td>リストヘッダの状態を確認するためのテキスト</td><td>object{noChecked, hasChecked}</td><td>—</td><td>{ noChecked: &#39;${checked}/${total}&#39;, hasChecked: &#39;${checked}/${total}&#39; }</td></tr><tr><td>props</td><td>データソース用のプロップエイリアス</td><td>object{key, label, disabled}</td><td>—</td><td>—</td></tr><tr><td>left-default-checked</td><td>左リストの初期チェックデータ項目のキー配列</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>right-default-checked</td><td>右リストの初期チェックデータ項目のキー配列</td><td>array</td><td>—</td><td>[ ]</td></tr></tbody></table><h3 id=\"surotuto\"><a class=\"header-anchor\" href=\"#surotuto\">¶</a> スロット</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>left-footer</td><td>左リストフッターの内容</td></tr><tr><td>right-footer</td><td>右リストフッターの内容</td></tr></tbody></table><h3 id=\"sukopusaretasurotuto\"><a class=\"header-anchor\" href=\"#sukopusaretasurotuto\">¶</a> スコープされたスロット</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>データ項目のカスタムコンテンツ。スコープパラメータは { オプション } です。</td></tr></tbody></table><h3 id=\"mesotudo\"><a class=\"header-anchor\" href=\"#mesotudo\">¶</a> メソッド</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>clearQuery</td><td>特定のパネルのフィルタキーワードをクリア</td><td>&#39;left&#39; / &#39;right&#39;</td></tr></tbody></table><h3 id=\"ibento\"><a class=\"header-anchor\" href=\"#ibento\">¶</a> イベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>右側のリストでデータ項目が変更された場合にトリガーされる</td><td>key array of current data items in the right list, transfer direction (left or right), moved item keys</td></tr><tr><td>left-check-change</td><td>エンドユーザーが左リストのデータ項目のチェック状態を変更した場合にトリガーされます。</td><td>key array of currently checked items, key array of items whose checked state have changed</td></tr><tr><td>right-check-change</td><td>エンドユーザーが右のリスト内の任意のデータ項目のチェック状態を変更した場合にトリガーされます。</td><td>key array of currently checked items, key array of items whose checked state have changed</td></tr></tbody></table>", 10);

function transfervue_type_template_id_27cdd840_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", transfervue_type_template_id_27cdd840_hoisted_1, [transfervue_type_template_id_27cdd840_hoisted_2, transfervue_type_template_id_27cdd840_hoisted_3, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [transfervue_type_template_id_27cdd840_hoisted_5];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [transfervue_type_template_id_27cdd840_hoisted_4];
    }),
    _: 1
  }), transfervue_type_template_id_27cdd840_hoisted_6, transfervue_type_template_id_27cdd840_hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [transfervue_type_template_id_27cdd840_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18]);
}
// CONCATENATED MODULE: ./website/docs/jp/transfer.md?vue&type=template&id=27cdd840

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/transfer.md?vue&type=script&lang=ts


/* harmony default export */ var transfervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];

            for (var i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: "Option " + i,
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_transfer, {
          filterable: "",
          "filter-method": _ctx.filterMethod,
          "filter-placeholder": "State Abbreviations",
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          data: _ctx.data
        }, null, 8, ["filter-method", "modelValue", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];
            var states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
            var initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
            states.forEach(function (city, index) {
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
            filterMethod: function filterMethod(query, item) {
              return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", {
        style: {
          "text-align": "center",
          "margin": "0 0 20px"
        }
      }, "Customize data items using render-content", -1);

      var _hoisted_2 = {
        style: {
          "text-align": "center"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Operation");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Operation");

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", {
        style: {
          "text-align": "center",
          "margin": "50px 0 20px"
        }
      }, "Customize data items using scoped slot", -1);

      var _hoisted_6 = {
        style: {
          "text-align": "center"
        }
      };

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Operation");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Operation");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode(_component_el_transfer, {
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          modelValue: _ctx.leftValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.leftValue = $event;
          }),
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
          "left-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          "right-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "render-content", "onChange", "data"]), _hoisted_5, _createVNode("div", _hoisted_6, [_createVNode(_component_el_transfer, {
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          modelValue: _ctx.rightValue,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.rightValue = $event;
          }),
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
          default: _withCtx(function (_ref) {
            var option = _ref.option;
            return [_createVNode("span", null, _toDisplayString(option.key) + " - " + _toDisplayString(option.label), 1)];
          }),
          "left-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            })];
          }),
          "right-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onChange", "data"])])])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];

            for (var i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: "Option " + i,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            rightValue: [1],
            leftValue: [1],
            renderFunc: function renderFunc(h, option) {
              return h("span", null, option.key, " - ", option.label);
            }
          };
        },
        methods: {
          handleChange: function handleChange(value, direction, movedKeys) {
            console.log(value, direction, movedKeys);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          props: {
            key: 'value',
            label: 'desc'
          },
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];

            for (var i = 1; i <= 15; i++) {
              data.push({
                value: i,
                desc: "Option " + i,
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/transfer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/transfer.md



transfervue_type_script_lang_ts.render = transfervue_type_template_id_27cdd840_render

/* harmony default export */ var transfer = __webpack_exports__["default"] = (transfervue_type_script_lang_ts);

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/transfer.md?vue&type=template&id=437018f6

var transfervue_type_template_id_437018f6_hoisted_1 = {
  class: "content element-doc"
};

var transfervue_type_template_id_437018f6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "transfer"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#transfer"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Transfer")], -1);

var transfervue_type_template_id_437018f6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Permet de transférer des options d'une liste à une autre de manière ergonomique.", -1);

var transfervue_type_template_id_437018f6_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Usage")], -1);

var transfervue_type_template_id_437018f6_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Les données sont passée via l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Ce doit être un tableau d'objets, chaque objet ayant les propriétés suivantes: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" étant l'identifiant de l'objet, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" étant le texte à afficher et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" indiquant si l'objet est désactivé. Ces objets sont synchronisés avec "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", sa valeur étant un tableau d'identifiants des objets. Si vous ne souhaitez pas avoir une liste vide par défaut, vous pouvez donc initialiser "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" avec un tableau.")])], -1);

var transfervue_type_template_id_437018f6_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    :data=\"data\">\n  </el-transfer>\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `Option ${ i }`,\n            disabled: i % 4 === 0\n          });\n        }\n        return data;\n      };\n      return {\n        data: generateData(),\n        value: [1, 4]\n      };\n    }\n  };\n</script>\n")], -1);

var transfervue_type_template_id_437018f6_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "filtrable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filtrable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Filtrable")], -1);

var transfervue_type_template_id_437018f6_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez filtrer les options.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Ajoutez l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" activer le filtrage. Par défaut, si la propriété "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de l'objet contient le mot-clé, il sera inclus dans les résultats. Vous pouvez aussi implémenter votre propre filtre grâce à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Cette fonction est lancée à chaque changement de mot-clé. Si elle retourne "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" l'objet en question sera dans les résultats.")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    filterable\n    :filter-method=\"filterMethod\"\n    filter-placeholder=\"State Abbreviations\"\n    :data=\"data\"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];\n        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];\n        states.forEach((city, index) => {\n          data.push({\n            label: city,\n            key: index,\n            initial: initials[index]\n          });\n        });\n        return data;\n      };\n      return {\n        data: generateData(),\n        value: [],\n        filterMethod(query, item) {\n          return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "personnalisable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#personnalisable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Personnalisable")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez personnaliser les titres, les textes des boutons, les fonctions de rendu pour les objets et le contenu du footer.", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "titles"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "button-texts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour personnaliser respectivement les titres des listes, les textes des boutons, les fonctions de rendus des objets et le texte des statuts du header. Vous pouvez aussi utiliser des slots pour les objets. Pour le contenu du footer, deux slots sont fournis: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "left-footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "right-footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Si vous souhaitez que certains items soient sélectionnés par défaut, utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "left-default-checked"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "right-default-checked"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Enfin, cet exemple utilise aussi l'évènement "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Notez que cet exemple ne fonctionne pas dans jsfiddle car il ne supporte pas JSX. Dans un vrai projet, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" fonctionnera si les dépendances sont satisfaites.")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <p style=\"text-align: center; margin: 0 0 20px\">Utilise render-content</p>\n  <div style=\"text-align: center\">\n    <el-transfer\n      v-model=\"leftValue\"\n      style=\"text-align: left; display: inline-block\"\n      filterable\n      :left-default-checked=\"[2, 3]\"\n      :right-default-checked=\"[1]\"\n      :render-content=\"renderFunc\"\n      :titles=\"['Source', 'Target']\"\n      :button-texts=\"['To left', 'To right']\"\n      :format=\"{\n        noChecked: '${total}',\n        hasChecked: '${checked}/${total}'\n      }\"\n      :data=\"data\"\n      @change=\"handleChange\"\n    >\n      <template #left-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Opération</el-button>\n      </template>\n      <template #right-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Opération</el-button>\n      </template>\n    </el-transfer>\n    <p style=\"text-align: center; margin: 50px 0 20px\">Utilise des slots</p>\n    <div style=\"text-align: center\">\n      <el-transfer\n        v-model=\"rightValue\"\n        style=\"text-align: left; display: inline-block\"\n        filterable\n        :left-default-checked=\"[2, 3]\"\n        :right-default-checked=\"[1]\"\n        :titles=\"['Source', 'Target']\"\n        :button-texts=\"['To left', 'To right']\"\n        :format=\"{\n          noChecked: '${total}',\n          hasChecked: '${checked}/${total}'\n        }\"\n        :data=\"data\"\n        @change=\"handleChange\"\n      >\n        <template #default=\"{ option }\">\n          <span>{{ option.key }} - {{ option.label }}</span>\n        </template>\n        <template #left-footer>\n          <el-button class=\"transfer-footer\" size=\"small\">Opération</el-button>\n        </template>\n        <template #right-footer>\n          <el-button class=\"transfer-footer\" size=\"small\">Opération</el-button>\n        </template>\n      </el-transfer>\n    </div>\n  </div>\n</template>\n\n<style>\n.transfer-footer {\n  margin-left: 20px;\n  padding: 6px 5px;\n}\n</style>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `Option ${ i }`,\n            disabled: i % 4 === 0\n          });\n        }\n        return data;\n      };\n      return {\n        data: generateData(),\n        leftValue: [1],\n        rightValue: [1],\n        renderFunc(h, option) {\n          return h(\"span\", null, option.key, \" - \", option.label);\n        }\n      };\n    },\n\n    methods: {\n      handleChange(value, direction, movedKeys) {\n        console.log(value, direction, movedKeys);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "alias-des-proprietes"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#alias-des-proprietes"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Alias des propriétés")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Par défaut, Transfer utilise "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de vos objets. Si vos objets ont des propriétés différentes, vous pouvez utiliser l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour définir des alias.")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Les objets de cet exemple n'ont pas de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ni "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", à la place ils ont "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "desc"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Vous devez donc configurer les alias de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    :props=\"{\n      key: 'value',\n      label: 'desc'\n    }\"\n    :data=\"data\"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            value: i,\n            desc: `Option ${ i }`,\n            disabled: i % 4 === 0\n          });\n        }\n        return data;\n      };\n      return {\n        data: generateData(),\n        value: []\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs\"><a class=\"header-anchor\" href=\"#attributs\">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>value / v-model</td><td>La valeur liée.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>data</td><td>Données principales.</td><td>array[{ key, label, disabled }]</td><td>—</td><td>[ ]</td></tr><tr><td>filterable</td><td>Si Transfer est filtrable.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-placeholder</td><td>Placeholder du champ de filtrage.</td><td>string</td><td>—</td><td>Enter keyword</td></tr><tr><td>filter-method</td><td>Méthode de filtrage.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>target-order</td><td>Ordre de tri des éléments de la liste d&#39;arrivée. S&#39;il est à <code>original</code>, les éléments garderont le même ordre que la liste d&#39;origine. Si à <code>push</code>, les nouveaux éléments seront mis à la suite des anciens. Si mis à <code>unshift</code>, les nouveaux éléments seront mis en haut de la liste.</td><td>string</td><td>original / push / unshift</td><td>original</td></tr><tr><td>titles</td><td>Titres des listes.</td><td>array</td><td>—</td><td>[&#39;List 1&#39;, &#39;List 2&#39;]</td></tr><tr><td>button-texts</td><td>Textes des boutons.</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>render-content</td><td>Fonction de rendu pour les objets.</td><td>function(h, option)</td><td>—</td><td>—</td></tr><tr><td>format</td><td>Textes de statut dans le header.</td><td>object{noChecked, hasChecked}</td><td>—</td><td>{ noChecked: &#39;${checked}/${total}&#39;, hasChecked: &#39;${checked}/${total}&#39; }</td></tr><tr><td>props</td><td>Alias des propriétés des objets source.</td><td>object{key, label, disabled}</td><td>—</td><td>—</td></tr><tr><td>left-default-checked</td><td>Tableau des objets initialement sélectionnés dans la liste de gauche.</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>right-default-checked</td><td>Tableau des objets initialement sélectionnés dans la liste de droite.</td><td>array</td><td>—</td><td>[ ]</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>left-footer</td><td>Contenu du footer de la liste de gauche.</td></tr><tr><td>right-footer</td><td>Contenu du footer de la liste de droite.</td></tr></tbody></table><h3 id=\"slot-avec-portee\"><a class=\"header-anchor\" href=\"#slot-avec-portee\">¶</a> Slot avec portée</h3><table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Contenu personnalisé pour les objets. Le paramètre est { option }.</td></tr></tbody></table><h3 id=\"methodes\"><a class=\"header-anchor\" href=\"#methodes\">¶</a> Méthodes</h3><table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>clearQuery</td><td>Efface le filtre d&#39;une liste.</td><td>&#39;left&#39; / &#39;right&#39;</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Event nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>change</td><td>Se déclenche quand un objet change dans la liste de droite.</td><td>Tableau des objets de la liste de droite, direction du transfer (<code>left</code> ou <code>right</code>), les clés des objets bougés.</td></tr><tr><td>left-check-change</td><td>Se déclenche quand l&#39;utilisateur change le statut d&#39;un objet dans la liste de gauche.</td><td>Liste des objets actuellement sélectionnées, Liste des objets dont le statut a changé.</td></tr><tr><td>right-check-change</td><td>Se déclenche quand l&#39;utilisateur change le statut d&#39;un objet dans la liste de droite.</td><td>Liste des objets actuellement sélectionnées, Liste des objets dont le statut a changé.</td></tr></tbody></table>", 10);

function transfervue_type_template_id_437018f6_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", transfervue_type_template_id_437018f6_hoisted_1, [transfervue_type_template_id_437018f6_hoisted_2, transfervue_type_template_id_437018f6_hoisted_3, transfervue_type_template_id_437018f6_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [transfervue_type_template_id_437018f6_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [transfervue_type_template_id_437018f6_hoisted_5];
    }),
    _: 1
  }), transfervue_type_template_id_437018f6_hoisted_7, transfervue_type_template_id_437018f6_hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/transfer.md?vue&type=template&id=437018f6

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/transfer.md?vue&type=script&lang=ts


/* harmony default export */ var transfervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];

            for (var i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: "Option " + i,
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          "filter-method": _ctx.filterMethod,
          "filter-placeholder": "State Abbreviations",
          data: _ctx.data
        }, null, 8, ["modelValue", "filter-method", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];
            var states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
            var initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
            states.forEach(function (city, index) {
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
            filterMethod: function filterMethod(query, item) {
              return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", {
        style: {
          "text-align": "center",
          "margin": "0 0 20px"
        }
      }, "Utilise render-content", -1);

      var _hoisted_2 = {
        style: {
          "text-align": "center"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Opération");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Opération");

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", {
        style: {
          "text-align": "center",
          "margin": "50px 0 20px"
        }
      }, "Utilise des slots", -1);

      var _hoisted_6 = {
        style: {
          "text-align": "center"
        }
      };

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Opération");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Opération");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.leftValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.leftValue = $event;
          }),
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
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
          data: _ctx.data,
          onChange: _ctx.handleChange
        }, {
          "left-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          "right-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "render-content", "data", "onChange"]), _hoisted_5, _createVNode("div", _hoisted_6, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.rightValue,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.rightValue = $event;
          }),
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          filterable: "",
          "left-default-checked": [2, 3],
          "right-default-checked": [1],
          titles: ['Source', 'Target'],
          "button-texts": ['To left', 'To right'],
          format: {
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          },
          data: _ctx.data,
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(function (_ref) {
            var option = _ref.option;
            return [_createVNode("span", null, _toDisplayString(option.key) + " - " + _toDisplayString(option.label), 1)];
          }),
          "left-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            })];
          }),
          "right-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "data", "onChange"])])])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];

            for (var i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: "Option " + i,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            leftValue: [1],
            rightValue: [1],
            renderFunc: function renderFunc(h, option) {
              return h("span", null, option.key, " - ", option.label);
            }
          };
        },
        methods: {
          handleChange: function handleChange(value, direction, movedKeys) {
            console.log(value, direction, movedKeys);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          props: {
            key: 'value',
            label: 'desc'
          },
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];

            for (var i = 1; i <= 15; i++) {
              data.push({
                value: i,
                desc: "Option " + i,
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/transfer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/transfer.md



transfervue_type_script_lang_ts.render = transfervue_type_template_id_437018f6_render

/* harmony default export */ var transfer = __webpack_exports__["default"] = (transfervue_type_script_lang_ts);

/***/ })

}]);