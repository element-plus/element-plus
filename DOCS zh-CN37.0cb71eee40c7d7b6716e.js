(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[320],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/loading.md?vue&type=template&id=4e556045

const loadingvue_type_template_id_4e556045_hoisted_1 = {
  class: "content element-doc"
};

const loadingvue_type_template_id_4e556045_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Loading 加载 ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "加载数据时显示动效。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("区域加载 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "在表格等容器中加载数据时显示。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，只需要绑定"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("修饰符，可以使遮罩插入至 DOM 中的 body 上。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table v-loading=\"loading\" :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"日期\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  body {\n    margin: 0;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n        ],\n        loading: true,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n        ],\n        loading: true,\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可自定义加载文案、图标和背景色。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在绑定了"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("指令的元素上添加"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-spinner"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-background"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性分别用来设定图标类名、背景色值、加载图标。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    element-loading-text=\"拼命加载中\"\n    element-loading-spinner=\"el-icon-loading\"\n    element-loading-background=\"rgba(0, 0, 0, 0.8)\"\n    :data=\"tableData\"\n    style=\"width: 100%;margin-bottom: 10px\"\n  >\n    <el-table-column prop=\"date\" label=\"日期\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n  </el-table>\n  <el-table\n    v-loading=\"loading\"\n    :element-loading-svg=\"svg\"\n    class=\"custom-loading-svg\"\n    element-loading-svg-view-box=\"-10, -10, 50, 50\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n  >\n    <el-table-column prop=\"date\" label=\"日期\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  .custom-loading-svg .el-loading-mask > .el-loading-spinner > .circular {\n    animation: none;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n        ],\n        loading: true,\n        svg: `\n          <path class=\"path\" d=\"\n            M 30 15\n            L 28 17\n            M 25.61 25.61\n            A 15 15, 0, 0, 1, 15 30\n            A 15 15, 0, 1, 1, 27.99 7.5\n            L 15 15\n          \" style=\"stroke-width: 4px; fill: rgba(0, 0, 0, 0)\"/>\n        `,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n        ],\n        loading: true,\n        svg: `\n          <path class=\"path\" d=\"\n            M 30 15\n            L 28 17\n            M 25.61 25.61\n            A 15 15, 0, 0, 1, 15 30\n            A 15 15, 0, 1, 1, 27.99 7.5\n            L 15 15\n          \" style=\"stroke-width: 4px; fill: rgba(0, 0, 0, 0)\"/>\n        `,\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_12 = {
  class: "warning"
};

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("XSS 攻击");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。请确保 ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的内容是可信的，");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "永远不要", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("将用户提交的内容赋值给 ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg", -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性。");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("整页加载 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "页面数据加载时显示。", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("当使用指令方式时，全屏遮罩需要添加"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "fullscreen"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lock"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen1\"\n    v-loading.fullscreen.lock=\"fullscreenLoading\"\n  >\n    指令方式\n  </el-button>\n  <el-button type=\"primary\" @click=\"openFullScreen2\"> 服务方式 </el-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false,\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true\n        setTimeout(() => {\n          this.fullscreenLoading = false\n        }, 2000)\n      },\n      openFullScreen2() {\n        const loading = this.$loading({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)',\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 2000)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElLoading } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      const fullscreenLoading = ref(false);\n      const openFullScreen1 = () => {\n        fullscreenLoading.value = true;\n        setTimeout(() => {\n          fullscreenLoading.value = false;\n        }, 2000);\n      };\n\n      const openFullScreen2 = () => {\n        const loading = ElLoading.service({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)',\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      };\n\n      return {\n        fullscreenLoading,\n        openFullScreen1,\n        openFullScreen2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("服务 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Loading 还可以以服务的方式调用。引入 Loading 服务：</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElLoading } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><p>在需要调用时：</p><pre class=\"example-code\"><code class=\"hljs language-javascript\">ElLoading.service(options)\n</code><span class=\"lang-mark\">js</span></pre><p>其中 <code>options</code> 参数为 Loading 的配置项，具体见下表。<code>LoadingService</code> 会返回一个 Loading 实例，可通过调用该实例的 <code>close</code> 方法来关闭它：</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance = ElLoading.service(options)\n<span class=\"hljs-built_in\">this</span>.$nextTick(<span class=\"hljs-function\">() =&gt;</span> {\n  <span class=\"hljs-comment\">// 以服务的方式调用的 Loading 需要异步关闭</span>\n  loadingInstance.close()\n})\n</code><span class=\"lang-mark\">js</span></pre><p>需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance1 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> })\n<span class=\"hljs-keyword\">let</span> loadingInstance2 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> })\n<span class=\"hljs-built_in\">console</span>.log(loadingInstance1 === loadingInstance2) <span class=\"hljs-comment\">// true</span>\n</code><span class=\"lang-mark\">js</span></pre><p>此时调用它们中任意一个的 <code>close</code> 方法都能关闭这个全屏 Loading。</p><p>如果完整引入了 Element，那么 <code>app.config.globalProperties</code> 上会有一个全局方法 <code>$loading</code>，它的调用方式为：<code>this.$loading(options)</code>，同样会返回一个 Loading 实例。</p>", 10);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Options ");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 <code>document.querySelector</code>以获取到对应 DOM 节点</td><td>object/string</td><td>—</td><td>document.body</td></tr><tr><td>body</td><td>同 <code>v-loading</code> 指令中的 <code>body</code> 修饰符</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>fullscreen</td><td>同 <code>v-loading</code> 指令中的 <code>fullscreen</code> 修饰符</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>lock</td><td>同 <code>v-loading</code> 指令中的 <code>lock</code> 修饰符</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text</td><td>显示在加载图标下方的加载文案</td><td>string</td><td>—</td><td>—</td></tr><tr><td>spinner</td><td>自定义加载图标类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>background</td><td>遮罩背景色</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>Loading 的自定义类名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function loadingvue_type_template_id_4e556045_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", loadingvue_type_template_id_4e556045_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "loading-jia-zai",
    content: "Loading 加载",
    href: "#loading-jia-zai",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [loadingvue_type_template_id_4e556045_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#loading-jia-zai"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "qu-yu-jia-zai",
    content: "区域加载",
    href: "#qu-yu-jia-zai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#qu-yu-jia-zai"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi",
    content: "自定义",
    href: "#zi-ding-yi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_12, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_13, _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://en.wikipedia.org/wiki/Cross-site_scripting"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), _hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zheng-ye-jia-zai",
    content: "整页加载",
    href: "#zheng-ye-jia-zai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zheng-ye-jia-zai"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fu-wu",
    content: "服务",
    href: "#fu-wu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fu-wu"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "options",
    content: "Options",
    href: "#options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#options"
    })]),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/loading.md?vue&type=template&id=4e556045

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/loading.md?vue&type=script&lang=ts

