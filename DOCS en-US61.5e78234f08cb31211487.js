(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/transition.md?vue&type=template&id=3166cf6a

var transitionvue_type_template_id_3166cf6a_hoisted_1 = {
  class: "content element-doc"
};

var transitionvue_type_template_id_3166cf6a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"built-in-transition\"><a class=\"header-anchor\" href=\"#built-in-transition\">¶</a> Built-in transition</h2><p>You can use Element&#39;s built-in transitions directly. Before that, please read the <a href=\"https://vuejs.org/v2/api/#transition\">transition docs</a>.</p><h3 id=\"fade\"><a class=\"header-anchor\" href=\"#fade\">¶</a> fade</h3>", 3);

var transitionvue_type_template_id_3166cf6a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("We have two fading effects: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-fade-in-linear"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-fade-in"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-button @click=\"show = !show\">Click Me</el-button>\n\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"el-fade-in-linear\">\n        <div v-show=\"show\" class=\"transition-box\">.el-fade-in-linear</div>\n      </transition>\n      <transition name=\"el-fade-in\">\n        <div v-show=\"show\" class=\"transition-box\">.el-fade-in</div>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\n    export default {\n    data: () => ({\n      show: true\n    })\n  }\n</script>\n\n<style>\n  .transition-box {\n    margin-bottom: 10px;\n    width: 200px;\n    height: 100px;\n    border-radius: 4px;\n    background-color: #409EFF;\n    text-align: center;\n    color: #fff;\n    padding: 40px 20px;\n    box-sizing: border-box;\n    margin-right: 20px;\n  }\n</style>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zoom"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zoom"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" zoom")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-zoom-in-center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-zoom-in-top"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-zoom-in-bottom"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" are provided.")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-button @click=\"show2 = !show2\">Click Me</el-button>\n\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"el-zoom-in-center\">\n        <div v-show=\"show2\" class=\"transition-box\">.el-zoom-in-center</div>\n      </transition>\n\n      <transition name=\"el-zoom-in-top\">\n        <div v-show=\"show2\" class=\"transition-box\">.el-zoom-in-top</div>\n      </transition>\n\n      <transition name=\"el-zoom-in-bottom\">\n        <div v-show=\"show2\" class=\"transition-box\">.el-zoom-in-bottom</div>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\n    export default {\n    data: () => ({\n      show2: true\n    })\n  }\n</script>\n\n<style>\n  .transition-box {\n    margin-bottom: 10px;\n    width: 200px;\n    height: 100px;\n    border-radius: 4px;\n    background-color: #409EFF;\n    text-align: center;\n    color: #fff;\n    padding: 40px 20px;\n    box-sizing: border-box;\n    margin-right: 20px;\n  }\n</style>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "collapse"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#collapse"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" collapse")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("For collapse effect, use the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-collapse-transition"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" component.")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-button @click=\"show3 = !show3\">Click Me</el-button>\n\n    <div style=\"margin-top: 20px; height: 200px;\">\n      <el-collapse-transition>\n        <div v-show=\"show3\">\n          <div class=\"transition-box\">el-collapse-transition</div>\n          <div class=\"transition-box\">el-collapse-transition</div>\n        </div>\n      </el-collapse-transition>\n    </div>\n  </div>\n</template>\n\n<script>\n    export default {\n    data: () => ({\n      show3: true\n    })\n  }\n</script>\n\n<style>\n  .transition-box {\n    margin-bottom: 10px;\n    width: 200px;\n    height: 100px;\n    border-radius: 4px;\n    background-color: #409EFF;\n    text-align: center;\n    color: #fff;\n    padding: 40px 20px;\n    box-sizing: border-box;\n    margin-right: 20px;\n  }\n</style>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"on-demand\"><a class=\"header-anchor\" href=\"#on-demand\">¶</a> On demand</h3><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// fade/zoom</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/lib/theme-chalk/base.css&#39;</span>;\n<span class=\"hljs-comment\">// collapse</span>\n<span class=\"hljs-keyword\">import</span> { ElCollapseTransition } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n\nVue.component(ElCollapseTransition.name, ElCollapseTransition)\n</code></pre>", 2);

function transitionvue_type_template_id_3166cf6a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", transitionvue_type_template_id_3166cf6a_hoisted_1, [transitionvue_type_template_id_3166cf6a_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [transitionvue_type_template_id_3166cf6a_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13]);
}
// CONCATENATED MODULE: ./website/docs/en-US/transition.md?vue&type=template&id=3166cf6a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/transition.md?vue&type=script&lang=ts


/* harmony default export */ var transitionvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _vShow = vue_esm_browser["ab" /* vShow */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _Transition = vue_esm_browser["e" /* Transition */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-box"
      };
      var _hoisted_4 = {
        class: "transition-box"
      };

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "el-fade-in-linear"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, ".el-fade-in-linear", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "el-fade-in"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_4, ".el-fade-in", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _vShow = vue_esm_browser["ab" /* vShow */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _Transition = vue_esm_browser["e" /* Transition */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-box"
      };
      var _hoisted_4 = {
        class: "transition-box"
      };
      var _hoisted_5 = {
        class: "transition-box"
      };

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show2 = !_ctx.show2;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "el-zoom-in-center"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, ".el-zoom-in-center", 512), [[_vShow, _ctx.show2]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "el-zoom-in-top"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_4, ".el-zoom-in-top", 512), [[_vShow, _ctx.show2]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "el-zoom-in-bottom"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_5, ".el-zoom-in-bottom", 512), [[_vShow, _ctx.show2]])];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show2: true
          };
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
          _vShow = vue_esm_browser["ab" /* vShow */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "margin-top": "20px",
          "height": "200px"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "transition-box"
      }, "el-collapse-transition", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "transition-box"
      }, "el-collapse-transition", -1);

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_collapse_transition = _resolveComponent("el-collapse-transition");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show3 = !_ctx.show3;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_component_el_collapse_transition, null, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", null, [_hoisted_3, _hoisted_4], 512), [[_vShow, _ctx.show3]])];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show3: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/transition.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/transition.md



transitionvue_type_script_lang_ts.render = transitionvue_type_template_id_3166cf6a_render

/* harmony default export */ var transition = __webpack_exports__["default"] = (transitionvue_type_script_lang_ts);

/***/ })

}]);