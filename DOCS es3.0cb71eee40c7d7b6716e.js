(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/backtop.md?vue&type=template&id=3dc3ac00

const backtopvue_type_template_id_3dc3ac00_hoisted_1 = {
  class: "content element-doc"
};

const backtopvue_type_template_id_3dc3ac00_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Backtop ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Un botón para volver a la parte superior", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Desplácese hacia abajo para ver el botón en el lado inferior derecho.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  Scroll down to see the bottom-right button.\n  <el-backtop target=\".page-component__scroll .el-scrollbar__wrap\"></el-backtop>\n</template>\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Personalización ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Área de visualización de 40px * 40px.", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  Scroll down to see the bottom-right button.\n  <el-backtop\n    target=\".page-component__scroll .el-scrollbar__wrap\"\n    :bottom=\"100\"\n  >\n    <div\n      style=\"{\n        height: 100%;\n        width: 100%;\n        background-color: #f2f5f6;\n        box-shadow: 0 0 6px rgba(0,0,0, .12);\n        text-align: center;\n        line-height: 40px;\n        color: #1989fa;\n      }\"\n    >\n      UP\n    </div>\n  </el-backtop>\n</template>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributos</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>target</td><td>el objetivo para activar el scroll</td><td>string</td><td></td><td></td></tr><tr><td>visibility-height</td><td>el botón no se mostrará hasta que la altura de desplazamiento alcance este valor</td><td>number</td><td></td><td>200</td></tr><tr><td>right</td><td>separación desde la derecha</td><td>number</td><td></td><td>40</td></tr><tr><td>bottom</td><td>separación desde abajo</td><td>number</td><td></td><td>40</td></tr></tbody></table>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre del evento"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parámetros")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "se activa al hacer clic"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "click event")])])], -1);

function backtopvue_type_template_id_3dc3ac00_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", backtopvue_type_template_id_3dc3ac00_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "backtop",
    content: "Backtop",
    href: "#backtop",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [backtopvue_type_template_id_3dc3ac00_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#backtop"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "personalizacion",
    content: "Personalización",
    href: "#personalizacion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#personalizacion"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos",
    content: "Eventos",
    href: "#eventos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/backtop.md?vue&type=template&id=3dc3ac00

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/backtop.md?vue&type=script&lang=ts

/* harmony default export */ var backtopvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Scroll down to see the bottom-right button. ");

      function render(_ctx, _cache) {
        const _component_el_backtop = _resolveComponent("el-backtop");

        return _openBlock(), _createElementBlock("div", null, [_hoisted_1, _createVNode(_component_el_backtop, {
          target: ".page-component__scroll .el-scrollbar__wrap"
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Scroll down to see the bottom-right button. ");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        style: {
          "{\n        height": "100%",
          "width": "100%",
          "background-color": "#f2f5f6",
          "box-shadow": "0 0 6px rgba(0,0,0, .12)",
          "text-align": "center",
          "line-height": "40px",
          "color": "#1989fa"
        }
      }, " UP ", -1);

      function render(_ctx, _cache) {
        const _component_el_backtop = _resolveComponent("el-backtop");

        return _openBlock(), _createElementBlock("div", null, [_hoisted_1, _createVNode(_component_el_backtop, {
          target: ".page-component__scroll .el-scrollbar__wrap",
          bottom: 100
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/backtop.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/backtop.md



backtopvue_type_script_lang_ts.render = backtopvue_type_template_id_3dc3ac00_render

/* harmony default export */ var backtop = __webpack_exports__["default"] = (backtopvue_type_script_lang_ts);

/***/ })

}]);