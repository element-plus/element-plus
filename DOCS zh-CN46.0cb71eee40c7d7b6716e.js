(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[330],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/popover.md?vue&type=template&id=ae24f716

const popovervue_type_template_id_ae24f716_hoisted_1 = {
  class: "content element-doc"
};

const popovervue_type_template_id_ae24f716_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Popover 弹出框 ");

const popovervue_type_template_id_ae24f716_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const popovervue_type_template_id_ae24f716_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Popover 的属性与 Tooltip 很类似，它们都是基于"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Vue-popper"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。")], -1);

const popovervue_type_template_id_ae24f716_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性用于设置何时触发 Popover，支持四种触发方式："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "focus"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "manual"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。对于触发 Popover 的元素，有两种写法：使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "#reference"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的具名插槽，或使用自定义指令"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-popover"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("指向 Popover 的索引"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-popover\n    placement=\"top-start\"\n    title=\"标题\"\n    :width=\"200\"\n    trigger=\"hover\"\n    content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n  >\n    <template #reference>\n      <el-button>hover 激活</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"标题\"\n    :width=\"200\"\n    trigger=\"click\"\n    content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n  >\n    <template #reference>\n      <el-button>click 激活</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    ref=\"popover\"\n    placement=\"right\"\n    title=\"标题\"\n    :width=\"200\"\n    trigger=\"focus\"\n    content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n  >\n    <template #reference>\n      <el-button>focus 激活</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"标题\"\n    :width=\"200\"\n    trigger=\"manual\"\n    content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n    v-model:visible=\"visible\"\n  >\n    <template #reference>\n      <el-button @click=\"visible = !visible\">手动激活</el-button>\n    </template>\n  </el-popover>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        visible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("嵌套信息 ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("利用分发取代"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-popover placement=\"right\" :width=\"400\" trigger=\"click\">\n  <template #reference>\n    <el-button>click 激活</el-button>\n  </template>\n  <el-table :data=\"gridData\">\n    <el-table-column width=\"150\" property=\"date\" label=\"日期\"></el-table-column>\n    <el-table-column width=\"100\" property=\"name\" label=\"姓名\"></el-table-column>\n    <el-table-column\n      width=\"300\"\n      property=\"address\"\n      label=\"地址\"\n    ></el-table-column>\n  </el-table>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("嵌套操作 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当然，你还可以嵌套操作，这相比 Dialog 更为轻量：", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-popover placement=\"top\" :width=\"160\" v-model:visible=\"visible\">\n  <p>这是一段内容这是一段内容确定删除吗？</p>\n  <div style=\"text-align: right; margin: 0\">\n    <el-button size=\"mini\" type=\"text\" @click=\"visible = false\">取消</el-button>\n    <el-button type=\"primary\" size=\"mini\" @click=\"visible = false\"\n      >确定</el-button\n    >\n  </div>\n  <template #reference>\n    <el-button @click=\"visible = true\">删除</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        visible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "参数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "可选值"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "默认值")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "触发方式"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "click/focus/hover/manual"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "click")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "标题"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("显示的内容，也可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 传入 DOM")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "width"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "宽度"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "String, Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "最小宽度 150px")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "出现位置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "bottom")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Popover 是否可用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "visible / v-model:visible"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "状态是否可见"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "出现位置的偏移量"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "transition"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "定义渐变动画"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "fade-in-linear")], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-arrow", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("是否显示 Tooltip 箭头，更多参数可见");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vue-popper");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Boolean", -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true", -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-options", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("popper.js");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的参数");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Object", -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("参考 ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("popper.js");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 文档");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "{ boundariesElement: 'body', gpuAcceleration: false }")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "为 popper 添加类名"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-after"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "延迟出现，单位毫秒"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hide-after"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "延迟关闭，单位毫秒"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "auto-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tabindex", -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Popover 组件的 ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("tabindex");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number", -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "参数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Popover 内嵌 HTML 文本")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "reference"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "触发 Popover 显示的 HTML 元素")])])], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>show</td><td>显示时触发</td><td>—</td></tr><tr><td>after-enter</td><td>显示动画播放完毕后触发</td><td>—</td></tr><tr><td>hide</td><td>隐藏时触发</td><td>—</td></tr><tr><td>after-leave</td><td>隐藏动画播放完毕后触发</td><td>—</td></tr></tbody></table>", 1);

function popovervue_type_template_id_ae24f716_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", popovervue_type_template_id_ae24f716_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "popover-dan-chu-kuang",
    content: "Popover 弹出框",
    href: "#popover-dan-chu-kuang",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [popovervue_type_template_id_ae24f716_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#popover-dan-chu-kuang"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [popovervue_type_template_id_ae24f716_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), popovervue_type_template_id_ae24f716_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [popovervue_type_template_id_ae24f716_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "qian-tao-xin-xi",
    content: "嵌套信息",
    href: "#qian-tao-xin-xi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#qian-tao-xin-xi"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "qian-tao-cao-zuo",
    content: "嵌套操作",
    href: "#qian-tao-cao-zuo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#qian-tao-cao-zuo"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_15, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_25, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-component/vue-popper"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  })]), _hoisted_28, _hoisted_29, _hoisted_30]), Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_31, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32]),
    _: 1
  }), _hoisted_33]), _hoisted_34, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36]),
    _: 1
  }), _hoisted_37]), _hoisted_38]), _hoisted_39, _hoisted_40, _hoisted_41, _hoisted_42, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_43, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45]),
    _: 1
  })]), _hoisted_46, _hoisted_47, _hoisted_48])])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slot"
    })]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/popover.md?vue&type=template&id=ae24f716

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/popover.md?vue&type=script&lang=ts

