(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[181],{

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/tabs.md?vue&type=template&id=b01b9ca2

var tabsvue_type_template_id_b01b9ca2_hoisted_1 = {
  class: "content element-doc"
};

var tabsvue_type_template_id_b01b9ca2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tabu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" タブ")], -1);

var tabsvue_type_template_id_b01b9ca2_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "関連しているが異なるタイプに属するデータコレクションを分割します。", -1);

var tabsvue_type_template_id_b01b9ca2_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var tabsvue_type_template_id_b01b9ca2_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "基本的で簡潔なタブです。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("タブはカードの選択機能を提供します。デフォルトでは最初のタブがアクティブとして選択されており、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性を設定することで任意のタブをアクティブにすることができます。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tabs v-model=\"activeName\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\" name=\"first\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\" name=\"second\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\" name=\"third\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\" name=\"fourth\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kadosutairu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kadosutairu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" カードスタイル")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "カードのようなスタイルのタブ", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定すると、カードスタイルのタブを取得できます。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tabs type=\"card\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "bodakado"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bodakado"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ボーダーカード")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ボーダーカードのタブです。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "border-card"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定します。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane label=\"User\">User</el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Role</el-tab-pane>\n  <el-tab-pane label=\"Task\">Task</el-tab-pane>\n</el-tabs>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"tabuno-wei-zhi\"><a class=\"header-anchor\" href=\"#tabuno-wei-zhi\">¶</a> タブの位置</h3><p>タブの位置を設定するには <code>tab-position</code> 属性を使います。</p><p>タブの位置を設定するには、<code>tab-position</code>属性を使用します。<code>tabPosition=&quot;left|right|top|bottom&quot; </code></p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-group</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">&quot;tabPosition&quot;</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">&quot;margin-bottom: 30px;&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;top&quot;</span>&gt;</span>top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;right&quot;</span>&gt;</span>right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;bottom&quot;</span>&gt;</span>bottom<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;left&quot;</span>&gt;</span>left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-group</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tabs</span> <span class=\"hljs-attr\">:tab-position</span>=<span class=\"hljs-string\">&quot;tabPosition&quot;</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">&quot;height: 200px;&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;User&quot;</span>&gt;</span>User<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Config&quot;</span>&gt;</span>Config<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Role&quot;</span>&gt;</span>Role<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Task&quot;</span>&gt;</span>Task<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tabs</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    data() {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">tabPosition</span>: <span class=\"hljs-string\">&#39;left&#39;</span>\n      };\n    }\n  };\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>:::</p><h3 id=\"kasutamutabu\"><a class=\"header-anchor\" href=\"#kasutamutabu\">¶</a> カスタムタブ</h3><p>名前付きスロットを使用して、タブラベルの内容をカスタマイズすることができます。</p>", 7);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane>\n    <template #label>\n      <span><i class=\"el-icon-date\"></i> Route</span>\n    </template>\n    Route\n  </el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Role</el-tab-pane>\n  <el-tab-pane label=\"Task\">Task</el-tab-pane>\n</el-tabs>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tabuwo-zhui-jiasite-biziru"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabuwo-zhui-jiasite-biziru"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" タブを追加して閉じる")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "カードタイプのタブのみ、追加可能＆クローズ可能に対応しています。", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs v-model=\"editableTabsValue\" type=\"card\" editable @edit=\"handleTabsEdit\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Tab 1',\n          name: '1',\n          content: 'Tab 1 content'\n        }, {\n          title: 'Tab 2',\n          name: '2',\n          content: 'Tab 2 content'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      handleTabsEdit(targetName, action) {\n        if (action === 'add') {\n          let newTabName = ++this.tabIndex + '';\n          this.editableTabs.push({\n            title: 'New Tab',\n            name: newTabName,\n            content: 'New Tab content'\n          });\n          this.editableTabsValue = newTabName;\n        }\n        if (action === 'remove') {\n          let tabs = this.editableTabs;\n          let activeName = this.editableTabsValue;\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1];\n                if (nextTab) {\n                  activeName = nextTab.name;\n                }\n              }\n            });\n          }\n          \n          this.editableTabsValue = activeName;\n          this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kasutamaizusita-xin-guitabunotorigabotan"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamaizusita-xin-guitabunotorigabotan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" カスタマイズした新規タブのトリガーボタン")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div style=\"margin-bottom: 20px;\">\n  <el-button\n    size=\"small\"\n    @click=\"addTab(editableTabsValue)\"\n  >\n    add tab\n  </el-button>\n</div>\n<el-tabs v-model=\"editableTabsValue\" type=\"card\" closable @tab-remove=\"removeTab\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Tab 1',\n          name: '1',\n          content: 'Tab 1 content'\n        }, {\n          title: 'Tab 2',\n          name: '2',\n          content: 'Tab 2 content'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      addTab(targetName) {\n        let newTabName = ++this.tabIndex + '';\n        this.editableTabs.push({\n          title: 'New Tab',\n          name: newTabName,\n          content: 'New Tab content'\n        });\n        this.editableTabsValue = newTabName;\n      },\n      removeTab(targetName) {\n        let tabs = this.editableTabs;\n        let activeName = this.editableTabsValue;\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1];\n              if (nextTab) {\n                activeName = nextTab.name;\n              }\n            }\n          });\n        }\n        \n        this.editableTabsValue = activeName;\n        this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"tabuno-shu-xing\"><a class=\"header-anchor\" href=\"#tabuno-shu-xing\">¶</a> タブの属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value / v-model</td><td>バインディング値、選択されたタブの名前</td><td>string</td><td>—</td><td>name of first tab</td></tr><tr><td>type</td><td>タブの種類</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>タブが閉じられるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>タブの追加が可能かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>タブが追加可能で閉じられるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>タブの位置</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>タブの幅が自動的にコンテナに収まるかどうか</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>フック関数を使ってタブを切り替える。<code>false</code> を返すか、<code>Promise</code> を返した後に拒否された場合は、タブの切り替えができないようにする。</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"tabuibento\"><a class=\"header-anchor\" href=\"#tabuibento\">¶</a> タブイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>tab-click</td><td>タブがクリックされたときにトリガーされます。</td><td>clicked tab</td></tr><tr><td>tab-remove</td><td>タブ削除ボタンがクリックされたときにトリガーされます。</td><td>name of the removed tab</td></tr><tr><td>tab-add</td><td>タブ追加ボタンがクリックされたときにトリガーされます。</td><td>—</td></tr><tr><td>edit</td><td>タブ追加ボタンやタブ削除ボタンがクリックされたときにトリガーされます。</td><td>(targetName, action)</td></tr></tbody></table><h3 id=\"tabupeinno-shu-xing\"><a class=\"header-anchor\" href=\"#tabupeinno-shu-xing\">¶</a> タブペインの属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>タブのタイトル</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>タブが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>タブの名前に対応する識別子、タブペインのエイリアスを表す</td><td>string</td><td>—</td><td>ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is &#39;1&#39;</td></tr><tr><td>closable</td><td>タブが閉じられるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>タブがレイジーにレンダリングされるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 6);

