(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[216],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/infiniteScroll.md?vue&type=template&id=82b17f66

var infiniteScrollvue_type_template_id_82b17f66_hoisted_1 = {
  class: "content element-doc"
};

var infiniteScrollvue_type_template_id_82b17f66_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "infinitescroll-wu-xian-gun-dong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#infinitescroll-wu-xian-gun-dong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" InfiniteScroll 无限滚动")], -1);

var infiniteScrollvue_type_template_id_82b17f66_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "滚动至底部时，加载更多数据。", -1);

var infiniteScrollvue_type_template_id_82b17f66_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var infiniteScrollvue_type_template_id_82b17f66_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("在要实现滚动加载的列表上上添加"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-infinite-scroll"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <ul class=\"infinite-list\" v-infinite-scroll=\"load\" style=\"overflow:auto\">\n    <li v-for=\"i in count\" class=\"infinite-list-item\">{{ i }}</li>\n  </ul>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        count: 0\n      }\n    },\n    methods: {\n      load () {\n        this.count += 2\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "jin-yong-jia-zai"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-jia-zai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 禁用加载")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"infinite-list-wrapper\" style=\"overflow:auto\">\n    <ul\n      class=\"list\"\n      v-infinite-scroll=\"load\"\n      infinite-scroll-disabled=\"disabled\">\n      <li v-for=\"i in count\" class=\"list-item\">{{ i }}</li>\n    </ul>\n    <p v-if=\"loading\">加载中...</p>\n    <p v-if=\"noMore\">没有更多了</p>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        count: 10,\n        loading: false\n      }\n    },\n    computed: {\n      noMore () {\n        return this.count >= 20\n      },\n      disabled () {\n        return this.loading || this.noMore\n      }\n    },\n    methods: {\n      load () {\n        this.loading = true\n        setTimeout(() => {\n          this.count += 2\n          this.loading = false\n        }, 2000)\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>是否禁用</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>节流时延，单位为ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>触发加载的距离阈值，单位为px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>是否立即执行加载方法，以防初始状态下内容无法撑满容器。</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>", 2);

function infiniteScrollvue_type_template_id_82b17f66_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", infiniteScrollvue_type_template_id_82b17f66_hoisted_1, [infiniteScrollvue_type_template_id_82b17f66_hoisted_2, infiniteScrollvue_type_template_id_82b17f66_hoisted_3, infiniteScrollvue_type_template_id_82b17f66_hoisted_4, infiniteScrollvue_type_template_id_82b17f66_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/infiniteScroll.md?vue&type=template&id=82b17f66

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/infiniteScroll.md?vue&type=script&lang=ts


/* harmony default export */ var infiniteScrollvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */];
      var _hoisted_1 = {
        class: "infinite-list",
        style: {
          "overflow": "auto"
        }
      };
      var _hoisted_2 = {
        class: "infinite-list-item"
      };

      function render(_ctx, _cache) {
        var _directive_infinite_scroll = _resolveDirective("infinite-scroll");

        return _openBlock(), _createBlock("div", null, [_withDirectives(_createVNode("ul", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.count, function (i) {
          return _openBlock(), _createBlock("li", _hoisted_2, _toDisplayString(i), 1);
        }), 256))], 512), [[_directive_infinite_scroll, _ctx.load]])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            count: 0
          };
        },
        methods: {
          load: function load() {
            this.count += 2;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _createCommentVNode = vue_esm_browser["k" /* createCommentVNode */];
      var _hoisted_1 = {
        class: "infinite-list-wrapper",
        style: {
          "overflow": "auto"
        }
      };
      var _hoisted_2 = {
        class: "list",
        "infinite-scroll-disabled": "disabled"
      };
      var _hoisted_3 = {
        class: "list-item"
      };
      var _hoisted_4 = {
        key: 0
      };
      var _hoisted_5 = {
        key: 1
      };

      function render(_ctx, _cache) {
        var _directive_infinite_scroll = _resolveDirective("infinite-scroll");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_withDirectives(_createVNode("ul", _hoisted_2, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.count, function (i) {
          return _openBlock(), _createBlock("li", _hoisted_3, _toDisplayString(i), 1);
        }), 256))], 512), [[_directive_infinite_scroll, _ctx.load]]), _ctx.loading ? (_openBlock(), _createBlock("p", _hoisted_4, "加载中...")) : _createCommentVNode("", true), _ctx.noMore ? (_openBlock(), _createBlock("p", _hoisted_5, "没有更多了")) : _createCommentVNode("", true)])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            count: 10,
            loading: false
          };
        },
        computed: {
          noMore: function noMore() {
            return this.count >= 20;
          },
          disabled: function disabled() {
            return this.loading || this.noMore;
          }
        },
        methods: {
          load: function load() {
            var _this = this;

            this.loading = true;
            setTimeout(function () {
              _this.count += 2;
              _this.loading = false;
            }, 2000);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/infiniteScroll.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/infiniteScroll.md



infiniteScrollvue_type_script_lang_ts.render = infiniteScrollvue_type_template_id_82b17f66_render

/* harmony default export */ var infiniteScroll = __webpack_exports__["default"] = (infiniteScrollvue_type_script_lang_ts);

/***/ })

}]);