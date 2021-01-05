(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[233],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/popover.md?vue&type=template&id=3a52c528

var popovervue_type_template_id_3a52c528_hoisted_1 = {
  class: "content element-doc"
};

var popovervue_type_template_id_3a52c528_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "popover-dan-chu-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#popover-dan-chu-kuang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Popover 弹出框")], -1);

var popovervue_type_template_id_3a52c528_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var popovervue_type_template_id_3a52c528_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Popover 的属性与 Tooltip 很类似，它们都是基于"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Vue-popper"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。")], -1);

var popovervue_type_template_id_3a52c528_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性用于设置何时触发 Popover，支持四种触发方式："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "focus"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "manual"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。对于触发 Popover 的元素，有两种写法：使用 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "#reference"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 的具名插槽，或使用自定义指令"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-popover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("指向 Popover 的索引"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-popover\n    placement=\"top-start\"\n    title=\"标题\"\n    :width=\"200\"\n    trigger=\"hover\"\n    content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n  >\n    <template #reference>\n      <el-button>hover 激活</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"标题\"\n    :width=\"200\"\n    trigger=\"click\"\n    content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n  >\n    <template #reference>\n      <el-button>click 激活</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    ref=\"popover\"\n    placement=\"right\"\n    title=\"标题\"\n    :width=\"200\"\n    trigger=\"focus\"\n    content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n  >\n    <template #reference>\n      <el-button>focus 激活</el-button>\n    </template>\n  </el-popover>\n\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"标题\"\n    :width=\"200\"\n    trigger=\"manual\"\n    content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\"\n    v-model:visible=\"visible\"\n  >\n    <template #reference>\n      <el-button @click=\"visible = !visible\">手动激活</el-button>\n    </template>\n  </el-popover>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "qian-tao-xin-xi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qian-tao-xin-xi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 嵌套信息")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("利用分发取代"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-popover\n  placement=\"right\"\n  :width=\"400\"\n  trigger=\"click\"\n>\n  <template #reference>\n    <el-button>click 激活</el-button>\n  </template>\n  <el-table :data=\"gridData\">\n    <el-table-column width=\"150\" property=\"date\" label=\"日期\"></el-table-column>\n    <el-table-column width=\"100\" property=\"name\" label=\"姓名\"></el-table-column>\n    <el-table-column width=\"300\" property=\"address\" label=\"地址\"></el-table-column>\n  </el-table>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [{\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        }, {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        }, {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        }, {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "qian-tao-cao-zuo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qian-tao-cao-zuo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 嵌套操作")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "当然，你还可以嵌套操作，这相比 Dialog 更为轻量：", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-popover\n  placement=\"top\"\n  :width=\"160\"\n  v-model:visible=\"visible\"\n>\n  <p>这是一段内容这是一段内容确定删除吗？</p>\n  <div style=\"text-align: right; margin: 0\">\n    <el-button size=\"mini\" type=\"text\" @click=\"visible = false\">取消</el-button>\n    <el-button type=\"primary\" size=\"mini\" @click=\"visible = false\">确定</el-button>\n  </div>\n  <template #reference>\n    <el-button @click=\"visible = true\">删除</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>触发方式</td><td>String</td><td>click/focus/hover/manual</td><td>click</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>—</td><td>—</td></tr><tr><td>content</td><td>显示的内容，也可以通过 <code>slot</code> 传入 DOM</td><td>String</td><td>—</td><td>—</td></tr><tr><td>width</td><td>宽度</td><td>String, Number</td><td>—</td><td>最小宽度 150px</td></tr><tr><td>placement</td><td>出现位置</td><td>String</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>disabled</td><td>Popover 是否可用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>visible / v-model:visible</td><td>状态是否可见</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>出现位置的偏移量</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>定义渐变动画</td><td>String</td><td>—</td><td>fade-in-linear</td></tr><tr><td>show-arrow</td><td>是否显示 Tooltip 箭头，更多参数可见<a href=\"https://github.com/element-component/vue-popper\">Vue-popper</a></td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td><a href=\"https://popper.js.org/documentation.html\">popper.js</a> 的参数</td><td>Object</td><td>参考 <a href=\"https://popper.js.org/documentation.html\">popper.js</a> 文档</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>popper-class</td><td>为 popper 添加类名</td><td>String</td><td>—</td><td>—</td></tr><tr><td>open-delay</td><td>触发方式为 hover 时的显示延迟，单位为毫秒</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>close-delay</td><td>触发方式为 hover 时的隐藏延迟，单位为毫秒</td><td>number</td><td>—</td><td>200</td></tr><tr><td>tabindex</td><td>Popover 组件的 <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a></td><td>number</td><td>—</td><td>0</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Popover 内嵌 HTML 文本</td></tr><tr><td>reference</td><td>触发 Popover 显示的 HTML 元素</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>show</td><td>显示时触发</td><td>—</td></tr><tr><td>after-enter</td><td>显示动画播放完毕后触发</td><td>—</td></tr><tr><td>hide</td><td>隐藏时触发</td><td>—</td></tr><tr><td>after-leave</td><td>隐藏动画播放完毕后触发</td><td>—</td></tr></tbody></table>", 6);

function popovervue_type_template_id_3a52c528_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", popovervue_type_template_id_3a52c528_hoisted_1, [popovervue_type_template_id_3a52c528_hoisted_2, popovervue_type_template_id_3a52c528_hoisted_3, popovervue_type_template_id_3a52c528_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [popovervue_type_template_id_3a52c528_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/popover.md?vue&type=template&id=3a52c528

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/popover.md?vue&type=script&lang=ts


/* harmony default export */ var popovervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("hover 激活");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("click 激活");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("focus 激活");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("手动激活");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top-start",
          title: "标题",
          width: 200,
          trigger: "hover",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "标题",
          width: 200,
          trigger: "click",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_popover, {
          ref: "popover",
          placement: "right",
          title: "标题",
          width: 200,
          trigger: "focus",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "标题",
          width: 200,
          trigger: "manual",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。",
          visible: _ctx.visible,
          "onUpdate:visible": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.visible = $event;
          })
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.visible = !_ctx.visible;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["visible"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            visible: false
          };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("click 激活");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "right",
          width: 400,
          trigger: "click"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_table, {
              data: _ctx.gridData
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
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
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        })]);
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
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "这是一段内容这是一段内容确定删除吗？", -1);

      var _hoisted_2 = {
        style: {
          "text-align": "right",
          "margin": "0"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("取消");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("确定");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("删除");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top",
          width: 160,
          visible: _ctx.visible,
          "onUpdate:visible": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.visible = $event;
          })
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.visible = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
              size: "mini",
              type: "text",
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.visible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              size: "mini",
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.visible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })])];
          }),
          _: 1
        }, 8, ["visible"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            visible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/popover.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/popover.md



popovervue_type_script_lang_ts.render = popovervue_type_template_id_3a52c528_render

/* harmony default export */ var popover = __webpack_exports__["default"] = (popovervue_type_script_lang_ts);

/***/ })

}]);