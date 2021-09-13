(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[280],{

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/tooltip.md?vue&type=template&id=fe3f0036

const tooltipvue_type_template_id_fe3f0036_hoisted_1 = {
  class: "content element-doc"
};

const tooltipvue_type_template_id_fe3f0036_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ツールチップ ");

const tooltipvue_type_template_id_fe3f0036_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "マウスホバーのプロンプト情報を表示します。", -1);

const tooltipvue_type_template_id_fe3f0036_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な使い方 ");

const tooltipvue_type_template_id_fe3f0036_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ツールチップの配置は 9 箇所です。", -1);

const tooltipvue_type_template_id_fe3f0036_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ホバー時の表示内容を設定するには、属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を用いる。属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" はツールチップの位置を決める。値は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "[orientation]-[alignment]"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" で、方向は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の 4 つ、アライメントは "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "start"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "end"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "null"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の 3 つで、デフォルトのアライメントは null です。例えば、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "placement=\"left-end\""), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を例にとると、ツールチップはホバリングしている要素の左側に表示され、ツールチップの下端は要素の下端に合わせて配置されます。")])], -1);

const tooltipvue_type_template_id_fe3f0036_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"box\">\n  <div class=\"top\">\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Top Left prompts info\"\n      placement=\"top-start\"\n    >\n      <el-button>top-start</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Top Center prompts info\"\n      placement=\"top\"\n    >\n      <el-button>top</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Top Right prompts info\"\n      placement=\"top-end\"\n    >\n      <el-button>top-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"left\">\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Left Top prompts info\"\n      placement=\"left-start\"\n    >\n      <el-button>left-start</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Left Center prompts info\"\n      placement=\"left\"\n    >\n      <el-button>left</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Left Bottom prompts info\"\n      placement=\"left-end\"\n    >\n      <el-button>left-end</el-button>\n    </el-tooltip>\n  </div>\n\n  <div class=\"right\">\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Right Top prompts info\"\n      placement=\"right-start\"\n    >\n      <el-button>right-start</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Right Center prompts info\"\n      placement=\"right\"\n    >\n      <el-button>right</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Right Bottom prompts info\"\n      placement=\"right-end\"\n    >\n      <el-button>right-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"bottom\">\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Bottom Left prompts info\"\n      placement=\"bottom-start\"\n    >\n      <el-button>bottom-start</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Bottom Center prompts info\"\n      placement=\"bottom\"\n    >\n      <el-button>bottom</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Bottom Right prompts info\"\n      placement=\"bottom-end\"\n    >\n      <el-button>bottom-end</el-button>\n    </el-tooltip>\n  </div>\n</div>\n\n<style>\n  .box {\n    width: 400px;\n\n    .top {\n      text-align: center;\n    }\n\n    .left {\n      float: left;\n      width: 110px;\n    }\n\n    .right {\n      float: right;\n      width: 110px;\n    }\n\n    .bottom {\n      clear: both;\n      text-align: center;\n    }\n\n    .item {\n      margin: 4px;\n    }\n\n    .left .el-tooltip__popper,\n    .right .el-tooltip__popper {\n      padding: 8px 10px;\n    }\n\n    .el-button {\n      width: 110px;\n    }\n  }\n</style>\n")], -1);

const tooltipvue_type_template_id_fe3f0036_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テーマ ");

const tooltipvue_type_template_id_fe3f0036_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ツールチップには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の 2 つのテーマがあります。")], -1);

const tooltipvue_type_template_id_fe3f0036_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テーマを変更するには "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定します。デフォルト値は"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("です。")])], -1);

const tooltipvue_type_template_id_fe3f0036_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tooltip content=\"Top center\" placement=\"top\">\n  <el-button>Dark</el-button>\n</el-tooltip>\n<el-tooltip content=\"Bottom center\" placement=\"bottom\" effect=\"light\">\n  <el-button>Light</el-button>\n</el-tooltip>\n")], -1);

const tooltipvue_type_template_id_fe3f0036_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("コンテンツを追加します。 ");

const tooltipvue_type_template_id_fe3f0036_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "複数行のテキストを表示し、そのフォーマットを設定します。", -1);

