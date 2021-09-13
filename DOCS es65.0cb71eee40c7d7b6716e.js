(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/timeline.md?vue&type=template&id=2dcd86c4

const timelinevue_type_template_id_2dcd86c4_hoisted_1 = {
  class: "content element-doc"
};

const timelinevue_type_template_id_2dcd86c4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Timeline ");

const timelinevue_type_template_id_2dcd86c4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Línea de tiempo visual.", -1);

const timelinevue_type_template_id_2dcd86c4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const timelinevue_type_template_id_2dcd86c4_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "El Timeline puede ser dividido en múltiples actividades. Las marcas de tiempo son características importantes que los distinguen de otros componentes. Observe la diferencia con Steps.", -1);

const timelinevue_type_template_id_2dcd86c4_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item\n      v-for=\"(activity, index) in activities\"\n      :key=\"index\"\n      :timestamp=\"activity.timestamp\"\n    >\n      {{activity.content}}\n    </el-timeline-item>\n  </el-timeline>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        activities: [\n          {\n            content: 'Success',\n            timestamp: '2018-04-11',\n          },\n          {\n            content: 'Approved',\n            timestamp: '2018-04-13',\n          },\n          {\n            content: 'Event start',\n            timestamp: '2018-04-15',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const timelinevue_type_template_id_2dcd86c4_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nodo personalizado ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "El tamaño, el color y los iconos se pueden personalizar en el nodo.", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item\n      v-for=\"(activity, index) in activities\"\n      :key=\"index\"\n      :icon=\"activity.icon\"\n      :type=\"activity.type\"\n      :color=\"activity.color\"\n      :size=\"activity.size\"\n      :hollow=\"activity.hollow\"\n      :timestamp=\"activity.timestamp\"\n    >\n      {{activity.content}}\n    </el-timeline-item>\n  </el-timeline>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        activities: [\n          {\n            content: 'Custom icon',\n            timestamp: '2018-04-12 20:46',\n            size: 'large',\n            type: 'primary',\n            icon: 'el-icon-more',\n          },\n          {\n            content: 'Custom color',\n            timestamp: '2018-04-03 20:46',\n            color: '#0bbd87',\n          },\n          {\n            content: 'Custom size',\n            timestamp: '2018-04-03 20:46',\n            size: 'large',\n          },\n          {\n            content: 'Custom hollow',\n            timestamp: '2018-04-03 20:46',\n            type: 'primary',\n            hollow: true,\n          },\n          {\n            content: 'Default node',\n            timestamp: '2018-04-03 20:46',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Marcas de tiempo personalizadas ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Las marcas de tiempo ( timestamp ) puede colocarse encima del contenido cuando éste es demasiado alto.", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item timestamp=\"2018/4/12\" placement=\"top\">\n      <el-card>\n        <h4>Update Github template</h4>\n        <p>Tom committed 2018/4/12 20:46</p>\n      </el-card>\n    </el-timeline-item>\n    <el-timeline-item timestamp=\"2018/4/3\" placement=\"top\">\n      <el-card>\n        <h4>Update Github template</h4>\n        <p>Tom committed 2018/4/3 20:46</p>\n      </el-card>\n    </el-timeline-item>\n    <el-timeline-item timestamp=\"2018/4/2\" placement=\"top\">\n      <el-card>\n        <h4>Update Github template</h4>\n        <p>Tom committed 2018/4/2 20:46</p>\n      </el-card>\n    </el-timeline-item>\n  </el-timeline>\n</div>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Timeline-item Atributos ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>timestamp</td><td>Contenido de las marcas de tiempo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-timestamp</td><td>Si se muestra o no timestamp</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>la posición de timestamp</td><td>string</td><td>top / bottom</td><td>bottom</td></tr><tr><td>type</td><td>tipo de nodo</td><td>string</td><td>primary / success / warning / danger / info</td><td>—</td></tr><tr><td>color</td><td>color de fondo del nodo</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>—</td></tr><tr><td>size</td><td>tamaño del nodo</td><td>string</td><td>normal / large</td><td>normal</td></tr><tr><td>icon</td><td>nombre de la clase del icono</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hollow</td><td>icon is hollow</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Timeline-Item Slot ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Contenido personalizado del ítem del timeline")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "dot"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Definición personalizada del nodo")])])], -1);

