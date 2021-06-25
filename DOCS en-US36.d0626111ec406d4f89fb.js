(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/loading.md?vue&type=template&id=453afc1c

var loadingvue_type_template_id_453afc1c_hoisted_1 = {
  class: "content element-doc"
};

var loadingvue_type_template_id_453afc1c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "loading"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#loading"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Loading")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Show animation while loading data.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "loading-inside-a-container"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#loading-inside-a-container"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Loading inside a container")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Displays animation in a container (such as a table) while loading data.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Element Plus provides two ways to invoke Loading: directive and service. For the custom directive "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", you just need to bind a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" value to it. By default, the loading mask will append to the element where the directive is used. Adding the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" modifier makes the mask append to the body element.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  body {\n    margin: 0;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        loading: true\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      tableData: [\n        {\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n      ],\n      loading: true,\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "customization"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#customization"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Customization")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can customize loading text, loading spinner and background color.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Add attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to the element on which "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is bound, and its value will be displayed under the spinner. Similarly, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-spinner"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-background"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" are for customizing loading spinner class name and background color.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    element-loading-text=\"Loading...\"\n    element-loading-spinner=\"el-icon-loading\"\n    element-loading-background=\"rgba(0, 0, 0, 0.8)\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        loading: true\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      tableData: [\n        {\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n      ],\n      loading: true,\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "full-screen-loading"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#full-screen-loading"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Full screen loading")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Show a full screen animation while loading data.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("When used as a directive, a full screen Loading requires the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "fullscreen"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" modifier, and it will be appended to body. In this case, if you wish to disable scrolling on body, you can add another modifier "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lock"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". When used as a service, Loading will be full screen by default.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen1\"\n    v-loading.fullscreen.lock=\"fullscreenLoading\">\n    As a directive\n  </el-button>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen2\">\n    As a service\n  </el-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true;\n        setTimeout(() => {\n          this.fullscreenLoading = false;\n        }, 2000);\n      },\n      openFullScreen2() {\n        const loading = this.$loading({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)'\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElLoading } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      const fullscreenLoading = ref(false);\n      const openFullScreen1 = () => {\n        fullscreenLoading.value = true;\n        setTimeout(() => {\n          fullscreenLoading.value = false;\n        }, 2000);\n      };\n\n      const openFullScreen2 = () => {\n        const loading = ElLoading.service({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)',\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      };\n\n      return {\n        fullscreenLoading,\n        openFullScreen1,\n        openFullScreen2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"service\"><a class=\"header-anchor\" href=\"#service\">¶</a> Service</h3><p>You can also invoke Loading with a service. Import Loading service:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElLoading } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>Invoke it:</p><pre><code class=\"hljs language-javascript\">ElLoading.service(options);\n</code></pre><p>The parameter <code>options</code> is the configuration of Loading, and its details can be found in the following table. <code>LoadingService</code> returns a Loading instance, and you can close it by invoking its <code>close</code> method:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance = ElLoading.service(options);\n<span class=\"hljs-built_in\">this</span>.$nextTick(<span class=\"hljs-function\">() =&gt;</span> { <span class=\"hljs-comment\">// Loading should be closed asynchronously</span>\n  loadingInstance.close();\n});\n</code></pre><p>Note that in this case the full screen Loading is singleton. If a new full screen Loading is invoked before an existing one is closed, the existing full screen Loading instance will be returned instead of actually creating another Loading instance:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance1 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> });\n<span class=\"hljs-keyword\">let</span> loadingInstance2 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> });\n<span class=\"hljs-built_in\">console</span>.log(loadingInstance1 === loadingInstance2); <span class=\"hljs-comment\">// true</span>\n</code></pre><p>Calling the <code>close</code> method on any one of them can close this full screen Loading.</p><p>If Element Plus is imported entirely, a globally method <code>$loading</code> will be registered to <code>app.config.globalProperties</code>. You can invoke it like this: <code>this.$loading(options)</code>, and it also returns a Loading instance.</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>the DOM node Loading needs to cover. Accepts a DOM object or a string. If it&#39;s a string, it will be passed to <code>document.querySelector</code> to get the corresponding DOM node</td><td>object/string</td><td>—</td><td>document.body</td></tr><tr><td>body</td><td>same as the <code>body</code> modifier of <code>v-loading</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>fullscreen</td><td>same as the <code>fullscreen</code> modifier of <code>v-loading</code></td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>lock</td><td>same as the <code>lock</code> modifier of <code>v-loading</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text</td><td>loading text that displays under the spinner</td><td>string</td><td>—</td><td>—</td></tr><tr><td>spinner</td><td>class name of the custom spinner</td><td>string</td><td>—</td><td>—</td></tr><tr><td>background</td><td>background color of the mask</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>custom class name for Loading</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"directives\"><a class=\"header-anchor\" href=\"#directives\">¶</a> Directives</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>v-loading</td><td>show animation while loading data</td><td>boolean</td></tr><tr><td>element-loading-text</td><td>loading text that displays under the spinner</td><td>string</td></tr><tr><td>element-loading-spinner</td><td>class name of the custom spinner</td><td>string</td></tr><tr><td>element-loading-background</td><td>background color of the mask</td><td>string</td></tr></tbody></table>", 15);

function loadingvue_type_template_id_453afc1c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", loadingvue_type_template_id_453afc1c_hoisted_1, [loadingvue_type_template_id_453afc1c_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/loading.md?vue&type=template&id=453afc1c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/loading.md?vue&type=script&lang=ts


/* harmony default export */ var loadingvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _withDirectives = vue_esm_browser["fb" /* withDirectives */],
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _withDirectives = vue_esm_browser["fb" /* withDirectives */],
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withDirectives = vue_esm_browser["fb" /* withDirectives */],
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
// CONCATENATED MODULE: ./website/docs/en-US/loading.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/loading.md



loadingvue_type_script_lang_ts.render = loadingvue_type_template_id_453afc1c_render

/* harmony default export */ var loading = __webpack_exports__["default"] = (loadingvue_type_script_lang_ts);

/***/ })

}]);