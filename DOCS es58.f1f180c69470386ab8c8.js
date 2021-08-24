(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/steps.md?vue&type=template&id=4066690b

var stepsvue_type_template_id_4066690b_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Steps ");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Guía al usuario para completar tareas de acuerdo con el proceso. Sus pasos pueden configurarse de acuerdo con el escenario de aplicación real y el número de pasos no puede ser inferior a dos.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Uso básico ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Barra de pasos simple.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Defina el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "active"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" con un valor de tipo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", que indica el índice de pasos y comienza desde 0. Puede definir el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" cuando es necesario fijar el ancho del paso que acepta el tipo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". La unidad del atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" es px. Si no está configurado, es responsive. La configuración del atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "finish-status"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" puede cambiar el estado de los pasos completados.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"active\" finish-status=\"success\">\n  <el-step title=\"Step 1\"></el-step>\n  <el-step title=\"Step 2\"></el-step>\n  <el-step title=\"Step 3\"></el-step>\n</el-steps>\n\n<el-button style=\"margin-top: 12px;\" @click=\"next\">Next step</el-button>\n\n<script>\n  export default {\n    data() {\n      return {\n        active: 0\n      };\n    },\n\n    methods: {\n      next() {\n        if (this.active++ > 2) this.active = 0;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Step bar con el estatus ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Muestra el estado del step para cada paso.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilice el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para establecer el nombre del paso, o sobrescriba el atributo usando un slot con nombre. Hemos enumerado todos los nombres de slots al final de esta página.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :space=\"200\" :active=\"1\" finish-status=\"success\">\n  <el-step title=\"Done\"></el-step>\n  <el-step title=\"Processing\"></el-step>\n  <el-step title=\"Step 3\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Centrado ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "El título y la descripción pueden estar centrados.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"2\" align-center>\n  <el-step title=\"Step 1\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 2\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 3\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 4\" description=\"Some description\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Step bar con descripción ");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Puede poner una descripción para cada paso.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"1\">\n  <el-step title=\"Step 1\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 2\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 3\" description=\"Some description\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Step bar con icono ");

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "En la barra de pasos se pueden utilizar diversos iconos personalizados.", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("El icono se define mediante la propiedad "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "icon"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Los tipos de iconos se pueden encontrar en la descripción del componente Icono. Además, puede personalizar el icono a través de un slot con nombre.")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"1\">\n  <el-step title=\"Step 1\" icon=\"el-icon-edit\"></el-step>\n  <el-step title=\"Step 2\" icon=\"el-icon-upload\"></el-step>\n  <el-step title=\"Step 3\" icon=\"el-icon-picture\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Step bar vertical ");

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Step bar vertical.", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Sólo tiene que fijar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, " vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" en el elemento "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-steps"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div style=\"height: 300px;\">\n  <el-steps direction=\"vertical\" :active=\"1\">\n    <el-step title=\"Step 1\"></el-step>\n    <el-step title=\"Step 2\"></el-step>\n    <el-step title=\"Step 3\"></el-step>\n  </el-steps>\n</div>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Step bar simple ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Step bar simple, donde se ignorará "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "align-center"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "description"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<el-steps :space=\"200\" :active=\"1\" simple>\n  <el-step title=\"Step 1\" icon=\"el-icon-edit\"></el-step>\n  <el-step title=\"Step 2\" icon=\"el-icon-upload\"></el-step>\n  <el-step title=\"Step 3\" icon=\"el-icon-picture\"></el-step>\n</el-steps>\n\n<el-steps :active=\"1\" finish-status=\"success\" simple style=\"margin-top: 20px\">\n  <el-step title=\"Step 1\" ></el-step>\n  <el-step title=\"Step 2\" ></el-step>\n  <el-step title=\"Step 3\" ></el-step>\n</el-steps>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Steps atributos ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>space</td><td>el espaciado de cada paso, será responsivo si se omite. Soporta porcentaje.</td><td>number / string</td><td>—</td><td>—</td></tr><tr><td>direction</td><td>dirección de visualización</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>active</td><td>actual paso de activación</td><td>number</td><td>—</td><td>0</td></tr><tr><td>process-status</td><td>estatus del paso actual</td><td>string</td><td>wait / process / finish / error / success</td><td>process</td></tr><tr><td>finish-status</td><td>estatus del paso final</td><td>string</td><td>wait / process / finish / error / success</td><td>finish</td></tr><tr><td>align-center</td><td>centrado de título y descripción</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>simple</td><td>si aplicar un tema simple</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table>", 1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Step atributos ");

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>title</td><td>titulo del paso</td><td>string</td><td>—</td><td>—</td></tr><tr><td>description</td><td>descripción del paso</td><td>string</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>icono del paso</td><td>nombre de la clase del icono del paso. Los iconos también se pueden pasar a través del slot con nombre</td><td>string</td><td>—</td></tr><tr><td>status</td><td>estado actual. Se configurará automáticamente mediante Steps si no está configurado.</td><td>wait / process / finish / error / success</td><td>-</td><td></td></tr></tbody></table>", 1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Step Slot ");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>Icono personalizado</td></tr><tr><td>title</td><td>Titulo del paso</td></tr><tr><td>description</td><td>Descripción del paso</td></tr></tbody></table>", 1);