function timelinevue_type_template_id_2dcd86c4_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", timelinevue_type_template_id_2dcd86c4_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "timeline",
    content: "Timeline",
    href: "#timeline",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [timelinevue_type_template_id_2dcd86c4_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#timeline"
    })]),
    _: 1
  }), timelinevue_type_template_id_2dcd86c4_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [timelinevue_type_template_id_2dcd86c4_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), timelinevue_type_template_id_2dcd86c4_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [timelinevue_type_template_id_2dcd86c4_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "nodo-personalizado",
    content: "Nodo personalizado",
    href: "#nodo-personalizado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [timelinevue_type_template_id_2dcd86c4_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#nodo-personalizado"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "marcas-de-tiempo-personalizadas",
    content: "Marcas de tiempo personalizadas",
    href: "#marcas-de-tiempo-personalizadas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#marcas-de-tiempo-personalizadas"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "timeline-item-atributos",
    content: "Timeline-item Atributos",
    href: "#timeline-item-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#timeline-item-atributos"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "timeline-item-slot",
    content: "Timeline-Item Slot",
    href: "#timeline-item-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#timeline-item-slot"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/timeline.md?vue&type=template&id=2dcd86c4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/timeline.md?vue&type=script&lang=ts

/* harmony default export */ var timelinevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_timeline_item = _resolveComponent("el-timeline-item");

        const _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.activities, (activity, index) => {
            return _openBlock(), _createBlock(_component_el_timeline_item, {
              key: index,
              timestamp: activity.timestamp
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(activity.content), 1)]),
              _: 2
            }, 1032, ["timestamp"]);
          }), 128))]),
          _: 1
        })])]);
      }

      const democomponentExport = {
        data() {
          return {
            activities: [{
              content: 'Success',
              timestamp: '2018-04-11'
            }, {
              content: 'Approved',
              timestamp: '2018-04-13'
            }, {
              content: 'Event start',
              timestamp: '2018-04-15'
            }]
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_timeline_item = _resolveComponent("el-timeline-item");

        const _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.activities, (activity, index) => {
            return _openBlock(), _createBlock(_component_el_timeline_item, {
              key: index,
              icon: activity.icon,
              type: activity.type,
              color: activity.color,
              size: activity.size,
              hollow: activity.hollow,
              timestamp: activity.timestamp
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(activity.content), 1)]),
              _: 2
            }, 1032, ["icon", "type", "color", "size", "hollow", "timestamp"]);
          }), 128))]),
          _: 1
        })])]);
      }

      const democomponentExport = {
        data() {
          return {
            activities: [{
              content: 'Custom icon',
              timestamp: '2018-04-12 20:46',
              size: 'large',
              type: 'primary',
              icon: 'el-icon-more'
            }, {
              content: 'Custom color',
              timestamp: '2018-04-03 20:46',
              color: '#0bbd87'
            }, {
              content: 'Custom size',
              timestamp: '2018-04-03 20:46',
              size: 'large'
            }, {
              content: 'Custom hollow',
              timestamp: '2018-04-03 20:46',
              type: 'primary',
              hollow: true
            }, {
              content: 'Default node',
              timestamp: '2018-04-03 20:46'
            }]
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("h4", null, "Update Github template", -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("p", null, "Tom committed 2018/4/12 20:46", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("h4", null, "Update Github template", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("p", null, "Tom committed 2018/4/3 20:46", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("h4", null, "Update Github template", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("p", null, "Tom committed 2018/4/2 20:46", -1);

      function render(_ctx, _cache) {
        const _component_el_card = _resolveComponent("el-card");

        const _component_el_timeline_item = _resolveComponent("el-timeline-item");

        const _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(() => [_createVNode(_component_el_timeline_item, {
            timestamp: "2018/4/12",
            placement: "top"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_card, null, {
              default: _withCtx(() => [_hoisted_2, _hoisted_3]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_timeline_item, {
            timestamp: "2018/4/3",
            placement: "top"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_card, null, {
              default: _withCtx(() => [_hoisted_4, _hoisted_5]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_timeline_item, {
            timestamp: "2018/4/2",
            placement: "top"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_card, null, {
              default: _withCtx(() => [_hoisted_6, _hoisted_7]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/timeline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/timeline.md



timelinevue_type_script_lang_ts.render = timelinevue_type_template_id_2dcd86c4_render

/* harmony default export */ var timeline = __webpack_exports__["default"] = (timelinevue_type_script_lang_ts);

/***/ })

}]);