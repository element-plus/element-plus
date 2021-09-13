(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[336],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/result.md?vue&type=template&id=1d696e6d

const resultvue_type_template_id_1d696e6d_hoisted_1 = {
  class: "content element-doc"
};

const resultvue_type_template_id_1d696e6d_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Result 结果 ");

const resultvue_type_template_id_1d696e6d_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "用于对用户的操作结果或者异常状态做反馈。", -1);

const resultvue_type_template_id_1d696e6d_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-row>\n  <el-col :sm=\"12\" :lg=\"6\">\n    <el-result icon=\"success\" title=\"成功提示\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <el-button type=\"primary\" size=\"medium\">返回</el-button>\n      </template>\n    </el-result>\n  </el-col>\n  <el-col :sm=\"12\" :lg=\"6\">\n    <el-result icon=\"warning\" title=\"警告提示\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <el-button type=\"primary\" size=\"medium\">返回</el-button>\n      </template>\n    </el-result>\n  </el-col>\n  <el-col :sm=\"12\" :lg=\"6\">\n    <el-result icon=\"error\" title=\"错误提示\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <el-button type=\"primary\" size=\"medium\">返回</el-button>\n      </template>\n    </el-result>\n  </el-col>\n  <el-col :sm=\"12\" :lg=\"6\">\n    <el-result icon=\"info\" title=\"信息提示\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <el-button type=\"primary\" size=\"medium\">返回</el-button>\n      </template>\n    </el-result>\n  </el-col>\n</el-row>\n")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义内容 ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-result title=\"404\" subTitle=\"抱歉，请求错误\">\n  <template #icon>\n    <el-image\n      src=\"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png\"\n    ></el-image>\n  </template>\n  <template #extra>\n    <el-button type=\"primary\" size=\"medium\">返回</el-button>\n  </template>\n</el-result>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Result Attributes ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>sub-title</td><td>二级标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>图标类型</td><td>string</td><td>success / warning / info / error</td><td>info</td></tr></tbody></table>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Result Slots ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>subTitle</td><td>自定义二级标题</td></tr><tr><td>extra</td><td>自定义底部额外区域</td></tr></tbody></table>", 1);

function resultvue_type_template_id_1d696e6d_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", resultvue_type_template_id_1d696e6d_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "result-jie-guo",
    content: "Result 结果",
    href: "#result-jie-guo",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [resultvue_type_template_id_1d696e6d_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#result-jie-guo"
    })]),
    _: 1
  }), resultvue_type_template_id_1d696e6d_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [resultvue_type_template_id_1d696e6d_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-nei-rong",
    content: "自定义内容",
    href: "#zi-ding-yi-nei-rong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-nei-rong"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "result-attributes",
    content: "Result Attributes",
    href: "#result-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#result-attributes"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "result-slots",
    content: "Result Slots",
    href: "#result-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#result-slots"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/result.md?vue&type=template&id=1d696e6d

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/result.md?vue&type=script&lang=ts

/* harmony default export */ var resultvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("返回");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("返回");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("返回");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("返回");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_result = _resolveComponent("el-result");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, null, {
          default: _withCtx(() => [_createVNode(_component_el_col, {
            sm: 12,
            lg: 6
          }, {
            default: _withCtx(() => [_createVNode(_component_el_result, {
              icon: "success",
              title: "成功提示",
              subTitle: "请根据提示进行操作"
            }, {
              extra: _withCtx(() => [_createVNode(_component_el_button, {
                type: "primary",
                size: "medium"
              }, {
                default: _withCtx(() => [_hoisted_1]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_col, {
            sm: 12,
            lg: 6
          }, {
            default: _withCtx(() => [_createVNode(_component_el_result, {
              icon: "warning",
              title: "警告提示",
              subTitle: "请根据提示进行操作"
            }, {
              extra: _withCtx(() => [_createVNode(_component_el_button, {
                type: "primary",
                size: "medium"
              }, {
                default: _withCtx(() => [_hoisted_2]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_col, {
            sm: 12,
            lg: 6
          }, {
            default: _withCtx(() => [_createVNode(_component_el_result, {
              icon: "error",
              title: "错误提示",
              subTitle: "请根据提示进行操作"
            }, {
              extra: _withCtx(() => [_createVNode(_component_el_button, {
                type: "primary",
                size: "medium"
              }, {
                default: _withCtx(() => [_hoisted_3]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_col, {
            sm: 12,
            lg: 6
          }, {
            default: _withCtx(() => [_createVNode(_component_el_result, {
              icon: "info",
              title: "信息提示",
              subTitle: "请根据提示进行操作"
            }, {
              extra: _withCtx(() => [_createVNode(_component_el_button, {
                type: "primary",
                size: "medium"
              }, {
                default: _withCtx(() => [_hoisted_4]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]);
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
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("返回");

      function render(_ctx, _cache) {
        const _component_el_image = _resolveComponent("el-image");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_result = _resolveComponent("el-result");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_result, {
          title: "404",
          subTitle: "抱歉，请求错误"
        }, {
          icon: _withCtx(() => [_createVNode(_component_el_image, {
            src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          })]),
          extra: _withCtx(() => [_createVNode(_component_el_button, {
            type: "primary",
            size: "medium"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
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
// CONCATENATED MODULE: ./website/docs/zh-CN/result.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/result.md



resultvue_type_script_lang_ts.render = resultvue_type_template_id_1d696e6d_render

/* harmony default export */ var result = __webpack_exports__["default"] = (resultvue_type_script_lang_ts);

/***/ })

}]);