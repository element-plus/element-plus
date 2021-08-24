(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/alert.md?vue&type=template&id=a864a1f8

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Alert ");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Mostrar mensajes de alertas importantes.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Uso básico ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Los componentes de alertas no son elementos overlay de la página y no desaparecen automáticamente.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Alert provee 4 tipos de temas definidos por "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", el valor por defecto es "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\">\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\">\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\">\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\">\n  </el-alert>\n</template>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Theme ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Alert provee dos diferentes temas "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para cambiar el tema, por defecto es "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\"\n    effect=\"dark\">\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\"\n    effect=\"dark\">\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\"\n    effect=\"dark\">\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\"\n    effect=\"dark\">\n  </el-alert>\n</template>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Personalización del botón de cerrar ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Personalizar el botón de cerrar como texto u otros símbolos.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Alert permite configurar si es posible cerrarla. El texto del botón de cerrado, así como los callbacks de cerrado son personalizables. El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" define si el componente puede cerrarse o no. Acepta un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", que por defecto es "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". También puede configurar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "close-text"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para reemplazar el símbolo de cerrado que se muestra por defecto. El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "close-text"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" debe ser un string. El evento "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" se dispara cuando el componente se cierra.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"unclosable alert\"\n    type=\"success\"\n    :closable=\"false\">\n  </el-alert>\n  <el-alert\n    title=\"customized close-text\"\n    type=\"info\"\n    close-text=\"Gotcha\">\n  </el-alert>\n  <el-alert\n    title=\"alert with callback\"\n    type=\"warning\"\n    @close=\"hello\">\n  </el-alert>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  export default defineComponent({\n    setup() {\n      const hello = () => {\n        alert('Hello World!');\n      }\n      return {\n        hello\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Usar iconos ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Mostrar un icono mejora la legibilidad.", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Setear el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "show-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" muestra un icono que corresponde al tipo de Alert que se está mostrando.")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\"\n    show-icon>\n  </el-alert>\n</template>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Texto centrado ");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Para centrar el texto utilice el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\"\n    center\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\"\n    center\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\"\n    center\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\"\n    center\n    show-icon>\n  </el-alert>\n</template>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Con descripción ");

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Descripción incluye un mensaje con información más detallada.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Además del atributo requerido "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", se puede agregar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "description"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para ayudar a describir la alerta con mas detalles. La descripción puede contener solamente un string y va a usar word wrap automáticamente.")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"with description\"\n    type=\"success\"\n    description=\"This is a description.\">\n  </el-alert>\n</template>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilizando icono y descripción ");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Finalmente este es un ejemplo utilizando icono y descripción.")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\"\n    description=\"more text description\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\"\n    description=\"more text description\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\"\n    description=\"more text description\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\"\n    description=\"more text description\"\n    show-icon>\n  </el-alert>\n</template>\n")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Atributos ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>title</td><td>título</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>tipo de componente</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>description</td><td>texto descriptivo. También puede ser pasado con el slot por defecto</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closable</td><td>si se puede cerrar o no</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>center</td><td>si el texto debe estar centrado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>close-text</td><td>texto de cerrado personalizado</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-icon</td><td>si un icono del tipo de alerta se debe mostrar</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>effect</td><td>Choose theme</td><td>string</td><td>light/dark</td><td>light</td></tr></tbody></table>", 1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Slot ");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "descripción")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "El contenido del título de alerta.")])])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Eventos ");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Nombre del evento"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Parámetros")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Se dispara cuando la alerta se cierra"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")])])], -1);

function alertvue_type_template_id_a864a1f8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "alert",
    content: "Alert",
    href: "#alert",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#alert"
      })];
    }),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#uso-basico"
      })];
    }),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "theme",
    content: "Theme",
    href: "#theme",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#theme"
      })];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "personalizacion-del-boton-de-cerrar",
    content: "Personalización del botón de cerrar",
    href: "#personalizacion-del-boton-de-cerrar",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#personalizacion-del-boton-de-cerrar"
      })];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "usar-iconos",
    content: "Usar iconos",
    href: "#usar-iconos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#usar-iconos"
      })];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "texto-centrado",
    content: "Texto centrado",
    href: "#texto-centrado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#texto-centrado"
      })];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "con-descripcion",
    content: "Con descripción",
    href: "#con-descripcion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#con-descripcion"
      })];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "utilizando-icono-y-descripcion",
    content: "Utilizando icono y descripción",
    href: "#utilizando-icono-y-descripcion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#utilizando-icono-y-descripcion"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#atributos"
      })];
    }),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#slot"
      })];
    }),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "eventos",
    content: "Eventos",
    href: "#eventos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#eventos"
      })];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/alert.md?vue&type=template&id=a864a1f8

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/alert.md?vue&type=script&lang=ts


/* harmony default export */ var alertvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "success alert",
          type: "success"
        }), _createVNode(_component_el_alert, {
          title: "info alert",
          type: "info"
        }), _createVNode(_component_el_alert, {
          title: "warning alert",
          type: "warning"
        }), _createVNode(_component_el_alert, {
          title: "error alert",
          type: "error"
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "success alert",
          type: "success",
          effect: "dark"
        }), _createVNode(_component_el_alert, {
          title: "info alert",
          type: "info",
          effect: "dark"
        }), _createVNode(_component_el_alert, {
          title: "warning alert",
          type: "warning",
          effect: "dark"
        }), _createVNode(_component_el_alert, {
          title: "error alert",
          type: "error",
          effect: "dark"
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "unclosable alert",
          type: "success",
          closable: false
        }), _createVNode(_component_el_alert, {
          title: "customized close-text",
          type: "info",
          "close-text": "Gotcha"
        }), _createVNode(_component_el_alert, {
          title: "alert with callback",
          type: "warning",
          onClose: _ctx.hello
        }, null, 8, ["onClose"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var hello = function hello() {
            alert('Hello World!');
          };

          return {
            hello: hello
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "success alert",
          type: "success",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "info alert",
          type: "info",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "warning alert",
          type: "warning",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "error alert",
          type: "error",
          "show-icon": ""
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "success alert",
          type: "success",
          center: "",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "info alert",
          type: "info",
          center: "",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "warning alert",
          type: "warning",
          center: "",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "error alert",
          type: "error",
          center: "",
          "show-icon": ""
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "with description",
          type: "success",
          description: "This is a description."
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "success alert",
          type: "success",
          description: "more text description",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "info alert",
          type: "info",
          description: "more text description",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "warning alert",
          type: "warning",
          description: "more text description",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "error alert",
          type: "error",
          description: "more text description",
          "show-icon": ""
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/alert.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/alert.md



alertvue_type_script_lang_ts.render = alertvue_type_template_id_a864a1f8_render

/* harmony default export */ var es_alert = __webpack_exports__["default"] = (alertvue_type_script_lang_ts);

/***/ })

}]);