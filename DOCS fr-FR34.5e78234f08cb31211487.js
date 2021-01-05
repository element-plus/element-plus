(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[159],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/menu.md?vue&type=template&id=a9b9a13c

var menuvue_type_template_id_a9b9a13c_hoisted_1 = {
  class: "content element-doc"
};

var menuvue_type_template_id_a9b9a13c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "nabigesiyonmeniyu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#nabigesiyonmeniyu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ナビゲーションメニュー")], -1);

var menuvue_type_template_id_a9b9a13c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ウェブサイトのナビゲーションを提供するメニュー。", -1);

var menuvue_type_template_id_a9b9a13c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "totupuba"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#totupuba"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" トップバー")], -1);

var menuvue_type_template_id_a9b9a13c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "トップバーのナビゲーションメニューは、様々なシーンで使用することができます。", -1);

var menuvue_type_template_id_a9b9a13c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("デフォルトではメニューは縦長ですが、モードプロップを'horizontal'に設定することで横長にすることができます。また、サブメニューコンポーネントを使って第2階層のメニューを作成することもできます。メニューには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "background-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "text-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active-text-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" が用意されており、色をカスタマイズすることができます。")])], -1);

var menuvue_type_template_id_a9b9a13c_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-menu :default-active=\"activeIndex\" class=\"el-menu-demo\" mode=\"horizontal\" @select=\"handleSelect\">\n  <el-menu-item index=\"1\">Processing Center</el-menu-item>\n  <el-submenu index=\"2\">\n    <template #title>Workspace</template>\n    <el-menu-item index=\"2-1\">item one</el-menu-item>\n    <el-menu-item index=\"2-2\">item two</el-menu-item>\n    <el-menu-item index=\"2-3\">item three</el-menu-item>\n    <el-submenu index=\"2-4\">\n      <template #title>item four</template>\n      <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">Orders</a></el-menu-item>\n</el-menu>\n<div class=\"line\"></div>\n<el-menu\n  :default-active=\"activeIndex2\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n  background-color=\"#545c64\"\n  text-color=\"#fff\"\n  active-text-color=\"#ffd04b\">\n  <el-menu-item index=\"1\">Processing Center</el-menu-item>\n  <el-submenu index=\"2\">\n    <template #title>Workspace</template>\n    <el-menu-item index=\"2-1\">item one</el-menu-item>\n    <el-menu-item index=\"2-2\">item two</el-menu-item>\n    <el-menu-item index=\"2-3\">item three</el-menu-item>\n    <el-submenu index=\"2-4\">\n      <template #title>item four</template>\n      <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">Orders</a></el-menu-item>\n</el-menu>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: '1',\n        activeIndex2: '1'\n      };\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_a9b9a13c_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "saidoba"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#saidoba"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" サイドバー")], -1);

var menuvue_type_template_id_a9b9a13c_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vサブメニューのある縦型ナビメニュー。", -1);

var menuvue_type_template_id_a9b9a13c_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "el-menu-item-groupコンポーネントを使ってメニューグループを作成することができ、グループの名前はタイトルプロップか名前付きスロットで決まります。")], -1);

var menuvue_type_template_id_a9b9a13c_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"tac\">\n  <el-col :span=\"12\">\n    <h5>Default colors</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\">\n      <el-submenu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title=\"Group One\">\n          <el-menu-item index=\"1-1\">item one</el-menu-item>\n          <el-menu-item index=\"1-2\">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Two\">\n          <el-menu-item index=\"1-3\">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>item four</template>\n          <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n  <el-col :span=\"12\">\n    <h5>Custom colors</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n      background-color=\"#545c64\"\n      text-color=\"#fff\"\n      active-text-color=\"#ffd04b\">\n      <el-submenu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title=\"Group One\">\n          <el-menu-item index=\"1-1\">item one</el-menu-item>\n          <el-menu-item index=\"1-2\">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Two\">\n          <el-menu-item index=\"1-3\">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>item four</template>\n          <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_a9b9a13c_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "korapusu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#korapusu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" コラプス")], -1);

var menuvue_type_template_id_a9b9a13c_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "縦型のナビメニューを潰すことも出来ます。", -1);

