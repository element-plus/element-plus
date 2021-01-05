(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[146],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/dropdown.md?vue&type=template&id=161a2654

var dropdownvue_type_template_id_161a2654_hoisted_1 = {
  class: "content element-doc"
};

var dropdownvue_type_template_id_161a2654_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "dropdown"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dropdown"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Dropdown")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "リンクとアクションのリストを表示するためのトグルメニュー", -1);

var dropdownvue_type_template_id_161a2654_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "dropdownメニューの上にカーソルを置くと、より多くのアクションが展開されます。", -1);

var dropdownvue_type_template_id_161a2654_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("トリガ要素はデフォルトの "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" でレンダリングされ、dropdown部分は "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dropdown"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" という名前の "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" でレンダリングされます。デフォルトでは、トリガーとなる要素にカーソルを合わせたときにdropdownリストが表示され、クリックする必要はありません。")])], -1);

var dropdownvue_type_template_id_161a2654_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown>\n  <span class=\"el-dropdown-link\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>  \n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "toriga-yao-su"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#toriga-yao-su"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" トリガー要素")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "dropdownリストを起動するには、ボタンを使用します。", -1);

var dropdownvue_type_template_id_161a2654_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("トリガ要素をボタングループに分割するには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使います。項目3と項目4の間に区切り線を挿入したい場合は、項目4にクラス "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "divider"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を追加します。")])], -1);

var dropdownvue_type_template_id_161a2654_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown>\n  <el-button type=\"primary\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </el-button>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n      <el-dropdown-item>Action 5</el-dropdown-item>\n    </el-dropdown-menu>  \n  </template>\n</el-dropdown>\n<el-dropdown split-button type=\"primary\" @click=\"handleClick\">\n  Dropdown List\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n      <el-dropdown-item>Action 5</el-dropdown-item>\n    </el-dropdown-menu>  \n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown {\n    vertical-align: top;\n  }\n  .el-dropdown + .el-dropdown {\n    margin-left: 15px;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        alert('button click');\n      }\n    }\n  }\n</script>\n")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "toriganokake-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#toriganokake-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" トリガーのかけ方")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "トリガー要素をクリックするか、その上にカーソルを置きます。", -1);

var dropdownvue_type_template_id_161a2654_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("アトリビュート "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用いる。デフォルトでは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" である。")])], -1);

