(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/color-picker.md?vue&type=template&id=26662a8a

const color_pickervue_type_template_id_26662a8a_hoisted_1 = {
  class: "content element-doc"
};

const color_pickervue_type_template_id_26662a8a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ColorPicker ");

const color_pickervue_type_template_id_26662a8a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ColorPicker es un selector de color que soporta varios formatos de color.", -1);

const color_pickervue_type_template_id_26662a8a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ColorPicker requiere una variable de tipo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para ser enlazada a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Especifica valor por defecto</span>\n  <el-color-picker v-model=\"color1\"></el-color-picker>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">No especifica valor por defecto</span>\n  <el-color-picker v-model=\"color2\"></el-color-picker>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        color1: '#409EFF',\n        color2: null,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const color1 = ref('#409EFF');\n      const color2 = ref(null);\n      return {\n        color1,\n        color2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Alpha ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ColorPicker soporta selección de canales alpha. Para activarlo sólo agregue el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-alpha"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-color-picker v-model=\"color\" show-alpha></el-color-picker>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: 'rgba(19, 206, 102, 0.8)',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const color = ref('rgba(19, 206, 102, 0.8)');\n      return {\n        color,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Colores predefinidos ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ColorPicker soporta opciones de color predefinidas")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-color-picker v-model=\"color\" show-alpha :predefine=\"predefineColors\">\n</el-color-picker>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: 'rgba(255, 69, 0, 0.68)',\n        predefineColors: [\n          '#ff4500',\n          '#ff8c00',\n          '#ffd700',\n          '#90ee90',\n          '#00ced1',\n          '#1e90ff',\n          '#c71585',\n          'rgba(255, 69, 0, 0.68)',\n          'rgb(255, 120, 0)',\n          'hsv(51, 100, 98)',\n          'hsva(120, 40, 94, 0.5)',\n          'hsl(181, 100%, 37%)',\n          'hsla(209, 100%, 56%, 0.73)',\n          '#c7158577',\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const color = ref('rgba(255, 69, 0, 0.68)');\n      const predefineColors = ref([\n        '#ff4500',\n        '#ff8c00',\n        '#ffd700',\n        '#90ee90',\n        '#00ced1',\n        '#1e90ff',\n        '#c71585',\n        'rgba(255, 69, 0, 0.68)',\n        'rgb(255, 120, 0)',\n        'hsv(51, 100, 98)',\n        'hsva(120, 40, 94, 0.5)',\n        'hsl(181, 100%, 37%)',\n        'hsla(209, 100%, 56%, 0.73)',\n        '#c7158577',\n      ]);\n      return {\n        color,\n        predefineColors,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Sizes ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-color-picker v-model=\"color\"></el-color-picker>\n<el-color-picker v-model=\"color\" size=\"medium\"></el-color-picker>\n<el-color-picker v-model=\"color\" size=\"small\"></el-color-picker>\n<el-color-picker v-model=\"color\" size=\"mini\"></el-color-picker>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: '#409EFF',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const color = ref('409EFF');\n\n      return {\n        color,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>valor enlazado</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>especifica si se deshabilita el ColorPicker</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>tamaño del ColorPicker</td><td>string</td><td>—</td><td>medium / small / mini</td></tr><tr><td>show-alpha</td><td>especifica si se muestra el control deslizante para el valor alpha</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color-format</td><td>formato de color del <code>v-model</code></td><td>string</td><td>hsl / hsv / hex / rgb</td><td>hex (si show-alpha es false)/ rgb (si show-alpha es true)</td></tr><tr><td>popper-class</td><td>nombre de clase para el dropdown del ColorPicker</td><td>string</td><td>—</td><td>—</td></tr><tr><td>predefine</td><td>opciones de colores predefinidas</td><td>array</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre de Evento</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>change</td><td>se dispara cuando el valor del input cambia</td><td>valor del color</td></tr><tr><td>active-change</td><td>se dispara cuando el actual color activo cambia</td><td>valor del color activo</td></tr></tbody></table>", 1);

function color_pickervue_type_template_id_26662a8a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", color_pickervue_type_template_id_26662a8a_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "colorpicker",
    content: "ColorPicker",
    href: "#colorpicker",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [color_pickervue_type_template_id_26662a8a_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#colorpicker"
    })]),
    _: 1
  }), color_pickervue_type_template_id_26662a8a_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [color_pickervue_type_template_id_26662a8a_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "alpha",
    content: "Alpha",
    href: "#alpha",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#alpha"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "colores-predefinidos",
    content: "Colores predefinidos",
    href: "#colores-predefinidos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#colores-predefinidos"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sizes",
    content: "Sizes",
    href: "#sizes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sizes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos",
    content: "Eventos",
    href: "#eventos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/color-picker.md?vue&type=template&id=26662a8a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/color-picker.md?vue&type=script&lang=ts

/* harmony default export */ var color_pickervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Especifica valor por defecto", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "No especifica valor por defecto", -1);

      function render(_ctx, _cache) {
        const _component_el_color_picker = _resolveComponent("el-color-picker");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_color_picker, {
          modelValue: _ctx.color1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.color1 = $event)
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_color_picker, {
          modelValue: _ctx.color2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.color2 = $event)
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            color1: '#409EFF',
            color2: null
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_color_picker = _resolveComponent("el-color-picker");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.color = $event),
          "show-alpha": ""
        }, null, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            color: 'rgba(19, 206, 102, 0.8)'
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_color_picker = _resolveComponent("el-color-picker");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.color = $event),
          "show-alpha": "",
          predefine: _ctx.predefineColors
        }, null, 8, ["modelValue", "predefine"])]);
      }

      const democomponentExport = {
        data() {
          return {
            color: 'rgba(255, 69, 0, 0.68)',
            predefineColors: ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585', 'rgba(255, 69, 0, 0.68)', 'rgb(255, 120, 0)', 'hsv(51, 100, 98)', 'hsva(120, 40, 94, 0.5)', 'hsl(181, 100%, 37%)', 'hsla(209, 100%, 56%, 0.73)', '#c7158577']
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_color_picker = _resolveComponent("el-color-picker");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.color = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.color = $event),
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.color = $event),
          size: "small"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.color = $event),
          size: "mini"
        }, null, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            color: '#409EFF'
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/color-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/color-picker.md



color_pickervue_type_script_lang_ts.render = color_pickervue_type_template_id_26662a8a_render

/* harmony default export */ var color_picker = __webpack_exports__["default"] = (color_pickervue_type_script_lang_ts);

/***/ })

}]);