var menuvue_type_template_id_a9b9a13c_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-radio-group v-model=\"isCollapse\" style=\"margin-bottom: 20px;\">\n  <el-radio-button :label=\"false\">expand</el-radio-button>\n  <el-radio-button :label=\"true\">collapse</el-radio-button>\n</el-radio-group>\n<el-menu default-active=\"2\" class=\"el-menu-vertical-demo\" @open=\"handleOpen\" @close=\"handleClose\" :collapse=\"isCollapse\">\n  <el-submenu index=\"1\">\n    <template #title>\n      <i class=\"el-icon-location\"></i>\n      <span>Navigator One</span>\n    </template>\n    <el-menu-item-group>\n      <template #title><span>Group One</span></template>\n      <el-menu-item index=\"1-1\">item one</el-menu-item>\n      <el-menu-item index=\"1-2\">item two</el-menu-item>\n    </el-menu-item-group>\n    <el-menu-item-group title=\"Group Two\">\n      <el-menu-item index=\"1-3\">item three</el-menu-item>\n    </el-menu-item-group>\n    <el-submenu index=\"1-4\">\n      <template #title><span>item four</span></template>\n      <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"2\">\n    <i class=\"el-icon-menu\"></i>\n    <template #title>Navigator Two</template>\n  </el-menu-item>\n  <el-menu-item index=\"3\" disabled>\n    <i class=\"el-icon-document\"></i>\n    <template #title>Navigator Three</template>\n  </el-menu-item>\n  <el-menu-item index=\"4\">\n    <i class=\"el-icon-setting\"></i>\n    <template #title>Navigator Four</template>\n  </el-menu-item>\n</el-menu>\n\n<style>\n  .el-menu-vertical-demo:not(.el-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true\n      };\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_a9b9a13c_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"meniyu-shu-xing\"><a class=\"header-anchor\" href=\"#meniyu-shu-xing\">¶</a> メニュー属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>mode</td><td>メニュー表示モード</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>メニューが折りたたまれているかどうか (垂直モードでのみ利用可能)</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>メニューの背景色(16進数形式)</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>メニューのテキストカラー(16進数形式)</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>現在アクティブなメニュー項目のテキスト色 (16進数形式)</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>アクティブメニューのインデックス</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>現在アクティブなサブメニューのインデックスを含む配列</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>一つのサブメニューだけをアクティブにすることができるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>サブメニューのトリガ方法、<code>mode</code> が &#39;horizontal&#39; の時のみ動作する</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td><code>vue-router</code> モードを有効にしているかどうかを示します。true の場合、インデックスはルートアクションを有効にするための &#39;path&#39; として使われます。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>折りたたみ遷移を有効にするかどうか</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table><h3 id=\"meniyumesotudo\"><a class=\"header-anchor\" href=\"#meniyumesotudo\">¶</a> メニューメソッド</h3><table><thead><tr><th>Methods Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>open</td><td>特定のサブメニューを開く</td><td>index: index of the sub-menu to open</td></tr><tr><td>close</td><td>特定のサブメニューを閉じる</td><td>index: index of the sub-menu to close</td></tr></tbody></table><h3 id=\"meniyuibento\"><a class=\"header-anchor\" href=\"#meniyuibento\">¶</a> メニューイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>メニュー起動時コールバック機能</td><td>index: index of activated menu, indexPath: index path of activated menu</td></tr><tr><td>open</td><td>サブメニュー展開したときのコールバック関数</td><td>index: index of expanded sub-menu, indexPath: index path of expanded sub-menu</td></tr><tr><td>close</td><td>サブメニューを折りたたんだ時のコールバック関数</td><td>index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu</td></tr></tbody></table><h3 id=\"meniyuaitemuibento\"><a class=\"header-anchor\" href=\"#meniyuaitemuibento\">¶</a> メニューアイテムイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>メニュー項目がクリックされたときのコールバック関数</td><td>el: menu-item instance</td></tr></tbody></table><h3 id=\"sabumeniyu-shu-xing\"><a class=\"header-anchor\" href=\"#sabumeniyu-shu-xing\">¶</a> サブメニュー属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>ユニークアイデンティフィケーション</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>ポップアップメニューのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>サブメニュー表示前のタイムアウト</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>サブメニューを隠す前のタイムアウト</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>サブメニューが無効化されているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>ポップアップメニューをボディに追加するかどうかを指定します。メニューの位置が正しくない場合は、このpropを調整してみてください。</td><td>boolean</td><td>-</td><td>level one Submenu: true / other Submenus: false</td></tr></tbody></table><h3 id=\"meniyuaitemu-shu-xing\"><a class=\"header-anchor\" href=\"#meniyuaitemu-shu-xing\">¶</a> メニューアイテム属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>ユニークアイデンティフィケーション</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>route</td><td>Vue Routerオブジェクト</td><td>object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>無効化かどうか</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"meniyugurupu-shu-xing\"><a class=\"header-anchor\" href=\"#meniyugurupu-shu-xing\">¶</a> メニューグループ属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>グループタイトル</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 14);

