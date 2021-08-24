(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/collapse.md?vue&type=template&id=80cedc92

var collapsevue_type_template_id_80cedc92_hoisted_1 = {
  class: "content element-doc"
};

var collapsevue_type_template_id_80cedc92_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Collapse ");

var collapsevue_type_template_id_80cedc92_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Use Collapse para almacenar contenidos.", -1);

var collapsevue_type_template_id_80cedc92_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Uso básico ");

var collapsevue_type_template_id_80cedc92_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Puede expandir varios paneles", -1);

var collapsevue_type_template_id_80cedc92_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeNames\" @change=\"handleChange\">\n  <el-collapse-item title=\"Consistency\" name=\"1\">\n    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>\n    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>\n    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>Simplify the process: keep operating process simple and intuitive;</div>\n    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>\n    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>\n    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeNames: ['1']\n      };\n    },\n    methods: {\n      handleChange(val) {\n        console.log(val);\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeNames = ref(['1']);\n      const handleChange = (val) => {\n        console.log(val);\n      };\n      return {\n        activeNames,\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var collapsevue_type_template_id_80cedc92_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Acordeón ");

var collapsevue_type_template_id_80cedc92_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "En modo acordeón sólo un panel puede ser expandido a la vez", -1);

var collapsevue_type_template_id_80cedc92_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Activa el modo acordeón usado el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "accordion"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var collapsevue_type_template_id_80cedc92_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeName\" accordion>\n  <el-collapse-item title=\"Consistency\" name=\"1\">\n    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>\n    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>\n    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>Simplify the process: keep operating process simple and intuitive;</div>\n    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>\n    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>\n    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: '1'\n      };\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeName = ref('1');\n\n      return {\n        activeName,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var collapsevue_type_template_id_80cedc92_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Título personalizado ");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Además de usar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", se puede personalizar el título del panel con slots con nombre, esto hace posible agregar contenido personalizado, por ejemplo: iconos.")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse accordion>\n  <el-collapse-item name=\"1\">\n    <template #title>\n      Consistency<i class=\"header-icon el-icon-information\"></i>\n    </template>\n    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>\n    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>\n    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>Simplify the process: keep operating process simple and intuitive;</div>\n    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>\n    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>\n    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>\n  </el-collapse-item>\n</el-collapse>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Atributos de Collapse ");

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>panel activo</td><td>string (modo acordeón) / array (No modo acordeón)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>especifica si activa el modo acordeón</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Eventos de Collapse ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Nombre de Evento"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Parametros")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "se dispara cuando los paneles activos cambian"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "(activeNames: array (No modo acordeón) / string (modo acordeón))")])])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Atributos de Collapse Item ");

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>name</td><td>identificador único del panel</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>título del panel</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>deshabilita el collapse ítem</td><td>boolean</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function collapsevue_type_template_id_80cedc92_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", collapsevue_type_template_id_80cedc92_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "collapse",
    content: "Collapse",
    href: "#collapse",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_80cedc92_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#collapse"
      })];
    }),
    _: 1
  }), collapsevue_type_template_id_80cedc92_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_80cedc92_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#uso-basico"
      })];
    }),
    _: 1
  }), collapsevue_type_template_id_80cedc92_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_80cedc92_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "acordeon",
    content: "Acordeón",
    href: "#acordeon",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_80cedc92_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#acordeon"
      })];
    }),
    _: 1
  }), collapsevue_type_template_id_80cedc92_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_80cedc92_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_80cedc92_hoisted_9];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "titulo-personalizado",
    content: "Título personalizado",
    href: "#titulo-personalizado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_80cedc92_hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#titulo-personalizado"
      })];
    }),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "atributos-de-collapse",
    content: "Atributos de Collapse",
    href: "#atributos-de-collapse",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#atributos-de-collapse"
      })];
    }),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "eventos-de-collapse",
    content: "Eventos de Collapse",
    href: "#eventos-de-collapse",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#eventos-de-collapse"
      })];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "atributos-de-collapse-item",
    content: "Atributos de Collapse Item",
    href: "#atributos-de-collapse-item",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#atributos-de-collapse-item"
      })];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/collapse.md?vue&type=template&id=80cedc92

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/collapse.md?vue&type=script&lang=ts


/* harmony default export */ var collapsevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", null, "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "Visual feedback: reflect current state by updating or rearranging elements of the page.", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "Simplify the process: keep operating process simple and intuitive;", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeNames,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeNames = $event;
          }),
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              title: "Consistency",
              name: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6, _hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeNames: ['1']
          };
        },
        methods: {
          handleChange: function handleChange(val) {
            console.log(val);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", null, "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "Visual feedback: reflect current state by updating or rearranging elements of the page.", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "Simplify the process: keep operating process simple and intuitive;", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeName = $event;
          }),
          accordion: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              title: "Consistency",
              name: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6, _hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: '1'
          };
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Consistency");

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "header-icon el-icon-information"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "Visual feedback: reflect current state by updating or rearranging elements of the page.", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "Simplify the process: keep operating process simple and intuitive;", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.", -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", null, "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;", -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("div", null, "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          accordion: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              name: "1"
            }, {
              title: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7, _hoisted_8, _hoisted_9];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_10, _hoisted_11];
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
// CONCATENATED MODULE: ./website/docs/es/collapse.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/collapse.md



collapsevue_type_script_lang_ts.render = collapsevue_type_template_id_80cedc92_render

/* harmony default export */ var collapse = __webpack_exports__["default"] = (collapsevue_type_script_lang_ts);

/***/ })

}]);