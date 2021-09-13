(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[292],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/cascader.md?vue&type=template&id=a66d57ba

const cascadervue_type_template_id_a66d57ba_hoisted_1 = {
  class: "content element-doc"
};

const cascadervue_type_template_id_a66d57ba_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cascader 级联选择器 ");

const cascadervue_type_template_id_a66d57ba_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。", -1);

const cascadervue_type_template_id_a66d57ba_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "有两种触发子菜单的方式", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("只需为 Cascader 的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性指定选项数组即可渲染出一个级联选择器。通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props.expandTrigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可以定义展开子级菜单的触发方式。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">默认 click 触发子菜单</span>\n  <el-cascader\n    v-model=\"value\"\n    :options=\"options\"\n    @change=\"handleChange\"\n  ></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">hover 触发子菜单</span>\n  <el-cascader\n    v-model=\"value\"\n    :options=\"options\"\n    :props=\"props\"\n    @change=\"handleChange\"\n  ></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [],\n        props: { expandTrigger: 'hover' },\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      }\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        value: [],\n        props: { expandTrigger: 'hover' },\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      });\n      const handleChange = (value) => {\n        console.log(value);\n      };\n      return {\n        ...toRefs(state),\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("禁用选项 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过在数据源中设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 字段来声明该选项是禁用的")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("本例中，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("指定的数组中的第一个元素含有"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled: true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("字段是否为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，如果你的数据中表示禁用含义的字段名不为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，可以通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props.disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来指定（详见下方 API 表格）。当然，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("这三个字段名也可以通过同样的方式指定。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader :options=\"options\"></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            disabled: true,\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            disabled: true,\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可清空 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 设置输入框可清空")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader :options=\"options\" clearable></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n\n</setup>\n-->\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("仅显示最后一级 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-all-levels"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("定义了是否显示完整的路径，将其赋值为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("则仅显示最后一级")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader :options=\"options\" :show-all-levels=\"false\"></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [{\n        value: 'zhinan',\n        label: '指南',\n        children: [{\n          value: 'shejiyuanze',\n          label: '设计原则',\n          children: [{\n            value: 'yizhi',\n            label: '一致',\n          }, {\n            value: 'fankui',\n            label: '反馈',\n          }, {\n            value: 'xiaolv',\n            label: '效率',\n          }, {\n            value: 'kekong',\n            label: '可控',\n          }],\n        }, {\n          value: 'daohang',\n          label: '导航',\n          children: [{\n            value: 'cexiangdaohang',\n            label: '侧向导航',\n          }, {\n            value: 'dingbudaohang',\n            label: '顶部导航',\n          }],\n        }],\n      }, {\n        value: 'zujian',\n        label: '组件',\n        children: [{\n          value: 'basic',\n          label: 'Basic',\n          children: [{\n            value: 'layout',\n            label: 'Layout 布局',\n          }, {\n            value: 'color',\n            label: 'Color 色彩',\n          }, {\n            value: 'typography',\n            label: 'Typography 字体',\n          }, {\n            value: 'icon',\n            label: 'Icon 图标',\n          }, {\n            value: 'button',\n            label: 'Button 按钮',\n          }],\n        }, {\n          value: 'form',\n          label: 'Form',\n          children: [{\n            value: 'radio',\n            label: 'Radio 单选框',\n          }, {\n            value: 'checkbox',\n            label: 'Checkbox 多选框',\n          }, {\n            value: 'input',\n            label: 'Input 输入框',\n          }, {\n            value: 'input-number',\n            label: 'InputNumber 计数器',\n          }, {\n            value: 'select',\n            label: 'Select 选择器',\n          }, {\n            value: 'cascader',\n            label: 'Cascader 级联选择器',\n          }, {\n            value: 'switch',\n            label: 'Switch 开关',\n          }, {\n            value: 'slider',\n            label: 'Slider 滑块',\n          }, {\n            value: 'time-picker',\n            label: 'TimePicker 时间选择器',\n          }, {\n            value: 'date-picker',\n            label: 'DatePicker 日期选择器',\n          }, {\n            value: 'datetime-picker',\n            label: 'DateTimePicker 日期时间选择器',\n          }, {\n            value: 'upload',\n            label: 'Upload 上传',\n          }, {\n            value: 'rate',\n            label: 'Rate 评分',\n          }, {\n            value: 'form',\n            label: 'Form 表单',\n          }],\n        }, {\n          value: 'data',\n          label: 'Data',\n          children: [{\n            value: 'table',\n            label: 'Table 表格',\n          }, {\n            value: 'tag',\n            label: 'Tag 标签',\n          }, {\n            value: 'progress',\n            label: 'Progress 进度条',\n          }, {\n            value: 'tree',\n            label: 'Tree 树形控件',\n          }, {\n            value: 'pagination',\n            label: 'Pagination 分页',\n          }, {\n            value: 'badge',\n            label: 'Badge 标记',\n          }],\n        }, {\n          value: 'notice',\n          label: 'Notice',\n          children: [{\n            value: 'alert',\n            label: 'Alert 警告',\n          }, {\n            value: 'loading',\n            label: 'Loading 加载',\n          }, {\n            value: 'message',\n            label: 'Message 消息提示',\n          }, {\n            value: 'message-box',\n            label: 'MessageBox 弹框',\n          }, {\n            value: 'notification',\n            label: 'Notification 通知',\n          }],\n        }, {\n          value: 'navigation',\n          label: 'Navigation',\n          children: [{\n            value: 'menu',\n            label: 'NavMenu 导航菜单',\n          }, {\n            value: 'tabs',\n            label: 'Tabs 标签页',\n          }, {\n            value: 'breadcrumb',\n            label: 'Breadcrumb 面包屑',\n          }, {\n            value: 'dropdown',\n            label: 'Dropdown 下拉菜单',\n          }, {\n            value: 'steps',\n            label: 'Steps 步骤条',\n          }],\n        }, {\n          value: 'others',\n          label: 'Others',\n          children: [{\n            value: 'dialog',\n            label: 'Dialog 对话框',\n          }, {\n            value: 'tooltip',\n            label: 'Tooltip 文字提示',\n          }, {\n            value: 'popover',\n            label: 'Popover 弹出框',\n          }, {\n            value: 'card',\n            label: 'Card 卡片',\n          }, {\n            value: 'carousel',\n            label: 'Carousel 走马灯',\n          }, {\n            value: 'collapse',\n            label: 'Collapse 折叠面板',\n          }],\n        }],\n      }, {\n        value: 'ziyuan',\n        label: '资源',\n        children: [{\n          value: 'axure',\n          label: 'Axure Components',\n        }, {\n          value: 'sketch',\n          label: 'Sketch Templates',\n        }, {\n          value: 'jiaohu',\n          label: '组件交互文档',\n        }],\n      }],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("多选 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props.multiple = true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 来开启多选模式")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在开启多选模式后，默认情况下会展示所有已选中的选项的 Tag，你可以使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "collapse-tags"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("来折叠 Tag")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">默认显示所有Tag</span>\n  <el-cascader :options=\"options\" :props=\"props\" clearable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">折叠展示Tag</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"props\"\n    collapse-tags\n    clearable\n  ></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: { multiple: true },\n        options: [\n          {\n            value: 1,\n            label: '东南',\n            children: [\n              {\n                value: 2,\n                label: '上海',\n                children: [\n                  { value: 3, label: '普陀' },\n                  { value: 4, label: '黄埔' },\n                  { value: 5, label: '徐汇' },\n                ],\n              },\n              {\n                value: 7,\n                label: '江苏',\n                children: [\n                  { value: 8, label: '南京' },\n                  { value: 9, label: '苏州' },\n                  { value: 10, label: '无锡' },\n                ],\n              },\n              {\n                value: 12,\n                label: '浙江',\n                children: [\n                  { value: 13, label: '杭州' },\n                  { value: 14, label: '宁波' },\n                  { value: 15, label: '嘉兴' },\n                ],\n              },\n            ],\n          },\n          {\n            value: 17,\n            label: '西北',\n            children: [\n              {\n                value: 18,\n                label: '陕西',\n                children: [\n                  { value: 19, label: '西安' },\n                  { value: 20, label: '延安' },\n                ],\n              },\n              {\n                value: 21,\n                label: '新疆维吾尔族自治区',\n                children: [\n                  { value: 22, label: '乌鲁木齐' },\n                  { value: 23, label: '克拉玛依' },\n                ],\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      props: { multiple: true },\n      options: [\n        {\n          value: 1,\n          label: '东南',\n          children: [\n            {\n              value: 2,\n              label: '上海',\n              children: [\n                { value: 3, label: '普陀' },\n                { value: 4, label: '黄埔' },\n                { value: 5, label: '徐汇' },\n              ],\n            },\n            {\n              value: 7,\n              label: '江苏',\n              children: [\n                { value: 8, label: '南京' },\n                { value: 9, label: '苏州' },\n                { value: 10, label: '无锡' },\n              ],\n            },\n            {\n              value: 12,\n              label: '浙江',\n              children: [\n                { value: 13, label: '杭州' },\n                { value: 14, label: '宁波' },\n                { value: 15, label: '嘉兴' },\n              ],\n            },\n          ],\n        },\n        {\n          value: 17,\n          label: '西北',\n          children: [\n            {\n              value: 18,\n              label: '陕西',\n              children: [\n                { value: 19, label: '西安' },\n                { value: 20, label: '延安' },\n              ],\n            },\n            {\n              value: 21,\n              label: '新疆维吾尔族自治区',\n              children: [\n                { value: 22, label: '乌鲁木齐' },\n                { value: 23, label: '克拉玛依' },\n              ],\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("选择任意一级选项 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props.checkStrictly = true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">单选选择任意一级选项</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"{ checkStrictly: true }\"\n    clearable\n  ></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">多选选择任意一级选项</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"{ multiple: true, checkStrictly: true }\"\n    clearable\n  ></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [{\n        value: 'zhinan',\n        label: '指南',\n        children: [{\n          value: 'shejiyuanze',\n          label: '设计原则',\n          children: [{\n            value: 'yizhi',\n            label: '一致',\n          }, {\n            value: 'fankui',\n            label: '反馈',\n          }, {\n            value: 'xiaolv',\n            label: '效率',\n          }, {\n            value: 'kekong',\n            label: '可控',\n          }],\n        }, {\n          value: 'daohang',\n          label: '导航',\n          children: [{\n            value: 'cexiangdaohang',\n            label: '侧向导航',\n          }, {\n            value: 'dingbudaohang',\n            label: '顶部导航',\n          }],\n        }],\n      }, {\n        value: 'zujian',\n        label: '组件',\n        children: [{\n          value: 'basic',\n          label: 'Basic',\n          children: [{\n            value: 'layout',\n            label: 'Layout 布局',\n          }, {\n            value: 'color',\n            label: 'Color 色彩',\n          }, {\n            value: 'typography',\n            label: 'Typography 字体',\n          }, {\n            value: 'icon',\n            label: 'Icon 图标',\n          }, {\n            value: 'button',\n            label: 'Button 按钮',\n          }],\n        }, {\n          value: 'form',\n          label: 'Form',\n          children: [{\n            value: 'radio',\n            label: 'Radio 单选框',\n          }, {\n            value: 'checkbox',\n            label: 'Checkbox 多选框',\n          }, {\n            value: 'input',\n            label: 'Input 输入框',\n          }, {\n            value: 'input-number',\n            label: 'InputNumber 计数器',\n          }, {\n            value: 'select',\n            label: 'Select 选择器',\n          }, {\n            value: 'cascader',\n            label: 'Cascader 级联选择器',\n          }, {\n            value: 'switch',\n            label: 'Switch 开关',\n          }, {\n            value: 'slider',\n            label: 'Slider 滑块',\n          }, {\n            value: 'time-picker',\n            label: 'TimePicker 时间选择器',\n          }, {\n            value: 'date-picker',\n            label: 'DatePicker 日期选择器',\n          }, {\n            value: 'datetime-picker',\n            label: 'DateTimePicker 日期时间选择器',\n          }, {\n            value: 'upload',\n            label: 'Upload 上传',\n          }, {\n            value: 'rate',\n            label: 'Rate 评分',\n          }, {\n            value: 'form',\n            label: 'Form 表单',\n          }],\n        }, {\n          value: 'data',\n          label: 'Data',\n          children: [{\n            value: 'table',\n            label: 'Table 表格',\n          }, {\n            value: 'tag',\n            label: 'Tag 标签',\n          }, {\n            value: 'progress',\n            label: 'Progress 进度条',\n          }, {\n            value: 'tree',\n            label: 'Tree 树形控件',\n          }, {\n            value: 'pagination',\n            label: 'Pagination 分页',\n          }, {\n            value: 'badge',\n            label: 'Badge 标记',\n          }],\n        }, {\n          value: 'notice',\n          label: 'Notice',\n          children: [{\n            value: 'alert',\n            label: 'Alert 警告',\n          }, {\n            value: 'loading',\n            label: 'Loading 加载',\n          }, {\n            value: 'message',\n            label: 'Message 消息提示',\n          }, {\n            value: 'message-box',\n            label: 'MessageBox 弹框',\n          }, {\n            value: 'notification',\n            label: 'Notification 通知',\n          }],\n        }, {\n          value: 'navigation',\n          label: 'Navigation',\n          children: [{\n            value: 'menu',\n            label: 'NavMenu 导航菜单',\n          }, {\n            value: 'tabs',\n            label: 'Tabs 标签页',\n          }, {\n            value: 'breadcrumb',\n            label: 'Breadcrumb 面包屑',\n          }, {\n            value: 'dropdown',\n            label: 'Dropdown 下拉菜单',\n          }, {\n            value: 'steps',\n            label: 'Steps 步骤条',\n          }],\n        }, {\n          value: 'others',\n          label: 'Others',\n          children: [{\n            value: 'dialog',\n            label: 'Dialog 对话框',\n          }, {\n            value: 'tooltip',\n            label: 'Tooltip 文字提示',\n          }, {\n            value: 'popover',\n            label: 'Popover 弹出框',\n          }, {\n            value: 'card',\n            label: 'Card 卡片',\n          }, {\n            value: 'carousel',\n            label: 'Carousel 走马灯',\n          }, {\n            value: 'collapse',\n            label: 'Collapse 折叠面板',\n          }],\n        }],\n      }, {\n        value: 'ziyuan',\n        label: '资源',\n        children: [{\n          value: 'axure',\n          label: 'Axure Components',\n        }, {\n          value: 'sketch',\n          label: 'Sketch Templates',\n        }, {\n          value: 'jiaohu',\n          label: '组件交互文档',\n        }],\n      }],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("动态加载 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当选中某一级时，动态加载该级下的选项。", -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lazy"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("开启动态加载，并通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lazyload"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("来设置加载数据源的方法。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lazyload"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("方法有两个参数，第一个参数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为当前点击的节点，第二个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "resolve"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "leaf"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，可通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props.leaf"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("修改)，否则会简单的以有无子节点来判断是否为叶子节点。")])], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader :props=\"props\"></el-cascader>\n\n<script>\n  let id = 0\n\n  export default {\n    data() {\n      return {\n        props: {\n          lazy: true,\n          lazyLoad(node, resolve) {\n            const { level } = node\n            setTimeout(() => {\n              const nodes = Array.from({ length: level + 1 }).map((item) => ({\n                value: ++id,\n                label: `选项${id}`,\n                leaf: level >= 2,\n              }))\n              // 通过调用resolve将子节点数据返回，通知组件数据加载完成\n              resolve(nodes)\n            }, 1000)\n          },\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可搜索 ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以快捷地搜索选项并选择。", -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("将"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("赋值为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("即可打开搜索功能，默认会匹配节点的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("或所有父节点的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("(由"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-all-levels"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("决定)中包含输入值的选项。你也可以用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义搜索逻辑，接受一个函数，第一个参数是节点"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，第二个参数是搜索关键词"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "keyword"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，通过返回布尔值表示是否命中。")])], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">单选可搜索</span>\n  <el-cascader\n    placeholder=\"试试搜索：指南\"\n    :options=\"options\"\n    filterable\n  ></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">多选可搜索</span>\n  <el-cascader\n    placeholder=\"试试搜索：指南\"\n    :options=\"options\"\n    :props=\"{ multiple: true }\"\n    filterable\n  ></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [{\n        value: 'zhinan',\n        label: '指南',\n        children: [{\n          value: 'shejiyuanze',\n          label: '设计原则',\n          children: [{\n            value: 'yizhi',\n            label: '一致',\n          }, {\n            value: 'fankui',\n            label: '反馈',\n          }, {\n            value: 'xiaolv',\n            label: '效率',\n          }, {\n            value: 'kekong',\n            label: '可控',\n          }],\n        }, {\n          value: 'daohang',\n          label: '导航',\n          children: [{\n            value: 'cexiangdaohang',\n            label: '侧向导航',\n          }, {\n            value: 'dingbudaohang',\n            label: '顶部导航',\n          }],\n        }],\n      }, {\n        value: 'zujian',\n        label: '组件',\n        children: [{\n          value: 'basic',\n          label: 'Basic',\n          children: [{\n            value: 'layout',\n            label: 'Layout 布局',\n          }, {\n            value: 'color',\n            label: 'Color 色彩',\n          }, {\n            value: 'typography',\n            label: 'Typography 字体',\n          }, {\n            value: 'icon',\n            label: 'Icon 图标',\n          }, {\n            value: 'button',\n            label: 'Button 按钮',\n          }],\n        }, {\n          value: 'form',\n          label: 'Form',\n          children: [{\n            value: 'radio',\n            label: 'Radio 单选框',\n          }, {\n            value: 'checkbox',\n            label: 'Checkbox 多选框',\n          }, {\n            value: 'input',\n            label: 'Input 输入框',\n          }, {\n            value: 'input-number',\n            label: 'InputNumber 计数器',\n          }, {\n            value: 'select',\n            label: 'Select 选择器',\n          }, {\n            value: 'cascader',\n            label: 'Cascader 级联选择器',\n          }, {\n            value: 'switch',\n            label: 'Switch 开关',\n          }, {\n            value: 'slider',\n            label: 'Slider 滑块',\n          }, {\n            value: 'time-picker',\n            label: 'TimePicker 时间选择器',\n          }, {\n            value: 'date-picker',\n            label: 'DatePicker 日期选择器',\n          }, {\n            value: 'datetime-picker',\n            label: 'DateTimePicker 日期时间选择器',\n          }, {\n            value: 'upload',\n            label: 'Upload 上传',\n          }, {\n            value: 'rate',\n            label: 'Rate 评分',\n          }, {\n            value: 'form',\n            label: 'Form 表单',\n          }],\n        }, {\n          value: 'data',\n          label: 'Data',\n          children: [{\n            value: 'table',\n            label: 'Table 表格',\n          }, {\n            value: 'tag',\n            label: 'Tag 标签',\n          }, {\n            value: 'progress',\n            label: 'Progress 进度条',\n          }, {\n            value: 'tree',\n            label: 'Tree 树形控件',\n          }, {\n            value: 'pagination',\n            label: 'Pagination 分页',\n          }, {\n            value: 'badge',\n            label: 'Badge 标记',\n          }],\n        }, {\n          value: 'notice',\n          label: 'Notice',\n          children: [{\n            value: 'alert',\n            label: 'Alert 警告',\n          }, {\n            value: 'loading',\n            label: 'Loading 加载',\n          }, {\n            value: 'message',\n            label: 'Message 消息提示',\n          }, {\n            value: 'message-box',\n            label: 'MessageBox 弹框',\n          }, {\n            value: 'notification',\n            label: 'Notification 通知',\n          }],\n        }, {\n          value: 'navigation',\n          label: 'Navigation',\n          children: [{\n            value: 'menu',\n            label: 'NavMenu 导航菜单',\n          }, {\n            value: 'tabs',\n            label: 'Tabs 标签页',\n          }, {\n            value: 'breadcrumb',\n            label: 'Breadcrumb 面包屑',\n          }, {\n            value: 'dropdown',\n            label: 'Dropdown 下拉菜单',\n          }, {\n            value: 'steps',\n            label: 'Steps 步骤条',\n          }],\n        }, {\n          value: 'others',\n          label: 'Others',\n          children: [{\n            value: 'dialog',\n            label: 'Dialog 对话框',\n          }, {\n            value: 'tooltip',\n            label: 'Tooltip 文字提示',\n          }, {\n            value: 'popover',\n            label: 'Popover 弹出框',\n          }, {\n            value: 'card',\n            label: 'Card 卡片',\n          }, {\n            value: 'carousel',\n            label: 'Carousel 走马灯',\n          }, {\n            value: 'collapse',\n            label: 'Collapse 折叠面板',\n          }],\n        }],\n      }, {\n        value: 'ziyuan',\n        label: '资源',\n        children: [{\n          value: 'axure',\n          label: 'Axure Components',\n        }, {\n          value: 'sketch',\n          label: 'Sketch Templates',\n        }, {\n          value: 'jiaohu',\n          label: '组件交互文档',\n        }],\n      }],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义节点内容 ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以自定义备选项的节点内容", -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可以通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "scoped slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("对级联选择器的备选项的节点内容进行自定义，scoped slot 会传入两个字段 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，分别表示当前节点的 Node 对象和数据。")])], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader :options=\"options\">\n  <template #default=\"{ node, data }\">\n    <span>{{ data.label }}</span>\n    <span v-if=\"!node.isLeaf\"> ({{ data.children.length }}) </span>\n  </template>\n</el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n\n</setup>\n-->\n")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("级联面板 ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "级联面板是级联选择器的核心组件，与级联选择器一样，有单选、多选、动态加载等多种功能。", -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和级联选择器一样，通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("来指定选项，也可通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("来设置多选、动态加载等功能，具体详情见下方 API 表格。")])], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-cascader-panel :options=\"options\"></el-cascader-panel>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'zhinan',\n            label: '指南',\n            children: [\n              {\n                value: 'shejiyuanze',\n                label: '设计原则',\n                children: [\n                  {\n                    value: 'yizhi',\n                    label: '一致',\n                  },\n                  {\n                    value: 'fankui',\n                    label: '反馈',\n                  },\n                  {\n                    value: 'xiaolv',\n                    label: '效率',\n                  },\n                  {\n                    value: 'kekong',\n                    label: '可控',\n                  },\n                ],\n              },\n              {\n                value: 'daohang',\n                label: '导航',\n                children: [\n                  {\n                    value: 'cexiangdaohang',\n                    label: '侧向导航',\n                  },\n                  {\n                    value: 'dingbudaohang',\n                    label: '顶部导航',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'zujian',\n            label: '组件',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout 布局',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color 色彩',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography 字体',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon 图标',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button 按钮',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio 单选框',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox 多选框',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input 输入框',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber 计数器',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select 选择器',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader 级联选择器',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch 开关',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider 滑块',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker 时间选择器',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker 日期选择器',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker 日期时间选择器',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload 上传',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate 评分',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form 表单',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table 表格',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag 标签',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress 进度条',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree 树形控件',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination 分页',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge 标记',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert 警告',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading 加载',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message 消息提示',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox 弹框',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification 通知',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu 导航菜单',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs 标签页',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb 面包屑',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown 下拉菜单',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps 步骤条',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog 对话框',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip 文字提示',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover 弹出框',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card 卡片',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel 走马灯',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse 折叠面板',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'ziyuan',\n            label: '资源',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'jiaohu',\n                label: '组件交互文档',\n              },\n            ],\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [{\n        value: 'zhinan',\n        label: '指南',\n        children: [{\n          value: 'shejiyuanze',\n          label: '设计原则',\n          children: [{\n            value: 'yizhi',\n            label: '一致',\n          }, {\n            value: 'fankui',\n            label: '反馈',\n          }, {\n            value: 'xiaolv',\n            label: '效率',\n          }, {\n            value: 'kekong',\n            label: '可控',\n          }],\n        }, {\n          value: 'daohang',\n          label: '导航',\n          children: [{\n            value: 'cexiangdaohang',\n            label: '侧向导航',\n          }, {\n            value: 'dingbudaohang',\n            label: '顶部导航',\n          }],\n        }],\n      }, {\n        value: 'zujian',\n        label: '组件',\n        children: [{\n          value: 'basic',\n          label: 'Basic',\n          children: [{\n            value: 'layout',\n            label: 'Layout 布局',\n          }, {\n            value: 'color',\n            label: 'Color 色彩',\n          }, {\n            value: 'typography',\n            label: 'Typography 字体',\n          }, {\n            value: 'icon',\n            label: 'Icon 图标',\n          }, {\n            value: 'button',\n            label: 'Button 按钮',\n          }],\n        }, {\n          value: 'form',\n          label: 'Form',\n          children: [{\n            value: 'radio',\n            label: 'Radio 单选框',\n          }, {\n            value: 'checkbox',\n            label: 'Checkbox 多选框',\n          }, {\n            value: 'input',\n            label: 'Input 输入框',\n          }, {\n            value: 'input-number',\n            label: 'InputNumber 计数器',\n          }, {\n            value: 'select',\n            label: 'Select 选择器',\n          }, {\n            value: 'cascader',\n            label: 'Cascader 级联选择器',\n          }, {\n            value: 'switch',\n            label: 'Switch 开关',\n          }, {\n            value: 'slider',\n            label: 'Slider 滑块',\n          }, {\n            value: 'time-picker',\n            label: 'TimePicker 时间选择器',\n          }, {\n            value: 'date-picker',\n            label: 'DatePicker 日期选择器',\n          }, {\n            value: 'datetime-picker',\n            label: 'DateTimePicker 日期时间选择器',\n          }, {\n            value: 'upload',\n            label: 'Upload 上传',\n          }, {\n            value: 'rate',\n            label: 'Rate 评分',\n          }, {\n            value: 'form',\n            label: 'Form 表单',\n          }],\n        }, {\n          value: 'data',\n          label: 'Data',\n          children: [{\n            value: 'table',\n            label: 'Table 表格',\n          }, {\n            value: 'tag',\n            label: 'Tag 标签',\n          }, {\n            value: 'progress',\n            label: 'Progress 进度条',\n          }, {\n            value: 'tree',\n            label: 'Tree 树形控件',\n          }, {\n            value: 'pagination',\n            label: 'Pagination 分页',\n          }, {\n            value: 'badge',\n            label: 'Badge 标记',\n          }],\n        }, {\n          value: 'notice',\n          label: 'Notice',\n          children: [{\n            value: 'alert',\n            label: 'Alert 警告',\n          }, {\n            value: 'loading',\n            label: 'Loading 加载',\n          }, {\n            value: 'message',\n            label: 'Message 消息提示',\n          }, {\n            value: 'message-box',\n            label: 'MessageBox 弹框',\n          }, {\n            value: 'notification',\n            label: 'Notification 通知',\n          }],\n        }, {\n          value: 'navigation',\n          label: 'Navigation',\n          children: [{\n            value: 'menu',\n            label: 'NavMenu 导航菜单',\n          }, {\n            value: 'tabs',\n            label: 'Tabs 标签页',\n          }, {\n            value: 'breadcrumb',\n            label: 'Breadcrumb 面包屑',\n          }, {\n            value: 'dropdown',\n            label: 'Dropdown 下拉菜单',\n          }, {\n            value: 'steps',\n            label: 'Steps 步骤条',\n          }],\n        }, {\n          value: 'others',\n          label: 'Others',\n          children: [{\n            value: 'dialog',\n            label: 'Dialog 对话框',\n          }, {\n            value: 'tooltip',\n            label: 'Tooltip 文字提示',\n          }, {\n            value: 'popover',\n            label: 'Popover 弹出框',\n          }, {\n            value: 'card',\n            label: 'Card 卡片',\n          }, {\n            value: 'carousel',\n            label: 'Carousel 走马灯',\n          }, {\n            value: 'collapse',\n            label: 'Collapse 折叠面板',\n          }],\n        }],\n      }, {\n        value: 'ziyuan',\n        label: '资源',\n        children: [{\n          value: 'axure',\n          label: 'Axure Components',\n        }, {\n          value: 'sketch',\n          label: 'Sketch Templates',\n        }, {\n          value: 'jiaohu',\n          label: '组件交互文档',\n        }],\n      }],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cascader Attributes ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>选中项绑定值</td><td>-</td><td>—</td><td>—</td></tr><tr><td>options</td><td>可选项数据源，键名可通过 <code>Props</code> 属性配置</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>配置选项，具体见下表</td><td>object</td><td>—</td><td>—</td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>—</td><td>请选择</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>clearable</td><td>是否支持清空选项</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-all-levels</td><td>输入框中是否显示选中值的完整路径</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>collapse-tags</td><td>多选模式下是否折叠 Tag</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>separator</td><td>选项分隔符</td><td>string</td><td>—</td><td>斜杠&#39; / &#39;</td></tr><tr><td>filterable</td><td>是否可搜索选项</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>filter-method</td><td>自定义搜索逻辑，第一个参数是节点<code>node</code>，第二个参数是搜索关键词<code>keyword</code>，通过返回布尔值表示是否命中</td><td>function(node, keyword)</td><td>-</td><td>-</td></tr><tr><td>debounce</td><td>搜索关键词输入的去抖延迟，毫秒</td><td>number</td><td>—</td><td>300</td></tr><tr><td>before-filter</td><td>筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选</td><td>function(value)</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>自定义浮层类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-append-to-body</td><td>是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>", 1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cascader Events ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当选中节点变化时触发</td><td>选中节点的值</td></tr><tr><td>expand-change</td><td>当展开节点发生变化时触发</td><td>各父级选项值组成的数组</td></tr><tr><td>blur</td><td>当失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>当获得焦点时触发</td><td>(event: Event)</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr><tr><td>remove-tag</td><td>在多选模式下，移除 Tag 时触发</td><td>移除的 Tag 对应的节点的值</td></tr></tbody></table>", 1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cascader Methods ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "方法名"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "参数")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "getCheckedNodes"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "获取选中的节点"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("(leafOnly) 是否只是叶子节点，默认值为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false")])])])], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cascader Slots ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "名称"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "empty"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "无匹配选项时的内容")])])], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CascaderPanel Attributes ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>选中项绑定值</td><td>-</td><td>—</td><td>—</td></tr><tr><td>options</td><td>可选项数据源，键名可通过 <code>Props</code> 属性配置</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>配置选项，具体见下表</td><td>object</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CascaderPanel Events ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当选中节点变化时触发</td><td>选中节点的值</td></tr><tr><td>expand-change</td><td>当展开节点发生变化时触发</td><td>各父级选项值组成的数组</td></tr></tbody></table>", 1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CascaderPanel Methods ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>getCheckedNodes</td><td>获取选中的节点数组</td><td>(leafOnly) 是否只是叶子节点，默认值为 <code>false</code></td></tr><tr><td>clearCheckedNodes</td><td>清空选中的节点</td><td>-</td></tr></tbody></table>", 1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CascaderPanel Slots ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "名称"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据")])])], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Props ");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>expandTrigger</td><td>次级菜单的展开方式</td><td>string</td><td>click / hover</td><td>&#39;click&#39;</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>checkStrictly</td><td>是否严格的遵守父子节点不互相关联</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>emitPath</td><td>在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>lazy</td><td>是否动态加载子节点，需与 lazyLoad 方法结合使用</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>lazyLoad</td><td>加载动态数据的方法，仅在 lazy 为 true 时有效</td><td>function(node, resolve)，<code>node</code>为当前点击的节点，<code>resolve</code>为数据加载完成的回调(必须调用)</td><td>-</td><td>-</td></tr><tr><td>value</td><td>指定选项的值为选项对象的某个属性值</td><td>string</td><td>—</td><td>&#39;value&#39;</td></tr><tr><td>label</td><td>指定选项标签为选项对象的某个属性值</td><td>string</td><td>—</td><td>&#39;label&#39;</td></tr><tr><td>children</td><td>指定选项的子选项为选项对象的某个属性值</td><td>string</td><td>—</td><td>&#39;children&#39;</td></tr><tr><td>disabled</td><td>指定选项的禁用为选项对象的某个属性值</td><td>string</td><td>—</td><td>&#39;disabled&#39;</td></tr><tr><td>leaf</td><td>指定选项的叶子节点的标志位为选项对象的某个属性值</td><td>string</td><td>—</td><td>&#39;leaf&#39;</td></tr></tbody></table>", 1);

