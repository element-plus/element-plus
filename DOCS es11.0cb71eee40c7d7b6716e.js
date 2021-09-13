(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/cascader.md?vue&type=template&id=7e1f11dc

const cascadervue_type_template_id_7e1f11dc_hoisted_1 = {
  class: "content element-doc"
};

const cascadervue_type_template_id_7e1f11dc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cascader ");

const cascadervue_type_template_id_7e1f11dc_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Si las opciones tienen una estructura jerárquica clara, se puede utilizar Cascader para verlas y seleccionarlas.", -1);

const cascadervue_type_template_id_7e1f11dc_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Hay dos maneras de ampliar los elementos de opción hijos.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Asignar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a un array de opciones genera un Cascader. El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props.expandTrigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" define cómo se expanden las opciones hijo.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Child options expand when clicked (default)</span>\n  <el-cascader\n    v-model=\"value\"\n    :options=\"options\"\n    @change=\"handleChange\"\n  ></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Child options expand when hovered</span>\n  <el-cascader\n    v-model=\"value\"\n    :options=\"options\"\n    :props=\"{ expandTrigger: 'hover' }\"\n    @change=\"handleChange\"\n  ></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [],\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      }\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value)\n      },\n    },\n  }\n</script>\n\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        value: [],\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      const handleChange = (value) => {\n        console.log(value);\n      };\n      return {\n        ...toRefs(state),\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Opción Disabled ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Deshabilite una opción estableciendo el campo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en las opciones del objeto.")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("En este ejemplo, el primer ítem en el array "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" tiene un campo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled: true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", por lo que está deshabilitado. De forma predeterminada, Cascader comprueba el campo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en cada objeto de las opciones; si está utilizando otro nombre de campo para indicar si una opción está deshabilitada, puede asignarla en el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props.disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (consulte la tabla de la API a continuación para obtener más detalles). Y por supuesto, el nombre de campo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" también se pueden personalizar de la misma manera.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader :options=\"options\"></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            disabled: true,\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            disabled: true,\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Limpiable ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y aparecerá un icono de borrado cuando se seleccione y se pase el ratón por encima.")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader :options=\"options\" clearable></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Visualizar sólo el último nivel ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "La entrada puede mostrar sólo el último nivel en lugar de todos los niveles.", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-all-levels"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" define si se muestran todos los niveles. Si es "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", sólo se muestra el último nivel.")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader :options=\"options\" :show-all-levels=\"false\"></el-cascader>\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Selección múltiple ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establezca "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props.multiple = true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para usar la selección múltiple.")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cuando se utiliza la selección múltiple, todas las etiquetas seleccionadas se mostrarán de forma predeterminada, usted puede establecer "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "collapse-tags = true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para plegar las etiquetas seleccionadas.")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Display all tags (default)</span>\n  <el-cascader :options=\"options\" :props=\"props\" clearable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Collapse tags</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"props\"\n    collapse-tags\n    clearable\n  ></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: { multiple: true },\n        options: [\n          {\n            value: 1,\n            label: 'Asia',\n            children: [\n              {\n                value: 2,\n                label: 'China',\n                children: [\n                  { value: 3, label: 'Beijing' },\n                  { value: 4, label: 'Shanghai' },\n                  { value: 5, label: 'Hangzhou' },\n                ],\n              },\n              {\n                value: 6,\n                label: 'Japan',\n                children: [\n                  { value: 7, label: 'Tokyo' },\n                  { value: 8, label: 'Osaka' },\n                  { value: 9, label: 'Kyoto' },\n                ],\n              },\n              {\n                value: 10,\n                label: 'Korea',\n                children: [\n                  { value: 11, label: 'Seoul' },\n                  { value: 12, label: 'Busan' },\n                  { value: 13, label: 'Taegu' },\n                ],\n              },\n            ],\n          },\n          {\n            value: 14,\n            label: 'Europe',\n            children: [\n              {\n                value: 15,\n                label: 'France',\n                children: [\n                  { value: 16, label: 'Paris' },\n                  { value: 17, label: 'Marseille' },\n                  { value: 18, label: 'Lyon' },\n                ],\n              },\n              {\n                value: 19,\n                label: 'UK',\n                children: [\n                  { value: 20, label: 'London' },\n                  { value: 21, label: 'Birmingham' },\n                  { value: 22, label: 'Manchester' },\n                ],\n              },\n            ],\n          },\n          {\n            value: 23,\n            label: 'North America',\n            children: [\n              {\n                value: 24,\n                label: 'US',\n                children: [\n                  { value: 25, label: 'New York' },\n                  { value: 26, label: 'Los Angeles' },\n                  { value: 27, label: 'Washington' },\n                ],\n              },\n              {\n                value: 28,\n                label: 'Canada',\n                children: [\n                  { value: 29, label: 'Toronto' },\n                  { value: 30, label: 'Montreal' },\n                  { value: 31, label: 'Ottawa' },\n                ],\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      props: { multiple: true },\n      options: [\n        {\n          value: 1,\n          label: 'Asia',\n          children: [\n            {\n              value: 2,\n              label: 'China',\n              children: [\n                { value: 3, label: 'Beijing' },\n                { value: 4, label: 'Shanghai' },\n                { value: 5, label: 'Hangzhou' },\n              ],\n            },\n            {\n              value: 6,\n              label: 'Japan',\n              children: [\n                { value: 7, label: 'Tokyo' },\n                { value: 8, label: 'Osaka' },\n                { value: 9, label: 'Kyoto' },\n              ],\n            },\n            {\n              value: 10,\n              label: 'Korea',\n              children: [\n                { value: 11, label: 'Seoul' },\n                { value: 12, label: 'Busan' },\n                { value: 13, label: 'Taegu' },\n              ],\n            },\n          ],\n        },\n        {\n          value: 14,\n          label: 'Europe',\n          children: [\n            {\n              value: 15,\n              label: 'France',\n              children: [\n                { value: 16, label: 'Paris' },\n                { value: 17, label: 'Marseille' },\n                { value: 18, label: 'Lyon' },\n              ],\n            },\n            {\n              value: 19,\n              label: 'UK',\n              children: [\n                { value: 20, label: 'London' },\n                { value: 21, label: 'Birmingham' },\n                { value: 22, label: 'Manchester' },\n              ],\n            },\n          ],\n        },\n        {\n          value: 23,\n          label: 'North America',\n          children: [\n            {\n              value: 24,\n              label: 'US',\n              children: [\n                { value: 25, label: 'New York' },\n                { value: 26, label: 'Los Angeles' },\n                { value: 27, label: 'Washington' },\n              ],\n            },\n            {\n              value: 28,\n              label: 'Canada',\n              children: [\n                { value: 29, label: 'Toronto' },\n                { value: 30, label: 'Montreal' },\n                { value: 31, label: 'Ottawa' },\n              ],\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Seleccione cualquier nivel de opciones ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "En la selección única, sólo se pueden comprobar los nodos de la hoja, y en la selección múltiple, los nodos padres de la comprobación conducirán a que los nodos de la hoja se comprueben con el tiempo. Cuando se activa esta función, puede hacer que los nodos padre e hijo se desacoplen y usted puede seleccionar cualquier nivel de opciones.", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establezca "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props.checkStrictly = true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para que el estado comprobado de un nodo no afecte a sus nodos padre y nodos hijos, y entonces podrá seleccionar cualquier nivel de opciones.")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\"\n    >Select any level of options (Single selection)</span\n  >\n  <el-cascader\n    :options=\"options\"\n    :props=\"{ checkStrictly: true }\"\n    clearable\n  ></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\"\n    >Select any level of options (Multiple selection)</span\n  >\n  <el-cascader\n    :options=\"options\"\n    :props=\"{ multiple: true, checkStrictly: true }\"\n    clearable\n  ></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Carga dinámica ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Carga dinámica de sus nodos hijos cuando se selecciona un nodo.", -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establezca "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lazy = true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para utilizar la carga dinámica, y deberá especificar cómo cargar la fuente de datos mediante "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lazyload"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Hay dos parámetros de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lazyload"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", el primer parámetro "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es el nodo en el que se hace clic actualmente, y el "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "resolve"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es una llamada de retorno que indica que la carga ha terminado y que debe invocarse. Para mostrar el estado del nodo con mayor precisión, puede añadir un campo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "leaf"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (puede ser modificado por "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props.leaf"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(") para indicar si se trata de un nodo de hoja. De lo contrario, se deducirá verificando si tiene algún nodo hijo.")])], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader :props=\"props\"></el-cascader>\n\n<script>\n  let id = 0\n\n  export default {\n    data() {\n      return {\n        props: {\n          lazy: true,\n          lazyLoad(node, resolve) {\n            const { level } = node\n            setTimeout(() => {\n              const nodes = Array.from({ length: level + 1 }).map((item) => ({\n                value: ++id,\n                label: `Option - ${id}`,\n                leaf: level >= 2,\n              }))\n              // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.\n              resolve(nodes)\n            }, 1000)\n          },\n        },\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nlet id = 0;\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      props: {\n        lazy: true,\n        lazyLoad(node, resolve) {\n          const { level } = node;\n          setTimeout(() => {\n            const nodes = Array.from({ length: level + 1 }).map((item) => ({\n              value: ++id,\n              label: `Option - ${id}`,\n              leaf: level >= 2,\n            }));\n            // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.\n            resolve(nodes);\n          }, 1000);\n        },\n      },\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Filtrable ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Buscar y seleccionar opciones con una palabra clave.", -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Añadir "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filtrable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" permite el filtrado. Cascader hará coincidir los nodos cuya etiqueta o etiqueta de padre (de acuerdo con "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-all-levels"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(") incluya una palabra clave de entrada. Por supuesto, puedes personalizar la lógica de búsqueda mediante el "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" que acepta una función, el primer parámetro es "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "nodo"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", el segundo es "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "keyword"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", y necesitas devolver un valor booleano que indique si da en el blanco.")])], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Filterable (Single selection)</span>\n  <el-cascader\n    placeholder=\"Try searchingL Guide\"\n    :options=\"options\"\n    filterable\n  ></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Filterable (Multiple selection)</span>\n  <el-cascader\n    placeholder=\"Try searchingL Guide\"\n    :options=\"options\"\n    :props=\"{ multiple: true }\"\n    filterable\n  ></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Contenido de opciones personalizadas ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Puede personalizar el contenido del nodo de cascada.", -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Puede personalizar el contenido del nodo del cascader mediante "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "scoped slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Tendrá acceso a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el ámbito de aplicación, representando el objeto Node y los datos del nodo actual respectivamente.")])], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader :options=\"options\">\n  <template #default=\"{ node, data }\">\n    <span>{{ data.label }}</span>\n    <span v-if=\"!node.isLeaf\"> ({{ data.children.length }}) </span>\n  </template>\n</el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Panel cascader ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "CascaderPanel"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es el componente central de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Cascader"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" que tiene varias características como selección única, selección múltiple, carga dinámica, etc.")], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Al igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", puede establecer opciones alternativas mediante "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", y habilitar otras características mediante "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", consulte el formulario de la API a continuación para obtener más detalles.")])], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader-panel :options=\"options\"></el-cascader-panel>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de Cascader ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>valor ligado</td><td>-</td><td>—</td><td>—</td></tr><tr><td>options</td><td>datos de las opciones，las claves <code>value</code> y <code>label</code> pueden ser personalizadas por <code>Props</code>.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>opciones de configuración, consulte la siguiente tabla.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>size</td><td>tamaño del input</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>placeholder del input</td><td>string</td><td>—</td><td>Select</td></tr><tr><td>disabled</td><td>si Cascader esta deshabilitada</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>clearable</td><td>si el valor seleccionado puede ser borrado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-all-levels</td><td>si muestra todos los niveles del valor seleccionado en el input</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>collapse-tags</td><td>si se colapsan los tags en la selección múltiple</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>separator</td><td>separador de las etiquetas de las opciones</td><td>string</td><td>—</td><td>&#39; / &#39;</td></tr><tr><td>filterable</td><td>si las opciones pueden ser usadas para la busqueda</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>filter-method</td><td>lógica de búsqueda personalizable. El primer parámetro es <code>node</code>, el segundo es <code>keyword</code>, y es necesario devolver un valor boolean que indique si se ha tenido éxito.</td><td>function(node, keyword)</td><td>-</td><td>-</td></tr><tr><td>debounce</td><td>retraso en milisegundos para el tipeo de los datos de filtro</td><td>number</td><td>—</td><td>300</td></tr><tr><td>before-filter</td><td>hook antes de filtrar con el valor a filtrar como parámetro. Si se devuelve <code>false</code> o se devuelve una <code>Promise</code> y luego se rechaza, se abortará el filtrado.</td><td>function(value)</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>nombre de clase personalizado para el menú desplegable de Cascader</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-append-to-body</td><td>si añadir o no el menu popup al body. Si el posicionamiento del popup es incorrecto, puede intentar poner este <code>prop</code> en <code>false</code>.</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>", 1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos de Cascader ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>change</td><td>se desencadena cuando cambia el valor ligado.</td><td>valor</td></tr><tr><td>expand-change</td><td>se desencadena cuando las opciones expandidas cambian</td><td>un array de los nodos padres del nodo en expansión</td></tr><tr><td>blur</td><td>se desencadena cuando Cascader se desenfoca</td><td>(event: Event)</td></tr><tr><td>focus</td><td>se activa cuando Cascader se enfoca</td><td>(event: Event)</td></tr><tr><td>visible-change</td><td>se activa cuando aparece/desaparece el menú desplegable</td><td>verdadero cuando aparece, y falso de otra manera</td></tr><tr><td>remove-tag</td><td>se activa cuando se quita la etiqueta en modo de selección múltiple</td><td>el valor de la etiqueta que se quita</td></tr></tbody></table>", 1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cascader Methods ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Method Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "getCheckedNodes"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "get an array of currently selected node"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("(leafOnly) whether only return the leaf checked nodes, default is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false")])])])], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slots de Cascader ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre del slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el contenido personalizado del nodo cascader, el parámetro es { node, data }, que son el actual objeto Node y los datos del nodo respectivamente.")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "empty"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "cuando no hay opciones coincidentes.")])])], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos del CascaderPanel ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributos</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>valor ligado</td><td>-</td><td>—</td><td>—</td></tr><tr><td>options</td><td>datos de las opciones，las claves <code>value</code> y <code>label</code> pueden ser personalizadas por <code>Props</code>.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>opciones de configuración, consulte la siguiente tabla.</td><td>object</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos de CascaderPanel ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre de los evetos</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>change</td><td>se desencadena cuando cambia el valor ligado.</td><td>valor</td></tr><tr><td>expand-change</td><td>se desencadena cuando las opciones expandidas cambian</td><td>un array de los nodos padres del nodo en expansión</td></tr></tbody></table>", 1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CascaderPanel Methods ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Method Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>getCheckedNodes</td><td>get an array of currently selected node</td><td>(leafOnly) whether only return the leaf checked nodes, default is <code>false</code></td></tr><tr><td>clearCheckedNodes</td><td>clear checked nodes</td><td>-</td></tr></tbody></table>", 1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slots de CascaderPanel ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre del slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el contenido personalizado del nodo cascader, el parámetro es { node, data }, que son el actual objeto Node y los datos del nodo respectivamente.")])])], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Props ");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributos</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>expandTrigger</td><td>modo de disparo de las opciones de ampliación</td><td>string</td><td>click / hover</td><td>&#39;click&#39;</td></tr><tr><td>multiple</td><td>si la selección múltiple esta activada</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>checkStrictly</td><td>si el estado verificado de un nodo no afecta a sus nodos padre e hijo</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>emitPath</td><td>cuando los nodos marcados cambian, si emitir o no un array de la ruta de un nodo, si es falso, sólo emite el valor del nodo.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>lazy</td><td>si se deben cargar dinámicamente nodos hijo, usarlo con el atributo <code>lazyload</code>.</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>lazyLoad</td><td>para cargar datos de nodos hijo, sólo funciona cuando <code>lazy</code> es verdadero</td><td>function(node, resolve)</td><td>-</td><td>-</td></tr><tr><td>value</td><td>especificar qué clave de objeto de nodo se utiliza como valor del nodo</td><td>string</td><td>—</td><td>&#39;value&#39;</td></tr><tr><td>label</td><td>especificar qué clave de objeto de nodo se utiliza como etiqueta del nodo</td><td>string</td><td>—</td><td>&#39;label&#39;</td></tr><tr><td>children</td><td>especificar qué clave de objeto de nodo se utiliza como hijo del nodo</td><td>string</td><td>—</td><td>&#39;children&#39;</td></tr><tr><td>disabled</td><td>especificar qué clave de objeto de nodo se utiliza como nodo desactivado</td><td>string</td><td>—</td><td>&#39;disabled&#39;</td></tr><tr><td>leaf</td><td>especificar qué clave de objeto de nodo se utiliza como campo de hoja del nodo</td><td>string</td><td>—</td><td>&#39;leaf&#39;</td></tr></tbody></table>", 1);