function menuvue_type_template_id_a9b9a13c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", menuvue_type_template_id_a9b9a13c_hoisted_1, [menuvue_type_template_id_a9b9a13c_hoisted_2, menuvue_type_template_id_a9b9a13c_hoisted_3, menuvue_type_template_id_a9b9a13c_hoisted_4, menuvue_type_template_id_a9b9a13c_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_a9b9a13c_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_a9b9a13c_hoisted_6];
    }),
    _: 1
  }), menuvue_type_template_id_a9b9a13c_hoisted_8, menuvue_type_template_id_a9b9a13c_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_a9b9a13c_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_a9b9a13c_hoisted_10];
    }),
    _: 1
  }), menuvue_type_template_id_a9b9a13c_hoisted_12, menuvue_type_template_id_a9b9a13c_hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_a9b9a13c_hoisted_14];
    }),
    _: 1
  }), menuvue_type_template_id_a9b9a13c_hoisted_15]);
}
// CONCATENATED MODULE: ./website/docs/jp/menu.md?vue&type=template&id=a9b9a13c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/menu.md?vue&type=script&lang=ts


/* harmony default export */ var menuvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Processing Center");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Workspace");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Info");

      var _hoisted_11 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "Orders", -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "line"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Processing Center");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Workspace");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("Info");

      var _hoisted_23 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "Orders", -1);

      function render(_ctx, _cache) {
        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_2];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-3"
                    }, {
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
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["default-active", "onSelect"]), _hoisted_12, _createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex2,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect,
          "background-color": "#545c64",
          "text-color": "#fff",
          "active-text-color": "#ffd04b"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_14];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_19];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_20];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_21];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_22];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_23];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["default-active", "onSelect"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },
        methods: {
          handleSelect: function handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("h5", null, "Default colors", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "Navigator One", -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_9 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("span", null, "Navigator Two", -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("span", null, "Navigator Three", -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("span", null, "Navigator Four", -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("h5", null, "Custom colors", -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_17 = /*#__PURE__*/_createVNode("span", null, "Navigator One", -1);

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_23 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_24 = /*#__PURE__*/_createVNode("span", null, "Navigator Two", -1);

      var _hoisted_25 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_26 = /*#__PURE__*/_createVNode("span", null, "Navigator Three", -1);

      var _hoisted_27 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_28 = /*#__PURE__*/_createVNode("span", null, "Navigator Four", -1);

      function render(_ctx, _cache) {
        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "tac"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_menu, {
                  "default-active": "2",
                  class: "el-menu-vertical-demo",
                  onOpen: _ctx.handleOpen,
                  onClose: _ctx.handleClose
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_2, _hoisted_3];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, {
                          title: "Group One"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_4];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "1-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_5];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group Two"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_6];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "1-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_8];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9, _hoisted_10];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_11, _hoisted_12];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "4"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_13, _hoisted_14];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onOpen", "onClose"])];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_15, _createVNode(_component_el_menu, {
                  "default-active": "2",
                  class: "el-menu-vertical-demo",
                  onOpen: _ctx.handleOpen,
                  onClose: _ctx.handleClose,
                  "background-color": "#545c64",
                  "text-color": "#fff",
                  "active-text-color": "#ffd04b"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_16, _hoisted_17];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, {
                          title: "Group One"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_18];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "1-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_19];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group Two"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_20];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "1-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_21];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_22];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_23, _hoisted_24];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_25, _hoisted_26];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "4"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_27, _hoisted_28];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onOpen", "onClose"])];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("expand");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("collapse");

      var _hoisted_3 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", null, "Navigator One", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", null, "Group One", -1);

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", null, "item four", -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_11 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Navigator Two");

      var _hoisted_13 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Navigator Three");

      var _hoisted_15 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("Navigator Four");

      function render(_ctx, _cache) {
        var _component_el_radio_button = _resolveComponent("el-radio-button");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.isCollapse,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.isCollapse = $event;
          }),
          style: {
            "margin-bottom": "20px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: false
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: true
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_menu, {
          "default-active": "2",
          class: "el-menu-vertical-demo",
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose,
          collapse: _ctx.isCollapse
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_submenu, {
              index: "1"
            }, {
              title: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_6];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "1-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group Two"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "1-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_10];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_12];
              }),
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              title: _withCtx(function () {
                return [_hoisted_14];
              }),
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              title: _withCtx(function () {
                return [_hoisted_16];
              }),
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["onOpen", "onClose", "collapse"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            isCollapse: true
          };
        },
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/menu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/menu.md



