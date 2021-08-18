(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/icon.md?vue&type=template&id=0c058c52

var iconvue_type_template_id_0c058c52_hoisted_1 = {
  class: "content element-doc"
};

var iconvue_type_template_id_0c058c52_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h2 id=\"icon\"><a class=\"header-anchor\" href=\"#icon\">¶</a> Icon</h2><p>Element Plus proporciona un conjunto de iconos propios.</p><div class=\"warning\"><p>Element Plus team is replacing all <strong>Font Icon</strong> in the previously built components to <strong>SVG Icon</strong>, please keep you eyes on <a href=\"/#/en-US/component/changelog\">ChangeLog</a>, for getting latest updates, <strong>Font Icon</strong> will be deprecated after the first stable release.</p></div><h3 id=\"svgicon-usage\"><a class=\"header-anchor\" href=\"#svgicon-usage\">¶</a> SvgIcon Usage</h3><ul><li><p>If you want to <strong>use directly</strong> like the example, you need to <a href=\"https://v3.vuejs.org/guide/component-registration.html#global-registration\">globally register</a> the components before using it.</p></li><li><p>If you want to see all available SVG icons please check <a href=\"https://unpkg.com/browse/@element-plus/icons@latest/lib/\">@element-plus/icons</a> and the source <a href=\"https://github.com/element-plus/element-plus-icons\">Github/ElementPlus/icons</a> out or <a href=\"/#/en-US/component/icon#svg-tu-biao-ji-he\">SVG icons</a></p></li></ul><h3 id=\"installation\"><a class=\"header-anchor\" href=\"#installation\">¶</a> Installation</h3><p>The current icon is only targeted to <a href=\"https://v3.vuejs.org\">Vue3</a>.</p><h4 id=\"using-yarn\"><a class=\"header-anchor\" href=\"#using-yarn\">¶</a> Using yarn</h4><pre><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$</span><span class=\"bash\"> yarn add @element-plus/icons</span>\n</code></pre><h4 id=\"using-npm\"><a class=\"header-anchor\" href=\"#using-npm\">¶</a> Using npm</h4><pre><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$</span><span class=\"bash\"> npm install @element-plus/icons</span>\n</code></pre><h4 id=\"simple-usage\"><a class=\"header-anchor\" href=\"#simple-usage\">¶</a> Simple usage</h4><pre><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- Use el-icon to provide attributes to SVG icon --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-icon</span> <span class=\"hljs-attr\">:size</span>=<span class=\"hljs-string\">&quot;size&quot;</span> <span class=\"hljs-attr\">:color</span>=<span class=\"hljs-string\">&quot;color&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">edit</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-icon</span>&gt;</span>\n<span class=\"hljs-comment\">&lt;!-- Or use it independently without derive attributes from parent --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">edit</span> /&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">lang</span>=<span class=\"hljs-string\">&quot;ts&quot;</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">import</span> { Edit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;@element-plus/icons&#39;</span>\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n  <span class=\"hljs-attr\">components</span>: {\n    <span class=\"hljs-comment\">// Full name</span>\n    [Edit.name]: Edit,\n    <span class=\"hljs-comment\">// or Shorthanded,</span>\n    Edit,\n  },\n})\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><h4 id=\"combined-with-el-icon\"><a class=\"header-anchor\" href=\"#combined-with-el-icon\">¶</a> Combined with <code>el-icon</code></h4>", 14);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" provides extra attributes for raw SVG icon, for more detail, please read to the end.")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "  <p>\n    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2 seconds, you can also override this\n  </p>\n  <el-icon :size=\"20\">\n    <edit />\n  </el-icon>\n  <el-icon color=\"#409EFC\" class=\"no-inherit\">\n    <share />\n  </el-icon>\n  <el-icon>\n    <delete />\n  </el-icon>\n  <el-icon class=\"is-loading\">\n    <loading />\n  </el-icon>\n  <el-button type=\"primary\">\n    <el-icon style=\"vertical-align: middle;\">\n      <search />\n    </el-icon>\n    <span style=\"vertical-align: middle;\">\n      Search\n    </span>\n  </el-button>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h4", {
  id: "using-svg-icon-directly"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#using-svg-icon-directly"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Using SVG icon directly")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "  <div style=\"font-size: 20px;\">\n    <!-- Since svg icons do not carry any attributes by default -->\n    <!-- You need to provide attributes directly -->\n    <edit style=\"width: 1em; height: 1em; margin-right: 8px;\" />\n    <share style=\"width: 1em; height: 1em; margin-right: 8px;\" />\n    <delete style=\"width: 1em; height: 1em; margin-right: 8px;\" />\n    <search style=\"width: 1em; height: 1em; margin-right: 8px;\" />\n  </div>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "svg-icons-collection"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#svg-icons-collection"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" SVG Icons collection")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("This collection is updated after ElementPlus@1.0.2-beta.66(included), you can only use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to wrap it after ElementPlus@1.0.2-beta.66(included), or directly use it without version constrains")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "You can use SVG icon in any version as long as you install it")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "You can click the icon to copy it")])], -1);

var _hoisted_22 = {
  class: "icon-list"
};
var _hoisted_23 = {
  class: "demo-svg-icon"
};
var _hoisted_24 = {
  class: "icon-name"
};

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "font-icon-uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#font-icon-uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Font Icon uso básico")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Simplemente asigna el nombre de la clase a "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-icon-iconName"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<i class=\"el-icon-edit\"></i>\n<i class=\"el-icon-share\"></i>\n<i class=\"el-icon-delete\"></i>\n<el-button type=\"primary\" icon=\"el-icon-search\">Search</el-button>\n\n")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "font-iconos"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#font-iconos"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Font Iconos")], -1);

