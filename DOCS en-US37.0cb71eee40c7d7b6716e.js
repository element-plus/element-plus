(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/loading.md?vue&type=template&id=013e4d44

const loadingvue_type_template_id_013e4d44_hoisted_1 = {
  class: "content element-doc"
};

const loadingvue_type_template_id_013e4d44_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Loading ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Show animation while loading data.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Loading inside a container ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Displays animation in a container (such as a table) while loading data.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus provides two ways to invoke Loading: directive and service. For the custom directive "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", you just need to bind a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" value to it. By default, the loading mask will append to the element where the directive is used. Adding the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" modifier makes the mask append to the body element.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table v-loading=\"loading\" :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Date\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  body {\n    margin: 0;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-04',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-01',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n        ],\n        loading: true,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      tableData: [\n        {\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n      ],\n      loading: true,\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Customization ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can customize loading text, loading spinner and background color.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Add attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to the element on which "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is bound, and its value will be displayed under the spinner. Similarly, the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-spinner"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-background"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attributes are used to set the icon class name, background color value, and loading icon, respectively.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    element-loading-text=\"Loading...\"\n    element-loading-spinner=\"el-icon-loading\"\n    element-loading-background=\"rgba(0, 0, 0, 0.8)\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n  >\n    <el-table-column prop=\"date\" label=\"Date\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n  </el-table>\n  <el-table\n    v-loading=\"loading\"\n    :element-loading-svg=\"svg\"\n    class=\"custom-loading-svg\"\n    element-loading-svg-view-box=\"-10, -10, 50, 50\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n  >\n    <el-table-column prop=\"date\" label=\"Date\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-04',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-01',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n        ],\n        loading: true,\n        svg: `\n          <path class=\"path\" d=\"\n            M 30 15\n            L 28 17\n            M 25.61 25.61\n            A 15 15, 0, 0, 1, 15 30\n            A 15 15, 0, 1, 1, 27.99 7.5\n            L 15 15\n          \" style=\"stroke-width: 4px; fill: rgba(0, 0, 0, 0)\"/>\n        `,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      tableData: [\n        {\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n      ],\n      loading: true,\n      svg: `\n        <path class=\"path\" d=\"\n          M 30 15\n          L 28 17\n          M 25.61 25.61\n          A 15 15, 0, 0, 1, 15 30\n          A 15 15, 0, 1, 1, 27.99 7.5\n          L 15 15\n        \" style=\"stroke-width: 4px; fill: rgba(0, 0, 0, 0)\"/>\n      `,\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_12 = {
  class: "warning"
};

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Although the ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute supports incoming HTML fragments, it is very dangerous to dynamically render arbitrary HTML on the website, because it is easy to cause ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("XSS attack");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Please make sure that the content of ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is trustworthy. ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "Never", -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" assign user-submitted content to the ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg", -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute.");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Full screen loading ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Show a full screen animation while loading data.", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("When used as a directive, a full screen Loading requires the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "fullscreen"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" modifier, and it will be appended to body. In this case, if you wish to disable scrolling on body, you can add another modifier "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lock"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". When used as a service, Loading will be full screen by default.")])], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen1\"\n    v-loading.fullscreen.lock=\"fullscreenLoading\"\n  >\n    As a directive\n  </el-button>\n  <el-button type=\"primary\" @click=\"openFullScreen2\"> As a service </el-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false,\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true\n        setTimeout(() => {\n          this.fullscreenLoading = false\n        }, 2000)\n      },\n      openFullScreen2() {\n        const loading = this.$loading({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)',\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 2000)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElLoading } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      const fullscreenLoading = ref(false);\n      const openFullScreen1 = () => {\n        fullscreenLoading.value = true;\n        setTimeout(() => {\n          fullscreenLoading.value = false;\n        }, 2000);\n      };\n\n      const openFullScreen2 = () => {\n        const loading = ElLoading.service({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)',\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      };\n\n      return {\n        fullscreenLoading,\n        openFullScreen1,\n        openFullScreen2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Service ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>You can also invoke Loading with a service. Import Loading service:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElLoading } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><p>Invoke it:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\">ElLoading.service(options)\n</code><span class=\"lang-mark\">js</span></pre><p>The parameter <code>options</code> is the configuration of Loading, and its details can be found in the following table. <code>LoadingService</code> returns a Loading instance, and you can close it by invoking its <code>close</code> method:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance = ElLoading.service(options)\n<span class=\"hljs-built_in\">this</span>.$nextTick(<span class=\"hljs-function\">() =&gt;</span> {\n  <span class=\"hljs-comment\">// Loading should be closed asynchronously</span>\n  loadingInstance.close()\n})\n</code><span class=\"lang-mark\">js</span></pre><p>Note that in this case the full screen Loading is singleton. If a new full screen Loading is invoked before an existing one is closed, the existing full screen Loading instance will be returned instead of actually creating another Loading instance:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance1 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> })\n<span class=\"hljs-keyword\">let</span> loadingInstance2 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> })\n<span class=\"hljs-built_in\">console</span>.log(loadingInstance1 === loadingInstance2) <span class=\"hljs-comment\">// true</span>\n</code><span class=\"lang-mark\">js</span></pre><p>Calling the <code>close</code> method on any one of them can close this full screen Loading.</p><p>If Element Plus is imported entirely, a globally method <code>$loading</code> will be registered to <code>app.config.globalProperties</code>. You can invoke it like this: <code>this.$loading(options)</code>, and it also returns a Loading instance.</p>", 10);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Options ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>the DOM node Loading needs to cover. Accepts a DOM object or a string. If it&#39;s a string, it will be passed to <code>document.querySelector</code> to get the corresponding DOM node</td><td>object/string</td><td>—</td><td>document.body</td></tr><tr><td>body</td><td>same as the <code>body</code> modifier of <code>v-loading</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>fullscreen</td><td>same as the <code>fullscreen</code> modifier of <code>v-loading</code></td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>lock</td><td>same as the <code>lock</code> modifier of <code>v-loading</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text</td><td>loading text that displays under the spinner</td><td>string</td><td>—</td><td>—</td></tr><tr><td>spinner</td><td>class name of the custom spinner</td><td>string</td><td>—</td><td>—</td></tr><tr><td>background</td><td>background color of the mask</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>custom class name for Loading</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Directives ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>v-loading</td><td>show animation while loading data</td><td>boolean</td></tr><tr><td>element-loading-text</td><td>loading text that displays under the spinner</td><td>string</td></tr><tr><td>element-loading-spinner</td><td>class name of the custom spinner</td><td>string</td></tr><tr><td>element-loading-background</td><td>background color of the mask</td><td>string</td></tr></tbody></table>", 1);

