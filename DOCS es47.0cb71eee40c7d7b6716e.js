(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/progress.md?vue&type=template&id=7b44141a

const progressvue_type_template_id_7b44141a_hoisted_1 = {
  class: "content element-doc"
};

const progressvue_type_template_id_7b44141a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Progreso ");

const progressvue_type_template_id_7b44141a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Progreso es usado para mostrar el estado de la operación actual e informar al usuario acerca de ésta.", -1);

const progressvue_type_template_id_7b44141a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Barra de progreso lineal ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Usa el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "percentage"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para asignar el porcentaje. Este es "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "requerido"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y tiene que ser un valor entre "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "0-100"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Puede personalizar el formato de texto estableciendo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-progress :percentage=\"50\"></el-progress>\n  <el-progress :percentage=\"100\" :format=\"format\"></el-progress>\n  <el-progress :percentage=\"100\" status=\"success\"></el-progress>\n  <el-progress :percentage=\"100\" status=\"warning\"></el-progress>\n  <el-progress :percentage=\"50\" status=\"exception\"></el-progress>\n</template>\n\n<script>\n  export default {\n    methods: {\n      format(percentage) {\n        return percentage === 100 ? 'Full' : `${percentage}%`\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`);\n      return {\n        format,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Porcentaje interno ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "En este caso el porcentaje no toma espacio adicional.", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "stroke-width"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" decide el ancho de la barra de progreso, y usa el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "text-inside"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para poner la descripción dentro de la misma.")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-progress\n    :text-inside=\"true\"\n    :stroke-width=\"26\"\n    :percentage=\"70\"\n  ></el-progress>\n  <el-progress\n    :text-inside=\"true\"\n    :stroke-width=\"24\"\n    :percentage=\"100\"\n    status=\"success\"\n  ></el-progress>\n  <el-progress\n    :text-inside=\"true\"\n    :stroke-width=\"22\"\n    :percentage=\"80\"\n    status=\"warning\"\n  ></el-progress>\n  <el-progress\n    :text-inside=\"true\"\n    :stroke-width=\"20\"\n    :percentage=\"50\"\n    status=\"exception\"\n  ></el-progress>\n</template>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Color personalizado ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Puede utilizar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para establecer el color de la barra de progreso.")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-progress :percentage=\"percentage\" :color=\"customColor\"></el-progress>\n\n  <el-progress\n    :percentage=\"percentage\"\n    :color=\"customColorMethod\"\n  ></el-progress>\n\n  <el-progress :percentage=\"percentage\" :color=\"customColors\"></el-progress>\n  <el-progress :percentage=\"percentage2\" :color=\"customColors\"></el-progress>\n  <div>\n    <el-button-group>\n      <el-button icon=\"el-icon-minus\" @click=\"decrease\"></el-button>\n      <el-button icon=\"el-icon-plus\" @click=\"increase\"></el-button>\n    </el-button-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 20,\n        percentage2: 0,\n        customColor: '#409eff',\n        customColors: [\n          { color: '#f56c6c', percentage: 20 },\n          { color: '#e6a23c', percentage: 40 },\n          { color: '#5cb87a', percentage: 60 },\n          { color: '#1989fa', percentage: 80 },\n          { color: '#6f7ad3', percentage: 100 },\n        ],\n      }\n    },\n    methods: {\n      customColorMethod(percentage) {\n        if (percentage < 30) {\n          return '#909399'\n        } else if (percentage < 70) {\n          return '#e6a23c'\n        } else {\n          return '#67c23a'\n        }\n      },\n      increase() {\n        this.percentage += 10\n        if (this.percentage > 100) {\n          this.percentage = 100\n        }\n      },\n      decrease() {\n        this.percentage -= 10\n        if (this.percentage < 0) {\n          this.percentage = 0\n        }\n      },\n    },\n    mounted() {\n      setInterval(() => {\n        this.percentage2 = (this.percentage2 % 100) + 10\n      }, 500)\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        percentage: 20,\n        customColor: '#409eff',\n        customColors: [\n          { color: '#f56c6c', percentage: 20 },\n          { color: '#e6a23c', percentage: 40 },\n          { color: '#5cb87a', percentage: 60 },\n          { color: '#1989fa', percentage: 80 },\n          { color: '#6f7ad3', percentage: 100 },\n        ],\n      });\n      const customColorMethod = (percentage) => {\n        if (percentage < 30) {\n          return '#909399';\n        } if (percentage < 70) {\n          return '#e6a23c';\n        }\n        return '#67c23a';\n      };\n      const increase = () => {\n        state.percentage += 10;\n        if (state.percentage > 100) {\n          state.percentage = 100;\n        }\n      };\n      const decrease = () => {\n        state.percentage -= 10;\n        if (state.percentage < 0) {\n          state.percentage = 0;\n        }\n      };\n      return {\n        ...toRefs(state),\n        customColorMethod,\n        increase,\n        decrease,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Barra de progreso circular ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Puede asignar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" como "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "circle"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para usar la barra circular de progreso, y usar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "width"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para cambiar el tamaño del círculo.")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-progress type=\"circle\" :percentage=\"0\"></el-progress>\n  <el-progress type=\"circle\" :percentage=\"25\"></el-progress>\n  <el-progress type=\"circle\" :percentage=\"100\" status=\"success\"></el-progress>\n  <el-progress type=\"circle\" :percentage=\"70\" status=\"warning\"></el-progress>\n  <el-progress type=\"circle\" :percentage=\"50\" status=\"exception\"></el-progress>\n</template>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Barra de progreso del panel de control ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("También puede especificar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dashboard"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para usar la barra de progreso del panel de control.")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-progress\n    type=\"dashboard\"\n    :percentage=\"percentage\"\n    :color=\"colors\"\n  ></el-progress>\n  <el-progress\n    type=\"dashboard\"\n    :percentage=\"percentage2\"\n    :color=\"colors\"\n  ></el-progress>\n\n  <div>\n    <el-button-group>\n      <el-button icon=\"el-icon-minus\" @click=\"decrease\"></el-button>\n      <el-button icon=\"el-icon-plus\" @click=\"increase\"></el-button>\n    </el-button-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 10,\n        percentage2: 0,\n        colors: [\n          { color: '#f56c6c', percentage: 20 },\n          { color: '#e6a23c', percentage: 40 },\n          { color: '#5cb87a', percentage: 60 },\n          { color: '#1989fa', percentage: 80 },\n          { color: '#6f7ad3', percentage: 100 },\n        ],\n      }\n    },\n    methods: {\n      increase() {\n        this.percentage += 10\n        if (this.percentage > 100) {\n          this.percentage = 100\n        }\n      },\n      decrease() {\n        this.percentage -= 10\n        if (this.percentage < 0) {\n          this.percentage = 0\n        }\n      },\n    },\n    mounted() {\n      setInterval(() => {\n        this.percentage2 = (this.percentage2 % 100) + 10\n      }, 500)\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs, onMounted } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        percentage: 10,\n        percentage2: 0,\n        colors: [\n          { color: '#f56c6c', percentage: 20 },\n          { color: '#e6a23c', percentage: 40 },\n          { color: '#5cb87a', percentage: 60 },\n          { color: '#1989fa', percentage: 80 },\n          { color: '#6f7ad3', percentage: 100 },\n        ],\n      });\n      const increase = () => {\n        state.percentage += 10;\n        if (state.percentage > 100) {\n          state.percentage = 100;\n        }\n      };\n      const decrease = () => {\n        state.percentage -= 10;\n        if (state.percentage < 0) {\n          state.percentage = 0;\n        }\n      };\n      onMounted(() => {\n        setInterval(() => {\n          state.percentage2 = (state.percentage2 % 100) + 10\n        }, 500)\n      });\n      return {\n        ...toRefs(state),\n        increase,\n        decrease,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Customized content ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Use default slot to add customized content.")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-progress :percentage=\"50\">\n    <el-button type=\"text\">Content</el-button>\n  </el-progress>\n  <el-progress\n    :text-inside=\"true\"\n    :stroke-width=\"20\"\n    :percentage=\"50\"\n    status=\"exception\"\n  >\n    <span>Content</span>\n  </el-progress>\n  <el-progress type=\"circle\" :percentage=\"100\" status=\"success\">\n    <el-button type=\"success\" icon=\"el-icon-check\" circle></el-button>\n  </el-progress>\n  <el-progress type=\"dashboard\" :percentage=\"80\">\n    <template #default=\"{ percentage }\">\n      <span class=\"percentage-value\">{{ percentage }}%</span>\n      <span class=\"percentage-label\">Progressing</span>\n    </template>\n  </el-progress>\n</template>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Indeterminate progress ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to set indeterminate progress, with "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to control the animation duration.")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-progress :percentage=\"50\" :indeterminate=\"true\"></el-progress>\n  <el-progress\n    :percentage=\"100\"\n    :format=\"format\"\n    :indeterminate=\"true\"\n  ></el-progress>\n  <el-progress\n    :percentage=\"100\"\n    status=\"success\"\n    :indeterminate=\"true\"\n    :duration=\"5\"\n  ></el-progress>\n  <el-progress\n    :percentage=\"100\"\n    status=\"warning\"\n    :indeterminate=\"true\"\n    :duration=\"1\"\n  ></el-progress>\n  <el-progress\n    :percentage=\"50\"\n    status=\"exception\"\n    :indeterminate=\"true\"\n  ></el-progress>\n</template>\n\n<script>\n  export default {\n    methods: {\n      format(percentage) {\n        return percentage === 100 ? 'Full' : `${percentage}%`\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`);\n      return {\n        format,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptado</th><th>Por defecto</th></tr></thead><tbody><tr><td>percentage</td><td>porcentaje, requerido</td><td>number</td><td>0-100</td><td>0</td></tr><tr><td>type</td><td>tipo de barra de progreso</td><td>string</td><td>line/circle/dashboard</td><td>line</td></tr><tr><td>stroke-width</td><td>ancho de la barra de progreso</td><td>number</td><td>—</td><td>6</td></tr><tr><td>text-inside</td><td>mostrar el porcentaje dentro de la barra de progreso, solo funciona cuando <code>type</code> es &#39;line&#39;</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>status</td><td>estado actual de la barra de progreso</td><td>string</td><td>success/exception/warning</td><td>—</td></tr><tr><td>indeterminate</td><td>set indeterminate progress</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>duration</td><td>control the animation duration of indeterminate progress</td><td>number</td><td>-</td><td>3</td></tr><tr><td>color</td><td>color de fondo de la barra de progreso. Sobreescribe la propiedad <code>status</code></td><td>string/function/array</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>width</td><td>ancho del canvas que contiene la barra de progreso circula</td><td>number</td><td>—</td><td>126</td></tr><tr><td>show-text</td><td>mostrar porcentaje</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>stroke-linecap</td><td>circle/dashboard type shape at the end path</td><td>string</td><td>butt/round/square</td><td>round</td></tr><tr><td>format</td><td>personalizar el formato de texto estableciendo format</td><td>function(percentage)</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Customized content, parameter is { percentage }")])])], -1);

