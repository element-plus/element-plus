(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[227],{

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/custom-theme.md?vue&type=template&id=d6552ef4

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタムテーマ ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "要素は BEM スタイルの CSS を使用しているので、スタイルを簡単に上書きすることができます。しかし、テーマの色を青からオレンジや緑に変更するなど、大規模にスタイルを置き換える必要がある場合は、1 つずつオーバーライドするのはあまり良いアイデアではないかもしれません。スタイル変数を変更する方法を 4 つ用意しています。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テーマカラーの変更 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus のテーマカラーを変更したいなら、");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テーマプレビューサイト");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("がおすすめです。Element Plus のテーマカラーは、明るくて親しみやすいブルーです。これを変更することで、Element Plus をより視覚的に特定のプロジェクトに結びつけることができます。");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("上記のウェブサイトでは、リアルタイムで新しいテーマカラーのテーマをプレビューすることができ、あなたが直接ダウンロードするために新しいテーマカラーに基づいた完全なスタイルパッケージを生成することができます（あなたのプロジェクトで新しいスタイルファイルをインポートするには、このセクションの "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "カスタムテーマをインポート"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" または "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "コンポーネントテーマをオンデマンドでインポート"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の部分を参照してください）。")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("プロジェクト内の SCSS 変数を更新する ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p><code>theme-chalk</code> は SCSS で書かれています。プロジェクトでも SCSS を使用している場合は、Element Plus のスタイル変数を直接変更することができます。例えば <code>element-variables.scss</code> のように、新しいスタイルファイルを作成します :</p><pre class=\"example-code\"><code class=\"hljs language-html\">/* theme color */ $--color-primary: teal; /* icon font path, required */\n$--font-path: &#39;~element-plus/lib/theme-chalk/fonts&#39;; @import\n&quot;~element-plus/packages/theme-chalk/src/index&quot;;\n</code><span class=\"lang-mark\">html</span></pre><p>そして、プロジェクトのエントリーファイルで、Element Plus の内蔵 CSS の代わりにこのスタイルファイルをインポートします。:</p><pre class=\"example-code\"><code class=\"hljs language-JS\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;./element-variables.scss&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\n</code><span class=\"lang-mark\">JS</span></pre><div class=\"tip\"><p>アイコンのフォントパスを Element のフォントファイルの相対パスにオーバーライドする必要があるので注意してください。</p></div>", 5);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CLI テーマツール ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "プロジェクトが SCSS を使用していない場合は、CLI テーマツールを使用してテーマをカスタマイズすることができます:", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "インストール", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>はじめにテーマジェネレータをグローバルまたはローカルにインストールします。ローカルにインストールすることをお勧めします。なぜなら、他の人があなたのプロジェクトをクローンしたときに npm が自動的にインストールしてくれるからです。</p><pre class=\"example-code\"><code class=\"hljs language-shell\">npm i element-theme -g\n</code><span class=\"lang-mark\">sh</span></pre><p>そして、npm や GitHub から chalk テーマをインストールします。</p><pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\">#</span><span class=\"bash\"> from npm</span>\nnpm i element-theme-chalk -D\n<span class=\"hljs-meta\">\n#</span><span class=\"bash\"> from GitHub</span>\nnpm i https://github.com/ElementUI/theme-chalk -D\n</code><span class=\"lang-mark\">sh</span></pre>", 4);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "変数ファイルの初期化", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>上記のパッケージのインストールに成功すると、CLI で <code>et</code> というコマンドが利用できます(ローカルにインストールされている場合は、代わりに <code>node_modules/.bin/et</code> を利用してください)。デフォルトで <code>element-variables.scss</code> に出力される変数ファイルを初期化するために <code>-i</code> を実行してください。初期化されたファイルはデフォルトで <code>element-variables.scss</code> に出力されます。</p><pre class=\"example-code\"><code class=\"hljs language-shell\">et -i [custom output file]\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ Generator variables file</span>\n</code><span class=\"lang-mark\">sh</span></pre><p><code>element-variables.scss</code> の中には、Element Plus のスタイル設定に使用したすべての変数があり、SCSS 形式で定義されています。以下はその一部です。:</p><pre class=\"example-code\"><code class=\"hljs language-css\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-id\">#409EFF</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-primary-light-1</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 10%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 53a8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-2</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 20%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 66b1ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-3</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 30%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 79bbff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-4</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 40%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 8cc5ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-5</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 50%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* a0cfff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-6</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 60%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* b3d8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-7</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 70%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* c6e2ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-8</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 80%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* d9ecff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-9</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 90%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* ecf5ff */</span>\n\n$<span class=\"hljs-selector-tag\">--color-success</span>: <span class=\"hljs-selector-id\">#67c23a</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-warning</span>: <span class=\"hljs-selector-id\">#e6a23c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-danger</span>: <span class=\"hljs-selector-id\">#f56c6c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-info</span>: <span class=\"hljs-selector-id\">#909399</span> !<span class=\"hljs-selector-tag\">default</span>;\n\n...\n</code><span class=\"lang-mark\">css</span></pre>", 4);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "変数の変更", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p><code>element-variables.scss</code>を編集するだけです。例えば、テーマの色を赤に変更するは以下の通りです:</p><pre class=\"example-code\"><code class=\"hljs language-CSS\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-tag\">red</span>;\n</code><span class=\"lang-mark\">CSS</span></pre>", 2);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "ビルドテーマ", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>変数ファイルを保存したら、<code>et</code> を使って自分のテーマを構築してください。 パラメータ <code>-w</code> を追加することで、<code>watch</code> モードを有効にすることができます。また、変数ファイルの出力をカスタマイズした場合は、パラメータ <code>-c</code> と変数ファイル名を追加する必要があります。デフォルトでは、ビルドテーマファイルは <code>./theme</code> 内に置かれます。パラメータ <code>-o</code> で出力ディレクトリを指定することができます。</p><pre class=\"example-code\"><code class=\"hljs language-shell\">et\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ build theme font</span>\n<span class=\"hljs-meta\">&gt;</span><span class=\"bash\"> ✔ build element theme</span>\n</code><span class=\"lang-mark\">sh</span></pre>", 2);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタムテーマを使用する ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "カスタムテーマをインポートする", -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>独自のテーマをインポートすることは、デフォルトのテーマをインポートするのと同じですが、今回は <code>オンラインテーマローラー</code> または<code>CLIツール</code> からビルドされたファイルをインポートします。</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;../theme/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\ncreateApp(App).use(ElementPlus)\n</code><span class=\"lang-mark\">js</span></pre>", 2);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "コンポーネントテーマをオンデマンドでインポート", -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>オンデマンドインポートに <code>babel-plugin-component</code> を使用している場合は、<code>.babelrc</code> を修正し、<code>styleLibraryName</code> を <code>.babelrc</code> からの相対パスにカスタムテーマが置かれているパスに指定するだけです。 <code>~</code> は必須であることに注意してください。</p><pre class=\"example-code\"><code class=\"hljs language-json\">{\n  <span class=\"hljs-attr\">&quot;plugins&quot;</span>: [\n    [\n      <span class=\"hljs-string\">&quot;component&quot;</span>,\n      {\n        <span class=\"hljs-attr\">&quot;libraryName&quot;</span>: <span class=\"hljs-string\">&quot;element-plus&quot;</span>,\n        <span class=\"hljs-attr\">&quot;styleLibraryName&quot;</span>: <span class=\"hljs-string\">&quot;~theme&quot;</span>\n      }\n    ]\n  ]\n}\n</code><span class=\"lang-mark\">json</span></pre>", 2);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("もし、");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "babel-plugin-component", -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("に慣れていない場合は、");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("a", {
  href: "./#/en-US/component/quickstart"
}, "クイックスタート", -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を参照してください。詳細は ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-theme", -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の ");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("project repository");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を参照してください。");

