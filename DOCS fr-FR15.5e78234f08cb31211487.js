(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/container.md?vue&type=template&id=5e88ff19

var containervue_type_template_id_5e88ff19_hoisted_1 = {
  class: "content element-doc"
};

var containervue_type_template_id_5e88ff19_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"kontena\"><a class=\"header-anchor\" href=\"#kontena\">¶</a> コンテナ</h2><p>ページの基本構造を組み立てるためのコンテナコンポーネント:</p><p><code>&lt;el-container&gt;</code>: ラッパーコンテナ。<code>&lt;el-header&gt;</code> や <code>&lt;el-footer&gt;</code> と入れ子になっている場合、その子要素はすべて垂直方向に配置されます。それ以外の場合は水平に配置されます。</p><p><code>&lt;el-header&gt;</code>: ヘッダ用のコンテナ。</p><p><code>&lt;el-aside&gt;</code>: サイドセクションのコンテナ (通常はサイドナビ)。</p><p><code>&lt;el-main&gt;</code>: メインセクションのコンテナ。</p><p><code>&lt;el-footer&gt;</code>: フッター用のコンテナ。</p><div class=\"tip\"><p>これらのコンポーネントはレイアウトにフレックスを使用していますので、ブラウザがフレックスをサポートしていることを確認してください。また、<code>&lt;el-container&gt;</code>の直接の子要素は<code>el-container</code> 以下の4つのコンポーネントのうちの1つ以上でなければなりません。また、4つの要素の親要素は <code>&lt;el-container&gt;</code> でなければなりません。</p></div><h3 id=\"gong-tongreiauto\"><a class=\"header-anchor\" href=\"#gong-tongreiauto\">¶</a> 共通レイアウト</h3>", 9);

var containervue_type_template_id_5e88ff19_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-container>\n  <el-header>Header</el-header>\n  <el-main>Main</el-main>\n</el-container>\n\n<el-container>\n  <el-header>Header</el-header>\n  <el-main>Main</el-main>\n  <el-footer>Footer</el-footer>\n</el-container>\n\n<el-container>\n  <el-aside width=\"200px\">Aside</el-aside>\n  <el-main>Main</el-main>\n</el-container>\n\n<el-container>\n  <el-header>Header</el-header>\n  <el-container>\n    <el-aside width=\"200px\">Aside</el-aside>\n    <el-main>Main</el-main>\n  </el-container>\n</el-container>\n\n<el-container>\n  <el-header>Header</el-header>\n  <el-container>\n    <el-aside width=\"200px\">Aside</el-aside>\n    <el-container>\n      <el-main>Main</el-main>\n      <el-footer>Footer</el-footer>\n    </el-container>\n  </el-container>\n</el-container>\n\n<el-container>\n  <el-aside width=\"200px\">Aside</el-aside>\n  <el-container>\n    <el-header>Header</el-header>\n    <el-main>Main</el-main>\n  </el-container>\n</el-container>\n\n<el-container>\n  <el-aside width=\"200px\">Aside</el-aside>\n  <el-container>\n    <el-header>Header</el-header>\n    <el-main>Main</el-main>\n    <el-footer>Footer</el-footer>\n  </el-container>\n</el-container>\n\n<style>\n  .el-header, .el-footer {\n    background-color: #B3C0D1;\n    color: #333;\n    text-align: center;\n    line-height: 60px;\n  }\n  \n  .el-aside {\n    background-color: #D3DCE6;\n    color: #333;\n    text-align: center;\n    line-height: 200px;\n  }\n  \n  .el-main {\n    background-color: #E9EEF3;\n    color: #333;\n    text-align: center;\n    line-height: 160px;\n  }\n  \n  body > .el-container {\n    margin-bottom: 40px;\n  }\n  \n  .el-container:nth-child(5) .el-aside,\n  .el-container:nth-child(6) .el-aside {\n    line-height: 260px;\n  }\n  \n  .el-container:nth-child(7) .el-aside {\n    line-height: 320px;\n  }\n</style>\n")], -1);

var containervue_type_template_id_5e88ff19_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "li"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#li"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 例")], -1);

