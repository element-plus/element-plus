(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[207],{

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/dialog.md?vue&type=template&id=47fc893a

var dialogvue_type_template_id_47fc893a_hoisted_1 = {
  class: "content element-doc"
};

var dialogvue_type_template_id_47fc893a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "dialog-dui-hua-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dialog-dui-hua-kuang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Dialog 对话框")], -1);

var dialogvue_type_template_id_47fc893a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "在保留当前页面状态的情况下，告知用户并承载相关操作。", -1);

var dialogvue_type_template_id_47fc893a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本用法")], -1);

var dialogvue_type_template_id_47fc893a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Dialog 弹出一个对话框，适合需要定制性更大的场景。", -1);

var dialogvue_type_template_id_47fc893a_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("需要设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "visible"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性，它接收"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，当为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("时显示 Dialog。Dialog 分为两个部分："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("需要具名为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("的"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("的用法。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"dialogVisible = true\">点击打开 Dialog</el-button>\n\n<el-dialog\n  title=\"提示\"\n  v-model=\"dialogVisible\"\n  width=\"30%\"\n  :before-close=\"handleClose\">\n  <span>这是一段信息</span>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"dialogVisible = false\">取 消</el-button>\n      <el-button type=\"primary\" @click=\"dialogVisible = false\">确 定</el-button>\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        dialogVisible: false\n      };\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('确认关闭？')\n          .then(_ => {\n            done();\n          })\n          .catch(_ => {});\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 的相关逻辑。")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-nei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义内容")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Plus Table 和 Form 组件的两个样例。", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"dialogTableVisible = true\">打开嵌套表格的 Dialog</el-button>\n\n<el-dialog title=\"收货地址\" v-model=\"dialogTableVisible\">\n  <el-table :data=\"gridData\">\n    <el-table-column property=\"date\" label=\"日期\" width=\"150\"></el-table-column>\n    <el-table-column property=\"name\" label=\"姓名\" width=\"200\"></el-table-column>\n    <el-table-column property=\"address\" label=\"地址\"></el-table-column>\n  </el-table>\n</el-dialog>\n\n<!-- Form -->\n<el-button type=\"text\" @click=\"dialogFormVisible = true\">打开嵌套表单的 Dialog</el-button>\n\n<el-dialog title=\"收货地址\" v-model=\"dialogFormVisible\">\n  <el-form :model=\"form\">\n    <el-form-item label=\"活动名称\" :label-width=\"formLabelWidth\">\n      <el-input v-model=\"form.name\" autocomplete=\"off\"></el-input>\n    </el-form-item>\n    <el-form-item label=\"活动区域\" :label-width=\"formLabelWidth\">\n      <el-select v-model=\"form.region\" placeholder=\"请选择活动区域\">\n        <el-option label=\"区域一\" value=\"shanghai\"></el-option>\n        <el-option label=\"区域二\" value=\"beijing\"></el-option>\n      </el-select>\n    </el-form-item>\n  </el-form>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"dialogFormVisible = false\">取 消</el-button>\n      <el-button type=\"primary\" @click=\"dialogFormVisible = false\">确 定</el-button>\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [{\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        }, {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        }, {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        }, {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        }],\n        dialogTableVisible: false,\n        dialogFormVisible: false,\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: ''\n        },\n        formLabelWidth: '120px'\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "qian-tao-de-dialog"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qian-tao-de-dialog"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 嵌套的 Dialog")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性。")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"outerVisible = true\">点击打开外层 Dialog</el-button>\n\n  <el-dialog title=\"外层 Dialog\" v-model=\"outerVisible\">\n    <el-dialog\n      width=\"30%\"\n      title=\"内层 Dialog\"\n      v-model=\"innerVisible\"\n      append-to-body>\n    </el-dialog>\n    <template #footer>\n      <div class=\"dialog-footer\">\n        <el-button @click=\"outerVisible = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"innerVisible = true\">打开内层 Dialog</el-button>\n      </div>\n    </template>\n  </el-dialog>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        outerVisible: false,\n        innerVisible: false\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ju-zhong-bu-ju"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ju-zhong-bu-ju"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 居中布局")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "标题和底部可水平居中", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("将"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("即可使标题和底部居中。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"centerDialogVisible = true\">点击打开 Dialog</el-button>\n\n<el-dialog\n  title=\"提示\"\n  v-model=\"centerDialogVisible\"\n  width=\"30%\"\n  center>\n  <span>需要注意的是内容是默认不居中的</span>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"centerDialogVisible = false\">取 消</el-button>\n      <el-button type=\"primary\" @click=\"centerDialogVisible = false\">确 定</el-button>\n    </span>\n  </template>\n\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 获取相应组件，请在 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "open"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 事件回调中进行。")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "guan-bi-shi-xiao-hui-dom-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#guan-bi-shi-xiao-hui-dom-nei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 关闭时销毁 DOM 内容")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可在 Dialog 没有显示时，销毁 Dialog 里的内容以达到减少 DOM 节点的作用", -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("需要注意的是，当这个属性被启用时，Dialog 内并不会有任何的 DOM 节点存在，除了 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "overlay"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "header（如果有）"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "footer（如果有）")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"centerDialogVisible = true\">点击打开 Dialog</el-button>\n\n<el-dialog\n  title=\"提示\"\n  v-model=\"centerDialogVisible\"\n  width=\"30%\"\n  destroy-on-close\n  center>\n  <span>需要注意在 Dialog 打开前是这条内容和下面的内容都是不会被渲染的</span>\n  <strong>额外的内容</strong>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"centerDialogVisible = false\">取 消</el-button>\n      <el-button type=\"primary\" @click=\"centerDialogVisible = false\">确 定</el-button>\n    </span>\n  </template>\n\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false\n      };\n    }\n  };\n</script>\n\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>当使用 <code>modal</code> = false 时，请一定保证 <code>Dialog</code> 的 <code>append-to-body</code> 属性为 <strong>true</strong>, 因为 <code>Dialog</code> 的定位是通过 <code>position: relative</code> 来定位的，当 <code>modal</code> 不存在当时候，如果不将 <code>Dialog</code> 插入到 <code>Document.Body</code> 下，则会根据当前的位置进行定位，会导致样式错乱</p></div><h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>是否显示 Dialog</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>title</td><td>Dialog 的标题，也可通过具名 slot （见下表）传入</td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>Dialog 的宽度</td><td>string</td><td>—</td><td>50%</td></tr><tr><td>fullscreen</td><td>是否为全屏 Dialog</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>top</td><td>Dialog CSS 中的 margin-top 值</td><td>string</td><td>—</td><td>15vh</td></tr><tr><td>modal</td><td>是否需要遮罩层</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>append-to-body</td><td>Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>是否在 Dialog 出现时将 body 滚动锁定</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>custom-class</td><td>Dialog 的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>open-delay</td><td>Dialog 打开的延时时间，单位毫秒</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-delay</td><td>Dialog 关闭的延时时间，单位毫秒</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-on-click-modal</td><td>是否可以通过点击 modal 关闭 Dialog</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>是否可以通过按下 ESC 关闭 Dialog</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-close</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>关闭前的回调，会暂停 Dialog 的关闭</td><td>function(done)，done 用于关闭 Dialog</td><td>—</td><td>—</td></tr><tr><td>center</td><td>是否对头部和底部采用居中布局</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>destroy-on-close</td><td>关闭时销毁 Dialog 中的元素</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Dialog 的内容</td></tr><tr><td>title</td><td>Dialog 标题区的内容</td></tr><tr><td>footer</td><td>Dialog 按钮操作区的内容</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>open</td><td>Dialog 打开的回调</td><td>—</td></tr><tr><td>opened</td><td>Dialog 打开动画结束时的回调</td><td>—</td></tr><tr><td>close</td><td>Dialog 关闭的回调</td><td>—</td></tr><tr><td>closed</td><td>Dialog 关闭动画结束时的回调</td><td>—</td></tr></tbody></table>", 7);

