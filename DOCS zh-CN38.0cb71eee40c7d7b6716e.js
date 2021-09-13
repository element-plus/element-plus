(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[321],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/menu.md?vue&type=template&id=81ca898a

const menuvue_type_template_id_81ca898a_hoisted_1 = {
  class: "content element-doc"
};

const menuvue_type_template_id_81ca898a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("NavMenu 导航菜单 ");

const menuvue_type_template_id_81ca898a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "为网站提供导航功能的菜单。", -1);

const menuvue_type_template_id_81ca898a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("顶栏 ");

const menuvue_type_template_id_81ca898a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "适用广泛的基础用法。", -1);

const menuvue_type_template_id_81ca898a_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("导航菜单默认为垂直模式，通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mode"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性可以使导航菜单变更为水平模式。另外，在菜单中通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sub-menu"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("组件可以生成二级菜单。Menu 还提供了"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "background-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "text-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "active-text-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。")])], -1);

const menuvue_type_template_id_81ca898a_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-menu\n  :default-active=\"activeIndex\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n>\n  <el-menu-item index=\"1\">处理中心</el-menu-item>\n  <el-sub-menu index=\"2\">\n    <template #title>我的工作台</template>\n    <el-menu-item index=\"2-1\">选项1</el-menu-item>\n    <el-menu-item index=\"2-2\">选项2</el-menu-item>\n    <el-menu-item index=\"2-3\">选项3</el-menu-item>\n    <el-sub-menu index=\"2-4\">\n      <template #title>选项4</template>\n      <el-menu-item index=\"2-4-1\">选项1</el-menu-item>\n      <el-menu-item index=\"2-4-2\">选项2</el-menu-item>\n      <el-menu-item index=\"2-4-3\">选项3</el-menu-item>\n    </el-sub-menu>\n  </el-sub-menu>\n  <el-menu-item index=\"3\" disabled>消息中心</el-menu-item>\n  <el-menu-item index=\"4\">订单管理</el-menu-item>\n</el-menu>\n<div class=\"line\"></div>\n<el-menu\n  :default-active=\"activeIndex2\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n  background-color=\"#545c64\"\n  text-color=\"#fff\"\n  active-text-color=\"#ffd04b\"\n>\n  <el-menu-item index=\"1\">处理中心</el-menu-item>\n  <el-sub-menu index=\"2\">\n    <template #title>我的工作台</template>\n    <el-menu-item index=\"2-1\">选项1</el-menu-item>\n    <el-menu-item index=\"2-2\">选项2</el-menu-item>\n    <el-menu-item index=\"2-3\">选项3</el-menu-item>\n    <el-sub-menu index=\"2-4\">\n      <template #title>选项4</template>\n      <el-menu-item index=\"2-4-1\">选项1</el-menu-item>\n      <el-menu-item index=\"2-4-2\">选项2</el-menu-item>\n      <el-menu-item index=\"2-4-3\">选项3</el-menu-item>\n    </el-sub-menu>\n  </el-sub-menu>\n  <el-menu-item index=\"3\" disabled>消息中心</el-menu-item>\n  <el-menu-item index=\"4\">订单管理</el-menu-item>\n</el-menu>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: '1',\n        activeIndex2: '1',\n      }\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeIndex = ref('1');\n      const activeIndex2 = ref('1');\n      const handleSelect = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        activeIndex,\n        activeIndex2,\n        handleSelect,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_81ca898a_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("侧栏 ");

const menuvue_type_template_id_81ca898a_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "垂直菜单，可内嵌子菜单。", -1);

const menuvue_type_template_id_81ca898a_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-menu-item-group"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("组件可以实现菜单进行分组，分组名可以通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性直接设定，也可以通过具名 slot 来设定。")])], -1);

