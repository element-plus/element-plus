(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[229],{

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/avatar.md?vue&type=template&id=273690ba

const avatarvue_type_template_id_273690ba_hoisted_1 = {
  class: "content element-doc"
};

const avatarvue_type_template_id_273690ba_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Avator ");

const avatarvue_type_template_id_273690ba_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "avator は、人やオブジェクトを表現するために使用することができます。画像、アイコン、文字をサポートしています。", -1);

const avatarvue_type_template_id_273690ba_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本 ");

const avatarvue_type_template_id_273690ba_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("avator の形状とサイズを設定するために "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "shape"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" プロップを使う")], -1);

const avatarvue_type_template_id_273690ba_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-row class=\"demo-avatar demo-basic\">\n    <el-col :span=\"12\">\n      <div class=\"sub-title\">circle</div>\n      <div class=\"demo-basic--circle\">\n        <div class=\"block\">\n          <el-avatar :size=\"50\" :src=\"circleUrl\"></el-avatar>\n        </div>\n        <div class=\"block\" v-for=\"size in sizeList\" :key=\"size\">\n          <el-avatar :size=\"size\" :src=\"circleUrl\"></el-avatar>\n        </div>\n      </div>\n    </el-col>\n    <el-col :span=\"12\">\n      <div class=\"sub-title\">square</div>\n      <div class=\"demo-basic--circle\">\n        <div class=\"block\">\n          <el-avatar shape=\"square\" :size=\"50\" :src=\"squareUrl\"></el-avatar>\n        </div>\n        <div class=\"block\" v-for=\"size in sizeList\" :key=\"size\">\n          <el-avatar shape=\"square\" :size=\"size\" :src=\"squareUrl\"></el-avatar>\n        </div>\n      </div>\n    </el-col>\n  </el-row>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        circleUrl:\n          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',\n        squareUrl:\n          'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',\n        sizeList: ['large', 'medium', 'small'],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',\n        squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',\n        sizeList: ['large', 'medium', 'small'],\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("タイプ ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "イメージ、アイコン、文字をサポートしています。", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-type\">\n    <div>\n      <el-avatar icon=\"el-icon-user-solid\"></el-avatar>\n    </div>\n    <div>\n      <el-avatar\n        src=\"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png\"\n      ></el-avatar>\n    </div>\n    <div>\n      <el-avatar> user </el-avatar>\n    </div>\n  </div>\n</template>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("イメージ読み込みエラー時のフォールバック ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "イメージ読み込みエラー時のフォールバック", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-type\">\n    <el-avatar :size=\"60\" src=\"https://empty\" @error=\"errorHandler\">\n      <img\n        src=\"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png\"\n      />\n    </el-avatar>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      errorHandler() {\n        return true\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n  import { defineComponent } from 'vue'\n  export default defineComponent({\n    setup() {\n      const errorHandler = () => true;\n      return {\n        errorHandler,\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("イメージがそのコンテナにどのようにフィットするか ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("object-fit");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("と同様に、イメージ avator のコンテナに画像がどのようにフィットするかを設定します。");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-fit\">\n    <div class=\"block\" v-for=\"fit in fits\" :key=\"fit\">\n      <span class=\"title\">{{ fit }}</span>\n      <el-avatar shape=\"square\" :size=\"100\" :fit=\"fit\" :src=\"url\"></el-avatar>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>icon</td><td>表現タイプを Icon に設定します。詳細はアイコンコンポーネントを確認してください。</td><td>string</td><td></td><td></td></tr><tr><td>size</td><td>avator サイズを設定する</td><td>number/string</td><td>number / large / medium / small</td><td>large</td></tr><tr><td>shape</td><td>セット avator の形を設定する</td><td>string</td><td>circle / square</td><td>circle</td></tr><tr><td>src</td><td>画像 avator 用の画像アドレス</td><td>string</td><td></td><td></td></tr><tr><td>srcSet</td><td>ユーザーエージェントが使用する可能性のある画像ソースのセットを示すコンマで区切られた 1 つ以上の文字列のリスト</td><td>string</td><td></td><td></td></tr><tr><td>alt</td><td>この属性は画像の代替テキストの説明を定義します。</td><td>string</td><td></td><td></td></tr><tr><td>fit</td><td>画像 avator のコンテナに画像がどのようにフィットするかを設定します。</td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>cover</td></tr></tbody></table>", 1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("イベント ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "img のロードエラー時のハンドラ、デフォルトのフォールバック動作を防ぐために false を返します。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "(e: Event)")])])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スロット ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "| Slot Name | Description | | default | avator の内容をカスタマイズ |", -1);

