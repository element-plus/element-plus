(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[134],{

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/time-select.md?vue&type=template&id=3af74ff8

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("TimeSelect ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Use el Time Select para input de tipo time.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Selector de tiempo fijo ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Provee una lista de tiempo fijo para que los usuarios escojan.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use el tag "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-time-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", se pueden asignar tiempo de inicio, tiempo de finalización y salto de tiempo con "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "start"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "end"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-time-select\n  v-model=\"value\"\n  start=\"08:30\"\n  step=\"00:15\"\n  end=\"18:30\"\n  placeholder=\"Select time\"\n>\n</el-time-select>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Rango de tiempo fijo ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Si se escoge el tiempo de inicio al principio, el tiempo de finalización cambiará respectivamente.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-time-select\n    placeholder=\"Start time\"\n    v-model=\"startTime\"\n    start=\"08:30\"\n    step=\"00:15\"\n    end=\"18:30\"\n  >\n  </el-time-select>\n  <el-time-select\n    placeholder=\"End time\"\n    v-model=\"endTime\"\n    start=\"08:30\"\n    step=\"00:15\"\n    end=\"18:30\"\n    :minTime=\"startTime\"\n  >\n  </el-time-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        startTime: '',\n        endTime: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>valor enlazado</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si el TimeSelect se encuentra deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>si el input puede ser editado</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>si mostrar el botón de borrado</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>tamaño del input</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>placeholder en un modo fuera de rango</td><td>string</td><td>—</td><td>—</td></tr><tr><td>name</td><td>como <code>name</code> en input nativo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>Clase personalizada para el icono de prefijado</td><td>string</td><td>—</td><td>el-icon-time</td></tr><tr><td>clear-icon</td><td>Clase personalizada para el icono <code>clear</code></td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr><tr><td>start</td><td>tiempo de inicio</td><td>string</td><td>—</td><td>09:00</td></tr><tr><td>end</td><td>tiempo de finalización</td><td>string</td><td>—</td><td>18:00</td></tr><tr><td>step</td><td>salto de tiempo</td><td>string</td><td>—</td><td>00:30</td></tr><tr><td>minTime</td><td>tiempo mínimo, cualquier tiempo antes de éste será deshabilitado</td><td>string</td><td>—</td><td>00:00</td></tr><tr><td>maxTime</td><td>tiempo máximo, cualquier tiempo después de éste será deshabilitado</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre de Evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>change</td><td>se lanza cuando el usuario confirma el valor</td><td>valor vinculado del componente</td></tr><tr><td>blur</td><td>se lanza cuando el input se difumina</td><td>instancia del componente</td></tr><tr><td>focus</td><td>se lanza cuando el input se enfoca</td><td>instancia del componente</td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Metodos ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parameteros</th></tr></thead><tbody><tr><td>focus</td><td>coloca el foco en el input</td><td>—</td></tr><tr><td>blur</td><td>quitar el foco en el input</td><td>—</td></tr></tbody></table>", 1);

function time_selectvue_type_template_id_3af74ff8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "timeselect",
    content: "TimeSelect",
    href: "#timeselect",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#timeselect"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "selector-de-tiempo-fijo",
    content: "Selector de tiempo fijo",
    href: "#selector-de-tiempo-fijo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#selector-de-tiempo-fijo"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "rango-de-tiempo-fijo",
    content: "Rango de tiempo fijo",
    href: "#rango-de-tiempo-fijo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rango-de-tiempo-fijo"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos",
    content: "Eventos",
    href: "#eventos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "metodos",
    content: "Metodos",
    href: "#metodos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#metodos"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/time-select.md?vue&type=template&id=3af74ff8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/time-select.md?vue&type=script&lang=ts

/* harmony default export */ var time_selectvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_time_select = _resolveComponent("el-time-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_time_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          start: "08:30",
          step: "00:15",
          end: "18:30",
          placeholder: "Select time"
        }, null, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: ''
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
        const _component_el_time_select = _resolveComponent("el-time-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_time_select, {
          placeholder: "Start time",
          modelValue: _ctx.startTime,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.startTime = $event),
          start: "08:30",
          step: "00:15",
          end: "18:30"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_select, {
          placeholder: "End time",
          modelValue: _ctx.endTime,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.endTime = $event),
          start: "08:30",
          step: "00:15",
          end: "18:30",
          minTime: _ctx.startTime
        }, null, 8, ["modelValue", "minTime"])]);
      }

      const democomponentExport = {
        data() {
          return {
            startTime: '',
            endTime: ''
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
// CONCATENATED MODULE: ./website/docs/es/time-select.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/time-select.md



time_selectvue_type_script_lang_ts.render = time_selectvue_type_template_id_3af74ff8_render

/* harmony default export */ var time_select = __webpack_exports__["default"] = (time_selectvue_type_script_lang_ts);

/***/ })

}]);