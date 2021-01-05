(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[195],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/carousel.md?vue&type=template&id=00782543

var carouselvue_type_template_id_00782543_hoisted_1 = {
  class: "content element-doc"
};

var carouselvue_type_template_id_00782543_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "carousel-karuseru"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#carousel-karuseru"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Carousel(カルーセル)")], -1);

var carouselvue_type_template_id_00782543_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "限られたスペースに一連の画像やテキストをループさせる", -1);

var carouselvue_type_template_id_00782543_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var carouselvue_type_template_id_00782543_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-carousel"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を組み合わせれば、carouselができあがります。各スライドの内容は完全にカスタマイズ可能で、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("タグの中に配置するだけです。デフォルトでは、マウスがインジケータの上にカーソルを置くとcarouselが切り替わります。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("を"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("に設定すると、インジケータがクリックされたときだけcarouselが切り替わります。")])], -1);

var carouselvue_type_template_id_00782543_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Switch when indicator is hovered (default)</span>\n    <el-carousel height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Switch when indicator is clicked</span>\n    <el-carousel trigger=\"click\" height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 150px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "inziketa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#inziketa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" インジケータ")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "インジケータはcarouselの外側に表示することができます。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性はインジケータの位置を決定します。デフォルトではcarouselの内側にあり、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "outside"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定すると外側に移動し、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "none"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定するとインジケータは非表示になります。")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel indicator-position=\"outside\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "shi-yin"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shi-yin"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 矢印")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "矢印が表示されるタイミングを定義することができます。", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性は、いつ矢印が表示されるかを決定します。デフォルトでは、マウスがcarouselの上にカーソルを置いたときに表示されます。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" または "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定すると、矢印を恒久的に表示/非表示にすることができます。")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"5000\" arrow=\"always\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kadomodo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kadomodo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" カードモード")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ページが十分に広くても高さが限られている場合、carouselのカードモードを有効にすることができます。", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" にするとカードモードになります。見た目とは別に、カードモードと共通モードの最大の違いは、両側のスライドをクリックするとcarouselが直接カードモードに切り替わることです。")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"4000\" type=\"card\" height=\"200px\">\n    <el-carousel-item v-for=\"item in 6\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("デフォルトでは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" は "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "horizontal"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" である。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定することで、carouselを垂直方向に表示させることができる。")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel height=\"200px\" direction=\"vertical\" :autoplay=\"false\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n  \n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n  \n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"carousel-shu-xing\"><a class=\"header-anchor\" href=\"#carousel-shu-xing\">¶</a> carousel属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>height</td><td>carouselの高さ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>initial-index</td><td>アクティブになったスライドのインデックス(0始まり)</td><td>number</td><td>—</td><td>0</td></tr><tr><td>trigger</td><td>インディケータの発動方法</td><td>string</td><td>hover/click</td><td>hover</td></tr><tr><td>autoplay</td><td>スライドを自動的にループさせるかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>interval</td><td>自動ループの間隔 (ミリ秒単位)</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>indicator-position</td><td>インディケータの位置</td><td>string</td><td>outside/none</td><td>—</td></tr><tr><td>arrow</td><td>矢印が表示されている場合</td><td>string</td><td>always/hover/never</td><td>hover</td></tr><tr><td>type</td><td>carouselのタイプ</td><td>string</td><td>card</td><td>—</td></tr><tr><td>loop</td><td>ループ表示</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>direction</td><td>表示方向</td><td>string</td><td>horizontal/vertical</td><td>horizontal</td></tr></tbody></table><h3 id=\"carouselibento\"><a class=\"header-anchor\" href=\"#carouselibento\">¶</a> carouselイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>アクティブなスライドが切り替わったときにトリガされます。</td><td>index of the new active slide, index of the old active slide</td></tr></tbody></table><h3 id=\"carouselmesotudo\"><a class=\"header-anchor\" href=\"#carouselmesotudo\">¶</a> carouselメソッド</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>setActiveItem</td><td>手動でスライドを切り替える</td><td>index of the slide to be switched to, starting from 0; or the <code>name</code> of corresponding <code>el-carousel-item</code></td></tr><tr><td>prev</td><td>前のスライドに切り替える</td><td>—</td></tr><tr><td>next</td><td>次のスライドに移る</td><td>—</td></tr></tbody></table><h3 id=\"carousel-aitemu-shu-xing\"><a class=\"header-anchor\" href=\"#carousel-aitemu-shu-xing\">¶</a> carousel-アイテム属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>アイテムの名前は <code>setActiveItem</code> で使われています。</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>対応するインジケータのテキスト内容</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 8);