var containervue_type_template_id_5e88ff19_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-container style=\"height: 500px; border: 1px solid #eee\">\n  <el-aside width=\"200px\" style=\"background-color: rgb(238, 241, 246)\">\n    <el-menu :default-openeds=\"['1', '3']\">\n      <el-submenu index=\"1\">\n        <template #title><i class=\"el-icon-message\"></i>Navigator One</template>\n        <el-menu-item-group>\n          <template #title>Group 1</template>\n          <el-menu-item index=\"1-1\">Option 1</el-menu-item>\n          <el-menu-item index=\"1-2\">Option 2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group 2\">\n          <el-menu-item index=\"1-3\">Option 3</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>Option4</template>\n          <el-menu-item index=\"1-4-1\">Option 4-1</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-submenu index=\"2\">\n        <template #title><i class=\"el-icon-menu\"></i>Navigator Two</template>\n        <el-menu-item-group>\n          <template #title>Group 1</template>\n          <el-menu-item index=\"2-1\">Option 1</el-menu-item>\n          <el-menu-item index=\"2-2\">Option 2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group 2\">\n          <el-menu-item index=\"2-3\">Option 3</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"2-4\">\n          <template #title>Option 4</template>\n          <el-menu-item index=\"2-4-1\">Option 4-1</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-submenu index=\"3\">\n        <template #title><i class=\"el-icon-setting\"></i>Navigator Three</template>\n        <el-menu-item-group>\n          <template #title>Group 1</template>\n          <el-menu-item index=\"3-1\">Option 1</el-menu-item>\n          <el-menu-item index=\"3-2\">Option 2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group 2\">\n          <el-menu-item index=\"3-3\">Option 3</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"3-4\">\n          <template #title>Option 4</template>\n          <el-menu-item index=\"3-4-1\">Option 4-1</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n    </el-menu>\n  </el-aside>\n  \n  <el-container>\n    <el-header style=\"text-align: right; font-size: 12px\">\n      <el-dropdown>\n        <i class=\"el-icon-setting\" style=\"margin-right: 15px\"></i>\n        <template #dropdown>\n          <el-dropdown-menu>\n              <el-dropdown-item>View</el-dropdown-item>\n              <el-dropdown-item>Add</el-dropdown-item>\n              <el-dropdown-item>Delete</el-dropdown-item>\n          </el-dropdown-menu>\n        </template>\n      </el-dropdown>\n      <span>Tom</span>\n    </el-header>\n    \n    <el-main>\n      <el-table :data=\"tableData\">\n        <el-table-column prop=\"date\" label=\"Date\" width=\"140\">\n        </el-table-column>\n        <el-table-column prop=\"name\" label=\"Name\" width=\"120\">\n        </el-table-column>\n        <el-table-column prop=\"address\" label=\"Address\">\n        </el-table-column>\n      </el-table>\n    </el-main>\n  </el-container>\n</el-container>\n\n<style>\n  .el-header {\n    background-color: #B3C0D1;\n    color: #333;\n    line-height: 60px;\n  }\n  \n  .el-aside {\n    color: #333;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      const item = {\n        date: '2016-05-02',\n        name: 'Tom',\n        address: 'No. 189, Grove St, Los Angeles'\n      };\n      return {\n        tableData: Array(20).fill(item)\n      }\n    }\n  };\n</script>\n")], -1);

var containervue_type_template_id_5e88ff19_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"kontena-shu-xing\"><a class=\"header-anchor\" href=\"#kontena-shu-xing\">¶</a> コンテナ属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>direction</td><td>子要素のレイアウト方向</td><td>string</td><td>horizontal / vertical</td><td>vertical when nested with <code>el-header</code> or <code>el-footer</code>; horizontal otherwise</td></tr></tbody></table><h3 id=\"hetuda-shu-xing\"><a class=\"header-anchor\" href=\"#hetuda-shu-xing\">¶</a> ヘッダー属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>height</td><td>ヘッダーの高さ</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table><h3 id=\"asaido-shu-xing\"><a class=\"header-anchor\" href=\"#asaido-shu-xing\">¶</a> アサイド属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>width</td><td>サイドセクションの幅</td><td>string</td><td>—</td><td>300px</td></tr></tbody></table><h3 id=\"hututa-shu-xing\"><a class=\"header-anchor\" href=\"#hututa-shu-xing\">¶</a> フッター属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>height</td><td>フッターの高さ</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table>", 8);

