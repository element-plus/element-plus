(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/menu.md?vue&type=template&id=1d220afe

var menuvue_type_template_id_1d220afe_hoisted_1 = {
  class: "content element-doc"
};

var menuvue_type_template_id_1d220afe_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "navmenu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#navmenu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" NavMenu")], -1);

var menuvue_type_template_id_1d220afe_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Menu that provides navigation for your website.", -1);

var menuvue_type_template_id_1d220afe_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "top-bar"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#top-bar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Top bar")], -1);

var menuvue_type_template_id_1d220afe_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Top bar NavMenu can be used in a variety of scenarios.", -1);

var menuvue_type_template_id_1d220afe_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("By default Menu is vertical, but you can change it to horizontal by setting the mode prop to 'horizontal'. In addition, you can use the submenu component to create a second level menu. Menu provides "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "background-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "text-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active-text-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to customize the colors.")])], -1);

var menuvue_type_template_id_1d220afe_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-menu :default-active=\"activeIndex\" class=\"el-menu-demo\" mode=\"horizontal\" @select=\"handleSelect\">\n  <el-menu-item index=\"1\">Processing Center</el-menu-item>\n  <el-submenu index=\"2\">\n    <template #title>Workspace</template>\n    <el-menu-item index=\"2-1\">item one</el-menu-item>\n    <el-menu-item index=\"2-2\">item two</el-menu-item>\n    <el-menu-item index=\"2-3\">item three</el-menu-item>\n    <el-submenu index=\"2-4\">\n      <template #title>item four</template>\n      <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">Orders</a></el-menu-item>\n</el-menu>\n<div class=\"line\"></div>\n<el-menu\n  :default-active=\"activeIndex2\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n  background-color=\"#545c64\"\n  text-color=\"#fff\"\n  active-text-color=\"#ffd04b\">\n  <el-menu-item index=\"1\">Processing Center</el-menu-item>\n  <el-submenu index=\"2\">\n    <template #title>Workspace</template>\n    <el-menu-item index=\"2-1\">item one</el-menu-item>\n    <el-menu-item index=\"2-2\">item two</el-menu-item>\n    <el-menu-item index=\"2-3\">item three</el-menu-item>\n    <el-submenu index=\"2-4\">\n      <template #title>item four</template>\n      <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">Orders</a></el-menu-item>\n</el-menu>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: '1',\n        activeIndex2: '1'\n      };\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_1d220afe_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "side-bar"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#side-bar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Side bar")], -1);

var menuvue_type_template_id_1d220afe_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vertical NavMenu with sub-menus.", -1);

var menuvue_type_template_id_1d220afe_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can use the el-menu-item-group component to create a menu group, and the name of the group is determined by the title prop or a named slot.")], -1);

var menuvue_type_template_id_1d220afe_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"tac\">\n  <el-col :span=\"12\">\n    <h5>Default colors</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\">\n      <el-submenu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title=\"Group One\">\n          <el-menu-item index=\"1-1\">item one</el-menu-item>\n          <el-menu-item index=\"1-2\">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Two\">\n          <el-menu-item index=\"1-3\">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>item four</template>\n          <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n  <el-col :span=\"12\">\n    <h5>Custom colors</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n      background-color=\"#545c64\"\n      text-color=\"#fff\"\n      active-text-color=\"#ffd04b\">\n      <el-submenu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title=\"Group One\">\n          <el-menu-item index=\"1-1\">item one</el-menu-item>\n          <el-menu-item index=\"1-2\">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Two\">\n          <el-menu-item index=\"1-3\">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>item four</template>\n          <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_1d220afe_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "collapse"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#collapse"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Collapse")], -1);

var menuvue_type_template_id_1d220afe_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vertical NavMenu could be collapsed.", -1);

var menuvue_type_template_id_1d220afe_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-radio-group v-model=\"isCollapse\" style=\"margin-bottom: 20px;\">\n  <el-radio-button :label=\"false\">expand</el-radio-button>\n  <el-radio-button :label=\"true\">collapse</el-radio-button>\n</el-radio-group>\n<el-menu default-active=\"2\" class=\"el-menu-vertical-demo\" @open=\"handleOpen\" @close=\"handleClose\" :collapse=\"isCollapse\">\n  <el-submenu index=\"1\">\n    <template #title>\n      <i class=\"el-icon-location\"></i>\n      <span>Navigator One</span>\n    </template>\n    <el-menu-item-group>\n      <template #title><span>Group One</span></template>\n      <el-menu-item index=\"1-1\">item one</el-menu-item>\n      <el-menu-item index=\"1-2\">item two</el-menu-item>\n    </el-menu-item-group>\n    <el-menu-item-group title=\"Group Two\">\n      <el-menu-item index=\"1-3\">item three</el-menu-item>\n    </el-menu-item-group>\n    <el-submenu index=\"1-4\">\n      <template #title><span>item four</span></template>\n      <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"2\">\n    <i class=\"el-icon-menu\"></i>\n    <template #title>Navigator Two</template>\n  </el-menu-item>\n  <el-menu-item index=\"3\" disabled>\n    <i class=\"el-icon-document\"></i>\n    <template #title>Navigator Three</template>\n  </el-menu-item>\n  <el-menu-item index=\"4\">\n    <i class=\"el-icon-setting\"></i>\n    <template #title>Navigator Four</template>\n  </el-menu-item>\n</el-menu>\n\n<style>\n  .el-menu-vertical-demo:not(.el-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true\n      };\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_1d220afe_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"menu-attribute\"><a class=\"header-anchor\" href=\"#menu-attribute\">¶</a> Menu Attribute</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>mode</td><td>menu display mode</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>whether the menu is collapsed (available only in vertical mode)</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>background color of Menu (hex format)</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>text color of Menu (hex format)</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>text color of currently active menu item (hex format)</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>index of currently active menu</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>array that contains indexes of currently active sub-menus</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>whether only one sub-menu can be active</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>how sub-menus are triggered, only works when <code>mode</code> is &#39;horizontal&#39;</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>whether <code>vue-router</code> mode is activated. If true, index will be used as &#39;path&#39; to activate the route action</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>whether to enable the collapse transition</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table><h3 id=\"menu-methods\"><a class=\"header-anchor\" href=\"#menu-methods\">¶</a> Menu Methods</h3><table><thead><tr><th>Methods Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>open</td><td>open a specific sub-menu</td><td>index: index of the sub-menu to open</td></tr><tr><td>close</td><td>close a specific sub-menu</td><td>index: index of the sub-menu to close</td></tr></tbody></table><h3 id=\"menu-events\"><a class=\"header-anchor\" href=\"#menu-events\">¶</a> Menu Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>callback function when menu is activated</td><td>index: index of activated menu, indexPath: index path of activated menu</td></tr><tr><td>open</td><td>callback function when sub-menu expands</td><td>index: index of expanded sub-menu, indexPath: index path of expanded sub-menu</td></tr><tr><td>close</td><td>callback function when sub-menu collapses</td><td>index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu</td></tr></tbody></table><h3 id=\"menu-item-events\"><a class=\"header-anchor\" href=\"#menu-item-events\">¶</a> Menu-Item Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>callback function when menu-item is clicked</td><td>el: menu-item instance</td></tr></tbody></table><h3 id=\"submenu-attribute\"><a class=\"header-anchor\" href=\"#submenu-attribute\">¶</a> SubMenu Attribute</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>unique identification</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>custom class name for the popup menu</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>timeout before showing a sub-menu</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>timeout before hiding a sub-menu</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>whether the sub-menu is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop</td><td>boolean</td><td>-</td><td>level one Submenu: true / other Submenus: false</td></tr></tbody></table><h3 id=\"menu-item-attribute\"><a class=\"header-anchor\" href=\"#menu-item-attribute\">¶</a> Menu-Item Attribute</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>unique identification</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>route</td><td>Vue Router object</td><td>object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether disabled</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"menu-group-attribute\"><a class=\"header-anchor\" href=\"#menu-group-attribute\">¶</a> Menu-Group Attribute</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>group title</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 14);

function menuvue_type_template_id_1d220afe_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", menuvue_type_template_id_1d220afe_hoisted_1, [menuvue_type_template_id_1d220afe_hoisted_2, menuvue_type_template_id_1d220afe_hoisted_3, menuvue_type_template_id_1d220afe_hoisted_4, menuvue_type_template_id_1d220afe_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_1d220afe_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_1d220afe_hoisted_6];
    }),
    _: 1
  }), menuvue_type_template_id_1d220afe_hoisted_8, menuvue_type_template_id_1d220afe_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_1d220afe_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_1d220afe_hoisted_10];
    }),
    _: 1
  }), menuvue_type_template_id_1d220afe_hoisted_12, menuvue_type_template_id_1d220afe_hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_1d220afe_hoisted_14];
    }),
    _: 1
  }), menuvue_type_template_id_1d220afe_hoisted_15]);
}
// CONCATENATED MODULE: ./website/docs/en-US/menu.md?vue&type=template&id=1d220afe

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/menu.md?vue&type=script&lang=ts


