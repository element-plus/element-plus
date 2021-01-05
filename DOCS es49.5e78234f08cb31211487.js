(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/slider.md?vue&type=template&id=19f94259

var slidervue_type_template_id_19f94259_hoisted_1 = {
  class: "content element-doc"
};

var slidervue_type_template_id_19f94259_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "slider"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#slider"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Slider")], -1);

var slidervue_type_template_id_19f94259_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Desliza el slider dentro de un rango fijo.", -1);

var slidervue_type_template_id_19f94259_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var slidervue_type_template_id_19f94259_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "El valor actual se muestra cuando se inicia el arrastre del slider.", -1);

var slidervue_type_template_id_19f94259_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Personalice el valor inicial del slider configurando el valor vinculado.")], -1);

var slidervue_type_template_id_19f94259_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Default value</span>\n    <el-slider v-model=\"value1\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Customized initial value</span>\n    <el-slider v-model=\"value2\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Hide Tooltip</span>\n    <el-slider v-model=\"value3\" :show-tooltip=\"false\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Format Tooltip</span>\n    <el-slider v-model=\"value4\" :format-tooltip=\"formatTooltip\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Disabled</span>\n    <el-slider v-model=\"value5\" disabled></el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 50,\n        value3: 36,\n        value4: 48,\n        value5: 42\n      }\n    },\n    methods: {\n      formatTooltip(val) {\n        return val / 100;\n      }\n    }\n  }\n</script>\n")], -1);

var slidervue_type_template_id_19f94259_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "valores-discretos"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#valores-discretos"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Valores discretos")], -1);

var slidervue_type_template_id_19f94259_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Las opciones pueden ser discretas.", -1);

var slidervue_type_template_id_19f94259_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Configure el tamaño del paso con el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Puede visualizar los puntos de ruptura configurando el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-stops"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Breakpoints not displayed</span>\n    <el-slider\n      v-model=\"value1\"\n      :step=\"10\">\n    </el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Breakpoints displayed</span>\n    <el-slider\n      v-model=\"value2\"\n      :step=\"10\"\n      show-stops>\n    </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 0\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "slider-con-input"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#slider-con-input"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Slider con input")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Inserte el valor a través de un input", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Configure el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-input"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para que muestre un input a la derecha.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider\n      v-model=\"value\"\n      show-input>\n    </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "seleccion-de-rangos"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#seleccion-de-rangos"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Seleccion de rangos")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Se soporta la selección de un rango de valores.", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El ajuste del atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "range"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" activa el modo range, donde el valor vinculado es un array compuesto por dos valores límite.")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider\n      v-model=\"value\"\n      range\n      show-stops\n      :max=\"10\">\n    </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [4, 8]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "modo-vertical"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#modo-vertical"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Modo Vertical")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El ajuste del atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" habilita el modo vertical. En el modo vertical, se requiere el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" .")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider\n      v-model=\"value\"\n      vertical\n      height=\"200px\">\n    </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "mostrar-marcas"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mostrar-marcas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Mostrar marcas")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "marks"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para mostrar marcas en el slider.")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider\n      v-model=\"value\"\n      range\n      :marks=\"marks\">\n    </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [30, 60],\n        marks: {\n          0: '0°C',\n          8: '8°C',\n          37: '37°C',\n          50: {\n            style: {\n              color: '#1989FA'\n            },\n            label: '50%'\n          }\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"atributos\"><a class=\"header-anchor\" href=\"#atributos\">¶</a> Atributos</h2><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor enlazado</td><td>number</td><td>—</td><td>0</td></tr><tr><td>min</td><td>valor mínimo</td><td>number</td><td>—</td><td>0</td></tr><tr><td>max</td><td>valor máximo</td><td>number</td><td>—</td><td>100</td></tr><tr><td>disabled</td><td>si el Slider esta deshabitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>step</td><td>tamaño del paso</td><td>number</td><td>—</td><td>1</td></tr><tr><td>show-input</td><td>Si se muestra el input, trabaja cuando <code>range</code>es false</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-input-controls</td><td>si se muestran los botones de control cuando<code>show-input</code>es true</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>input-size</td><td>tamaño del input</td><td>string</td><td>large / medium / small / mini</td><td>small</td></tr><tr><td>show-stops</td><td>si se muestran los puntos de ruptura (breakpoints)</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-tooltip</td><td>si se muestra el valor en un tooltip</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>format-tooltip</td><td>formato para mostrar el valor del tooltip</td><td>function(value)</td><td>—</td><td>—</td></tr><tr><td>range</td><td>si se usaran un rango</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>vertical</td><td>modo vertical</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>height</td><td>alto del Slider, requerido en modo vertical</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>etiqueta para screen reader</td><td>string</td><td>—</td><td>—</td></tr><tr><td>debounce</td><td>retardo al escribir, en milisegundos, funciona cuando<code>show-input</code> es true.</td><td>number</td><td>—</td><td>300</td></tr><tr><td>tooltip-class</td><td>nombre personalizado de clase para el tooltip</td><td>string</td><td>—</td><td>—</td></tr><tr><td>marks</td><td>marcas, tipo de clave debe ser <code>number</code> y debe estar en intervalo cerrado [min, max], cada marca puede tener estilo personalizado</td><td>object</td><td>—</td><td>—</td></tr></tbody></table><h2 id=\"eventos\"><a class=\"header-anchor\" href=\"#eventos\">¶</a> Eventos</h2><table><thead><tr><th>Nombre</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>change</td><td>se dispara cuando el valor cambia (si el ratón está comenzando el arrastre este evento sólo se disparara cuando se suelte el ratón)</td><td>valor despues del cambio</td></tr><tr><td>input</td><td>triggers when the data changes (It&#39;ll be emitted in real time during sliding)</td><td>value after changing</td></tr></tbody></table>", 4);