function containervue_type_template_id_5e88ff19_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", containervue_type_template_id_5e88ff19_hoisted_1, [containervue_type_template_id_5e88ff19_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [containervue_type_template_id_5e88ff19_hoisted_11];
    }),
    _: 1
  }), containervue_type_template_id_5e88ff19_hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [containervue_type_template_id_5e88ff19_hoisted_13];
    }),
    _: 1
  }), containervue_type_template_id_5e88ff19_hoisted_14]);
}
// CONCATENATED MODULE: ./website/docs/jp/container.md?vue&type=template&id=5e88ff19

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/container.md?vue&type=script&lang=ts


/* harmony default export */ var containervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Footer");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Aside");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Aside");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Aside");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Footer");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("Aside");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Aside");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("Footer");

      function render(_ctx, _cache) {
        var _component_el_header = _resolveComponent("el-header");

        var _component_el_main = _resolveComponent("el-main");

        var _component_el_container = _resolveComponent("el-container");

        var _component_el_footer = _resolveComponent("el-footer");

        var _component_el_aside = _resolveComponent("el-aside");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_header, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_header, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_footer, null, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_aside, {
              width: "200px"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_header, null, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_aside, {
                  width: "200px"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_main, null, {
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
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_header, null, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_aside, {
                  width: "200px"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_container, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_main, null, {
                      default: _withCtx(function () {
                        return [_hoisted_13];
                      }),
                      _: 1
                    }), _createVNode(_component_el_footer, null, {
                      default: _withCtx(function () {
                        return [_hoisted_14];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_aside, {
              width: "200px"
            }, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_header, null, {
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                }), _createVNode(_component_el_main, null, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_aside, {
              width: "200px"
            }, {
              default: _withCtx(function () {
                return [_hoisted_18];
              }),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_header, null, {
                  default: _withCtx(function () {
                    return [_hoisted_19];
                  }),
                  _: 1
                }), _createVNode(_component_el_main, null, {
                  default: _withCtx(function () {
                    return [_hoisted_20];
                  }),
                  _: 1
                }), _createVNode(_component_el_footer, null, {
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-message"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Navigator One");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Group 1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Option 1");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Option 2");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Option 3");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Option4");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Option 4-1");

      var _hoisted_9 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Navigator Two");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Group 1");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Option 1");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Option 2");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Option 3");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("Option 4");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("Option 4-1");

      var _hoisted_17 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Navigator Three");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Group 1");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Option 1");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("Option 2");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("Option 3");

      var _hoisted_23 = /*#__PURE__*/_createTextVNode("Option 4");

      var _hoisted_24 = /*#__PURE__*/_createTextVNode("Option 4-1");

      var _hoisted_25 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting",
        style: {
          "margin-right": "15px"
        }
      }, null, -1);

      var _hoisted_26 = /*#__PURE__*/_createTextVNode("View");

      var _hoisted_27 = /*#__PURE__*/_createTextVNode("Add");

      var _hoisted_28 = /*#__PURE__*/_createTextVNode("Delete");

      var _hoisted_29 = /*#__PURE__*/_createVNode("span", null, "Tom", -1);

      function render(_ctx, _cache) {
        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        var _component_el_aside = _resolveComponent("el-aside");

        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        var _component_el_header = _resolveComponent("el-header");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_main = _resolveComponent("el-main");

        var _component_el_container = _resolveComponent("el-container");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_container, {
          style: {
            "height": "500px",
            "border": "1px solid #eee"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_aside, {
              width: "200px",
              style: {
                "background-color": "rgb(238, 241, 246)"
              }
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu, {
                  "default-openeds": ['1', '3']
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_1, _hoisted_2];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, null, {
                          title: _withCtx(function () {
                            return [_hoisted_3];
                          }),
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
                          title: "Group 2"
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
                    }), _createVNode(_component_el_submenu, {
                      index: "2"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_9, _hoisted_10];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, null, {
                          title: _withCtx(function () {
                            return [_hoisted_11];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "2-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_12];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "2-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_13];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group 2"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "2-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_14];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "2-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_15];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "2-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_16];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_el_submenu, {
                      index: "3"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_17, _hoisted_18];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, null, {
                          title: _withCtx(function () {
                            return [_hoisted_19];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "3-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_20];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "3-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_21];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group 2"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "3-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_22];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "3-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_23];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "3-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_24];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_header, {
                  style: {
                    "text-align": "right",
                    "font-size": "12px"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown, null, {
                      dropdown: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_menu, null, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_dropdown_item, null, {
                              default: _withCtx(function () {
                                return [_hoisted_26];
                              }),
                              _: 1
                            }), _createVNode(_component_el_dropdown_item, null, {
                              default: _withCtx(function () {
                                return [_hoisted_27];
                              }),
                              _: 1
                            }), _createVNode(_component_el_dropdown_item, null, {
                              default: _withCtx(function () {
                                return [_hoisted_28];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      default: _withCtx(function () {
                        return [_hoisted_25];
                      }),
                      _: 1
                    }), _hoisted_29];
                  }),
                  _: 1
                }), _createVNode(_component_el_main, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_table, {
                      data: _ctx.tableData
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_table_column, {
                          prop: "date",
                          label: "Date",
                          width: "140"
                        }), _createVNode(_component_el_table_column, {
                          prop: "name",
                          label: "Name",
                          width: "120"
                        }), _createVNode(_component_el_table_column, {
                          prop: "address",
                          label: "Address"
                        })];
                      }),
                      _: 1
                    }, 8, ["data"])];
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

      var democomponentExport = {
        data: function data() {
          var item = {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          };
          return {
            tableData: Array(20).fill(item)
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/container.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/container.md



containervue_type_script_lang_ts.render = containervue_type_template_id_5e88ff19_render

/* harmony default export */ var container = __webpack_exports__["default"] = (containervue_type_script_lang_ts);

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/container.md?vue&type=template&id=67c3569e

var containervue_type_template_id_67c3569e_hoisted_1 = {
  class: "content element-doc"
};

var containervue_type_template_id_67c3569e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"container\"><a class=\"header-anchor\" href=\"#container\">¶</a> Container</h2><p>Les composants Container servent à structurer la page:</p><p><code>&lt;el-container&gt;</code>: Conteneur de wrapping. Quand il est placé à l&#39;intérieur de <code>&lt;el-header&gt;</code> ou <code>&lt;el-footer&gt;</code>, tous les éléments enfants seront placés verticalement. Dans le cas contraire ils seront placés horizontalement.</p><p><code>&lt;el-header&gt;</code>: Conteneur pour headers.</p><p><code>&lt;el-aside&gt;</code>: Conteneur pour section latérale (en général un menu).</p><p><code>&lt;el-main&gt;</code>: Conteneur pour la section principal.</p><p><code>&lt;el-footer&gt;</code>: Conteneur pour footers.</p><div class=\"tip\"><p>Ces composants utilisent flexbox, assurez vous que le navigateur supporte cette fonctionnalité. De plus, les éléments enfants directs de <code>&lt;el-container&gt;</code> doivent être un des quatre éléments précédents, leur élément père devant obligatoirement être <code>&lt;el-container&gt;</code>.</p></div><h3 id=\"mises-en-page-habituelles\"><a class=\"header-anchor\" href=\"#mises-en-page-habituelles\">¶</a> Mises en page habituelles</h3>", 9);

var containervue_type_template_id_67c3569e_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-container>\n  <el-header>Header</el-header>\n  <el-main>Main</el-main>\n</el-container>\n\n<el-container>\n  <el-header>Header</el-header>\n  <el-main>Main</el-main>\n  <el-footer>Footer</el-footer>\n</el-container>\n\n<el-container>\n  <el-aside width=\"200px\">Aside</el-aside>\n  <el-main>Main</el-main>\n</el-container>\n\n<el-container>\n  <el-header>Header</el-header>\n  <el-container>\n    <el-aside width=\"200px\">Aside</el-aside>\n    <el-main>Main</el-main>\n  </el-container>\n</el-container>\n\n<el-container>\n  <el-header>Header</el-header>\n  <el-container>\n    <el-aside width=\"200px\">Aside</el-aside>\n    <el-container>\n      <el-main>Main</el-main>\n      <el-footer>Footer</el-footer>\n    </el-container>\n  </el-container>\n</el-container>\n\n<el-container>\n  <el-aside width=\"200px\">Aside</el-aside>\n  <el-container>\n    <el-header>Header</el-header>\n    <el-main>Main</el-main>\n  </el-container>\n</el-container>\n\n<el-container>\n  <el-aside width=\"200px\">Aside</el-aside>\n  <el-container>\n    <el-header>Header</el-header>\n    <el-main>Main</el-main>\n    <el-footer>Footer</el-footer>\n  </el-container>\n</el-container>\n\n<style>\n  .el-header, .el-footer {\n    background-color: #B3C0D1;\n    color: #333;\n    text-align: center;\n    line-height: 60px;\n  }\n\n  .el-aside {\n    background-color: #D3DCE6;\n    color: #333;\n    text-align: center;\n    line-height: 200px;\n  }\n\n  .el-main {\n    background-color: #E9EEF3;\n    color: #333;\n    text-align: center;\n    line-height: 160px;\n  }\n\n  body > .el-container {\n    margin-bottom: 40px;\n  }\n\n  .el-container:nth-child(5) .el-aside,\n  .el-container:nth-child(6) .el-aside {\n    line-height: 260px;\n  }\n\n  .el-container:nth-child(7) .el-aside {\n    line-height: 320px;\n  }\n</style>\n")], -1);

