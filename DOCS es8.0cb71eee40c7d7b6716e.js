(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[143],{

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/calendar.md?vue&type=template&id=578663d6

const calendarvue_type_template_id_578663d6_hoisted_1 = {
  class: "content element-doc"
};

const calendarvue_type_template_id_578663d6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Calendar ");

const calendarvue_type_template_id_578663d6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Muestra fechas.", -1);

const calendarvue_type_template_id_578663d6_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Básico ");

const calendarvue_type_template_id_578663d6_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Configure el valor para especificar el mes que se muestra actualmente. Si no se especifica el valor, se muestra el mes actual. el valor soporta la vinculación bidireccional.")], -1);

const calendarvue_type_template_id_578663d6_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-calendar v-model=\"value\"> </el-calendar>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: new Date(),\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const value = ref(new Date());\n\n      return {\n        value,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Contenido personalizado ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Personalice lo que se muestra en la celda del calendario configurando el "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "scoped-slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" llamada "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dateCell"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". En la ranura de alcance se puede obtener la fecha (la fecha de la celda actual), los datos (incluyendo el tipo, isSelected, el atributo day). Para obtener más información, consulte la documentación de la API a continuación.")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-calendar>\n  <template #dateCell=\"{data}\">\n    <p :class=\"data.isSelected ? 'is-selected' : ''\">\n      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' :\n      '' }}\n    </p>\n  </template>\n</el-calendar>\n<style>\n  .is-selected {\n    color: #1989fa;\n  }\n</style>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Rango ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Defina el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "range"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para especificar el rango de visualización del calendario. El tiempo de inicio debe ser el lunes, el tiempo de finalización debe ser el domingo y el período no puede exceder los dos meses.")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-calendar :range=\"[new Date(2019, 2, 4), new Date(2019, 2, 24)]\">\n</el-calendar>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cabeza personalizada ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("stración configurando el nombre "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "header"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "scoped-slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" Personaliza el contenido que se muestra en el encabezado del calendario. existe "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "scoped-slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" Puede obtener la fecha (la fecha de la celda actual). Para obtener más información, consulte la documentación de la API a continuación.")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-calendar ref=\"calendar\">\n  <template #header=\"{date}\">\n    <span>Contenido de encabezado personalizado</span>\n    <span>{{ date }}</span>\n    <el-button-group>\n      <el-button size=\"mini\" @click=\"selectDate('prev-year')\"\n        >el año pasado</el-button\n      >\n      <el-button size=\"mini\" @click=\"selectDate('prev-month')\"\n        >el mes pasado</el-button\n      >\n      <el-button size=\"mini\" @click=\"selectDate('today')\">Hoy en día</el-button>\n      <el-button size=\"mini\" @click=\"selectDate('next-month')\"\n        >próximo mes</el-button\n      >\n      <el-button size=\"mini\" @click=\"selectDate('next-year')\"\n        >el próximo año</el-button\n      >\n    </el-button-group>\n  </template>\n</el-calendar>\n\n<script>\n  export default {\n    methods: {\n      selectDate(value) {\n        this.$refs.calendar.selectDate(value)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Localization ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The default locale of is English, if you need to use other languages, please check ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Internationalization");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Note, date time locale (month name, first day of the week ...) are also configed in localization.", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>valor vinculante</td><td>Date</td><td>—</td><td>—</td></tr><tr><td>range</td><td>rango de tiempo, incluyendo el tiempo de inicio y el tiempo final. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months</td><td>[Date]Array</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("dateCell scoped slot ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>data</td><td>{ type, isSelected, day, date}. <code>type</code> indica el mes al que pertenece la fecha, los valores opcionales son mes anterior, mes actual, mes siguiente; <code>isSelected</code> indica si la fecha está seleccionada; <code>day</code> es la fecha formateada en el formato yyyy-MM-dd; <code>date</code> es la fecha que la celda representa</td><td>Object</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Methods ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Attribute")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "selectDate"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Cambiar fecha"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "today / prev-month / next-month / prev-year / next-year")])])], -1);

function calendarvue_type_template_id_578663d6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", calendarvue_type_template_id_578663d6_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "calendar",
    content: "Calendar",
    href: "#calendar",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [calendarvue_type_template_id_578663d6_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#calendar"
    })]),
    _: 1
  }), calendarvue_type_template_id_578663d6_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basico",
    content: "Básico",
    href: "#basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [calendarvue_type_template_id_578663d6_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basico"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [calendarvue_type_template_id_578663d6_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [calendarvue_type_template_id_578663d6_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "contenido-personalizado",
    content: "Contenido personalizado",
    href: "#contenido-personalizado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#contenido-personalizado"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "rango",
    content: "Rango",
    href: "#rango",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rango"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cabeza-personalizada",
    content: "Cabeza personalizada",
    href: "#cabeza-personalizada",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cabeza-personalizada"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "localization",
    content: "Localization",
    href: "#localization",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#localization"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "#/es/component/i18n"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  })]), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "datecell-scoped-slot",
    content: "dateCell scoped slot",
    href: "#datecell-scoped-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#datecell-scoped-slot"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methods",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/calendar.md?vue&type=template&id=578663d6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/calendar.md?vue&type=script&lang=ts

/* harmony default export */ var calendarvue_type_script_lang_ts = ({
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
        const _component_el_calendar = _resolveComponent("el-calendar");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_calendar, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event)
        }, null, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: new Date()
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
        toDisplayString: _toDisplayString,
        normalizeClass: _normalizeClass,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_calendar = _resolveComponent("el-calendar");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_calendar, null, {
          dateCell: _withCtx(({
            data
          }) => [_createElementVNode("p", {
            class: _normalizeClass(data.isSelected ? 'is-selected' : '')
          }, _toDisplayString(data.day.split('-').slice(1).join('-')) + " " + _toDisplayString(data.isSelected ? '✔️' : ''), 3)]),
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_calendar = _resolveComponent("el-calendar");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_calendar, {
          range: [new Date(2019, 2, 4), new Date(2019, 2, 24)]
        }, null, 8, ["range"])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        createElementVNode: _createElementVNode,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("span", null, "Contenido de encabezado personalizado", -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("el año pasado");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("el mes pasado");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Hoy en día");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("próximo mes");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("el próximo año");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_button_group = _resolveComponent("el-button-group");

        const _component_el_calendar = _resolveComponent("el-calendar");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_calendar, {
          ref: "calendar"
        }, {
          header: _withCtx(({
            date
          }) => [_hoisted_1, _createElementVNode("span", null, _toDisplayString(date), 1), _createVNode(_component_el_button_group, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              size: "mini",
              onClick: _cache[0] || (_cache[0] = $event => _ctx.selectDate('prev-year'))
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }), _createVNode(_component_el_button, {
              size: "mini",
              onClick: _cache[1] || (_cache[1] = $event => _ctx.selectDate('prev-month'))
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }), _createVNode(_component_el_button, {
              size: "mini",
              onClick: _cache[2] || (_cache[2] = $event => _ctx.selectDate('today'))
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }), _createVNode(_component_el_button, {
              size: "mini",
              onClick: _cache[3] || (_cache[3] = $event => _ctx.selectDate('next-month'))
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }), _createVNode(_component_el_button, {
              size: "mini",
              onClick: _cache[4] || (_cache[4] = $event => _ctx.selectDate('next-year'))
            }, {
              default: _withCtx(() => [_hoisted_6]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        methods: {
          selectDate(value) {
            this.$refs.calendar.selectDate(value);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/calendar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/calendar.md



calendarvue_type_script_lang_ts.render = calendarvue_type_template_id_578663d6_render

/* harmony default export */ var calendar = __webpack_exports__["default"] = (calendarvue_type_script_lang_ts);

/***/ })

}]);