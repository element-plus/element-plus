(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/time-select.md?vue&type=template&id=3402aede

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "timeselect"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#timeselect"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" TimeSelect")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Use el Time Select para input de tipo time.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "selector-de-tiempo-fijo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#selector-de-tiempo-fijo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Selector de tiempo fijo")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Provee una lista de tiempo fijo para que los usuarios escojan.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use el tag "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-time-select"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", se pueden asignar tiempo de inicio, tiempo de finalización y salto de tiempo con "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "start"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "end"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-time-select\n  v-model=\"value\"\n  start='08:30'\n  step='00:15'\n  end='18:30'\n  placeholder=\"Select time\">\n</el-time-select>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: ''\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "rango-de-tiempo-fijo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rango-de-tiempo-fijo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Rango de tiempo fijo")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Si se escoge el tiempo de inicio al principio, el tiempo de finalización cambiará respectivamente.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-select\n    placeholder=\"Start time\"\n    v-model=\"startTime\"\n    start='08:30'\n  step='00:15'\n  end='18:30'>\n  </el-time-select>\n  <el-time-select\n    placeholder=\"End time\"\n    v-model=\"endTime\"\n    start='08:30'\n    step='00:15'\n    end='18:30'\n    :minTime=\"startTime\">\n  </el-time-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        startTime: '',\n        endTime: ''\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos\"><a class=\"header-anchor\" href=\"#atributos\">¶</a> Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor enlazado</td><td>string</td><td>-</td><td>-</td></tr><tr><td>editable</td><td>si el input puede ser editado</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>si mostrar el botón de borrado</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>tamaño del input</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>placeholder en un modo fuera de rango</td><td>string</td><td>—</td><td>—</td></tr><tr><td>name</td><td>como <code>name</code> en input nativo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>Clase personalizada para el icono de prefijado</td><td>string</td><td>—</td><td>el-icon-time</td></tr><tr><td>clear-icon</td><td>Clase personalizada para el icono <code>clear</code></td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr><tr><td>start</td><td>tiempo de inicio</td><td>string</td><td>—</td><td>09:00</td></tr><tr><td>end</td><td>tiempo de finalización</td><td>string</td><td>—</td><td>18:00</td></tr><tr><td>step</td><td>salto de tiempo</td><td>string</td><td>—</td><td>00:30</td></tr><tr><td>minTime</td><td>tiempo mínimo, cualquier tiempo antes de éste será deshabilitado</td><td>string</td><td>—</td><td>00:00</td></tr><tr><td>maxTime</td><td>tiempo máximo, cualquier tiempo después de éste será deshabilitado</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"eventos\"><a class=\"header-anchor\" href=\"#eventos\">¶</a> Eventos</h3><table><thead><tr><th>Nombre de Evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>change</td><td>se lanza cuando el usuario confirma el valor</td><td>valor vinculado del componente</td></tr><tr><td>blur</td><td>se lanza cuando el input se difumina</td><td>instancia del componente</td></tr><tr><td>focus</td><td>se lanza cuando el input se enfoca</td><td>instancia del componente</td></tr></tbody></table><h3 id=\"metodos\"><a class=\"header-anchor\" href=\"#metodos\">¶</a> Metodos</h3><table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parameteros</th></tr></thead><tbody><tr><td>focus</td><td>coloca el foco en el input</td><td>—</td></tr><tr><td>blur</td><td>quitar el foco en el input</td><td>—</td></tr></tbody></table>", 6);

function time_selectvue_type_template_id_3402aede_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_11]);
}
// CONCATENATED MODULE: ./website/docs/es/time-select.md?vue&type=template&id=3402aede

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/time-select.md?vue&type=script&lang=ts


/* harmony default export */ var time_selectvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_time_select = _resolveComponent("el-time-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          start: "08:30",
          step: "00:15",
          end: "18:30",
          placeholder: "Select time"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: ''
          };
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
        var _component_el_time_select = _resolveComponent("el-time-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_select, {
          placeholder: "Start time",
          modelValue: _ctx.startTime,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.startTime = $event;
          }),
          start: "08:30",
          step: "00:15",
          end: "18:30"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_select, {
          placeholder: "End time",
          modelValue: _ctx.endTime,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.endTime = $event;
          }),
          start: "08:30",
          step: "00:15",
          end: "18:30",
          minTime: _ctx.startTime
        }, null, 8, ["modelValue", "minTime"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            startTime: '',
            endTime: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/time-select.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/time-select.md



time_selectvue_type_script_lang_ts.render = time_selectvue_type_template_id_3402aede_render

/* harmony default export */ var time_select = __webpack_exports__["default"] = (time_selectvue_type_script_lang_ts);

/***/ })

}]);