function cascadervue_type_template_id_a66d57ba_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", cascadervue_type_template_id_a66d57ba_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cascader-ji-lian-xuan-ze-qi",
    content: "Cascader 级联选择器",
    href: "#cascader-ji-lian-xuan-ze-qi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [cascadervue_type_template_id_a66d57ba_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cascader-ji-lian-xuan-ze-qi"
    })]),
    _: 1
  }), cascadervue_type_template_id_a66d57ba_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [cascadervue_type_template_id_a66d57ba_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jin-yong-xuan-xiang",
    content: "禁用选项",
    href: "#jin-yong-xuan-xiang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jin-yong-xuan-xiang"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-qing-kong",
    content: "可清空",
    href: "#ke-qing-kong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-qing-kong"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jin-xian-shi-zui-hou-yi-ji",
    content: "仅显示最后一级",
    href: "#jin-xian-shi-zui-hou-yi-ji",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jin-xian-shi-zui-hou-yi-ji"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "duo-xuan",
    content: "多选",
    href: "#duo-xuan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#duo-xuan"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xuan-ze-ren-yi-yi-ji-xuan-xiang",
    content: "选择任意一级选项",
    href: "#xuan-ze-ren-yi-yi-ji-xuan-xiang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xuan-ze-ren-yi-yi-ji-xuan-xiang"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dong-tai-jia-zai",
    content: "动态加载",
    href: "#dong-tai-jia-zai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dong-tai-jia-zai"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-sou-suo",
    content: "可搜索",
    href: "#ke-sou-suo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-sou-suo"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-jie-dian-nei-rong",
    content: "自定义节点内容",
    href: "#zi-ding-yi-jie-dian-nei-rong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-jie-dian-nei-rong"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-lian-mian-ban",
    content: "级联面板",
    href: "#ji-lian-mian-ban",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-lian-mian-ban"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cascader-attributes",
    content: "Cascader Attributes",
    href: "#cascader-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cascader-attributes"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cascader-events",
    content: "Cascader Events",
    href: "#cascader-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cascader-events"
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
    id: "cascader-slots",
    content: "Cascader Slots",
    href: "#cascader-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cascader-slots"
    })]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cascaderpanel-attributes",
    content: "CascaderPanel Attributes",
    href: "#cascaderpanel-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cascaderpanel-attributes"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cascaderpanel-events",
    content: "CascaderPanel Events",
    href: "#cascaderpanel-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cascaderpanel-events"
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
    id: "cascaderpanel-slots",
    content: "CascaderPanel Slots",
    href: "#cascaderpanel-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cascaderpanel-slots"
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
// CONCATENATED MODULE: ./website/docs/zh-CN/cascader.md?vue&type=template&id=a66d57ba

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/cascader.md?vue&type=script&lang=ts

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
      }, "默认 click 触发子菜单", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "hover 触发子菜单", -1);

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
          props: _ctx.props,
          onChange: _ctx.handleChange
        }, null, 8, ["modelValue", "options", "props", "onChange"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: [],
            props: {
              expandTrigger: 'hover'
            },
            options: [{
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
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
              value: 'zhinan',
              label: '指南',
              disabled: true,
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
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
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
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
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
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
      }, "默认显示所有Tag", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "折叠展示Tag", -1);

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
              label: '东南',
              children: [{
                value: 2,
                label: '上海',
                children: [{
                  value: 3,
                  label: '普陀'
                }, {
                  value: 4,
                  label: '黄埔'
                }, {
                  value: 5,
                  label: '徐汇'
                }]
              }, {
                value: 7,
                label: '江苏',
                children: [{
                  value: 8,
                  label: '南京'
                }, {
                  value: 9,
                  label: '苏州'
                }, {
                  value: 10,
                  label: '无锡'
                }]
              }, {
                value: 12,
                label: '浙江',
                children: [{
                  value: 13,
                  label: '杭州'
                }, {
                  value: 14,
                  label: '宁波'
                }, {
                  value: 15,
                  label: '嘉兴'
                }]
              }]
            }, {
              value: 17,
              label: '西北',
              children: [{
                value: 18,
                label: '陕西',
                children: [{
                  value: 19,
                  label: '西安'
                }, {
                  value: 20,
                  label: '延安'
                }]
              }, {
                value: 21,
                label: '新疆维吾尔族自治区',
                children: [{
                  value: 22,
                  label: '乌鲁木齐'
                }, {
                  value: 23,
                  label: '克拉玛依'
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
      }, "单选选择任意一级选项", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "多选选择任意一级选项", -1);

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
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
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
                    label: `选项${id}`,
                    leaf: level >= 2
                  })); // 通过调用resolve将子节点数据返回，通知组件数据加载完成

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
      }, "单选可搜索", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "多选可搜索", -1);

      function render(_ctx, _cache) {
        const _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          placeholder: "试试搜索：指南",
          options: _ctx.options,
          filterable: ""
        }, null, 8, ["options"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          placeholder: "试试搜索：指南",
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
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
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
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
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
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
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
// CONCATENATED MODULE: ./website/docs/zh-CN/cascader.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/cascader.md



cascadervue_type_script_lang_ts.render = cascadervue_type_template_id_a66d57ba_render

/* harmony default export */ var cascader = __webpack_exports__["default"] = (cascadervue_type_script_lang_ts);

/***/ })

}]);