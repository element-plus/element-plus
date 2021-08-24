(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[247],{

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/layout.md?vue&type=template&id=0d7a3760

var layoutvue_type_template_id_0d7a3760_hoisted_1 = {
  class: "content element-doc"
};

var layoutvue_type_template_id_0d7a3760_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("レイアウト ");

var layoutvue_type_template_id_0d7a3760_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "24カラムを基本レイアウトで、簡単、素早く作れます。", -1);

var layoutvue_type_template_id_0d7a3760_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("The component uses flex layout by default, no need to set "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type=\"flex\""), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" manually.")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Please note that the parent container should avoid using "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inline"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" related styles, which will cause the component to not fill up its width.")])], -1);

var layoutvue_type_template_id_0d7a3760_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ベーシックレイアウト ");

var layoutvue_type_template_id_0d7a3760_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "カラムを用いて、ベーシックグリッドレイアウトを作ります。", -1);

var layoutvue_type_template_id_0d7a3760_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "col"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を使えば、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "span"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を使って簡単にレイアウトを操作することができます。")])], -1);

var layoutvue_type_template_id_0d7a3760_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row>\n  <el-col :span=\"24\"><div class=\"grid-content bg-purple-dark\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"12\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"12\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var layoutvue_type_template_id_0d7a3760_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("カラム間隔 ");

var layoutvue_type_template_id_0d7a3760_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "カラム間隔もサポートされてます。", -1);

var layoutvue_type_template_id_0d7a3760_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("行にはカラム間の間隔を指定するための "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "gutter"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性があり、デフォルト値は0です。")])], -1);

var layoutvue_type_template_id_0d7a3760_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"20\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var layoutvue_type_template_id_0d7a3760_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ハイブリッドレイアウト ");

var layoutvue_type_template_id_0d7a3760_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "基本の1/24カラムを組み合わせて、より複雑なハイブリッドレイアウトを形成できます。", -1);

var layoutvue_type_template_id_0d7a3760_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"20\">\n  <el-col :span=\"16\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"16\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var layoutvue_type_template_id_0d7a3760_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("カラムオフセット ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "オフセットを指定することができます。", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Colの"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性の値を設定することで、カラムのオフセット数を指定することができます。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"20\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"6\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"12\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("配置 ");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Default use the flex layout to make flexible alignment of columns.", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("You can define the layout of child elements by setting "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "justify"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute with start, center, end, space-between or space-around.")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"row-bg\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"center\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"end\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"space-between\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"space-around\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("レスポンシブレイアウト ");

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Bootstrapのレスポンシブデザインを例にとると、xs, sm, md, lg, xlの5つのブレイクポイントがプリセットされています。", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"10\">\n  <el-col :xs=\"8\" :sm=\"6\" :md=\"4\" :lg=\"3\" :xl=\"1\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :xs=\"4\" :sm=\"6\" :md=\"8\" :lg=\"9\" :xl=\"11\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :xs=\"4\" :sm=\"6\" :md=\"8\" :lg=\"9\" :xl=\"11\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :xs=\"8\" :sm=\"6\" :md=\"4\" :lg=\"3\" :xl=\"1\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n\n<style>\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n</style>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("要素を隠すためのユーティリティクラス ");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>さらに、Element Plus は、特定の条件下で要素を隠すための一連のクラスを提供します。これらのクラスは、任意の DOM 要素やカスタムコンポーネントに追加することができます。これらのクラスを使用するには、以下のCSSファイルをインポートする必要があります。</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/lib/theme-chalk/display.css&#39;</span>;\n</code><span class=\"lang-mark\">js</span></pre><p>クラス:</p><ul><li><code>hidden-xs-only</code> - xs ビューポートのとき、非表示にする</li><li><code>hidden-sm-only</code> - sm ビューポートのとき、非表示にする</li><li><code>hidden-sm-and-down</code> - sm ビューポート以下のとき、非表示にする</li><li><code>hidden-sm-and-up</code> - sm ビューポート以上のとき、非表示にする</li><li><code>hidden-md-only</code> - md ビューポートのとき、非表示にする</li><li><code>hidden-md-and-down</code> - md ビューポート以下のとき、非表示にする</li><li><code>hidden-md-and-up</code> - md ビューポート以上のとき、非表示にする</li><li><code>hidden-lg-only</code> - lg ビューポートのとき、非表示にする</li><li><code>hidden-lg-and-down</code> - lg ビューポート以下のとき、非表示にする</li><li><code>hidden-lg-and-up</code> - lg ビューポート以上のとき、非表示にする</li><li><code>hidden-xl-only</code> - xl ビューポートのとき、非表示にする</li></ul>", 4);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("行属性 ");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>gutter</td><td>グリッド間隔</td><td>number</td><td>—</td><td>0</td></tr><tr><td>justify</td><td>フレックスレイアウトの水平配置</td><td>string</td><td>start/end/center/space-around/space-between</td><td>start</td></tr><tr><td>align</td><td>フレックスレイアウトの垂直配置</td><td>string</td><td>top/middle/bottom</td><td>top</td></tr><tr><td>tag</td><td>カスタムエレメントタグ</td><td>string</td><td>*</td><td>div</td></tr></tbody></table>", 1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("列属性 ");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>span</td><td>グリッドスパンの列数</td><td>number</td><td>—</td><td>24</td></tr><tr><td>offset</td><td>左辺のグリッドのスペースの数</td><td>number</td><td>—</td><td>0</td></tr><tr><td>push</td><td>グリッドが右に移動する列数</td><td>number</td><td>—</td><td>0</td></tr><tr><td>pull</td><td>グリッドが左に移動する列数</td><td>number</td><td>—</td><td>0</td></tr><tr><td>xs</td><td><code>&lt;768px</code> レスポンシブ列または列propsオブジェクト</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>sm</td><td><code>≥768px</code> レスポンシブ列または列propsオブジェクト</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>md</td><td><code>≥992px</code> レスポンシブ列または列propsオブジェクト</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>lg</td><td><code>≥1200px</code> レスポンシブ列または列propsオブジェクト</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>xl</td><td><code>≥1920px</code> レスポンシブ列または列propsオブジェクト</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>tag</td><td>カスタムエレメントタグ</td><td>string</td><td>*</td><td>div</td></tr></tbody></table>", 1);

