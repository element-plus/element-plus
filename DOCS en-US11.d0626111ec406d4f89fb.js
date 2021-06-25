(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/cascader.md?vue&type=template&id=bc9a8824

var cascadervue_type_template_id_bc9a8824_hoisted_1 = {
  class: "content element-doc"
};

var cascadervue_type_template_id_bc9a8824_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "cascader"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cascader"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Cascader")], -1);

var cascadervue_type_template_id_bc9a8824_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "If the options have a clear hierarchical structure, Cascader can be used to view and select them.", -1);

var cascadervue_type_template_id_bc9a8824_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "There are two ways to expand child option items.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Assigning the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to an array of options renders a Cascader. The "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props.expandTrigger"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute defines how child options are expanded.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Child options expand when clicked (default)</span>\n  <el-cascader\n    v-model=\"value\"\n    :options=\"options\"\n    @change=\"handleChange\"></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Child options expand when hovered</span>\n  <el-cascader\n    v-model=\"value\"\n    :options=\"options\"\n    :props=\"{ expandTrigger: 'hover' }\"\n    @change=\"handleChange\"></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [],\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        value: [],\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      const handleChange = (value) => {\n        console.log(value);\n      };\n      return {\n        ...toRefs(state),\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "disabled-option"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#disabled-option"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Disabled option")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Disable an option by setting a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" field in the option object.")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("In this example, the first item in "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" array has a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled: true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" field, so it is disabled. By default, Cascader checks the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" field in each option object; if you are using another field name to indicate whether an option is disabled, you can assign it in the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props.disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute (see the API table below for details). And of course, field name "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" can also be customized in the same way.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\"></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          disabled: true,\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            disabled: true,\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "clearable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#clearable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Clearable")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute for "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and a clear icon will appear when selected and hovered")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\" clearable></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "display-only-the-last-level"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#display-only-the-last-level"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Display only the last level")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "The input can display only the last level instead of all levels.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("The "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-all-levels"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute defines if all levels are displayed. If it is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", only the last level is displayed.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\" :show-all-levels=\"false\"></el-cascader>\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "multiple-selection"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#multiple-selection"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Multiple Selection")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props.multiple = true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to use multiple selection.")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("When using multiple selection, all selected tags will display by default, You can set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "collapse-tags = true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to fold selected tags.")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Display all tags (default)</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"props\"\n    clearable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Collapse tags</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"props\"\n    collapse-tags\n    clearable></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: { multiple: true },\n        options: [{\n          value: 1,\n          label: 'Asia',\n          children: [{\n            value: 2,\n            label: 'China',\n            children: [\n              { value: 3, label: 'Beijing' },\n              { value: 4, label: 'Shanghai' },\n              { value: 5, label: 'Hangzhou' }\n            ]\n          }, {\n            value: 6,\n            label: 'Japan',\n            children: [\n              { value: 7, label: 'Tokyo' },\n              { value: 8, label: 'Osaka' },\n              { value: 9, label: 'Kyoto' }\n            ]\n          }, {\n            value: 10,\n            label: 'Korea',\n            children: [\n              { value: 11, label: 'Seoul' },\n              { value: 12, label: 'Busan' },\n              { value: 13, label: 'Taegu' }\n            ]\n          }]\n        }, {\n          value: 14,\n          label: 'Europe',\n          children: [{\n            value: 15,\n            label: 'France',\n            children: [\n              { value: 16, label: 'Paris' },\n              { value: 17, label: 'Marseille' },\n              { value: 18, label: 'Lyon' }\n            ]\n          }, {\n            value: 19,\n            label: 'UK',\n            children: [\n              { value: 20, label: 'London' },\n              { value: 21, label: 'Birmingham' },\n              { value: 22, label: 'Manchester' }\n            ]\n          }]\n        }, {\n          value: 23,\n          label: 'North America',\n          children: [{\n            value: 24,\n            label: 'US',\n            children: [\n              { value: 25, label: 'New York' },\n              { value: 26, label: 'Los Angeles' },\n              { value: 27, label: 'Washington' }\n            ]\n          }, {\n            value: 28,\n            label: 'Canada',\n            children: [\n              { value: 29, label: 'Toronto' },\n              { value: 30, label: 'Montreal' },\n              { value: 31, label: 'Ottawa' }\n            ]\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      props: { multiple: true },\n      options: [\n        {\n          value: 1,\n          label: 'Asia',\n          children: [\n            {\n              value: 2,\n              label: 'China',\n              children: [\n                { value: 3, label: 'Beijing' },\n                { value: 4, label: 'Shanghai' },\n                { value: 5, label: 'Hangzhou' },\n              ],\n            },\n            {\n              value: 6,\n              label: 'Japan',\n              children: [\n                { value: 7, label: 'Tokyo' },\n                { value: 8, label: 'Osaka' },\n                { value: 9, label: 'Kyoto' },\n              ],\n            },\n            {\n              value: 10,\n              label: 'Korea',\n              children: [\n                { value: 11, label: 'Seoul' },\n                { value: 12, label: 'Busan' },\n                { value: 13, label: 'Taegu' },\n              ],\n            },\n          ],\n        },\n        {\n          value: 14,\n          label: 'Europe',\n          children: [\n            {\n              value: 15,\n              label: 'France',\n              children: [\n                { value: 16, label: 'Paris' },\n                { value: 17, label: 'Marseille' },\n                { value: 18, label: 'Lyon' },\n              ],\n            },\n            {\n              value: 19,\n              label: 'UK',\n              children: [\n                { value: 20, label: 'London' },\n                { value: 21, label: 'Birmingham' },\n                { value: 22, label: 'Manchester' },\n              ],\n            },\n          ],\n        },\n        {\n          value: 23,\n          label: 'North America',\n          children: [\n            {\n              value: 24,\n              label: 'US',\n              children: [\n                { value: 25, label: 'New York' },\n                { value: 26, label: 'Los Angeles' },\n                { value: 27, label: 'Washington' },\n              ],\n            },\n            {\n              value: 28,\n              label: 'Canada',\n              children: [\n                { value: 29, label: 'Toronto' },\n                { value: 30, label: 'Montreal' },\n                { value: 31, label: 'Ottawa' },\n              ],\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "select-any-level-of-options"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#select-any-level-of-options"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Select any level of options")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "In single selection, only the leaf nodes can be checked, and in multiple selection, check parent nodes will lead to leaf nodes be checked eventually. When enable this feature, it can make parent and child nodes unlinked and you can select any level of options.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props.checkStrictly = true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to make checked state of a node not affects its parent nodes and child nodes, and then you can select any level of options.")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Select any level of options (Single selection)</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"{ checkStrictly: true }\"\n    clearable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Select any level of options (Multiple selection)</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"{ multiple: true, checkStrictly: true }\"\n    clearable></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dynamic-loading"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dynamic-loading"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Dynamic loading")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Dynamic load its child nodes when checked a node.", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lazy = true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to use dynamic loading, and you have to specify how to load the data source by "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lazyload"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". There are two parameters of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lazyload"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(",the first parameter "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is the node currently clicked, and the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "resolve"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is a callback that indicate loading is finished which must invoke. To display the status of node more accurately, you can add a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "leaf"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" field (can be modified by "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props.leaf"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(") to indicate whether it is a leaf node. Otherwise, it will be inferred by if has any child nodes.")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :props=\"props\"></el-cascader>\n\n<script>\n  let id = 0;\n\n  export default {\n    data() {\n      return {\n        props: {\n          lazy: true,\n          lazyLoad (node, resolve) {\n            const { level } = node;\n            setTimeout(() => {\n              const nodes = Array.from({ length: level + 1 })\n                .map(item => ({\n                  value: ++id,\n                  label: `Option - ${id}`,\n                  leaf: level >= 2\n                }));\n              // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.\n              resolve(nodes);\n            }, 1000);\n          }\n        }\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nlet id = 0;\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      props: {\n        lazy: true,\n        lazyLoad(node, resolve) {\n          const { level } = node;\n          setTimeout(() => {\n            const nodes = Array.from({ length: level + 1 }).map((item) => ({\n              value: ++id,\n              label: `Option - ${id}`,\n              leaf: level >= 2,\n            }));\n            // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.\n            resolve(nodes);\n          }, 1000);\n        },\n      },\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "filterable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filterable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Filterable")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Search and select options with a keyword.", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Adding "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" enables filtering. Cascader will match nodes whose label or parent's label (according to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-all-levels"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(") includes input keyword. Of course, you can customize search logic by "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" which accepts a function, the first parameter is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", the second is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "keyword"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", and need return a boolean value indicating whether it hits.")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Filterable (Single selection)</span>\n  <el-cascader\n    placeholder=\"Try searchingL Guide\"\n    :options=\"options\"\n    filterable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Filterable (Multiple selection)</span>\n  <el-cascader\n    placeholder=\"Try searchingL Guide\"\n    :options=\"options\"\n    :props=\"{ multiple: true }\"\n    filterable></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "custom-option-content"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#custom-option-content"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Custom option content")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can customize the content of cascader node.", -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You can customize the content of cascader node by "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "scoped slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". You'll have access to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" in the scope, standing for the Node object and node data of the current node respectively。")])], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\">\n  <template #default=\"{ node, data }\">\n    <span>{{ data.label }}</span>\n    <span v-if=\"!node.isLeaf\"> ({{ data.children.length }}) </span>\n  </template>\n</el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "cascader-panel"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cascader-panel"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Cascader panel")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "CascaderPanel"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is the core component of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Cascader"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" which has various of features such as single selection, multiple selection, dynamic loading and so on.")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Just like "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", you can set alternative options by "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", and enable other features by "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", see the API form below for details.")])], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader-panel :options=\"options\"></el-cascader-panel>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"cascader-attributes\"><a class=\"header-anchor\" href=\"#cascader-attributes\">¶</a> Cascader Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>-</td><td>—</td><td>—</td></tr><tr><td>options</td><td>data of the options，the key of <code>value</code> and <code>label</code> can be customize by <code>Props</code>.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>configuration options, see the following table.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>size</td><td>size of input</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>placeholder of input</td><td>string</td><td>—</td><td>Select</td></tr><tr><td>disabled</td><td>whether Cascader is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>clearable</td><td>whether selected value can be cleared</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-all-levels</td><td>whether to display all levels of the selected value in the input</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>collapse-tags</td><td>whether to collapse tags in multiple selection mode</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>separator</td><td>option label separator</td><td>string</td><td>—</td><td>&#39; / &#39;</td></tr><tr><td>filterable</td><td>whether the options can be searched</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>filter-method</td><td>customize search logic, the first parameter is <code>node</code>, the second is <code>keyword</code>, and need return a boolean value indicating whether it hits.</td><td>function(node, keyword)</td><td>-</td><td>-</td></tr><tr><td>debounce</td><td>debounce delay when typing filter keyword, in milliseconds</td><td>number</td><td>—</td><td>300</td></tr><tr><td>before-filter</td><td>hook function before filtering with the value to be filtered as its parameter. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, filtering will be aborted</td><td>function(value)</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>custom class name for Cascader&#39;s dropdown</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"cascader-events\"><a class=\"header-anchor\" href=\"#cascader-events\">¶</a> Cascader Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the binding value changes</td><td>value</td></tr><tr><td>expand-change</td><td>triggers when expand option changes</td><td>an array of the expanding node&#39;s parent nodes</td></tr><tr><td>blur</td><td>triggers when Cascader blurs</td><td>(event: Event)</td></tr><tr><td>focus</td><td>triggers when Cascader focuses</td><td>(event: Event)</td></tr><tr><td>visible-change</td><td>triggers when the dropdown appears/disappears</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>triggers when remove tag in multiple selection mode</td><td>the value of the tag which is removed</td></tr></tbody></table><h3 id=\"cascader-methods\"><a class=\"header-anchor\" href=\"#cascader-methods\">¶</a> Cascader Methods</h3><table><thead><tr><th>Method Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>getCheckedNodes</td><td>get an array of currently selected node</td><td>(leafOnly) whether only return the leaf checked nodes, default is <code>false</code></td></tr></tbody></table><h3 id=\"cascader-slots\"><a class=\"header-anchor\" href=\"#cascader-slots\">¶</a> Cascader Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>-</td><td>the custom content of cascader node, the parameter is { node, data }, which are current Node object and node data respectively.</td></tr><tr><td>empty</td><td>content when there is no matched options.</td></tr></tbody></table><h3 id=\"cascaderpanel-attributes\"><a class=\"header-anchor\" href=\"#cascaderpanel-attributes\">¶</a> CascaderPanel Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>-</td><td>—</td><td>—</td></tr><tr><td>options</td><td>data of the options，the key of <code>value</code> and <code>label</code> can be customize by <code>Props</code>.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>configuration options, see the following table.</td><td>object</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"cascaderpanel-events\"><a class=\"header-anchor\" href=\"#cascaderpanel-events\">¶</a> CascaderPanel Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the binding value changes</td><td>value</td></tr><tr><td>expand-change</td><td>triggers when expand option changes</td><td>an array of the expanding node&#39;s parent nodes</td></tr></tbody></table><h3 id=\"cascaderpanel-methods\"><a class=\"header-anchor\" href=\"#cascaderpanel-methods\">¶</a> CascaderPanel Methods</h3><table><thead><tr><th>Method Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>getCheckedNodes</td><td>get an array of currently selected node</td><td>(leafOnly) whether only return the leaf checked nodes, default is <code>false</code></td></tr><tr><td>clearCheckedNodes</td><td>clear checked nodes</td><td>-</td></tr></tbody></table><h3 id=\"cascaderpanel-slots\"><a class=\"header-anchor\" href=\"#cascaderpanel-slots\">¶</a> CascaderPanel Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>-</td><td>the custom content of cascader node, the parameter is { node, data }, which are current Node object and node data respectively.</td></tr></tbody></table><h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>expandTrigger</td><td>trigger mode of expanding options</td><td>string</td><td>click / hover</td><td>&#39;click&#39;</td></tr><tr><td>multiple</td><td>whether multiple selection is enabled</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>checkStrictly</td><td>whether checked state of a node not affects its parent and child nodes</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>emitPath</td><td>when checked nodes change, whether to emit an array of node&#39;s path, if false, only emit the value of node.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>lazy</td><td>whether to dynamic load child nodes, use with <code>lazyload</code> attribute</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>lazyLoad</td><td>method for loading child nodes data, only works when <code>lazy</code> is true</td><td>function(node, resolve)</td><td>-</td><td>-</td></tr><tr><td>value</td><td>specify which key of node object is used as the node&#39;s value</td><td>string</td><td>—</td><td>&#39;value&#39;</td></tr><tr><td>label</td><td>specify which key of node object is used as the node&#39;s label</td><td>string</td><td>—</td><td>&#39;label&#39;</td></tr><tr><td>children</td><td>specify which key of node object is used as the node&#39;s children</td><td>string</td><td>—</td><td>&#39;children&#39;</td></tr><tr><td>disabled</td><td>specify which key of node object is used as the node&#39;s disabled</td><td>string</td><td>—</td><td>&#39;disabled&#39;</td></tr><tr><td>leaf</td><td>specify which key of node object is used as the node&#39;s leaf field</td><td>string</td><td>—</td><td>&#39;leaf&#39;</td></tr></tbody></table>", 18);

function cascadervue_type_template_id_bc9a8824_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", cascadervue_type_template_id_bc9a8824_hoisted_1, [cascadervue_type_template_id_bc9a8824_hoisted_2, cascadervue_type_template_id_bc9a8824_hoisted_3, cascadervue_type_template_id_bc9a8824_hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27, _hoisted_28, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_35, _hoisted_36, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    _: 1
  }), _hoisted_39, _hoisted_40, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_42];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    _: 1
  }), _hoisted_43, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/cascader.md?vue&type=template&id=bc9a8824

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/cascader.md?vue&type=script&lang=ts


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
          _withCtx = vue_esm_browser["eb" /* withCtx */];
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
// CONCATENATED MODULE: ./website/docs/en-US/cascader.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/cascader.md



cascadervue_type_script_lang_ts.render = cascadervue_type_template_id_bc9a8824_render

/* harmony default export */ var cascader = __webpack_exports__["default"] = (cascadervue_type_script_lang_ts);

/***/ })

}]);