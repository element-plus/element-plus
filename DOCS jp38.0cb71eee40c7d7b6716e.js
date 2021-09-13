(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[249],{

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/menu.md?vue&type=template&id=cc6b6c4a

const menuvue_type_template_id_cc6b6c4a_hoisted_1 = {
  class: "content element-doc"
};

const menuvue_type_template_id_cc6b6c4a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ナビゲーションメニュー ");

const menuvue_type_template_id_cc6b6c4a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ウェブサイトのナビゲーションを提供するメニュー。", -1);

const menuvue_type_template_id_cc6b6c4a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("トップバー ");

const menuvue_type_template_id_cc6b6c4a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "トップバーのナビゲーションメニューは、様々なシーンで使用することができます。", -1);

const menuvue_type_template_id_cc6b6c4a_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("デフォルトではメニューは縦長ですが、モードプロップを'horizontal'に設定することで横長にすることができます。また、サブメニューコンポーネントを使って第 2 階層のメニューを作成することもできます。メニューには "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "background-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "text-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "active-text-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" が用意されており、色をカスタマイズすることができます。")])], -1);

const menuvue_type_template_id_cc6b6c4a_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-menu\n  :default-active=\"activeIndex\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n>\n  <el-menu-item index=\"1\">Processing Center</el-menu-item>\n  <el-sub-menu index=\"2\">\n    <template #title>Workspace</template>\n    <el-menu-item index=\"2-1\">item one</el-menu-item>\n    <el-menu-item index=\"2-2\">item two</el-menu-item>\n    <el-menu-item index=\"2-3\">item three</el-menu-item>\n    <el-sub-menu index=\"2-4\">\n      <template #title>item four</template>\n      <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n    </el-sub-menu>\n  </el-sub-menu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\">Orders</el-menu-item>\n</el-menu>\n<div class=\"line\"></div>\n<el-menu\n  :default-active=\"activeIndex2\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n  background-color=\"#545c64\"\n  text-color=\"#fff\"\n  active-text-color=\"#ffd04b\"\n>\n  <el-menu-item index=\"1\">Processing Center</el-menu-item>\n  <el-sub-menu index=\"2\">\n    <template #title>Workspace</template>\n    <el-menu-item index=\"2-1\">item one</el-menu-item>\n    <el-menu-item index=\"2-2\">item two</el-menu-item>\n    <el-menu-item index=\"2-3\">item three</el-menu-item>\n    <el-sub-menu index=\"2-4\">\n      <template #title>item four</template>\n      <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n    </el-sub-menu>\n  </el-sub-menu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\">Orders</el-menu-item>\n</el-menu>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: '1',\n        activeIndex2: '1',\n      }\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeIndex = ref('1');\n      const activeIndex2 = ref('1');\n      const handleSelect = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        activeIndex,\n        activeIndex2,\n        handleSelect,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_cc6b6c4a_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("サイドバー ");

const menuvue_type_template_id_cc6b6c4a_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "V サブメニューのある縦型ナビメニュー。", -1);

const menuvue_type_template_id_cc6b6c4a_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "el-menu-item-group コンポーネントを使ってメニューグループを作成することができ、グループの名前はタイトルプロップか名前付きスロットで決まります。")], -1);

const menuvue_type_template_id_cc6b6c4a_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-row class=\"tac\">\n  <el-col :span=\"12\">\n    <h5>Default colors</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n    >\n      <el-sub-menu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title=\"Group One\">\n          <el-menu-item index=\"1-1\">item one</el-menu-item>\n          <el-menu-item index=\"1-2\">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Two\">\n          <el-menu-item index=\"1-3\">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-sub-menu index=\"1-4\">\n          <template #title>item four</template>\n          <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n        </el-sub-menu>\n      </el-sub-menu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n  <el-col :span=\"12\">\n    <h5>Custom colors</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n      background-color=\"#545c64\"\n      text-color=\"#fff\"\n      active-text-color=\"#ffd04b\"\n    >\n      <el-sub-menu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title=\"Group One\">\n          <el-menu-item index=\"1-1\">item one</el-menu-item>\n          <el-menu-item index=\"1-2\">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Two\">\n          <el-menu-item index=\"1-3\">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-sub-menu index=\"1-4\">\n          <template #title>item four</template>\n          <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n        </el-sub-menu>\n      </el-sub-menu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath)\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleOpen = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      const handleClose = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        handleOpen,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_cc6b6c4a_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("コラプス ");

const menuvue_type_template_id_cc6b6c4a_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "縦型のナビメニューを潰すことも出来ます。", -1);