/* harmony default export */ var loadingvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        resolveDirective: _resolveDirective,
        withCtx: _withCtx,
        withDirectives: _withDirectives,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createElementBlock("div", null, [_withDirectives(_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "日期",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
          })]),
          _: 1
        }, 8, ["data"]), [[_directive_loading, _ctx.loading]])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
            loading: true
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        resolveDirective: _resolveDirective,
        withCtx: _withCtx,
        withDirectives: _withDirectives,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createElementBlock("div", null, [_withDirectives(_createVNode(_component_el_table, {
          "element-loading-text": "拼命加载中",
          "element-loading-spinner": "el-icon-loading",
          "element-loading-background": "rgba(0, 0, 0, 0.8)",
          data: _ctx.tableData,
          style: {
            "width": "100%",
            "margin-bottom": "10px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "日期",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
          })]),
          _: 1
        }, 8, ["data"]), [[_directive_loading, _ctx.loading]]), _withDirectives(_createVNode(_component_el_table, {
          "element-loading-svg": _ctx.svg,
          class: "custom-loading-svg",
          "element-loading-svg-view-box": "-10, -10, 50, 50",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "日期",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
          })]),
          _: 1
        }, 8, ["element-loading-svg", "data"]), [[_directive_loading, _ctx.loading]])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
            loading: true,
            svg: `
          <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
        `
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        resolveDirective: _resolveDirective,
        withCtx: _withCtx,
        createVNode: _createVNode,
        withDirectives: _withDirectives,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" 指令方式 ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" 服务方式 ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createElementBlock("div", null, [_withDirectives(_createVNode(_component_el_button, {
          type: "primary",
          onClick: _ctx.openFullScreen1
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]), [[_directive_loading, _ctx.fullscreenLoading, void 0, {
          fullscreen: true,
          lock: true
        }]]), _createVNode(_component_el_button, {
          type: "primary",
          onClick: _ctx.openFullScreen2
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            fullscreenLoading: false
          };
        },

        methods: {
          openFullScreen1() {
            this.fullscreenLoading = true;
            setTimeout(() => {
              this.fullscreenLoading = false;
            }, 2000);
          },

          openFullScreen2() {
            const loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              loading.close();
            }, 2000);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/loading.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/loading.md



loadingvue_type_script_lang_ts.render = loadingvue_type_template_id_4e556045_render

/* harmony default export */ var loading = __webpack_exports__["default"] = (loadingvue_type_script_lang_ts);

/***/ })

}]);