menuvue_type_script_lang_ts.render = menuvue_type_template_id_a9b9a13c_render

/* harmony default export */ var menu = __webpack_exports__["default"] = (menuvue_type_script_lang_ts);

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/menu.md?vue&type=template&id=6ca13de1

var menuvue_type_template_id_6ca13de1_hoisted_1 = {
  class: "content element-doc"
};

var menuvue_type_template_id_6ca13de1_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "navmenu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#navmenu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" NavMenu")], -1);

var menuvue_type_template_id_6ca13de1_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Menu qui fournit un système de navigation à votre site.", -1);

var menuvue_type_template_id_6ca13de1_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "barre-du-haut"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#barre-du-haut"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Barre du haut")], -1);

var menuvue_type_template_id_6ca13de1_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "La barre du haut peut être utilisée pour différents scénarios.", -1);

var menuvue_type_template_id_6ca13de1_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Par défaut le menu est vertical, mais vous pouvez le passer en horizontal en réglant l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "mode"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" sur 'horizontal'. De plus, vous pouvez utiliser le composant submenu pour créer un second niveau niveau de menu. Le menu utilises "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "background-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "text-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active-text-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour personnaliser les couleurs.")])], -1);

var menuvue_type_template_id_6ca13de1_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-menu :default-active=\"activeIndex\" class=\"el-menu-demo\" mode=\"horizontal\" @select=\"handleSelect\">\n  <el-menu-item index=\"1\">Centre de traitement</el-menu-item>\n  <el-submenu index=\"2\">\n    <template #title>Lieu de travail</template>\n    <el-menu-item index=\"2-1\">item un</el-menu-item>\n    <el-menu-item index=\"2-2\">item deux</el-menu-item>\n    <el-menu-item index=\"2-3\">item trois</el-menu-item>\n    <el-submenu index=\"2-4\">\n      <template #title>item quatre</template>\n      <el-menu-item index=\"2-4-1\">item un</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item deux</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item trois</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"3\" disabled>Infos</el-menu-item>\n  <el-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">Commandes</a></el-menu-item>\n</el-menu>\n<div class=\"line\"></div>\n<el-menu\n  :default-active=\"activeIndex2\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n  background-color=\"#545c64\"\n  text-color=\"#fff\"\n  active-text-color=\"#ffd04b\">\n  <el-menu-item index=\"1\">Centre de traitement</el-menu-item>\n  <el-submenu index=\"2\">\n    <template #title>Lieu de travail</template>\n    <el-menu-item index=\"2-1\">item un</el-menu-item>\n    <el-menu-item index=\"2-2\">item deux</el-menu-item>\n    <el-menu-item index=\"2-3\">item trois</el-menu-item>\n    <el-submenu index=\"2-4\">\n      <template #title>item quatre</template>\n      <el-menu-item index=\"2-4-1\">item un</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item deux</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item trois</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">Commandes</a></el-menu-item>\n</el-menu>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: '1',\n        activeIndex2: '1'\n      };\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_6ca13de1_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "barre-laterale"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#barre-laterale"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Barre latérale")], -1);