var dropdownvue_type_template_id_161a2654_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"block-col-2\">\n  <el-col :span=\"12\">\n    <span class=\"demonstration\">hover to trigger</span>\n    <el-dropdown>\n      <span class=\"el-dropdown-link\">\n        Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">Action 2</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">Action 3</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">Action 5</el-dropdown-item>        \n        </el-dropdown-menu>\n      </template>  \n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"12\">\n    <span class=\"demonstration\">click to trigger</span>\n    <el-dropdown trigger=\"click\">\n      <span class=\"el-dropdown-link\">\n        Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">Action 2</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">Action 3</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">Action 5</el-dropdown-item>        \n        </el-dropdown-menu>\n      </template>  \n    </el-dropdown>\n  </el-col>\n</el-row>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n  .demonstration {\n    display: block;\n    color: #8492a6;\n    font-size: 14px;\n    margin-bottom: 20px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "meniyuwo-fei-biao-shinisuru-dong-zuo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#meniyuwo-fei-biao-shinisuru-dong-zuo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" メニューを非表示にする動作")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("クリックしたときにメニューが閉じるかどうかを定義するには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用いる。")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "デフォルトではメニュー項目をクリックするとメニューが閉じますが、hide-on-clickをfalseにすることでオフにできます。")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown :hide-on-click=\"false\">\n  <span class=\"el-dropdown-link\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item divided>Action 5</el-dropdown-item>                \n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_161a2654_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "komandoibento"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#komandoibento"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" コマンドイベント")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "各dropdown項目をクリックすると、各項目に割り当てられたパラメータを持つイベントが発生します。", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown @command=\"handleCommand\">\n  <span class=\"el-dropdown-link\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item command=\"a\">Action 1</el-dropdown-item>\n      <el-dropdown-item command=\"b\">Action 2</el-dropdown-item>\n      <el-dropdown-item command=\"c\">Action 3</el-dropdown-item>\n      <el-dropdown-item command=\"d\" disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item command=\"e\" divided>Action 5</el-dropdown-item>                \n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleCommand(command) {\n        this.$message('click on item ' + command);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "saizu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#saizu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" サイズ")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "デフォルトのサイズの他に、dropdownコンポーネントには3つの追加サイズが用意されており、異なるシナリオから選択することができます。", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("追加のサイズを "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" で設定するには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を使います。")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown split-button type=\"primary\">\n  Default\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>               \n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"medium\" split-button type=\"primary\">\n  Medium\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>               \n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"small\" split-button type=\"primary\">\n  Small\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>               \n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"mini\" split-button type=\"primary\">\n  Mini\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>               \n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"dropdown-shu-xing\"><a class=\"header-anchor\" href=\"#dropdown-shu-xing\">¶</a> dropdown属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td><code>split-button</code> が <code>true</code>のとき、メニューボタンのタイプは <code>Button</code> コンポーネントを参照する。</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>メニューのサイズ(分割ボタンでも動作)</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>split-button</td><td>ボタングループの表示の有無</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>ポップメニューの配置</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end</td><td>bottom-end</td></tr><tr><td>trigger</td><td>トリガーのきっかけ</td><td>string</td><td>hover/click</td><td>hover</td></tr><tr><td>hide-on-click</td><td>メニューアイテムをクリックした後にメニューを非表示にするかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-timeout</td><td>dropdownを表示するまでの遅延時間 (トリガーが <code>hover</code> の場合のみ動作)</td><td>number</td><td>—</td><td>250</td></tr><tr><td>hide-timeout</td><td>dropdownを非表示にするまでの遅延時間 (トリガーが <code>hover</code> の場合のみ動作)</td><td>number</td><td>—</td><td>150</td></tr><tr><td>tabindex</td><td>dropdownの<a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a></td><td>number</td><td>—</td><td>0</td></tr></tbody></table><h3 id=\"dropdownsurotuto\"><a class=\"header-anchor\" href=\"#dropdownsurotuto\">¶</a> dropdownスロット</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>dropdownの内容 Notice: トリガーリスナーをアタッチするには、有効な html dom 要素 (例: <code>&lt;span&gt;, &lt;button&gt; etc.</code>) または <code>el-component</code> でなければなりません。</td></tr><tr><td>dropdown</td><td>dropdownメニューの内容、通常は <code>&lt;el-dropdown-menu&gt;</code> 要素</td></tr></tbody></table><h3 id=\"dropdownibento\"><a class=\"header-anchor\" href=\"#dropdownibento\">¶</a> dropdownイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td><code>split-button</code> が <code>true</code> の場合、左ボタンがクリックされたときにトリガされます。</td><td>—</td></tr><tr><td>command</td><td>dropdown項目がクリックされたときにトリガーする</td><td>the command dispatched from the dropdown item</td></tr><tr><td>visible-change</td><td>dropdownが表示/非表示になったときにトリガされます。</td><td>true when it appears, and false otherwise</td></tr></tbody></table><h3 id=\"dropdownmeniyu-xiang-muno-shu-xing\"><a class=\"header-anchor\" href=\"#dropdownmeniyu-xiang-muno-shu-xing\">¶</a> dropdownメニュー項目の属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>command</td><td>dropdownの <code>command</code> コールバックにディスパッチするコマンドを指定します。</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>項目が無効化されているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divided</td><td>仕切り表示の有無</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>アイコンクラス名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 8);

function dropdownvue_type_template_id_161a2654_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", dropdownvue_type_template_id_161a2654_hoisted_1, [dropdownvue_type_template_id_161a2654_hoisted_2, dropdownvue_type_template_id_161a2654_hoisted_3, dropdownvue_type_template_id_161a2654_hoisted_4, dropdownvue_type_template_id_161a2654_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_161a2654_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_161a2654_hoisted_6];
    }),
    _: 1
  }), dropdownvue_type_template_id_161a2654_hoisted_8, dropdownvue_type_template_id_161a2654_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_161a2654_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_161a2654_hoisted_10];
    }),
    _: 1
  }), dropdownvue_type_template_id_161a2654_hoisted_12, dropdownvue_type_template_id_161a2654_hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_161a2654_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_161a2654_hoisted_14];
    }),
    _: 1
  }), dropdownvue_type_template_id_161a2654_hoisted_16, dropdownvue_type_template_id_161a2654_hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_161a2654_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_161a2654_hoisted_18];
    }),
    _: 1
  }), dropdownvue_type_template_id_161a2654_hoisted_20, _hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27]);
}
// CONCATENATED MODULE: ./website/docs/jp/dropdown.md?vue&type=template&id=161a2654

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/dropdown.md?vue&type=script&lang=ts