var containervue_type_template_id_67c3569e_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "exemple"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#exemple"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Exemple")], -1);

var containervue_type_template_id_67c3569e_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-container style=\"height: 500px; border: 1px solid #eee\">\n  <el-aside width=\"200px\" style=\"background-color: rgb(238, 241, 246)\">\n    <el-menu :default-openeds=\"['1', '3']\">\n      <el-submenu index=\"1\">\n        <template #title><i class=\"el-icon-message\"></i>Navigator One</template>\n        <el-menu-item-group>\n          <template #title>Group 1</template>\n          <el-menu-item index=\"1-1\">Option 1</el-menu-item>\n          <el-menu-item index=\"1-2\">Option 2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group 2\">\n          <el-menu-item index=\"1-3\">Option 3</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>Option4</template>\n          <el-menu-item index=\"1-4-1\">Option 4-1</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-submenu index=\"2\">\n        <template #title><i class=\"el-icon-menu\"></i>Navigator Two</template>\n        <el-menu-item-group>\n          <template #title>Group 1</template>\n          <el-menu-item index=\"2-1\">Option 1</el-menu-item>\n          <el-menu-item index=\"2-2\">Option 2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group 2\">\n          <el-menu-item index=\"2-3\">Option 3</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"2-4\">\n          <template #title>Option 4</template>\n          <el-menu-item index=\"2-4-1\">Option 4-1</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-submenu index=\"3\">\n        <template #title><i class=\"el-icon-setting\"></i>Navigator Three</template>\n        <el-menu-item-group>\n          <template #title>Group 1</template>\n          <el-menu-item index=\"3-1\">Option 1</el-menu-item>\n          <el-menu-item index=\"3-2\">Option 2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group 2\">\n          <el-menu-item index=\"3-3\">Option 3</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"3-4\">\n          <template #title>Option 4</template>\n          <el-menu-item index=\"3-4-1\">Option 4-1</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n    </el-menu>\n  </el-aside>\n\n  <el-container>\n    <el-header style=\"text-align: right; font-size: 12px\">\n      <el-dropdown>\n        <i class=\"el-icon-setting\" style=\"margin-right: 15px\"></i>\n        <template #dropdown>\n          <el-dropdown-menu>\n              <el-dropdown-item>View</el-dropdown-item>\n              <el-dropdown-item>Add</el-dropdown-item>\n              <el-dropdown-item>Delete</el-dropdown-item>\n          </el-dropdown-menu>\n        </template>\n      </el-dropdown>\n      <span>Tom</span>\n    </el-header>\n\n    <el-main>\n      <el-table :data=\"tableData\">\n        <el-table-column prop=\"date\" label=\"Date\" width=\"140\">\n        </el-table-column>\n        <el-table-column prop=\"name\" label=\"Name\" width=\"120\">\n        </el-table-column>\n        <el-table-column prop=\"address\" label=\"Address\">\n        </el-table-column>\n      </el-table>\n    </el-main>\n  </el-container>\n</el-container>\n\n<style>\n  .el-header {\n    background-color: #B3C0D1;\n    color: #333;\n    line-height: 60px;\n  }\n\n  .el-aside {\n    color: #333;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      const item = {\n        date: '2016-05-02',\n        name: 'Tom',\n        address: 'No. 189, Grove St, Los Angeles'\n      };\n      return {\n        tableData: Array(20).fill(item)\n      }\n    }\n  };\n</script>\n")], -1);

