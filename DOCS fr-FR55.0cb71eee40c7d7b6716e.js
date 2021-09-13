(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[196],{

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/skeleton.md?vue&type=template&id=25b13354

const skeletonvue_type_template_id_25b13354_hoisted_1 = {
  class: "content element-doc"
};

const skeletonvue_type_template_id_25b13354_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Skeleton ");

const skeletonvue_type_template_id_25b13354_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("When loading data, and you need a rich experience for visual and interactions for your end users, you can choose "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "skeleton"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const skeletonvue_type_template_id_25b13354_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const skeletonvue_type_template_id_25b13354_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "The basic skeleton.", -1);

const skeletonvue_type_template_id_25b13354_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-skeleton />\n</template>\n")], -1);

const skeletonvue_type_template_id_25b13354_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Configurable Rows ");

const skeletonvue_type_template_id_25b13354_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can configure the row numbers yourself, for more precise rendering effect, the actual rendered row number will always be 1 row more than the given number, that is because we are rendering a title row with 33% width of the others.", -1);

const skeletonvue_type_template_id_25b13354_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-skeleton :rows=\"5\" />\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Animation ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("We have provided a switch flag indicating whether showing the loading animation, called "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "animated"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" when this is true, all children of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-skeleton"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" will show animation")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-skeleton :rows=\"5\" animated />\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Customized Template ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ElementPlus only provides the most common template, sometimes that could be a problem, so you have a slot named "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "template"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to do that work.")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference.", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-skeleton style=\"width: 240px\">\n    <template #template>\n      <el-skeleton-item variant=\"image\" style=\"width: 240px; height: 240px;\" />\n      <div style=\"padding: 14px;\">\n        <el-skeleton-item variant=\"p\" style=\"width: 50%\" />\n        <div\n          style=\"display: flex; align-items: center; justify-items: space-between;\"\n        >\n          <el-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n          <el-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n        </div>\n      </div>\n    </template>\n  </el-skeleton>\n</template>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Loading state ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("When "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" ends, we always need to show the real UI with data to our end users. with the attribtue "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" we can control whether showing the DOM. You can also use slot "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to structure the real DOM element.")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\" alignment=\"flex-start\">\n    <div>\n      <label style=\"margin-right: 16px;\">Switch Loading</label>\n      <el-switch v-model=\"loading\" />\n    </div>\n    <el-skeleton style=\"width: 240px\" :loading=\"loading\" animated>\n      <template #template>\n        <el-skeleton-item\n          variant=\"image\"\n          style=\"width: 240px; height: 240px;\"\n        />\n        <div style=\"padding: 14px;\">\n          <el-skeleton-item variant=\"h3\" style=\"width: 50%;\" />\n          <div\n            style=\"display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;\"\n          >\n            <el-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n            <el-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <el-card :body-style=\"{ padding: '0px', marginBottom: '1px' }\">\n          <img\n            src=\"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png\"\n            class=\"image\"\n          />\n          <div style=\"padding: 14px;\">\n            <span>Delicious hamberger</span>\n            <div class=\"bottom card-header\">\n              <span class=\"time\">{{ currentDate }}</span>\n              <el-button type=\"text\" class=\"button\">Operation button</el-button>\n            </div>\n          </div>\n        </el-card>\n      </template>\n    </el-skeleton>\n  </el-space>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n\n  const dayjs = require('dayjs')\n\n  export default defineComponent({\n    data() {\n      return {\n        loading: true,\n        currentDate: dayjs().format('YYYY-MM-DD'),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Rendering a list of data ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Most of the time, skeleton is used as indicators of rendering a list of data which haven't been fetched from server yet, then we need to create a list of skeleton out of no where to make it look like it is loading, with "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "count"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute, you can control how many these templates you need to render to the browser.")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("We do not recommend rendering lots of fake UI to the browser, it will still cause the performance issue, it also costs longer to destroy the skeleton. Keep "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "count"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" as small as it can be to make better user experience.")])], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\" alignment=\"flex-start\">\n    <el-button @click=\"setLoading\">Click me to reload</el-button>\n    <el-skeleton style=\"width: 240px\" :loading=\"loading\" animated :count=\"3\">\n      <template #template>\n        <el-skeleton-item\n          variant=\"image\"\n          style=\"width: 400px; height: 267px;\"\n        />\n        <div style=\"padding: 14px;\">\n          <el-skeleton-item variant=\"h3\" style=\"width: 50%;\" />\n          <div\n            style=\"display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;\"\n          >\n            <el-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n            <el-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <el-card\n          :body-style=\"{ padding: '0px', marginBottom: '1px' }\"\n          v-for=\"item in lists\"\n          :key=\"item.name\"\n        >\n          <img :src=\"item.imgUrl\" class=\"image multi-content\" />\n          <div style=\"padding: 14px;\">\n            <span>{{ item.name }}</span>\n            <div class=\"bottom card-header\">\n              <span class=\"time\">{{ currentDate }}</span>\n              <el-button type=\"text\" class=\"button\">Operation button</el-button>\n            </div>\n          </div>\n        </el-card>\n      </template>\n    </el-skeleton>\n  </el-space>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n\n  const dayjs = require('dayjs')\n\n  export default defineComponent({\n    data() {\n      return {\n        loading: true,\n        currentDate: dayjs().format('YYYY-MM-DD'),\n        lists: [],\n      }\n    },\n    mounted() {\n      this.loading = false\n      this.lists = [\n        {\n          imgUrl:\n            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\n          name: 'Deer',\n        },\n        {\n          imgUrl:\n            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',\n          name: 'Horse',\n        },\n        {\n          imgUrl:\n            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',\n          name: 'Mountain Lion',\n        },\n      ]\n    },\n    methods: {\n      setLoading() {\n        this.loading = true\n        setTimeout(() => (this.loading = false), 2000)\n      },\n    },\n  })\n</script>\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Avoiding rendering bouncing. ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Sometimes API responds very quickly, when that happens, the skeleton just gets rendered to the DOM then it needs to switch back to real DOM, that causes the sudden flashy. To avoid such thing, you can use the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "throttle"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute.")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\" alignment=\"flex-start\">\n    <div>\n      <label style=\"margin-right: 16px;\">Switch Loading</label>\n      <el-switch v-model=\"loading\" />\n    </div>\n    <el-skeleton\n      style=\"width: 240px\"\n      :loading=\"loading\"\n      animated\n      :throttle=\"500\"\n    >\n      <template #template>\n        <el-skeleton-item\n          variant=\"image\"\n          style=\"width: 240px; height: 240px;\"\n        />\n        <div style=\"padding: 14px;\">\n          <el-skeleton-item variant=\"h3\" style=\"width: 50%;\" />\n          <div\n            style=\"display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;\"\n          >\n            <el-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n            <el-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <el-card :body-style=\"{ padding: '0px', marginBottom: '1px' }\">\n          <img\n            src=\"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png\"\n            class=\"image\"\n          />\n          <div style=\"padding: 14px;\">\n            <span>Delicious hamberger</span>\n            <div class=\"bottom card-header\">\n              <span class=\"time\">{{ currentDate }}</span>\n              <el-button type=\"text\" class=\"button\">operation button</el-button>\n            </div>\n          </div>\n        </el-card>\n      </template>\n    </el-skeleton>\n  </el-space>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n\n  const dayjs = require('dayjs')\n\n  export default defineComponent({\n    data() {\n      return {\n        loading: false,\n        currentDate: dayjs().format('YYYY-MM-DD'),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Skeleton Attributes ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Acceptable Value</th><th>Default Value</th></tr></thead><tbody><tr><td>animated</td><td>whether showing the animation</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>count</td><td>how many fake items to render to the DOM</td><td>number</td><td>integer</td><td>1</td></tr><tr><td>loading</td><td>whether showing the real DOM</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>rows</td><td>numbers of the row, only useful when no template slot were given</td><td>number</td><td>integer</td><td>3</td></tr><tr><td>throttle</td><td>Rendering delay in millseconds</td><td>number</td><td>integer</td><td>0</td></tr></tbody></table>", 1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Skeleton Item Attributes ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Acceptable Value</th><th>Default Value</th></tr></thead><tbody><tr><td>variant</td><td>The current rendering skeleton type</td><td>Enum(string)</td><td>p / text / h1 / h3 / text / caption / button / image / circle / rect</td><td>text</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Skeleton Slots ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Real rendering DOM")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "template"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Custom rendering skeleton template")])])], -1);