const menuvue_type_template_id_81ca898a_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-row class=\"tac\">\n  <el-col :span=\"12\">\n    <h5>默认颜色</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n    >\n      <el-sub-menu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>导航一</span>\n        </template>\n        <el-menu-item-group>\n          <template #title>分组一</template>\n          <el-menu-item index=\"1-1\">选项1</el-menu-item>\n          <el-menu-item index=\"1-2\">选项2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"分组2\">\n          <el-menu-item index=\"1-3\">选项3</el-menu-item>\n        </el-menu-item-group>\n        <el-sub-menu index=\"1-4\">\n          <template #title>选项4</template>\n          <el-menu-item index=\"1-4-1\">选项1</el-menu-item>\n        </el-sub-menu>\n      </el-sub-menu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <template #title>导航二</template>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <template #title>导航三</template>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <template #title>导航四</template>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n  <el-col :span=\"12\">\n    <h5>自定义颜色</h5>\n    <el-menu\n      :uniqueOpened=\"true\"\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n      background-color=\"#545c64\"\n      text-color=\"#fff\"\n      active-text-color=\"#ffd04b\"\n    >\n      <el-sub-menu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>导航一</span>\n        </template>\n        <el-menu-item-group>\n          <template #title>分组一</template>\n          <el-menu-item index=\"1-1\">选项1</el-menu-item>\n          <el-menu-item index=\"1-2\">选项2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"分组2\">\n          <el-menu-item index=\"1-3\">选项3</el-menu-item>\n        </el-menu-item-group>\n        <el-sub-menu index=\"1-4\">\n          <template #title>选项4</template>\n          <el-menu-item index=\"1-4-1\">选项1</el-menu-item>\n        </el-sub-menu>\n      </el-sub-menu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <template #title>导航二</template>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <template #title>导航三</template>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <template #title>导航四</template>\n      </el-menu-item>\n      <el-sub-menu index=\"5\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>导航一</span>\n        </template>\n        <el-menu-item-group>\n          <template #title>分组一</template>\n          <el-menu-item index=\"5-1\">选项1</el-menu-item>\n          <el-menu-item index=\"5-2\">选项2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"分组2\">\n          <el-menu-item index=\"5-3\">选项3</el-menu-item>\n        </el-menu-item-group>\n      </el-sub-menu>\n    </el-menu>\n  </el-col>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath)\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleOpen = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      const handleClose = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        handleOpen,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_81ca898a_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("折叠 ");

const menuvue_type_template_id_81ca898a_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-radio-group v-model=\"isCollapse\" style=\"margin-bottom: 20px;\">\n  <el-radio-button :label=\"false\">展开</el-radio-button>\n  <el-radio-button :label=\"true\">收起</el-radio-button>\n</el-radio-group>\n<el-menu\n  default-active=\"1-4-1\"\n  class=\"el-menu-vertical-demo\"\n  @open=\"handleOpen\"\n  @close=\"handleClose\"\n  :collapse=\"isCollapse\"\n>\n  <el-sub-menu index=\"1\">\n    <template #title>\n      <i class=\"el-icon-location\"></i>\n      <span>导航一</span>\n    </template>\n    <el-menu-item-group>\n      <template #title>分组一</template>\n      <el-menu-item index=\"1-1\">选项1</el-menu-item>\n      <el-menu-item index=\"1-2\">选项2</el-menu-item>\n    </el-menu-item-group>\n    <el-menu-item-group title=\"分组2\">\n      <el-menu-item index=\"1-3\">选项3</el-menu-item>\n    </el-menu-item-group>\n    <el-sub-menu index=\"1-4\">\n      <template #title>选项4</template>\n      <el-menu-item index=\"1-4-1\">选项1</el-menu-item>\n    </el-sub-menu>\n  </el-sub-menu>\n  <el-menu-item index=\"2\">\n    <i class=\"el-icon-menu\"></i>\n    <template #title>导航二</template>\n  </el-menu-item>\n  <el-menu-item index=\"3\" disabled>\n    <i class=\"el-icon-document\"></i>\n    <template #title>导航三</template>\n  </el-menu-item>\n  <el-menu-item index=\"4\">\n    <i class=\"el-icon-setting\"></i>\n    <template #title>导航四</template>\n  </el-menu-item>\n</el-menu>\n\n<style>\n  .el-menu-vertical-demo:not(.el-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true,\n      }\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath)\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const isCollapse = ref(true);\n      const handleOpen = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      const handleClose = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        isCollapse,\n        handleOpen,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_81ca898a_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Menu Attribute ");

const menuvue_type_template_id_81ca898a_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>mode</td><td>模式</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>菜单的背景色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>菜单的文字颜色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>当前激活菜单的文字颜色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>当前激活菜单的 index</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>当前打开的 sub-menu 的 index 的数组</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>是否只保持一个子菜单的展开</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>子菜单打开的触发方式(只在 mode 为 horizontal 时有效)</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>是否开启折叠动画</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table>", 1);