function progressvue_type_template_id_7b44141a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_element_demo6 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo6");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", progressvue_type_template_id_7b44141a_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "progreso",
    content: "Progreso",
    href: "#progreso",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [progressvue_type_template_id_7b44141a_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#progreso"
    })]),
    _: 1
  }), progressvue_type_template_id_7b44141a_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "barra-de-progreso-lineal",
    content: "Barra de progreso lineal",
    href: "#barra-de-progreso-lineal",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [progressvue_type_template_id_7b44141a_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#barra-de-progreso-lineal"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "porcentaje-interno",
    content: "Porcentaje interno",
    href: "#porcentaje-interno",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#porcentaje-interno"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "color-personalizado",
    content: "Color personalizado",
    href: "#color-personalizado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#color-personalizado"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "barra-de-progreso-circular",
    content: "Barra de progreso circular",
    href: "#barra-de-progreso-circular",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#barra-de-progreso-circular"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "barra-de-progreso-del-panel-de-control",
    content: "Barra de progreso del panel de control",
    href: "#barra-de-progreso-del-panel-de-control",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#barra-de-progreso-del-panel-de-control"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "customized-content",
    content: "Customized content",
    href: "#customized-content",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#customized-content"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "indeterminate-progress",
    content: "Indeterminate progress",
    href: "#indeterminate-progress",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#indeterminate-progress"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slot"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/progress.md?vue&type=template&id=7b44141a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/progress.md?vue&type=script&lang=ts

/* harmony default export */ var progressvue_type_script_lang_ts = ({
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
        const _component_el_progress = _resolveComponent("el-progress");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_progress, {
          percentage: 50
        }), _createVNode(_component_el_progress, {
          percentage: 100,
          format: _ctx.format
        }, null, 8, ["format"]), _createVNode(_component_el_progress, {
          percentage: 100,
          status: "success"
        }), _createVNode(_component_el_progress, {
          percentage: 100,
          status: "warning"
        }), _createVNode(_component_el_progress, {
          percentage: 50,
          status: "exception"
        })]);
      }

      const democomponentExport = {
        methods: {
          format(percentage) {
            return percentage === 100 ? 'Full' : `${percentage}%`;
          }

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
        const _component_el_progress = _resolveComponent("el-progress");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_progress, {
          "text-inside": true,
          "stroke-width": 26,
          percentage: 70
        }), _createVNode(_component_el_progress, {
          "text-inside": true,
          "stroke-width": 24,
          percentage: 100,
          status: "success"
        }), _createVNode(_component_el_progress, {
          "text-inside": true,
          "stroke-width": 22,
          percentage: 80,
          status: "warning"
        }), _createVNode(_component_el_progress, {
          "text-inside": true,
          "stroke-width": 20,
          percentage: 50,
          status: "exception"
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
        withCtx: _withCtx,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_progress = _resolveComponent("el-progress");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_button_group = _resolveComponent("el-button-group");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_progress, {
          percentage: _ctx.percentage,
          color: _ctx.customColor
        }, null, 8, ["percentage", "color"]), _createVNode(_component_el_progress, {
          percentage: _ctx.percentage,
          color: _ctx.customColorMethod
        }, null, 8, ["percentage", "color"]), _createVNode(_component_el_progress, {
          percentage: _ctx.percentage,
          color: _ctx.customColors
        }, null, 8, ["percentage", "color"]), _createVNode(_component_el_progress, {
          percentage: _ctx.percentage2,
          color: _ctx.customColors
        }, null, 8, ["percentage", "color"]), _createElementVNode("div", null, [_createVNode(_component_el_button_group, null, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            icon: "el-icon-minus",
            onClick: _ctx.decrease
          }, null, 8, ["onClick"]), _createVNode(_component_el_button, {
            icon: "el-icon-plus",
            onClick: _ctx.increase
          }, null, 8, ["onClick"])]),
          _: 1
        })])]);
      }

      const democomponentExport = {
        data() {
          return {
            percentage: 20,
            percentage2: 0,
            customColor: '#409eff',
            customColors: [{
              color: '#f56c6c',
              percentage: 20
            }, {
              color: '#e6a23c',
              percentage: 40
            }, {
              color: '#5cb87a',
              percentage: 60
            }, {
              color: '#1989fa',
              percentage: 80
            }, {
              color: '#6f7ad3',
              percentage: 100
            }]
          };
        },

        methods: {
          customColorMethod(percentage) {
            if (percentage < 30) {
              return '#909399';
            } else if (percentage < 70) {
              return '#e6a23c';
            } else {
              return '#67c23a';
            }
          },

          increase() {
            this.percentage += 10;

            if (this.percentage > 100) {
              this.percentage = 100;
            }
          },

          decrease() {
            this.percentage -= 10;

            if (this.percentage < 0) {
              this.percentage = 0;
            }
          }

        },

        mounted() {
          setInterval(() => {
            this.percentage2 = this.percentage2 % 100 + 10;
          }, 500);
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_progress = _resolveComponent("el-progress");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_progress, {
          type: "circle",
          percentage: 0
        }), _createVNode(_component_el_progress, {
          type: "circle",
          percentage: 25
        }), _createVNode(_component_el_progress, {
          type: "circle",
          percentage: 100,
          status: "success"
        }), _createVNode(_component_el_progress, {
          type: "circle",
          percentage: 70,
          status: "warning"
        }), _createVNode(_component_el_progress, {
          type: "circle",
          percentage: 50,
          status: "exception"
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_progress = _resolveComponent("el-progress");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_button_group = _resolveComponent("el-button-group");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_progress, {
          type: "dashboard",
          percentage: _ctx.percentage,
          color: _ctx.colors
        }, null, 8, ["percentage", "color"]), _createVNode(_component_el_progress, {
          type: "dashboard",
          percentage: _ctx.percentage2,
          color: _ctx.colors
        }, null, 8, ["percentage", "color"]), _createElementVNode("div", null, [_createVNode(_component_el_button_group, null, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            icon: "el-icon-minus",
            onClick: _ctx.decrease
          }, null, 8, ["onClick"]), _createVNode(_component_el_button, {
            icon: "el-icon-plus",
            onClick: _ctx.increase
          }, null, 8, ["onClick"])]),
          _: 1
        })])]);
      }

      const democomponentExport = {
        data() {
          return {
            percentage: 10,
            percentage2: 0,
            colors: [{
              color: '#f56c6c',
              percentage: 20
            }, {
              color: '#e6a23c',
              percentage: 40
            }, {
              color: '#5cb87a',
              percentage: 60
            }, {
              color: '#1989fa',
              percentage: 80
            }, {
              color: '#6f7ad3',
              percentage: 100
            }]
          };
        },

        methods: {
          increase() {
            this.percentage += 10;

            if (this.percentage > 100) {
              this.percentage = 100;
            }
          },

          decrease() {
            this.percentage -= 10;

            if (this.percentage < 0) {
              this.percentage = 0;
            }
          }

        },

        mounted() {
          setInterval(() => {
            this.percentage2 = this.percentage2 % 100 + 10;
          }, 500);
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        toDisplayString: _toDisplayString,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Content");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", null, "Content", -1);

      const _hoisted_3 = {
        class: "percentage-value"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "percentage-label"
      }, "Progressing", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_progress = _resolveComponent("el-progress");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_progress, {
          percentage: 50
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            type: "text"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_progress, {
          "text-inside": true,
          "stroke-width": 20,
          percentage: 50,
          status: "exception"
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_progress, {
          type: "circle",
          percentage: 100,
          status: "success"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            type: "success",
            icon: "el-icon-check",
            circle: ""
          })]),
          _: 1
        }), _createVNode(_component_el_progress, {
          type: "dashboard",
          percentage: 80
        }, {
          default: _withCtx(({
            percentage
          }) => [_createElementVNode("span", _hoisted_3, _toDisplayString(percentage) + "%", 1), _hoisted_4]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_progress = _resolveComponent("el-progress");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_progress, {
          percentage: 50,
          indeterminate: true
        }), _createVNode(_component_el_progress, {
          percentage: 100,
          format: _ctx.format,
          indeterminate: true
        }, null, 8, ["format"]), _createVNode(_component_el_progress, {
          percentage: 100,
          status: "success",
          indeterminate: true,
          duration: 5
        }), _createVNode(_component_el_progress, {
          percentage: 100,
          status: "warning",
          indeterminate: true,
          duration: 1
        }), _createVNode(_component_el_progress, {
          percentage: 50,
          status: "exception",
          indeterminate: true
        })]);
      }

      const democomponentExport = {
        methods: {
          format(percentage) {
            return percentage === 100 ? 'Full' : `${percentage}%`;
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
// CONCATENATED MODULE: ./website/docs/es/progress.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/progress.md



progressvue_type_script_lang_ts.render = progressvue_type_template_id_7b44141a_render

/* harmony default export */ var progress = __webpack_exports__["default"] = (progressvue_type_script_lang_ts);

/***/ })

}]);