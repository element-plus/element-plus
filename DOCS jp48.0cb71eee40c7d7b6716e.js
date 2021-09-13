(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[260],{

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/quickstart.md?vue&type=template&id=017cbc59

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("すぐに始められる");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ここでは、プロジェクトで ElementPlus を使用する方法について説明します。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("コンポーネントの使用 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("すべてのコンポーネントの完全導入 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<blockquote><p>main.ts</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\napp.use(ElementPlus)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("オンデマンドでコンポーネントを導入 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("的な JS 代弁者认为支持基于 ES モジュール的");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("树揺");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<blockquote><p>App.vue</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-button</span>&gt;</span> 私はElButtonです <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;app&#39;</span>\n    <span class=\"hljs-attr\">components</span>: {\n      ElButton,\n    },\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 2);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スタイルの紹介 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スタイルの導入は、");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "完全なスタイルファイルを直接導入することを強くお勧めします", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。アプリケーション全体のサイズが大きくなるように見えるかもしれませんが、 これによりパッケージングツールのプラグインを追加で導入する必要がなくなります（負担が少なくなります）。また、 ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CDN");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を使用することもできます。 a-cdn/) を使ってスタイルファイルを読み込むことで、アプリケーションの読み込みが速くなります。");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>JS の方法で紹介されました</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">ts</span></pre><p>HTML ヘッダで紹介</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- index.html --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/dist/index.css&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 4);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スタイルもオンデマンドで導入したい場合は、対応するツールが提供するプラグインを使って参照することができます。 ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("よくあるご質問");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("をご覧ください。");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("クイックビルドプロジェクトテンプレート ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("vue-cli@4.5 をご利用ください。 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("の新バージョンに対応した vue-cli プラグインを用意しました。 をベースにしたプロジェクトを素早く構築するために使用できる");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus plugins");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を提供します。 Element Plus プロジェクト。");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スターターキットの使い方 ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("そのまま使える汎用的な");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("プロジェクトテンプレート");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を提供し、さらには Vite");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テンプレート");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を使用しています。 のために Laravel をお使いの方は、対応する");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テンプレート");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("も用意していますので、そのままダウンロードしてお使いいただけます。");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("グローバルコンフィギュレーション ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Element Plus を導入する際に、グローバルコンフィギュレーションオブジェクトを渡すことができます。 このオブジェクトは現在、<code>size</code> と <code>zIndex</code> フィールドをサポートしています。 サイズ は、コンポーネントのデフォルトサイズを変更するために使用され、<code>zIndex</code>は、ポップアップボックスの初期 z-index を設定します（デフォルト値：2000）。 要求に応じて「エレメント・プラス」を以下のように導入します。</p><p>ElementPlus を完全紹介。</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus, { <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;small&#39;</span>, <span class=\"hljs-attr\">zIndex</span>: <span class=\"hljs-number\">3000</span> })\n</code><span class=\"lang-mark\">js</span></pre><p>ElementPlus のオンデマンド導入。</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.config.globalProperties.$ELEMENT = option\napp.use(ElButton)\n</code><span class=\"lang-mark\">js</span></pre><p>上記の設定により、プロジェクト内で<code>size</code>プロパティを持つすべてのコンポーネントのデフォルトサイズは「small」となり、ポップアップボックスの初期 z-index は 3000 となります。</p>", 6);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nuxt.js を使う ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("また、");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nuxt.js");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を使って");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "glitch-embed-wrap",
  style: {
    "height": "420px",
    "width": "100%"
  }
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("iframe", {
  src: "https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true",
  alt: "nuxt-with-element on glitch",
  style: {
    "height": "100%",
    "width": "100%",
    "border": "0"
  }
})], -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スタートアップ ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Vue と Element Plus をベースにした開発環境が整ったところで、いよいよコードを書いてみましょう。 各コンポーネントの使用方法については、各コンポーネントのドキュメントを参照してください。", -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("よくあるご質問 ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("コンポーネントとスタイルを同時にオンデマンドで導入したいのですが、どのようにすればよいでしょうか？ ");

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("vite でオンデマンドのローディングスタイル ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ビルドパッケージングツールとして");

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("vite");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を使用している場合は、オンデマンドでスタイルを読み込むために、まず ");

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "vite-plugin-element-plus", -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" をインストールする必要があります。");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add vite-plugin-element-plus -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> または</span>\nnpm install vite-plugin-element-plus -D\n</code><span class=\"lang-mark\">sh</span></pre><p>次に、<code>vite.config.js</code>ファイルに以下のコードを追加します。</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { defineConfig } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite&#39;</span>\n<span class=\"hljs-keyword\">import</span> vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;@vitejs/plugin-vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> VitePluginElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite-plugin-element-plus&#39;</span>\n\n<span class=\"hljs-comment\">// https://vitejs.dev/config/</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineConfig(<span class=\"hljs-function\">(<span class=\"hljs-params\">{ mode }</span>) =&gt;</span> {\n  <span class=\"hljs-attr\">plugins</span>: [\n    vue(),\n    VitePluginElementPlus({\n      <span class=\"hljs-comment\">// コンポーネント名].scssのソースファイルを使用する必要がある場合は、以下のようにコメントアウトを解除する必要があります。</span>\n      <span class=\"hljs-comment\">// useSource: true</span>\n      <span class=\"hljs-comment\">// すべてのAPIについては、https://github.com/element-plus/vite-plugin-element-plus のドキュメントノートを参照してください。</span>\n      <span class=\"hljs-attr\">format</span>: mode === <span class=\"hljs-string\">&#39;development&#39;</span> ? <span class=\"hljs-string\">&#39;esm&#39;</span> : <span class=\"hljs-string\">&#39;cjs&#39;</span>,\n    }),\n  ],\n})\n</code><span class=\"lang-mark\">ts</span></pre>", 3);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("webpack によるオンデマンドでのスタイルの読み込み ");

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>ビルドパッケージングツールとして webpack を使用している場合は、必要に応じてスタイルを読み込むために、まず<code>babel-plugin-import</code>をインストールする必要があります。</p><pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add babel-plugin-import -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> または</span>\nnpm install babel-plugin-import -D\n</code><span class=\"lang-mark\">sh</span></pre><p>次に、以下のコードを <code>babel.config.js</code> ファイルに追加してください。</p><blockquote><p>babel.config.js</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">plugins</span>: [\n    <span class=\"hljs-comment\">// ...others</span>\n    [\n      <span class=\"hljs-string\">&#39;import&#39;</span>,\n      {\n        <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n        <span class=\"hljs-attr\">customStyleName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-comment\">// [name].cssファイルが必要な場合は、次の行を返す必要があります。</span>\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/es/<span class=\"hljs-subst\">${name}</span>/style/css`</span>\n          <span class=\"hljs-comment\">// [name].scssファイルが必要な場合は、前の行のコードをコメントアウトし、次の行のコードをアンコメントする必要があります。</span>\n          <span class=\"hljs-comment\">// return `element-plus/es/${name}/style`;</span>\n        },\n      },\n    ],\n  ],\n}\n\n<span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">plugins</span>: [\n    [\n      <span class=\"hljs-string\">&#39;import&#39;</span>,\n      {\n        <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n        <span class=\"hljs-comment\">// import component</span>\n        <span class=\"hljs-attr\">customName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/components/<span class=\"hljs-subst\">${name}</span>`</span>\n        },\n        <span class=\"hljs-comment\">// import style</span>\n        <span class=\"hljs-attr\">customStyleName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-comment\">// [name].scssファイルが必要な場合は、前の行のコードをコメントアウトし、次の行のコードをアンコメントする必要があります。</span>\n          <span class=\"hljs-comment\">// return `element-plus/lib/components/${name}/style`</span>\n          <span class=\"hljs-comment\">// [name].cssファイルが必要な場合は、次の行を返す必要があります。</span>\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/components/<span class=\"hljs-subst\">${name}</span>/style/css`</span>\n        },\n      },\n    ],\n  ],\n}\n</code><span class=\"lang-mark\">js</span></pre>", 5);

function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    content: "すぐに始められる",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "konponentonoshi-yong",
    content: "コンポーネントの使用",
    href: "#konponentonoshi-yong",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#konponentonoshi-yong"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "subetenokonponentonowan-quan-dao-ru",
    content: "すべてのコンポーネントの完全導入",
    href: "#subetenokonponentonowan-quan-dao-ru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#subetenokonponentonowan-quan-dao-ru"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ondemandodekonponentowodao-ru",
    content: "オンデマンドでコンポーネントを導入",
    href: "#ondemandodekonponentowodao-ru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ondemandodekonponentowodao-ru"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_9, _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/guides/tree-shaking/"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), _hoisted_12]), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sutairunoshao-jie",
    content: "スタイルの紹介",
    href: "#sutairunoshao-jie",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutairunoshao-jie"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_16, _hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://www.cloudflare.com/learning/cdn/what-is-"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), _hoisted_20]), _hoisted_21, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "/#/zh-cn/component/quickstart#yokuarugo-zhi-wen"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    _: 1
  }), _hoisted_27]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kuitukubirudopuroziekutotenpureto",
    content: "クイックビルドプロジェクトテンプレート",
    href: "#kuitukubirudopuroziekutotenpureto",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kuitukubirudopuroziekutotenpureto"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "vue-cli-four-five-wogoli-yong-kudasai.",
    content: "vue-cli@4.5 をご利用ください。",
    href: "#vue-cli-four-five-wogoli-yong-kudasai.",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vue-cli-four-five-wogoli-yong-kudasai."
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/vue-cli-plugin-element-plus"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31]),
    _: 1
  }), _hoisted_32]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sutatakitutonoshi-ifang",
    content: "スターターキットの使い方",
    href: "#sutatakitutonoshi-ifang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutatakitutonoshi-ifang"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-vite-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-in-laravel-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39]),
    _: 1
  }), _hoisted_40]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gurobarukonhuigiyuresiyon",
    content: "グローバルコンフィギュレーション",
    href: "#gurobarukonhuigiyuresiyon",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gurobarukonhuigiyuresiyon"
    })]),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "nuxt-js-woshi-u",
    content: "Nuxt.js を使う",
    href: "#nuxt-js-woshi-u",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#nuxt-js-woshi-u"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://nuxtjs.org"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_50]),
    _: 1
  }), _hoisted_51]), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sutatoatupu",
    content: "スタートアップ",
    href: "#sutatoatupu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutatoatupu"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "yokuarugozhi-wen",
    content: "よくあるご質問",
    href: "#yokuarugozhi-wen",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yokuarugozhi-wen"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "konponentotosutairuwotong-shi-niondemandodedao-ru-sitainodesuga-donoyounisurebayoidesiyouka",
    content: "コンポーネントとスタイルを同時にオンデマンドで導入したいのですが、どのようにすればよいでしょうか？",
    href: "#konponentotosutairuwotong-shi-niondemandodedao-ru-sitainodesuga-donoyounisurebayoidesiyouka",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#konponentotosutairuwotong-shi-niondemandodedao-ru-sitainodesuga-donoyounisurebayoidesiyouka"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "vite-deondemandonorodeingusutairu",
    content: "vite でオンデマンドのローディングスタイル",
    href: "#vite-deondemandonorodeingusutairu",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vite-deondemandonorodeingusutairu"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_58, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_59]),
    _: 1
  }), _hoisted_60, _hoisted_61, _hoisted_62]), _hoisted_63, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "webpack-niyoruondemandodenosutairunodu-miip-mi",
    content: "webpack によるオンデマンドでのスタイルの読み込み",
    href: "#webpack-niyoruondemandodenosutairunodu-miip-mi",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_66, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#webpack-niyoruondemandodenosutairunodu-miip-mi"
    })]),
    _: 1
  }), _hoisted_67, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/quickstart.md?vue&type=template&id=017cbc59

// CONCATENATED MODULE: ./website/docs/jp/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);