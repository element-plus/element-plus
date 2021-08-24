(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[271],{

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/space.md?vue&type=template&id=009a2062

var spacevue_type_template_id_009a2062_hoisted_1 = {
  class: "content element-doc"
};

var spacevue_type_template_id_009a2062_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Space (Translation needed) ");

var spacevue_type_template_id_009a2062_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Even though we have ");

var spacevue_type_template_id_009a2062_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Divider");

var spacevue_type_template_id_009a2062_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", but sometimes we need more than one ");

var spacevue_type_template_id_009a2062_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Divider");

var spacevue_type_template_id_009a2062_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to split the elements apart, so we stack each elements upon ");

var spacevue_type_template_id_009a2062_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Divider");

var spacevue_type_template_id_009a2062_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", but doing so not only makes our code ugly but also makes it difficult to maintain. ");

var spacevue_type_template_id_009a2062_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "Space", -1);

var spacevue_type_template_id_009a2062_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" is this kind of component provides us both productivity and elegance.");

var spacevue_type_template_id_009a2062_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Basic usage ");

var spacevue_type_template_id_009a2062_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "The basic use case is using this component to provide unified space between each components", -1);

var spacevue_type_template_id_009a2062_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Using Space to provide space")], -1);

var spacevue_type_template_id_009a2062_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space wrap>\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Vertical layout ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Using "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute to control the layout, we use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "flex-direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to implement this.")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "We also provide vertical layout.")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 2\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Control the size of the space ");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Control the space size via <code>size</code> API.</p><p>You can set the size with built-in sizes <code>mini</code>, <code>small</code>, <code>medium</code>, <code>large</code>, these size coresponds to <code>4px</code>, <code>8px</code>, <code>12px</code>, <code>16px</code>. The default size is <code>small</code>, A.K.A. <code>8px</code></p><p>You can also using customized size to override it. Refer to the next part.</p>", 3);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\" alignment=\"start\" :size=\"30\">\n  <el-radio-group v-model=\"size\">\n    <el-radio :label=\"'mini'\">mini</el-radio>\n    <el-radio :label=\"'small'\">small</el-radio>\n    <el-radio :label=\"'medium'\">medium</el-radio>\n    <el-radio :label=\"'large'\">large</el-radio>\n  </el-radio-group>\n\n  <el-space wrap :size=\"size\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n  </el-space>\n</template>\n\n<script>\n\nexport default {\n\n  data() {\n    return {\n      size: 'mini',\n    }\n  }\n}\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Customized Size ");

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Sometimes built-in sizes could not meet the business needs, we can use custom size (number type) to control the space between items.", -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-slider v-model=\"size\" />\n  <el-space wrap :size=\"size\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 2\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n\n<script>\nexport default {\n\n  data() {\n    return {\n      size: 20,\n    }\n  }\n}\n</script>\n")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Do not use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElSpace"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" with components that depend on ancestor width (height), e.g. "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElSlider"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", in this case when you drag the trigger button the bar will grow which causes misplacement between cursor and trigger button.")])], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Auto wrapping ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("When in "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "horizontal"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" mode, using "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "wrap"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ("), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "bool type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(") to control auto wrapping behavior.")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Using "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "wrap"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to control line wrap")])], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-space wrap>\n  <div v-for=\"i in 20\" :key=\"i\">\n    <el-button type=\"text\">\n      Text button\n    </el-button>\n  </div>\n</el-space>\n")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Spacer ");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Sometimes we want something more than blank space, so we have (spacer) to help us.", -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Literal type spacer ");

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n <el-space :size=\"size\" spacer=\"|\">\n    <div v-for=\"i in 2\" :key=\"i\">\n      <el-button>\n        button {{ i }}\n      </el-button>\n    </div>\n  </el-space>\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return {\n      size: 10,\n    }\n  },\n}\n</script>\n")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Spacer can also be VNode ");

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n <el-space :size=\"size\" :spacer=\"spacer\">\n    <div v-for=\"i in 2\" :key=\"i\">\n      <el-button>\n        button {{ i }}\n      </el-button>\n    </div>\n  </el-space>\n</template>\n\n<script>\nimport { h, resolveComponent } from 'vue'\nimport { ElDivider } from 'element-plus'\nexport default {\n  data() {\n    return {\n      size: 10,\n      spacer: h(ElDivider, { direction: 'vertical' }),\n    }\n  },\n}\n</script>\n\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Alignment ");

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Setting this attribute can adjust the alignment of child nodes, the desirable value can be found at ");

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("align-items");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".");

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Using "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "alignment")])], -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space>\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space alignment=\"flex-start\">\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space alignment=\"flex-end\">\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n</template>\n\n")], -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Fill the container ");

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Through the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fill"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "(Boolean type)"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" parameter, you can control whether the child node automatically fills the container.")], -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("In the following example, when set to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fill"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", the width of the child node will automatically adapt to the width of the container.")], -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Use fill to automatically fill the container with child nodes")], -1);

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n  <div style=\"margin-bottom:15px\">\n    fill:  <el-switch v-model=\"fill\"></el-switch>\n  </div>\n  <el-space :fill=\"fill\" wrap>\n    <el-card class=\"box-card\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return { fill: true }\n  },\n}\n</script>\n")], -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("You can also use the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fillRatio"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" parameter to customize the filling ratio. The default value is "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "100"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", which represents filling based on the width of the parent container at "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "100%"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "It should be noted that the expression of horizontal layout and vertical layout is slightly different, the specific effect can be viewed in the following example.", -1);

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Use fillRatio to customize the fill ratio")], -1);

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n  <div style=\"margin-bottom: 15px\">\n    direction:\n    <el-radio v-model=\"direction\" label=\"horizontal\">horizontal</el-radio>\n    <el-radio v-model=\"direction\" label=\"vertical\">vertical</el-radio>\n  </div>\n  <div style=\"margin-bottom: 15px\">\n    fillRatio:<el-slider v-model=\"fillRatio\"></el-slider>\n  </div>\n  <el-space fill wrap :fillRatio=\"fillRatio\" :direction=\"direction\" style=\" width: 100%\">\n    <el-card class=\"box-card\" v-for=\"i in 5\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return { direction: 'horizontal', fillRatio: 30 }\n  },\n}\n</script>\n")], -1);

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Space Attributes ");

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Available value"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Defaults")])], -1);

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "alignment", -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Controls the alignment of items", -1);

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string", -1);

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("align-items");

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "'center'", -1);

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "class"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Classname"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / Array<Object | String> / Object"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Placement direction"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "vertical/horizontal"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "horizontal")], -1);

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "prefixCls"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Prefix for space-items"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "el-space"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "style"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Extra style rules"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / Array<Object | String> / Object"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "spacer"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Spacer"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / number / VNode"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Spacing size"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / number / [number, number]"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "'small'")], -1);

