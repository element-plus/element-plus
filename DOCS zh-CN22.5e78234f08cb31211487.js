(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[211],{

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/dropdown.md?vue&type=template&id=72609c66

var dropdownvue_type_template_id_72609c66_hoisted_1 = {
  class: "content element-doc"
};

var dropdownvue_type_template_id_72609c66_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "dropdown-xia-la-cai-dan"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dropdown-xia-la-cai-dan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Dropdown 下拉菜单")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "将动作或菜单折叠到下拉菜单中。", -1);

var dropdownvue_type_template_id_72609c66_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "移动到下拉菜单上，展开更多操作。", -1);

var dropdownvue_type_template_id_72609c66_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过组件"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("来设置下拉触发的元素以及需要通过具名"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dropdown"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 来设置下拉菜单。默认情况下，下拉按钮只要"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("即可，无需点击也会显示下拉菜单。")])], -1);

var dropdownvue_type_template_id_72609c66_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown>\n  <span class=\"el-dropdown-link\">\n    下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item disabled>双皮奶</el-dropdown-item>\n      <el-dropdown-item divided>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "chu-fa-dui-xiang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chu-fa-dui-xiang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 触发对象")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可使用按钮触发下拉菜单。", -1);

var dropdownvue_type_template_id_72609c66_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("即可。")])], -1);

var dropdownvue_type_template_id_72609c66_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown>\n  <el-button type=\"primary\">\n    更多菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </el-button>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n<el-dropdown split-button type=\"primary\" @click=\"handleClick\">\n  更多菜单\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown {\n    vertical-align: top;\n  }\n  .el-dropdown + .el-dropdown {\n    margin-left: 15px;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        alert('button click');\n      }\n    }\n  }\n</script>\n\n")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "chu-fa-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chu-fa-fang-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 触发方式")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可以配置 click 激活或者 hover 激活。", -1);

var dropdownvue_type_template_id_72609c66_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("在"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性设置为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("即可。")])], -1);

var dropdownvue_type_template_id_72609c66_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"block-col-2\">\n  <el-col :span=\"12\">\n    <span class=\"demonstration\">hover 激活</span>\n    <el-dropdown>\n      <span class=\"el-dropdown-link\">\n        下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">黄金糕</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">狮子头</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">螺蛳粉</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">双皮奶</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">蚵仔煎</el-dropdown-item>\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"12\">\n    <span class=\"demonstration\">click 激活</span>\n    <el-dropdown trigger=\"click\">\n      <span class=\"el-dropdown-link\">\n        下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">黄金糕</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">狮子头</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">螺蛳粉</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">双皮奶</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">蚵仔煎</el-dropdown-item>\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n</el-row>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n  .demonstration {\n    display: block;\n    color: #8492a6;\n    font-size: 14px;\n    margin-bottom: 20px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "cai-dan-yin-cang-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cai-dan-yin-cang-fang-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 菜单隐藏方式")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可以"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来配置。")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("下拉菜单默认在点击菜单项后会被隐藏，将"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性默认为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可以关闭此功能。")])], -1);

var dropdownvue_type_template_id_72609c66_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown :hide-on-click=\"false\">\n  <span class=\"el-dropdown-link\">\n    下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item disabled>双皮奶</el-dropdown-item>\n      <el-dropdown-item divided>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zhi-ling-shi-jian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhi-ling-shi-jian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 指令事件")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作", -1);

var dropdownvue_type_template_id_72609c66_hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown @command=\"handleCommand\">\n  <span class=\"el-dropdown-link\">\n    下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item command=\"a\">黄金糕</el-dropdown-item>\n      <el-dropdown-item command=\"b\">狮子头</el-dropdown-item>\n      <el-dropdown-item command=\"c\">螺蛳粉</el-dropdown-item>\n      <el-dropdown-item command=\"d\" disabled>双皮奶</el-dropdown-item>\n      <el-dropdown-item command=\"e\" divided>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleCommand(command) {\n        this.$message('click on item ' + command);\n      }\n    }\n  }\n</script>\n")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "bu-tong-chi-cun"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-tong-chi-cun"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 不同尺寸")], -1);

