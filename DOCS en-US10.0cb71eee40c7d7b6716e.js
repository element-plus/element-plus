(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/carousel.md?vue&type=template&id=163bb8a9

const carouselvue_type_template_id_163bb8a9_hoisted_1 = {
  class: "content element-doc"
};

const carouselvue_type_template_id_163bb8a9_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Carousel ");

const carouselvue_type_template_id_163bb8a9_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Loop a series of images or texts in a limited space", -1);

const carouselvue_type_template_id_163bb8a9_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const carouselvue_type_template_id_163bb8a9_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Combine "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-carousel"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" with "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", and you'll get a carousel. Content of each slide is completely customizable, and you just need to place it inside "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" tag. By default the carousel switches when mouse hovers over an indicator. Set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", and the carousel switches only when an indicator is clicked.")])], -1);

const carouselvue_type_template_id_163bb8a9_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\"\n      >Switch when indicator is hovered (default)</span\n    >\n    <el-carousel height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Switch when indicator is clicked</span>\n    <el-carousel trigger=\"click\" height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 150px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n + 1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Indicators ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Indicators can be displayed outside the carousel", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute determines where the indicators are located. By default they are inside the carousel, and setting "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "outside"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" moves them outside; setting "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "none"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" hides the indicators.")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-carousel indicator-position=\"outside\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n + 1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Arrows ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can define when arrows are displayed", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute determines when arrows are displayed. By default they appear when mouse hovers over the carousel. Setting "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" or "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" shows/hides the arrows permanently.")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"5000\" arrow=\"always\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n + 1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Card mode ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "When a page is wide enough but has limited height, you can activate card mode for carousels", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Setting "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" activates the card mode. Apart from the appearance, the biggest difference between card mode and common mode is that clicking the slides at both sides directly switches the carousel in card mode.")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"4000\" type=\"card\" height=\"200px\">\n    <el-carousel-item v-for=\"item in 6\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n + 1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("By default, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "horizontal"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Let carousel be displayed in the vertical direction by setting "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-carousel height=\"200px\" direction=\"vertical\" :autoplay=\"false\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n + 1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Carousel Attributes ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>height</td><td>height of the carousel</td><td>string</td><td>—</td><td>—</td></tr><tr><td>initial-index</td><td>index of the initially active slide (starting from 0)</td><td>number</td><td>—</td><td>0</td></tr><tr><td>trigger</td><td>how indicators are triggered</td><td>string</td><td>hover/click</td><td>hover</td></tr><tr><td>autoplay</td><td>whether automatically loop the slides</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>interval</td><td>interval of the auto loop, in milliseconds</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>indicator-position</td><td>position of the indicators</td><td>string</td><td>outside/none</td><td>—</td></tr><tr><td>arrow</td><td>when arrows are shown</td><td>string</td><td>always/hover/never</td><td>hover</td></tr><tr><td>type</td><td>type of the Carousel</td><td>string</td><td>card</td><td>—</td></tr><tr><td>loop</td><td>display the items in loop</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>direction</td><td>display direction</td><td>string</td><td>horizontal/vertical</td><td>horizontal</td></tr><tr><td>pause-on-hover</td><td>pause autoplay when hover</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>", 1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Carousel Events ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "triggers when the active slide switches"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "index of the new active slide, index of the old active slide")])])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Carousel Methods ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>setActiveItem</td><td>manually switch slide</td><td>index of the slide to be switched to, starting from 0; or the <code>name</code> of corresponding <code>el-carousel-item</code></td></tr><tr><td>prev</td><td>switch to the previous slide</td><td>—</td></tr><tr><td>next</td><td>switch to the next slide</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Carousel-Item Attributes ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>name of the item, can be used in <code>setActiveItem</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>text content for the corresponding indicator</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function carouselvue_type_template_id_163bb8a9_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", carouselvue_type_template_id_163bb8a9_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "carousel",
    content: "Carousel",
    href: "#carousel",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [carouselvue_type_template_id_163bb8a9_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#carousel"
    })]),
    _: 1
  }), carouselvue_type_template_id_163bb8a9_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [carouselvue_type_template_id_163bb8a9_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [carouselvue_type_template_id_163bb8a9_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [carouselvue_type_template_id_163bb8a9_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "indicators",
    content: "Indicators",
    href: "#indicators",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#indicators"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "arrows",
    content: "Arrows",
    href: "#arrows",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#arrows"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "card-mode",
    content: "Card mode",
    href: "#card-mode",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#card-mode"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "carousel-attributes",
    content: "Carousel Attributes",
    href: "#carousel-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#carousel-attributes"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "carousel-events",
    content: "Carousel Events",
    href: "#carousel-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#carousel-events"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "carousel-methods",
    content: "Carousel Methods",
    href: "#carousel-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#carousel-methods"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "carousel-item-attributes",
    content: "Carousel-Item Attributes",
    href: "#carousel-item-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#carousel-item-attributes"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/carousel.md?vue&type=template&id=163bb8a9

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/carousel.md?vue&type=script&lang=ts

/* harmony default export */ var carouselvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Switch when indicator is hovered (default)", -1);

      const _hoisted_3 = {
        class: "small"
      };
      const _hoisted_4 = {
        class: "block"
      };

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Switch when indicator is clicked", -1);

      const _hoisted_6 = {
        class: "small"
      };

      function render(_ctx, _cache) {
        const _component_el_carousel_item = _resolveComponent("el-carousel-item");

        const _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_carousel, {
          height: "150px"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", _hoisted_3, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        })]), _createElementVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_carousel, {
          trigger: "click",
          height: "150px"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", _hoisted_6, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_carousel_item = _resolveComponent("el-carousel-item");

        const _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_carousel, {
          "indicator-position": "outside"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", null, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_carousel_item = _resolveComponent("el-carousel-item");

        const _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 5000,
          arrow: "always"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", null, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        const _component_el_carousel_item = _resolveComponent("el-carousel-item");

        const _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 4000,
          type: "card",
          height: "200px"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(6, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", _hoisted_1, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        const _component_el_carousel_item = _resolveComponent("el-carousel-item");

        const _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_carousel, {
          height: "200px",
          direction: "vertical",
          autoplay: false
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(4, item => {
            return _createVNode(_component_el_carousel_item, {
              key: item
            }, {
              default: _withCtx(() => [_createElementVNode("h3", _hoisted_1, _toDisplayString(item), 1)]),
              _: 2
            }, 1024);
          }), 64))]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/carousel.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/carousel.md



carouselvue_type_script_lang_ts.render = carouselvue_type_template_id_163bb8a9_render

/* harmony default export */ var carousel = __webpack_exports__["default"] = (carouselvue_type_script_lang_ts);

/***/ })

}]);