function render(_ctx, _cache) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamutema",
    content: "カスタムテーマ",
    href: "#kasutamutema",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamutema"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "temakaranobian-geng",
    content: "テーマカラーの変更",
    href: "#temakaranobian-geng",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#temakaranobian-geng"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://element-plus.github.io/theme-chalk-preview/#/en-US"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_7]), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "puroziekutonei-no-scss-bian-shu-wogeng-xin-suru",
    content: "プロジェクト内の SCSS 変数を更新する",
    href: "#puroziekutonei-no-scss-bian-shu-wogeng-xin-suru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#puroziekutonei-no-scss-bian-shu-wogeng-xin-suru"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cli-tematuru",
    content: "CLI テーマツール",
    href: "#cli-tematuru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cli-tematuru"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "insutoru",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#insutoru"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bian-shu-huairunochu-qi-hua",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bian-shu-huairunochu-qi-hua"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bian-shu-nobian-geng",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bian-shu-nobian-geng"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "birudotema",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#birudotema"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamutemawoshi-yong-suru",
    content: "カスタムテーマを使用する",
    href: "#kasutamutemawoshi-yong-suru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamutemawoshi-yong-suru"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamutemawoinpotosuru",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38, _hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamutemawoinpotosuru"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "konponentotemawoondemandodeinpoto",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42, _hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#konponentotemawoondemandodeinpoto"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/ElementUI/element-theme"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53]),
    _: 1
  }), _hoisted_54]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/custom-theme.md?vue&type=template&id=d6552ef4

// CONCATENATED MODULE: ./website/docs/jp/custom-theme.md

const script = {}
script.render = render

/* harmony default export */ var custom_theme = __webpack_exports__["default"] = (script);

/***/ })

}]);