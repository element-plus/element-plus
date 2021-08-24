(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[292],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/carousel.md?vue&type=template&id=733f9c4e

var carouselvue_type_template_id_733f9c4e_hoisted_1 = {
  class: "content element-doc"
};

var carouselvue_type_template_id_733f9c4e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Carousel 走马灯 ");

var carouselvue_type_template_id_733f9c4e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "在有限空间内，循环播放同一类型的图片、文字等内容", -1);

var carouselvue_type_template_id_733f9c4e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("基础用法 ");

var carouselvue_type_template_id_733f9c4e_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "适用广泛的基础用法", -1);

var carouselvue_type_template_id_733f9c4e_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("结合使用"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-carousel"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性为"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("，可以达到点击触发的效果。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">默认 Hover 指示器触发</span>\n    <el-carousel height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Click 指示器触发</span>\n    <el-carousel trigger=\"click\" height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 150px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n     background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n     background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("指示器 ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "可以将指示器的显示位置设置在容器外部", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "outside"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("则会显示在外部；设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "none"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("则不会显示指示器。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel indicator-position=\"outside\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("切换箭头 ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "可以设置切换箭头的显示时机", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("，则会一直显示；设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("，则会一直隐藏。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"5000\" arrow=\"always\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("卡片化 ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("将"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"4000\" type=\"card\" height=\"200px\">\n    <el-carousel-item v-for=\"item in 6\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("方向 ");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("默认情况下，"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 为 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "horizontal"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("。通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 为 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 来让走马灯在垂直方向上显示。")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel height=\"200px\" direction=\"vertical\" :autoplay=\"false\">\n    <el-carousel-item v-for=\"item in 3\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Carousel Attributes ");

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>走马灯的高度</td><td>string</td><td>—</td><td>—</td></tr><tr><td>initial-index</td><td>初始状态激活的幻灯片的索引，从 0 开始</td><td>number</td><td>—</td><td>0</td></tr><tr><td>trigger</td><td>指示器的触发方式</td><td>string</td><td>click</td><td>—</td></tr><tr><td>autoplay</td><td>是否自动切换</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>interval</td><td>自动切换的时间间隔，单位为毫秒</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>indicator-position</td><td>指示器的位置</td><td>string</td><td>outside/none</td><td>—</td></tr><tr><td>arrow</td><td>切换箭头的显示时机</td><td>string</td><td>always/hover/never</td><td>hover</td></tr><tr><td>type</td><td>走马灯的类型</td><td>string</td><td>card</td><td>—</td></tr><tr><td>loop</td><td>是否循环显示</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>direction</td><td>走马灯展示的方向</td><td>string</td><td>horizontal/vertical</td><td>horizontal</td></tr><tr><td>pause-on-hover</td><td>鼠标悬浮时暂停自动切换</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>", 1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Carousel Events ");

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "事件名称"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "回调参数")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "幻灯片切换时触发"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "目前激活的幻灯片的索引，原幻灯片的索引")])])], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Carousel Methods ");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>setActiveItem</td><td>手动切换幻灯片</td><td>需要切换的幻灯片的索引，从 0 开始；或相应 <code>el-carousel-item</code> 的 <code>name</code> 属性值</td></tr><tr><td>prev</td><td>切换至上一张幻灯片</td><td>—</td></tr><tr><td>next</td><td>切换至下一张幻灯片</td><td>—</td></tr></tbody></table>", 1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Carousel-Item Attributes ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>幻灯片的名字，可用作 <code>setActiveItem</code> 的参数</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>该幻灯片所对应指示器的文本</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function carouselvue_type_template_id_733f9c4e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", carouselvue_type_template_id_733f9c4e_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "carousel-zou-ma-deng",
    content: "Carousel 走马灯",
    href: "#carousel-zou-ma-deng",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [carouselvue_type_template_id_733f9c4e_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#carousel-zou-ma-deng"
      })];
    }),
    _: 1
  }), carouselvue_type_template_id_733f9c4e_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [carouselvue_type_template_id_733f9c4e_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ji-chu-yong-fa"
      })];
    }),
    _: 1
  }), carouselvue_type_template_id_733f9c4e_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [carouselvue_type_template_id_733f9c4e_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "zhi-shi-qi",
    content: "指示器",
    href: "#zhi-shi-qi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#zhi-shi-qi"
      })];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "qie-huan-jian-tou",
    content: "切换箭头",
    href: "#qie-huan-jian-tou",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#qie-huan-jian-tou"
      })];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "qia-pian-hua",
    content: "卡片化",
    href: "#qia-pian-hua",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#qia-pian-hua"
      })];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "fang-xiang",
    content: "方向",
    href: "#fang-xiang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#fang-xiang"
      })];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "carousel-attributes",
    content: "Carousel Attributes",
    href: "#carousel-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#carousel-attributes"
      })];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "carousel-events",
    content: "Carousel Events",
    href: "#carousel-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#carousel-events"
      })];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "carousel-methods",
    content: "Carousel Methods",
    href: "#carousel-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#carousel-methods"
      })];
    }),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "carousel-item-attributes",
    content: "Carousel-Item Attributes",
    href: "#carousel-item-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#carousel-item-attributes"
      })];
    }),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/carousel.md?vue&type=template&id=733f9c4e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/carousel.md?vue&type=script&lang=ts


/* harmony default export */ var carouselvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "默认 Hover 指示器触发", -1);

      var _hoisted_3 = {
        class: "small"
      };
      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Click 指示器触发", -1);

      var _hoisted_6 = {
        class: "small"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_carousel, {
          height: "150px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_3, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_carousel, {
          trigger: "click",
          height: "150px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_6, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          "indicator-position": "outside"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", null, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 5000,
          arrow: "always"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", null, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];
      var _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 4000,
          type: "card",
          height: "200px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(6, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_1, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];
      var _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          height: "200px",
          direction: "vertical",
          autoplay: false
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_1, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/carousel.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/carousel.md



carouselvue_type_script_lang_ts.render = carouselvue_type_template_id_733f9c4e_render

/* harmony default export */ var carousel = __webpack_exports__["default"] = (carouselvue_type_script_lang_ts);

/***/ })

}]);