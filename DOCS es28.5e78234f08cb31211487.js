(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/input-number.md?vue&type=template&id=5d8187ec

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "inputnumber"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#inputnumber"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" InputNumber")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Input de valores numéricos con un rango personalizable.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Vincule una variable con "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en el elemento "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "<el-input-number>"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y estará listo.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" @change=\"handleChange\" :min=\"1\" :max=\"10\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value)\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "disabled"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#disabled"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Disabled")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" acepta un valor "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y si el valor es "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", el componente queda deshabilitado. Si sólo necesita controlar el valor dentro de un rango, puede añadir un atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para establecer el valor mínimo y un valor "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para establecer el valor máximo. Por defecto, el valor mínimo es "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :disabled=\"true\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "steps"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#steps"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Steps")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Le permite definir el nivel de incremento de los saltos.", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Añada el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para establecer el salto.")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :step=\"2\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "step-estrictamente"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#step-estrictamente"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Step estrictamente")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "step-strictly"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" acepta "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Si este atributo es "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", el valor de entrada sólo puede ser múltiplo de step.")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :step=\"2\" step-strictly></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 2\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "precision"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#precision"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Precisión")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "precision"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" aplica presicion al valor del value.")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :precision=\"2\" :step=\"0.1\" :max=\"10\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>El valor de <code>precision</code> debe ser un numero entero positivo que no debe ser inferior a los decimales del <code>step</code>.</p></div><h3 id=\"tamano\"><a class=\"header-anchor\" href=\"#tamano\">¶</a> Tamaño</h3><p>Utilice el atributo <code>size</code> para establecer tamaños adicionales con <code>medium</code>, <code>small</code> o <code>mini</code>.</p>", 3);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num1\"></el-input-number>\n    <el-input-number size=\"medium\" v-model=\"num2\"></el-input-number>\n    <el-input-number size=\"small\" v-model=\"num3\"></el-input-number>\n    <el-input-number size=\"mini\" v-model=\"num4\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num1: 1,\n        num2: 1,\n        num3: 1,\n        num4: 1\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "posicion-de-los-controles"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#posicion-de-los-controles"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Posición de los controles")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "controls-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para decidir la posición de los botones de control.")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" controls-position=\"right\" @change=\"handleChange\" :min=\"1\" :max=\"10\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos\"><a class=\"header-anchor\" href=\"#atributos\">¶</a> Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>modelValue / v-model</td><td>valor vinculado</td><td>number</td><td>—</td><td>0</td></tr><tr><td>min</td><td>el valor mínimo permitido</td><td>number</td><td>—</td><td><code>-Infinity</code></td></tr><tr><td>max</td><td>el valor maximo permitido</td><td>number</td><td>—</td><td><code>Infinity</code></td></tr><tr><td>step</td><td>incremento (salto)</td><td>number</td><td>—</td><td>1</td></tr><tr><td>step-strictly</td><td>si el valor del input puede ser solo un multiplo de step</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>precision</td><td>precisión del valor del input</td><td>number</td><td>—</td><td>—</td></tr><tr><td>size</td><td>tamaño del componente</td><td>string</td><td>large/medium/small/mini</td><td>large</td></tr><tr><td>disabled</td><td>si el componente esta deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>controls</td><td>si se activan los botones de control</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>controls-position</td><td>posición de los botones de control</td><td>string</td><td>right</td><td>-</td></tr><tr><td>name</td><td>lo mismo que <code>name</code> en un input nativo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>texto de la etiqueta</td><td>string</td><td>—</td><td>—</td></tr><tr><td>placeholder</td><td>placeholder in input</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h3 id=\"eventos\"><a class=\"header-anchor\" href=\"#eventos\">¶</a> Eventos</h3><table><thead><tr><th>Nombre</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>change</td><td>se produce cuando el valor cambia</td><td>currentValue, oldValue</td></tr><tr><td>blur</td><td>se produce cuando el componente pierde el foco</td><td>(event: Event)</td></tr><tr><td>focus</td><td>se produce cuando el componente obtiene el foco</td><td>(event: Event)</td></tr></tbody></table><h3 id=\"metodos\"><a class=\"header-anchor\" href=\"#metodos\">¶</a> Métodos</h3><table><thead><tr><th>Método</th><th>Descripción</th><th>Parámetro</th></tr></thead><tbody><tr><td>focus</td><td>coloca el foco en el elemento actual</td><td>-</td></tr><tr><td>select</td><td>selecciona el contenido del input</td><td>-</td></tr></tbody></table>", 6);

function input_numbervue_type_template_id_5d8187ec_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27]);
}
// CONCATENATED MODULE: ./website/docs/es/input-number.md?vue&type=template&id=5d8187ec

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/input-number.md?vue&type=script&lang=ts


/* harmony default export */ var input_numbervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          onChange: _ctx.handleChange,
          min: 1,
          max: 10
        }, null, 8, ["modelValue", "onChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        },
        methods: {
          handleChange: function handleChange(value) {
            console.log(value);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          disabled: true
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          step: 2
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 5
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          step: 2,
          "step-strictly": ""
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 2
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          precision: 2,
          step: 0.1,
          max: 10
        }, null, 8, ["modelValue", "step"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num1 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input_number, {
          size: "medium",
          modelValue: _ctx.num2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.num2 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input_number, {
          size: "small",
          modelValue: _ctx.num3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.num3 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input_number, {
          size: "mini",
          modelValue: _ctx.num4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.num4 = $event;
          })
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          "controls-position": "right",
          onChange: _ctx.handleChange,
          min: 1,
          max: 10
        }, null, 8, ["modelValue", "onChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        },
        methods: {
          handleChange: function handleChange(value) {
            console.log(value);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/input-number.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/input-number.md



input_numbervue_type_script_lang_ts.render = input_numbervue_type_template_id_5d8187ec_render

/* harmony default export */ var input_number = __webpack_exports__["default"] = (input_numbervue_type_script_lang_ts);

/***/ })

}]);