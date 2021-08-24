(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[261],{

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/quickstart.md?vue&type=template&id=6787dafb

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("すぐに始められる");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "ここでは、プロジェクトでElementPlusを使用する方法について説明します。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("コンポーネントの使用 ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("すべてのコンポーネントの完全導入 ");

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<blockquote><p>main.ts</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\napp.use(ElementPlus)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("オンデマンドでコンポーネントを導入 ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElementPlus", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("的なJS代弁者认为支持基于ESモジュール的");

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("树揺");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("。");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<blockquote><p>App.vue</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-button</span>&gt;</span>\n    私はElButtonです\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;app&#39;</span>\n  <span class=\"hljs-attr\">components</span>: {\n    ElButton,\n  },\n})\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 2);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("スタイルの紹介 ");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("スタイルの導入は、");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "完全なスタイルファイルを直接導入することを強くお勧めします", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("。アプリケーション全体のサイズが大きくなるように見えるかもしれませんが、 これによりパッケージングツールのプラグインを追加で導入する必要がなくなります（負担が少なくなります）。また、 ");

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("CDN");

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("を使用することもできます。 a-cdn/) を使ってスタイルファイルを読み込むことで、アプリケーションの読み込みが速くなります。");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>JSの方法で紹介されました</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">ts</span></pre><p>HTMLヘッダで紹介</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- index.html --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/dist/index.css&quot;</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 4);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("スタイルもオンデマンドで導入したい場合は、対応するツールが提供するプラグインを使って参照することができます。 ");

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("よくあるご質問");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("をご覧ください。");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("クイックビルドプロジェクトテンプレート ");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("vue-cli@4.5 をご利用ください。 ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("の新バージョンに対応したvue-cliプラグインを用意しました。 をベースにしたプロジェクトを素早く構築するために使用できる");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Element Plus plugins");

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("を提供します。 Element Plusプロジェクト。");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("スターターキットの使い方 ");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("そのまま使える汎用的な");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("プロジェクトテンプレート");

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("を提供し、さらには Vite");

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("テンプレート");

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("を使用しています。 のために Laravelをお使いの方は、対応する");

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("テンプレート");

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("も用意していますので、そのままダウンロードしてお使いいただけます。");

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("グローバルコンフィギュレーション ");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Element Plusを導入する際に、グローバルコンフィギュレーションオブジェクトを渡すことができます。 このオブジェクトは現在、<code>size</code> と <code>zIndex</code> フィールドをサポートしています。 サイズ は、コンポーネントのデフォルトサイズを変更するために使用され、<code>zIndex</code>は、ポップアップボックスの初期z-indexを設定します（デフォルト値：2000）。 要求に応じて「エレメント・プラス」を以下のように導入します。</p><p>ElementPlusを完全紹介。</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus, { <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;small&#39;</span>, <span class=\"hljs-attr\">zIndex</span>: <span class=\"hljs-number\">3000</span> });\n</code><span class=\"lang-mark\">js</span></pre><p>ElementPlusのオンデマンド導入。</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.config.globalProperties.$ELEMENT = option\napp.use(ElButton);\n</code><span class=\"lang-mark\">js</span></pre><p>上記の設定により、プロジェクト内で<code>size</code>プロパティを持つすべてのコンポーネントのデフォルトサイズは「small」となり、ポップアップボックスの初期z-indexは3000となります。</p>", 6);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Nuxt.jsを使う ");

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("また、");

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Nuxt.js");

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("を使って");

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "glitch-embed-wrap",
  style: {
    "height": "420px",
    "width": "100%"
  }
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("iframe", {
  src: "https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true",
  alt: "nuxt-with-element on glitch",
  style: {
    "height": "100%",
    "width": "100%",
    "border": "0"
  }
})], -1);

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("スタートアップ ");

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "VueとElement Plusをベースにした開発環境が整ったところで、いよいよコードを書いてみましょう。 各コンポーネントの使用方法については、各コンポーネントのドキュメントを参照してください。", -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("よくあるご質問 ");

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("コンポーネントとスタイルを同時にオンデマンドで導入したいのですが、どのようにすればよいでしょうか？ ");

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("viteでオンデマンドのローディングスタイル ");

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ビルドパッケージングツールとして");

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("vite");

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("を使用している場合は、オンデマンドでスタイルを読み込むために、まず ");

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "vite-plugin-element-plus", -1);

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" をインストールする必要があります。");

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add vite-plugin-element-plus -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> または</span>\nnpm install vite-plugin-element-plus -D\n</code><span class=\"lang-mark\">sh</span></pre><p>次に、<code>vite.config.js</code>ファイルに以下のコードを追加します。</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { defineConfig } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite&#39;</span>\n<span class=\"hljs-keyword\">import</span> vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;@vitejs/plugin-vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> VitePluginElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite-plugin-element-plus&#39;</span>\n\n<span class=\"hljs-comment\">// https://vitejs.dev/config/</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineConfig({\n  <span class=\"hljs-attr\">plugins</span>: [\n    vue(),\n    VitePluginElementPlus({\n      <span class=\"hljs-comment\">// コンポーネント名].scssのソースファイルを使用する必要がある場合は、以下のようにコメントアウトを解除する必要があります。</span>\n      <span class=\"hljs-comment\">// useSource: true</span>\n      <span class=\"hljs-comment\">// すべてのAPIについては、https://github.com/element-plus/vite-plugin-element-plus のドキュメントノートを参照してください。</span>\n    }),\n  ],\n})\n\n</code><span class=\"lang-mark\">ts</span></pre>", 3);

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("webpackによるオンデマンドでのスタイルの読み込み ");

