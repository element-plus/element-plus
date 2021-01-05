(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/cascader.md?vue&type=template&id=78028769

var cascadervue_type_template_id_78028769_hoisted_1 = {
  class: "content element-doc"
};

var cascadervue_type_template_id_78028769_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "cascader"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cascader"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Cascader")], -1);

var cascadervue_type_template_id_78028769_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Si las opciones tienen una estructura jerárquica clara, se puede utilizar Cascader para verlas y seleccionarlas.", -1);

var cascadervue_type_template_id_78028769_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Hay dos maneras de ampliar los elementos de opción hijos.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Asignar el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a un array de opciones genera un Cascader. El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props.expandTrigger"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" define cómo se expanden las opciones hijo.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Child options expand when clicked (default)</span>\n  <el-cascader\n    v-model=\"value\"\n    :options=\"options\"\n    @change=\"handleChange\"></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Child options expand when hovered</span>\n  <el-cascader\n    v-model=\"value\"\n    :options=\"options\"\n    :props=\"{ expandTrigger: 'hover' }\"\n    @change=\"handleChange\"></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [],\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "opcion-disabled"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#opcion-disabled"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Opción Disabled")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Deshabilite una opción estableciendo el campo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en las opciones del objeto.")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("En este ejemplo, el primer ítem en el array "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" tiene un campo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled: true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", por lo que está deshabilitado. De forma predeterminada, Cascader comprueba el campo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en cada objeto de las opciones; si está utilizando otro nombre de campo para indicar si una opción está deshabilitada, puede asignarla en el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props.disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" (consulte la tabla de la API a continuación para obtener más detalles). Y por supuesto, el nombre de campo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" también se pueden personalizar de la misma manera.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\"></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          disabled: true,\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "limpiable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#limpiable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Limpiable")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y aparecerá un icono de borrado cuando se seleccione y se pase el ratón por encima.")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\" clearable></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "visualizar-solo-el-ultimo-nivel"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#visualizar-solo-el-ultimo-nivel"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Visualizar sólo el último nivel")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "La entrada puede mostrar sólo el último nivel en lugar de todos los niveles.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-all-levels"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" define si se muestran todos los niveles. Si es "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", sólo se muestra el último nivel.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\" :show-all-levels=\"false\"></el-cascader>\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "seleccion-multiple"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#seleccion-multiple"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Selección múltiple")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props.multiple = true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para usar la selección múltiple.")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Cuando se utiliza la selección múltiple, todas las etiquetas seleccionadas se mostrarán de forma predeterminada, usted puede establecer "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "collapse-tags = true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para plegar las etiquetas seleccionadas.")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Display all tags (default)</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"props\"\n    clearable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Collapse tags</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"props\"\n    collapse-tags\n    clearable></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: { multiple: true },\n        options: [{\n          value: 1,\n          label: 'Asia',\n          children: [{\n            value: 2,\n            label: 'China',\n            children: [\n              { value: 3, label: 'Beijing' },\n              { value: 4, label: 'Shanghai' },\n              { value: 5, label: 'Hangzhou' }\n            ]\n          }, {\n            value: 6,\n            label: 'Japan',\n            children: [\n              { value: 7, label: 'Tokyo' },\n              { value: 8, label: 'Osaka' },\n              { value: 9, label: 'Kyoto' }\n            ]\n          }, {\n            value: 10,\n            label: 'Korea',\n            children: [\n              { value: 11, label: 'Seoul' },\n              { value: 12, label: 'Busan' },\n              { value: 13, label: 'Taegu' }\n            ]\n          }]\n        }, {\n          value: 14,\n          label: 'Europe',\n          children: [{\n            value: 15,\n            label: 'France',\n            children: [\n              { value: 16, label: 'Paris' },\n              { value: 17, label: 'Marseille' },\n              { value: 18, label: 'Lyon' }\n            ]\n          }, {\n            value: 19,\n            label: 'UK',\n            children: [\n              { value: 20, label: 'London' },\n              { value: 21, label: 'Birmingham' },\n              { value: 22, label: 'Manchester' }\n            ]\n          }]\n        }, {\n          value: 23,\n          label: 'North America',\n          children: [{\n            value: 24,\n            label: 'US',\n            children: [\n              { value: 25, label: 'New York' },\n              { value: 26, label: 'Los Angeles' },\n              { value: 27, label: 'Washington' }\n            ]\n          }, {\n            value: 28,\n            label: 'Canada',\n            children: [\n              { value: 29, label: 'Toronto' },\n              { value: 30, label: 'Montreal' },\n              { value: 31, label: 'Ottawa' }\n            ]\n          }]\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "seleccione-cualquier-nivel-de-opciones"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#seleccione-cualquier-nivel-de-opciones"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Seleccione cualquier nivel de opciones")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "En la selección única, sólo se pueden comprobar los nodos de la hoja, y en la selección múltiple, los nodos padres de la comprobación conducirán a que los nodos de la hoja se comprueben con el tiempo. Cuando se activa esta función, puede hacer que los nodos padre e hijo se desacoplen y usted puede seleccionar cualquier nivel de opciones.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props.checkStrictly = true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para que el estado comprobado de un nodo no afecte a sus nodos padre y nodos hijos, y entonces podrá seleccionar cualquier nivel de opciones.")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Select any level of options (Single selection)</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"{ checkStrictly: true }\"\n    clearable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Select any level of options (Multiple selection)</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"{ multiple: true, checkStrictly: true }\"\n    clearable></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "carga-dinamica"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#carga-dinamica"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Carga dinámica")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Carga dinámica de sus nodos hijos cuando se selecciona un nodo.", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lazy = true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para utilizar la carga dinámica, y deberá especificar cómo cargar la fuente de datos mediante "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lazyload"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Hay dos parámetros de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lazyload"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", el primer parámetro "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es el nodo en el que se hace clic actualmente, y el "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "resolve"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es una llamada de retorno que indica que la carga ha terminado y que debe invocarse. Para mostrar el estado del nodo con mayor precisión, puede añadir un campo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "leaf"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" (puede ser modificado por "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props.leaf"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(") para indicar si se trata de un nodo de hoja. De lo contrario, se deducirá verificando si tiene algún nodo hijo.")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :props=\"props\"></el-cascader>\n\n<script>\n  let id = 0;\n\n  export default {\n    data() {\n      return {\n        props: {\n          lazy: true,\n          lazyLoad (node, resolve) {\n            const { level } = node;\n            setTimeout(() => {\n              const nodes = Array.from({ length: level + 1 })\n                .map(item => ({\n                  value: ++id,\n                  label: `Option - ${id}`,\n                  leaf: level >= 2\n                }));\n              // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.\n              resolve(nodes);\n            }, 1000);\n          }\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "filtrable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filtrable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Filtrable")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Buscar y seleccionar opciones con una palabra clave.", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Añadir "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filtrable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" permite el filtrado. Cascader hará coincidir los nodos cuya etiqueta o etiqueta de padre (de acuerdo con "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-all-levels"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(") incluya una palabra clave de entrada. Por supuesto, puedes personalizar la lógica de búsqueda mediante el "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" que acepta una función, el primer parámetro es "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "nodo"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", el segundo es "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "keyword"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y necesitas devolver un valor booleano que indique si da en el blanco.")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Filterable (Single selection)</span>\n  <el-cascader\n    placeholder=\"Try searchingL Guide\"\n    :options=\"options\"\n    filterable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Filterable (Multiple selection)</span>\n  <el-cascader\n    placeholder=\"Try searchingL Guide\"\n    :options=\"options\"\n    :props=\"{ multiple: true }\"\n    filterable></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "contenido-de-opciones-personalizadas"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#contenido-de-opciones-personalizadas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Contenido de opciones personalizadas")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede personalizar el contenido del nodo de cascada.", -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Puede personalizar el contenido del nodo del cascader mediante "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "scoped slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Tendrá acceso a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en el ámbito de aplicación, representando el objeto Node y los datos del nodo actual respectivamente.")])], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\">\n  <template #default=\"{ node, data }\">\n    <span>{{ data.label }}</span>\n    <span v-if=\"!node.isLeaf\"> ({{ data.children.length }}) </span>\n  </template>\n</el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "panel-cascader"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#panel-cascader"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Panel cascader")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "CascaderPanel"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es el componente central de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Cascader"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" que tiene varias características como selección única, selección múltiple, carga dinámica, etc.")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Al igual que "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", puede establecer opciones alternativas mediante "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y habilitar otras características mediante "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", consulte el formulario de la API a continuación para obtener más detalles.")])], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader-panel :options=\"options\"></el-cascader-panel>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos-de-cascader\"><a class=\"header-anchor\" href=\"#atributos-de-cascader\">¶</a> Atributos de Cascader</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>valor ligado</td><td>-</td><td>—</td><td>—</td></tr><tr><td>options</td><td>datos de las opciones，las claves <code>value</code> y <code>label</code> pueden ser personalizadas por <code>Props</code>.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>opciones de configuración, consulte la siguiente tabla.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>size</td><td>tamaño del input</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>placeholder del input</td><td>string</td><td>—</td><td>Select</td></tr><tr><td>disabled</td><td>si Cascader esta deshabilitada</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>clearable</td><td>si el valor seleccionado puede ser borrado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-all-levels</td><td>si muestra todos los niveles del valor seleccionado en el input</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>collapse-tags</td><td>si se colapsan los tags en la selección múltiple</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>separator</td><td>separador de las etiquetas de las opciones</td><td>string</td><td>—</td><td>&#39; / &#39;</td></tr><tr><td>filterable</td><td>si las opciones pueden ser usadas para la busqueda</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>filter-method</td><td>lógica de búsqueda personalizable. El primer parámetro es <code>node</code>, el segundo es <code>keyword</code>, y es necesario devolver un valor boolean que indique si se ha tenido éxito.</td><td>function(node, keyword)</td><td>-</td><td>-</td></tr><tr><td>debounce</td><td>retraso en milisegundos para el tipeo de los datos de filtro</td><td>number</td><td>—</td><td>300</td></tr><tr><td>before-filter</td><td>hook antes de filtrar con el valor a filtrar como parámetro. Si se devuelve <code>false</code> o se devuelve una <code>Promise</code> y luego se rechaza, se abortará el filtrado.</td><td>function(value)</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>nombre de clase personalizado para el menú desplegable de Cascader</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"eventos-de-cascader\"><a class=\"header-anchor\" href=\"#eventos-de-cascader\">¶</a> Eventos de Cascader</h3><table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>change</td><td>se desencadena cuando cambia el valor ligado.</td><td>valor</td></tr><tr><td>expand-change</td><td>se desencadena cuando las opciones expandidas cambian</td><td>un array de los nodos padres del nodo en expansión</td></tr><tr><td>blur</td><td>se desencadena cuando Cascader se desenfoca</td><td>(event: Event)</td></tr><tr><td>focus</td><td>se activa cuando Cascader se enfoca</td><td>(event: Event)</td></tr><tr><td>visible-change</td><td>se activa cuando aparece/desaparece el menú desplegable</td><td>verdadero cuando aparece, y falso de otra manera</td></tr><tr><td>remove-tag</td><td>se activa cuando se quita la etiqueta en modo de selección múltiple</td><td>el valor de la etiqueta que se quita</td></tr></tbody></table><h3 id=\"cascader-methods\"><a class=\"header-anchor\" href=\"#cascader-methods\">¶</a> Cascader Methods</h3><table><thead><tr><th>Method Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>getCheckedNodes</td><td>get an array of currently selected node</td><td>(leafOnly) whether only return the leaf checked nodes, default is <code>false</code></td></tr></tbody></table><h3 id=\"slots-de-cascader\"><a class=\"header-anchor\" href=\"#slots-de-cascader\">¶</a> Slots de Cascader</h3><table><thead><tr><th>Nombre del slot</th><th>Descripción</th></tr></thead><tbody><tr><td>-</td><td>el contenido personalizado del nodo cascader, el parámetro es { node, data }, que son el actual objeto Node y los datos del nodo respectivamente.</td></tr><tr><td>empty</td><td>cuando no hay opciones coincidentes.</td></tr></tbody></table><h3 id=\"atributos-del-cascaderpanel\"><a class=\"header-anchor\" href=\"#atributos-del-cascaderpanel\">¶</a> Atributos del CascaderPanel</h3><table><thead><tr><th>Atributos</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>valor ligado</td><td>-</td><td>—</td><td>—</td></tr><tr><td>options</td><td>datos de las opciones，las claves <code>value</code> y <code>label</code> pueden ser personalizadas por <code>Props</code>.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>opciones de configuración, consulte la siguiente tabla.</td><td>object</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"eventos-de-cascaderpanel\"><a class=\"header-anchor\" href=\"#eventos-de-cascaderpanel\">¶</a> Eventos de CascaderPanel</h3><table><thead><tr><th>Nombre de los evetos</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>change</td><td>se desencadena cuando cambia el valor ligado.</td><td>valor</td></tr><tr><td>expand-change</td><td>se desencadena cuando las opciones expandidas cambian</td><td>un array de los nodos padres del nodo en expansión</td></tr></tbody></table><h3 id=\"cascaderpanel-methods\"><a class=\"header-anchor\" href=\"#cascaderpanel-methods\">¶</a> CascaderPanel Methods</h3><table><thead><tr><th>Method Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>getCheckedNodes</td><td>get an array of currently selected node</td><td>(leafOnly) whether only return the leaf checked nodes, default is <code>false</code></td></tr><tr><td>clearCheckedNodes</td><td>clear checked nodes</td><td>-</td></tr></tbody></table><h3 id=\"slots-de-cascaderpanel\"><a class=\"header-anchor\" href=\"#slots-de-cascaderpanel\">¶</a> Slots de CascaderPanel</h3><table><thead><tr><th>Nombre del slot</th><th>Descripción</th></tr></thead><tbody><tr><td>-</td><td>el contenido personalizado del nodo cascader, el parámetro es { node, data }, que son el actual objeto Node y los datos del nodo respectivamente.</td></tr></tbody></table><h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Atributos</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>expandTrigger</td><td>modo de disparo de las opciones de ampliación</td><td>string</td><td>click / hover</td><td>&#39;click&#39;</td></tr><tr><td>multiple</td><td>si la selección múltiple esta activada</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>checkStrictly</td><td>si el estado verificado de un nodo no afecta a sus nodos padre e hijo</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>emitPath</td><td>cuando los nodos marcados cambian, si emitir o no un array de la ruta de un nodo, si es falso, sólo emite el valor del nodo.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>lazy</td><td>si se deben cargar dinámicamente nodos hijo, usarlo con el atributo <code>lazyload</code>.</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>lazyLoad</td><td>para cargar datos de nodos hijo, sólo funciona cuando <code>lazy</code> es verdadero</td><td>function(node, resolve)</td><td>-</td><td>-</td></tr><tr><td>value</td><td>especificar qué clave de objeto de nodo se utiliza como valor del nodo</td><td>string</td><td>—</td><td>&#39;value&#39;</td></tr><tr><td>label</td><td>especificar qué clave de objeto de nodo se utiliza como etiqueta del nodo</td><td>string</td><td>—</td><td>&#39;label&#39;</td></tr><tr><td>children</td><td>especificar qué clave de objeto de nodo se utiliza como hijo del nodo</td><td>string</td><td>—</td><td>&#39;children&#39;</td></tr><tr><td>disabled</td><td>especificar qué clave de objeto de nodo se utiliza como nodo desactivado</td><td>string</td><td>—</td><td>&#39;disabled&#39;</td></tr><tr><td>leaf</td><td>especificar qué clave de objeto de nodo se utiliza como campo de hoja del nodo</td><td>string</td><td>—</td><td>&#39;leaf&#39;</td></tr></tbody></table>", 18);

function cascadervue_type_template_id_78028769_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  var _component_element_demo8 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo8");

  var _component_element_demo9 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo9");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", cascadervue_type_template_id_78028769_hoisted_1, [cascadervue_type_template_id_78028769_hoisted_2, cascadervue_type_template_id_78028769_hoisted_3, cascadervue_type_template_id_78028769_hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27, _hoisted_28, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_35, _hoisted_36, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    _: 1
  }), _hoisted_39, _hoisted_40, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_42];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    _: 1
  }), _hoisted_43]);
}
// CONCATENATED MODULE: ./website/docs/es/cascader.md?vue&type=template&id=78028769

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/cascader.md?vue&type=script&lang=ts