/* harmony default export */ var menuvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Processing Center");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Workspace");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Info");

      var _hoisted_11 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "Orders", -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "line"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Processing Center");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Workspace");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("Info");

      var _hoisted_23 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "Orders", -1);

      function render(_ctx, _cache) {
        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_2];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-3"
                    }, {
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
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["default-active", "onSelect"]), _hoisted_12, _createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex2,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect,
          "background-color": "#545c64",
          "text-color": "#fff",
          "active-text-color": "#ffd04b"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_14];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_19];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_20];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_21];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_22];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_23];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["default-active", "onSelect"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },
        methods: {
          handleSelect: function handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("h5", null, "Default colors", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "Navigator One", -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_9 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("span", null, "Navigator Two", -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("span", null, "Navigator Three", -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("span", null, "Navigator Four", -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("h5", null, "Custom colors", -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_17 = /*#__PURE__*/_createVNode("span", null, "Navigator One", -1);

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_23 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_24 = /*#__PURE__*/_createVNode("span", null, "Navigator Two", -1);

      var _hoisted_25 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_26 = /*#__PURE__*/_createVNode("span", null, "Navigator Three", -1);

      var _hoisted_27 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_28 = /*#__PURE__*/_createVNode("span", null, "Navigator Four", -1);

      function render(_ctx, _cache) {
        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "tac"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_menu, {
                  "default-active": "2",
                  class: "el-menu-vertical-demo",
                  onOpen: _ctx.handleOpen,
                  onClose: _ctx.handleClose
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_2, _hoisted_3];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, {
                          title: "Group One"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_4];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "1-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_5];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group Two"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_6];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "1-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_8];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9, _hoisted_10];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_11, _hoisted_12];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "4"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_13, _hoisted_14];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onOpen", "onClose"])];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_15, _createVNode(_component_el_menu, {
                  "default-active": "2",
                  class: "el-menu-vertical-demo",
                  onOpen: _ctx.handleOpen,
                  onClose: _ctx.handleClose,
                  "background-color": "#545c64",
                  "text-color": "#fff",
                  "active-text-color": "#ffd04b"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_16, _hoisted_17];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, {
                          title: "Group One"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_18];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "1-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_19];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group Two"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_20];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "1-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_21];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_22];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_23, _hoisted_24];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_25, _hoisted_26];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "4"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_27, _hoisted_28];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onOpen", "onClose"])];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("expand");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("collapse");

      var _hoisted_3 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", null, "Navigator One", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", null, "Group One", -1);

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", null, "item four", -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_11 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Navigator Two");

      var _hoisted_13 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Navigator Three");

      var _hoisted_15 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("Navigator Four");

      function render(_ctx, _cache) {
        var _component_el_radio_button = _resolveComponent("el-radio-button");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.isCollapse,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.isCollapse = $event;
          }),
          style: {
            "margin-bottom": "20px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: false
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: true
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_menu, {
          "default-active": "2",
          class: "el-menu-vertical-demo",
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose,
          collapse: _ctx.isCollapse
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_submenu, {
              index: "1"
            }, {
              title: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_6];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "1-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group Two"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "1-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_10];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_12];
              }),
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              title: _withCtx(function () {
                return [_hoisted_14];
              }),
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              title: _withCtx(function () {
                return [_hoisted_16];
              }),
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["onOpen", "onClose", "collapse"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            isCollapse: true
          };
        },
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/menu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/menu.md



menuvue_type_script_lang_ts.render = menuvue_type_template_id_1d220afe_render

/* harmony default export */ var menu = __webpack_exports__["default"] = (menuvue_type_script_lang_ts);

/***/ })

}]);