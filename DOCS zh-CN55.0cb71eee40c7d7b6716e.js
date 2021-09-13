(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[340],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/skeleton.md?vue&type=template&id=b1a71eb6

const skeletonvue_type_template_id_b1a71eb6_hoisted_1 = {
  class: "content element-doc"
};

const skeletonvue_type_template_id_b1a71eb6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Skeleton 骨架屏 ");

const skeletonvue_type_template_id_b1a71eb6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。", -1);

const skeletonvue_type_template_id_b1a71eb6_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const skeletonvue_type_template_id_b1a71eb6_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "基础的骨架效果。", -1);

const skeletonvue_type_template_id_b1a71eb6_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-skeleton />\n</template>\n")], -1);

const skeletonvue_type_template_id_b1a71eb6_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("更多参数 ");

const skeletonvue_type_template_id_b1a71eb6_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33% 的段首。", -1);

const skeletonvue_type_template_id_b1a71eb6_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-skeleton :rows=\"5\" />\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("动画效果 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "显示动画效果。", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-skeleton :rows=\"5\" animated />\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义样式 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ElementPlus 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名 Slot 来自己设定模板。", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。 建议在描述模板的时候，尽量靠近真实的 DOM 结构，这样可以避免 DOM 高度差距引起的抖动。", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-skeleton style=\"width: 240px\">\n    <template #template>\n      <el-skeleton-item variant=\"image\" style=\"width: 240px; height: 240px;\" />\n      <div style=\"padding: 14px;\">\n        <el-skeleton-item variant=\"p\" style=\"width: 50%\" />\n        <div\n          style=\"display: flex; align-items: center; justify-items: space-between;\"\n        >\n          <el-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n          <el-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n        </div>\n      </div>\n    </template>\n  </el-skeleton>\n</template>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Loading 状态 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("当 Loading 结束之后，我们往往需要显示真实的 UI，可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的值来控制是否显示真实的 DOM。然后通过 具名 Slot 来设置当 loading 结束之后需要展示的 UI。")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\" alignment=\"flex-start\">\n    <div>\n      <label style=\"margin-right: 16px;\">切换 Loading</label>\n      <el-switch v-model=\"loading\" />\n    </div>\n    <el-skeleton style=\"width: 240px\" :loading=\"loading\" animated>\n      <template #template>\n        <el-skeleton-item\n          variant=\"image\"\n          style=\"width: 240px; height: 240px;\"\n        />\n        <div style=\"padding: 14px;\">\n          <el-skeleton-item variant=\"h3\" style=\"width: 50%;\" />\n          <div\n            style=\"display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;\"\n          >\n            <el-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n            <el-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <el-card :body-style=\"{ padding: '0px', marginBottom: '1px' }\">\n          <img\n            src=\"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png\"\n            class=\"image\"\n          />\n          <div style=\"padding: 14px;\">\n            <span>好吃的汉堡</span>\n            <div class=\"bottom card-header\">\n              <span class=\"time\">{{ currentDate }}</span>\n              <el-button type=\"text\" class=\"button\">操作按钮</el-button>\n            </div>\n          </div>\n        </el-card>\n      </template>\n    </el-skeleton>\n  </el-space>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n\n  const dayjs = require('dayjs')\n\n  export default defineComponent({\n    data() {\n      return {\n        loading: true,\n        currentDate: dayjs().format('YYYY-MM-DD'),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("渲染多条数据 ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("大多时候, 骨架屏都被用来渲染列表, 当我们需要在从服务器获取数据的时候来渲染一个假的 UI。利用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "count"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 这个属性就能控制渲染多少条假的数据在页面上")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("请注意, 请尽可能的将 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "count"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的大小保持在最小状态, 即使是假的 UI, DOM 元素多了之后, 照样会引起性能问题, 并且在骨架屏销毁时所消耗的时间也会更长(相对的)。")])], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\" alignment=\"flex-start\">\n    <el-button @click=\"setLoading\">点我重新加载</el-button>\n    <el-skeleton style=\"width: 240px\" :loading=\"loading\" animated :count=\"3\">\n      <template #template>\n        <el-skeleton-item\n          variant=\"image\"\n          style=\"width: 400px; height: 267px;\"\n        />\n        <div style=\"padding: 14px;\">\n          <el-skeleton-item variant=\"h3\" style=\"width: 50%;\" />\n          <div\n            style=\"display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;\"\n          >\n            <el-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n            <el-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <el-card\n          :body-style=\"{ padding: '0px', marginBottom: '1px' }\"\n          v-for=\"item in lists\"\n          :key=\"item.name\"\n        >\n          <img :src=\"item.imgUrl\" class=\"image multi-content\" />\n          <div style=\"padding: 14px;\">\n            <span>{{ item.name }}</span>\n            <div class=\"bottom card-header\">\n              <span class=\"time\">{{ currentDate }}</span>\n              <el-button type=\"text\" class=\"button\">操作按钮</el-button>\n            </div>\n          </div>\n        </el-card>\n      </template>\n    </el-skeleton>\n  </el-space>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n\n  const dayjs = require('dayjs')\n\n  export default defineComponent({\n    data() {\n      return {\n        loading: true,\n        currentDate: dayjs().format('YYYY-MM-DD'),\n        lists: [],\n      }\n    },\n    mounted() {\n      this.loading = false\n      this.lists = [\n        {\n          imgUrl:\n            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\n          name: '鹿',\n        },\n        {\n          imgUrl:\n            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',\n          name: '马',\n        },\n        {\n          imgUrl:\n            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',\n          name: '山狮',\n        },\n      ]\n    },\n    methods: {\n      setLoading() {\n        this.loading = true\n        setTimeout(() => (this.loading = false), 2000)\n      },\n    },\n  })\n</script>\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("防止渲染抖动 ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪，此时为了避免这种情况，就需要通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "throttle"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性来避免这个问题。")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\" alignment=\"flex-start\">\n    <div>\n      <label style=\"margin-right: 16px;\">切换 Loading</label>\n      <el-switch v-model=\"loading\" />\n    </div>\n    <el-skeleton\n      style=\"width: 240px\"\n      :loading=\"loading\"\n      animated\n      :throttle=\"500\"\n    >\n      <template #template>\n        <el-skeleton-item\n          variant=\"image\"\n          style=\"width: 240px; height: 240px;\"\n        />\n        <div style=\"padding: 14px;\">\n          <el-skeleton-item variant=\"h3\" style=\"width: 50%;\" />\n          <div\n            style=\"display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;\"\n          >\n            <el-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n            <el-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <el-card :body-style=\"{ padding: '0px', marginBottom: '1px' }\">\n          <img\n            src=\"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png\"\n            class=\"image\"\n          />\n          <div style=\"padding: 14px;\">\n            <span>好吃的汉堡</span>\n            <div class=\"bottom card-header\">\n              <span class=\"time\">{{ currentDate }}</span>\n              <el-button type=\"text\" class=\"button\">操作按钮</el-button>\n            </div>\n          </div>\n        </el-card>\n      </template>\n    </el-skeleton>\n  </el-space>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n\n  const dayjs = require('dayjs')\n\n  export default defineComponent({\n    data() {\n      return {\n        loading: false,\n        currentDate: dayjs().format('YYYY-MM-DD'),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Skeleton Attributes ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>animated</td><td>是否使用动画</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>count</td><td>渲染多少个 template, 建议使用尽可能小的数字</td><td>number</td><td>integer</td><td>1</td></tr><tr><td>loading</td><td>是否显示真实的 DOM 结构</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>rows</td><td>骨架屏段落数量</td><td>number</td><td>正整数</td><td>3</td></tr><tr><td>throttle</td><td>延迟占位 DOM 渲染的时间, 单位是毫秒</td><td>number</td><td>正整数</td><td>0</td></tr></tbody></table>", 1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Skeleton Item Attributes ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>variant</td><td>当前显示的占位元素的样式</td><td>Enum(string)</td><td>p / text / h1 / h3 / text / caption / button / image / circle / rect</td><td>text</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Skeleton Slots ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "用来展示真实 UI")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "template"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "用来展示自定义占位符")])])], -1);