const tooltipvue_type_template_id_fe3f0036_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" という名前のスロットを追加して "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性をオーバーライドします。")])], -1);

const tooltipvue_type_template_id_fe3f0036_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tooltip placement=\"top\">\n  <template #content> multiple lines<br />second line </template>\n  <el-button>Top center</el-button>\n</el-tooltip>\n")], -1);

const tooltipvue_type_template_id_fe3f0036_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("高度な使用法 ");

const tooltipvue_type_template_id_fe3f0036_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "基本的な使い方に加えて、自分でカスタマイズできる属性がいくつかあります。:", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "transition"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性はツールチップの表示・非表示のアニメーションをカスタマイズすることができ、デフォルト値は el-fade-in-linear です。")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("デフォルト値は el-faade-in-linear です。 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を無効にします。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("に設定すればよいだけです。")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("実際、ツールチップは");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vue-popper");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("をベースにした拡張機能なので、Vue-popper で許可されている属性なら何でも使えます。");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tooltip\n    :disabled=\"disabled\"\n    content=\"click to close tooltip function\"\n    placement=\"bottom\"\n    effect=\"light\"\n  >\n    <el-button @click=\"disabled = !disabled\"\n      >click to {{disabled ? 'active' : 'close'}} tooltip function</el-button\n    >\n  </el-tooltip>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false,\n      }\n    },\n  }\n</script>\n\n<style>\n  .slide-fade-enter-active {\n    transition: all 0.3s ease;\n  }\n  .slide-fade-leave-active {\n    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);\n  }\n  .slide-fade-enter,\n  .expand-fade-leave-active {\n    margin-left: 20px;\n    opacity: 0;\n  }\n</style>\n")], -1);

const _hoisted_24 = {
  class: "tip"
};

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ツールチップでは "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "router-link"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" コンポーネントはサポートされていないので、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "vm.$router.push"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を使用してください。")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("無効化されたフォーム要素は、Tooltip ではサポートされていません。詳細は");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Mdn");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を参照してください。Tooltip が動作するためには、無効化されたフォーム要素をコンテナ要素で包む必要があります。");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Default")])], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("dialog 自身をボディに追加するかどうかを指定します。入れ子になった dialog は、この属性を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定しなければなりません。")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ツールチップのテーマ"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "dark/light"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "dark")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("コンテンツを表示、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot#content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" で上書きすることができます。")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ツールチップの位置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "bottom")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ツールチップの可視性"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ツールチップが無効になっているかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ツールチップのオフセット"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "transition"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "アニメーション名"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el-fade-in-linear")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "visible-arrow", -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("矢印が表示されているかどうかを指定します。詳しくは、");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vue-popper");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("のページを参照してください。");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean", -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true", -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-options", -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("popper.js");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" parameters");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Object", -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("refer to ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("popper.js");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" doc");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "{ boundariesElement: 'body', gpuAcceleration: false }")], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-after"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ミリ秒単位の出現の遅延"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hide-after"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ミリ秒単位の消えるの遅延"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "auto-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ツールチップを非表示にするタイムアウト（ミリ秒単位）"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "manual"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ツールチップを手動で制御するかどうかを指定します。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定すると "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mouseenter"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mouseleave"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は効果を持ちません。")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ツールチップのポッパーのカスタムクラス名"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "enterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "マウスがツールチップに入るかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tabindex", -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("tabindex");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" のツールチップ");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number", -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0", -1);

