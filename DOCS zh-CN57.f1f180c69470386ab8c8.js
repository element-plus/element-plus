(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[343],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/space.md?vue&type=template&id=a6cac5ae

var spacevue_type_template_id_a6cac5ae_hoisted_1 = {
  class: "content element-doc"
};

var spacevue_type_template_id_a6cac5ae_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Space 间距 ");

var spacevue_type_template_id_a6cac5ae_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("虽然我们拥有 ");

var spacevue_type_template_id_a6cac5ae_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Divider 组件");

var spacevue_type_template_id_a6cac5ae_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", 但很多时候我们需要不是一个被 ");

var spacevue_type_template_id_a6cac5ae_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Divider 组件");

var spacevue_type_template_id_a6cac5ae_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 分割开的页面结构, 因此我们会重复的使用很多的 ");

var spacevue_type_template_id_a6cac5ae_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Divider 组件");

var spacevue_type_template_id_a6cac5ae_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", 这在我们的开发效率上造成了一定的困扰, ");

var spacevue_type_template_id_a6cac5ae_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "间距组件", -1);

var spacevue_type_template_id_a6cac5ae_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("就是为了解决这种困扰应运而生的.");

var spacevue_type_template_id_a6cac5ae_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("基础用法 ");

var spacevue_type_template_id_a6cac5ae_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "最基础的用法, 通过这个组件来给组件之间提供统一的间距", -1);

var spacevue_type_template_id_a6cac5ae_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "通过间距组件来给多个组件之间提供间距")], -1);

