(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[244],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/loading.md?vue&type=template&id=9b5b07d2

var loadingvue_type_template_id_9b5b07d2_hoisted_1 = {
  class: "content element-doc"
};

var loadingvue_type_template_id_9b5b07d2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "rodeingu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rodeingu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ローディング")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "データ読み込み中にアニメーションを表示する。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kontena-neidenorodeingu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kontena-neidenorodeingu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" コンテナ内でのローディング")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "データの読み込み中にコンテナ（テーブルなど）にアニメーションを表示します。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("要素にはローディングを呼び出すための2つの方法があります: ディレクティブとサービスです。カスタムディレクティブ "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の値をバインドするだけです。デフォルトでは、ローディングマスクはディレクティブが使われている要素に追加されます。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 修飾子を追加すると、マスクは body 要素に追加されます。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  body {\n    margin: 0;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        loading: true\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      tableData: [\n        {\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n      ],\n      loading: true,\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kasutamaizu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamaizu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" カスタマイズ")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "ローディングテキスト、ローディングスピナー、背景色をカスタマイズすることができます。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" がバインドされている要素に "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "element-loading-text"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を追加すると、その値がスピナの下に表示されるようになります。同様に、 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "element-loading-spinner"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, " element-loading-background"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("、および "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "element-loading-svg"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性は、それぞれアイコンクラス名、背景色の値、および読み込みアイコンを設定するために使用されます。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    element-loading-text=\"Loading...\"\n    element-loading-spinner=\"el-icon-loading\"\n    element-loading-background=\"rgba(0, 0, 0, 0.8)\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n  <el-table\n    v-loading=\"loading\"\n    :element-loading-svg=\"svg\"\n    class=\"custom-loading-svg\"\n    element-loading-svg-view-box=\"-10, -10, 50, 50\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  .custom-loading-svg .el-loading-mask > .el-loading-spinner > .circular {\n    animation: none;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        loading: true,\n        svg: `\n          <path class=\"path\" d=\"\n            M 30 15\n            L 28 17\n            M 25.61 25.61\n            A 15 15, 0, 0, 1, 15 30\n            A 15 15, 0, 1, 1, 27.99 7.5\n            L 15 15\n          \" style=\"stroke-width: 4px; fill: rgba(0, 0, 0, 0)\"/>\n        `,\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      tableData: [\n        {\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n      ],\n      loading: true,\n      svg: `\n        <path class=\"path\" d=\"\n          M 30 15\n          L 28 17\n          M 25.61 25.61\n          A 15 15, 0, 0, 1, 15 30\n          A 15 15, 0, 1, 1, 27.99 7.5\n          L 15 15\n        \" style=\"stroke-width: 4px; fill: rgba(0, 0, 0, 0)\"/>\n      `,\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<div class=\"warning\"><p><code>element-loading-svg</code>属性は受信HTMLフラグメントをサポートしますが、<a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">XSS攻撃</a>を引き起こしやすいため、Webサイトで任意のHTMLを動的にレンダリングすることは非常に危険です。）。 <code>element-loading-svg</code>のコンテンツが信頼できるものであることを確認してください。**ユーザーが送信したコンテンツを<code> element-loading-svg</code>属性に割り当てないでください。</p></div><h3 id=\"quan-hua-mian-dumi-ipmi\"><a class=\"header-anchor\" href=\"#quan-hua-mian-dumi-ipmi\">¶</a> 全画面読み込み</h3><p>データの読み込み中に全画面アニメーションを表示します。</p>", 3);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ディレクティブとして使われる場合、フルスクリーンの読み込みには "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fullscreen"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 修飾子が必要で、それがボディに追加されます。この場合、ボディ上でのスクロールを無効にしたい場合は、別の修飾子 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "lock"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を追加します。サービスとして利用される場合、Loadingはデフォルトで全画面表示になります。")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen1\"\n    v-loading.fullscreen.lock=\"fullscreenLoading\">\n    As a directive\n  </el-button>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen2\">\n    As a service\n  </el-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true;\n        setTimeout(() => {\n          this.fullscreenLoading = false;\n        }, 2000);\n      },\n      openFullScreen2() {\n        const loading = this.$loading({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)'\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElLoading } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      const fullscreenLoading = ref(false);\n      const openFullScreen1 = () => {\n        fullscreenLoading.value = true;\n        setTimeout(() => {\n          fullscreenLoading.value = false;\n        }, 2000);\n      };\n\n      const openFullScreen2 = () => {\n        const loading = ElLoading.service({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)',\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      };\n\n      return {\n        fullscreenLoading,\n        openFullScreen1,\n        openFullScreen2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"sabisu\"><a class=\"header-anchor\" href=\"#sabisu\">¶</a> サービス</h3><p>サービスで Loading を呼び出すこともできます。Loadingサービスをインポートします:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElLoading } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>呼び出す:</p><pre><code class=\"hljs language-javascript\">ElLoading.service(options);\n</code></pre><p>パラメータ <code>options</code> はLoadingの設定であり、その詳細は以下の表にある。LoadingService<code>はLoadingのインスタンスを返し、その</code>close` メソッドを呼び出すことでインスタンスを閉じることができる。:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance = ElLoading.service(options);\n<span class=\"hljs-built_in\">this</span>.$nextTick(<span class=\"hljs-function\">() =&gt;</span> { <span class=\"hljs-comment\">// Loading should be closed asynchronously</span>\n  loadingInstance.close();\n});\n</code></pre><p>フルスクリーン Loading はシングルトンであることに注意してください。既存のフルスクリーン Loading がクローズされる前に新しいフルスクリーン Loading が呼び出された場合、実際に別の Loading インスタンスを作成するのではなく、既存のフルスクリーン Loading インスタンスが返されます。:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance1 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> });\n<span class=\"hljs-keyword\">let</span> loadingInstance2 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> });\n<span class=\"hljs-built_in\">console</span>.log(loadingInstance1 === loadingInstance2); <span class=\"hljs-comment\">// true</span>\n</code></pre><p>これらのいずれかで<code>close</code> メソッドを呼び出すことで、このフルスクリーンの読み込みを閉じることができる。</p><p>Element Plusを完全にインポートしている場合は、Vue.prototypeにグローバルメソッド <code>$loading</code> が登録されます。このように呼び出すことができます。このメソッドは、<code>this.$loading(options)</code>のように呼び出すことができます。</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>コンポーネントがカバーしなければならない DOM ノード。DOM オブジェクトまたは文字列を受け付けます。文字列の場合は document.querySelector に渡され、対応する DOM ノードを取得します。</td><td>object/string</td><td>—</td><td>document.body</td></tr><tr><td>body</td><td><code>v-loading</code> の <code>body</code> 修飾子と同じです。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>fullscreen</td><td><code>v-loading</code> の <code>fullscreen</code> 修飾子と同じです。</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>lock</td><td><code>v-loading</code> の <code>lock</code> 修飾子と同じです。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text</td><td>スピナーの下に表示されるローディングテキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>spinner</td><td>カスタムスピナーのクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>background</td><td>マスクの背景色</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>ローディングのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 13);

function loadingvue_type_template_id_9b5b07d2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", loadingvue_type_template_id_9b5b07d2_hoisted_1, [loadingvue_type_template_id_9b5b07d2_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/loading.md?vue&type=template&id=9b5b07d2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/loading.md?vue&type=script&lang=ts


/* harmony default export */ var loadingvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveDirective = vue_esm_browser_prod["R" /* resolveDirective */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _withDirectives = vue_esm_browser_prod["gb" /* withDirectives */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createBlock("div", null, [_withDirectives(_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address"
            })];
          }),
          _: 1
        }, 8, ["data"]), [[_directive_loading, _ctx.loading]])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-04',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-01',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }],
            loading: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveDirective = vue_esm_browser_prod["R" /* resolveDirective */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _withDirectives = vue_esm_browser_prod["gb" /* withDirectives */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createBlock("div", null, [_withDirectives(_createVNode(_component_el_table, {
          "element-loading-text": "Loading...",
          "element-loading-spinner": "el-icon-loading",
          "element-loading-background": "rgba(0, 0, 0, 0.8)",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address"
            })];
          }),
          _: 1
        }, 8, ["data"]), [[_directive_loading, _ctx.loading]]), _withDirectives(_createVNode(_component_el_table, {
          "element-loading-svg": _ctx.svg,
          class: "custom-loading-svg",
          "element-loading-svg-view-box": "-10, -10, 50, 50",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address"
            })];
          }),
          _: 1
        }, 8, ["element-loading-svg", "data"]), [[_directive_loading, _ctx.loading]])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-04',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-01',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }],
            loading: true,
            svg: "\n          <path class=\"path\" d=\"\n            M 30 15\n            L 28 17\n            M 25.61 25.61\n            A 15 15, 0, 0, 1, 15 30\n            A 15 15, 0, 1, 1, 27.99 7.5\n            L 15 15\n          \" style=\"stroke-width: 4px; fill: rgba(0, 0, 0, 0)\"/>\n        "
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _resolveDirective = vue_esm_browser_prod["R" /* resolveDirective */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withDirectives = vue_esm_browser_prod["gb" /* withDirectives */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" As a directive ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" As a service ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createBlock("div", null, [_withDirectives(_createVNode(_component_el_button, {
          type: "primary",
          onClick: _ctx.openFullScreen1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), [[_directive_loading, _ctx.fullscreenLoading, void 0, {
          fullscreen: true,
          lock: true
        }]]), _createVNode(_component_el_button, {
          type: "primary",
          onClick: _ctx.openFullScreen2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fullscreenLoading: false
          };
        },
        methods: {
          openFullScreen1: function openFullScreen1() {
            var _this = this;

            this.fullscreenLoading = true;
            setTimeout(function () {
              _this.fullscreenLoading = false;
            }, 2000);
          },
          openFullScreen2: function openFullScreen2() {
            var loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(function () {
              loading.close();
            }, 2000);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/loading.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/loading.md



loadingvue_type_script_lang_ts.render = loadingvue_type_template_id_9b5b07d2_render

/* harmony default export */ var loading = __webpack_exports__["default"] = (loadingvue_type_script_lang_ts);

/***/ })

}]);