function tooltipvue_type_template_id_fe3f0036_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tooltipvue_type_template_id_fe3f0036_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "turutitupu",
    content: "ツールチップ",
    href: "#turutitupu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#turutitupu"
    })]),
    _: 1
  }), tooltipvue_type_template_id_fe3f0036_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-de-nashi-ifang",
    content: "基本的な使い方",
    href: "#ji-ben-de-nashi-ifang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-de-nashi-ifang"
    })]),
    _: 1
  }), tooltipvue_type_template_id_fe3f0036_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tema",
    content: "テーマ",
    href: "#tema",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tema"
    })]),
    _: 1
  }), tooltipvue_type_template_id_fe3f0036_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kontentuwozhui-jia-simasu.",
    content: "コンテンツを追加します。",
    href: "#kontentuwozhui-jia-simasu.",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kontentuwozhui-jia-simasu."
    })]),
    _: 1
  }), tooltipvue_type_template_id_fe3f0036_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gao-du-nashi-yong-fa",
    content: "高度な使用法",
    href: "#gao-du-nashi-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_fe3f0036_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gao-du-nashi-yong-fa"
    })]),
    _: 1
  }), tooltipvue_type_template_id_fe3f0036_hoisted_17, _hoisted_18, _hoisted_19, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-component/vue-popper"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), _hoisted_22]), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_24, [_hoisted_25, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), _hoisted_28])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_30, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_39, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-component/vue-popper"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), _hoisted_42]), _hoisted_43, _hoisted_44, _hoisted_45]), Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_46, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47]),
    _: 1
  }), _hoisted_48]), _hoisted_49, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51]),
    _: 1
  }), _hoisted_52]), _hoisted_53]), _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_60, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_61]),
    _: 1
  }), _hoisted_62]), _hoisted_63, _hoisted_64, _hoisted_65])])]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/tooltip.md?vue&type=template&id=fe3f0036

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/tooltip.md?vue&type=script&lang=ts

/* harmony default export */ var tooltipvue_type_script_lang_ts = ({
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
      const _hoisted_1 = {
        class: "box"
      };
      const _hoisted_2 = {
        class: "top"
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("top-start");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("top");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("top-end");

      const _hoisted_6 = {
        class: "left"
      };

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("left-start");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("left");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("left-end");

      const _hoisted_10 = {
        class: "right"
      };

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("right-start");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("right");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("right-end");

      const _hoisted_14 = {
        class: "bottom"
      };

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("bottom-start");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("bottom");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("bottom-end");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Left prompts info",
          placement: "top-start"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Center prompts info",
          placement: "top"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Right prompts info",
          placement: "top-end"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })]),
          _: 1
        })]), _createElementVNode("div", _hoisted_6, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Top prompts info",
          placement: "left-start"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Center prompts info",
          placement: "left"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Bottom prompts info",
          placement: "left-end"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_9]),
            _: 1
          })]),
          _: 1
        })]), _createElementVNode("div", _hoisted_10, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Top prompts info",
          placement: "right-start"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Center prompts info",
          placement: "right"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_12]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Bottom prompts info",
          placement: "right-end"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_13]),
            _: 1
          })]),
          _: 1
        })]), _createElementVNode("div", _hoisted_14, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Left prompts info",
          placement: "bottom-start"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_15]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Center prompts info",
          placement: "bottom"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_16]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Right prompts info",
          placement: "bottom-end"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_17]),
            _: 1
          })]),
          _: 1
        })])])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Dark");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Light");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tooltip, {
          content: "Top center",
          placement: "top"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          content: "Bottom center",
          placement: "bottom",
          effect: "light"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_2]),
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
    "element-demo2": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" multiple lines");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("br", null, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("second line ");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Top center");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tooltip, {
          placement: "top"
        }, {
          content: _withCtx(() => [_hoisted_1, _hoisted_2, _hoisted_3]),
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_4]),
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
    "element-demo3": function () {
      const {
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tooltip, {
          disabled: _ctx.disabled,
          content: "click to close tooltip function",
          placement: "bottom",
          effect: "light"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = $event => _ctx.disabled = !_ctx.disabled)
          }, {
            default: _withCtx(() => [_createTextVNode("click to " + _toDisplayString(_ctx.disabled ? 'active' : 'close') + " tooltip function", 1)]),
            _: 1
          })]),
          _: 1
        }, 8, ["disabled"])]);
      }

      const democomponentExport = {
        data() {
          return {
            disabled: false
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/tooltip.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/tooltip.md



tooltipvue_type_script_lang_ts.render = tooltipvue_type_template_id_fe3f0036_render

/* harmony default export */ var tooltip = __webpack_exports__["default"] = (tooltipvue_type_script_lang_ts);

/***/ })

}]);