function skeletonvue_type_template_id_25b13354_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", skeletonvue_type_template_id_25b13354_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "skeleton",
    content: "Skeleton",
    href: "#skeleton",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [skeletonvue_type_template_id_25b13354_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#skeleton"
    })]),
    _: 1
  }), skeletonvue_type_template_id_25b13354_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [skeletonvue_type_template_id_25b13354_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), skeletonvue_type_template_id_25b13354_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [skeletonvue_type_template_id_25b13354_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "configurable-rows",
    content: "Configurable Rows",
    href: "#configurable-rows",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [skeletonvue_type_template_id_25b13354_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#configurable-rows"
    })]),
    _: 1
  }), skeletonvue_type_template_id_25b13354_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [skeletonvue_type_template_id_25b13354_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "animation",
    content: "Animation",
    href: "#animation",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#animation"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "customized-template",
    content: "Customized Template",
    href: "#customized-template",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#customized-template"
    })]),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "loading-state",
    content: "Loading state",
    href: "#loading-state",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#loading-state"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "rendering-a-list-of-data",
    content: "Rendering a list of data",
    href: "#rendering-a-list-of-data",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rendering-a-list-of-data"
    })]),
    _: 1
  }), _hoisted_21, _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "avoiding-rendering-bouncing",
    content: "Avoiding rendering bouncing.",
    href: "#avoiding-rendering-bouncing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#avoiding-rendering-bouncing"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "skeleton-attributes",
    content: "Skeleton Attributes",
    href: "#skeleton-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#skeleton-attributes"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "skeleton-item-attributes",
    content: "Skeleton Item Attributes",
    href: "#skeleton-item-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#skeleton-item-attributes"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "skeleton-slots",
    content: "Skeleton Slots",
    href: "#skeleton-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#skeleton-slots"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/skeleton.md?vue&type=template&id=25b13354

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/skeleton.md?vue&type=script&lang=ts

