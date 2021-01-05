(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[158],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/loading.md?vue&type=template&id=2bcef312

var loadingvue_type_template_id_2bcef312_hoisted_1 = {
  class: "content element-doc"
};

var loadingvue_type_template_id_2bcef312_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "rodeingu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rodeingu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ローディング")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "データ読み込み中にアニメーションを表示する。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kontena-neidenorodeingu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kontena-neidenorodeingu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" コンテナ内でのローディング")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "データの読み込み中にコンテナ（テーブルなど）にアニメーションを表示します。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("要素にはローディングを呼び出すための2つの方法があります: ディレクティブとサービスです。カスタムディレクティブ "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" の場合は、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" の値をバインドするだけです。デフォルトでは、ローディングマスクはディレクティブが使われている要素に追加されます。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 修飾子を追加すると、マスクは body 要素に追加されます。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  body {\n    margin: 0;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        loading: true\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kasutamaizu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamaizu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" カスタマイズ")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ローディングテキスト、ローディングスピナー、背景色をカスタマイズすることができます。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" がバインドされている要素に "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を追加すると、その値がスピナの下に表示されるようになります。同様に、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-spinner"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-background"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" は、ローディングスピナのクラス名と背景色をカスタマイズするためのものです。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    element-loading-text=\"Loading...\"\n    element-loading-spinner=\"el-icon-loading\"\n    element-loading-background=\"rgba(0, 0, 0, 0.8)\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        loading: true\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "quan-hua-mian-dumi-ipmi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#quan-hua-mian-dumi-ipmi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 全画面読み込み")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "データの読み込み中に全画面アニメーションを表示します。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("ディレクティブとして使われる場合、フルスクリーンの読み込みには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "fullscreen"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 修飾子が必要で、それがボディに追加されます。この場合、ボディ上でのスクロールを無効にしたい場合は、別の修飾子 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lock"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を追加します。サービスとして利用される場合、Loadingはデフォルトで全画面表示になります。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen1\"\n    v-loading.fullscreen.lock=\"fullscreenLoading\">\n    As a directive\n  </el-button>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen2\">\n    As a service\n  </el-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true;\n        setTimeout(() => {\n          this.fullscreenLoading = false;\n        }, 2000);\n      },\n      openFullScreen2() {\n        const loading = this.$loading({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)'\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"sabisu\"><a class=\"header-anchor\" href=\"#sabisu\">¶</a> サービス</h3><p>サービスで Loading を呼び出すこともできます。Loadingサービスをインポートします:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElLoading } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>呼び出す:</p><pre><code class=\"hljs language-javascript\">ElLoading.service(options);\n</code></pre><p>パラメータ <code>options</code> はLoadingの設定であり、その詳細は以下の表にある。LoadingService<code>はLoadingのインスタンスを返し、その</code>close` メソッドを呼び出すことでインスタンスを閉じることができる。:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance = ElLoading.service(options);\n<span class=\"hljs-built_in\">this</span>.$nextTick(<span class=\"hljs-function\">() =&gt;</span> { <span class=\"hljs-comment\">// Loading should be closed asynchronously</span>\n  loadingInstance.close();\n});\n</code></pre><p>フルスクリーン Loading はシングルトンであることに注意してください。既存のフルスクリーン Loading がクローズされる前に新しいフルスクリーン Loading が呼び出された場合、実際に別の Loading インスタンスを作成するのではなく、既存のフルスクリーン Loading インスタンスが返されます。:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance1 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> });\n<span class=\"hljs-keyword\">let</span> loadingInstance2 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> });\n<span class=\"hljs-built_in\">console</span>.log(loadingInstance1 === loadingInstance2); <span class=\"hljs-comment\">// true</span>\n</code></pre><p>これらのいずれかで<code>close</code> メソッドを呼び出すことで、このフルスクリーンの読み込みを閉じることができる。</p><p>Element Plusを完全にインポートしている場合は、Vue.prototypeにグローバルメソッド <code>$loading</code> が登録されます。このように呼び出すことができます。このメソッドは、<code>this.$loading(options)</code>のように呼び出すことができます。</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>コンポーネントがカバーしなければならない DOM ノード。DOM オブジェクトまたは文字列を受け付けます。文字列の場合は document.querySelector に渡され、対応する DOM ノードを取得します。</td><td>object/string</td><td>—</td><td>document.body</td></tr><tr><td>body</td><td><code>v-loading</code> の <code>body</code> 修飾子と同じです。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>fullscreen</td><td><code>v-loading</code> の <code>fullscreen</code> 修飾子と同じです。</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>lock</td><td><code>v-loading</code> の <code>lock</code> 修飾子と同じです。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text</td><td>スピナーの下に表示されるローディングテキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>spinner</td><td>カスタムスピナーのクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>background</td><td>マスクの背景色</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>ローディングのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 13);

function loadingvue_type_template_id_2bcef312_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", loadingvue_type_template_id_2bcef312_hoisted_1, [loadingvue_type_template_id_2bcef312_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_16]);
}
// CONCATENATED MODULE: ./website/docs/jp/loading.md?vue&type=template&id=2bcef312

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/loading.md?vue&type=script&lang=ts


/* harmony default export */ var loadingvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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



loadingvue_type_script_lang_ts.render = loadingvue_type_template_id_2bcef312_render

/* harmony default export */ var loading = __webpack_exports__["default"] = (loadingvue_type_script_lang_ts);

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/loading.md?vue&type=template&id=2388b5dc

