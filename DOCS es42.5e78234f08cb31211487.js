(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/popover.md?vue&type=template&id=497f547a

var popovervue_type_template_id_497f547a_hoisted_1 = {
  class: "content element-doc"
};

var popovervue_type_template_id_497f547a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "popover"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#popover"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Popover")], -1);

var popovervue_type_template_id_497f547a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var popovervue_type_template_id_497f547a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Similar a un Tooltip, Popover está construido con "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Vue-popper"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Así que para atributos duplicados, por favor refiérase a la documentación de Tooltip.")], -1);

var popovervue_type_template_id_497f547a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es usado para definir como el popover se dispara: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "focus"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" o "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "manual"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". En cuanto al elemento desencadenante, puedes escribirlo de dos maneras diferentes: usando el "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "#reference"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://vuejs.org/v2/guide/components.html#Named-Slots"
}, "named slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", o usando la directiva "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-popover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y poniendo el "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de Popover.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-popover\n    placement=\"top-start\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"hover\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Hover to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"click\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Click to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    ref=\"popover\"\n    placement=\"right\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"focus\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Focus to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"manual\"\n    content=\"this is content, this is content, this is content\"\n    v-model:visible=\"visible\"\n  >\n    <template #reference>\n      <el-button @click=\"visible = !visible\">Manual to activate</el-button>\n    </template>\n  </el-popover>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "informacion-anidada"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#informacion-anidada"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Información anidada")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Otros componentes pueden anidarse dentro de popover. A continuación un ejemplo de una tabla anidada.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Reemplaza el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" con un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-popover\n  placement=\"right\"\n  :width=\"400\"\n  trigger=\"click\"\n>\n  <template #reference>\n    <el-button>Click to activate</el-button>\n  </template>\n  <el-table :data=\"gridData\">\n    <el-table-column width=\"150\" property=\"date\" label=\"date\"></el-table-column>\n    <el-table-column width=\"100\" property=\"name\" label=\"name\"></el-table-column>\n    <el-table-column width=\"300\" property=\"address\" label=\"address\"></el-table-column>\n  </el-table>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [{\n          date: '2016-05-02',\n          name: 'Jack',\n          address: 'New York City'\n        }, {\n          date: '2016-05-04',\n          name: 'Jack',\n          address: 'New York City'\n        }, {\n          date: '2016-05-01',\n          name: 'Jack',\n          address: 'New York City'\n        }, {\n          date: '2016-05-03',\n          name: 'Jack',\n          address: 'New York City'\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "operacion-anidada"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#operacion-anidada"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Operación anidada")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Por supuesto, puedes anidar otras operaciones. Es más ligero que utilizar un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dialog"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-popover\n  placement=\"top\"\n  :width=\"160\"\n  v-model:visible=\"visible\"\n>\n  <p>Are you sure to delete this?</p>\n  <div style=\"text-align: right; margin: 0\">\n    <el-button size=\"mini\" type=\"text\" @click=\"visible = false\">cancel</el-button>\n    <el-button type=\"primary\" size=\"mini\" @click=\"visible = false\">confirm</el-button>\n  </div>\n  <template #reference>\n    <el-button @click=\"visible = true\">Delete</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos\"><a class=\"header-anchor\" href=\"#atributos\">¶</a> Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>trigger</td><td>cómo se dispara el popover</td><td>string</td><td>click/focus/hover/manual</td><td>click</td></tr><tr><td>title</td><td>título del popover</td><td>string</td><td>—</td><td>—</td></tr><tr><td>content</td><td>contenido del popover, puede ser sustituido por un <code>slot</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>ancho del popover</td><td>string, number</td><td>—</td><td>Min width 150px</td></tr><tr><td>placement</td><td>posición del popover en la pantalla</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>disabled</td><td>si el popover está deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>visible / v-model:visible</td><td>si el popover está visible</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>popover offset</td><td>number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>animación de transición del popover</td><td>string</td><td>—</td><td>el-fade-in-linear</td></tr><tr><td>show-arrow</td><td>si una flecha del tooltip es mostrada o no. Para más información, por favor refiérase a <a href=\"https://github.com/element-component/vue-popper\">Vue-popper</a></td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td>parámetros para <a href=\"https://popper.js.org/documentation.html\">popper.js</a></td><td>object</td><td>por favor, refiérase a <a href=\"https://popper.js.org/documentation.html\">popper.js</a></td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>popper-class</td><td>clase propia para popover</td><td>string</td><td>—</td><td>—</td></tr><tr><td>open-delay</td><td>retraso de la aparición cuando <code>trigger</code> es hover, en milisegundos</td><td>number</td><td>—</td><td>—</td></tr><tr><td>close-delay</td><td>Retraso antes de desaparecer cuando el <code>trigger</code> es hover, en milisegundos.</td><td>number</td><td>—</td><td>200</td></tr><tr><td>tabindex</td><td><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a> de Popover</td><td>number</td><td>—</td><td>0</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>Nombre</th><th>Descripción</th></tr></thead><tbody><tr><td>—</td><td>texto contenido en popover</td></tr><tr><td>reference</td><td>elemento HTML que dispara el popover</td></tr></tbody></table><h3 id=\"eventos\"><a class=\"header-anchor\" href=\"#eventos\">¶</a> Eventos</h3><table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>show</td><td>se dispara cuando se muestra el popover</td><td>—</td></tr><tr><td>after-enter</td><td>se dispara cuando la transición de entrada termina</td><td>—</td></tr><tr><td>hide</td><td>se dispara cuando se oculta el popover</td><td>—</td></tr><tr><td>after-leave</td><td>se dispara cuando la transición de salida termina</td><td>—</td></tr></tbody></table>", 6);

