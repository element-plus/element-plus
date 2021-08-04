(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[342],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/space.md?vue&type=template&id=4b30188b

var spacevue_type_template_id_4b30188b_hoisted_1 = {
  class: "content element-doc"
};

var spacevue_type_template_id_4b30188b_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h2 id=\"space-jian-ju\"><a class=\"header-anchor\" href=\"#space-jian-ju\">¶</a> Space 间距</h2><p>虽然我们拥有 <a href=\"#/zh-CN/component/divider\">Divider 组件</a>, 但很多时候我们需要不是一个被 <a href=\"#/zh-CN/component/divider\">Divider 组件</a> 分割开的页面结构, 因此我们会重复的使用很多的 <a href=\"#/zh-CN/component/divider\">Divider 组件</a>, 这在我们的开发效率上造成了一定的困扰, <strong>间距组件</strong>就是为了解决这种困扰应运而生的.</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>最基础的用法, 通过这个组件来给组件之间提供统一的间距</p>", 4);

var spacevue_type_template_id_4b30188b_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "通过间距组件来给多个组件之间提供间距")], -1);

var spacevue_type_template_id_4b30188b_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space wrap>\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n")], -1);

var spacevue_type_template_id_4b30188b_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "chui-zhi-bu-ju"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chui-zhi-bu-ju"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 垂直布局")], -1);

var spacevue_type_template_id_4b30188b_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 来控制布局的方式, 背后实际上是利用了 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "flex-direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 来控制.")], -1);

var spacevue_type_template_id_4b30188b_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "当然也提供垂直布局的方式")], -1);

var spacevue_type_template_id_4b30188b_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 2\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n")], -1);