function tabsvue_type_template_id_b01b9ca2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tabsvue_type_template_id_b01b9ca2_hoisted_1, [tabsvue_type_template_id_b01b9ca2_hoisted_2, tabsvue_type_template_id_b01b9ca2_hoisted_3, tabsvue_type_template_id_b01b9ca2_hoisted_4, tabsvue_type_template_id_b01b9ca2_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, _hoisted_25, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29]);
}
// CONCATENATED MODULE: ./website/docs/jp/tabs.md?vue&type=template&id=b01b9ca2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/tabs.md?vue&type=script&lang=ts


/* harmony default export */ var tabsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeName = $event;
          }),
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User",
              name: "first"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config",
              name: "second"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role",
              name: "third"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task",
              name: "fourth"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onTabClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: 'first'
          };
        },
        methods: {
          handleClick: function handleClick(tab, event) {
            console.log(tab, event);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "card",
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["onTabClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: 'first'
          };
        },
        methods: {
          handleClick: function handleClick(tab, event) {
            console.log(tab, event);
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
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
    "element-demo3": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", null, [/*#__PURE__*/_createVNode("i", {
        class: "el-icon-date"
      }), /*#__PURE__*/_createTextVNode(" Route")], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Route ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, null, {
              label: _withCtx(function () {
                return [_hoisted_1];
              }),
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.editableTabsValue = $event;
          }),
          type: "card",
          editable: "",
          onEdit: _ctx.handleTabsEdit
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.editableTabs, function (item, index) {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(item.content), 1)];
                }),
                _: 2
              }, 1032, ["label", "name"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onEdit"])]);
      }

      var democomponentExport = {
        data: function data() {
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
          handleTabsEdit: function handleTabsEdit(targetName, action) {
            if (action === 'add') {
              var newTabName = ++this.tabIndex + '';
              this.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                content: 'New Tab content'
              });
              this.editableTabsValue = newTabName;
            }

            if (action === 'remove') {
              var tabs = this.editableTabs;
              var activeName = this.editableTabsValue;

              if (activeName === targetName) {
                tabs.forEach(function (tab, index) {
                  if (tab.name === targetName) {
                    var nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                      activeName = nextTab.name;
                    }
                  }
                });
              }

              this.editableTabsValue = activeName;
              this.editableTabs = tabs.filter(function (tab) {
                return tab.name !== targetName;
              });
            }
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
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];
      var _hoisted_1 = {
        style: {
          "margin-bottom": "20px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" add tab ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          size: "small",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.addTab(_ctx.editableTabsValue);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        })]), _createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.editableTabsValue = $event;
          }),
          type: "card",
          closable: "",
          onTabRemove: _ctx.removeTab
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.editableTabs, function (item, index) {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(item.content), 1)];
                }),
                _: 2
              }, 1032, ["label", "name"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onTabRemove"])]);
      }

      var democomponentExport = {
        data: function data() {
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
          addTab: function addTab(targetName) {
            var newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
          },
          removeTab: function removeTab(targetName) {
            var tabs = this.editableTabs;
            var activeName = this.editableTabsValue;

            if (activeName === targetName) {
              tabs.forEach(function (tab, index) {
                if (tab.name === targetName) {
                  var nextTab = tabs[index + 1] || tabs[index - 1];

                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(function (tab) {
              return tab.name !== targetName;
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/tabs.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/tabs.md



tabsvue_type_script_lang_ts.render = tabsvue_type_template_id_b01b9ca2_render

/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabsvue_type_script_lang_ts);

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/tabs.md?vue&type=template&id=662c1eee

var tabsvue_type_template_id_662c1eee_hoisted_1 = {
  class: "content element-doc"
};

var tabsvue_type_template_id_662c1eee_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tabs"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabs"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tabs")], -1);

var tabsvue_type_template_id_662c1eee_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Divise des collections de données de types différents, mais reliées entre elles par un contexte ou un type global.", -1);

var tabsvue_type_template_id_662c1eee_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Usage")], -1);

var tabsvue_type_template_id_662c1eee_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Onglets basiques.", -1);

var tabsvue_type_template_id_662c1eee_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Tabs fournit un outil de sélection des onglets. Par défaut, le premier onglet est sélectionné et actif mais vous pouvez activer n'importe lequel en réglant l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var tabsvue_type_template_id_662c1eee_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tabs v-model=\"activeName\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\" name=\"first\">Utilisateur</el-tab-pane>\n    <el-tab-pane label=\"Config\" name=\"second\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\" name=\"third\">Rôle</el-tab-pane>\n    <el-tab-pane label=\"Task\" name=\"fourth\">Tâche</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n</script>\n")], -1);

var tabsvue_type_template_id_662c1eee_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "style-carte"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#style-carte"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Style carte")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Les onglets peuvent être stylisés comme des cartes.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Mettez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour avoir des onglets avec un style de carte.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tabs type=\"card\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\">Utilisateur</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Rôle</el-tab-pane>\n    <el-tab-pane label=\"Task\">Tâche</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "style-carte-avec-bordure"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#style-carte-avec-bordure"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Style carte avec bordure")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Onglets avec style de carte et bordure.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Mettez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "border-card"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane label=\"User\">Utilisateur</el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Rôle</el-tab-pane>\n  <el-tab-pane label=\"Task\">Tâche</el-tab-pane>\n</el-tabs>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "position-des-onglets"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#position-des-onglets"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Position des onglets")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Vous pouvez utiliser "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "tab-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour régler la position des onglets.")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Il y a quatre positions différentes: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "tabPosition=\"left|right|top|bottom\"")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-radio-group v-model=\"tabPosition\" style=\"margin-bottom: 30px;\">\n    <el-radio-button label=\"top\">En haut</el-radio-button>\n    <el-radio-button label=\"right\">À droite</el-radio-button>\n    <el-radio-button label=\"bottom\">En bas</el-radio-button>\n    <el-radio-button label=\"left\">À gauche</el-radio-button>\n  </el-radio-group>\n\n  <el-tabs :tab-position=\"tabPosition\" style=\"height: 200px;\">\n    <el-tab-pane label=\"User\">Utilisateur</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Rôle</el-tab-pane>\n    <el-tab-pane label=\"Task\">Tâche</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tabPosition: 'left'\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "onglet-personnalise"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#onglet-personnalise"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Onglet personnalisé")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez utiliser un slot pour customiser le label d'un onglet.", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane>\n    <template #label>\n      <span><i class=\"el-icon-date\"></i> Route</span>\n    </template>\n    Route\n  </el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Rôle</el-tab-pane>\n  <el-tab-pane label=\"Task\">Tâche</el-tab-pane>\n</el-tabs>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ajouter-et-supprimer-des-onglets"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ajouter-et-supprimer-des-onglets"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Ajouter et supprimer des onglets")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Seuls les onglets de type carte supportent l'ajout et la suppression.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs v-model=\"editableTabsValue\" type=\"card\" editable @edit=\"handleTabsEdit\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Onglet 1',\n          name: '1',\n          content: 'Contenu de l\\'onglet 1'\n        }, {\n          title: 'Onglet 2',\n          name: '2',\n          content: 'Contenu de l\\'onglet 2'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      handleTabsEdit(targetName, action) {\n        if (action === 'add') {\n          let newTabName = ++this.tabIndex + '';\n          this.editableTabs.push({\n            title: 'Nouvel onglet',\n            name: newTabName,\n            content: 'Contenu du nouvel onglet'\n          });\n          this.editableTabsValue = newTabName;\n        }\n        if (action === 'remove') {\n          let tabs = this.editableTabs;\n          let activeName = this.editableTabsValue;\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1];\n                if (nextTab) {\n                  activeName = nextTab.name;\n                }\n              }\n            });\n          }\n\n          this.editableTabsValue = activeName;\n          this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "personnaliser-le-bouton-d-ajout-d-onglet"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#personnaliser-le-bouton-d-ajout-d-onglet"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Personnaliser le bouton d'ajout d'onglet")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div style=\"margin-bottom: 20px;\">\n  <el-button\n    size=\"small\"\n    @click=\"addTab(editableTabsValue)\"\n  >\n    Ajouter un onglet\n  </el-button>\n</div>\n<el-tabs v-model=\"editableTabsValue\" type=\"card\" closable @tab-remove=\"removeTab\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Onglet 1',\n          name: '1',\n          content: 'Contenu de l\\'onglet 1'\n        }, {\n          title: 'Onglet 2',\n          name: '2',\n          content: 'Contenu de l\\'onglet 2'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      addTab(targetName) {\n        let newTabName = ++this.tabIndex + '';\n        this.editableTabs.push({\n          title: 'Nouvel onglet',\n          name: newTabName,\n          content: 'Contenu du nouvel onglet'\n        });\n        this.editableTabsValue = newTabName;\n      },\n      removeTab(targetName) {\n        let tabs = this.editableTabs;\n        let activeName = this.editableTabsValue;\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1];\n              if (nextTab) {\n                activeName = nextTab.name;\n              }\n            }\n          });\n        }\n\n        this.editableTabsValue = activeName;\n        this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs-de-tabs\"><a class=\"header-anchor\" href=\"#attributs-de-tabs\">¶</a> Attributs de Tabs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>value / v-model</td><td>La valeur liée, nom de l&#39;onglet sélectionné.</td><td>string</td><td>—</td><td>Nom du premier onglet.</td></tr><tr><td>type</td><td>Type de l&#39;onglet.</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>Si des onglets peuvent être supprimés.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>Si des onglets peuvent être ajoutés.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>Si des onglets peuvent être ajoutés et supprimés.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>Position des onglets.</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>Si la largeur des onglets s&#39;adapte au conteneur.</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>Fonction de hook avant de changer d&#39;onglet. Si <code>false</code> est retourné ou qu&#39;une <code>Promise</code> retournée et rejetée, le changement sera annulé.</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"evenements-de-tabs\"><a class=\"header-anchor\" href=\"#evenements-de-tabs\">¶</a> Évènements de Tabs</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>tab-click</td><td>Se déclenche quand on clique sur un onglet.</td><td>clicked tab</td></tr><tr><td>tab-remove</td><td>Se déclenche quand on clique sur le bouton de suppression des onglets.</td><td>name of the removed tab</td></tr><tr><td>tab-add</td><td>Se déclenche quand on clique sur le bouton d&#39;ajout des onglets.</td><td>—</td></tr><tr><td>edit</td><td>Se déclenche quand on clique sur les boutons d&#39;ajout ou de suppression des onglets.</td><td>(targetName, action)</td></tr></tbody></table><h3 id=\"attributs-de-tab-pane\"><a class=\"header-anchor\" href=\"#attributs-de-tab-pane\">¶</a> Attributs de Tab-pane</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>label</td><td>Titre de l&#39;onglet.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si l&#39;onglet est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>Identifiant correspondant au nom des onglets, utilisé par Tabs pour savoir quel est l&#39;onglet actif.</td><td>string</td><td>—</td><td>Numéro de l&#39;onglet dans l&#39;ordre d&#39;apparition, e.g. le premier est &#39;1&#39;.</td></tr><tr><td>closable</td><td>Si l&#39;onglet est supprimable.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>Si le contenu de l&#39;onglet bénéficie du lazy-loading.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 6);

function tabsvue_type_template_id_662c1eee_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tabsvue_type_template_id_662c1eee_hoisted_1, [tabsvue_type_template_id_662c1eee_hoisted_2, tabsvue_type_template_id_662c1eee_hoisted_3, tabsvue_type_template_id_662c1eee_hoisted_4, tabsvue_type_template_id_662c1eee_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tabsvue_type_template_id_662c1eee_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tabsvue_type_template_id_662c1eee_hoisted_6];
    }),
    _: 1
  }), tabsvue_type_template_id_662c1eee_hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_28]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/tabs.md?vue&type=template&id=662c1eee

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/tabs.md?vue&type=script&lang=ts


/* harmony default export */ var tabsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Utilisateur");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Rôle");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Tâche");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeName = $event;
          }),
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User",
              name: "first"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config",
              name: "second"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role",
              name: "third"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task",
              name: "fourth"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onTabClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: 'first'
          };
        },
        methods: {
          handleClick: function handleClick(tab, event) {
            console.log(tab, event);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Utilisateur");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Rôle");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Tâche");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "card",
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["onTabClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: 'first'
          };
        },
        methods: {
          handleClick: function handleClick(tab, event) {
            console.log(tab, event);
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Utilisateur");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Rôle");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Tâche");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
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
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("En haut");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("À droite");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("En bas");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("À gauche");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Utilisateur");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Rôle");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Tâche");

      function render(_ctx, _cache) {
        var _component_el_radio_button = _resolveComponent("el-radio-button");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.tabPosition,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.tabPosition = $event;
          }),
          style: {
            "margin-bottom": "30px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: "top"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: "right"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: "bottom"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: "left"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_tabs, {
          "tab-position": _ctx.tabPosition,
          style: {
            "height": "200px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["tab-position"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tabPosition: 'left'
          };
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", null, [/*#__PURE__*/_createVNode("i", {
        class: "el-icon-date"
      }), /*#__PURE__*/_createTextVNode(" Route")], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Route ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Rôle");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Tâche");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, null, {
              label: _withCtx(function () {
                return [_hoisted_1];
              }),
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
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
    "element-demo5": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.editableTabsValue = $event;
          }),
          type: "card",
          editable: "",
          onEdit: _ctx.handleTabsEdit
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.editableTabs, function (item, index) {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(item.content), 1)];
                }),
                _: 2
              }, 1032, ["label", "name"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onEdit"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Onglet 1',
              name: '1',
              content: 'Contenu de l\'onglet 1'
            }, {
              title: 'Onglet 2',
              name: '2',
              content: 'Contenu de l\'onglet 2'
            }],
            tabIndex: 2
          };
        },
        methods: {
          handleTabsEdit: function handleTabsEdit(targetName, action) {
            if (action === 'add') {
              var newTabName = ++this.tabIndex + '';
              this.editableTabs.push({
                title: 'Nouvel onglet',
                name: newTabName,
                content: 'Contenu du nouvel onglet'
              });
              this.editableTabsValue = newTabName;
            }

            if (action === 'remove') {
              var tabs = this.editableTabs;
              var activeName = this.editableTabsValue;

              if (activeName === targetName) {
                tabs.forEach(function (tab, index) {
                  if (tab.name === targetName) {
                    var nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                      activeName = nextTab.name;
                    }
                  }
                });
              }

              this.editableTabsValue = activeName;
              this.editableTabs = tabs.filter(function (tab) {
                return tab.name !== targetName;
              });
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];
      var _hoisted_1 = {
        style: {
          "margin-bottom": "20px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Ajouter un onglet ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          size: "small",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.addTab(_ctx.editableTabsValue);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        })]), _createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.editableTabsValue = $event;
          }),
          type: "card",
          closable: "",
          onTabRemove: _ctx.removeTab
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.editableTabs, function (item, index) {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(item.content), 1)];
                }),
                _: 2
              }, 1032, ["label", "name"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onTabRemove"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Onglet 1',
              name: '1',
              content: 'Contenu de l\'onglet 1'
            }, {
              title: 'Onglet 2',
              name: '2',
              content: 'Contenu de l\'onglet 2'
            }],
            tabIndex: 2
          };
        },
        methods: {
          addTab: function addTab(targetName) {
            var newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'Nouvel onglet',
              name: newTabName,
              content: 'Contenu du nouvel onglet'
            });
            this.editableTabsValue = newTabName;
          },
          removeTab: function removeTab(targetName) {
            var tabs = this.editableTabs;
            var activeName = this.editableTabsValue;

            if (activeName === targetName) {
              tabs.forEach(function (tab, index) {
                if (tab.name === targetName) {
                  var nextTab = tabs[index + 1] || tabs[index - 1];

                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(function (tab) {
              return tab.name !== targetName;
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/tabs.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/tabs.md



tabsvue_type_script_lang_ts.render = tabsvue_type_template_id_662c1eee_render

/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabsvue_type_script_lang_ts);

/***/ })

}]);