function loadingvue_type_template_id_013e4d44_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", loadingvue_type_template_id_013e4d44_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "loading",
    content: "Loading",
    href: "#loading",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [loadingvue_type_template_id_013e4d44_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#loading"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "loading-inside-a-container",
    content: "Loading inside a container",
    href: "#loading-inside-a-container",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#loading-inside-a-container"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "customization",
    content: "Customization",
    href: "#customization",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#customization"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_12, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_13, _hoisted_14, _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://en.wikipedia.org/wiki/Cross-site_scripting"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "full-screen-loading",
    content: "Full screen loading",
    href: "#full-screen-loading",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#full-screen-loading"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "service",
    content: "Service",
    href: "#service",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#service"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "options",
    content: "Options",
    href: "#options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#options"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "directives",
    content: "Directives",
    href: "#directives",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#directives"
    })]),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/loading.md?vue&type=template&id=013e4d44

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/loading.md?vue&type=script&lang=ts

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
            label: "Date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
          })]),
          _: 1
        }, 8, ["data"]), [[_directive_loading, _ctx.loading]])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-04',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-01',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
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
          "element-loading-text": "Loading...",
          "element-loading-spinner": "el-icon-loading",
          "element-loading-background": "rgba(0, 0, 0, 0.8)",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "Date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
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
            label: "Date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
          })]),
          _: 1
        }, 8, ["element-loading-svg", "data"]), [[_directive_loading, _ctx.loading]])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-04',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-01',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" As a directive ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" As a service ");

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
// CONCATENATED MODULE: ./website/docs/en-US/loading.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/loading.md



loadingvue_type_script_lang_ts.render = loadingvue_type_template_id_013e4d44_render

/* harmony default export */ var loading = __webpack_exports__["default"] = (loadingvue_type_script_lang_ts);

/***/ })

}]);