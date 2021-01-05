(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[250],{

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/timeline.md?vue&type=template&id=6ef26542

var timelinevue_type_template_id_6ef26542_hoisted_1 = {
  class: "content element-doc"
};

var timelinevue_type_template_id_6ef26542_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "timeline-shi-jian-xian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#timeline-shi-jian-xian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Timeline 时间线")], -1);

var timelinevue_type_template_id_6ef26542_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可视化地呈现时间流信息。", -1);

var timelinevue_type_template_id_6ef26542_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var timelinevue_type_template_id_6ef26542_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Timeline 可拆分成多个按照时间戳排列的 activity，时间戳是其区分于其他控件的重要特征，使⽤时注意与 Steps 步骤条等区分。", -1);

var timelinevue_type_template_id_6ef26542_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item\n      v-for=\"(activity, index) in activities\"\n      :key=\"index\"\n      :timestamp=\"activity.timestamp\">\n      {{activity.content}}\n    </el-timeline-item>\n  </el-timeline>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        activities: [{\n          content: '活动按期开始',\n          timestamp: '2018-04-15'\n        }, {\n          content: '通过审核',\n          timestamp: '2018-04-13'\n        }, {\n          content: '创建成功',\n          timestamp: '2018-04-11'\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var timelinevue_type_template_id_6ef26542_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ding-yi-jie-dian-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ding-yi-jie-dian-yang-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ⾃定义节点样式")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item\n      v-for=\"(activity, index) in activities\"\n      :key=\"index\"\n      :icon=\"activity.icon\"\n      :type=\"activity.type\"\n      :color=\"activity.color\"\n      :size=\"activity.size\"\n      :timestamp=\"activity.timestamp\">\n      {{activity.content}}\n    </el-timeline-item>\n  </el-timeline>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        activities: [{\n          content: '支持使用图标',\n          timestamp: '2018-04-12 20:46',\n          size: 'large',\n          type: 'primary',\n          icon: 'el-icon-more'\n        }, {\n          content: '支持自定义颜色',\n          timestamp: '2018-04-03 20:46',\n          color: '#0bbd87'\n        }, {\n          content: '支持自定义尺寸',\n          timestamp: '2018-04-03 20:46',\n          size: 'large'\n        }, {\n          content: '默认样式的节点',\n          timestamp: '2018-04-03 20:46'\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ding-yi-shi-jian-chuo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ding-yi-shi-jian-chuo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ⾃定义时间戳")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item timestamp=\"2018/4/12\" placement=\"top\">\n      <el-card>\n        <h4>更新 Github 模板</h4>\n        <p>王小虎 提交于 2018/4/12 20:46</p>\n      </el-card>\n    </el-timeline-item>\n    <el-timeline-item timestamp=\"2018/4/3\" placement=\"top\">\n      <el-card>\n        <h4>更新 Github 模板</h4>\n        <p>王小虎 提交于 2018/4/3 20:46</p>\n      </el-card>\n    </el-timeline-item>\n    <el-timeline-item timestamp=\"2018/4/2\" placement=\"top\">\n      <el-card>\n        <h4>更新 Github 模板</h4>\n        <p>王小虎 提交于 2018/4/2 20:46</p>\n      </el-card>\n    </el-timeline-item>\n  </el-timeline>\n</div>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"timeline-item-attributes\"><a class=\"header-anchor\" href=\"#timeline-item-attributes\">¶</a> Timeline-item Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>timestamp</td><td>时间戳</td><td>string</td><td>-</td><td>—</td></tr><tr><td>hide-timestamp</td><td>是否隐藏时间戳</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>时间戳位置</td><td>string</td><td>top / bottom</td><td>bottom</td></tr><tr><td>type</td><td>节点类型</td><td>string</td><td>primary / success / warning / danger / info</td><td>-</td></tr><tr><td>color</td><td>节点颜色</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>-</td></tr><tr><td>size</td><td>节点尺寸</td><td>string</td><td>normal / large</td><td>normal</td></tr><tr><td>icon</td><td>节点图标</td><td>string</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"timeline-item-slot\"><a class=\"header-anchor\" href=\"#timeline-item-slot\">¶</a> Timeline-Item Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Timeline-Item 的内容</td></tr><tr><td>dot</td><td>自定义节点</td></tr></tbody></table>", 4);

function timelinevue_type_template_id_6ef26542_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", timelinevue_type_template_id_6ef26542_hoisted_1, [timelinevue_type_template_id_6ef26542_hoisted_2, timelinevue_type_template_id_6ef26542_hoisted_3, timelinevue_type_template_id_6ef26542_hoisted_4, timelinevue_type_template_id_6ef26542_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [timelinevue_type_template_id_6ef26542_hoisted_6];
    }),
    _: 1
  }), timelinevue_type_template_id_6ef26542_hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/timeline.md?vue&type=template&id=6ef26542

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/timeline.md?vue&type=script&lang=ts


/* harmony default export */ var timelinevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_timeline_item = _resolveComponent("el-timeline-item");

        var _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.activities, function (activity, index) {
              return _openBlock(), _createBlock(_component_el_timeline_item, {
                key: index,
                timestamp: activity.timestamp
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(activity.content), 1)];
                }),
                _: 2
              }, 1032, ["timestamp"]);
            }), 128))];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activities: [{
              content: '活动按期开始',
              timestamp: '2018-04-15'
            }, {
              content: '通过审核',
              timestamp: '2018-04-13'
            }, {
              content: '创建成功',
              timestamp: '2018-04-11'
            }]
          };
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
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_timeline_item = _resolveComponent("el-timeline-item");

        var _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.activities, function (activity, index) {
              return _openBlock(), _createBlock(_component_el_timeline_item, {
                key: index,
                icon: activity.icon,
                type: activity.type,
                color: activity.color,
                size: activity.size,
                timestamp: activity.timestamp
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(activity.content), 1)];
                }),
                _: 2
              }, 1032, ["icon", "type", "color", "size", "timestamp"]);
            }), 128))];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activities: [{
              content: '支持使用图标',
              timestamp: '2018-04-12 20:46',
              size: 'large',
              type: 'primary',
              icon: 'el-icon-more'
            }, {
              content: '支持自定义颜色',
              timestamp: '2018-04-03 20:46',
              color: '#0bbd87'
            }, {
              content: '支持自定义尺寸',
              timestamp: '2018-04-03 20:46',
              size: 'large'
            }, {
              content: '默认样式的节点',
              timestamp: '2018-04-03 20:46'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("h4", null, "更新 Github 模板", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "王小虎 提交于 2018/4/12 20:46", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("h4", null, "更新 Github 模板", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", null, "王小虎 提交于 2018/4/3 20:46", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("h4", null, "更新 Github 模板", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("p", null, "王小虎 提交于 2018/4/2 20:46", -1);

      function render(_ctx, _cache) {
        var _component_el_card = _resolveComponent("el-card");

        var _component_el_timeline_item = _resolveComponent("el-timeline-item");

        var _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_timeline_item, {
              timestamp: "2018/4/12",
              placement: "top"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2, _hoisted_3];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_timeline_item, {
              timestamp: "2018/4/3",
              placement: "top"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4, _hoisted_5];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_timeline_item, {
              timestamp: "2018/4/2",
              placement: "top"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6, _hoisted_7];
                  }),
                  _: 1
                })];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/timeline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/timeline.md



timelinevue_type_script_lang_ts.render = timelinevue_type_template_id_6ef26542_render

/* harmony default export */ var timeline = __webpack_exports__["default"] = (timelinevue_type_script_lang_ts);

/***/ })

}]);