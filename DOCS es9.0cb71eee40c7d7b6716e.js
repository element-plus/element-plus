(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/card.md?vue&type=template&id=88292c76

const cardvue_type_template_id_88292c76_hoisted_1 = {
  class: "content element-doc"
};

const cardvue_type_template_id_88292c76_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Card ");

const cardvue_type_template_id_88292c76_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Muestra información dentro de un contenedor "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "card")], -1);

const cardvue_type_template_id_88292c76_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso Básico ");

const cardvue_type_template_id_88292c76_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" incluye titulo, contenido y operaciones.")], -1);

const cardvue_type_template_id_88292c76_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Card se compone de cabecera y cuerpo. La cabecera es opcional y la colocación de su contenido depende de un slot con nombre.")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-card class=\"box-card\">\n  <template #header>\n    <div class=\"card-header\">\n      <span>Card name</span>\n      <el-button class=\"button\" type=\"text\">Operation button</el-button>\n    </div>\n  </template>\n  <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">{{'List item ' + o }}</div>\n</el-card>\n\n<style>\n  .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    margin-bottom: 18px;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Card simple ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "La parte de la cabecera puede omitirse.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-card class=\"box-card\">\n  <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">{{'List item ' + o }}</div>\n</el-card>\n\n<style>\n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 18px 0;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Con imágenes ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Muestre un contenido más rico añadiendo algunas configuraciones.", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body-style"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" define el estilo CSS del "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" personalizado. Este ejemplo también utiliza "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-col"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para el layout.")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-row>\n  <el-col\n    :span=\"8\"\n    v-for=\"(o, index) in 2\"\n    :key=\"o\"\n    :offset=\"index > 0 ? 2 : 0\"\n  >\n    <el-card :body-style=\"{ padding: '0px' }\">\n      <img\n        src=\"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png\"\n        class=\"image\"\n      />\n      <div style=\"padding: 14px;\">\n        <span>Yummy hamburger</span>\n        <div class=\"bottom\">\n          <time class=\"time\">{{ currentDate }}</time>\n          <el-button type=\"text\" class=\"button\">Operating</el-button>\n        </div>\n      </div>\n    </el-card>\n  </el-col>\n</el-row>\n\n<style>\n  .time {\n    font-size: 13px;\n    color: #999;\n  }\n\n  .bottom {\n    margin-top: 13px;\n    line-height: 12px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .button {\n    padding: 0;\n    min-height: auto;\n  }\n\n  .image {\n    width: 100%;\n    display: block;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        currentDate: new Date(),\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const currentDate = ref(new Date());\n\n      return {\n        currentDate,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Shadow ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Puede definir cuándo mostrar las sombras.", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo de sombra determina cuándo se muestran las sombras. Puede ser "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-row :gutter=\"12\">\n  <el-col :span=\"8\">\n    <el-card shadow=\"always\"> Always </el-card>\n  </el-col>\n  <el-col :span=\"8\">\n    <el-card shadow=\"hover\"> Hover </el-card>\n  </el-col>\n  <el-col :span=\"8\">\n    <el-card shadow=\"never\"> Never </el-card>\n  </el-col>\n</el-row>\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>header</td><td>Titulo del card. También acepta DOM pasado por <code>slot#header</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>body-style</td><td>Estilo CSS del cuerpo</td><td>object</td><td>—</td><td>{ padding: &#39;20px&#39; }</td></tr><tr><td>shadow</td><td>cuando mostrar la sombra del Card</td><td>string</td><td>always / hover / never</td><td>always</td></tr></tbody></table>", 1);

function cardvue_type_template_id_88292c76_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", cardvue_type_template_id_88292c76_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "card",
    content: "Card",
    href: "#card",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [cardvue_type_template_id_88292c76_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#card"
    })]),
    _: 1
  }), cardvue_type_template_id_88292c76_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso Básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [cardvue_type_template_id_88292c76_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), cardvue_type_template_id_88292c76_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [cardvue_type_template_id_88292c76_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "card-simple",
    content: "Card simple",
    href: "#card-simple",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#card-simple"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "con-imagenes",
    content: "Con imágenes",
    href: "#con-imagenes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#con-imagenes"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shadow",
    content: "Shadow",
    href: "#shadow",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shadow"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/card.md?vue&type=template&id=88292c76

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/card.md?vue&type=script&lang=ts

/* harmony default export */ var cardvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "card-header"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", null, "Card name", -1);

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Operation button");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_card = _resolveComponent("el-card");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_card, {
          class: "box-card"
        }, {
          header: _withCtx(() => [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_button, {
            class: "button",
            type: "text"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })])]),
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, o => {
            return _createElementVNode("div", {
              key: o,
              class: "text item"
            }, _toDisplayString('List item ' + o), 1);
          }), 64))]),
          _: 1
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_card = _resolveComponent("el-card");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_card, {
          class: "box-card"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, o => {
            return _createElementVNode("div", {
              key: o,
              class: "text item"
            }, _toDisplayString('List item ' + o), 1);
          }), 64))]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createElementVNode: _createElementVNode,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("img", {
        src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        class: "image"
      }, null, -1);

      const _hoisted_2 = {
        style: {
          "padding": "14px"
        }
      };

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", null, "Yummy hamburger", -1);

      const _hoisted_4 = {
        class: "bottom"
      };
      const _hoisted_5 = {
        class: "time"
      };

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Operating");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_card = _resolveComponent("el-card");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, null, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(2, (o, index) => {
            return _createVNode(_component_el_col, {
              span: 8,
              key: o,
              offset: index > 0 ? 2 : 0
            }, {
              default: _withCtx(() => [_createVNode(_component_el_card, {
                "body-style": {
                  padding: '0px'
                }
              }, {
                default: _withCtx(() => [_hoisted_1, _createElementVNode("div", _hoisted_2, [_hoisted_3, _createElementVNode("div", _hoisted_4, [_createElementVNode("time", _hoisted_5, _toDisplayString(_ctx.currentDate), 1), _createVNode(_component_el_button, {
                  type: "text",
                  class: "button"
                }, {
                  default: _withCtx(() => [_hoisted_6]),
                  _: 1
                })])])]),
                _: 1
              })]),
              _: 2
            }, 1032, ["offset"]);
          }), 64))]),
          _: 1
        })]);
      }

      const democomponentExport = {
        data() {
          return {
            currentDate: new Date()
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Always ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" Hover ");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode(" Never ");

      function render(_ctx, _cache) {
        const _component_el_card = _resolveComponent("el-card");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 12
        }, {
          default: _withCtx(() => [_createVNode(_component_el_col, {
            span: 8
          }, {
            default: _withCtx(() => [_createVNode(_component_el_card, {
              shadow: "always"
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 8
          }, {
            default: _withCtx(() => [_createVNode(_component_el_card, {
              shadow: "hover"
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 8
          }, {
            default: _withCtx(() => [_createVNode(_component_el_card, {
              shadow: "never"
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            })]),
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/card.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/card.md



cardvue_type_script_lang_ts.render = cardvue_type_template_id_88292c76_render

/* harmony default export */ var card = __webpack_exports__["default"] = (cardvue_type_script_lang_ts);

/***/ })

}]);