const menuvue_type_template_id_cc6b6c4a_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-radio-group v-model=\"isCollapse\" style=\"margin-bottom: 20px;\">\n  <el-radio-button :label=\"false\">expand</el-radio-button>\n  <el-radio-button :label=\"true\">collapse</el-radio-button>\n</el-radio-group>\n<el-menu\n  default-active=\"2\"\n  class=\"el-menu-vertical-demo\"\n  @open=\"handleOpen\"\n  @close=\"handleClose\"\n  :collapse=\"isCollapse\"\n>\n  <el-sub-menu index=\"1\">\n    <template #title>\n      <i class=\"el-icon-location\"></i>\n      <span>Navigator One</span>\n    </template>\n    <el-menu-item-group>\n      <template #title><span>Group One</span></template>\n      <el-menu-item index=\"1-1\">item one</el-menu-item>\n      <el-menu-item index=\"1-2\">item two</el-menu-item>\n    </el-menu-item-group>\n    <el-menu-item-group title=\"Group Two\">\n      <el-menu-item index=\"1-3\">item three</el-menu-item>\n    </el-menu-item-group>\n    <el-sub-menu index=\"1-4\">\n      <template #title><span>item four</span></template>\n      <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n    </el-sub-menu>\n  </el-sub-menu>\n  <el-menu-item index=\"2\">\n    <i class=\"el-icon-menu\"></i>\n    <template #title>Navigator Two</template>\n  </el-menu-item>\n  <el-menu-item index=\"3\" disabled>\n    <i class=\"el-icon-document\"></i>\n    <template #title>Navigator Three</template>\n  </el-menu-item>\n  <el-menu-item index=\"4\">\n    <i class=\"el-icon-setting\"></i>\n    <template #title>Navigator Four</template>\n  </el-menu-item>\n</el-menu>\n\n<style>\n  .el-menu-vertical-demo:not(.el-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true,\n      }\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath)\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const isCollapse = ref(true);\n      const handleOpen = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      const handleClose = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        isCollapse,\n        handleOpen,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_cc6b6c4a_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("メニュー属性 ");

const menuvue_type_template_id_cc6b6c4a_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>mode</td><td>メニュー表示モード</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>メニューが折りたたまれているかどうか (垂直モードでのみ利用可能)</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>メニューの背景色(16 進数形式)</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>メニューのテキストカラー(16 進数形式)</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>現在アクティブなメニュー項目のテキスト色 (16 進数形式)</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>アクティブメニューのインデックス</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>現在アクティブなサブメニューのインデックスを含む配列</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>一つのサブメニューだけをアクティブにすることができるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>サブメニューのトリガ方法、<code>mode</code> が &#39;horizontal&#39; の時のみ動作する</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td><code>vue-router</code> モードを有効にしているかどうかを示します。true の場合、インデックスはルートアクションを有効にするための &#39;path&#39; として使われます。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>折りたたみ遷移を有効にするかどうか</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table>", 1);

const menuvue_type_template_id_cc6b6c4a_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("メニューメソッド ");

const menuvue_type_template_id_cc6b6c4a_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Methods Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>open</td><td>特定のサブメニューを開く</td><td>index: index of the sub-menu to open</td></tr><tr><td>close</td><td>特定のサブメニューを閉じる</td><td>index: index of the sub-menu to close</td></tr></tbody></table>", 1);

const menuvue_type_template_id_cc6b6c4a_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("メニューイベント ");

const menuvue_type_template_id_cc6b6c4a_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>メニュー起動時コールバック機能</td><td>index: index of activated menu, indexPath: index path of activated menu, item: 選択されたメニュー項目, routeResult: <code>router</code> が有効な場合に <code>vue-router</code> が返す結果</td></tr><tr><td>open</td><td>サブメニュー展開したときのコールバック関数</td><td>index: index of expanded sub-menu, indexPath: index path of expanded sub-menu</td></tr><tr><td>close</td><td>サブメニューを折りたたんだ時のコールバック関数</td><td>index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu</td></tr></tbody></table>", 1);

const menuvue_type_template_id_cc6b6c4a_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("メニューアイテムイベント ");

const menuvue_type_template_id_cc6b6c4a_hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "メニュー項目がクリックされたときのコールバック関数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el: menu-item instance")])])], -1);

const menuvue_type_template_id_cc6b6c4a_hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("サブメニュー属性 ");

const menuvue_type_template_id_cc6b6c4a_hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>ユニークアイデンティフィケーション</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>ポップアップメニューのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>サブメニュー表示前のタイムアウト</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>サブメニューを隠す前のタイムアウト</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>サブメニューが無効化されているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>ポップアップメニューをボディに追加するかどうかを指定します。メニューの位置が正しくない場合は、この prop を調整してみてください。</td><td>boolean</td><td>-</td><td>level one SubMenu: true / other SubMenus: false</td></tr></tbody></table>", 1);

const menuvue_type_template_id_cc6b6c4a_hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("メニューアイテム属性 ");