var _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "wrap"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Auto wrapping"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true / false"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "fill"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Whether to fill the container"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true / false"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "fillRatio"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Ratio of fill"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "100")], -1);

var _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Space Slot ");

var _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Items to be spaced")])])], -1);

function spacevue_type_template_id_009a2062_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", spacevue_type_template_id_009a2062_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "space-translation-needed",
    content: "Space (Translation needed)",
    href: "#space-translation-needed",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_009a2062_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#space-translation-needed"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [spacevue_type_template_id_009a2062_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "#/en-US/component/divider"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_009a2062_hoisted_4];
    }),
    _: 1
  }), spacevue_type_template_id_009a2062_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "#/en-US/component/divider"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_009a2062_hoisted_6];
    }),
    _: 1
  }), spacevue_type_template_id_009a2062_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "#/en-US/component/divider"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_009a2062_hoisted_8];
    }),
    _: 1
  }), spacevue_type_template_id_009a2062_hoisted_9, spacevue_type_template_id_009a2062_hoisted_10, spacevue_type_template_id_009a2062_hoisted_11]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_009a2062_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#basic-usage"
      })];
    }),
    _: 1
  }), spacevue_type_template_id_009a2062_hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_009a2062_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [spacevue_type_template_id_009a2062_hoisted_14];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "vertical-layout",
    content: "Vertical layout",
    href: "#vertical-layout",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#vertical-layout"
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
    id: "control-the-size-of-the-space",
    content: "Control the size of the space",
    href: "#control-the-size-of-the-space",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#control-the-size-of-the-space"
      })];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "customized-size",
    content: "Customized Size",
    href: "#customized-size",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#customized-size"
      })];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "auto-wrapping",
    content: "Auto wrapping",
    href: "#auto-wrapping",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#auto-wrapping"
      })];
    }),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "spacer",
    content: "Spacer",
    href: "#spacer",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#spacer"
      })];
    }),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "literal-type-spacer",
    content: "Literal type spacer",
    href: "#literal-type-spacer",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#literal-type-spacer"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "spacer-can-also-be-vnode",
    content: "Spacer can also be VNode",
    href: "#spacer-can-also-be-vnode",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#spacer-can-also-be-vnode"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "alignment",
    content: "Alignment",
    href: "#alignment",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#alignment"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_40, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    _: 1
  }), _hoisted_42]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_44];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_43];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "fill-the-container",
    content: "Fill the container",
    href: "#fill-the-container",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_45, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#fill-the-container"
      })];
    }),
    _: 1
  }), _hoisted_46, _hoisted_47, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_49];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_48];
    }),
    _: 1
  }), _hoisted_50, _hoisted_51, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_53];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_52];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "space-attributes",
    content: "Space Attributes",
    href: "#space-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_54, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#space-attributes"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_55, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_56, _hoisted_57, _hoisted_58, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_59];
    }),
    _: 1
  })]), _hoisted_60]), _hoisted_61, _hoisted_62, _hoisted_63, _hoisted_64, _hoisted_65, _hoisted_66, _hoisted_67, _hoisted_68, _hoisted_69])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "space-slot",
    content: "Space Slot",
    href: "#space-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_70, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#space-slot"
      })];
    }),
    _: 1
  }), _hoisted_71, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/space.md?vue&type=template&id=009a2062

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/space.md?vue&type=script&lang=ts


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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("mini");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("small");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("medium");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("large");

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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Text button ");

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
// CONCATENATED MODULE: ./website/docs/jp/space.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/space.md



spacevue_type_script_lang_ts.render = spacevue_type_template_id_009a2062_render

/* harmony default export */ var space = __webpack_exports__["default"] = (spacevue_type_script_lang_ts);

/***/ })

}]);