function dialogvue_type_template_id_47fc893a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", dialogvue_type_template_id_47fc893a_hoisted_1, [dialogvue_type_template_id_47fc893a_hoisted_2, dialogvue_type_template_id_47fc893a_hoisted_3, dialogvue_type_template_id_47fc893a_hoisted_4, dialogvue_type_template_id_47fc893a_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dialogvue_type_template_id_47fc893a_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_25]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/dialog.md?vue&type=template&id=47fc893a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/dialog.md?vue&type=script&lang=ts


/* harmony default export */ var dialogvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "这是一段信息", -1);

      var _hoisted_3 = {
        class: "dialog-footer"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("确 定");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "提示",
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.dialogVisible = $event;
          }),
          width: "30%",
          "before-close": _ctx.handleClose
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue", "before-close"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            dialogVisible: false
          };
        },
        methods: {
          handleClose: function handleClose(done) {
            this.$confirm('确认关闭？').then(function (_) {
              done();
            }).catch(function (_) {});
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("打开嵌套表格的 Dialog");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("打开嵌套表单的 Dialog");

      var _hoisted_3 = {
        class: "dialog-footer"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("确 定");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_dialog = _resolveComponent("el-dialog");

        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogTableVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "收货地址",
          modelValue: _ctx.dialogTableVisible,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.dialogTableVisible = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table, {
              data: _ctx.gridData
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
                  property: "date",
                  label: "日期",
                  width: "150"
                }), _createVNode(_component_el_table_column, {
                  property: "name",
                  label: "姓名",
                  width: "200"
                }), _createVNode(_component_el_table_column, {
                  property: "address",
                  label: "地址"
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.dialogFormVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "收货地址",
          modelValue: _ctx.dialogFormVisible,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
            return _ctx.dialogFormVisible = $event;
          })
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
              onClick: _cache[6] || (_cache[6] = function ($event) {
                return _ctx.dialogFormVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[7] || (_cache[7] = function ($event) {
                return _ctx.dialogFormVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_form, {
              model: _ctx.form
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_form_item, {
                  label: "活动名称",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_input, {
                      modelValue: _ctx.form.name,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.form.name = $event;
                      }),
                      autocomplete: "off"
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"]), _createVNode(_component_el_form_item, {
                  label: "活动区域",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_select, {
                      modelValue: _ctx.form.region,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                        return _ctx.form.region = $event;
                      }),
                      placeholder: "请选择活动区域"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_option, {
                          label: "区域一",
                          value: "shanghai"
                        }), _createVNode(_component_el_option, {
                          label: "区域二",
                          value: "beijing"
                        })];
                      }),
                      _: 1
                    }, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"])];
              }),
              _: 1
            }, 8, ["model"])];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
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
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '120px'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开外层 Dialog");

      var _hoisted_2 = {
        class: "dialog-footer"
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("打开内层 Dialog");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.outerVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "外层 Dialog",
          modelValue: _ctx.outerVisible,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.outerVisible = $event;
          })
        }, {
          footer: _withCtx(function () {
            return [_createVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.outerVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[4] || (_cache[4] = function ($event) {
                return _ctx.innerVisible = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_dialog, {
              width: "30%",
              title: "内层 Dialog",
              modelValue: _ctx.innerVisible,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                return _ctx.innerVisible = $event;
              }),
              "append-to-body": ""
            }, null, 8, ["modelValue"])];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            outerVisible: false,
            innerVisible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "需要注意的是内容是默认不居中的", -1);

      var _hoisted_3 = {
        class: "dialog-footer"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("确 定");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.centerDialogVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "提示",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.centerDialogVisible = $event;
          }),
          width: "30%",
          center: ""
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            centerDialogVisible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "需要注意在 Dialog 打开前是这条内容和下面的内容都是不会被渲染的", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("strong", null, "额外的内容", -1);

      var _hoisted_4 = {
        class: "dialog-footer"
      };

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("确 定");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.centerDialogVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "提示",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.centerDialogVisible = $event;
          }),
          width: "30%",
          "destroy-on-close": "",
          center: ""
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_4, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_2, _hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            centerDialogVisible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/dialog.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/dialog.md



dialogvue_type_script_lang_ts.render = dialogvue_type_template_id_47fc893a_render

/* harmony default export */ var dialog = __webpack_exports__["default"] = (dialogvue_type_script_lang_ts);

/***/ })

}]);