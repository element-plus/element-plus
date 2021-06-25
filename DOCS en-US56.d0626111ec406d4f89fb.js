(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/space.md?vue&type=template&id=84fe03e4

var spacevue_type_template_id_84fe03e4_hoisted_1 = {
  class: "content element-doc"
};

var spacevue_type_template_id_84fe03e4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"space\"><a class=\"header-anchor\" href=\"#space\">¶</a> Space</h2><p>Even though we have <a href=\"#/en-US/component/divider\">Divider</a>, but sometimes we need more than one <a href=\"#/en-US/component/divider\">Divider</a> to split the elements apart, so we stack each elements upon <a href=\"#/en-US/component/divider\">Divider</a>, but doing so not only makes our code ugly but also makes it difficult to maintain. <strong>Space</strong> is this kind of component provides us both productivity and elegance.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>The basic use case is using this component to provide unified space between each components</p>", 4);

var spacevue_type_template_id_84fe03e4_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Using Space to provide space")], -1);

var spacevue_type_template_id_84fe03e4_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space wrap>\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n")], -1);

var spacevue_type_template_id_84fe03e4_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "vertical-layout"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vertical-layout"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Vertical layout")], -1);

var spacevue_type_template_id_84fe03e4_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Using "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to control the layout, we use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "flex-direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to implement this.")], -1);

var spacevue_type_template_id_84fe03e4_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "We also provide vertical layout.")], -1);

var spacevue_type_template_id_84fe03e4_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 2\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n")], -1);