/* harmony default export */ var popovervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("hover 激活");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("click 激活");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("focus 激活");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("手动激活");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top-start",
          title: "标题",
          width: 200,
          trigger: "hover",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "标题",
          width: 200,
          trigger: "click",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_popover, {
          ref: "popover",
          placement: "right",
          title: "标题",
          width: 200,
          trigger: "focus",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }, 512), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "标题",
          width: 200,
          trigger: "manual",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。",
          visible: _ctx.visible,
          "onUpdate:visible": _cache[1] || (_cache[1] = $event => _ctx.visible = $event)
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = $event => _ctx.visible = !_ctx.visible)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["visible"])]);
      }

      const democomponentExport = {
        data() {
          return {
            visible: false
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("click 激活");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "right",
          width: 400,
          trigger: "click"
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          default: _withCtx(() => [_createVNode(_component_el_table, {
            data: _ctx.gridData
          }, {
            default: _withCtx(() => [_createVNode(_component_el_table_column, {
              width: "150",
              property: "date",
              label: "日期"
            }), _createVNode(_component_el_table_column, {
              width: "100",
              property: "name",
              label: "姓名"
            }), _createVNode(_component_el_table_column, {
              width: "300",
              property: "address",
              label: "地址"
            })]),
            _: 1
          }, 8, ["data"])]),
          _: 1
        })]);
      }

      const democomponentExport = {
        data() {
          return {
            gridData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("p", null, "这是一段内容这是一段内容确定删除吗？", -1);

      const _hoisted_2 = {
        style: {
          "text-align": "right",
          "margin": "0"
        }
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("取消");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("确定");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("删除");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top",
          width: 160,
          visible: _ctx.visible,
          "onUpdate:visible": _cache[3] || (_cache[3] = $event => _ctx.visible = $event)
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, {
            onClick: _cache[2] || (_cache[2] = $event => _ctx.visible = true)
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_1, _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
            size: "mini",
            type: "text",
            onClick: _cache[0] || (_cache[0] = $event => _ctx.visible = false)
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            size: "mini",
            onClick: _cache[1] || (_cache[1] = $event => _ctx.visible = false)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })])]),
          _: 1
        }, 8, ["visible"])]);
      }

      const democomponentExport = {
        data() {
          return {
            visible: false
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
// CONCATENATED MODULE: ./website/docs/zh-CN/popover.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/popover.md



popovervue_type_script_lang_ts.render = popovervue_type_template_id_ae24f716_render

/* harmony default export */ var popover = __webpack_exports__["default"] = (popovervue_type_script_lang_ts);

/***/ })

}]);