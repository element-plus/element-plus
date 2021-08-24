(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/breadcrumb.md?vue&type=template&id=7b80fe20

var breadcrumbvue_type_template_id_7b80fe20_hoisted_1 = {
  class: "content element-doc"
};

var breadcrumbvue_type_template_id_7b80fe20_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Breadcrumb ");

var breadcrumbvue_type_template_id_7b80fe20_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Muestra la localización de la página actual, haciendo más fácil el poder ir a la página anterior.", -1);

var breadcrumbvue_type_template_id_7b80fe20_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Uso básico ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("En "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-breadcrumb"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", cada "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-breadcrumb-item"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" es un tag que representa cada nivel empezando desde la homepage. Este componente tiene un atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" llamado "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "separator"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", el mismo determina el carácter separador. El valor por defecto es '/'.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-breadcrumb separator=\"/\">\n  <el-breadcrumb-item :to=\"{ path: '/' }\">homepage</el-breadcrumb-item>\n  <el-breadcrumb-item><a href=\"/\">promotion management</a></el-breadcrumb-item>\n  <el-breadcrumb-item>promotion list</el-breadcrumb-item>\n  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>\n</el-breadcrumb>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Icono separador ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Setee "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "separator-class"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para que utilice "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "iconfont"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" como separador，el mismo va a cubrir "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "separator")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-breadcrumb separator-class=\"el-icon-arrow-right\">\n  <el-breadcrumb-item :to=\"{ path: '/' }\">homepage</el-breadcrumb-item>\n  <el-breadcrumb-item>promotion management</el-breadcrumb-item>\n  <el-breadcrumb-item>promotion list</el-breadcrumb-item>\n  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>\n</el-breadcrumb>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Breadcrumb atributos ");

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>separator</td><td>carácter separador</td><td>string</td><td>—</td><td>/</td></tr><tr><td>separator-class</td><td>nombre de la clase del icono separador</td><td>string</td><td>—</td><td>-</td></tr></tbody></table>", 1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Breadcrumb Item atributos ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>to</td><td>ruta del link, lo mismo que <code>to</code> de <code>vue-router</code></td><td>string/object</td><td>—</td><td>—</td></tr><tr><td>replace</td><td>si <code>true</code>, la navegación no dejara una entrada en la historia</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

function breadcrumbvue_type_template_id_7b80fe20_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", breadcrumbvue_type_template_id_7b80fe20_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "breadcrumb",
    content: "Breadcrumb",
    href: "#breadcrumb",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [breadcrumbvue_type_template_id_7b80fe20_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#breadcrumb"
      })];
    }),
    _: 1
  }), breadcrumbvue_type_template_id_7b80fe20_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [breadcrumbvue_type_template_id_7b80fe20_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#uso-basico"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "icono-separador",
    content: "Icono separador",
    href: "#icono-separador",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#icono-separador"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "breadcrumb-atributos",
    content: "Breadcrumb atributos",
    href: "#breadcrumb-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#breadcrumb-atributos"
      })];
    }),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "breadcrumb-item-atributos",
    content: "Breadcrumb Item atributos",
    href: "#breadcrumb-item-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#breadcrumb-item-atributos"
      })];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/breadcrumb.md?vue&type=template&id=7b80fe20

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/breadcrumb.md?vue&type=script&lang=ts


/* harmony default export */ var breadcrumbvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("homepage");

      var _hoisted_2 = /*#__PURE__*/_createVNode("a", {
        href: "/"
      }, "promotion management", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("promotion list");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("promotion detail");

      function render(_ctx, _cache) {
        var _component_el_breadcrumb_item = _resolveComponent("el-breadcrumb-item");

        var _component_el_breadcrumb = _resolveComponent("el-breadcrumb");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_breadcrumb, {
          separator: "/"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_breadcrumb_item, {
              to: {
                path: '/'
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
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
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("homepage");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("promotion management");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("promotion list");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("promotion detail");

      function render(_ctx, _cache) {
        var _component_el_breadcrumb_item = _resolveComponent("el-breadcrumb-item");

        var _component_el_breadcrumb = _resolveComponent("el-breadcrumb");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_breadcrumb, {
          "separator-class": "el-icon-arrow-right"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_breadcrumb_item, {
              to: {
                path: '/'
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/breadcrumb.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/breadcrumb.md



breadcrumbvue_type_script_lang_ts.render = breadcrumbvue_type_template_id_7b80fe20_render

/* harmony default export */ var breadcrumb = __webpack_exports__["default"] = (breadcrumbvue_type_script_lang_ts);

/***/ })

}]);