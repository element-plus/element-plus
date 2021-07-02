(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[333],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/select-v2.md?vue&type=template&id=7ddb4824

var select_v2vue_type_template_id_7ddb4824_hoisted_1 = {
  class: "content element-doc"
};

var select_v2vue_type_template_id_7ddb4824_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"select-v2-xu-ni-lie-biao-xuan-ze-qi\"><a class=\"header-anchor\" href=\"#select-v2-xu-ni-lie-biao-xuan-ze-qi\">¶</a> Select V2 虚拟列表选择器</h2><div class=\"tip\"><p>\b 这个组件目前在测试当中，如果在使用中发现任何漏洞和问题，请在 <a href=\"https://github.com/element-plus/element-plus/issues\">Github</a> 中提交 issue 以便我们进行处理</p></div><h3 id=\"bei-jing\"><a class=\"header-anchor\" href=\"#bei-jing\">¶</a> 背景</h3><p>在数据量爆发的今天，很多时候一个选择器可能从服务器加载非常多的数据，然而浏览器在一次性把这些数据渲染到页面上的时候会出现卡顿甚至是崩溃的情况，所以虚拟化技术应运而生，为了更好的用户体验和更好的使用体验，我们决定添加这个组件。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>适用广泛的基础选择器</p>", 6);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 200px;\"\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "duo-xuan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#duo-xuan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 多选")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "最基础的多选选择器", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 200px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "yin-cang-duo-yu-biao-qian-de-duo-xuan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yin-cang-duo-yu-biao-qian-de-duo-xuan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 隐藏多余标签的多选")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 200px;\"\n    multiple\n    collapse-tags\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "ke-shai-xuan-de-duo-xuan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-shai-xuan-de-duo-xuan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可筛选的多选")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "当选项过多时，可通过匹配筛选", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 200px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "您可以选择禁用 Select 或者 Select 的 Option", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 200px; margin-right: 16px; vertical-align: middle;\"\n    multiple\n  />\n  <el-select-v2\n    disabled\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 200px; vertical-align: middle;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n          disabled: idx % 10 === 0,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "xuan-xiang-fen-zu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xuan-xiang-fen-zu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 选项分组")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "我们可以为选项分组，只需要满足例子里的这个 pattern", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 200px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 10 }).map((_, idx) => {\n          const label = idx + 1\n          return {\n            value: `组 ${label}`,\n            label: `组 ${label}`,\n            options: Array.from({ length: 10 }).map((_, idx) => ({\n              value: `选项${idx + 1 + 10 * label}`,\n              label: `${initials[idx % 10]}${idx + 1 + 10 * label}`,\n            })),\n          }\n        }),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-xuan-ran-mo-ban"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-xuan-ran-mo-ban"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义渲染模板")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "我们也可以通过自己自定义模板来渲染自己想要的内容。", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 200px;\"\n    multiple\n  >\n    <template #default=\"{item}\">\n      <span style=\"margin-right: 8px;\">{{ item.label }}</span>\n      <span style=\"color: #8492a6; font-size: 13px\">\n        {{ item.value }}\n      </span>\n    </template>\n  </el-select-v2>\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "yi-jian-qing-chu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yi-jian-qing-chu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 一键清除")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "一键删除所有的选项（也可适用于单选）", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value1\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 200px; margin-right: 16px; vertical-align: middle;\"\n    multiple\n    clearable\n  />\n  <el-select-v2\n    v-model=\"value2\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 200px; vertical-align: middle;\"\n    clearable\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value1: [],\n        value2: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"chuang-jian-lin-shi-xuan-xiang\"><a class=\"header-anchor\" href=\"#chuang-jian-lin-shi-xuan-xiang\">¶</a> 创建临时选项</h3><p>WIP (该功能还在施工中👷‍♀️)</p><h3 id=\"yuan-cheng-sou-suo\"><a class=\"header-anchor\" href=\"#yuan-cheng-sou-suo\">¶</a> 远程搜索</h3><p>WIP (该功能还在施工中👷‍♀️)</p><h3 id=\"jian-pan-cao-zuo\"><a class=\"header-anchor\" href=\"#jian-pan-cao-zuo\">¶</a> 键盘操作</h3><p>WIP (该功能还在施工中👷‍♀️)</p><div class=\"tip\"><p>有一些 API 暂时还没有被实现（相较于当前的 select 而言），因为还需要更多设计以及一些遗留 API 的改动，所以当前仅支持一些最简单的展示功能。</p></div><h3 id=\"selectv2-attributes\"><a class=\"header-anchor\" href=\"#selectv2-attributes\">¶</a> SelectV2 Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>作为 value 唯一标识的键名，绑定值为对象类型时必填</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>medium/small/mini</td><td>—</td></tr><tr><td>clearable</td><td>是否可以清空选项</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>多选时是否将选中值按文字的形式展示</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td>多选时用户最多可以选择的项目数，为 0 则不限制</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>select input 的 name 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>select input 的 autocomplete 属性</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>占位符</td><td>string</td><td>—</td><td>请选择</td></tr><tr><td>filterable</td><td>是否可搜索</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>no-data-text</td><td>选项为空时显示的文字，也可以使用<code>#empty</code>设置</td><td>string</td><td>—</td><td>无数据</td></tr><tr><td>popper-class</td><td>Select 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-append-to-body</td><td>是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-options</td><td>用户定制化 popper 的行为, 更多请查看文档<a href=\"https://popper.js.org/documentation.html\">popper.js</a></td><td>object</td><td>-</td><td>-</td></tr><tr><td>automatic-dropdown</td><td>对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>clear-icon</td><td>自定义清空图标的类名</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><span style=\"display:none;\"></span><h3 id=\"selectv2-events\"><a class=\"header-anchor\" href=\"#selectv2-events\">¶</a> SelectV2 Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中值发生变化时触发</td><td>目前的选中值</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr><tr><td>remove-tag</td><td>多选模式下移除tag时触发</td><td>移除的tag值</td></tr><tr><td>clear</td><td>可清空的单选模式下用户点击清空按钮时触发</td><td>—</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>(event: Event)</td></tr></tbody></table><h3 id=\"selectv2-slots\"><a class=\"header-anchor\" href=\"#selectv2-slots\">¶</a> SelectV2 Slots</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>Option 模板</td></tr><tr><td>empty</td><td>无选项时的列表</td></tr></tbody></table>", 14);