function stepsvue_type_template_id_4066690b_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", stepsvue_type_template_id_4066690b_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "steps",
    content: "Steps",
    href: "#steps",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#steps"
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
    id: "step-bar-con-el-estatus",
    content: "Step bar con el estatus",
    href: "#step-bar-con-el-estatus",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#step-bar-con-el-estatus"
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
    id: "centrado",
    content: "Centrado",
    href: "#centrado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#centrado"
      })];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "step-bar-con-descripcion",
    content: "Step bar con descripción",
    href: "#step-bar-con-descripcion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#step-bar-con-descripcion"
      })];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "step-bar-con-icono",
    content: "Step bar con icono",
    href: "#step-bar-con-icono",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#step-bar-con-icono"
      })];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "step-bar-vertical",
    content: "Step bar vertical",
    href: "#step-bar-vertical",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#step-bar-vertical"
      })];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "step-bar-simple",
    content: "Step bar simple",
    href: "#step-bar-simple",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#step-bar-simple"
      })];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "steps-atributos",
    content: "Steps atributos",
    href: "#steps-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#steps-atributos"
      })];
    }),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "step-atributos",
    content: "Step atributos",
    href: "#step-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#step-atributos"
      })];
    }),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "step-slot",
    content: "Step Slot",
    href: "#step-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#step-slot"
      })];
    }),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/steps.md?vue&type=template&id=4066690b

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/steps.md?vue&type=script&lang=ts


/* harmony default export */ var stepsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Next step");

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: _ctx.active,
          "finish-status": "success"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1"
            }), _createVNode(_component_el_step, {
              title: "Step 2"
            }), _createVNode(_component_el_step, {
              title: "Step 3"
            })];
          }),
          _: 1
        }, 8, ["active"]), _createVNode(_component_el_button, {
          style: {
            "margin-top": "12px"
          },
          onClick: _ctx.next
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            active: 0
          };
        },
        methods: {
          next: function next() {
            if (this.active++ > 2) this.active = 0;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          space: 200,
          active: 1,
          "finish-status": "success"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Done"
            }), _createVNode(_component_el_step, {
              title: "Processing"
            }), _createVNode(_component_el_step, {
              title: "Step 3"
            })];
          }),
          _: 1
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
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: 2,
          "align-center": ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1",
              description: "Some description"
            }), _createVNode(_component_el_step, {
              title: "Step 2",
              description: "Some description"
            }), _createVNode(_component_el_step, {
              title: "Step 3",
              description: "Some description"
            }), _createVNode(_component_el_step, {
              title: "Step 4",
              description: "Some description"
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1",
              description: "Some description"
            }), _createVNode(_component_el_step, {
              title: "Step 2",
              description: "Some description"
            }), _createVNode(_component_el_step, {
              title: "Step 3",
              description: "Some description"
            })];
          }),
          _: 1
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
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1",
              icon: "el-icon-edit"
            }), _createVNode(_component_el_step, {
              title: "Step 2",
              icon: "el-icon-upload"
            }), _createVNode(_component_el_step, {
              title: "Step 3",
              icon: "el-icon-picture"
            })];
          }),
          _: 1
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
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "height": "300px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_steps, {
          direction: "vertical",
          active: 1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1"
            }), _createVNode(_component_el_step, {
              title: "Step 2"
            }), _createVNode(_component_el_step, {
              title: "Step 3"
            })];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          space: 200,
          active: 1,
          simple: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1",
              icon: "el-icon-edit"
            }), _createVNode(_component_el_step, {
              title: "Step 2",
              icon: "el-icon-upload"
            }), _createVNode(_component_el_step, {
              title: "Step 3",
              icon: "el-icon-picture"
            })];
          }),
          _: 1
        }), _createVNode(_component_el_steps, {
          active: 1,
          "finish-status": "success",
          simple: "",
          style: {
            "margin-top": "20px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1"
            }), _createVNode(_component_el_step, {
              title: "Step 2"
            }), _createVNode(_component_el_step, {
              title: "Step 3"
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
// CONCATENATED MODULE: ./website/docs/es/steps.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/steps.md



stepsvue_type_script_lang_ts.render = stepsvue_type_template_id_4066690b_render

/* harmony default export */ var steps = __webpack_exports__["default"] = (stepsvue_type_script_lang_ts);

/***/ })

}]);