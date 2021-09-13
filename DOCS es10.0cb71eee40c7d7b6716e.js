(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/carousel.md?vue&type=template&id=3ad7b085

const carouselvue_type_template_id_3ad7b085_hoisted_1 = {
  class: "content element-doc"
};

const carouselvue_type_template_id_3ad7b085_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Carousel ");

const carouselvue_type_template_id_3ad7b085_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Presenta una serie de imágenes o textos en un espacio limitado", -1);

const carouselvue_type_template_id_3ad7b085_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const carouselvue_type_template_id_3ad7b085_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Combine "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-carousel"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" con "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", para conseguir el carrusel. El contenido de cada diapositiva es completamente personalizable, y sólo tiene que colocarla dentro de la etiqueta "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" . Por defecto, el carrusel cambia cuando el ratón pasa por encima de un indicador. Fije "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", si lo que se desea es que el carrusel cambie sólo cuando se haga clic en un indicador.")])], -1);

const carouselvue_type_template_id_3ad7b085_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\"\n      >Switch when indicator is hovered (default)</span\n    >\n    <el-carousel height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Switch when indicator is clicked</span>\n    <el-carousel trigger=\"click\" height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 150px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n + 1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Indicadores ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Los indicadores de paginación pueden mostrarse fuera del carrusel", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" determina dónde se encuentran los indicadores de paginación. Por defecto están dentro del carrusel, y el ajuste de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "outside"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" los mueve hacia fuera; en cambio "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "none"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" los oculta.")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-carousel indicator-position=\"outside\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n + 1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Flechas ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Puede definir cuando se visualizan las flechas", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" determina cuándo se visualizan las flechas. Por defecto aparecen cuando el ratón se desplaza sobre el carrusel. Ajuste "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para mostrar u ocultar las flechas permanentemente.")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"5000\" arrow=\"always\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n + 1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Modo Card ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cuando una página es suficientemente ancha pero tiene una altura limitada, puede activar el modo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para carrusel.")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Ajuste "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para activar el modo tarjeta. Aparte de la apariencia, la mayor diferencia entre el modo tarjeta y el modo común es que al hacer clic en las diapositivas de ambos lados, el carrusel cambia directamente en modo tarjeta.")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"4000\" type=\"card\" height=\"200px\">\n    <el-carousel-item v-for=\"item in 6\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n + 1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Por defecto, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "horizontal"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". El carousel puede ser mostrado de forma vertical cambiando "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-carousel height=\"200px\" direction=\"vertical\" :autoplay=\"false\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n + 1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de Carousel ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>height</td><td>Alto del carrusel</td><td>string</td><td>—</td><td>—</td></tr><tr><td>initial-index</td><td>Indice del slider inicial activo (empieza desde 0)</td><td>number</td><td>—</td><td>0</td></tr><tr><td>trigger</td><td>Evento que muestra los indicadores</td><td>string</td><td>hover/click</td><td>hover</td></tr><tr><td>autoplay</td><td>Si se enlazan automáticamente las diapositivas</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>interval</td><td>Intervalo del auto loop, en milisegundos</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>indicator-position</td><td>Posición del indicador de paginación</td><td>string</td><td>outside/none</td><td>—</td></tr><tr><td>arrow</td><td>Cuando se muestran las flechas</td><td>string</td><td>always/hover/never</td><td>hover</td></tr><tr><td>type</td><td>Tipo de carrusel</td><td>string</td><td>card</td><td>—</td></tr><tr><td>loop</td><td>Si se muestra cíclicamente</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>direction</td><td>direccion en la que se muestra el contenido</td><td>string</td><td>horizontal/vertical</td><td>horizontal</td></tr><tr><td>pause-on-hover</td><td>pause autoplay when hover</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>", 1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos de Carousel ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre evento"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parámetros")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Se dispara cuando el slider activo cambia"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Indice del nuevo slider activo, indice del anterior slider activo.")])])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Metodos de Carousel ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Metodos</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>setActiveItem</td><td>Cambio manual de slider</td><td>indice del slider al que se va a cambiar, empezando por 0; o el <code>name</code> del <code>el-carousel-item</code> correspondiente</td></tr><tr><td>prev</td><td>Cambia al slider anterior</td><td>—</td></tr><tr><td>next</td><td>Cambia al slider siguiente</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de Carousel-Item ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>name</td><td>Nombre del item que puede ser usado en <code>setActiveItem</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>Texto que se mostrara en el indicador de paginacion correspondiente</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function carouselvue_type_template_id_3ad7b085_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", carouselvue_type_template_id_3ad7b085_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "carousel",
    content: "Carousel",
    href: "#carousel",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [carouselvue_type_template_id_3ad7b085_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#carousel"
    })]),
    _: 1
  }), carouselvue_type_template_id_3ad7b085_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [carouselvue_type_template_id_3ad7b085_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [carouselvue_type_template_id_3ad7b085_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [carouselvue_type_template_id_3ad7b085_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "indicadores",
    content: "Indicadores",
    href: "#indicadores",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#indicadores"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "flechas",
    content: "Flechas",
    href: "#flechas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#flechas"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "modo-card",
    content: "Modo Card",
    href: "#modo-card",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#modo-card"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-carousel",
    content: "Atributos de Carousel",
    href: "#atributos-de-carousel",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-carousel"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos-de-carousel",
    content: "Eventos de Carousel",
    href: "#eventos-de-carousel",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos-de-carousel"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "metodos-de-carousel",
    content: "Metodos de Carousel",
    href: "#metodos-de-carousel",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#metodos-de-carousel"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-carousel-item",
    content: "Atributos de Carousel-Item",
    href: "#atributos-de-carousel-item",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-carousel-item"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/carousel.md?vue&type=template&id=3ad7b085

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/carousel.md?vue&type=script&lang=ts

/* harmony default export */ var carouselvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Switch when indicator is hovered (default)", -1);

      const _hoisted_3 = {
        class: "small"
      };
      const _hoisted_4 = {
        class: "block"
      };

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Switch when indicator is clicked", -1);

      const _hoisted_6 = {
        class: "small"
      };

      function render(_ctx, _cache) {
        const _component_el_carousel_item = _resolveComponent("el-carousel-item");

        const _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_carousel, {
          height: "150px"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", _hoisted_3, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        })]), _createElementVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_carousel, {
          trigger: "click",
          height: "150px"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", _hoisted_6, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        })])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_carousel_item = _resolveComponent("el-carousel-item");

        const _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_carousel, {
          "indicator-position": "outside"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", null, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_carousel_item = _resolveComponent("el-carousel-item");

        const _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 5000,
          arrow: "always"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", null, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        const _component_el_carousel_item = _resolveComponent("el-carousel-item");

        const _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 4000,
          type: "card",
          height: "200px"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(6, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", _hoisted_1, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        const _component_el_carousel_item = _resolveComponent("el-carousel-item");

        const _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_carousel, {
          height: "200px",
          direction: "vertical",
          autoplay: false
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", _hoisted_1, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/carousel.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/carousel.md



carouselvue_type_script_lang_ts.render = carouselvue_type_template_id_3ad7b085_render

/* harmony default export */ var carousel = __webpack_exports__["default"] = (carouselvue_type_script_lang_ts);

/***/ })

}]);