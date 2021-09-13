(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[275],{

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/tabs.md?vue&type=template&id=65e20469

const tabsvue_type_template_id_65e20469_hoisted_1 = {
  class: "content element-doc"
};

const tabsvue_type_template_id_65e20469_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("タブ ");

const tabsvue_type_template_id_65e20469_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "関連しているが異なるタイプに属するデータコレクションを分割します。", -1);

const tabsvue_type_template_id_65e20469_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な使い方 ");

const tabsvue_type_template_id_65e20469_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "基本的で簡潔なタブです。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("タブはカードの選択機能を提供します。デフォルトでは最初のタブがアクティブとして選択されており、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性を設定することで任意のタブをアクティブにすることができます。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tabs v-model=\"activeName\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\" name=\"first\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\" name=\"second\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\" name=\"third\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\" name=\"fourth\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first',\n      }\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カードスタイル ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "カードのようなスタイルのタブ", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定すると、カードスタイルのタブを取得できます。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tabs type=\"card\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first',\n      }\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ボーダーカード ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ボーダーカードのタブです。", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border-card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定します。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane label=\"User\">User</el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Role</el-tab-pane>\n  <el-tab-pane label=\"Task\">Task</el-tab-pane>\n</el-tabs>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("タブの位置 ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>タブの位置を設定するには <code>tab-position</code> 属性を使います。</p><p>タブの位置を設定するには、<code>tab-position</code>属性を使用します。<code>tabPosition=&quot;left|right|top|bottom&quot; </code></p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-group</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">&quot;tabPosition&quot;</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">&quot;margin-bottom: 30px;&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;top&quot;</span>&gt;</span>top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;right&quot;</span>&gt;</span>right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;bottom&quot;</span>&gt;</span>bottom<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;left&quot;</span>&gt;</span>left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-group</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tabs</span> <span class=\"hljs-attr\">:tab-position</span>=<span class=\"hljs-string\">&quot;tabPosition&quot;</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">&quot;height: 200px;&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;User&quot;</span>&gt;</span>User<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Config&quot;</span>&gt;</span>Config<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Role&quot;</span>&gt;</span>Role<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Task&quot;</span>&gt;</span>Task<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tabs</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-function\"><span class=\"hljs-title\">data</span>(<span class=\"hljs-params\"></span>)</span> {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">tabPosition</span>: <span class=\"hljs-string\">&#39;left&#39;</span>,\n      }\n    },\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre><p>:::</p>", 4);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタムタブ ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "名前付きスロットを使用して、タブラベルの内容をカスタマイズすることができます。", -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane>\n    <template #label>\n      <span><i class=\"el-icon-date\"></i> Route</span>\n    </template>\n    Route\n  </el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Role</el-tab-pane>\n  <el-tab-pane label=\"Task\">Task</el-tab-pane>\n</el-tabs>\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("タブを追加して閉じる ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "カードタイプのタブのみ、追加可能＆クローズ可能に対応しています。", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs\n  v-model=\"editableTabsValue\"\n  type=\"card\"\n  editable\n  @edit=\"handleTabsEdit\"\n>\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [\n          {\n            title: 'Tab 1',\n            name: '1',\n            content: 'Tab 1 content',\n          },\n          {\n            title: 'Tab 2',\n            name: '2',\n            content: 'Tab 2 content',\n          },\n        ],\n        tabIndex: 2,\n      }\n    },\n    methods: {\n      handleTabsEdit(targetName, action) {\n        if (action === 'add') {\n          let newTabName = ++this.tabIndex + ''\n          this.editableTabs.push({\n            title: 'New Tab',\n            name: newTabName,\n            content: 'New Tab content',\n          })\n          this.editableTabsValue = newTabName\n        }\n        if (action === 'remove') {\n          let tabs = this.editableTabs\n          let activeName = this.editableTabsValue\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1]\n                if (nextTab) {\n                  activeName = nextTab.name\n                }\n              }\n            })\n          }\n\n          this.editableTabsValue = activeName\n          this.editableTabs = tabs.filter((tab) => tab.name !== targetName)\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタマイズした新規タブのトリガーボタン ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div style=\"margin-bottom: 20px;\">\n  <el-button size=\"small\" @click=\"addTab(editableTabsValue)\">\n    add tab\n  </el-button>\n</div>\n<el-tabs\n  v-model=\"editableTabsValue\"\n  type=\"card\"\n  closable\n  @tab-remove=\"removeTab\"\n>\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [\n          {\n            title: 'Tab 1',\n            name: '1',\n            content: 'Tab 1 content',\n          },\n          {\n            title: 'Tab 2',\n            name: '2',\n            content: 'Tab 2 content',\n          },\n        ],\n        tabIndex: 2,\n      }\n    },\n    methods: {\n      addTab(targetName) {\n        let newTabName = ++this.tabIndex + ''\n        this.editableTabs.push({\n          title: 'New Tab',\n          name: newTabName,\n          content: 'New Tab content',\n        })\n        this.editableTabsValue = newTabName\n      },\n      removeTab(targetName) {\n        let tabs = this.editableTabs\n        let activeName = this.editableTabsValue\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1]\n              if (nextTab) {\n                activeName = nextTab.name\n              }\n            }\n          })\n        }\n\n        this.editableTabsValue = activeName\n        this.editableTabs = tabs.filter((tab) => tab.name !== targetName)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("タブの属性 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値、選択されたタブの名前</td><td>string</td><td>—</td><td>name of first tab</td></tr><tr><td>type</td><td>タブの種類</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>タブが閉じられるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>タブの追加が可能かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>タブが追加可能で閉じられるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>タブの位置</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>タブの幅が自動的にコンテナに収まるかどうか</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>フック関数を使ってタブを切り替える。<code>false</code> を返すか、<code>Promise</code> を返した後に拒否された場合は、タブの切り替えができないようにする。</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("タブイベント ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>tab-click</td><td>タブがクリックされたときにトリガーされます。</td><td>clicked tab</td></tr><tr><td>tab-remove</td><td>タブ削除ボタンがクリックされたときにトリガーされます。</td><td>name of the removed tab</td></tr><tr><td>tab-add</td><td>タブ追加ボタンがクリックされたときにトリガーされます。</td><td>—</td></tr><tr><td>edit</td><td>タブ追加ボタンやタブ削除ボタンがクリックされたときにトリガーされます。</td><td>(targetName, action)</td></tr></tbody></table>", 1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("タブペインの属性 ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>タブのタイトル</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>タブが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>タブの名前に対応する識別子、タブペインのエイリアスを表す</td><td>string</td><td>—</td><td>ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is &#39;1&#39;</td></tr><tr><td>closable</td><td>タブが閉じられるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>タブがレイジーにレンダリングされるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tab-pane Slots ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tab-pane's content")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tab-pane's label")])])], -1);