const menuvue_type_template_id_81ca898a_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Menu Methods ");

const menuvue_type_template_id_81ca898a_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>方法名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>open</td><td>展开指定的 sub-menu</td><td>index: 需要打开的 sub-menu 的 index</td></tr><tr><td>close</td><td>收起指定的 sub-menu</td><td>index: 需要收起的 sub-menu 的 index</td></tr></tbody></table>", 1);

const menuvue_type_template_id_81ca898a_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Menu Events ");

const menuvue_type_template_id_81ca898a_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>菜单激活回调</td><td>index: 选中菜单项的 index, indexPath: 选中菜单项的 index path, item: 选中菜单项, routeResult: vue-router 的返回值（如果 router 为 true）</td></tr><tr><td>open</td><td>sub-menu 展开的回调</td><td>index: 打开的 sub-menu 的 index, indexPath: 打开的 sub-menu 的 index path</td></tr><tr><td>close</td><td>sub-menu 收起的回调</td><td>index: 收起的 sub-menu 的 index, indexPath: 收起的 sub-menu 的 index path</td></tr></tbody></table>", 1);

const menuvue_type_template_id_81ca898a_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("SubMenu Attribute ");

const menuvue_type_template_id_81ca898a_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>唯一标志</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>popper-class</td><td>弹出菜单的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>展开 sub-menu 的延时</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>收起 sub-menu 的延时</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性</td><td>boolean</td><td>—</td><td>一级子菜单：true / 非一级子菜单：false</td></tr></tbody></table>", 1);

const menuvue_type_template_id_81ca898a_hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Menu-Item Attribute ");

const menuvue_type_template_id_81ca898a_hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>唯一标志</td><td>string</td><td>—</td><td>—</td></tr><tr><td>route</td><td>Vue Router 路径对象</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const menuvue_type_template_id_81ca898a_hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Menu-Group Attribute ");

const menuvue_type_template_id_81ca898a_hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>分组标题</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function menuvue_type_template_id_81ca898a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", menuvue_type_template_id_81ca898a_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "navmenu-dao-hang-cai-dan",
    content: "NavMenu 导航菜单",
    href: "#navmenu-dao-hang-cai-dan",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#navmenu-dao-hang-cai-dan"
    })]),
    _: 1
  }), menuvue_type_template_id_81ca898a_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ding-lan",
    content: "顶栏",
    href: "#ding-lan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ding-lan"
    })]),
    _: 1
  }), menuvue_type_template_id_81ca898a_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ce-lan",
    content: "侧栏",
    href: "#ce-lan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ce-lan"
    })]),
    _: 1
  }), menuvue_type_template_id_81ca898a_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zhe-die",
    content: "折叠",
    href: "#zhe-die",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zhe-die"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "menu-attribute",
    content: "Menu Attribute",
    href: "#menu-attribute",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#menu-attribute"
    })]),
    _: 1
  }), menuvue_type_template_id_81ca898a_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "menu-methods",
    content: "Menu Methods",
    href: "#menu-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#menu-methods"
    })]),
    _: 1
  }), menuvue_type_template_id_81ca898a_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "menu-events",
    content: "Menu Events",
    href: "#menu-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#menu-events"
    })]),
    _: 1
  }), menuvue_type_template_id_81ca898a_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "submenu-attribute",
    content: "SubMenu Attribute",
    href: "#submenu-attribute",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#submenu-attribute"
    })]),
    _: 1
  }), menuvue_type_template_id_81ca898a_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "menu-item-attribute",
    content: "Menu-Item Attribute",
    href: "#menu-item-attribute",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#menu-item-attribute"
    })]),
    _: 1
  }), menuvue_type_template_id_81ca898a_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "menu-group-attribute",
    content: "Menu-Group Attribute",
    href: "#menu-group-attribute",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_81ca898a_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#menu-group-attribute"
    })]),
    _: 1
  }), menuvue_type_template_id_81ca898a_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/menu.md?vue&type=template&id=81ca898a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/menu.md?vue&type=script&lang=ts