var spacevue_type_template_id_a6cac5ae_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space wrap>\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("垂直布局 ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 来控制布局的方式, 背后实际上是利用了 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "flex-direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 来控制.")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "当然也提供垂直布局的方式")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 2\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("控制间距的大小 ");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>通过调整 <code>size</code> 的值来控制间距的大小</p><p>可供选择的内建的值有 <code>mini</code>, <code>small</code>, <code>medium</code>, <code>large</code>, 分别对应 <code>4px</code>, <code>8px</code>, <code>12px</code>, <code>16px</code>. 默认的间距大小为 <code>small</code> 也就是 <code>8px</code></p><p>您也可以通过自定义的 <code>size</code> 来控制大小，详见下一部分</p>", 3);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性控制大小")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\" alignment=\"start\" :size=\"30\">\n  <el-radio-group v-model=\"size\">\n    <el-radio :label=\"'mini'\">迷你</el-radio>\n    <el-radio :label=\"'small'\">小</el-radio>\n    <el-radio :label=\"'medium'\">中等</el-radio>\n    <el-radio :label=\"'large'\">大号</el-radio>\n  </el-radio-group>\n\n  <el-space wrap :size=\"size\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n  </el-space>\n</template>\n\n<script>\n\nexport default {\n\n  data() {\n    return {\n      size: 'mini',\n    }\n  }\n}\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("自定义 Size ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "很多时候, 内建的大小不满足设计师的要求, 我们可以通过传入自己定义的大小 (数字类型) 来设置", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-slider v-model=\"size\" />\n  <el-space wrap :size=\"size\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 2\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n\n<script>\nexport default {\n\n  data() {\n    return {\n      size: 20,\n    }\n  }\n}\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("不要与使用依赖父元素百分比宽度 (高度) 的元素一起使用, 例如 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElSlider"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", 这样会造成光标不同步")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("自动换行 ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("在"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "水平 (horizontal)"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 模式下,通过控制 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "wrap"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "(布尔类型)"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 来控制是否自动换行")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("利用 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "wrap"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 控制换行")])], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-space wrap>\n  <div v-for=\"i in 20\" :key=\"i\">\n    <el-button type=\"text\">\n      文字按钮\n    </el-button>\n  </div>\n</el-space>\n")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("行间分隔符 ");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "有时候, 仅仅在行间加空白, 并不能满足我们的日常需求, 此时分隔符 (spacer) 就可以发挥非常好的作用了.", -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("字符串 或 数字类型的分隔符 ");

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n <el-space :size=\"size\" spacer=\"|\">\n    <div v-for=\"i in 2\" :key=\"i\">\n      <el-button>\n        button {{ i }}\n      </el-button>\n    </div>\n  </el-space>\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return {\n      size: 10,\n    }\n  },\n}\n</script>\n")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("分隔符还可以是 VNode 类型 ");

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n <el-space :size=\"size\" :spacer=\"spacer\">\n    <div v-for=\"i in 2\" :key=\"i\">\n      <el-button>\n        button {{ i }}\n      </el-button>\n    </div>\n  </el-space>\n</template>\n\n<script>\nimport { h, resolveComponent } from 'vue'\nimport { ElDivider } from 'element-plus'\nexport default {\n  data() {\n    return {\n      size: 10,\n      spacer: h(ElDivider, { direction: 'vertical' }),\n    }\n  },\n}\n</script>\n\n")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("对齐方式 ");

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("设置该值可以调整所有子节点在容器内的对齐方式, 可设置的值与 ");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("align-items");

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 一致");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "用 alignment 来控制对齐")], -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space>\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space alignment=\"flex-start\">\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space alignment=\"flex-end\">\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n</template>\n\n")], -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("自动填充容器 ");

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fill"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "(布尔类型)"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 参数可以控制子节点是否自动填充容器")], -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("下面的例子中，当设置为 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fill"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 时，子节点的宽度会自动适配容器的宽度")], -1);

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "用 fill 让子节点自动填充容器")], -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n  <div style=\"margin-bottom:15px\">\n    fill:  <el-switch v-model=\"fill\"></el-switch>\n  </div>\n  <el-space :fill=\"fill\" wrap>\n    <el-card class=\"box-card\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return { fill: true }\n  },\n}\n</script>\n")], -1);

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("也可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fillRatio"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 参数，自定义填充的比例，默认值为 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "100"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("，代表基于父容器宽度的 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "100%"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 进行填充")], -1);

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "需要注意的是，水平布局和垂直布局的表现形式稍有不同，具体的效果可以查看下面的例子", -1);

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "用 fillRatio 自定义填充比例")], -1);

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n  <div style=\"margin-bottom: 15px\">\n    direction:\n    <el-radio v-model=\"direction\" label=\"horizontal\">horizontal</el-radio>\n    <el-radio v-model=\"direction\" label=\"vertical\">vertical</el-radio>\n  </div>\n  <div style=\"margin-bottom: 15px\">\n    fillRatio:<el-slider v-model=\"fillRatio\"></el-slider>\n  </div>\n  <el-space fill wrap :fillRatio=\"fillRatio\" :direction=\"direction\" style=\" width: 100%\">\n    <el-card class=\"box-card\" v-for=\"i in 5\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return { direction: 'horizontal', fillRatio: 30 }\n  },\n}\n</script>\n")], -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Space Attributes ");

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "参数"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "可选值"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "默认值")])], -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "alignment", -1);

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "对齐的方式", -1);

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string", -1);

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("align-items");

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "'center'", -1);

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "class"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "类名"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / Array<Object | String> / Object"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "排列的方向"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "vertical/horizontal"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "horizontal")], -1);

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "prefixCls"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "给 space-items 的类名前缀"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "el-space"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "style"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "额外样式"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / Array<Object | String> / Object"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "spacer"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "间隔符"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / number / VNode"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "间隔大小"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / number / [number, number]"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "'small'")], -1);

var _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "wrap"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "设置是否自动折行"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true / false"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "fill"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "子元素是否填充父容器"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true / false"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "fillRatio"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "填充父容器的比例"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "100")], -1);

var _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Space Slot ");

var _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "需要添加间隔的元素")])])], -1);