function carouselvue_type_template_id_00782543_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", carouselvue_type_template_id_00782543_hoisted_1, [carouselvue_type_template_id_00782543_hoisted_2, carouselvue_type_template_id_00782543_hoisted_3, carouselvue_type_template_id_00782543_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [carouselvue_type_template_id_00782543_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [carouselvue_type_template_id_00782543_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_21]);
}
// CONCATENATED MODULE: ./website/docs/jp/carousel.md?vue&type=template&id=00782543

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/carousel.md?vue&type=script&lang=ts


/* harmony default export */ var carouselvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Switch when indicator is hovered (default)", -1);

      var _hoisted_3 = {
        class: "small"
      };
      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Switch when indicator is clicked", -1);

      var _hoisted_6 = {
        class: "small"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_carousel, {
          height: "150px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_3, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_carousel, {
          trigger: "click",
          height: "150px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_6, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })])]);
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
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          "indicator-position": "outside"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", null, _toDisplayString(item), 1)];
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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 5000,
          arrow: "always"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", null, _toDisplayString(item), 1)];
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
    "element-demo3": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 4000,
          type: "card",
          height: "200px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(6, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_1, _toDisplayString(item), 1)];
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
    "element-demo4": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          height: "200px",
          direction: "vertical",
          autoplay: false
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_1, _toDisplayString(item), 1)];
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/carousel.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/carousel.md



carouselvue_type_script_lang_ts.render = carouselvue_type_template_id_00782543_render

/* harmony default export */ var carousel = __webpack_exports__["default"] = (carouselvue_type_script_lang_ts);

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/carousel.md?vue&type=template&id=2db1c336

var carouselvue_type_template_id_2db1c336_hoisted_1 = {
  class: "content element-doc"
};

var carouselvue_type_template_id_2db1c336_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "carousel"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#carousel"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Carousel")], -1);

var carouselvue_type_template_id_2db1c336_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Affiche en boucle une série d'images ou de textes dans un espace limité.", -1);

var carouselvue_type_template_id_2db1c336_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Usage")], -1);

var carouselvue_type_template_id_2db1c336_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-carousel"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" avec "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", et vous obtiendrez un carrousel. Le contenu de chaque slide est complètement personnalisable, il vous suffit juste de le placer à l'intérieur de la balise "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Par défaut le carrousel défile quand la souris passe sur un indicateur. Réglez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" sur "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et le carrousel défilera uniquement quand vous cliquerez sur l'indicateur.")])], -1);