var loadingvue_type_template_id_2388b5dc_hoisted_1 = {
  class: "content element-doc"
};

var loadingvue_type_template_id_2388b5dc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "loading"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#loading"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Loading")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Affiche une animation durant le chargement de données.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "loading-dans-un-conteneur"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#loading-dans-un-conteneur"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Loading dans un conteneur")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Affiche une animation dans un conteneur (Comme un tableau par exemple) pendant le chargement des données.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Element Plus fournit deux moyens d'invoquer Loading: la directive et le service. Pour la directive "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", attachez simplement un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Par défaut le masque sera ajouté à l'élément contenant la directive. Ajoutez le modificateur "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour ajouter le masque à l'élément body.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nom\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Adresse\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  body {\n    margin: 0;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        loading: true\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "personnalisation"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#personnalisation"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Personnalisation")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez personnaliser le texte, le spinner et la couleur de fond.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Ajoutez l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" à l'élement sur lequel "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" est attaché et sa valeur sera affichée sous le spinner. De la même façon, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-spinner"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-background"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" permettent de personnaliser le spinner et la couleur de fond.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    element-loading-text=\"Loading...\"\n    element-loading-spinner=\"el-icon-loading\"\n    element-loading-background=\"rgba(0, 0, 0, 0.8)\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nom\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Adresse\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        loading: true\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "chargement-plein-ecran"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chargement-plein-ecran"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Chargement plein écran")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Affichez une animation en plein écran quand vous charger des données.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Quand il est utilisé comme une directive, un Loading plein écran nécessite le modificateur "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "fullscreen"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" qui sera ajouté au body. Dans ce cas, si vous souhaitez désactiver le défilement du body, vous pouvez ajouter le modificateur "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lock"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Quand il est utilisé comme service, Loading est en plein écran par défaut.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen1\"\n    v-loading.fullscreen.lock=\"fullscreenLoading\">\n    Comme directive\n  </el-button>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen2\">\n    Comme service\n  </el-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true;\n        setTimeout(() => {\n          this.fullscreenLoading = false;\n        }, 2000);\n      },\n      openFullScreen2() {\n        const loading = this.$loading({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)'\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"service\"><a class=\"header-anchor\" href=\"#service\">¶</a> Service</h3><p>Vous pouvez invoquer Loading comme un service. Importez le service Loading:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElLoading } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>Et invoquer-le:</p><pre><code class=\"hljs language-javascript\">ElLoading.service(options);\n</code></pre><p>Le paramètre <code>options</code> correspond à la configuration de Loading (voir table suivante). <code>LoadingService</code> retourne une instance de Loading, que vous pouvez fermer en appelant la méthode <code>close</code>:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance = ElLoading.service(options);\n<span class=\"hljs-built_in\">this</span>.$nextTick(<span class=\"hljs-function\">() =&gt;</span> { <span class=\"hljs-comment\">// Loading should be closed asynchronously</span>\n  loadingInstance.close();\n});\n</code></pre><p>Notez que dans ce cas le Loading plein écran est un singleton. Si un nouveau Loading plein écran est invoqué avant la fermeture du précédent, celui-ci sera retourné au lieu d&#39;en créer un nouveau:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance1 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> });\n<span class=\"hljs-keyword\">let</span> loadingInstance2 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> });\n<span class=\"hljs-built_in\">console</span>.log(loadingInstance1 === loadingInstance2); <span class=\"hljs-comment\">// true</span>\n</code></pre><p>Appeler la méthode <code>close</code> sur n&#39;importe lequel des deux fermera le Loading.</p><p>Si Element Plus est importé en entier, une méthode globale <code>$loading</code> sera ajoutée à <code>app.config.globalProperties</code>. Vous pourrez l&#39;invoquer comme ceci: <code>this.$loading(options)</code> et elle retournera une instance Loading.</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>target</td><td>L&#39;élément du DOM a couvrir. Accepte un objet DOM ou un string. Si c&#39;est un string, il sera passé à <code>document.querySelector</code> Pour avoir l&#39;élément du DOM correspondant.</td><td>object/string</td><td>—</td><td>document.body</td></tr><tr><td>body</td><td>Identique au modificateur <code>body</code> de <code>v-loading</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>fullscreen</td><td>Identique au modificateur <code>fullscreen</code> de <code>v-loading</code>.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>lock</td><td>Identique au modificateur <code>lock</code> de <code>v-loading</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text</td><td>Texte a afficher sous le spinner.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>spinner</td><td>Classe du spinner.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>background</td><td>Couleur de fond du masque.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>Classe du Loading.</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 13);

function loadingvue_type_template_id_2388b5dc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", loadingvue_type_template_id_2388b5dc_hoisted_1, [loadingvue_type_template_id_2388b5dc_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_16]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/loading.md?vue&type=template&id=2388b5dc

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/loading.md?vue&type=script&lang=ts


/* harmony default export */ var loadingvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
              label: "Nom",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Adresse"
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
              label: "Nom",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Adresse"
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
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Comme directive ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Comme service ");

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
// CONCATENATED MODULE: ./website/docs/fr-FR/loading.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/loading.md



loadingvue_type_script_lang_ts.render = loadingvue_type_template_id_2388b5dc_render

/* harmony default export */ var loading = __webpack_exports__["default"] = (loadingvue_type_script_lang_ts);

/***/ })

}]);