var _hoisted_29 = {
  class: "icon-list"
};
var _hoisted_30 = {
  class: "icon-name"
};

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"svg-icon-atributos\"><a class=\"header-anchor\" href=\"#svg-icon-atributos\">¶</a> SVG Icon Atributos</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Acceptable Value</th><th>Default</th></tr></thead><tbody><tr><td>color</td><td>SVG tag&#39;s fill attribute</td><td>Pick&lt;CSSProperties, &#39;color&#39;&gt;</td><td>-</td><td>inherit from color</td></tr><tr><td>size</td><td>SVG icon size, size x size</td><td>number</td><td>-</td><td>inherit from font size</td></tr></tbody></table>", 2);

function iconvue_type_template_id_0c058c52_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_el_icon = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("el-icon");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", iconvue_type_template_id_0c058c52_hoisted_1, [iconvue_type_template_id_0c058c52_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])("ul", _hoisted_22, [(Object(vue_esm_browser_prod["H" /* openBlock */])(true), Object(vue_esm_browser_prod["k" /* createBlock */])(vue_esm_browser_prod["b" /* Fragment */], null, Object(vue_esm_browser_prod["O" /* renderList */])(_ctx.$svgIcons, function (component) {
    return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("li", {
      key: component,
      onClick: function onClick($event) {
        return _ctx.$copySvgIcon(component);
      }
    }, [Object(vue_esm_browser_prod["p" /* createVNode */])("span", _hoisted_23, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_el_icon, {
      color: "#000"
    }, {
      default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
        return [(Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])(Object(vue_esm_browser_prod["S" /* resolveDynamicComponent */])(component)))];
      }),
      _: 2
    }, 1024), Object(vue_esm_browser_prod["p" /* createVNode */])("span", _hoisted_24, Object(vue_esm_browser_prod["U" /* toDisplayString */])(component), 1)])], 8, ["onClick"]);
  }), 128))]), _hoisted_25, _hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])("ul", _hoisted_29, [(Object(vue_esm_browser_prod["H" /* openBlock */])(true), Object(vue_esm_browser_prod["k" /* createBlock */])(vue_esm_browser_prod["b" /* Fragment */], null, Object(vue_esm_browser_prod["O" /* renderList */])(_ctx.$icon, function (name) {
    return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("li", {
      key: name
    }, [Object(vue_esm_browser_prod["p" /* createVNode */])("span", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("i", {
      class: 'el-icon-' + name
    }, null, 2), Object(vue_esm_browser_prod["p" /* createVNode */])("span", _hoisted_30, Object(vue_esm_browser_prod["U" /* toDisplayString */])('el-icon-' + name), 1)])]);
  }), 128))]), _hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/icon.md?vue&type=template&id=0c058c52

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/icon.md?vue&type=script&lang=ts


/* harmony default export */ var iconvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, [/*#__PURE__*/_createTextVNode(" with extra class "), /*#__PURE__*/_createVNode("b", null, "is-loading"), /*#__PURE__*/_createTextVNode(", your icon is able to rotate 360 deg in 2 seconds, you can also override this ")], -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        style: {
          "vertical-align": "middle"
        }
      }, " Search ", -1);

      function render(_ctx, _cache) {
        var _component_edit = _resolveComponent("edit");

        var _component_el_icon = _resolveComponent("el-icon");

        var _component_share = _resolveComponent("share");

        var _component_delete = _resolveComponent("delete");

        var _component_loading = _resolveComponent("loading");

        var _component_search = _resolveComponent("search");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _createVNode(_component_el_icon, {
          size: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_edit)];
          }),
          _: 1
        }), _createVNode(_component_el_icon, {
          color: "#409EFC",
          class: "no-inherit"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_share)];
          }),
          _: 1
        }), _createVNode(_component_el_icon, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_delete)];
          }),
          _: 1
        }), _createVNode(_component_el_icon, {
          class: "is-loading"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_loading)];
          }),
          _: 1
        }), _createVNode(_component_el_button, {
          type: "primary"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_icon, {
              style: {
                "vertical-align": "middle"
              }
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_search)];
              }),
              _: 1
            }), _hoisted_2];
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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "font-size": "20px"
        }
      };

      function render(_ctx, _cache) {
        var _component_edit = _resolveComponent("edit");

        var _component_share = _resolveComponent("share");

        var _component_delete = _resolveComponent("delete");

        var _component_search = _resolveComponent("search");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_edit, {
          style: {
            "width": "1em",
            "height": "1em",
            "margin-right": "8px"
          }
        }), _createVNode(_component_share, {
          style: {
            "width": "1em",
            "height": "1em",
            "margin-right": "8px"
          }
        }), _createVNode(_component_delete, {
          style: {
            "width": "1em",
            "height": "1em",
            "margin-right": "8px"
          }
        }), _createVNode(_component_search, {
          style: {
            "width": "1em",
            "height": "1em",
            "margin-right": "8px"
          }
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-edit"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-share"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-delete"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Search");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _hoisted_2, _hoisted_3, _createVNode(_component_el_button, {
          type: "primary",
          icon: "el-icon-search"
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
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
// CONCATENATED MODULE: ./website/docs/es/icon.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/icon.md



iconvue_type_script_lang_ts.render = iconvue_type_template_id_0c058c52_render

/* harmony default export */ var icon = __webpack_exports__["default"] = (iconvue_type_script_lang_ts);

/***/ })

}]);