var dropdownvue_type_template_id_72609c66_hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("额外的尺寸："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，通过设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来配置它们。")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown split-button type=\"primary\">\n  默认尺寸\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"medium\" split-button type=\"primary\">\n  中等尺寸\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"small\" split-button type=\"primary\">\n  小型尺寸\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"mini\" split-button type=\"primary\">\n  超小尺寸\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"dropdown-attributes\"><a class=\"header-anchor\" href=\"#dropdown-attributes\">¶</a> Dropdown Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>菜单按钮类型，同 Button 组件(只在<code>split-button</code>为 true 的情况下有效)</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>菜单尺寸，在<code>split-button</code>为 true 的情况下也对触发按钮生效</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>split-button</td><td>下拉触发元素呈现为按钮组</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>菜单弹出位置</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end</td><td>bottom-end</td></tr><tr><td>trigger</td><td>触发下拉的行为</td><td>string</td><td>hover, click</td><td>hover</td></tr><tr><td>hide-on-click</td><td>是否在点击菜单项后隐藏菜单</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-timeout</td><td>展开下拉菜单的延时（仅在 trigger 为 hover 时有效）</td><td>number</td><td>—</td><td>250</td></tr><tr><td>hide-timeout</td><td>收起下拉菜单的延时（仅在 trigger 为 hover 时有效）</td><td>number</td><td>—</td><td>150</td></tr><tr><td>tabindex</td><td>Dropdown 组件的 <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a></td><td>number</td><td>—</td><td>0</td></tr></tbody></table><h3 id=\"dropdown-slots\"><a class=\"header-anchor\" href=\"#dropdown-slots\">¶</a> Dropdown Slots</h3><table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件</td></tr><tr><td>dropdown</td><td>下拉列表，通常是 <code>&lt;el-dropdown-menu&gt;</code> 组件</td></tr></tbody></table><h3 id=\"dropdown-events\"><a class=\"header-anchor\" href=\"#dropdown-events\">¶</a> Dropdown Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td><code>split-button</code> 为 true 时，点击左侧按钮的回调</td><td>—</td></tr><tr><td>command</td><td>点击菜单项触发的事件回调</td><td>dropdown-item 的指令</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr></tbody></table><h3 id=\"dropdown-menu-item-attributes\"><a class=\"header-anchor\" href=\"#dropdown-menu-item-attributes\">¶</a> Dropdown Menu Item Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>command</td><td>指令</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divided</td><td>显示分割线</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>图标类名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 8);

function dropdownvue_type_template_id_72609c66_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", dropdownvue_type_template_id_72609c66_hoisted_1, [dropdownvue_type_template_id_72609c66_hoisted_2, dropdownvue_type_template_id_72609c66_hoisted_3, dropdownvue_type_template_id_72609c66_hoisted_4, dropdownvue_type_template_id_72609c66_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_72609c66_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_72609c66_hoisted_6];
    }),
    _: 1
  }), dropdownvue_type_template_id_72609c66_hoisted_8, dropdownvue_type_template_id_72609c66_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_72609c66_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_72609c66_hoisted_10];
    }),
    _: 1
  }), dropdownvue_type_template_id_72609c66_hoisted_12, dropdownvue_type_template_id_72609c66_hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_72609c66_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_72609c66_hoisted_14];
    }),
    _: 1
  }), dropdownvue_type_template_id_72609c66_hoisted_16, dropdownvue_type_template_id_72609c66_hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_72609c66_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_72609c66_hoisted_18];
    }),
    _: 1
  }), dropdownvue_type_template_id_72609c66_hoisted_20, dropdownvue_type_template_id_72609c66_hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_72609c66_hoisted_22];
    }),
    _: 1
  }), dropdownvue_type_template_id_72609c66_hoisted_23, dropdownvue_type_template_id_72609c66_hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/dropdown.md?vue&type=template&id=72609c66

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/dropdown.md?vue&type=script&lang=ts


/* harmony default export */ var dropdownvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 更多菜单");

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode(" 更多菜单 ");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary",
          onClick: _ctx.handleClick
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_11];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_13];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_8];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          handleClick: function handleClick() {
            alert('button click');
          }
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "hover 激活", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "click 激活", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "block-col-2"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_dropdown, null, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_3];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_4];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_5];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_6];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _createVNode(_component_el_dropdown, {
                  trigger: "click"
                }, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_10];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_11];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_12];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_13];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_14];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          "hide-on-click": false
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          onCommand: _ctx.handleCommand
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, {
                  command: "a"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "b"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "c"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "d",
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "e",
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onCommand"])]);
      }

      var democomponentExport = {
        methods: {
          handleCommand: function handleCommand(command) {
            this.$message('click on item ' + command);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 默认尺寸 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode(" 中等尺寸 ");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode(" 小型尺寸 ");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode(" 超小尺寸 ");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_23 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_24 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "medium",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_8];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_11];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_7];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "small",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_14];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_13];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "mini",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_20];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_21];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_22];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_23];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_24];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_19];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/dropdown.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/dropdown.md



dropdownvue_type_script_lang_ts.render = dropdownvue_type_template_id_72609c66_render

/* harmony default export */ var dropdown = __webpack_exports__["default"] = (dropdownvue_type_script_lang_ts);

/***/ })

}]);