var containervue_type_template_id_67c3569e_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs-de-container\"><a class=\"header-anchor\" href=\"#attributs-de-container\">¶</a> Attributs de Container</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>direction</td><td>Direction d&#39;affichage pour les éléments enfants.</td><td>string</td><td>horizontal / vertical</td><td>vertical quand dans <code>el-header</code> ou <code>el-footer</code>; horizontal sinon</td></tr></tbody></table><h3 id=\"attributs-de-header\"><a class=\"header-anchor\" href=\"#attributs-de-header\">¶</a> Attributs de Header</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>height</td><td>Hauteur du header.</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table><h3 id=\"attributs-de-aside\"><a class=\"header-anchor\" href=\"#attributs-de-aside\">¶</a> Attributs de Aside</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>width</td><td>Largeur de la section.</td><td>string</td><td>—</td><td>300px</td></tr></tbody></table><h3 id=\"attributs-de-footer\"><a class=\"header-anchor\" href=\"#attributs-de-footer\">¶</a> Attributs de Footer</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>height</td><td>Hauteur du footer.</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table>", 8);

function containervue_type_template_id_67c3569e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", containervue_type_template_id_67c3569e_hoisted_1, [containervue_type_template_id_67c3569e_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [containervue_type_template_id_67c3569e_hoisted_11];
    }),
    _: 1
  }), containervue_type_template_id_67c3569e_hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [containervue_type_template_id_67c3569e_hoisted_13];
    }),
    _: 1
  }), containervue_type_template_id_67c3569e_hoisted_14]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/container.md?vue&type=template&id=67c3569e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/container.md?vue&type=script&lang=ts