function skeletonvue_type_template_id_b1a71eb6_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", skeletonvue_type_template_id_b1a71eb6_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "skeleton-gu-jia-ping",
    content: "Skeleton 骨架屏",
    href: "#skeleton-gu-jia-ping",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [skeletonvue_type_template_id_b1a71eb6_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#skeleton-gu-jia-ping"
    })]),
    _: 1
  }), skeletonvue_type_template_id_b1a71eb6_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [skeletonvue_type_template_id_b1a71eb6_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), skeletonvue_type_template_id_b1a71eb6_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [skeletonvue_type_template_id_b1a71eb6_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "geng-duo-can-shu",
    content: "更多参数",
    href: "#geng-duo-can-shu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [skeletonvue_type_template_id_b1a71eb6_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#geng-duo-can-shu"
    })]),
    _: 1
  }), skeletonvue_type_template_id_b1a71eb6_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [skeletonvue_type_template_id_b1a71eb6_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dong-hua-xiao-guo",
    content: "动画效果",
    href: "#dong-hua-xiao-guo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dong-hua-xiao-guo"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-yang-shi",
    content: "自定义样式",
    href: "#zi-ding-yi-yang-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-yang-shi"
    })]),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "loading-zhuang-tai",
    content: "Loading 状态",
    href: "#loading-zhuang-tai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#loading-zhuang-tai"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xuan-ran-duo-tiao-shu-ju",
    content: "渲染多条数据",
    href: "#xuan-ran-duo-tiao-shu-ju",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xuan-ran-duo-tiao-shu-ju"
    })]),
    _: 1
  }), _hoisted_21, _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fang-zhi-xuan-ran-dou-dong",
    content: "防止渲染抖动",
    href: "#fang-zhi-xuan-ran-dou-dong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-zhi-xuan-ran-dou-dong"
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
// CONCATENATED MODULE: ./website/docs/zh-CN/skeleton.md?vue&type=template&id=b1a71eb6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/skeleton.md?vue&type=script&lang=ts

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
      }, "切换 Loading", -1);

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

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", null, "好吃的汉堡", -1);

      const _hoisted_7 = {
        class: "bottom card-header"
      };
      const _hoisted_8 = {
        class: "time"
      };

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("操作按钮");

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("点我重新加载");

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

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("操作按钮");

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
            name: '鹿'
          }, {
            imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            name: '马'
          }, {
            imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            name: '山狮'
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
      }, "切换 Loading", -1);

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

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", null, "好吃的汉堡", -1);

      const _hoisted_7 = {
        class: "bottom card-header"
      };
      const _hoisted_8 = {
        class: "time"
      };

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("操作按钮");

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
// CONCATENATED MODULE: ./website/docs/zh-CN/skeleton.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/skeleton.md



skeletonvue_type_script_lang_ts.render = skeletonvue_type_template_id_b1a71eb6_render

/* harmony default export */ var skeleton = __webpack_exports__["default"] = (skeletonvue_type_script_lang_ts);

/***/ })

}]);