function spacevue_type_template_id_a6cac5ae_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo7");

  var _component_element_demo8 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo8");

  var _component_element_demo9 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo9");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", spacevue_type_template_id_a6cac5ae_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "space-jian-ju",
    content: "Space 间距",
    href: "#space-jian-ju",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_a6cac5ae_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#space-jian-ju"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [spacevue_type_template_id_a6cac5ae_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "#/zh-CN/component/divider"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_a6cac5ae_hoisted_4];
    }),
    _: 1
  }), spacevue_type_template_id_a6cac5ae_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "#/zh-CN/component/divider"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_a6cac5ae_hoisted_6];
    }),
    _: 1
  }), spacevue_type_template_id_a6cac5ae_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "#/zh-CN/component/divider"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_a6cac5ae_hoisted_8];
    }),
    _: 1
  }), spacevue_type_template_id_a6cac5ae_hoisted_9, spacevue_type_template_id_a6cac5ae_hoisted_10, spacevue_type_template_id_a6cac5ae_hoisted_11]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_a6cac5ae_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ji-chu-yong-fa"
      })];
    }),
    _: 1
  }), spacevue_type_template_id_a6cac5ae_hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_a6cac5ae_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_a6cac5ae_hoisted_14];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "chui-zhi-bu-ju",
    content: "垂直布局",
    href: "#chui-zhi-bu-ju",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#chui-zhi-bu-ju"
      })];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "kong-zhi-jian-ju-de-da-xiao",
    content: "控制间距的大小",
    href: "#kong-zhi-jian-ju-de-da-xiao",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#kong-zhi-jian-ju-de-da-xiao"
      })];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "zi-ding-yi-size",
    content: "自定义 Size",
    href: "#zi-ding-yi-size",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#zi-ding-yi-size"
      })];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "zi-dong-huan-xing",
    content: "自动换行",
    href: "#zi-dong-huan-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#zi-dong-huan-xing"
      })];
    }),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "xing-jian-fen-ge-fu",
    content: "行间分隔符",
    href: "#xing-jian-fen-ge-fu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#xing-jian-fen-ge-fu"
      })];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "zi-fu-chuan-huo-shu-zi-lei-xing-de-fen-ge-fu",
    content: "字符串 或 数字类型的分隔符",
    href: "#zi-fu-chuan-huo-shu-zi-lei-xing-de-fen-ge-fu",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#zi-fu-chuan-huo-shu-zi-lei-xing-de-fen-ge-fu"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "fen-ge-fu-huan-ke-yi-shi-vnode-lei-xing",
    content: "分隔符还可以是 VNode 类型",
    href: "#fen-ge-fu-huan-ke-yi-shi-vnode-lei-xing",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#fen-ge-fu-huan-ke-yi-shi-vnode-lei-xing"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_39];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "dui-qi-fang-shi",
    content: "对齐方式",
    href: "#dui-qi-fang-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_40, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#dui-qi-fang-shi"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_41, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_42];
    }),
    _: 1
  }), _hoisted_43]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_45];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_44];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "zi-dong-tian-chong-rong-qi",
    content: "自动填充容器",
    href: "#zi-dong-tian-chong-rong-qi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_46, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#zi-dong-tian-chong-rong-qi"
      })];
    }),
    _: 1
  }), _hoisted_47, _hoisted_48, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_50];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_49];
    }),
    _: 1
  }), _hoisted_51, _hoisted_52, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_54];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_53];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "space-attributes",
    content: "Space Attributes",
    href: "#space-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_55, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#space-attributes"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_56, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_57, _hoisted_58, _hoisted_59, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_60];
    }),
    _: 1
  })]), _hoisted_61]), _hoisted_62, _hoisted_63, _hoisted_64, _hoisted_65, _hoisted_66, _hoisted_67, _hoisted_68, _hoisted_69, _hoisted_70])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "space-slot",
    content: "Space Slot",
    href: "#space-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_71, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#space-slot"
      })];
    }),
    _: 1
  }), _hoisted_72, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/space.md?vue&type=template&id=a6cac5ae

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/space.md?vue&type=script&lang=ts