function avatarvue_type_template_id_273690ba_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", avatarvue_type_template_id_273690ba_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "avator",
    content: "Avator",
    href: "#avator",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [avatarvue_type_template_id_273690ba_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#avator"
    })]),
    _: 1
  }), avatarvue_type_template_id_273690ba_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben",
    content: "基本",
    href: "#ji-ben",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [avatarvue_type_template_id_273690ba_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben"
    })]),
    _: 1
  }), avatarvue_type_template_id_273690ba_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [avatarvue_type_template_id_273690ba_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "taipu",
    content: "タイプ",
    href: "#taipu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#taipu"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "imezidu-miip-mierashi-nohuorubatuku",
    content: "イメージ読み込みエラー時のフォールバック",
    href: "#imezidu-miip-mierashi-nohuorubatuku",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#imezidu-miip-mierashi-nohuorubatuku"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "imezigasonokontenanidonoyounihuitutosuruka",
    content: "イメージがそのコンテナにどのようにフィットするか",
    href: "#imezigasonokontenanidonoyounihuitutosuruka",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#imezigasonokontenanidonoyounihuitutosuruka"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), _hoisted_15]), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ibento",
    content: "イベント",
    href: "#ibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ibento"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "surotuto",
    content: "スロット",
    href: "#surotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#surotuto"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/avatar.md?vue&type=template&id=273690ba

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/avatar.md?vue&type=script&lang=ts

/* harmony default export */ var avatarvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        withCtx: _withCtx
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", {
        class: "sub-title"
      }, "circle", -1);

      const _hoisted_2 = {
        class: "demo-basic--circle"
      };
      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", {
        class: "sub-title"
      }, "square", -1);

      const _hoisted_5 = {
        class: "demo-basic--circle"
      };
      const _hoisted_6 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_avatar = _resolveComponent("el-avatar");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          class: "demo-avatar demo-basic"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_1, _createElementVNode("div", _hoisted_2, [_createElementVNode("div", _hoisted_3, [_createVNode(_component_el_avatar, {
              size: 50,
              src: _ctx.circleUrl
            }, null, 8, ["src"])]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.sizeList, size => {
              return _openBlock(), _createElementBlock("div", {
                class: "block",
                key: size
              }, [_createVNode(_component_el_avatar, {
                size: size,
                src: _ctx.circleUrl
              }, null, 8, ["size", "src"])]);
            }), 128))])]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_4, _createElementVNode("div", _hoisted_5, [_createElementVNode("div", _hoisted_6, [_createVNode(_component_el_avatar, {
              shape: "square",
              size: 50,
              src: _ctx.squareUrl
            }, null, 8, ["src"])]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.sizeList, size => {
              return _openBlock(), _createElementBlock("div", {
                class: "block",
                key: size
              }, [_createVNode(_component_el_avatar, {
                shape: "square",
                size: size,
                src: _ctx.squareUrl
              }, null, 8, ["size", "src"])]);
            }), 128))])]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {
        data() {
          return {
            circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
            sizeList: ['large', 'medium', 'small']
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-type"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" user ");

      function render(_ctx, _cache) {
        const _component_el_avatar = _resolveComponent("el-avatar");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createElementVNode("div", null, [_createVNode(_component_el_avatar, {
          icon: "el-icon-user-solid"
        })]), _createElementVNode("div", null, [_createVNode(_component_el_avatar, {
          src: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        })]), _createElementVNode("div", null, [_createVNode(_component_el_avatar, null, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        })])])]);
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
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-type"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("img", {
        src: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      }, null, -1);

      function render(_ctx, _cache) {
        const _component_el_avatar = _resolveComponent("el-avatar");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_avatar, {
          size: 60,
          src: "https://empty",
          onError: _ctx.errorHandler
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onError"])])]);
      }

      const democomponentExport = {
        methods: {
          errorHandler() {
            return true;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-fit"
      };
      const _hoisted_2 = {
        class: "title"
      };

      function render(_ctx, _cache) {
        const _component_el_avatar = _resolveComponent("el-avatar");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.fits, fit => {
          return _openBlock(), _createElementBlock("div", {
            class: "block",
            key: fit
          }, [_createElementVNode("span", _hoisted_2, _toDisplayString(fit), 1), _createVNode(_component_el_avatar, {
            shape: "square",
            size: 100,
            fit: fit,
            src: _ctx.url
          }, null, 8, ["fit", "src"])]);
        }), 128))])]);
      }

      const democomponentExport = {
        data() {
          return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
// CONCATENATED MODULE: ./website/docs/jp/avatar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/avatar.md



avatarvue_type_script_lang_ts.render = avatarvue_type_template_id_273690ba_render

/* harmony default export */ var avatar = __webpack_exports__["default"] = (avatarvue_type_script_lang_ts);

/***/ })

}]);