/* harmony default export */ var skeletonvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_skeleton = _resolveComponent("el-skeleton");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_skeleton)]);
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
        const _component_el_skeleton = _resolveComponent("el-skeleton");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_skeleton, {
          rows: 5
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
        const _component_el_skeleton = _resolveComponent("el-skeleton");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_skeleton, {
          rows: 5,
          animated: ""
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
        createElementVNode: _createElementVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "padding": "14px"
        }
      };
      const _hoisted_2 = {
        style: {
          "display": "flex",
          "align-items": "center",
          "justify-items": "space-between"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_skeleton_item = _resolveComponent("el-skeleton-item");

        const _component_el_skeleton = _resolveComponent("el-skeleton");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_skeleton, {
          style: {
            "width": "240px"
          }
        }, {
          template: _withCtx(() => [_createVNode(_component_el_skeleton_item, {
            variant: "image",
            style: {
              "width": "240px",
              "height": "240px"
            }
          }), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "50%"
            }
          }), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_skeleton_item, {
            variant: "text",
            style: {
              "margin-right": "16px"
            }
          }), _createVNode(_component_el_skeleton_item, {
            variant: "text",
            style: {
              "width": "30%"
            }
          })])])]),
          _: 1
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
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("label", {
        style: {
          "margin-right": "16px"
        }
      }, "Switch Loading", -1);

      const _hoisted_2 = {
        style: {
          "padding": "14px"
        }
      };
      const _hoisted_3 = {
        style: {
          "display": "flex",
          "align-items": "center",
          "justify-items": "space-between",
          "margin-top": "16px",
          "height": "16px"
        }
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("img", {
        src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        class: "image"
      }, null, -1);

      const _hoisted_5 = {
        style: {
          "padding": "14px"
        }
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", null, "Delicious hamberger", -1);

      const _hoisted_7 = {
        class: "bottom card-header"
      };
      const _hoisted_8 = {
        class: "time"
      };

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("Operation button");

      function render(_ctx, _cache) {
        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_skeleton_item = _resolveComponent("el-skeleton-item");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_card = _resolveComponent("el-card");

        const _component_el_skeleton = _resolveComponent("el-skeleton");

        const _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_space, {
          direction: "vertical",
          alignment: "flex-start"
        }, {
          default: _withCtx(() => [_createElementVNode("div", null, [_hoisted_1, _createVNode(_component_el_switch, {
            modelValue: _ctx.loading,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.loading = $event)
          }, null, 8, ["modelValue"])]), _createVNode(_component_el_skeleton, {
            style: {
              "width": "240px"
            },
            loading: _ctx.loading,
            animated: ""
          }, {
            template: _withCtx(() => [_createVNode(_component_el_skeleton_item, {
              variant: "image",
              style: {
                "width": "240px",
                "height": "240px"
              }
            }), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_skeleton_item, {
              variant: "h3",
              style: {
                "width": "50%"
              }
            }), _createElementVNode("div", _hoisted_3, [_createVNode(_component_el_skeleton_item, {
              variant: "text",
              style: {
                "margin-right": "16px"
              }
            }), _createVNode(_component_el_skeleton_item, {
              variant: "text",
              style: {
                "width": "30%"
              }
            })])])]),
            default: _withCtx(() => [_createVNode(_component_el_card, {
              "body-style": {
                padding: '0px',
                marginBottom: '1px'
              }
            }, {
              default: _withCtx(() => [_hoisted_4, _createElementVNode("div", _hoisted_5, [_hoisted_6, _createElementVNode("div", _hoisted_7, [_createElementVNode("span", _hoisted_8, _toDisplayString(_ctx.currentDate), 1), _createVNode(_component_el_button, {
                type: "text",
                class: "button"
              }, {
                default: _withCtx(() => [_hoisted_9]),
                _: 1
              })])])]),
              _: 1
            })]),
            _: 1
          }, 8, ["loading"])]),
          _: 1
        })]);
      }

      const {
        defineComponent
      } = vue_esm_browser_prod;

      const dayjs = __webpack_require__(9);

      const democomponentExport = defineComponent({
        data() {
          return {
            loading: true,
            currentDate: dayjs().format('YYYY-MM-DD')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createBlock: _createBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click me to reload");

      const _hoisted_2 = {
        style: {
          "padding": "14px"
        }
      };
      const _hoisted_3 = {
        style: {
          "display": "flex",
          "align-items": "center",
          "justify-items": "space-between",
          "margin-top": "16px",
          "height": "16px"
        }
      };
      const _hoisted_4 = ["src"];
      const _hoisted_5 = {
        style: {
          "padding": "14px"
        }
      };
      const _hoisted_6 = {
        class: "bottom card-header"
      };
      const _hoisted_7 = {
        class: "time"
      };

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("Operation button");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_skeleton_item = _resolveComponent("el-skeleton-item");

        const _component_el_card = _resolveComponent("el-card");

        const _component_el_skeleton = _resolveComponent("el-skeleton");

        const _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_space, {
          direction: "vertical",
          alignment: "flex-start"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            onClick: _ctx.setLoading
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }, 8, ["onClick"]), _createVNode(_component_el_skeleton, {
            style: {
              "width": "240px"
            },
            loading: _ctx.loading,
            animated: "",
            count: 3
          }, {
            template: _withCtx(() => [_createVNode(_component_el_skeleton_item, {
              variant: "image",
              style: {
                "width": "400px",
                "height": "267px"
              }
            }), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_skeleton_item, {
              variant: "h3",
              style: {
                "width": "50%"
              }
            }), _createElementVNode("div", _hoisted_3, [_createVNode(_component_el_skeleton_item, {
              variant: "text",
              style: {
                "margin-right": "16px"
              }
            }), _createVNode(_component_el_skeleton_item, {
              variant: "text",
              style: {
                "width": "30%"
              }
            })])])]),
            default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.lists, item => {
              return _openBlock(), _createBlock(_component_el_card, {
                "body-style": {
                  padding: '0px',
                  marginBottom: '1px'
                },
                key: item.name
              }, {
                default: _withCtx(() => [_createElementVNode("img", {
                  src: item.imgUrl,
                  class: "image multi-content"
                }, null, 8, _hoisted_4), _createElementVNode("div", _hoisted_5, [_createElementVNode("span", null, _toDisplayString(item.name), 1), _createElementVNode("div", _hoisted_6, [_createElementVNode("span", _hoisted_7, _toDisplayString(_ctx.currentDate), 1), _createVNode(_component_el_button, {
                  type: "text",
                  class: "button"
                }, {
                  default: _withCtx(() => [_hoisted_8]),
                  _: 1
                })])])]),
                _: 2
              }, 1024);
            }), 128))]),
            _: 1
          }, 8, ["loading"])]),
          _: 1
        })]);
      }

      const {
        defineComponent
      } = vue_esm_browser_prod;

      const dayjs = __webpack_require__(9);

      const democomponentExport = defineComponent({
        data() {
          return {
            loading: true,
            currentDate: dayjs().format('YYYY-MM-DD'),
            lists: []
          };
        },

        mounted() {
          this.loading = false;
          this.lists = [{
            imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            name: 'Deer'
          }, {
            imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            name: 'Horse'
          }, {
            imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            name: 'Mountain Lion'
          }];
        },

        methods: {
          setLoading() {
            this.loading = true;
            setTimeout(() => this.loading = false, 2000);
          }

        }
      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("label", {
        style: {
          "margin-right": "16px"
        }
      }, "Switch Loading", -1);

      const _hoisted_2 = {
        style: {
          "padding": "14px"
        }
      };
      const _hoisted_3 = {
        style: {
          "display": "flex",
          "align-items": "center",
          "justify-items": "space-between",
          "margin-top": "16px",
          "height": "16px"
        }
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("img", {
        src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        class: "image"
      }, null, -1);

      const _hoisted_5 = {
        style: {
          "padding": "14px"
        }
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", null, "Delicious hamberger", -1);

      const _hoisted_7 = {
        class: "bottom card-header"
      };
      const _hoisted_8 = {
        class: "time"
      };

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("operation button");

      function render(_ctx, _cache) {
        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_skeleton_item = _resolveComponent("el-skeleton-item");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_card = _resolveComponent("el-card");

        const _component_el_skeleton = _resolveComponent("el-skeleton");

        const _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_space, {
          direction: "vertical",
          alignment: "flex-start"
        }, {
          default: _withCtx(() => [_createElementVNode("div", null, [_hoisted_1, _createVNode(_component_el_switch, {
            modelValue: _ctx.loading,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.loading = $event)
          }, null, 8, ["modelValue"])]), _createVNode(_component_el_skeleton, {
            style: {
              "width": "240px"
            },
            loading: _ctx.loading,
            animated: "",
            throttle: 500
          }, {
            template: _withCtx(() => [_createVNode(_component_el_skeleton_item, {
              variant: "image",
              style: {
                "width": "240px",
                "height": "240px"
              }
            }), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_skeleton_item, {
              variant: "h3",
              style: {
                "width": "50%"
              }
            }), _createElementVNode("div", _hoisted_3, [_createVNode(_component_el_skeleton_item, {
              variant: "text",
              style: {
                "margin-right": "16px"
              }
            }), _createVNode(_component_el_skeleton_item, {
              variant: "text",
              style: {
                "width": "30%"
              }
            })])])]),
            default: _withCtx(() => [_createVNode(_component_el_card, {
              "body-style": {
                padding: '0px',
                marginBottom: '1px'
              }
            }, {
              default: _withCtx(() => [_hoisted_4, _createElementVNode("div", _hoisted_5, [_hoisted_6, _createElementVNode("div", _hoisted_7, [_createElementVNode("span", _hoisted_8, _toDisplayString(_ctx.currentDate), 1), _createVNode(_component_el_button, {
                type: "text",
                class: "button"
              }, {
                default: _withCtx(() => [_hoisted_9]),
                _: 1
              })])])]),
              _: 1
            })]),
            _: 1
          }, 8, ["loading"])]),
          _: 1
        })]);
      }

      const {
        defineComponent
      } = vue_esm_browser_prod;

      const dayjs = __webpack_require__(9);

      const democomponentExport = defineComponent({
        data() {
          return {
            loading: false,
            currentDate: dayjs().format('YYYY-MM-DD')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/skeleton.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/skeleton.md



skeletonvue_type_script_lang_ts.render = skeletonvue_type_template_id_25b13354_render

/* harmony default export */ var skeleton = __webpack_exports__["default"] = (skeletonvue_type_script_lang_ts);

/***/ })

}]);