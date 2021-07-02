(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[171],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/layout.md?vue&type=template&id=54324acf

var layoutvue_type_template_id_54324acf_hoisted_1 = {
  class: "content element-doc"
};

var layoutvue_type_template_id_54324acf_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"layout\"><a class=\"header-anchor\" href=\"#layout\">¶</a> Layout</h2><p>Vous pouvez créer une mise en page facilement et rapidement grâce à une base de 24 colonnes.</p><div class=\"tip\"><p>The component uses flex layout by default, no need to set <code>type=&quot;flex&quot;</code> manually.</p><p>Please note that the parent container should avoid using <code>inline</code> related styles, which will cause the component to not fill up its width.</p></div><h3 id=\"mise-en-page-basique\"><a class=\"header-anchor\" href=\"#mise-en-page-basique\">¶</a> Mise en page basique</h3><p>Créez une grille de mise en page basique grâce aux colonnes.</p>", 5);

var layoutvue_type_template_id_54324acf_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Grâce à "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", vous pouvez arranger la mise en page en utilisant l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "span"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(".")])], -1);

var layoutvue_type_template_id_54324acf_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row>\n  <el-col :span=\"24\"><div class=\"grid-content bg-purple-dark\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"12\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"12\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var layoutvue_type_template_id_54324acf_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "espacement"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#espacement"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Espacement")], -1);

var layoutvue_type_template_id_54324acf_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "L'espacement entre colonnes est configurable.", -1);

var layoutvue_type_template_id_54324acf_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Utilisez l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "gutter"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" dans el-row pour spécifier l'espacement entre colonnes. La valeur par défaut est 0.")])], -1);

var layoutvue_type_template_id_54324acf_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"20\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var layoutvue_type_template_id_54324acf_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "mise-en-page-complexe"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mise-en-page-complexe"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Mise en page complexe")], -1);

var layoutvue_type_template_id_54324acf_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Vous pouvez former une mise en page complexe en combinant les systèmes de colonnes 1 / 24 comme vous le souhaitez.", -1);