var menuvue_type_template_id_6ca13de1_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Menu vertical avec sous-menus.", -1);

var menuvue_type_template_id_6ca13de1_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez utiliser le composant el-menu-item-group pour créer un groupe dans le menu dont le nom sera déterminé par celui de la propriété title ou d'un slot.")], -1);

var menuvue_type_template_id_6ca13de1_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"tac\">\n  <el-col :span=\"12\">\n    <h5>Couleurs par défaut</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\">\n      <el-submenu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigateur Un</span>\n        </template>\n        <el-menu-item-group title=\"Group Un\">\n          <el-menu-item index=\"1-1\">item un</el-menu-item>\n          <el-menu-item index=\"1-2\">item un</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Deux\">\n          <el-menu-item index=\"1-3\">item trois</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>item quatre</template>\n          <el-menu-item index=\"1-4-1\">item un</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigateur Deux</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigateur Trois</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigateur Quatre</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n  <el-col :span=\"12\">\n    <h5>Couleurs personnalisées</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n      background-color=\"#545c64\"\n      text-color=\"#fff\"\n      active-text-color=\"#ffd04b\">\n      <el-submenu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigateur Un</span>\n        </template>\n        <el-menu-item-group title=\"Group Un\">\n          <el-menu-item index=\"1-1\">item un</el-menu-item>\n          <el-menu-item index=\"1-2\">item un</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Deux\">\n          <el-menu-item index=\"1-3\">item trois</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>item quatre</template>\n          <el-menu-item index=\"1-4-1\">item un</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigateur Deux</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigateur Trois</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigateur Quatre</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_6ca13de1_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "menu-reduit"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#menu-reduit"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Menu réduit")], -1);

var menuvue_type_template_id_6ca13de1_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Le menu vertical peut être réduit.", -1);

