(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/collapse.md?vue&type=template&id=02264b9d

var collapsevue_type_template_id_02264b9d_hoisted_1 = {
  class: "content element-doc"
};

var collapsevue_type_template_id_02264b9d_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "collapse"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#collapse"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Collapse")], -1);

var collapsevue_type_template_id_02264b9d_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Use Collapse para almacenar contenidos.", -1);

var collapsevue_type_template_id_02264b9d_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var collapsevue_type_template_id_02264b9d_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede expandir varios paneles", -1);

var collapsevue_type_template_id_02264b9d_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeNames\" @change=\"handleChange\">\n  <el-collapse-item title=\"Consistency\" name=\"1\">\n    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>\n    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>\n    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>Simplify the process: keep operating process simple and intuitive;</div>\n    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>\n    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>\n    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeNames: ['1']\n      };\n    },\n    methods: {\n      handleChange(val) {\n        console.log(val);\n      }\n    }\n  }\n</script>\n")], -1);

var collapsevue_type_template_id_02264b9d_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "acordeon"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#acordeon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Acordeón")], -1);

var collapsevue_type_template_id_02264b9d_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "En modo acordeón sólo un panel puede ser expandido a la vez", -1);

var collapsevue_type_template_id_02264b9d_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Activa el modo acordeón usado el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "accordion"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var collapsevue_type_template_id_02264b9d_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeName\" accordion>\n  <el-collapse-item title=\"Consistency\" name=\"1\">\n    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>\n    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>\n    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>Simplify the process: keep operating process simple and intuitive;</div>\n    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>\n    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>\n    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: '1'\n      };\n    }\n  }\n</script>\n")], -1);

var collapsevue_type_template_id_02264b9d_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "titulo-personalizado"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#titulo-personalizado"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Título personalizado")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Además de usar el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", se puede personalizar el título del panel con slots con nombre, esto hace posible agregar contenido personalizado, por ejemplo: iconos.")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse accordion>\n  <el-collapse-item name=\"1\">\n    <template #title>\n      Consistency<i class=\"header-icon el-icon-information\"></i>\n    </template>\n    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>\n    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>\n    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>Simplify the process: keep operating process simple and intuitive;</div>\n    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>\n    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>\n    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>\n  </el-collapse-item>\n</el-collapse>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos-de-collapse\"><a class=\"header-anchor\" href=\"#atributos-de-collapse\">¶</a> Atributos de Collapse</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>panel activo</td><td>string (modo acordeón) / array (No modo acordeón)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>especifica si activa el modo acordeón</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"eventos-de-collapse\"><a class=\"header-anchor\" href=\"#eventos-de-collapse\">¶</a> Eventos de Collapse</h3><table><thead><tr><th>Nombre de Evento</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>change</td><td>se dispara cuando los paneles activos cambian</td><td>(activeNames: array (No modo acordeón) / string (modo acordeón))</td></tr></tbody></table><h3 id=\"atributos-de-collapse-item\"><a class=\"header-anchor\" href=\"#atributos-de-collapse-item\">¶</a> Atributos de Collapse Item</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>name</td><td>identificador único del panel</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>título del panel</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>deshabilita el collapse ítem</td><td>boolean</td><td>—</td><td>—</td></tr></tbody></table>", 6);

function collapsevue_type_template_id_02264b9d_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", collapsevue_type_template_id_02264b9d_hoisted_1, [collapsevue_type_template_id_02264b9d_hoisted_2, collapsevue_type_template_id_02264b9d_hoisted_3, collapsevue_type_template_id_02264b9d_hoisted_4, collapsevue_type_template_id_02264b9d_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [collapsevue_type_template_id_02264b9d_hoisted_6];
    }),
    _: 1
  }), collapsevue_type_template_id_02264b9d_hoisted_7, collapsevue_type_template_id_02264b9d_hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [collapsevue_type_template_id_02264b9d_hoisted_10];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [collapsevue_type_template_id_02264b9d_hoisted_9];
    }),
    _: 1
  }), collapsevue_type_template_id_02264b9d_hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14]);
}
// CONCATENATED MODULE: ./website/docs/es/collapse.md?vue&type=template&id=02264b9d

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/collapse.md?vue&type=script&lang=ts


/* harmony default export */ var collapsevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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



collapsevue_type_script_lang_ts.render = collapsevue_type_template_id_02264b9d_render

/* harmony default export */ var collapse = __webpack_exports__["default"] = (collapsevue_type_script_lang_ts);

/***/ })

}]);