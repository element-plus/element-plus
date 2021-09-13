(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[188],{

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/quickstart.md?vue&type=template&id=0b411e93

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Démarrage rapide");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Cette section décrit comment utiliser ElementPlus dans votre projet.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilisation des composants ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Introduction complète de tous les composants ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<blockquote><p>main.ts</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\napp.use(ElementPlus)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Introduction de composants à la demande ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Le code JS d'ElementPlus supporte par défaut le ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("tree shaking");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" basé sur les modules ES.");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<blockquote><p>App.vue</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-button</span>&gt;</span> Je suis ElButton <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;app&#39;</span>\n    <span class=\"hljs-attr\">components</span>: {\n      ElButton,\n    },\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 2);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Introduction du style ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nous ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "recommandons fortement d'apporter les fichiers de style complets directement", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", bien que cela puisse sembler augmenter la taille de l'application entière, cela évite d'introduiredes plugins d'outils de packaging supplémentaires (moins de charge) et vous pouvez également utiliser le ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CDN");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour charger les fichiers de style, ce qui accélère le chargement de votre application.");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Introduction par le biais de JS</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">ts</span></pre><p>Introduit par les en-têtes HTML</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- index.html --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/dist/index.css&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 4);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Si vous souhaitez que les styles soient également introduits à la demande, vous pouvez y faire référence en utilisant le plug-in fourni par l'outilcorrespondant. Voir ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("FAQ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Modèle de projet de construction rapide ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilisez vue-cli@4.5 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nous avons préparé les plugins vue-cli correspondants pour la nouvelle version de ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus plugins");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" que vous pouvez utiliser pour créer rapidement un projet basé sur les éléments suivants Projet Element Plus.");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilisation du kit de démarrage ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nous fournissons des ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("modèles de projet génériques ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" que vous pouvez utiliser directement, et nous fournissons également les éléments suivants vite ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("modèle");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Pour Utilisateurs de Laravel, nous disposons également d'un ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("modèle correspondant");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" que vous pouvez également télécharger et utiliser directement.");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Configuration globale ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Lors de l&#39;introduction d&#39;Element Plus, un objet de configuration globale peut être transmis. Cet objet supporte actuellement les champs <code>size</code> et <code>zIndex</code>. <code>size</code> permet de modifier la taille par défaut du composant et <code>zIndex</code> définit le z-index initial de la boîte pop-up (valeur par défaut : 2000). L&#39;élément Plus est présenté sur demande comme suit.</p><p>Présentation complète d&#39;ElementPlus.</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus, { <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;small&#39;</span>, <span class=\"hljs-attr\">zIndex</span>: <span class=\"hljs-number\">3000</span> })\n</code><span class=\"lang-mark\">js</span></pre><p>Présentation d&#39;ElementPlus à la demande.</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.config.globalProperties.$ELEMENT = option\napp.use(ElButton)\n</code><span class=\"lang-mark\">js</span></pre><p>Avec les paramètres ci-dessus, tous les composants du projet ayant la propriété <code>size</code> auront une taille par défaut de &#39;small&#39; et l&#39;index z initial de la boîte pop-up sera de 3000.</p>", 6);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilisation de Nuxt.js ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nous pouvons également utiliser ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nuxt.js");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour.");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
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

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Démarrage ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Maintenant qu'un environnement de développement basé sur Vue et Element Plus a été mis en place, il est temps d'écrire du code. Consultez la documentation de chaque composant pour savoir comment les utiliser.", -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Questions fréquemment posées ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Je veux introduire des composants et des styles à la demande en même temps. ");

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chargement des styles à la demande en utilisant vite ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Si vous utilisez ");

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("vite");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" comme outil de compilation, vous devrez d'abord installer ");

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "vite-plugin-element-plus", -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour charger les styles à la demande.");

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add vite-plugin-element-plus -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> ou</span>\nnpm install vite-plugin-element-plus -D\n</code><span class=\"lang-mark\">sh</span></pre><p>Ensuite, ajoutez le code suivant au fichier <code>vite.config.js</code> :</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { defineConfig } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite&#39;</span>\n<span class=\"hljs-keyword\">import</span> vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;@vitejs/plugin-vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> VitePluginElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite-plugin-element-plus&#39;</span>\n\n<span class=\"hljs-comment\">// https://vitejs.dev/config/</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineConfig(<span class=\"hljs-function\">(<span class=\"hljs-params\">{ mode }</span>) =&gt;</span> {\n  <span class=\"hljs-attr\">plugins</span>: [\n    vue(),\n    VitePluginElementPlus({\n      <span class=\"hljs-comment\">// Si vous devez utiliser le fichier source [nom du composant].scss, vous</span>\n      <span class=\"hljs-comment\">// devez le décommenter ci-dessous.</span>\n      <span class=\"hljs-comment\">// Pour toutes les API, vous pouvez consulter la documentation à l&#39;adresse</span>\n      <span class=\"hljs-comment\">// https://github.com/element-plus/vite-plugin-element-plus.</span>\n      <span class=\"hljs-comment\">// pour les commentaires de la documentation</span>\n      <span class=\"hljs-comment\">// useSource: true</span>\n      <span class=\"hljs-attr\">format</span>: mode === <span class=\"hljs-string\">&#39;development&#39;</span> ? <span class=\"hljs-string\">&#39;esm&#39;</span> : <span class=\"hljs-string\">&#39;cjs&#39;</span>,\n    }),\n  ],\n})\n</code><span class=\"lang-mark\">ts</span></pre>", 3);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chargement des styles à la demande avec webpack ");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Si vous utilisez webpack comme outil de compilation, vous devez d&#39;abord installer <code>babel-plugin-import</code> pour charger les styles à la demande.</p><pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add babel-plugin-import -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> ou</span>\nnpm install babel-plugin-import -D\n</code><span class=\"lang-mark\">sh</span></pre><p>Ensuite, vous devez ajouter le code suivant à votre fichier <code>babel.config.js</code>.</p><blockquote><p>babel.config.js</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-built_in\">module</span>.exports = {\n<span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">plugins</span>: [\n    [\n      <span class=\"hljs-string\">&quot;import&quot;</span>,\n      {\n        <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n        <span class=\"hljs-comment\">// import component</span>\n        <span class=\"hljs-attr\">customName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/components/<span class=\"hljs-subst\">${name}</span>`</span>\n        },\n        <span class=\"hljs-comment\">// import style</span>\n        <span class=\"hljs-attr\">customStyleName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n           <span class=\"hljs-comment\">// Si vous avez besoin du fichier [nom].scss, vous devez commenter la</span>\n          <span class=\"hljs-comment\">// ligne de code précédente et décommenter la ligne de code suivante.</span>\n          <span class=\"hljs-comment\">// return `element-plus/lib/components/${name}/style`</span>\n          <span class=\"hljs-comment\">// Si vous avez besoin du fichier [nom].css, vous devez renvoyer la ligne</span>\n          <span class=\"hljs-comment\">// suivante</span>\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/components/<span class=\"hljs-subst\">${name}</span>/style/css`</span>\n        },\n      },\n    ],\n  ]\n}\n</code><span class=\"lang-mark\">js</span></pre>", 5);

function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    content: "Démarrage rapide",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "utilisation-des-composants",
    content: "Utilisation des composants",
    href: "#utilisation-des-composants",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#utilisation-des-composants"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "introduction-complete-de-tous-les-composants",
    content: "Introduction complète de tous les composants",
    href: "#introduction-complete-de-tous-les-composants",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#introduction-complete-de-tous-les-composants"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "introduction-de-composants-a-la-demande",
    content: "Introduction de composants à la demande",
    href: "#introduction-de-composants-a-la-demande",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#introduction-de-composants-a-la-demande"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/guides/tree-shaking/"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), _hoisted_11]), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "introduction-du-style",
    content: "Introduction du style",
    href: "#introduction-du-style",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#introduction-du-style"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_15, _hoisted_16, _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), _hoisted_19]), _hoisted_20, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "/#/fr-FR/component/quickstart#faqs"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  })]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "modele-de-projet-de-construction-rapide",
    content: "Modèle de projet de construction rapide",
    href: "#modele-de-projet-de-construction-rapide",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#modele-de-projet-de-construction-rapide"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "utilisez-vue-cli-four-five",
    content: "Utilisez vue-cli@4.5",
    href: "#utilisez-vue-cli-four-five",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#utilisez-vue-cli-four-five"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/vue-cli-plugin-element-plus"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), _hoisted_30]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "utilisation-du-kit-de-demarrage",
    content: "Utilisation du kit de démarrage",
    href: "#utilisation-du-kit-de-demarrage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#utilisation-du-kit-de-demarrage"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-vite-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-in-laravel-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), _hoisted_38]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "configuration-globale",
    content: "Configuration globale",
    href: "#configuration-globale",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#configuration-globale"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "utilisation-de-nuxt-js",
    content: "Utilisation de Nuxt.js",
    href: "#utilisation-de-nuxt-js",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#utilisation-de-nuxt-js"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://nuxtjs.org"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_48]),
    _: 1
  }), _hoisted_49]), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "demarrage",
    content: "Démarrage",
    href: "#demarrage",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#demarrage"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "questions-frequemment-posees",
    content: "Questions fréquemment posées",
    href: "#questions-frequemment-posees",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#questions-frequemment-posees"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "je-veux-introduire-des-composants-et-des-styles-a-la-demande-en-meme-temps",
    content: "Je veux introduire des composants et des styles à la demande en même temps.",
    href: "#je-veux-introduire-des-composants-et-des-styles-a-la-demande-en-meme-temps",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#je-veux-introduire-des-composants-et-des-styles-a-la-demande-en-meme-temps"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chargement-des-styles-a-la-demande-en-utilisant-vite",
    content: "Chargement des styles à la demande en utilisant vite",
    href: "#chargement-des-styles-a-la-demande-en-utilisant-vite",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chargement-des-styles-a-la-demande-en-utilisant-vite"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57]),
    _: 1
  }), _hoisted_58, _hoisted_59, _hoisted_60]), _hoisted_61, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chargement-des-styles-a-la-demande-avec-webpack",
    content: "Chargement des styles à la demande avec webpack",
    href: "#chargement-des-styles-a-la-demande-avec-webpack",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_64, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chargement-des-styles-a-la-demande-avec-webpack"
    })]),
    _: 1
  }), _hoisted_65, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/quickstart.md?vue&type=template&id=0b411e93

// CONCATENATED MODULE: ./website/docs/fr-FR/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);