/* harmony default export */ var containervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Footer");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Aside");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Aside");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Aside");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Footer");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("Aside");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Aside");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Header");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Main");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("Footer");

      function render(_ctx, _cache) {
        var _component_el_header = _resolveComponent("el-header");

        var _component_el_main = _resolveComponent("el-main");

        var _component_el_container = _resolveComponent("el-container");

        var _component_el_footer = _resolveComponent("el-footer");

        var _component_el_aside = _resolveComponent("el-aside");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_header, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_header, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_footer, null, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_aside, {
              width: "200px"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_header, null, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_aside, {
                  width: "200px"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_main, null, {
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
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_header, null, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_aside, {
                  width: "200px"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_container, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_main, null, {
                      default: _withCtx(function () {
                        return [_hoisted_13];
                      }),
                      _: 1
                    }), _createVNode(_component_el_footer, null, {
                      default: _withCtx(function () {
                        return [_hoisted_14];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_aside, {
              width: "200px"
            }, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_header, null, {
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                }), _createVNode(_component_el_main, null, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_aside, {
              width: "200px"
            }, {
              default: _withCtx(function () {
                return [_hoisted_18];
              }),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_header, null, {
                  default: _withCtx(function () {
                    return [_hoisted_19];
                  }),
                  _: 1
                }), _createVNode(_component_el_main, null, {
                  default: _withCtx(function () {
                    return [_hoisted_20];
                  }),
                  _: 1
                }), _createVNode(_component_el_footer, null, {
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-message"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Navigator One");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Group 1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Option 1");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Option 2");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Option 3");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Option4");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Option 4-1");

      var _hoisted_9 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Navigator Two");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Group 1");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Option 1");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Option 2");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Option 3");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("Option 4");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("Option 4-1");

      var _hoisted_17 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Navigator Three");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Group 1");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Option 1");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("Option 2");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("Option 3");

      var _hoisted_23 = /*#__PURE__*/_createTextVNode("Option 4");

      var _hoisted_24 = /*#__PURE__*/_createTextVNode("Option 4-1");

      var _hoisted_25 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting",
        style: {
          "margin-right": "15px"
        }
      }, null, -1);

      var _hoisted_26 = /*#__PURE__*/_createTextVNode("View");

      var _hoisted_27 = /*#__PURE__*/_createTextVNode("Add");

      var _hoisted_28 = /*#__PURE__*/_createTextVNode("Delete");

      var _hoisted_29 = /*#__PURE__*/_createVNode("span", null, "Tom", -1);

      function render(_ctx, _cache) {
        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        var _component_el_aside = _resolveComponent("el-aside");

        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        var _component_el_header = _resolveComponent("el-header");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_main = _resolveComponent("el-main");

        var _component_el_container = _resolveComponent("el-container");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_container, {
          style: {
            "height": "500px",
            "border": "1px solid #eee"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_aside, {
              width: "200px",
              style: {
                "background-color": "rgb(238, 241, 246)"
              }
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu, {
                  "default-openeds": ['1', '3']
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_1, _hoisted_2];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, null, {
                          title: _withCtx(function () {
                            return [_hoisted_3];
                          }),
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
                          title: "Group 2"
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
                    }), _createVNode(_component_el_submenu, {
                      index: "2"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_9, _hoisted_10];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, null, {
                          title: _withCtx(function () {
                            return [_hoisted_11];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "2-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_12];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "2-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_13];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group 2"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "2-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_14];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "2-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_15];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "2-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_16];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_el_submenu, {
                      index: "3"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_17, _hoisted_18];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, null, {
                          title: _withCtx(function () {
                            return [_hoisted_19];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "3-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_20];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "3-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_21];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group 2"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "3-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_22];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "3-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_23];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "3-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_24];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_header, {
                  style: {
                    "text-align": "right",
                    "font-size": "12px"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown, null, {
                      dropdown: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_menu, null, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_dropdown_item, null, {
                              default: _withCtx(function () {
                                return [_hoisted_26];
                              }),
                              _: 1
                            }), _createVNode(_component_el_dropdown_item, null, {
                              default: _withCtx(function () {
                                return [_hoisted_27];
                              }),
                              _: 1
                            }), _createVNode(_component_el_dropdown_item, null, {
                              default: _withCtx(function () {
                                return [_hoisted_28];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      default: _withCtx(function () {
                        return [_hoisted_25];
                      }),
                      _: 1
                    }), _hoisted_29];
                  }),
                  _: 1
                }), _createVNode(_component_el_main, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_table, {
                      data: _ctx.tableData
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_table_column, {
                          prop: "date",
                          label: "Date",
                          width: "140"
                        }), _createVNode(_component_el_table_column, {
                          prop: "name",
                          label: "Name",
                          width: "120"
                        }), _createVNode(_component_el_table_column, {
                          prop: "address",
                          label: "Address"
                        })];
                      }),
                      _: 1
                    }, 8, ["data"])];
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

      var democomponentExport = {
        data: function data() {
          var item = {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          };
          return {
            tableData: Array(20).fill(item)
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/container.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/container.md



containervue_type_script_lang_ts.render = containervue_type_template_id_67c3569e_render

/* harmony default export */ var container = __webpack_exports__["default"] = (containervue_type_script_lang_ts);

/***/ })

}]);