function cascadervue_type_template_id_7e1f11dc_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  const _component_element_demo7 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo7");

  const _component_element_demo8 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo8");

  const _component_element_demo9 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo9");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", cascadervue_type_template_id_7e1f11dc_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cascader",
    content: "Cascader",
    href: "#cascader",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [cascadervue_type_template_id_7e1f11dc_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cascader"
    })]),
    _: 1
  }), cascadervue_type_template_id_7e1f11dc_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [cascadervue_type_template_id_7e1f11dc_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "opcion-disabled",
    content: "Opción Disabled",
    href: "#opcion-disabled",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#opcion-disabled"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "limpiable",
    content: "Limpiable",
    href: "#limpiable",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#limpiable"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "visualizar-solo-el-ultimo-nivel",
    content: "Visualizar sólo el último nivel",
    href: "#visualizar-solo-el-ultimo-nivel",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#visualizar-solo-el-ultimo-nivel"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "seleccion-multiple",
    content: "Selección múltiple",
    href: "#seleccion-multiple",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#seleccion-multiple"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "seleccione-cualquier-nivel-de-opciones",
    content: "Seleccione cualquier nivel de opciones",
    href: "#seleccione-cualquier-nivel-de-opciones",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#seleccione-cualquier-nivel-de-opciones"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "carga-dinamica",
    content: "Carga dinámica",
    href: "#carga-dinamica",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#carga-dinamica"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "filtrable",
    content: "Filtrable",
    href: "#filtrable",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#filtrable"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "contenido-de-opciones-personalizadas",
    content: "Contenido de opciones personalizadas",
    href: "#contenido-de-opciones-personalizadas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#contenido-de-opciones-personalizadas"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "panel-cascader",
    content: "Panel cascader",
    href: "#panel-cascader",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#panel-cascader"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-cascader",
    content: "Atributos de Cascader",
    href: "#atributos-de-cascader",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-cascader"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos-de-cascader",
    content: "Eventos de Cascader",
    href: "#eventos-de-cascader",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos-de-cascader"
    })]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cascader-methods",
    content: "Cascader Methods",
    href: "#cascader-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cascader-methods"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slots-de-cascader",
    content: "Slots de Cascader",
    href: "#slots-de-cascader",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots-de-cascader"
    })]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-del-cascaderpanel",
    content: "Atributos del CascaderPanel",
    href: "#atributos-del-cascaderpanel",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-del-cascaderpanel"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos-de-cascaderpanel",
    content: "Eventos de CascaderPanel",
    href: "#eventos-de-cascaderpanel",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos-de-cascaderpanel"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cascaderpanel-methods",
    content: "CascaderPanel Methods",
    href: "#cascaderpanel-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cascaderpanel-methods"
    })]),
    _: 1
  }), _hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slots-de-cascaderpanel",
    content: "Slots de CascaderPanel",
    href: "#slots-de-cascaderpanel",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots-de-cascaderpanel"
    })]),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "props",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_59, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_60, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/cascader.md?vue&type=template&id=7e1f11dc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/cascader.md?vue&type=script&lang=ts