var menuvue_type_template_id_6ca13de1_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-radio-group v-model=\"isCollapse\" style=\"margin-bottom: 20px;\">\n  <el-radio-button :label=\"false\">Agrandir</el-radio-button>\n  <el-radio-button :label=\"true\">Réduire</el-radio-button>\n</el-radio-group>\n<el-menu default-active=\"2\" class=\"el-menu-vertical-demo\" @open=\"handleOpen\" @close=\"handleClose\" :collapse=\"isCollapse\">\n  <el-submenu index=\"1\">\n    <template #title>\n      <i class=\"el-icon-location\"></i>\n      <span>Navigateur Un</span>\n    </template>\n    <el-menu-item-group>\n      <template #title><span>Group Un</span></template>\n      <el-menu-item index=\"1-1\">item un</el-menu-item>\n      <el-menu-item index=\"1-2\">item deux</el-menu-item>\n    </el-menu-item-group>\n    <el-menu-item-group title=\"Group Deux\">\n      <el-menu-item index=\"1-3\">item trois</el-menu-item>\n    </el-menu-item-group>\n    <el-submenu index=\"1-4\">\n      <template #title><span>item quatre</span></template>\n      <el-menu-item index=\"1-4-1\">item un</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"2\">\n    <i class=\"el-icon-menu\"></i>\n    <template #title>Navigator Deux</template>\n  </el-menu-item>\n  <el-menu-item index=\"3\" disabled>\n    <i class=\"el-icon-document\"></i>\n    <template #title>Navigator Trois</template>\n  </el-menu-item>\n  <el-menu-item index=\"4\">\n    <i class=\"el-icon-setting\"></i>\n    <template #title>Navigator Quatre</template>\n  </el-menu-item>\n</el-menu>\n\n<style>\n  .el-menu-vertical-demo:not(.el-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true\n      };\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_6ca13de1_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs-du-menu\"><a class=\"header-anchor\" href=\"#attributs-du-menu\">¶</a> Attributs du menu</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>mode</td><td>Mode d&#39;affichage du menu.</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>Si le menu peut être réduit, uniquement disponible en mode vertical.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>Couleur de fond du menu (format hexadécimal).</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>Couleur du texte du menu (format hexadécimal)</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>Couleur du texte de l&#39;item actif (format hexadécimal).</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>Index du menu actif.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>Liste contenant les index les sous-menus actifs.</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>Si un seul sous-menu peut être actif.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>Comment les sous-menu sont déclenchés, uniquement en mode horizontal.</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>Si le mode <code>vue-router</code> est activé. Si <code>true</code>, l&#39;index sera utilisé comme &#39;path&#39; pour activer la route.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>Si la transition de réduction doit être activée.</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table><h3 id=\"methodes-du-menu\"><a class=\"header-anchor\" href=\"#methodes-du-menu\">¶</a> Méthodes du menu</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>open</td><td>Ouvre un sous-menu spécifique.</td><td>index: index du sous-menu à ouvrir</td></tr><tr><td>close</td><td>Ferme un sous-menu spécifique.</td><td>index: index du sous-menu à fermer</td></tr></tbody></table><h3 id=\"evenements-du-menu\"><a class=\"header-anchor\" href=\"#evenements-du-menu\">¶</a> Évènements du menu</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>select</td><td>Fonction de callback pour quand le menu est activé.</td><td>index: index du menu activé, indexPath: index path du menu activé.</td></tr><tr><td>open</td><td>Fonction de callback pour quand le sous-menu s&#39;agrandit.</td><td>index: index of expanded sous-menu, indexPath: index path du sous-menu</td></tr><tr><td>close</td><td>Fonction de callback pour quand le sous-menu se réduit.</td><td>index: index of collapsed sous-menu, indexPath: index path du sous-menu</td></tr></tbody></table><h3 id=\"evenements-des-items-du-menu\"><a class=\"header-anchor\" href=\"#evenements-des-items-du-menu\">¶</a> Évènements des items du menu</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>click</td><td>Fonction de callback pour quand le menu-item est cliqué.</td><td>el: instance du menu-item.</td></tr></tbody></table><h3 id=\"attributs-du-sous-menu\"><a class=\"header-anchor\" href=\"#attributs-du-sous-menu\">¶</a> Attributs du sous-menu</h3><table><thead><tr><th>Attributs</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>index</td><td>Identificateur unique.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>Classe du menu popup.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>Délai avant de montrer un sous-menu.</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>Délai avant de cacher un sous-menu.</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>Si le sous-menu est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>S&#39;il faut ajouter un menu popup au body. Si le positionnement du body n&#39;est pas bon, vous pouvez essayer de régler cette propriété.</td><td>boolean</td><td>-</td><td>Sous-menus de niveau 1: true / autres sous-menus: false</td></tr></tbody></table><h3 id=\"attributs-des-items-du-menu\"><a class=\"header-anchor\" href=\"#attributs-des-items-du-menu\">¶</a> Attributs des items du menu</h3><table><thead><tr><th>Attributs</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>index</td><td>Identificateur unique.</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>route</td><td>Objet Vue Router.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si l&#39;item est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"attributs-des-groupes\"><a class=\"header-anchor\" href=\"#attributs-des-groupes\">¶</a> Attributs des groupes</h3><table><thead><tr><th>Attributs</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>title</td><td>Titre du groupe.</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 14);

function menuvue_type_template_id_6ca13de1_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", menuvue_type_template_id_6ca13de1_hoisted_1, [menuvue_type_template_id_6ca13de1_hoisted_2, menuvue_type_template_id_6ca13de1_hoisted_3, menuvue_type_template_id_6ca13de1_hoisted_4, menuvue_type_template_id_6ca13de1_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_6ca13de1_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_6ca13de1_hoisted_6];
    }),
    _: 1
  }), menuvue_type_template_id_6ca13de1_hoisted_8, menuvue_type_template_id_6ca13de1_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_6ca13de1_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_6ca13de1_hoisted_10];
    }),
    _: 1
  }), menuvue_type_template_id_6ca13de1_hoisted_12, menuvue_type_template_id_6ca13de1_hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_6ca13de1_hoisted_14];
    }),
    _: 1
  }), menuvue_type_template_id_6ca13de1_hoisted_15]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/menu.md?vue&type=template&id=6ca13de1

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/menu.md?vue&type=script&lang=ts