function layoutvue_type_template_id_0d7a3760_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", layoutvue_type_template_id_0d7a3760_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "reiauto",
    content: "レイアウト",
    href: "#reiauto",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_0d7a3760_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#reiauto"
      })];
    }),
    _: 1
  }), layoutvue_type_template_id_0d7a3760_hoisted_3, layoutvue_type_template_id_0d7a3760_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "besitukureiauto",
    content: "ベーシックレイアウト",
    href: "#besitukureiauto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_0d7a3760_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#besitukureiauto"
      })];
    }),
    _: 1
  }), layoutvue_type_template_id_0d7a3760_hoisted_6, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_0d7a3760_hoisted_8];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_0d7a3760_hoisted_7];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "karamu-jian-ge",
    content: "カラム間隔",
    href: "#karamu-jian-ge",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_0d7a3760_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#karamu-jian-ge"
      })];
    }),
    _: 1
  }), layoutvue_type_template_id_0d7a3760_hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_0d7a3760_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_0d7a3760_hoisted_11];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "haiburitudoreiauto",
    content: "ハイブリッドレイアウト",
    href: "#haiburitudoreiauto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_0d7a3760_hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#haiburitudoreiauto"
      })];
    }),
    _: 1
  }), layoutvue_type_template_id_0d7a3760_hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_0d7a3760_hoisted_15];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "karamuohusetuto",
    content: "カラムオフセット",
    href: "#karamuohusetuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_0d7a3760_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#karamuohusetuto"
      })];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "pei-zhi",
    content: "配置",
    href: "#pei-zhi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#pei-zhi"
      })];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "resuponsibureiauto",
    content: "レスポンシブレイアウト",
    href: "#resuponsibureiauto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#resuponsibureiauto"
      })];
    }),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "yao-suwo-yinsutamenoyuteiriteikurasu",
    content: "要素を隠すためのユーティリティクラス",
    href: "#yao-suwo-yinsutamenoyuteiriteikurasu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#yao-suwo-yinsutamenoyuteiriteikurasu"
      })];
    }),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "xing-shu-xing",
    content: "行属性",
    href: "#xing-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#xing-shu-xing"
      })];
    }),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "lie-shu-xing",
    content: "列属性",
    href: "#lie-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#lie-shu-xing"
      })];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/layout.md?vue&type=template&id=0d7a3760

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/layout.md?vue&type=script&lang=ts


/* harmony default export */ var layoutvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-dark"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 24
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_12];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_16];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 16
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 16
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "row-bg"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "space-between"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_12];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "space-around"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 10
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              xs: 8,
              sm: 6,
              md: 4,
              lg: 3,
              xl: 1
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              xs: 4,
              sm: 6,
              md: 8,
              lg: 9,
              xl: 11
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              xs: 4,
              sm: 6,
              md: 8,
              lg: 9,
              xl: 11
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              xs: 8,
              sm: 6,
              md: 4,
              lg: 3,
              xl: 1
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/layout.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/layout.md



layoutvue_type_script_lang_ts.render = layoutvue_type_template_id_0d7a3760_render

/* harmony default export */ var layout = __webpack_exports__["default"] = (layoutvue_type_script_lang_ts);

/***/ })

}]);