function slidervue_type_template_id_19f94259_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", slidervue_type_template_id_19f94259_hoisted_1, [slidervue_type_template_id_19f94259_hoisted_2, slidervue_type_template_id_19f94259_hoisted_3, slidervue_type_template_id_19f94259_hoisted_4, slidervue_type_template_id_19f94259_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [slidervue_type_template_id_19f94259_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [slidervue_type_template_id_19f94259_hoisted_6];
    }),
    _: 1
  }), slidervue_type_template_id_19f94259_hoisted_8, slidervue_type_template_id_19f94259_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [slidervue_type_template_id_19f94259_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
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
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26]);
}
// CONCATENATED MODULE: ./website/docs/es/slider.md?vue&type=template&id=19f94259

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/slider.md?vue&type=script&lang=ts


/* harmony default export */ var slidervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Default value", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Customized initial value", -1);

      var _hoisted_5 = {
        class: "block"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Hide Tooltip", -1);

      var _hoisted_7 = {
        class: "block"
      };

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Format Tooltip", -1);

      var _hoisted_9 = {
        class: "block"
      };

      var _hoisted_10 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Disabled", -1);

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_slider, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_slider, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
          modelValue: _ctx.value3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.value3 = $event;
          }),
          "show-tooltip": false
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_slider, {
          modelValue: _ctx.value4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.value4 = $event;
          }),
          "format-tooltip": _ctx.formatTooltip
        }, null, 8, ["modelValue", "format-tooltip"])]), _createVNode("div", _hoisted_9, [_hoisted_10, _createVNode(_component_el_slider, {
          modelValue: _ctx.value5,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.value5 = $event;
          }),
          disabled: ""
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 42
          };
        },
        methods: {
          formatTooltip: function formatTooltip(val) {
            return val / 100;
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
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Breakpoints not displayed", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Breakpoints displayed", -1);

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_slider, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          step: 10
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_slider, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          step: 10,
          "show-stops": ""
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: 0,
            value2: 0
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
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "show-input": ""
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: 0
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
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          range: "",
          "show-stops": "",
          max: 10
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: [4, 8]
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
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          vertical: "",
          height: "200px"
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: 0
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
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          range: "",
          marks: _ctx.marks
        }, null, 8, ["modelValue", "marks"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: [30, 60],
            marks: {
              0: '0°C',
              8: '8°C',
              37: '37°C',
              50: {
                style: {
                  color: '#1989FA'
                },
                label: '50%'
              }
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/slider.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/slider.md



slidervue_type_script_lang_ts.render = slidervue_type_template_id_19f94259_render

/* harmony default export */ var slider = __webpack_exports__["default"] = (slidervue_type_script_lang_ts);

/***/ })

}]);