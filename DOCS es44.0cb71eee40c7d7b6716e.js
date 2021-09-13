(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/pagination.md?vue&type=template&id=0fb0b437

const paginationvue_type_template_id_0fb0b437_hoisted_1 = {
  class: "content element-doc"
};

const paginationvue_type_template_id_0fb0b437_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Paginación ");

const paginationvue_type_template_id_0fb0b437_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Si tiene que mostrar muchos datos en una página, utilice la paginación.", -1);

const paginationvue_type_template_id_0fb0b437_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const paginationvue_type_template_id_0fb0b437_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Asigne en el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "layout"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" los diferentes elementos que quiere utilizar separados por coma. Los elementos de paginación son: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prev"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (un botón para navegar a la página anterior), "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "next"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (un botón para navegar a la siguiente página), "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "pager"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (lista de página), "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "jumper"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "input"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para saltar a una página determinada), "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "total"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (total de elementos), "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para seleccionar el tamaño de la página ) y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "->"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("(todo elemento situado luego de este símbolo será movido a la derecha).")])], -1);

const paginationvue_type_template_id_0fb0b437_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">When you have few pages</span>\n    <el-pagination layout=\"prev, pager, next\" :total=\"50\"> </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">When you have more than 7 pages</span>\n    <el-pagination layout=\"prev, pager, next\" :total=\"1000\"> </el-pagination>\n  </div>\n</template>\n")], -1);

const paginationvue_type_template_id_0fb0b437_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Números de paginas ");

const paginationvue_type_template_id_0fb0b437_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("De forma predeterminada, Pagination colapsa los botones del paginador adicionales cuando tiene más de 7 páginas. Esto se puede configurar con el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "pager-count"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination\n    :page-size=\"20\"\n    :pager-count=\"11\"\n    layout=\"prev, pager, next\"\n    :total=\"1000\"\n  >\n  </el-pagination>\n</template>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Paginación pequeña ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Usa una paginación pequeña en caso de espacio limitado.", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Solo ponga el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" como "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y la Paginación se volverá pequeña.")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination small layout=\"prev, pager, next\" :total=\"50\"> </el-pagination>\n</template>\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Más elementos ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Agrega más módulos basados en su escenario.", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Este ejemplo es un completo caso de uso. Utiliza los eventos "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para manejar el tamaño de página y el cambio de página. El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "page-sizes"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" acepta un arreglo de enteros, cada uno representa un diferente valor del atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sizes"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" que es un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", ejemplo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "[100, 200, 300, 400]"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" indicará que el "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" tendrá las opciones: 100, 200, 300 o 400 elementos por página.")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Total item count</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage1\"\n      :page-size=\"100\"\n      layout=\"total, prev, pager, next\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Change page size</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage2\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"sizes, prev, pager, next\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Jump to</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage3\"\n      :page-size=\"100\"\n      layout=\"prev, pager, next, jumper\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">All combined</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage4\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"total, sizes, prev, pager, next, jumper\"\n      :total=\"400\"\n    >\n    </el-pagination>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      handleSizeChange(val) {\n        console.log(`${val} items per page`)\n      },\n      handleCurrentChange(val) {\n        console.log(`current page: ${val}`)\n      },\n    },\n    data() {\n      return {\n        currentPage1: 5,\n        currentPage2: 5,\n        currentPage3: 5,\n        currentPage4: 4,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleSizeChange = (val) => {\n        console.log(`${val} items per page`);\n      };\n      const handleCurrentChange = (val) => {\n        console.log(`current page: ${val}`);\n      };\n\n      return {\n        currentPage1: ref(5),\n        currentPage2: ref(5),\n        currentPage3: ref(5),\n        currentPage4: ref(4),\n        handleSizeChange,\n        handleCurrentChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Oculte la paginación cuando el resultado es solo una pagina simple ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cuando sólo hay una página, oculte la paginación configurando el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hide-on-single-page"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-switch v-model=\"value\"> </el-switch>\n    <el-pagination\n      :hide-on-single-page=\"value\"\n      :total=\"5\"\n      layout=\"prev, pager, next\"\n    >\n    </el-pagination>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        value: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>small</td><td>usar paginación pequeña</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>page-size</td><td>cantidad de elementos por página, soporta v-model Unión bidireccional</td><td>number</td><td>—</td><td>10</td></tr><tr><td>total</td><td>total de elementos</td><td>number</td><td>—</td><td>—</td></tr><tr><td>page-count</td><td>total de páginas. Asigna <code>total</code> o <code>page-count</code> y las páginas serán mostradas; si necesitas <code>page-sizes</code>, <code>total</code> es <strong>requerido</strong></td><td>number</td><td>—</td><td>—</td></tr><tr><td>pager-count</td><td>número de paginadores. La paginación colapsa cuando el número total de páginas excede este valor.</td><td>number</td><td>odd number between 5 and 21</td><td>7</td></tr><tr><td>current-page</td><td>número actual de la página, soporta v-model Unión bidireccional</td><td>number</td><td>—</td><td>1</td></tr><tr><td>layout</td><td>layout de la paginación, elementos separados por coma</td><td>string</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, -&gt;, total&#39;</td></tr><tr><td>page-sizes</td><td>opciones para la cantidad de elementos por página</td><td>number[]</td><td>—</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>clase propia para el <code>dropdown</code> del <code>select</code> del número de páginas</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prev-text</td><td>texto para el botón <code>prev</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>next-text</td><td>texto para el botón <code>next</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si Pagination esta disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>si ocultar cuando sólo hay una página</td><td>boolean</td><td>—</td><td>-</td></tr></tbody></table>", 1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>size-change</td><td>se dispara cuando <code>page-size</code> cambia</td><td>nuevo valor de <code>page-size</code></td></tr><tr><td>current-change</td><td>se dispara cuando <code>current-page</code> cambia</td><td>nuevo valor de <code>current-page</code></td></tr><tr><td>prev-click</td><td>Se dispara cuando el botón <code>prev</code> recibe el clic y la pagina actual cambia</td><td>la nueva pagina actual</td></tr><tr><td>next-click</td><td>Se dispara cuando el botón <code>next</code> recibe el clic y la pagina actual cambia</td><td>la nueva pagina actual</td></tr></tbody></table>", 1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Elemento propio. Para utilizar esto necesitas declarar "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "layout")])])])], -1);