/* harmony default export */ var menuvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Centre de traitement");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Lieu de travail");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("item deux");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("item trois");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item quatre");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item deux");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("item trois");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Infos");

      var _hoisted_11 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "Commandes", -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "line"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Centre de traitement");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Lieu de travail");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("item deux");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("item trois");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("item quatre");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("item deux");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("item trois");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("Info");

      var _hoisted_23 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "Commandes", -1);

      function render(_ctx, _cache) {
        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_2];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-3"
                    }, {
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
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["default-active", "onSelect"]), _hoisted_12, _createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex2,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect,
          "background-color": "#545c64",
          "text-color": "#fff",
          "active-text-color": "#ffd04b"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_14];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_19];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_20];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_21];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_22];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_23];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["default-active", "onSelect"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },
        methods: {
          handleSelect: function handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("h5", null, "Couleurs par défaut", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "Navigateur Un", -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item trois");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item quatre");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_9 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("span", null, "Navigateur Deux", -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("span", null, "Navigateur Trois", -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("span", null, "Navigateur Quatre", -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("h5", null, "Couleurs personnalisées", -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_17 = /*#__PURE__*/_createVNode("span", null, "Navigateur Un", -1);

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("item trois");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("item quatre");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_23 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_24 = /*#__PURE__*/_createVNode("span", null, "Navigateur Deux", -1);

      var _hoisted_25 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_26 = /*#__PURE__*/_createVNode("span", null, "Navigateur Trois", -1);

      var _hoisted_27 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_28 = /*#__PURE__*/_createVNode("span", null, "Navigateur Quatre", -1);

      function render(_ctx, _cache) {
        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "tac"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_menu, {
                  "default-active": "2",
                  class: "el-menu-vertical-demo",
                  onOpen: _ctx.handleOpen,
                  onClose: _ctx.handleClose
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_2, _hoisted_3];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, {
                          title: "Group Un"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_4];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "1-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_5];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group Deux"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_6];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "1-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_8];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9, _hoisted_10];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_11, _hoisted_12];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "4"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_13, _hoisted_14];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onOpen", "onClose"])];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_15, _createVNode(_component_el_menu, {
                  "default-active": "2",
                  class: "el-menu-vertical-demo",
                  onOpen: _ctx.handleOpen,
                  onClose: _ctx.handleClose,
                  "background-color": "#545c64",
                  "text-color": "#fff",
                  "active-text-color": "#ffd04b"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_16, _hoisted_17];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, {
                          title: "Group Un"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_18];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "1-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_19];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group Deux"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_20];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "1-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_21];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_22];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_23, _hoisted_24];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_25, _hoisted_26];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "4"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_27, _hoisted_28];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onOpen", "onClose"])];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Agrandir");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Réduire");

      var _hoisted_3 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", null, "Navigateur Un", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", null, "Group Un", -1);

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item deux");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item trois");

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", null, "item quatre", -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("item un");

      var _hoisted_11 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Navigator Deux");

      var _hoisted_13 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Navigator Trois");

      var _hoisted_15 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("Navigator Quatre");

      function render(_ctx, _cache) {
        var _component_el_radio_button = _resolveComponent("el-radio-button");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.isCollapse,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.isCollapse = $event;
          }),
          style: {
            "margin-bottom": "20px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: false
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: true
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_menu, {
          "default-active": "2",
          class: "el-menu-vertical-demo",
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose,
          collapse: _ctx.isCollapse
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_submenu, {
              index: "1"
            }, {
              title: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_6];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "1-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group Deux"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "1-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_10];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_12];
              }),
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              title: _withCtx(function () {
                return [_hoisted_14];
              }),
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              title: _withCtx(function () {
                return [_hoisted_16];
              }),
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["onOpen", "onClose", "collapse"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            isCollapse: true
          };
        },
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/menu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/menu.md



menuvue_type_script_lang_ts.render = menuvue_type_template_id_6ca13de1_render

/* harmony default export */ var menu = __webpack_exports__["default"] = (menuvue_type_script_lang_ts);

/***/ })

}]);