/* harmony default export */ var dropdownvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Dropdown List");

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 5");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode(" Dropdown List ");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary",
          onClick: _ctx.handleClick
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_11];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_13];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_8];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          handleClick: function handleClick() {
            alert('button click');
          }
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
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "hover to trigger", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 5");

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "click to trigger", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "block-col-2"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_dropdown, null, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_3];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_4];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_5];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_6];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _createVNode(_component_el_dropdown, {
                  trigger: "click"
                }, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_10];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_11];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_12];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_13];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_14];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                })];
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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          "hide-on-click": false
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          onCommand: _ctx.handleCommand
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, {
                  command: "a"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "b"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "c"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "d",
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "e",
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onCommand"])]);
      }

      var democomponentExport = {
        methods: {
          handleCommand: function handleCommand(command) {
            this.$message('click on item ' + command);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Default ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode(" Medium ");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode(" Small ");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode(" Mini ");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Action 4");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "medium",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_8];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "small",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_13];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_14];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_11];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "mini",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_19];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_20];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_16];
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
// CONCATENATED MODULE: ./website/docs/jp/dropdown.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/dropdown.md



dropdownvue_type_script_lang_ts.render = dropdownvue_type_template_id_161a2654_render

/* harmony default export */ var dropdown = __webpack_exports__["default"] = (dropdownvue_type_script_lang_ts);

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/dropdown.md?vue&type=template&id=6eb914f0

var dropdownvue_type_template_id_6eb914f0_hoisted_1 = {
  class: "content element-doc"
};

var dropdownvue_type_template_id_6eb914f0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "dropdown"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dropdown"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Dropdown")], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Menu déroulant pour afficher des listes de liens et d'actions possibles.", -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Usage")], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Passez sur le menu avec la souris pour dérouler son contenu.", -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("L'élément déclencheur est généré par le "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" par défaut, et le menu déroulant est généré par le "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" appelé "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dropdown"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Par défaut le menu apparaît simplement en passant la souris sur l'élément déclencheur, sans avoir à cliquer.")])], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown>\n  <span class=\"el-dropdown-link\">\n    Menu déroulant<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n")], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "element-declencheur"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#element-declencheur"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Élément déclencheur")], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Utilisez le bouton pour ouvrir le menu déroulant.", -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour séparer le déclencheur du reste du bouton, ce dernier devenant la partie gauche et le déclencheur la partie droite.")])], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown>\n  <el-button type=\"primary\">\n    Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </el-button>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n      <el-dropdown-item>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n<el-dropdown split-button type=\"primary\" @click=\"handleClick\">\n  Liste déroulante\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n      <el-dropdown-item>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown {\n    vertical-align: top;\n  }\n  .el-dropdown + .el-dropdown {\n    margin-left: 15px;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        alert('button click');\n      }\n    }\n  }\n</script>\n")], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "declencheur"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#declencheur"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Déclencheur")], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez choisir de déclencher le menu au moment du clic, ou en passant la souris sur l'élément.", -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Par défaut, il est à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"block-col-2\">\n  <el-col :span=\"12\">\n    <span class=\"demonstration\">En passant la souris</span>\n    <el-dropdown>\n      <span class=\"el-dropdown-link\">\n        Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">Action 2</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">Action 3</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">Action 5</el-dropdown-item>\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"12\">\n    <span class=\"demonstration\">En cliquant</span>\n    <el-dropdown trigger=\"click\">\n      <span class=\"el-dropdown-link\">\n        Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">Action 2</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">Action 3</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">Action 5</el-dropdown-item>\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n</el-row>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n  .demonstration {\n    display: block;\n    color: #8492a6;\n    font-size: 14px;\n    margin-bottom: 20px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "fermer-le-menu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fermer-le-menu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Fermer le menu")], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour déterminer si le menu se ferme après avoir cliqué sur un élément de la liste.")], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Par défaut le menu se ferme après avoir cliqué dans la liste. Vous pouvez changer cette option en mettant "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown :hide-on-click=\"false\">\n  <span class=\"el-dropdown-link\">\n    Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_6eb914f0_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "evenement-command"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#evenement-command"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Évènement command")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Cliquer sur un élément du dropdown déclenche un évènement \"command\". Le paramètre de cet évènement peut être assigné à chaque élément de la liste.", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown @command=\"handleCommand\">\n  <span class=\"el-dropdown-link\">\n    Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item command=\"a\">Action 1</el-dropdown-item>\n      <el-dropdown-item command=\"b\">Action 2</el-dropdown-item>\n      <el-dropdown-item command=\"c\">Action 3</el-dropdown-item>\n      <el-dropdown-item command=\"d\" disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item command=\"e\" divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleCommand(command) {\n        this.$message('click on item ' + command);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tailles"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tailles"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tailles")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "En plus de la taille par défaut, le composant Dropdown propose trois autres tailles différentes.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour déterminer une autre taille parmi "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ou "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown split-button type=\"primary\">\n  Défaut\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"medium\" split-button type=\"primary\">\n  Medium\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"small\" split-button type=\"primary\">\n  Small\n  <template #dropdown>\n    <el-dropdown-menu>\n    <el-dropdown-item>Action 1</el-dropdown-item>\n    <el-dropdown-item>Action 2</el-dropdown-item>\n    <el-dropdown-item>Action 3</el-dropdown-item>\n    <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"mini\" split-button type=\"primary\">\n  Mini\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs-du-dropdown\"><a class=\"header-anchor\" href=\"#attributs-du-dropdown\">¶</a> Attributs du Dropdown</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>type</td><td>Type du bouton, se référer au composant <code>Button</code>. Ne marche que si <code>split-button</code> est <code>true</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>Taille du menu, marche aussi avec <code>split button</code>.</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>split-button</td><td>Si le bouton est séparé en deux.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>Emplacement du menu déroulant</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end</td><td>bottom-end</td></tr><tr><td>trigger</td><td>Comment déclencher l&#39;ouverture du menu.</td><td>string</td><td>hover/click</td><td>hover</td></tr><tr><td>hide-on-click</td><td>Si le menu doit disparaître après avoir cliqué sur un élément.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-timeout</td><td>Délai avant d&#39;afficher le menu (ne marche que si <code>trigger</code> est <code>hover</code>)</td><td>number</td><td>—</td><td>250</td></tr><tr><td>hide-timeout</td><td>Délai avant de cacher le menu (ne marche que si <code>trigger</code> est <code>hover</code>)</td><td>number</td><td>—</td><td>150</td></tr><tr><td>tabindex</td><td><a href=\"https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex\">tabindex</a> de Dropdown</td><td>number</td><td>—</td><td>0</td></tr></tbody></table><h3 id=\"dropdown-slots\"><a class=\"header-anchor\" href=\"#dropdown-slots\">¶</a> Dropdown Slots</h3><table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Contenu du Dropdown. Note: doit être un élément du DOM valide (ex. <code>&lt;span&gt;, &lt;button&gt; etc.</code>) ou <code>el-component</code>, pour y attacher un évènement.</td></tr><tr><td>dropdown</td><td>Contenu du menu du Dropdown, en général un élément <code>&lt;el-dropdown-menu&gt;</code>.</td></tr></tbody></table><h3 id=\"evenements-du-dropdown\"><a class=\"header-anchor\" href=\"#evenements-du-dropdown\">¶</a> Évènements du Dropdown</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>click</td><td>Si <code>split-button</code> est <code>true</code>, se déclenche quand le bouton de gauche est cliqué.</td><td>—</td></tr><tr><td>command</td><td>Se déclenche quand un élément de la liste est cliqué.</td><td>L&#39;attribut command de l&#39;élément de la liste.</td></tr><tr><td>visible-change</td><td>Se déclenche quand le menu s&#39;affiche ou disparaît.</td><td><code>true</code> quand il apparaît, <code>false</code> sinon.</td></tr></tbody></table><h3 id=\"attributs-des-elements-du-menu\"><a class=\"header-anchor\" href=\"#attributs-des-elements-du-menu\">¶</a> Attributs des éléments du menu</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>command</td><td>Le contenu à envoyer au callback de l&#39;évènement <code>command</code> du Dropdown.</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si l&#39;élément est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divided</td><td>Si un diviseur doit être affiché.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>Classe de l&#39;icône.</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 8);

function dropdownvue_type_template_id_6eb914f0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", dropdownvue_type_template_id_6eb914f0_hoisted_1, [dropdownvue_type_template_id_6eb914f0_hoisted_2, dropdownvue_type_template_id_6eb914f0_hoisted_3, dropdownvue_type_template_id_6eb914f0_hoisted_4, dropdownvue_type_template_id_6eb914f0_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_6eb914f0_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_6eb914f0_hoisted_6];
    }),
    _: 1
  }), dropdownvue_type_template_id_6eb914f0_hoisted_8, dropdownvue_type_template_id_6eb914f0_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_6eb914f0_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_6eb914f0_hoisted_10];
    }),
    _: 1
  }), dropdownvue_type_template_id_6eb914f0_hoisted_12, dropdownvue_type_template_id_6eb914f0_hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_6eb914f0_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_6eb914f0_hoisted_14];
    }),
    _: 1
  }), dropdownvue_type_template_id_6eb914f0_hoisted_16, dropdownvue_type_template_id_6eb914f0_hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_6eb914f0_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_6eb914f0_hoisted_18];
    }),
    _: 1
  }), dropdownvue_type_template_id_6eb914f0_hoisted_20, _hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/dropdown.md?vue&type=template&id=6eb914f0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/dropdown.md?vue&type=script&lang=ts