/* harmony default export */ var cascadervue_type_script_lang_ts = ({
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
      }, "Child options expand when clicked (default)", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Child options expand when hovered", -1);

      function render(_ctx, _cache) {
        const _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          options: _ctx.options,
          onChange: _ctx.handleChange
        }, null, 8, ["modelValue", "options", "onChange"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value = $event),
          options: _ctx.options,
          props: {
            expandTrigger: 'hover'
          },
          onChange: _ctx.handleChange
        }, null, 8, ["modelValue", "options", "onChange"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: [],
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        },

        methods: {
          handleChange(value) {
            console.log(value);
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
        const _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options
        }, null, 8, ["options"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              disabled: true,
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options,
          clearable: ""
        }, null, 8, ["options"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
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
        const _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options,
          "show-all-levels": false
        }, null, 8, ["options"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
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
      }, "Display all tags (default)", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Collapse tags", -1);

      function render(_ctx, _cache) {
        const _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: _ctx.props,
          clearable: ""
        }, null, 8, ["options", "props"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: _ctx.props,
          "collapse-tags": "",
          clearable: ""
        }, null, 8, ["options", "props"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            props: {
              multiple: true
            },
            options: [{
              value: 1,
              label: 'Asia',
              children: [{
                value: 2,
                label: 'China',
                children: [{
                  value: 3,
                  label: 'Beijing'
                }, {
                  value: 4,
                  label: 'Shanghai'
                }, {
                  value: 5,
                  label: 'Hangzhou'
                }]
              }, {
                value: 6,
                label: 'Japan',
                children: [{
                  value: 7,
                  label: 'Tokyo'
                }, {
                  value: 8,
                  label: 'Osaka'
                }, {
                  value: 9,
                  label: 'Kyoto'
                }]
              }, {
                value: 10,
                label: 'Korea',
                children: [{
                  value: 11,
                  label: 'Seoul'
                }, {
                  value: 12,
                  label: 'Busan'
                }, {
                  value: 13,
                  label: 'Taegu'
                }]
              }]
            }, {
              value: 14,
              label: 'Europe',
              children: [{
                value: 15,
                label: 'France',
                children: [{
                  value: 16,
                  label: 'Paris'
                }, {
                  value: 17,
                  label: 'Marseille'
                }, {
                  value: 18,
                  label: 'Lyon'
                }]
              }, {
                value: 19,
                label: 'UK',
                children: [{
                  value: 20,
                  label: 'London'
                }, {
                  value: 21,
                  label: 'Birmingham'
                }, {
                  value: 22,
                  label: 'Manchester'
                }]
              }]
            }, {
              value: 23,
              label: 'North America',
              children: [{
                value: 24,
                label: 'US',
                children: [{
                  value: 25,
                  label: 'New York'
                }, {
                  value: 26,
                  label: 'Los Angeles'
                }, {
                  value: 27,
                  label: 'Washington'
                }]
              }, {
                value: 28,
                label: 'Canada',
                children: [{
                  value: 29,
                  label: 'Toronto'
                }, {
                  value: 30,
                  label: 'Montreal'
                }, {
                  value: 31,
                  label: 'Ottawa'
                }]
              }]
            }]
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
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
      }, "Select any level of options (Single selection)", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Select any level of options (Multiple selection)", -1);

      function render(_ctx, _cache) {
        const _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: {
            checkStrictly: true
          },
          clearable: ""
        }, null, 8, ["options"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: {
            multiple: true,
            checkStrictly: true
          },
          clearable: ""
        }, null, 8, ["options"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        }

      };
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
        const _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_cascader, {
          props: _ctx.props
        }, null, 8, ["props"])]);
      }

      let id = 0;
      const democomponentExport = {
        data() {
          return {
            props: {
              lazy: true,

              lazyLoad(node, resolve) {
                const {
                  level
                } = node;
                setTimeout(() => {
                  const nodes = Array.from({
                    length: level + 1
                  }).map(item => ({
                    value: ++id,
                    label: `Option - ${id}`,
                    leaf: level >= 2
                  })); // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.

                  resolve(nodes);
                }, 1000);
              }

            }
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo7": function () {
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
      }, "Filterable (Single selection)", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Filterable (Multiple selection)", -1);

      function render(_ctx, _cache) {
        const _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          placeholder: "Try searchingL Guide",
          options: _ctx.options,
          filterable: ""
        }, null, 8, ["options"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          placeholder: "Try searchingL Guide",
          options: _ctx.options,
          props: {
            multiple: true
          },
          filterable: ""
        }, null, 8, ["options"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo8": function () {
      const {
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createCommentVNode: _createCommentVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        key: 0
      };

      function render(_ctx, _cache) {
        const _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options
        }, {
          default: _withCtx(({
            node,
            data
          }) => [_createElementVNode("span", null, _toDisplayString(data.label), 1), !node.isLeaf ? (_openBlock(), _createElementBlock("span", _hoisted_1, " (" + _toDisplayString(data.children.length) + ") ", 1)) : _createCommentVNode("", true)]),
          _: 1
        }, 8, ["options"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo9": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_cascader_panel = _resolveComponent("el-cascader-panel");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_cascader_panel, {
          options: _ctx.options
        }, null, 8, ["options"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
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
// CONCATENATED MODULE: ./website/docs/es/cascader.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/cascader.md



cascadervue_type_script_lang_ts.render = cascadervue_type_template_id_7e1f11dc_render

/* harmony default export */ var cascader = __webpack_exports__["default"] = (cascadervue_type_script_lang_ts);

/***/ })

}]);