/* harmony default export */ var spacevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */];
      var _hoisted_1 = {
        class: "card-header"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "Card name", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Operation button");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        var _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_space, {
          wrap: ""
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
              return _createVNode(_component_el_card, {
                class: "box-card",
                style: {
                  "width": "250px"
                },
                key: i
              }, {
                header: _withCtx(function () {
                  return [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_button, {
                    class: "button",
                    type: "text"
                  }, {
                    default: _withCtx(function () {
                      return [_hoisted_3];
                    }),
                    _: 1
                  })])];
                }),
                default: _withCtx(function () {
                  return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
                    return _createVNode("div", {
                      key: o,
                      class: "text item"
                    }, _toDisplayString('List item ' + o), 1);
                  }), 64))];
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
    "element-demo1": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */];
      var _hoisted_1 = {
        class: "card-header"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "Card name", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Operation button");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        var _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_space, {
          direction: "vertical"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(2, function (i) {
              return _createVNode(_component_el_card, {
                class: "box-card",
                style: {
                  "width": "250px"
                },
                key: i
              }, {
                header: _withCtx(function () {
                  return [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_button, {
                    class: "button",
                    type: "text"
                  }, {
                    default: _withCtx(function () {
                      return [_hoisted_3];
                    }),
                    _: 1
                  })])];
                }),
                default: _withCtx(function () {
                  return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
                    return _createVNode("div", {
                      key: o,
                      class: "text item"
                    }, _toDisplayString('List item ' + o), 1);
                  }), 64))];
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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("迷你");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("小");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("中等");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("大号");

      var _hoisted_5 = {
        class: "card-header"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", null, "Card name", -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Operation button");

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        var _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_space, {
          direction: "vertical",
          alignment: "start",
          size: 30
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_group, {
              modelValue: _ctx.size,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                return _ctx.size = $event;
              })
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_radio, {
                  label: 'mini'
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }), _createVNode(_component_el_radio, {
                  label: 'small'
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_radio, {
                  label: 'medium'
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_radio, {
                  label: 'large'
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["modelValue"]), _createVNode(_component_el_space, {
              wrap: "",
              size: _ctx.size
            }, {
              default: _withCtx(function () {
                return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
                  return _createVNode(_component_el_card, {
                    class: "box-card",
                    style: {
                      "width": "250px"
                    },
                    key: i
                  }, {
                    header: _withCtx(function () {
                      return [_createVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_button, {
                        class: "button",
                        type: "text"
                      }, {
                        default: _withCtx(function () {
                          return [_hoisted_7];
                        }),
                        _: 1
                      })])];
                    }),
                    default: _withCtx(function () {
                      return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
                        return _createVNode("div", {
                          key: o,
                          class: "text item"
                        }, _toDisplayString('List item ' + o), 1);
                      }), 64))];
                    }),
                    _: 2
                  }, 1024);
                }), 64))];
              }),
              _: 1
            }, 8, ["size"])];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            size: 'mini'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */];
      var _hoisted_1 = {
        class: "card-header"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "Card name", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Operation button");

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        var _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_slider, {
          modelValue: _ctx.size,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.size = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_space, {
          wrap: "",
          size: _ctx.size
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(2, function (i) {
              return _createVNode(_component_el_card, {
                class: "box-card",
                style: {
                  "width": "250px"
                },
                key: i
              }, {
                header: _withCtx(function () {
                  return [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_button, {
                    class: "button",
                    type: "text"
                  }, {
                    default: _withCtx(function () {
                      return [_hoisted_3];
                    }),
                    _: 1
                  })])];
                }),
                default: _withCtx(function () {
                  return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
                    return _createVNode("div", {
                      key: o,
                      class: "text item"
                    }, _toDisplayString('List item ' + o), 1);
                  }), 64))];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        }, 8, ["size"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            size: 20
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 文字按钮 ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_space, {
          wrap: ""
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(20, function (i) {
              return _createVNode("div", {
                key: i
              }, [_createVNode(_component_el_button, {
                type: "text"
              }, {
                default: _withCtx(function () {
                  return [_hoisted_1];
                }),
                _: 1
              })]);
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
    "element-demo5": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_space, {
          size: _ctx.size,
          spacer: "|"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(2, function (i) {
              return _createVNode("div", {
                key: i
              }, [_createVNode(_component_el_button, null, {
                default: _withCtx(function () {
                  return [_createTextVNode(" button " + _toDisplayString(i), 1)];
                }),
                _: 2
              }, 1024)]);
            }), 64))];
          }),
          _: 1
        }, 8, ["size"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            size: 10
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_space, {
          size: _ctx.size,
          spacer: _ctx.spacer
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(2, function (i) {
              return _createVNode("div", {
                key: i
              }, [_createVNode(_component_el_button, null, {
                default: _withCtx(function () {
                  return [_createTextVNode(" button " + _toDisplayString(i), 1)];
                }),
                _: 2
              }, 1024)]);
            }), 64))];
          }),
          _: 1
        }, 8, ["size", "spacer"])]);
      }

      var h = vue_esm_browser_prod["t" /* h */],
          resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */];

      var _require = __webpack_require__(114),
          ElDivider = _require.ElDivider;

      var democomponentExport = {
        data: function data() {
          return {
            size: 10,
            spacer: h(ElDivider, {
              direction: 'vertical'
            })
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "width": "240px",
          "margin-bottom": "20px",
          "padding": "8px",
          "border": "1px solid #ccc"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" string ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" button ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode(" header ");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode(" body ");

      var _hoisted_6 = {
        style: {
          "width": "240px",
          "margin-bottom": "20px",
          "padding": "8px",
          "border": "1px solid #ccc"
        }
      };

      var _hoisted_7 = /*#__PURE__*/_createTextVNode(" string ");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode(" button ");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode(" header ");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode(" body ");

      var _hoisted_11 = {
        style: {
          "width": "240px",
          "margin-bottom": "20px",
          "padding": "8px",
          "border": "1px solid #ccc"
        }
      };

      var _hoisted_12 = /*#__PURE__*/_createTextVNode(" string ");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode(" button ");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode(" header ");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode(" body ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        var _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_space, null, {
          default: _withCtx(function () {
            return [_hoisted_2, _createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_card, null, {
              header: _withCtx(function () {
                return [_hoisted_4];
              }),
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_6, [_createVNode(_component_el_space, {
          alignment: "flex-start"
        }, {
          default: _withCtx(function () {
            return [_hoisted_7, _createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_card, null, {
              header: _withCtx(function () {
                return [_hoisted_9];
              }),
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_11, [_createVNode(_component_el_space, {
          alignment: "flex-end"
        }, {
          default: _withCtx(function () {
            return [_hoisted_12, _createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_card, null, {
              header: _withCtx(function () {
                return [_hoisted_14];
              }),
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo8": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */];
      var _hoisted_1 = {
        style: {
          "margin-bottom": "15px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" fill: ");

      var _hoisted_3 = {
        class: "card-header"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", null, "Card name", -1);

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Operation button");

      function render(_ctx, _cache) {
        var _component_el_switch = _resolveComponent("el-switch");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        var _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_switch, {
          modelValue: _ctx.fill,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.fill = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode(_component_el_space, {
          fill: _ctx.fill,
          wrap: ""
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
              return _createVNode(_component_el_card, {
                class: "box-card",
                key: i
              }, {
                header: _withCtx(function () {
                  return [_createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_button, {
                    class: "button",
                    type: "text"
                  }, {
                    default: _withCtx(function () {
                      return [_hoisted_5];
                    }),
                    _: 1
                  })])];
                }),
                default: _withCtx(function () {
                  return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
                    return _createVNode("div", {
                      key: o,
                      class: "text item"
                    }, _toDisplayString('List item ' + o), 1);
                  }), 64))];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        }, 8, ["fill"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fill: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo9": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */];
      var _hoisted_1 = {
        style: {
          "margin-bottom": "15px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" direction: ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("horizontal");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("vertical");

      var _hoisted_5 = {
        style: {
          "margin-bottom": "15px"
        }
      };

      var _hoisted_6 = /*#__PURE__*/_createTextVNode(" fillRatio:");

      var _hoisted_7 = {
        class: "card-header"
      };

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", null, "Card name", -1);

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Operation button");

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_slider = _resolveComponent("el-slider");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        var _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_radio, {
          modelValue: _ctx.direction,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.direction = $event;
          }),
          label: "horizontal"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_radio, {
          modelValue: _ctx.direction,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.direction = $event;
          }),
          label: "vertical"
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
          modelValue: _ctx.fillRatio,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.fillRatio = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode(_component_el_space, {
          fill: "",
          wrap: "",
          fillRatio: _ctx.fillRatio,
          direction: _ctx.direction,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(5, function (i) {
              return _createVNode(_component_el_card, {
                class: "box-card",
                key: i
              }, {
                header: _withCtx(function () {
                  return [_createVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_button, {
                    class: "button",
                    type: "text"
                  }, {
                    default: _withCtx(function () {
                      return [_hoisted_9];
                    }),
                    _: 1
                  })])];
                }),
                default: _withCtx(function () {
                  return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
                    return _createVNode("div", {
                      key: o,
                      class: "text item"
                    }, _toDisplayString('List item ' + o), 1);
                  }), 64))];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        }, 8, ["fillRatio", "direction"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            direction: 'horizontal',
            fillRatio: 30
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/space.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/space.md



spacevue_type_script_lang_ts.render = spacevue_type_template_id_a6cac5ae_render

/* harmony default export */ var space = __webpack_exports__["default"] = (spacevue_type_script_lang_ts);

/***/ })

}]);