var _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>ビルドパッケージングツールとしてwebpackを使用している場合は、必要に応じてスタイルを読み込むために、まず<code>babel-plugin-import</code>をインストールする必要があります。</p><pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add babel-plugin-import -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> または</span>\nnpm install babel-plugin-import -D\n</code><span class=\"lang-mark\">sh</span></pre><p>次に、以下のコードを <code>babel.config.js</code> ファイルに追加してください。</p><blockquote><p>babel.config.js</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">plugins</span>: [\n    <span class=\"hljs-comment\">// ...others</span>\n    [\n      <span class=\"hljs-string\">&quot;import&quot;</span>,\n      {\n        <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n        <span class=\"hljs-attr\">customStyleName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-comment\">// [name].cssファイルが必要な場合は、次の行を返す必要があります。</span>\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/es/<span class=\"hljs-subst\">${name}</span>/style/css`</span>\n          <span class=\"hljs-comment\">// [name].scssファイルが必要な場合は、前の行のコードをコメントアウトし、次の行のコードをアンコメントする必要があります。</span>\n          <span class=\"hljs-comment\">// return `element-plus/es/${name}/style`;</span>\n        },\n      },\n    ],\n  ],\n};\n</code><span class=\"lang-mark\">js</span></pre>", 5);

function render(_ctx, _cache) {
  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    content: "すぐに始められる",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2];
    }),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "konponentono-shi-yong",
    content: "コンポーネントの使用",
    href: "#konponentono-shi-yong",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#konponentono-shi-yong"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "subetenokonponentono-wan-quan-dao-ru",
    content: "すべてのコンポーネントの完全導入",
    href: "#subetenokonponentono-wan-quan-dao-ru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#subetenokonponentono-wan-quan-dao-ru"
      })];
    }),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ondemandodekonponentowo-dao-ru",
    content: "オンデマンドでコンポーネントを導入",
    href: "#ondemandodekonponentowo-dao-ru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ondemandodekonponentowo-dao-ru"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_9, _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://webpack.js.org/guides/tree-shaking/"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12]), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "sutairuno-shao-jie",
    content: "スタイルの紹介",
    href: "#sutairuno-shao-jie",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#sutairuno-shao-jie"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_16, _hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://www.cloudflare.com/learning/cdn/what-is-"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20]), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "/#/zh-cn/component/quickstart#yokuarugo-zhi-wen"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "kuitukubirudopuroziekutotenpureto",
    content: "クイックビルドプロジェクトテンプレート",
    href: "#kuitukubirudopuroziekutotenpureto",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#kuitukubirudopuroziekutotenpureto"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "vue-cli-four-five-wogo-li-yongkudasai.",
    content: "vue-cli@4.5 をご利用ください。",
    href: "#vue-cli-four-five-wogo-li-yongkudasai.",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#vue-cli-four-five-wogo-li-yongkudasai."
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/vue-cli-plugin-element-plus"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_32]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "sutatakitutono-shii-fang",
    content: "スターターキットの使い方",
    href: "#sutatakitutono-shii-fang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#sutatakitutono-shii-fang"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-starter"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-vite-starter"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-in-laravel-starter"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_39];
    }),
    _: 1
  }), _hoisted_40]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "gurobarukonhuigiyuresiyon",
    content: "グローバルコンフィギュレーション",
    href: "#gurobarukonhuigiyuresiyon",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_41, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#gurobarukonhuigiyuresiyon"
      })];
    }),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "nuxt-jswo-shiu",
    content: "Nuxt.jsを使う",
    href: "#nuxt-jswo-shiu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_48, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#nuxt-jswo-shiu"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_49, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://nuxtjs.org"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_50];
    }),
    _: 1
  }), _hoisted_51]), _hoisted_52, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "sutatoatupu",
    content: "スタートアップ",
    href: "#sutatoatupu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_53, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#sutatoatupu"
      })];
    }),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "yokuarugo-zhi-wen",
    content: "よくあるご質問",
    href: "#yokuarugo-zhi-wen",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_55, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#yokuarugo-zhi-wen"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "konponentotosutairuwo-tong-shiniondemandode-dao-rusitainodesuga-donoyounisurebayoidesiyouka",
    content: "コンポーネントとスタイルを同時にオンデマンドで導入したいのですが、どのようにすればよいでしょうか？",
    href: "#konponentotosutairuwo-tong-shiniondemandode-dao-rusitainodesuga-donoyounisurebayoidesiyouka",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_56, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#konponentotosutairuwo-tong-shiniondemandode-dao-rusitainodesuga-donoyounisurebayoidesiyouka"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "vitedeondemandonorodeingusutairu",
    content: "viteでオンデマンドのローディングスタイル",
    href: "#vitedeondemandonorodeingusutairu",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_57, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#vitedeondemandonorodeingusutairu"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_58, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_59];
    }),
    _: 1
  }), _hoisted_60, _hoisted_61, _hoisted_62]), _hoisted_63, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "webpackniyoruondemandodenosutairuno-dumi-ipmi",
    content: "webpackによるオンデマンドでのスタイルの読み込み",
    href: "#webpackniyoruondemandodenosutairuno-dumi-ipmi",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_66, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#webpackniyoruondemandodenosutairuno-dumi-ipmi"
      })];
    }),
    _: 1
  }), _hoisted_67, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/quickstart.md?vue&type=template&id=6787dafb

// CONCATENATED MODULE: ./website/docs/jp/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);