function popovervue_type_template_id_497f547a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", popovervue_type_template_id_497f547a_hoisted_1, [popovervue_type_template_id_497f547a_hoisted_2, popovervue_type_template_id_497f547a_hoisted_3, popovervue_type_template_id_497f547a_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [popovervue_type_template_id_497f547a_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14]);
}
// CONCATENATED MODULE: ./website/docs/es/popover.md?vue&type=template&id=497f547a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/popover.md?vue&type=script&lang=ts


/* harmony default export */ var popovervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Hover to activate");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Click to activate");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Focus to activate");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Manual to activate");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top-start",
          title: "Title",
          width: 200,
          trigger: "hover",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "Title",
          width: 200,
          trigger: "click",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_popover, {
          ref: "popover",
          placement: "right",
          title: "Title",
          width: 200,
          trigger: "focus",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "Title",
          width: 200,
          trigger: "manual",
          content: "this is content, this is content, this is content",
          visible: _ctx.visible,
          "onUpdate:visible": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.visible = $event;
          })
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.visible = !_ctx.visible;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["visible"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            visible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to activate");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "right",
          width: 400,
          trigger: "click"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_table, {
              data: _ctx.gridData
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
                  width: "150",
                  property: "date",
                  label: "date"
                }), _createVNode(_component_el_table_column, {
                  width: "100",
                  property: "name",
                  label: "name"
                }), _createVNode(_component_el_table_column, {
                  width: "300",
                  property: "address",
                  label: "address"
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            gridData: [{
              date: '2016-05-02',
              name: 'Jack',
              address: 'New York City'
            }, {
              date: '2016-05-04',
              name: 'Jack',
              address: 'New York City'
            }, {
              date: '2016-05-01',
              name: 'Jack',
              address: 'New York City'
            }, {
              date: '2016-05-03',
              name: 'Jack',
              address: 'New York City'
            }]
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "Are you sure to delete this?", -1);

      var _hoisted_2 = {
        style: {
          "text-align": "right",
          "margin": "0"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("cancel");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("confirm");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Delete");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top",
          width: 160,
          visible: _ctx.visible,
          "onUpdate:visible": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.visible = $event;
          })
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.visible = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
              size: "mini",
              type: "text",
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.visible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              size: "mini",
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.visible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })])];
          }),
          _: 1
        }, 8, ["visible"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            visible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/popover.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/popover.md



popovervue_type_script_lang_ts.render = popovervue_type_template_id_497f547a_render

/* harmony default export */ var popover = __webpack_exports__["default"] = (popovervue_type_script_lang_ts);

/***/ })

}]);