const menuvue_type_template_id_cc6b6c4a_hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>ユニークアイデンティフィケーション</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>route</td><td>Vue Router オブジェクト</td><td>object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>無効化かどうか</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const menuvue_type_template_id_cc6b6c4a_hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("メニューグループ属性 ");

const menuvue_type_template_id_cc6b6c4a_hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>グループタイトル</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function menuvue_type_template_id_cc6b6c4a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", menuvue_type_template_id_cc6b6c4a_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "nabigesiyonmeniyu",
    content: "ナビゲーションメニュー",
    href: "#nabigesiyonmeniyu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#nabigesiyonmeniyu"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "totupuba",
    content: "トップバー",
    href: "#totupuba",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#totupuba"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "saidoba",
    content: "サイドバー",
    href: "#saidoba",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#saidoba"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "korapusu",
    content: "コラプス",
    href: "#korapusu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#korapusu"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "meniyushu-xing",
    content: "メニュー属性",
    href: "#meniyushu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#meniyushu-xing"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "meniyumesotudo",
    content: "メニューメソッド",
    href: "#meniyumesotudo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#meniyumesotudo"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "meniyuibento",
    content: "メニューイベント",
    href: "#meniyuibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#meniyuibento"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "meniyuaitemuibento",
    content: "メニューアイテムイベント",
    href: "#meniyuaitemuibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#meniyuaitemuibento"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sabumeniyushu-xing",
    content: "サブメニュー属性",
    href: "#sabumeniyushu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sabumeniyushu-xing"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "meniyuaitemushu-xing",
    content: "メニューアイテム属性",
    href: "#meniyuaitemushu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#meniyuaitemushu-xing"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "meniyugurupushu-xing",
    content: "メニューグループ属性",
    href: "#meniyugurupushu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_cc6b6c4a_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#meniyugurupushu-xing"
    })]),
    _: 1
  }), menuvue_type_template_id_cc6b6c4a_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/menu.md?vue&type=template&id=cc6b6c4a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/menu.md?vue&type=script&lang=ts