/* harmony default export */ var cascadervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Child options expand when clicked (default)", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Child options expand when hovered", -1);

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          onChange: _ctx.handleChange
        }, null, 8, ["modelValue", "options", "onChange"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          props: {
            expandTrigger: 'hover'
          },
          onChange: _ctx.handleChange
        }, null, 8, ["modelValue", "options", "onChange"])])]);
      }

      var democomponentExport = {
        data: function data() {
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
          handleChange: function handleChange(value) {
            console.log(value);
          }
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
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options
        }, null, 8, ["options"])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options,
          clearable: ""
        }, null, 8, ["options"])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options,
          "show-all-levels": false
        }, null, 8, ["options"])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Display all tags (default)", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Collapse tags", -1);

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: _ctx.props,
          clearable: ""
        }, null, 8, ["options", "props"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: _ctx.props,
          "collapse-tags": "",
          clearable: ""
        }, null, 8, ["options", "props"])])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Select any level of options (Single selection)", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Select any level of options (Multiple selection)", -1);

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: {
            checkStrictly: true
          },
          clearable: ""
        }, null, 8, ["options"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: {
            multiple: true,
            checkStrictly: true
          },
          clearable: ""
        }, null, 8, ["options"])])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader, {
          props: _ctx.props
        }, null, 8, ["props"])]);
      }

      var id = 0;
      var democomponentExport = {
        data: function data() {
          return {
            props: {
              lazy: true,
              lazyLoad: function lazyLoad(node, resolve) {
                var level = node.level;
                setTimeout(function () {
                  var nodes = Array.from({
                    length: level + 1
                  }).map(function (item) {
                    return {
                      value: ++id,
                      label: "Option - " + id,
                      leaf: level >= 2
                    };
                  }); // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.

                  resolve(nodes);
                }, 1000);
              }
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Filterable (Single selection)", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Filterable (Multiple selection)", -1);

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          placeholder: "Try searchingL Guide",
          options: _ctx.options,
          filterable: ""
        }, null, 8, ["options"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          placeholder: "Try searchingL Guide",
          options: _ctx.options,
          props: {
            multiple: true
          },
          filterable: ""
        }, null, 8, ["options"])])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo8": function () {
      var _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createCommentVNode = vue_esm_browser["k" /* createCommentVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        key: 0
      };

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options
        }, {
          default: _withCtx(function (_ref) {
            var node = _ref.node,
                data = _ref.data;
            return [_createVNode("span", null, _toDisplayString(data.label), 1), !node.isLeaf ? (_openBlock(), _createBlock("span", _hoisted_1, " (" + _toDisplayString(data.children.length) + ") ", 1)) : _createCommentVNode("", true)];
          }),
          _: 1
        }, 8, ["options"])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo9": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_cascader_panel = _resolveComponent("el-cascader-panel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader_panel, {
          options: _ctx.options
        }, null, 8, ["options"])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/cascader.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/cascader.md



cascadervue_type_script_lang_ts.render = cascadervue_type_template_id_78028769_render

/* harmony default export */ var cascader = __webpack_exports__["default"] = (cascadervue_type_script_lang_ts);

/***/ })

}]);