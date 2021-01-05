(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[243],{

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/steps.md?vue&type=template&id=083ed0f0

var stepsvue_type_template_id_083ed0f0_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "steps-bu-zou-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#steps-bu-zou-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Steps 步骤条")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "简单的步骤条。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性，接受一个"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性即可，它接受"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，单位为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "px"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，如果不设置，则为自适应。设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "finish-status"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性可以改变已经完成的步骤的状态。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"active\" finish-status=\"success\">\n  <el-step title=\"步骤 1\"></el-step>\n  <el-step title=\"步骤 2\"></el-step>\n  <el-step title=\"步骤 3\"></el-step>\n</el-steps>\n\n<el-button style=\"margin-top: 12px;\" @click=\"next\">下一步</el-button>\n\n<script>\n  export default {\n    data() {\n      return {\n        active: 0\n      };\n    },\n\n    methods: {\n      next() {\n        if (this.active++ > 2) this.active = 0;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "han-zhuang-tai-bu-zou-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#han-zhuang-tai-bu-zou-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 含状态步骤条")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "每一步骤显示出该步骤的状态。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("也可以使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("具名分发，可以用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :space=\"200\" :active=\"1\" finish-status=\"success\">\n  <el-step title=\"已完成\"></el-step>\n  <el-step title=\"进行中\"></el-step>\n  <el-step title=\"步骤 3\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "you-miao-shu-de-bu-zou-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#you-miao-shu-de-bu-zou-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 有描述的步骤条")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "每个步骤有其对应的步骤状态描述。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"1\">\n  <el-step title=\"步骤 1\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n  <el-step title=\"步骤 2\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n  <el-step title=\"步骤 3\" description=\"这段就没那么长了\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ju-zhong-de-bu-zou-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ju-zhong-de-bu-zou-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 居中的步骤条")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "标题和描述都将居中。", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"2\" align-center>\n  <el-step title=\"步骤1\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n  <el-step title=\"步骤2\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n  <el-step title=\"步骤3\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n  <el-step title=\"步骤4\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dai-tu-biao-de-bu-zou-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-tu-biao-de-bu-zou-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 带图标的步骤条")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "步骤条内可以启用各种自定义的图标。", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "icon"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("来使用自定义的图标。")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<el-steps :active=\"1\">\n  <el-step title=\"步骤 1\" icon=\"el-icon-edit\"></el-step>\n  <el-step title=\"步骤 2\" icon=\"el-icon-upload\"></el-step>\n  <el-step title=\"步骤 3\" icon=\"el-icon-picture\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "shu-shi-bu-zou-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shu-shi-bu-zou-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 竖式步骤条")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "竖直方向的步骤条。", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("只需要在"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-steps"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("元素中设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("即可。")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div style=\"height: 300px;\">\n  <el-steps direction=\"vertical\" :active=\"1\">\n    <el-step title=\"步骤 1\"></el-step>\n    <el-step title=\"步骤 2\"></el-step>\n    <el-step title=\"步骤 3\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n  </el-steps>\n</div>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"jian-ji-feng-ge-de-bu-zou-tiao\"><a class=\"header-anchor\" href=\"#jian-ji-feng-ge-de-bu-zou-tiao\">¶</a> 简洁风格的步骤条</h3><p>设置 <code>simple</code> 可应用简洁风格，该条件下 <code>align-center</code> / <code>description</code> / <code>direction</code> / <code>space</code> 都将失效。</p>", 2);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<el-steps :active=\"1\" simple>\n  <el-step title=\"步骤 1\" icon=\"el-icon-edit\"></el-step>\n  <el-step title=\"步骤 2\" icon=\"el-icon-upload\"></el-step>\n  <el-step title=\"步骤 3\" icon=\"el-icon-picture\"></el-step>\n</el-steps>\n\n<el-steps :active=\"1\" finish-status=\"success\" simple style=\"margin-top: 20px\">\n  <el-step title=\"步骤 1\" ></el-step>\n  <el-step title=\"步骤 2\" ></el-step>\n  <el-step title=\"步骤 3\" ></el-step>\n</el-steps>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"steps-attributes\"><a class=\"header-anchor\" href=\"#steps-attributes\">¶</a> Steps Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>space</td><td>每个 step 的间距，不填写将自适应间距。支持百分比。</td><td>number / string</td><td>—</td><td>—</td></tr><tr><td>direction</td><td>显示方向</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>active</td><td>设置当前激活步骤</td><td>number</td><td>—</td><td>0</td></tr><tr><td>process-status</td><td>设置当前步骤的状态</td><td>string</td><td>wait / process / finish / error / success</td><td>process</td></tr><tr><td>finish-status</td><td>设置结束步骤的状态</td><td>string</td><td>wait / process / finish / error / success</td><td>finish</td></tr><tr><td>align-center</td><td>进行居中对齐</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>simple</td><td>是否应用简洁风格</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h3 id=\"step-attributes\"><a class=\"header-anchor\" href=\"#step-attributes\">¶</a> Step Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>description</td><td>描述性文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>图标</td><td>传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入</td><td>string</td><td>—</td></tr><tr><td>status</td><td>设置当前步骤的状态，不设置则根据 steps 确定状态</td><td>wait / process / finish / error / success</td><td>-</td><td></td></tr></tbody></table><h3 id=\"step-slot\"><a class=\"header-anchor\" href=\"#step-slot\">¶</a> Step Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>description</td><td>自定义描述性文字</td></tr></tbody></table>", 6);

function stepsvue_type_template_id_083ed0f0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", stepsvue_type_template_id_083ed0f0_hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22, _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/steps.md?vue&type=template&id=083ed0f0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/steps.md?vue&type=script&lang=ts


/* harmony default export */ var stepsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("下一步");

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: _ctx.active,
          "finish-status": "success"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "步骤 1"
            }), _createVNode(_component_el_step, {
              title: "步骤 2"
            }), _createVNode(_component_el_step, {
              title: "步骤 3"
            })];
          }),
          _: 1
        }, 8, ["active"]), _createVNode(_component_el_button, {
          style: {
            "margin-top": "12px"
          },
          onClick: _ctx.next
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            active: 0
          };
        },
        methods: {
          next: function next() {
            if (this.active++ > 2) this.active = 0;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          space: 200,
          active: 1,
          "finish-status": "success"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "已完成"
            }), _createVNode(_component_el_step, {
              title: "进行中"
            }), _createVNode(_component_el_step, {
              title: "步骤 3"
            })];
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "步骤 1",
              description: "这是一段很长很长很长的描述性文字"
            }), _createVNode(_component_el_step, {
              title: "步骤 2",
              description: "这是一段很长很长很长的描述性文字"
            }), _createVNode(_component_el_step, {
              title: "步骤 3",
              description: "这段就没那么长了"
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: 2,
          "align-center": ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "步骤1",
              description: "这是一段很长很长很长的描述性文字"
            }), _createVNode(_component_el_step, {
              title: "步骤2",
              description: "这是一段很长很长很长的描述性文字"
            }), _createVNode(_component_el_step, {
              title: "步骤3",
              description: "这是一段很长很长很长的描述性文字"
            }), _createVNode(_component_el_step, {
              title: "步骤4",
              description: "这是一段很长很长很长的描述性文字"
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "步骤 1",
              icon: "el-icon-edit"
            }), _createVNode(_component_el_step, {
              title: "步骤 2",
              icon: "el-icon-upload"
            }), _createVNode(_component_el_step, {
              title: "步骤 3",
              icon: "el-icon-picture"
            })];
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "height": "300px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_steps, {
          direction: "vertical",
          active: 1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "步骤 1"
            }), _createVNode(_component_el_step, {
              title: "步骤 2"
            }), _createVNode(_component_el_step, {
              title: "步骤 3",
              description: "这是一段很长很长很长的描述性文字"
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
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1,
          simple: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "步骤 1",
              icon: "el-icon-edit"
            }), _createVNode(_component_el_step, {
              title: "步骤 2",
              icon: "el-icon-upload"
            }), _createVNode(_component_el_step, {
              title: "步骤 3",
              icon: "el-icon-picture"
            })];
          }),
          _: 1
        }), _createVNode(_component_el_steps, {
          active: 1,
          "finish-status": "success",
          simple: "",
          style: {
            "margin-top": "20px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "步骤 1"
            }), _createVNode(_component_el_step, {
              title: "步骤 2"
            }), _createVNode(_component_el_step, {
              title: "步骤 3"
            })];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/steps.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/steps.md



stepsvue_type_script_lang_ts.render = stepsvue_type_template_id_083ed0f0_render

/* harmony default export */ var steps = __webpack_exports__["default"] = (stepsvue_type_script_lang_ts);

/***/ })

}]);