function tabsvue_type_template_id_65e20469_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tabsvue_type_template_id_65e20469_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabu",
    content: "タブ",
    href: "#tabu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_65e20469_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabu"
    })]),
    _: 1
  }), tabsvue_type_template_id_65e20469_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-de-nashi-ifang",
    content: "基本的な使い方",
    href: "#ji-ben-de-nashi-ifang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_65e20469_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-de-nashi-ifang"
    })]),
    _: 1
  }), tabsvue_type_template_id_65e20469_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kadosutairu",
    content: "カードスタイル",
    href: "#kadosutairu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kadosutairu"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bodakado",
    content: "ボーダーカード",
    href: "#bodakado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bodakado"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabunowei-zhi",
    content: "タブの位置",
    href: "#tabunowei-zhi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabunowei-zhi"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamutabu",
    content: "カスタムタブ",
    href: "#kasutamutabu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamutabu"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabuwozhui-jia-sitebi-ziru",
    content: "タブを追加して閉じる",
    href: "#tabuwozhui-jia-sitebi-ziru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabuwozhui-jia-sitebi-ziru"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamaizusitaxin-gui-tabunotorigabotan",
    content: "カスタマイズした新規タブのトリガーボタン",
    href: "#kasutamaizusitaxin-gui-tabunotorigabotan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamaizusitaxin-gui-tabunotorigabotan"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabunoshu-xing",
    content: "タブの属性",
    href: "#tabunoshu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabunoshu-xing"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabuibento",
    content: "タブイベント",
    href: "#tabuibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabuibento"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabupeinnoshu-xing",
    content: "タブペインの属性",
    href: "#tabupeinnoshu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabupeinnoshu-xing"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tab-pane-slots",
    content: "Tab-pane Slots",
    href: "#tab-pane-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tab-pane-slots"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/tabs.md?vue&type=template&id=65e20469

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/tabs.md?vue&type=script&lang=ts

/* harmony default export */ var tabsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeName = $event),
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User",
            name: "first"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config",
            name: "second"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role",
            name: "third"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task",
            name: "fourth"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "onTabClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeName: 'first'
          };
        },

        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "card",
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["onTabClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeName: 'first'
          };
        },

        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("span", null, [/*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-date"
      }), /*#__PURE__*/_createTextVNode(" Route")], -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" Route ");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Role");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, null, {
            label: _withCtx(() => [_hoisted_1]),
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.editableTabsValue = $event),
          type: "card",
          editable: "",
          onEdit: _ctx.handleTabsEdit
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.editableTabs, (item, index) => {
            return _openBlock(), _createBlock(_component_el_tab_pane, {
              key: item.name,
              label: item.title,
              name: item.name
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(item.content), 1)]),
              _: 2
            }, 1032, ["label", "name"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "onEdit"])]);
      }

      const democomponentExport = {
        data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content'
            }, {
              title: 'Tab 2',
              name: '2',
              content: 'Tab 2 content'
            }],
            tabIndex: 2
          };
        },

        methods: {
          handleTabsEdit(targetName, action) {
            if (action === 'add') {
              let newTabName = ++this.tabIndex + '';
              this.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                content: 'New Tab content'
              });
              this.editableTabsValue = newTabName;
            }

            if (action === 'remove') {
              let tabs = this.editableTabs;
              let activeName = this.editableTabsValue;

              if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                  if (tab.name === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                      activeName = nextTab.name;
                    }
                  }
                });
              }

              this.editableTabsValue = activeName;
              this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            }
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createBlock: _createBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-bottom": "20px"
        }
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" add tab ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          size: "small",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.addTab(_ctx.editableTabsValue))
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        })]), _createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.editableTabsValue = $event),
          type: "card",
          closable: "",
          onTabRemove: _ctx.removeTab
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.editableTabs, (item, index) => {
            return _openBlock(), _createBlock(_component_el_tab_pane, {
              key: item.name,
              label: item.title,
              name: item.name
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(item.content), 1)]),
              _: 2
            }, 1032, ["label", "name"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "onTabRemove"])]);
      }

      const democomponentExport = {
        data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content'
            }, {
              title: 'Tab 2',
              name: '2',
              content: 'Tab 2 content'
            }],
            tabIndex: 2
          };
        },

        methods: {
          addTab(targetName) {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
          },

          removeTab(targetName) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;

            if (activeName === targetName) {
              tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                  let nextTab = tabs[index + 1] || tabs[index - 1];

                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
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
// CONCATENATED MODULE: ./website/docs/jp/tabs.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/tabs.md



tabsvue_type_script_lang_ts.render = tabsvue_type_template_id_65e20469_render

/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabsvue_type_script_lang_ts);

/***/ })

}]);