function paginationvue_type_template_id_0fb0b437_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", paginationvue_type_template_id_0fb0b437_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "paginacion",
    content: "Paginación",
    href: "#paginacion",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0fb0b437_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#paginacion"
    })]),
    _: 1
  }), paginationvue_type_template_id_0fb0b437_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0fb0b437_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0fb0b437_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0fb0b437_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "numeros-de-paginas",
    content: "Números de paginas",
    href: "#numeros-de-paginas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0fb0b437_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#numeros-de-paginas"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0fb0b437_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "paginacion-pequena",
    content: "Paginación pequeña",
    href: "#paginacion-pequena",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#paginacion-pequena"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "mas-elementos",
    content: "Más elementos",
    href: "#mas-elementos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#mas-elementos"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "oculte-la-paginacion-cuando-el-resultado-es-solo-una-pagina-simple",
    content: "Oculte la paginación cuando el resultado es solo una pagina simple",
    href: "#oculte-la-paginacion-cuando-el-resultado-es-solo-una-pagina-simple",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#oculte-la-paginacion-cuando-el-resultado-es-solo-una-pagina-simple"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos",
    content: "Eventos",
    href: "#eventos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slot"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/pagination.md?vue&type=template&id=0fb0b437

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/pagination.md?vue&type=script&lang=ts

/* harmony default export */ var paginationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "When you have few pages", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "When you have more than 7 pages", -1);

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_pagination, {
          layout: "prev, pager, next",
          total: 50
        })]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_pagination, {
          layout: "prev, pager, next",
          total: 1000
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          "page-size": 20,
          "pager-count": 11,
          layout: "prev, pager, next",
          total: 1000
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
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          small: "",
          layout: "prev, pager, next",
          total: 50
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
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Total item count", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Change page size", -1);

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Jump to", -1);

      const _hoisted_7 = {
        class: "block"
      };

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "All combined", -1);

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage1,
          "onUpdate:currentPage": _cache[0] || (_cache[0] = $event => _ctx.currentPage1 = $event),
          "page-size": 100,
          layout: "total, prev, pager, next",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage2,
          "onUpdate:currentPage": _cache[1] || (_cache[1] = $event => _ctx.currentPage2 = $event),
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          layout: "sizes, prev, pager, next",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage3,
          "onUpdate:currentPage": _cache[2] || (_cache[2] = $event => _ctx.currentPage3 = $event),
          "page-size": 100,
          layout: "prev, pager, next, jumper",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage4,
          "onUpdate:currentPage": _cache[3] || (_cache[3] = $event => _ctx.currentPage4 = $event),
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          layout: "total, sizes, prev, pager, next, jumper",
          total: 400
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])])]);
      }

      const democomponentExport = {
        methods: {
          handleSizeChange(val) {
            console.log(`${val} items per page`);
          },

          handleCurrentChange(val) {
            console.log(`current page: ${val}`);
          }

        },

        data() {
          return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_pagination, {
          "hide-on-single-page": _ctx.value,
          total: 5,
          layout: "prev, pager, next"
        }, null, 8, ["hide-on-single-page"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: false
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
// CONCATENATED MODULE: ./website/docs/es/pagination.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/pagination.md



paginationvue_type_script_lang_ts.render = paginationvue_type_template_id_0fb0b437_render

/* harmony default export */ var pagination = __webpack_exports__["default"] = (paginationvue_type_script_lang_ts);

/***/ })

}]);