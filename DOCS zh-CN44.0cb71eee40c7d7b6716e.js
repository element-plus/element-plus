(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[328],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/pagination.md?vue&type=template&id=76d93935

const paginationvue_type_template_id_76d93935_hoisted_1 = {
  class: "content element-doc"
};

const paginationvue_type_template_id_76d93935_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Pagination 分页 ");

const paginationvue_type_template_id_76d93935_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当数据量过多时，使用分页分解数据。", -1);

const paginationvue_type_template_id_76d93935_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const paginationvue_type_template_id_76d93935_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "layout"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，表示需要显示的内容，用逗号分隔，布局元素会依次显示。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prev"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表示上一页，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "next"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为下一页，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "pager"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表示页码列表，除此以外还提供了"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "jumper"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "total"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和特殊的布局符号"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "->"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "->"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("后的元素会靠右显示，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "jumper"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表示跳页元素，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "total"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表示总条目数，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("用于设置每页显示的页码数量。")])], -1);

const paginationvue_type_template_id_76d93935_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">页数较少时的效果</span>\n    <el-pagination layout=\"prev, pager, next\" :total=\"50\"> </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">大于 7 页时的效果</span>\n    <el-pagination layout=\"prev, pager, next\" :total=\"1000\"> </el-pagination>\n  </div>\n</template>\n")], -1);

const paginationvue_type_template_id_76d93935_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置最大页码按钮数 ");

const paginationvue_type_template_id_76d93935_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "pager-count"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性可以设置最大页码按钮数。")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination\n    :page-size=\"20\"\n    :pager-count=\"11\"\n    layout=\"prev, pager, next\"\n    :total=\"1000\"\n  >\n  </el-pagination>\n</template>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("带有背景色的分页 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "background"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性可以为分页按钮添加背景色。")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination background layout=\"prev, pager, next\" :total=\"1000\">\n  </el-pagination>\n</template>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("小型分页 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "在空间有限的情况下，可以使用简单的小型分页。", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("只需要一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，它接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，设为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("即可启用。")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination small layout=\"prev, pager, next\" :total=\"50\"> </el-pagination>\n</template>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("附加功能 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "根据场景需要，可以添加其他功能模块。", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("此例是一个完整的用例，使用了"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("事件来处理页码大小和当前页变动时候触发的事件。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "page-sizes"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("接受一个整型数组，数组元素为展示的选择每页显示个数的选项，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "[100, 200, 300, 400]"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。")])], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">显示总数</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage1\"\n      :page-size=\"100\"\n      layout=\"total, prev, pager, next\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">调整每页显示条数</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage2\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"sizes, prev, pager, next\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">直接前往</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage3\"\n      :page-size=\"100\"\n      layout=\"prev, pager, next, jumper\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">完整功能</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      :current-page=\"currentPage4\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"total, sizes, prev, pager, next, jumper\"\n      :total=\"400\"\n    >\n    </el-pagination>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      handleSizeChange(val) {\n        console.log(`每页 ${val} 条`)\n      },\n      handleCurrentChange(val) {\n        console.log(`当前页: ${val}`)\n      },\n    },\n    data() {\n      return {\n        currentPage1: 5,\n        currentPage2: 5,\n        currentPage3: 5,\n        currentPage4: 4,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleSizeChange = (val) => {\n        console.log(`每页 ${val} 条`);\n      };\n      const handleCurrentChange = (val) => {\n        console.log(`当前页: ${val}`);\n      };\n\n      return {\n        currentPage1: ref(5),\n        currentPage2: ref(5),\n        currentPage3: ref(5),\n        currentPage4: ref(4),\n        handleSizeChange,\n        handleCurrentChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("当只有一页时隐藏分页 ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("当只有一页时，通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hide-on-single-page"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性来隐藏分页。")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-switch v-model=\"value\"> </el-switch>\n    <el-pagination\n      :hide-on-single-page=\"value\"\n      :total=\"5\"\n      layout=\"prev, pager, next\"\n    >\n    </el-pagination>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        value: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>small</td><td>是否使用小型分页样式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background</td><td>是否为分页按钮添加背景色</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>page-size</td><td>每页显示条目个数，支持 v-model 双向绑定</td><td>number</td><td>—</td><td>10</td></tr><tr><td>default-page-size</td><td>每页显示条目数的初始值；</td><td>number</td><td>-</td><td>-</td></tr><tr><td>total</td><td>总条目数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>page-count</td><td>总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>pager-count</td><td>页码按钮的数量，当总页数超过该值时会折叠</td><td>number</td><td>大于等于 5 且小于等于 21 的奇数</td><td>7</td></tr><tr><td>current-page</td><td>当前页数，支持 v-model 双向绑定</td><td>number</td><td>—</td><td>1</td></tr><tr><td>default-current-page</td><td>当前页数的初始值</td><td>number</td><td>-</td><td>-</td></tr><tr><td>layout</td><td>组件布局，子组件名用逗号分隔</td><td>String</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, -&gt;, total&#39;</td></tr><tr><td>page-sizes</td><td>每页显示个数选择器的选项设置</td><td>number[]</td><td>—</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>每页显示个数选择器的下拉框类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prev-text</td><td>替代图标显示的上一页文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>next-text</td><td>替代图标显示的下一页文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>只有一页时是否隐藏</td><td>boolean</td><td>—</td><td>-</td></tr></tbody></table><div class=\"warning\"><p>我们现在会检查一些不合理的用法，如果发现分页器未显示，可以核对是否违反以下情形：</p><ul><li><code>total</code> 和 <code>page-count</code> 必须传一个，不然组件无法判断总页数；优先使用 <code>page-count</code>;</li><li>如果传入了 <code>current-page</code> 必须监听 <code>current-page</code> 变更的事件（<code>onUpdate:currentPage</code>）；否则分页切换不起作用；</li><li>如果传入了 <code>page-size</code>，且布局包含 <code>page-size</code> 选择器（即 <code>layout</code> 包含 <code>sizes</code>），必须监听 <code>page-size</code> 变更的事件（<code>onUpdate:pageSize</code>），否则 <code>page-size</code> 切换不起作用；</li></ul></div>", 2);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>size-change</td><td>pageSize 改变时会触发</td><td>每页条数</td></tr><tr><td>current-change</td><td>currentPage 改变时会触发</td><td>当前页</td></tr><tr><td>prev-click</td><td>用户点击上一页按钮改变当前页后触发</td><td>当前页</td></tr><tr><td>next-click</td><td>用户点击下一页按钮改变当前页后触发</td><td>当前页</td></tr></tbody></table><div class=\"warning\"><p>以上事件不推荐使用；如果要监听 current-page 和 page-size 的改变，使用 v-model 双向绑定是个更好的选择。</p></div>", 2);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义内容，需要在 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "layout"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 中列出 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot")])])])], -1);

function paginationvue_type_template_id_76d93935_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", paginationvue_type_template_id_76d93935_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "pagination-fen-ye",
    content: "Pagination 分页",
    href: "#pagination-fen-ye",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_76d93935_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#pagination-fen-ye"
    })]),
    _: 1
  }), paginationvue_type_template_id_76d93935_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_76d93935_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_76d93935_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_76d93935_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "she-zhi-zui-da-ye-ma-an-niu-shu",
    content: "设置最大页码按钮数",
    href: "#she-zhi-zui-da-ye-ma-an-niu-shu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_76d93935_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#she-zhi-zui-da-ye-ma-an-niu-shu"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_76d93935_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dai-you-bei-jing-se-de-fen-ye",
    content: "带有背景色的分页",
    href: "#dai-you-bei-jing-se-de-fen-ye",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dai-you-bei-jing-se-de-fen-ye"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xiao-xing-fen-ye",
    content: "小型分页",
    href: "#xiao-xing-fen-ye",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiao-xing-fen-ye"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fu-jia-gong-neng",
    content: "附加功能",
    href: "#fu-jia-gong-neng",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fu-jia-gong-neng"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dang-zhi-you-yi-ye-shi-yin-cang-fen-ye",
    content: "当只有一页时隐藏分页",
    href: "#dang-zhi-you-yi-ye-shi-yin-cang-fen-ye",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slot"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/pagination.md?vue&type=template&id=76d93935

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/pagination.md?vue&type=script&lang=ts