var layoutvue_type_template_id_54324acf_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"20\">\n  <el-col :span=\"16\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"16\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var layoutvue_type_template_id_54324acf_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "decalage-des-colonnes"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#decalage-des-colonnes"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Décalage des colonnes")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Vous pouvez spécifier un décalage pour les colonnes.", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Utiliser l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" pour régler le décalage.")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"20\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"6\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"12\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "alignement"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#alignement"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Alignement")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Default use the flex layout to make flexible alignment of columns.", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("You can define the layout of child elements by setting "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "justify"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" attribute with start, center, end, space-between or space-around.")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"row-bg\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"center\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"end\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"space-between\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"space-around\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "mise-en-page-responsive"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mise-en-page-responsive"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Mise en page responsive")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Se basant sur le design responsive de Bootstrap, il existe cinq breakpoints déjà définit: xs, sm, md, lg and xl.", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"10\">\n  <el-col :xs=\"8\" :sm=\"6\" :md=\"4\" :lg=\"3\" :xl=\"1\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :xs=\"4\" :sm=\"6\" :md=\"8\" :lg=\"9\" :xl=\"11\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :xs=\"4\" :sm=\"6\" :md=\"8\" :lg=\"9\" :xl=\"11\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :xs=\"8\" :sm=\"6\" :md=\"4\" :lg=\"3\" :xl=\"1\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n\n<style>\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n</style>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"classes-pour-cacher-certains-elements\"><a class=\"header-anchor\" href=\"#classes-pour-cacher-certains-elements\">¶</a> Classes pour cacher certains éléments</h3><p>Element Plus fournit également une série de classes pour cacher des éléments dans certaines circonstances. Ces classes peuvent être ajoutées à n&#39;importe quel élément du DOM ou composant. Vous devrez importer le fichier CSS suivant pour pouvoir les utiliser:</p><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/lib/theme-chalk/display.css&#39;</span>;\n</code></pre><p>Ces classes sont:</p><ul><li><code>hidden-xs-only</code> - disparaît sur les très petits viewports uniquement</li><li><code>hidden-sm-only</code> - disparaît sur les petits viewports uniquement</li><li><code>hidden-sm-and-down</code> - disparaît sur les petits viewports et plus petits</li><li><code>hidden-sm-and-up</code> - disparaît sur les petits viewports et plus grand</li><li><code>hidden-md-only</code> - disparaît sur les viewports moyens uniquement</li><li><code>hidden-md-and-down</code> - disparaît sur les viewports moyens et plus petits</li><li><code>hidden-md-and-up</code> - disparaît sur les viewports moyens et plus grand</li><li><code>hidden-lg-only</code> - disparaît sur les viewports larges uniquement</li><li><code>hidden-lg-and-down</code> - disparaît sur les viewports larges et plus petits</li><li><code>hidden-lg-and-up</code> - disparaît sur les viewports larges et plus grand</li><li><code>hidden-xl-only</code> - disparaît sur les viewports très larges uniquement</li></ul><h3 id=\"attributs-des-lignes\"><a class=\"header-anchor\" href=\"#attributs-des-lignes\">¶</a> Attributs des lignes</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>gutter</td><td>Espacement de la grille.</td><td>number</td><td>—</td><td>0</td></tr><tr><td>justify</td><td>Alignement horizontal pour le mise en page flex.</td><td>string</td><td>start/end/center/space-around/space-between</td><td>start</td></tr><tr><td>align</td><td>Alignement vertical pour la mise en page flex.</td><td>string</td><td>top/middle/bottom</td><td>top</td></tr><tr><td>tag</td><td>Élément de tag personnalisé.</td><td>string</td><td>*</td><td>div</td></tr></tbody></table><h3 id=\"attributs-des-colonnes\"><a class=\"header-anchor\" href=\"#attributs-des-colonnes\">¶</a> Attributs des colonnes</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>span</td><td>Nombre de colonnes sur lesquelles l&#39;élément s&#39;étend.</td><td>number</td><td>—</td><td>24</td></tr><tr><td>offset</td><td>Nombre d&#39;espacements sur la gauche de l&#39;élément.</td><td>number</td><td>—</td><td>0</td></tr><tr><td>push</td><td>Nombre de colonnes dont l&#39;élément se déplace vers la droite.</td><td>number</td><td>—</td><td>0</td></tr><tr><td>pull</td><td>Nombre de colonnes dont l&#39;élément se déplace vers la gauche.</td><td>number</td><td>—</td><td>0</td></tr><tr><td>xs</td><td><code>&lt;768px</code> Nombre de colonnes responsives ou bien objet de propriétés de colonne.</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>sm</td><td><code>≥768px</code> Nombre de colonnes responsives ou bien objet de propriétés de colonne.</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>md</td><td><code>≥992px</code> Nombre de colonnes responsives ou bien objet de propriétés de colonne.</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>lg</td><td><code>≥1200px</code> Nombre de colonnes responsives ou bien objet de propriétés de colonne.</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>xl</td><td><code>≥1920px</code> Nombre de colonnes responsives ou bien objet de propriétés de colonne.</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>tag</td><td>Élément de tag personnalisé.</td><td>string</td><td>*</td><td>div</td></tr></tbody></table>", 9);

function layoutvue_type_template_id_54324acf_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", layoutvue_type_template_id_54324acf_hoisted_1, [layoutvue_type_template_id_54324acf_hoisted_2, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_54324acf_hoisted_8];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_54324acf_hoisted_7];
    }),
    _: 1
  }), layoutvue_type_template_id_54324acf_hoisted_9, layoutvue_type_template_id_54324acf_hoisted_10, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_54324acf_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_54324acf_hoisted_11];
    }),
    _: 1
  }), layoutvue_type_template_id_54324acf_hoisted_13, layoutvue_type_template_id_54324acf_hoisted_14, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_54324acf_hoisted_15];
    }),
    _: 1
  }), layoutvue_type_template_id_54324acf_hoisted_16, _hoisted_17, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_24, _hoisted_25, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/layout.md?vue&type=template&id=54324acf

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/layout.md?vue&type=script&lang=ts


/* harmony default export */ var layoutvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-dark"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 24
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_12];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_16];
              }),
              _: 1
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
    "element-demo1": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
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
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 16
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 16
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
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
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
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
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "row-bg"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "space-between"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_12];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "space-around"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
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
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 10
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              xs: 8,
              sm: 6,
              md: 4,
              lg: 3,
              xl: 1
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              xs: 4,
              sm: 6,
              md: 8,
              lg: 9,
              xl: 11
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              xs: 4,
              sm: 6,
              md: 8,
              lg: 9,
              xl: 11
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              xs: 8,
              sm: 6,
              md: 4,
              lg: 3,
              xl: 1
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
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
// CONCATENATED MODULE: ./website/docs/fr-FR/layout.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/layout.md



layoutvue_type_script_lang_ts.render = layoutvue_type_template_id_54324acf_render

/* harmony default export */ var layout = __webpack_exports__["default"] = (layoutvue_type_script_lang_ts);

/***/ })

}]);