/* harmony default export */ var menuvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Processing Center");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Workspace");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("item two");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("item four");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("item two");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("Info");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("Orders");

      const _hoisted_12 = /*#__PURE__*/_createElementVNode("div", {
        class: "line"
      }, null, -1);

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("Processing Center");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Workspace");

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("item two");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("item four");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("item two");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("Info");

      const _hoisted_23 = /*#__PURE__*/_createTextVNode("Orders");

      function render(_ctx, _cache) {
        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_sub_menu = _resolveComponent("el-sub-menu");

        const _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, {
          default: _withCtx(() => [_createVNode(_component_el_menu_item, {
            index: "1"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_sub_menu, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_2]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item, {
              index: "2-1"
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-2"
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-3"
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }), _createVNode(_component_el_sub_menu, {
              index: "2-4"
            }, {
              title: _withCtx(() => [_hoisted_6]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "2-4-1"
              }, {
                default: _withCtx(() => [_hoisted_7]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-2"
              }, {
                default: _withCtx(() => [_hoisted_8]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-3"
              }, {
                default: _withCtx(() => [_hoisted_9]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            default: _withCtx(() => [_hoisted_10]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          })]),
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
          default: _withCtx(() => [_createVNode(_component_el_menu_item, {
            index: "1"
          }, {
            default: _withCtx(() => [_hoisted_13]),
            _: 1
          }), _createVNode(_component_el_sub_menu, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_14]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item, {
              index: "2-1"
            }, {
              default: _withCtx(() => [_hoisted_15]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-2"
            }, {
              default: _withCtx(() => [_hoisted_16]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-3"
            }, {
              default: _withCtx(() => [_hoisted_17]),
              _: 1
            }), _createVNode(_component_el_sub_menu, {
              index: "2-4"
            }, {
              title: _withCtx(() => [_hoisted_18]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "2-4-1"
              }, {
                default: _withCtx(() => [_hoisted_19]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-2"
              }, {
                default: _withCtx(() => [_hoisted_20]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-3"
              }, {
                default: _withCtx(() => [_hoisted_21]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            default: _withCtx(() => [_hoisted_22]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            default: _withCtx(() => [_hoisted_23]),
            _: 1
          })]),
          _: 1
        }, 8, ["default-active", "onSelect"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },

        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("h5", null, "Default colors", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", null, "Navigator One", -1);

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("item four");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_10 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Two", -1);

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_12 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Three", -1);

      const _hoisted_13 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_14 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Four", -1);

      const _hoisted_15 = /*#__PURE__*/_createElementVNode("h5", null, "Custom colors", -1);

      const _hoisted_16 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_17 = /*#__PURE__*/_createElementVNode("span", null, "Navigator One", -1);

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("item four");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_23 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_24 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Two", -1);

      const _hoisted_25 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_26 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Three", -1);

      const _hoisted_27 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_28 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Four", -1);

      function render(_ctx, _cache) {
        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        const _component_el_sub_menu = _resolveComponent("el-sub-menu");

        const _component_el_menu = _resolveComponent("el-menu");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          class: "tac"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_1, _createVNode(_component_el_menu, {
              "default-active": "2",
              class: "el-menu-vertical-demo",
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose
            }, {
              default: _withCtx(() => [_createVNode(_component_el_sub_menu, {
                index: "1"
              }, {
                title: _withCtx(() => [_hoisted_2, _hoisted_3]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, {
                  title: "Group One"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-1"
                  }, {
                    default: _withCtx(() => [_hoisted_4]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "1-2"
                  }, {
                    default: _withCtx(() => [_hoisted_5]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group Two"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-3"
                  }, {
                    default: _withCtx(() => [_hoisted_6]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_sub_menu, {
                  index: "1-4"
                }, {
                  title: _withCtx(() => [_hoisted_7]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_8]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2"
              }, {
                default: _withCtx(() => [_hoisted_9, _hoisted_10]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                default: _withCtx(() => [_hoisted_11, _hoisted_12]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "4"
              }, {
                default: _withCtx(() => [_hoisted_13, _hoisted_14]),
                _: 1
              })]),
              _: 1
            }, 8, ["onOpen", "onClose"])]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_15, _createVNode(_component_el_menu, {
              "default-active": "2",
              class: "el-menu-vertical-demo",
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose,
              "background-color": "#545c64",
              "text-color": "#fff",
              "active-text-color": "#ffd04b"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_sub_menu, {
                index: "1"
              }, {
                title: _withCtx(() => [_hoisted_16, _hoisted_17]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, {
                  title: "Group One"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-1"
                  }, {
                    default: _withCtx(() => [_hoisted_18]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "1-2"
                  }, {
                    default: _withCtx(() => [_hoisted_19]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group Two"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-3"
                  }, {
                    default: _withCtx(() => [_hoisted_20]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_sub_menu, {
                  index: "1-4"
                }, {
                  title: _withCtx(() => [_hoisted_21]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_22]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2"
              }, {
                default: _withCtx(() => [_hoisted_23, _hoisted_24]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                default: _withCtx(() => [_hoisted_25, _hoisted_26]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "4"
              }, {
                default: _withCtx(() => [_hoisted_27, _hoisted_28]),
                _: 1
              })]),
              _: 1
            }, 8, ["onOpen", "onClose"])]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },

          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("expand");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("collapse");

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", null, "Navigator One", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", null, "Group One", -1);

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("item two");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("span", null, "item four", -1);

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("Navigator Two");

      const _hoisted_13 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Navigator Three");

      const _hoisted_15 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("Navigator Four");

      function render(_ctx, _cache) {
        const _component_el_radio_button = _resolveComponent("el-radio-button");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        const _component_el_sub_menu = _resolveComponent("el-sub-menu");

        const _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.isCollapse,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.isCollapse = $event),
          style: {
            "margin-bottom": "20px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio_button, {
            label: false
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: true
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_menu, {
          "default-active": "2",
          class: "el-menu-vertical-demo",
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose,
          collapse: _ctx.isCollapse
        }, {
          default: _withCtx(() => [_createVNode(_component_el_sub_menu, {
            index: "1"
          }, {
            title: _withCtx(() => [_hoisted_3, _hoisted_4]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
              title: _withCtx(() => [_hoisted_5]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-1"
              }, {
                default: _withCtx(() => [_hoisted_6]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "1-2"
              }, {
                default: _withCtx(() => [_hoisted_7]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_el_menu_item_group, {
              title: "Group Two"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-3"
              }, {
                default: _withCtx(() => [_hoisted_8]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_el_sub_menu, {
              index: "1-4"
            }, {
              title: _withCtx(() => [_hoisted_9]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-4-1"
              }, {
                default: _withCtx(() => [_hoisted_10]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_12]),
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            title: _withCtx(() => [_hoisted_14]),
            default: _withCtx(() => [_hoisted_13]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            title: _withCtx(() => [_hoisted_16]),
            default: _withCtx(() => [_hoisted_15]),
            _: 1
          })]),
          _: 1
        }, 8, ["onOpen", "onClose", "collapse"])]);
      }

      const democomponentExport = {
        data() {
          return {
            isCollapse: true
          };
        },

        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },

          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/menu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/menu.md



menuvue_type_script_lang_ts.render = menuvue_type_template_id_cc6b6c4a_render

/* harmony default export */ var menu = __webpack_exports__["default"] = (menuvue_type_script_lang_ts);

/***/ })

}]);