function select_v2vue_type_template_id_7ddb4824_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo7");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", select_v2vue_type_template_id_7ddb4824_hoisted_1, [select_v2vue_type_template_id_7ddb4824_hoisted_2, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_26, _hoisted_27, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/select-v2.md?vue&type=template&id=7ddb4824

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/select-v2.md?vue&type=script&lang=ts


/* harmony default export */ var select_v2vue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "200px"
          }
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "\u9009\u9879" + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "\u9009\u9879" + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "200px"
          },
          multiple: "",
          "collapse-tags": ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "\u9009\u9879" + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "\u9009\u9879" + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "200px",
            "margin-right": "16px",
            "vertical-align": "middle"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"]), _createVNode(_component_el_select_v2, {
          disabled: "",
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "200px",
            "vertical-align": "middle"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "\u9009\u9879" + (idx + 1),
                label: "" + initials[idx % 10] + idx,
                disabled: idx % 10 === 0
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 10
            }).map(function (_, idx) {
              var label = idx + 1;
              return {
                value: "\u7EC4 " + label,
                label: "\u7EC4 " + label,
                options: Array.from({
                  length: 10
                }).map(function (_, idx) {
                  return {
                    value: "\u9009\u9879" + (idx + 1 + 10 * label),
                    label: "" + initials[idx % 10] + (idx + 1 + 10 * label)
                  };
                })
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "margin-right": "8px"
        }
      };
      var _hoisted_2 = {
        style: {
          "color": "#8492a6",
          "font-size": "13px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, {
          default: _withCtx(function (_ref) {
            var item = _ref.item;
            return [_createVNode("span", _hoisted_1, _toDisplayString(item.label), 1), _createVNode("span", _hoisted_2, _toDisplayString(item.value), 1)];
          }),
          _: 1
        }, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "\u9009\u9879" + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "200px",
            "margin-right": "16px",
            "vertical-align": "middle"
          },
          multiple: "",
          clearable: ""
        }, null, 8, ["modelValue", "options"]), _createVNode(_component_el_select_v2, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "200px",
            "vertical-align": "middle"
          },
          clearable: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "\u9009\u9879" + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value1: [],
            value2: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/select-v2.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/select-v2.md



select_v2vue_type_script_lang_ts.render = select_v2vue_type_template_id_7ddb4824_render

/* harmony default export */ var select_v2 = __webpack_exports__["default"] = (select_v2vue_type_script_lang_ts);

/***/ })

}]);