var spacevue_type_template_id_84fe03e4_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"control-the-size-of-the-space\"><a class=\"header-anchor\" href=\"#control-the-size-of-the-space\">¶</a> Control the size of the space</h3><p>Control the space size via <code>size</code> API.</p><p>You can set the size with built-in sizes <code>mini</code>, <code>small</code>, <code>medium</code>, <code>large</code>, these size coresponds to <code>4px</code>, <code>8px</code>, <code>12px</code>, <code>16px</code>. The default size is <code>small</code>, A.K.A. <code>8px</code></p><p>You can also using customized size to override it. Refer to the next part.</p>", 4);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-space direction=\"vertical\" alignment=\"start\" :size=\"30\">\n  <el-radio-group v-model=\"size\">\n    <el-radio :label=\"'mini'\">mini</el-radio>\n    <el-radio :label=\"'small'\">small</el-radio>\n    <el-radio :label=\"'medium'\">medium</el-radio>\n    <el-radio :label=\"'large'\">large</el-radio>\n  </el-radio-group>\n\n  <el-space wrap :size=\"size\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 3\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n  </el-space>\n</template>\n\n<script>\n\nexport default {\n\n  data() {\n    return {\n      size: 'mini',\n    }\n  }\n}\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "customized-size"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#customized-size"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Customized Size")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Sometimes built-in sizes could not meet the business needs, we can use custom size (number type) to control the space between items.", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-slider v-model=\"size\" />\n  <el-space wrap :size=\"size\">\n    <el-card class=\"box-card\" style=\"width: 250px\" v-for=\"i in 2\" :key=\"i\">\n      <template #header>\n        <div class=\"card-header\">\n          <span>Card name</span>\n          <el-button class=\"button\" type=\"text\">Operation button</el-button>\n        </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{ 'List item ' + o }}\n      </div>\n    </el-card>\n  </el-space>\n</template>\n\n<script>\nexport default {\n\n  data() {\n    return {\n      size: 20,\n    }\n  }\n}\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>Do not use <code>ElSpace</code> with components that depend on ancestor width (height), e.g. <code>ElSlider</code>, in this case when you drag the trigger button the bar will grow which causes misplacement between cursor and trigger button.</p></div><h3 id=\"auto-wrapping\"><a class=\"header-anchor\" href=\"#auto-wrapping\">¶</a> Auto wrapping</h3><p>When in <strong>horizontal</strong> mode, using <code>wrap</code> (<strong>bool type</strong>) to control auto wrapping behavior.</p>", 3);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Using "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "wrap"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to control line wrap")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-space wrap>\n  <div v-for=\"i in 20\" :key=\"i\">\n    <el-button type=\"text\">\n      Text button\n    </el-button>\n  </div>\n</el-space>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "spacer"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#spacer"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Spacer")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Sometimes we want something more than blank space, so we have (spacer) to help us.", -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h4", {
  id: "literal-type-spacer"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#literal-type-spacer"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Literal type spacer")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n <el-space :size=\"size\" spacer=\"|\">\n    <div v-for=\"i in 2\" :key=\"i\">\n      <el-button>\n        button {{ i }}\n      </el-button>\n    </div>\n  </el-space>\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return {\n      size: 10,\n    }\n  },\n}\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h4", {
  id: "spacer-can-also-be-vnode"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#spacer-can-also-be-vnode"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Spacer can also be VNode")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n <el-space :size=\"size\" :spacer=\"spacer\">\n    <div v-for=\"i in 2\" :key=\"i\">\n      <el-button>\n        button {{ i }}\n      </el-button>\n    </div>\n  </el-space>\n</template>\n\n<script>\nimport { h, resolveComponent } from 'vue'\nimport { ElDivider } from 'element-plus'\nexport default {\n  data() {\n    return {\n      size: 10,\n      spacer: h(ElDivider, { direction: 'vertical' }),\n    }\n  },\n}\n</script>\n\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "alignment"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#alignment"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Alignment")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Setting this attribute can adjust the alignment of child nodes, the desirable value can be found at "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"
}, "align-items"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Using "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "alignment")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space>\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space alignment=\"flex-start\">\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n  <div style=\"width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;\">\n    <el-space alignment=\"flex-end\">\n      string\n      <el-button>\n        button\n      </el-button>\n      <el-card>\n        <template #header>\n          header\n        </template>\n        body\n      </el-card>\n    </el-space>\n  </div>\n</template>\n\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"space-attributes\"><a class=\"header-anchor\" href=\"#space-attributes\">¶</a> Space Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Available value</th><th>Default</th></tr></thead><tbody><tr><td>alignment</td><td>Controls the alignment of items</td><td>string</td><td><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items\">align-items</a></td><td>&#39;center&#39;</td></tr><tr><td>class</td><td>Classname</td><td>string / Array&lt;Object | String&gt; / Object</td><td>-</td><td>-</td></tr><tr><td>direction</td><td>Placement direction</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>prefixCls</td><td>Prefix for space-items</td><td>string</td><td>el-space</td><td>-</td></tr><tr><td>style</td><td>Extra style rules</td><td>string / Array&lt;Object | String&gt; / Object</td><td>-</td><td>-</td></tr><tr><td>spacer</td><td>Spacer</td><td>string / number / VNode</td><td>-</td><td>-</td></tr><tr><td>size</td><td>Spacing size</td><td>string / number / [number, number]</td><td>-</td><td>&#39;small&#39;</td></tr><tr><td>wrap</td><td>Auto wrapping</td><td>boolean</td><td>true / false</td><td>false</td></tr></tbody></table><h3 id=\"space-slots\"><a class=\"header-anchor\" href=\"#space-slots\">¶</a> Space Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Items to be spaced</td></tr></tbody></table>", 4);

function spacevue_type_template_id_84fe03e4_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", spacevue_type_template_id_84fe03e4_hoisted_1, [spacevue_type_template_id_84fe03e4_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [spacevue_type_template_id_84fe03e4_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [spacevue_type_template_id_84fe03e4_hoisted_6];
    }),
    _: 1
  }), spacevue_type_template_id_84fe03e4_hoisted_8, spacevue_type_template_id_84fe03e4_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [spacevue_type_template_id_84fe03e4_hoisted_11];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [spacevue_type_template_id_84fe03e4_hoisted_10];
    }),
    _: 1
  }), spacevue_type_template_id_84fe03e4_hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_25, _hoisted_26, _hoisted_27, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/space.md?vue&type=template&id=84fe03e4

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/space.md?vue&type=script&lang=ts


/* harmony default export */ var spacevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];
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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];

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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];
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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

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

      var h = vue_esm_browser["s" /* h */],
          resolveComponent = vue_esm_browser["P" /* resolveComponent */];

      var _require = __webpack_require__(25),
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/space.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/space.md



spacevue_type_script_lang_ts.render = spacevue_type_template_id_84fe03e4_render

/* harmony default export */ var space = __webpack_exports__["default"] = (spacevue_type_script_lang_ts);

/***/ })

}]);