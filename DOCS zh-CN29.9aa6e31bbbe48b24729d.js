(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[311],{

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/icon.md?vue&type=template&id=07d59ed2

var iconvue_type_template_id_07d59ed2_hoisted_1 = {
  class: "content element-doc"
};

var iconvue_type_template_id_07d59ed2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h2 id=\"icon-tu-biao\"><a class=\"header-anchor\" href=\"#icon-tu-biao\">¶</a> Icon 图标</h2><p>提供了一套常用的图标集合。</p><div class=\"warning\"><p>Element Plus 团队正在将原有组件内的 <strong>Font Icon</strong> 向 <strong>SVG Icon</strong> 迁移，请多多留意 <a href=\"/#/zh-CN/component/changelog\">ChangeLog</a>, 及时获取到更新信息，<strong>Font Icon</strong> 将会在第一个正式发布被废弃，请尽快迁移</p></div><h3 id=\"svgicon-shi-yong-fang-fa\"><a class=\"header-anchor\" href=\"#svgicon-shi-yong-fang-fa\">¶</a> SvgIcon 使用方法</h3><ul><li><p>如果你想像用例一样<strong>直接使用</strong>，你需要<a href=\"https://v3.vuejs.org/guide/component-registration.html#global-registration\">全局注册组件</a>，才能够直接在项目里使用。</p></li><li><p>若想查看所有的组件，请访问 <a href=\"https://unpkg.com/browse/@element-plus/icons@latest/lib/\">@element-plus/icons</a> 和源代码 <a href=\"https://github.com/element-plus/element-plus-icons\">Github/ElementPlus/icons</a>，或者 <a href=\"/#/zh-CN/component/icon#svg-tu-biao-ji-he\">SVG 图标集合</a></p></li></ul><h3 id=\"an-zhuang-tu-biao\"><a class=\"header-anchor\" href=\"#an-zhuang-tu-biao\">¶</a> 安装图标</h3><p>当前的图标只适用于 <a href=\"https://v3.vuejs.org\">Vue3</a>。</p><h4 id=\"shi-yong-yarn\"><a class=\"header-anchor\" href=\"#shi-yong-yarn\">¶</a> 使用 yarn</h4><pre><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$</span><span class=\"bash\"> yarn add @element-plus/icons</span>\n</code></pre><h4 id=\"shi-yong-npm\"><a class=\"header-anchor\" href=\"#shi-yong-npm\">¶</a> 使用 npm</h4><pre><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$</span><span class=\"bash\"> npm install @element-plus/icons</span>\n</code></pre><h4 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h4><pre><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- 用 el-icon 为 SVG 提供属性 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-icon</span> <span class=\"hljs-attr\">:size</span>=<span class=\"hljs-string\">&quot;size&quot;</span> <span class=\"hljs-attr\">:color</span>=<span class=\"hljs-string\">&quot;color&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">edit</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-icon</span>&gt;</span>\n<span class=\"hljs-comment\">&lt;!-- 或者单独使用，不从祖先节点继承任何属性 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">edit</span> /&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">lang</span>=<span class=\"hljs-string\">&quot;ts&quot;</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">import</span> { Edit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;@element-plus/icons&#39;</span>\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n  <span class=\"hljs-attr\">components</span>: {\n    <span class=\"hljs-comment\">// 全名</span>\n    [Edit.name]: Edit,\n    <span class=\"hljs-comment\">// 或者以缩写的方式,</span>\n    Edit,\n  },\n})\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n</code></pre><h4 id=\"jie-he-el-icon-shi-yong\"><a class=\"header-anchor\" href=\"#jie-he-el-icon-shi-yong\">¶</a> 结合 <code>el-icon</code> 使用</h4>", 14);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 为 raw SVG 图标提供额外的属性, 提供的详细属性请继续阅读")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "  <p>\n    通过添加额外的类名 <b>is-loading</b>，你的图标就可以在 2 秒内旋转 360 度，但让你也可以自己改写想要的动画。\n  </p>\n  <el-icon :size=\"20\">\n    <edit />\n  </el-icon>\n  <el-icon color=\"#409EFC\" class=\"no-inherit\">\n    <share />\n  </el-icon>\n  <el-icon>\n    <delete />\n  </el-icon>\n  <el-icon class=\"is-loading\">\n    <loading />\n  </el-icon>\n  <el-button type=\"primary\">\n    <el-icon style=\"vertical-align: middle;\">\n      <search />\n    </el-icon>\n    <span style=\"vertical-align: middle;\">\n      搜索\n    </span>\n  </el-button>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h4", {
  id: "zhi-jie-shi-yong-svg-icon"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhi-jie-shi-yong-svg-icon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 直接使用 SVG icon")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "  <div style=\"font-size: 20px;\">\n    <!-- SVG icon 自身不带任何属性，你需要额外提供属性。-->\n    <edit style=\"width: 1em; height: 1em; margin-right: 8px;\" />\n    <share style=\"width: 1em; height: 1em; margin-right: 8px;\" />\n    <delete style=\"width: 1em; height: 1em; margin-right: 8px;\" />\n    <search style=\"width: 1em; height: 1em; margin-right: 8px;\" />\n  </div>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"svg-tu-biao-ji-he\"><a class=\"header-anchor\" href=\"#svg-tu-biao-ji-he\">¶</a> SVG 图标集合</h3><div class=\"tip\"><p><code>el-icon (包裹组件)</code> 更新于 <strong>ElementPlus@1.0.2-beta.66</strong>，适用于 <strong>1.0.2-beta.66(包含66)</strong> 以后的版本，你只能在该版本之后的版本使用 <code>el-icon</code>。</p><p><strong>SVG 图标可以在任意版本使用。</strong></p><p><strong>点击图标可复制到剪贴板。</strong></p></div>", 2);

var _hoisted_22 = {
  class: "icon-list"
};
var _hoisted_23 = {
  class: "demo-svg-icon"
};
var _hoisted_24 = {
  class: "icon-name"
};

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "font-icon-shi-yong-fang-fa"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#font-icon-shi-yong-fang-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Font Icon 使用方法")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("直接通过设置类名为 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-icon-iconName"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 来使用即可。例如：")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "  <i class=\"el-icon-edit\"></i>\n  <i class=\"el-icon-share\"></i>\n  <i class=\"el-icon-delete\"></i>\n  <el-button type=\"primary\" icon=\"el-icon-search\">搜索</el-button>\n")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "tu-biao-ji-he"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tu-biao-ji-he"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 图标集合")], -1);

var _hoisted_29 = {
  class: "icon-list"
};
var _hoisted_30 = {
  class: "icon-name"
};

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"svgicon-shu-xing\"><a class=\"header-anchor\" href=\"#svgicon-shu-xing\">¶</a> SvgIcon 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>svg 的 fill 颜色</td><td>Pick&lt;CSSProperties, &#39;color&#39;&gt;</td><td>-</td><td>inherit</td></tr><tr><td>size</td><td>svg 图标的大小, size x size</td><td>number</td><td>-</td><td>inherit</td></tr></tbody></table>", 2);

function iconvue_type_template_id_07d59ed2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_el_icon = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("el-icon");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", iconvue_type_template_id_07d59ed2_hoisted_1, [iconvue_type_template_id_07d59ed2_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])("ul", _hoisted_22, [(Object(vue_esm_browser_prod["H" /* openBlock */])(true), Object(vue_esm_browser_prod["k" /* createBlock */])(vue_esm_browser_prod["b" /* Fragment */], null, Object(vue_esm_browser_prod["O" /* renderList */])(_ctx.$svgIcons, function (component) {
    return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("li", {
      key: component,
      onClick: function onClick($event) {
        return _ctx.$copySvgIcon(component);
      }
    }, [Object(vue_esm_browser_prod["p" /* createVNode */])("span", _hoisted_23, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_el_icon, {
      color: "#000"
    }, {
      default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
        return [(Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])(Object(vue_esm_browser_prod["S" /* resolveDynamicComponent */])(component)))];
      }),
      _: 2
    }, 1024), Object(vue_esm_browser_prod["p" /* createVNode */])("span", _hoisted_24, Object(vue_esm_browser_prod["U" /* toDisplayString */])(component), 1)])], 8, ["onClick"]);
  }), 128))]), _hoisted_25, _hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])("ul", _hoisted_29, [(Object(vue_esm_browser_prod["H" /* openBlock */])(true), Object(vue_esm_browser_prod["k" /* createBlock */])(vue_esm_browser_prod["b" /* Fragment */], null, Object(vue_esm_browser_prod["O" /* renderList */])(_ctx.$icon, function (name) {
    return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("li", {
      key: name
    }, [Object(vue_esm_browser_prod["p" /* createVNode */])("span", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("i", {
      class: 'el-icon-' + name
    }, null, 2), Object(vue_esm_browser_prod["p" /* createVNode */])("span", _hoisted_30, Object(vue_esm_browser_prod["U" /* toDisplayString */])('el-icon-' + name), 1)])]);
  }), 128))]), _hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/icon.md?vue&type=template&id=07d59ed2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/icon.md?vue&type=script&lang=ts