var carouselvue_type_template_id_2db1c336_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Défile quand la souris passe sur l'indicateur (défaut)</span>\n    <el-carousel height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Défile quand on clique sur l'indicateur</span>\n    <el-carousel trigger=\"click\" height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 150px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "indicateurs"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#indicateurs"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Indicateurs")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Les indicateurs peuvent être affichés en dehors du carrousel.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" détermine où les indicateurs sont localisés. Par défaut ils se trouvent à l'intérieur du carrousel, régler "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" sur "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "outside"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" les affichera à l'extérieur; régler "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" sur "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "none"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" les cachera totalement.")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel indicator-position=\"outside\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "fleches"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fleches"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Flèches")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez définir quand les flèches doivent apparaître.", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" détermine quand les flèches sont affichées. Par défaut elles apparaissent quand la souris passe sur le carrousel. Réglez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" sur "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ou "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" affiche ou cache les flèches de manière permanente.")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"5000\" arrow=\"always\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "mode-carte"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mode-carte"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Mode carte")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Quand la page est suffisamment large mais avec une hauteur limitée, vous pouvez activer le mode carte.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Réglez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" sur "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour activer le mode carte. Hormis l'apparence, la principale différence par rapport au mode commun est que cliquer sur une des slides se trouvant de chaque coté fait directement défiler le carrousel.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"4000\" type=\"card\" height=\"200px\">\n    <el-carousel-item v-for=\"item in 6\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Par défaut, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" est "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "horizontal"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Vous pouvez faire en sorte que le défilement soit vertical en mettant "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel height=\"200px\" direction=\"vertical\" :autoplay=\"false\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs-du-carrousel\"><a class=\"header-anchor\" href=\"#attributs-du-carrousel\">¶</a> Attributs du Carrousel</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>height</td><td>Hauteur du carrousel.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>initial-index</td><td>Index de la slide initiale (commence à 0).</td><td>number</td><td>—</td><td>0</td></tr><tr><td>trigger</td><td>Comment les indicateurs sont déclenchés</td><td>string</td><td>hover/click</td><td>hover</td></tr><tr><td>autoplay</td><td>Si le carrousel défile automatiquement</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>interval</td><td>Intervalle pour le défilement automatique, en millisecondes.</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>indicator-position</td><td>Position des indicateurs.</td><td>string</td><td>outside/none</td><td>—</td></tr><tr><td>arrow</td><td>Détermine quand les flèches sont affichées.</td><td>string</td><td>always/hover/never</td><td>hover</td></tr><tr><td>type</td><td>Type du carrousel.</td><td>string</td><td>card</td><td>—</td></tr><tr><td>loop</td><td>Affiche les éléments en boucle.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>direction</td><td>Détermine la direction du défilement.</td><td>string</td><td>horizontal/vertical</td><td>horizontal</td></tr></tbody></table><h3 id=\"evenements-du-carrousel\"><a class=\"header-anchor\" href=\"#evenements-du-carrousel\">¶</a> Évènements du Carrousel</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>change</td><td>Se déclenche quand la slide active défile.</td><td>Index de la nouvelle slide, index de l&#39;ancienne slide</td></tr></tbody></table><h3 id=\"methodes-du-carrousel\"><a class=\"header-anchor\" href=\"#methodes-du-carrousel\">¶</a> Méthodes du Carrousel</h3><table><thead><tr><th>Mathode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>setActiveItem</td><td>Défile manuellement vers une slide.</td><td>index de la slide d&#39;arrivée, à partir de 0; ou bien le <code>name</code> du <code>el-carousel-item</code> correspondant</td></tr><tr><td>prev</td><td>Défile vers la slide précédente.</td><td>—</td></tr><tr><td>next</td><td>Défile vers la slide suivante.</td><td>—</td></tr></tbody></table><h3 id=\"attributs-du-carrousel-item\"><a class=\"header-anchor\" href=\"#attributs-du-carrousel-item\">¶</a> Attributs du Carrousel-Item</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>name</td><td>Nom de l&#39;item, peut être utilisé dans <code>setActiveItem</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>Texte affiché au niveau de l&#39;indicateur correspondant.</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 8);

function carouselvue_type_template_id_2db1c336_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", carouselvue_type_template_id_2db1c336_hoisted_1, [carouselvue_type_template_id_2db1c336_hoisted_2, carouselvue_type_template_id_2db1c336_hoisted_3, carouselvue_type_template_id_2db1c336_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [carouselvue_type_template_id_2db1c336_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [carouselvue_type_template_id_2db1c336_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_21]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/carousel.md?vue&type=template&id=2db1c336

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/carousel.md?vue&type=script&lang=ts


/* harmony default export */ var carouselvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Défile quand la souris passe sur l'indicateur (défaut)", -1);

      var _hoisted_3 = {
        class: "small"
      };
      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Défile quand on clique sur l'indicateur", -1);

      var _hoisted_6 = {
        class: "small"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_carousel, {
          height: "150px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_3, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_carousel, {
          trigger: "click",
          height: "150px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_6, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })])]);
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
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          "indicator-position": "outside"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", null, _toDisplayString(item), 1)];
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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 5000,
          arrow: "always"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", null, _toDisplayString(item), 1)];
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
    "element-demo3": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 4000,
          type: "card",
          height: "200px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(6, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_1, _toDisplayString(item), 1)];
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
    "element-demo4": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          height: "200px",
          direction: "vertical",
          autoplay: false
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_1, _toDisplayString(item), 1)];
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/carousel.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/carousel.md



carouselvue_type_script_lang_ts.render = carouselvue_type_template_id_2db1c336_render

/* harmony default export */ var carousel = __webpack_exports__["default"] = (carouselvue_type_script_lang_ts);

/***/ })

}]);