/* harmony default export */ var menuvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("处理中心");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("我的工作台");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("选项3");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("选项4");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("选项3");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("消息中心");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("订单管理");

      const _hoisted_12 = /*#__PURE__*/_createElementVNode("div", {
        class: "line"
      }, null, -1);

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("处理中心");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("我的工作台");

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("选项3");

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("选项4");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("选项3");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("消息中心");

      const _hoisted_23 = /*#__PURE__*/_createTextVNode("订单管理");

      function render(_ctx, _cache) {
        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_sub_menu = _resolveComponent("el-sub-menu");

        const _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, {
          default: _withCtx(() => [_createVNode(_component_el_menu_item, {
            index: "1"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_sub_menu, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_2]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item, {
              index: "2-1"
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-2"
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-3"
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }), _createVNode(_component_el_sub_menu, {
              index: "2-4"
            }, {
              title: _withCtx(() => [_hoisted_6]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "2-4-1"
              }, {
                default: _withCtx(() => [_hoisted_7]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-2"
              }, {
                default: _withCtx(() => [_hoisted_8]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-3"
              }, {
                default: _withCtx(() => [_hoisted_9]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            default: _withCtx(() => [_hoisted_10]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          })]),
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
          default: _withCtx(() => [_createVNode(_component_el_menu_item, {
            index: "1"
          }, {
            default: _withCtx(() => [_hoisted_13]),
            _: 1
          }), _createVNode(_component_el_sub_menu, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_14]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item, {
              index: "2-1"
            }, {
              default: _withCtx(() => [_hoisted_15]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-2"
            }, {
              default: _withCtx(() => [_hoisted_16]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-3"
            }, {
              default: _withCtx(() => [_hoisted_17]),
              _: 1
            }), _createVNode(_component_el_sub_menu, {
              index: "2-4"
            }, {
              title: _withCtx(() => [_hoisted_18]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "2-4-1"
              }, {
                default: _withCtx(() => [_hoisted_19]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-2"
              }, {
                default: _withCtx(() => [_hoisted_20]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-3"
              }, {
                default: _withCtx(() => [_hoisted_21]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            default: _withCtx(() => [_hoisted_22]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            default: _withCtx(() => [_hoisted_23]),
            _: 1
          })]),
          _: 1
        }, 8, ["default-active", "onSelect"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },

        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("h5", null, "默认颜色", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", null, "导航一", -1);

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("分组一");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("选项3");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("选项4");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_10 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("导航二");

      const _hoisted_12 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("导航三");

      const _hoisted_14 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("导航四");

      const _hoisted_16 = /*#__PURE__*/_createElementVNode("h5", null, "自定义颜色", -1);

      const _hoisted_17 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_18 = /*#__PURE__*/_createElementVNode("span", null, "导航一", -1);

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("分组一");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("选项3");

      const _hoisted_23 = /*#__PURE__*/_createTextVNode("选项4");

      const _hoisted_24 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_25 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_26 = /*#__PURE__*/_createTextVNode("导航二");

      const _hoisted_27 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_28 = /*#__PURE__*/_createTextVNode("导航三");

      const _hoisted_29 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_30 = /*#__PURE__*/_createTextVNode("导航四");

      const _hoisted_31 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_32 = /*#__PURE__*/_createElementVNode("span", null, "导航一", -1);

      const _hoisted_33 = /*#__PURE__*/_createTextVNode("分组一");

      const _hoisted_34 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_35 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_36 = /*#__PURE__*/_createTextVNode("选项3");

      function render(_ctx, _cache) {
        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        const _component_el_sub_menu = _resolveComponent("el-sub-menu");

        const _component_el_menu = _resolveComponent("el-menu");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          class: "tac"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_1, _createVNode(_component_el_menu, {
              "default-active": "2",
              class: "el-menu-vertical-demo",
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose
            }, {
              default: _withCtx(() => [_createVNode(_component_el_sub_menu, {
                index: "1"
              }, {
                title: _withCtx(() => [_hoisted_2, _hoisted_3]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(() => [_hoisted_4]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-1"
                  }, {
                    default: _withCtx(() => [_hoisted_5]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "1-2"
                  }, {
                    default: _withCtx(() => [_hoisted_6]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "分组2"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-3"
                  }, {
                    default: _withCtx(() => [_hoisted_7]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_sub_menu, {
                  index: "1-4"
                }, {
                  title: _withCtx(() => [_hoisted_8]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_9]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2"
              }, {
                title: _withCtx(() => [_hoisted_11]),
                default: _withCtx(() => [_hoisted_10]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                title: _withCtx(() => [_hoisted_13]),
                default: _withCtx(() => [_hoisted_12]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "4"
              }, {
                title: _withCtx(() => [_hoisted_15]),
                default: _withCtx(() => [_hoisted_14]),
                _: 1
              })]),
              _: 1
            }, 8, ["onOpen", "onClose"])]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_16, _createVNode(_component_el_menu, {
              uniqueOpened: true,
              "default-active": "2",
              class: "el-menu-vertical-demo",
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose,
              "background-color": "#545c64",
              "text-color": "#fff",
              "active-text-color": "#ffd04b"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_sub_menu, {
                index: "1"
              }, {
                title: _withCtx(() => [_hoisted_17, _hoisted_18]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(() => [_hoisted_19]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-1"
                  }, {
                    default: _withCtx(() => [_hoisted_20]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "1-2"
                  }, {
                    default: _withCtx(() => [_hoisted_21]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "分组2"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-3"
                  }, {
                    default: _withCtx(() => [_hoisted_22]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_sub_menu, {
                  index: "1-4"
                }, {
                  title: _withCtx(() => [_hoisted_23]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_24]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2"
              }, {
                title: _withCtx(() => [_hoisted_26]),
                default: _withCtx(() => [_hoisted_25]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                title: _withCtx(() => [_hoisted_28]),
                default: _withCtx(() => [_hoisted_27]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "4"
              }, {
                title: _withCtx(() => [_hoisted_30]),
                default: _withCtx(() => [_hoisted_29]),
                _: 1
              }), _createVNode(_component_el_sub_menu, {
                index: "5"
              }, {
                title: _withCtx(() => [_hoisted_31, _hoisted_32]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(() => [_hoisted_33]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "5-1"
                  }, {
                    default: _withCtx(() => [_hoisted_34]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "5-2"
                  }, {
                    default: _withCtx(() => [_hoisted_35]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "分组2"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "5-3"
                  }, {
                    default: _withCtx(() => [_hoisted_36]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }, 8, ["onOpen", "onClose"])]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },

          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("展开");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("收起");

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", null, "导航一", -1);

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("分组一");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("选项3");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("选项4");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("导航二");

      const _hoisted_13 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("导航三");

      const _hoisted_15 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("导航四");

      function render(_ctx, _cache) {
        const _component_el_radio_button = _resolveComponent("el-radio-button");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        const _component_el_sub_menu = _resolveComponent("el-sub-menu");

        const _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.isCollapse,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.isCollapse = $event),
          style: {
            "margin-bottom": "20px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio_button, {
            label: false
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: true
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_menu, {
          "default-active": "1-4-1",
          class: "el-menu-vertical-demo",
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose,
          collapse: _ctx.isCollapse
        }, {
          default: _withCtx(() => [_createVNode(_component_el_sub_menu, {
            index: "1"
          }, {
            title: _withCtx(() => [_hoisted_3, _hoisted_4]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
              title: _withCtx(() => [_hoisted_5]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-1"
              }, {
                default: _withCtx(() => [_hoisted_6]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "1-2"
              }, {
                default: _withCtx(() => [_hoisted_7]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_el_menu_item_group, {
              title: "分组2"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-3"
              }, {
                default: _withCtx(() => [_hoisted_8]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_el_sub_menu, {
              index: "1-4"
            }, {
              title: _withCtx(() => [_hoisted_9]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-4-1"
              }, {
                default: _withCtx(() => [_hoisted_10]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_12]),
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            title: _withCtx(() => [_hoisted_14]),
            default: _withCtx(() => [_hoisted_13]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            title: _withCtx(() => [_hoisted_16]),
            default: _withCtx(() => [_hoisted_15]),
            _: 1
          })]),
          _: 1
        }, 8, ["onOpen", "onClose", "collapse"])]);
      }

      const democomponentExport = {
        data() {
          return {
            isCollapse: true
          };
        },

        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },

          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/menu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/menu.md



menuvue_type_script_lang_ts.render = menuvue_type_template_id_81ca898a_render

/* harmony default export */ var menu = __webpack_exports__["default"] = (menuvue_type_script_lang_ts);

/***/ })

}]);