/* harmony default export */ var iconvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, [/*#__PURE__*/_createTextVNode(" 通过添加额外的类名 "), /*#__PURE__*/_createVNode("b", null, "is-loading"), /*#__PURE__*/_createTextVNode("，你的图标就可以在 2 秒内旋转 360 度，但让你也可以自己改写想要的动画。 ")], -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        style: {
          "vertical-align": "middle"
        }
      }, " 搜索 ", -1);

      function render(_ctx, _cache) {
        var _component_edit = _resolveComponent("edit");

        var _component_el_icon = _resolveComponent("el-icon");

        var _component_share = _resolveComponent("share");

        var _component_delete = _resolveComponent("delete");

        var _component_loading = _resolveComponent("loading");

        var _component_search = _resolveComponent("search");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _createVNode(_component_el_icon, {
          size: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_edit)];
          }),
          _: 1
        }), _createVNode(_component_el_icon, {
          color: "#409EFC",
          class: "no-inherit"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_share)];
          }),
          _: 1
        }), _createVNode(_component_el_icon, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_delete)];
          }),
          _: 1
        }), _createVNode(_component_el_icon, {
          class: "is-loading"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_loading)];
          }),
          _: 1
        }), _createVNode(_component_el_button, {
          type: "primary"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_icon, {
              style: {
                "vertical-align": "middle"
              }
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_search)];
              }),
              _: 1
            }), _hoisted_2];
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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "font-size": "20px"
        }
      };

      function render(_ctx, _cache) {
        var _component_edit = _resolveComponent("edit");

        var _component_share = _resolveComponent("share");

        var _component_delete = _resolveComponent("delete");

        var _component_search = _resolveComponent("search");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_edit, {
          style: {
            "width": "1em",
            "height": "1em",
            "margin-right": "8px"
          }
        }), _createVNode(_component_share, {
          style: {
            "width": "1em",
            "height": "1em",
            "margin-right": "8px"
          }
        }), _createVNode(_component_delete, {
          style: {
            "width": "1em",
            "height": "1em",
            "margin-right": "8px"
          }
        }), _createVNode(_component_search, {
          style: {
            "width": "1em",
            "height": "1em",
            "margin-right": "8px"
          }
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-edit"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-share"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-delete"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("搜索");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _hoisted_2, _hoisted_3, _createVNode(_component_el_button, {
          type: "primary",
          icon: "el-icon-search"
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/icon.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/icon.md



iconvue_type_script_lang_ts.render = iconvue_type_template_id_07d59ed2_render

/* harmony default export */ var icon = __webpack_exports__["default"] = (iconvue_type_script_lang_ts);

/***/ })

}]);