/* harmony default export */ var paginationvue_type_script_lang_ts = ({
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
      }, "页数较少时的效果", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "大于 7 页时的效果", -1);

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_pagination, {
          layout: "prev, pager, next",
          total: 50
        })]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_pagination, {
          layout: "prev, pager, next",
          total: 1000
        })])]);
      }

      const democomponentExport = {};
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
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          "page-size": 20,
          "pager-count": 11,
          layout: "prev, pager, next",
          total: 1000
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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          background: "",
          layout: "prev, pager, next",
          total: 1000
        })]);
      }

      const democomponentExport = {};
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
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          small: "",
          layout: "prev, pager, next",
          total: 50
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
      }, "显示总数", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "调整每页显示条数", -1);

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "直接前往", -1);

      const _hoisted_7 = {
        class: "block"
      };

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "完整功能", -1);

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage1,
          "onUpdate:currentPage": _cache[0] || (_cache[0] = $event => _ctx.currentPage1 = $event),
          "page-size": 100,
          layout: "total, prev, pager, next",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage2,
          "onUpdate:currentPage": _cache[1] || (_cache[1] = $event => _ctx.currentPage2 = $event),
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          layout: "sizes, prev, pager, next",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage3,
          "onUpdate:currentPage": _cache[2] || (_cache[2] = $event => _ctx.currentPage3 = $event),
          "page-size": 100,
          layout: "prev, pager, next, jumper",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          "current-page": _ctx.currentPage4,
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          layout: "total, sizes, prev, pager, next, jumper",
          total: 400
        }, null, 8, ["onSizeChange", "onCurrentChange", "current-page"])])]);
      }

      const democomponentExport = {
        methods: {
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },

          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }

        },

        data() {
          return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_pagination, {
          "hide-on-single-page": _ctx.value,
          total: 5,
          layout: "prev, pager, next"
        }, null, 8, ["hide-on-single-page"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: false
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
// CONCATENATED MODULE: ./website/docs/zh-CN/pagination.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/pagination.md



paginationvue_type_script_lang_ts.render = paginationvue_type_template_id_76d93935_render

/* harmony default export */ var pagination = __webpack_exports__["default"] = (paginationvue_type_script_lang_ts);

/***/ })

}]);