/* harmony default export */ var dropdownvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Menu déroulant"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Liste déroulante");

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 5");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode(" Liste déroulante ");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary",
          onClick: _ctx.handleClick
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_11];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_13];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_8];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          handleClick: function handleClick() {
            alert('button click');
          }
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
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "En passant la souris", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Liste déroulante"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 5");

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "En cliquant", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Liste déroulante"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "block-col-2"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_dropdown, null, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_3];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_4];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_5];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_6];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _createVNode(_component_el_dropdown, {
                  trigger: "click"
                }, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_10];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_11];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_12];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_13];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_14];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                })];
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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Liste déroulante"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          "hide-on-click": false
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Liste déroulante"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          onCommand: _ctx.handleCommand
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, {
                  command: "a"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "b"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "c"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "d",
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "e",
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onCommand"])]);
      }

      var democomponentExport = {
        methods: {
          handleCommand: function handleCommand(command) {
            this.$message('click on item ' + command);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Défaut ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode(" Medium ");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode(" Small ");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode(" Mini ");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Action 4");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "medium",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_8];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "small",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_13];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_14];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_11];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "mini",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_19];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_20];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_16];
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
// CONCATENATED MODULE: ./website/docs/fr-FR/dropdown.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/dropdown.md



dropdownvue_type_script_lang_ts.render = dropdownvue_type_template_id_6eb914f0_render

/* harmony default export */ var dropdown = __webpack_exports__["default"] = (dropdownvue_type_script_lang_ts);

/***/ })

}]);