var spacevue_type_template_id_4b30188b_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"kong-zhi-jian-ju-de-da-xiao\"><a class=\"header-anchor\" href=\"#kong-zhi-jian-ju-de-da-xiao\">¶</a> 控制间距的大小</h3><p>通过调整 <code>size</code> 的值来控制间距的大小</p><p>可供选择的内建的值有 <code>mini</code>, <code>small</code>, <code>medium</code>, <code>large</code>, 分别对应 <code>4px</code>, <code>8px</code>, <code>12px</code>, <code>16px</code>. 默认的间距大小为 <code>small</code> 也就是 <code>8px</code></p><p>您也可以通过自定义的 <code>size</code> 来控制大小，详见下一部分</p>", 4);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性控制大小")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\" alignment=\"start\" :size=\"30\">\n  <el-radio-group v-model=\"size\">\n    <el-radio :label=\"'mini'\">迷你</el-radio>\n    <el-radio :label=\"'small'\">小</el-radio>\n    <el-radio :label=\"'medium'\">中等</el-radio>\n    <el-radio :label=\"'large'\">大号</el-radio>\n  </el-radio-group>\n\n  <el-space wrap :size=\"size\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n  </el-space>\n</template>\n\n<script>\n\nexport default {\n\n  data() {\n    return {\n      size: 'mini',\n    }\n  }\n}\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "zi-ding-yi-size"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-size"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 自定义 Size")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "很多时候, 内建的大小不满足设计师的要求, 我们可以通过传入自己定义的大小 (数字类型) 来设置", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-slider v-model=\"size\" />\n  <el-space wrap :size=\"size\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 2\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n\n<script>\nexport default {\n\n  data() {\n    return {\n      size: 20,\n    }\n  }\n}\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<div class=\"tip\"><p>不要与使用依赖父元素百分比宽度 (高度) 的元素一起使用, 例如 <code>ElSlider</code>, 这样会造成光标不同步</p></div><h3 id=\"zi-dong-huan-xing\"><a class=\"header-anchor\" href=\"#zi-dong-huan-xing\">¶</a> 自动换行</h3><p>在<strong>水平 (horizontal)</strong> 模式下,通过控制 <code>wrap</code> <strong>(布尔类型)</strong> 来控制是否自动换行</p>", 3);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("利用 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "wrap"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 控制换行")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-space wrap>\n  <div v-for=\"i in 20\" :key=\"i\">\n    <el-button type=\"text\">\n      文字按钮\n    </el-button>\n  </div>\n</el-space>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "xing-jian-fen-ge-fu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xing-jian-fen-ge-fu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 行间分隔符")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "有时候, 仅仅在行间加空白, 并不能满足我们的日常需求, 此时分隔符 (spacer) 就可以发挥非常好的作用了.", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h4", {
  id: "zi-fu-chuan-huo-shu-zi-lei-xing-de-fen-ge-fu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-fu-chuan-huo-shu-zi-lei-xing-de-fen-ge-fu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 字符串 或 数字类型的分隔符")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n <el-space :size=\"size\" spacer=\"|\">\n    <div v-for=\"i in 2\" :key=\"i\">\n      <el-button>\n        button {{ i }}\n      </el-button>\n    </div>\n  </el-space>\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return {\n      size: 10,\n    }\n  },\n}\n</script>\n")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h4", {
  id: "fen-ge-fu-huan-ke-yi-shi-vnode-lei-xing"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fen-ge-fu-huan-ke-yi-shi-vnode-lei-xing"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 分隔符还可以是 VNode 类型")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n <el-space :size=\"size\" :spacer=\"spacer\">\n    <div v-for=\"i in 2\" :key=\"i\">\n      <el-button>\n        button {{ i }}\n      </el-button>\n    </div>\n  </el-space>\n</template>\n\n<script>\nimport { h, resolveComponent } from 'vue'\nimport { ElDivider } from 'element-plus'\nexport default {\n  data() {\n    return {\n      size: 10,\n      spacer: h(ElDivider, { direction: 'vertical' }),\n    }\n  },\n}\n</script>\n\n")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "dui-qi-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dui-qi-fang-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 对齐方式")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("设置该值可以调整所有子节点在容器内的对齐方式, 可设置的值与 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items"
}, "align-items"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 一致")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "用 alignment 来控制对齐")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space>\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space alignment=\"flex-start\">\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space alignment=\"flex-end\">\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n</template>\n\n")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "zi-dong-tian-chong-rong-qi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-dong-tian-chong-rong-qi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 自动填充容器")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fill"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "(布尔类型)"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 参数可以控制子节点是否自动填充容器")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("下面的例子中，当设置为 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fill"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 时，子节点的宽度会自动适配容器的宽度")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "用 fill 让子节点自动填充容器")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n  <div style=\"margin-bottom:15px\">\n    fill:  <el-switch v-model=\"fill\"></el-switch>\n  </div>\n  <el-space :fill=\"fill\" wrap>\n    <el-card class=\"box-card\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return { fill: true }\n  },\n}\n</script>\n")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("也可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fillRatio"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 参数，自定义填充的比例，默认值为 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "100"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("，代表基于父容器宽度的 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "100%"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 进行填充")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "需要注意的是，水平布局和垂直布局的表现形式稍有不同，具体的效果可以查看下面的例子", -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "用 fillRatio 自定义填充比例")], -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n  <div style=\"margin-bottom: 15px\">\n    direction:\n    <el-radio v-model=\"direction\" label=\"horizontal\">horizontal</el-radio>\n    <el-radio v-model=\"direction\" label=\"vertical\">vertical</el-radio>\n  </div>\n  <div style=\"margin-bottom: 15px\">\n    fillRatio:<el-slider v-model=\"fillRatio\"></el-slider>\n  </div>\n  <el-space fill wrap :fillRatio=\"fillRatio\" :direction=\"direction\" style=\" width: 100%\">\n    <el-card class=\"box-card\" v-for=\"i in 5\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return { direction: 'horizontal', fillRatio: 30 }\n  },\n}\n</script>\n")], -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"space-attributes\"><a class=\"header-anchor\" href=\"#space-attributes\">¶</a> Space Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>alignment</td><td>对齐的方式</td><td>string</td><td><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items\">align-items</a></td><td>&#39;center&#39;</td></tr><tr><td>class</td><td>类名</td><td>string / Array&lt;Object | String&gt; / Object</td><td>-</td><td>-</td></tr><tr><td>direction</td><td>排列的方向</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>prefixCls</td><td>给 space-items 的类名前缀</td><td>string</td><td>el-space</td><td>-</td></tr><tr><td>style</td><td>额外样式</td><td>string / Array&lt;Object | String&gt; / Object</td><td>-</td><td>-</td></tr><tr><td>spacer</td><td>间隔符</td><td>string / number / VNode</td><td>-</td><td>-</td></tr><tr><td>size</td><td>间隔大小</td><td>string / number / [number, number]</td><td>-</td><td>&#39;small&#39;</td></tr><tr><td>wrap</td><td>设置是否自动折行</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>fill</td><td>子元素是否填充父容器</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>fillRatio</td><td>填充父容器的比例</td><td>number</td><td>-</td><td>100</td></tr></tbody></table><h3 id=\"space-slot\"><a class=\"header-anchor\" href=\"#space-slot\">¶</a> Space Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>需要添加间隔的元素</td></tr></tbody></table>", 4);

function spacevue_type_template_id_4b30188b_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", spacevue_type_template_id_4b30188b_hoisted_1, [spacevue_type_template_id_4b30188b_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_4b30188b_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_4b30188b_hoisted_6];
    }),
    _: 1
  }), spacevue_type_template_id_4b30188b_hoisted_8, spacevue_type_template_id_4b30188b_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_4b30188b_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_4b30188b_hoisted_10];
    }),
    _: 1
  }), spacevue_type_template_id_4b30188b_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, _hoisted_27, _hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_32, _hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    _: 1
  }), _hoisted_36, _hoisted_37, _hoisted_38, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_40];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_39];
    }),
    _: 1
  }), _hoisted_41, _hoisted_42, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_44];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_43];
    }),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/space.md?vue&type=template&id=4b30188b

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

      var _require = __webpack_require__(26),
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



spacevue_type_script_lang_ts.render = spacevue_type_template_id_4b30188b_render

/* harmony default export */ var space = __webpack_exports__["default"] = (spacevue_type_script_lang_ts);

/***/ })

}]);