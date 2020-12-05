(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[250],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/pages/changelog.vue?vue&type=template&id=44127ed9

var _hoisted_1 = {
  class: "page-changelog"
};
var _hoisted_2 = {
  class: "heading"
};

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://github.com/ElemeFE/element/releases",
  target: "_blank"
}, "GitHub Releases", -1);

var _hoisted_4 = {
  ref: "timeline",
  class: "timeline"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_button = Object(vue_esm_browser["P" /* resolveComponent */])("el-button");

  var _component_change_log_cn = Object(vue_esm_browser["P" /* resolveComponent */])("change-log-cn");

  var _component_change_log_es = Object(vue_esm_browser["P" /* resolveComponent */])("change-log-es");

  var _component_change_log_en = Object(vue_esm_browser["P" /* resolveComponent */])("change-log-en");

  var _component_change_log_fr = Object(vue_esm_browser["P" /* resolveComponent */])("change-log-fr");

  var _component_change_log_jp = Object(vue_esm_browser["P" /* resolveComponent */])("change-log-jp");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("div", _hoisted_1, [Object(vue_esm_browser["o" /* createVNode */])("div", _hoisted_2, [Object(vue_esm_browser["o" /* createVNode */])(_component_el_button, {
    class: "fr"
  }, {
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_3];
    }),
    _: 1
  }), Object(vue_esm_browser["n" /* createTextVNode */])(" " + Object(vue_esm_browser["T" /* toDisplayString */])($options.langConfig[1]), 1
  /* TEXT */
  )]), Object(vue_esm_browser["o" /* createVNode */])("ul", _hoisted_4, null, 512), $data.lang === 'zh-CN' ? (Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])(_component_change_log_cn, {
    key: 0,
    ref: "changeLog"
  }, null, 512)) : Object(vue_esm_browser["k" /* createCommentVNode */])("", true), $data.lang === 'es' ? (Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])(_component_change_log_es, {
    key: 1,
    ref: "changeLog"
  }, null, 512)) : Object(vue_esm_browser["k" /* createCommentVNode */])("", true), $data.lang === 'en-US' ? (Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])(_component_change_log_en, {
    key: 2,
    ref: "changeLog"
  }, null, 512)) : Object(vue_esm_browser["k" /* createCommentVNode */])("", true), $data.lang === 'fr-FR' ? (Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])(_component_change_log_fr, {
    key: 3,
    ref: "changeLog"
  }, null, 512)) : Object(vue_esm_browser["k" /* createCommentVNode */])("", true), $data.lang === 'jp' ? (Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])(_component_change_log_jp, {
    key: 4,
    ref: "changeLog"
  }, null, 512)) : Object(vue_esm_browser["k" /* createCommentVNode */])("", true)]);
}
// CONCATENATED MODULE: ./website/pages/changelog.vue?vue&type=template&id=44127ed9

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./CHANGELOG.zh-CN.md?vue&type=template&id=e72dbe18

var md_loader_CHANGELOG_zh_CNvue_type_template_id_e72dbe18_hoisted_1 = {
  class: "content element-doc"
};

var md_loader_CHANGELOG_zh_CNvue_type_template_id_e72dbe18_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"changelog\"><a class=\"header-anchor\" href=\"#changelog\">¶</a> Changelog</h2><h3 id=\"1.0.1-beta.4\"><a class=\"header-anchor\" href=\"#1.0.1-beta.4\">¶</a> 1.0.1-beta.4</h3><p><em>2020-12-05</em></p><h4 id=\"bug-fixes\"><a class=\"header-anchor\" href=\"#bug-fixes\">¶</a> Bug fixes</h4><ul><li>Complete show-overflow-tooltip (#736)</li><li>Remove dropdown outline (#798)</li><li>Fix popover positioning (#796)</li><li>Fix on demand importing dialog lacking overlay css (#809)</li><li>Fix select value did not match issue (#808)</li><li>Fix select height error bug (#834)</li><li>Fix ts name error (#813)</li><li>Fix popper border .is-light style bug (#829)</li><li>Fix form-item auto width bug (#830)</li><li>Set popper appendToBody to true by default (#845)</li></ul><h3 id=\"1.0.1-beta.3\"><a class=\"header-anchor\" href=\"#1.0.1-beta.3\">¶</a> 1.0.1-beta.3</h3><p><em>2020-12-03</em></p><h4 id=\"bug-fixes-2\"><a class=\"header-anchor\" href=\"#bug-fixes-2\">¶</a> Bug fixes</h4><ul><li>Fix nested menu ref unwrap value problem (#775)</li><li>Fix alert style errors when no description (#782)</li><li>Fix dialog show-close is invalid (#773)</li><li>Destructing import from lodash (#788)</li><li>Fix popper transition with &#39;el-zoom-in-top&#39; (#785)</li></ul><h3 id=\"1.0.1-beta.2\"><a class=\"header-anchor\" href=\"#1.0.1-beta.2\">¶</a> 1.0.1-beta.2</h3><p><em>2020-12-02</em></p><h4 id=\"bug-fixes-3\"><a class=\"header-anchor\" href=\"#bug-fixes-3\">¶</a> Bug fixes</h4><ul><li>Fix navigation menu potential bug (#768)</li></ul><h3 id=\"1.0.1-beta.1\"><a class=\"header-anchor\" href=\"#1.0.1-beta.1\">¶</a> 1.0.1-beta.1</h3><p><em>2020-12-01</em></p><h4 id=\"bug-fixes-4\"><a class=\"header-anchor\" href=\"#bug-fixes-4\">¶</a> Bug fixes</h4><ul><li>Fix router behavior (#745)</li><li>Add esm bundle (#577)</li><li>Fix date picker referencing issue (#757)</li><li>Fix pagination current-change event not emitting (#756)</li><li>Fix <code>bodyStyle</code> bug (#754)</li></ul>", 17);

function md_loader_CHANGELOG_zh_CNvue_type_template_id_e72dbe18_render(_ctx, _cache) {
  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", md_loader_CHANGELOG_zh_CNvue_type_template_id_e72dbe18_hoisted_1, [md_loader_CHANGELOG_zh_CNvue_type_template_id_e72dbe18_hoisted_2]);
}
// CONCATENATED MODULE: ./CHANGELOG.zh-CN.md?vue&type=template&id=e72dbe18

// CONCATENATED MODULE: ./CHANGELOG.zh-CN.md

const script = {}
script.render = md_loader_CHANGELOG_zh_CNvue_type_template_id_e72dbe18_render

/* harmony default export */ var CHANGELOG_zh_CN = (script);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./CHANGELOG.es.md?vue&type=template&id=191acad0

var md_loader_CHANGELOG_esvue_type_template_id_191acad0_hoisted_1 = {
  class: "content element-doc"
};

var md_loader_CHANGELOG_esvue_type_template_id_191acad0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"changelog\"><a class=\"header-anchor\" href=\"#changelog\">¶</a> Changelog</h2><h3 id=\"1.0.1-beta.4\"><a class=\"header-anchor\" href=\"#1.0.1-beta.4\">¶</a> 1.0.1-beta.4</h3><p><em>2020-12-05</em></p><h4 id=\"bug-fixes\"><a class=\"header-anchor\" href=\"#bug-fixes\">¶</a> Bug fixes</h4><ul><li>Complete show-overflow-tooltip (#736)</li><li>Remove dropdown outline (#798)</li><li>Fix popover positioning (#796)</li><li>Fix on demand importing dialog lacking overlay css (#809)</li><li>Fix select value did not match issue (#808)</li><li>Fix select height error bug (#834)</li><li>Fix ts name error (#813)</li><li>Fix popper border .is-light style bug (#829)</li><li>Fix form-item auto width bug (#830)</li><li>Set popper appendToBody to true by default (#845)</li></ul><h3 id=\"1.0.1-beta.3\"><a class=\"header-anchor\" href=\"#1.0.1-beta.3\">¶</a> 1.0.1-beta.3</h3><p><em>2020-12-03</em></p><h4 id=\"bug-fixes-2\"><a class=\"header-anchor\" href=\"#bug-fixes-2\">¶</a> Bug fixes</h4><ul><li>Fix nested menu ref unwrap value problem (#775)</li><li>Fix alert style errors when no description (#782)</li><li>Fix dialog show-close is invalid (#773)</li><li>Destructing import from lodash (#788)</li><li>Fix popper transition with &#39;el-zoom-in-top&#39; (#785)</li></ul><h3 id=\"1.0.1-beta.2\"><a class=\"header-anchor\" href=\"#1.0.1-beta.2\">¶</a> 1.0.1-beta.2</h3><p><em>2020-12-02</em></p><h4 id=\"bug-fixes-3\"><a class=\"header-anchor\" href=\"#bug-fixes-3\">¶</a> Bug fixes</h4><ul><li>Fix navigation menu potential bug (#768)</li></ul><h3 id=\"1.0.1-beta.1\"><a class=\"header-anchor\" href=\"#1.0.1-beta.1\">¶</a> 1.0.1-beta.1</h3><p><em>2020-12-01</em></p><h4 id=\"bug-fixes-4\"><a class=\"header-anchor\" href=\"#bug-fixes-4\">¶</a> Bug fixes</h4><ul><li>Fix router behavior (#745)</li><li>Add esm bundle (#577)</li><li>Fix date picker referencing issue (#757)</li><li>Fix pagination current-change event not emitting (#756)</li><li>Fix <code>bodyStyle</code> bug (#754)</li></ul>", 17);

function md_loader_CHANGELOG_esvue_type_template_id_191acad0_render(_ctx, _cache) {
  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", md_loader_CHANGELOG_esvue_type_template_id_191acad0_hoisted_1, [md_loader_CHANGELOG_esvue_type_template_id_191acad0_hoisted_2]);
}
// CONCATENATED MODULE: ./CHANGELOG.es.md?vue&type=template&id=191acad0

// CONCATENATED MODULE: ./CHANGELOG.es.md

const CHANGELOG_es_script = {}
CHANGELOG_es_script.render = md_loader_CHANGELOG_esvue_type_template_id_191acad0_render

/* harmony default export */ var CHANGELOG_es = (CHANGELOG_es_script);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./CHANGELOG.en-US.md?vue&type=template&id=80cb8c68

var md_loader_CHANGELOG_en_USvue_type_template_id_80cb8c68_hoisted_1 = {
  class: "content element-doc"
};

var md_loader_CHANGELOG_en_USvue_type_template_id_80cb8c68_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"changelog\"><a class=\"header-anchor\" href=\"#changelog\">¶</a> Changelog</h2><h3 id=\"1.0.1-beta.4\"><a class=\"header-anchor\" href=\"#1.0.1-beta.4\">¶</a> 1.0.1-beta.4</h3><p><em>2020-12-05</em></p><h4 id=\"bug-fixes\"><a class=\"header-anchor\" href=\"#bug-fixes\">¶</a> Bug fixes</h4><ul><li>Complete show-overflow-tooltip (#736)</li><li>Remove dropdown outline (#798)</li><li>Fix popover positioning (#796)</li><li>Fix on demand importing dialog lacking overlay css (#809)</li><li>Fix select value did not match issue (#808)</li><li>Fix select height error bug (#834)</li><li>Fix ts name error (#813)</li><li>Fix popper border .is-light style bug (#829)</li><li>Fix form-item auto width bug (#830)</li><li>Set popper appendToBody to true by default (#845)</li></ul><h3 id=\"1.0.1-beta.3\"><a class=\"header-anchor\" href=\"#1.0.1-beta.3\">¶</a> 1.0.1-beta.3</h3><p><em>2020-12-03</em></p><h4 id=\"bug-fixes-2\"><a class=\"header-anchor\" href=\"#bug-fixes-2\">¶</a> Bug fixes</h4><ul><li>Fix nested menu ref unwrap value problem (#775)</li><li>Fix alert style errors when no description (#782)</li><li>Fix dialog show-close is invalid (#773)</li><li>Destructing import from lodash (#788)</li><li>Fix popper transition with &#39;el-zoom-in-top&#39; (#785)</li></ul><h3 id=\"1.0.1-beta.2\"><a class=\"header-anchor\" href=\"#1.0.1-beta.2\">¶</a> 1.0.1-beta.2</h3><p><em>2020-12-02</em></p><h4 id=\"bug-fixes-3\"><a class=\"header-anchor\" href=\"#bug-fixes-3\">¶</a> Bug fixes</h4><ul><li>Fix navigation menu potential bug (#768)</li></ul><h3 id=\"1.0.1-beta.1\"><a class=\"header-anchor\" href=\"#1.0.1-beta.1\">¶</a> 1.0.1-beta.1</h3><p><em>2020-12-01</em></p><h4 id=\"bug-fixes-4\"><a class=\"header-anchor\" href=\"#bug-fixes-4\">¶</a> Bug fixes</h4><ul><li>Fix router behavior (#745)</li><li>Add esm bundle (#577)</li><li>Fix date picker referencing issue (#757)</li><li>Fix pagination current-change event not emitting (#756)</li><li>Fix <code>bodyStyle</code> bug (#754)</li></ul>", 17);

function md_loader_CHANGELOG_en_USvue_type_template_id_80cb8c68_render(_ctx, _cache) {
  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", md_loader_CHANGELOG_en_USvue_type_template_id_80cb8c68_hoisted_1, [md_loader_CHANGELOG_en_USvue_type_template_id_80cb8c68_hoisted_2]);
}
// CONCATENATED MODULE: ./CHANGELOG.en-US.md?vue&type=template&id=80cb8c68

// CONCATENATED MODULE: ./CHANGELOG.en-US.md

const CHANGELOG_en_US_script = {}
CHANGELOG_en_US_script.render = md_loader_CHANGELOG_en_USvue_type_template_id_80cb8c68_render

/* harmony default export */ var CHANGELOG_en_US = (CHANGELOG_en_US_script);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./CHANGELOG.fr-FR.md?vue&type=template&id=1f84d392

var md_loader_CHANGELOG_fr_FRvue_type_template_id_1f84d392_hoisted_1 = {
  class: "content element-doc"
};

var md_loader_CHANGELOG_fr_FRvue_type_template_id_1f84d392_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"changelog\"><a class=\"header-anchor\" href=\"#changelog\">¶</a> Changelog</h2><h3 id=\"1.0.1-beta.4\"><a class=\"header-anchor\" href=\"#1.0.1-beta.4\">¶</a> 1.0.1-beta.4</h3><p><em>2020-12-05</em></p><h4 id=\"bug-fixes\"><a class=\"header-anchor\" href=\"#bug-fixes\">¶</a> Bug fixes</h4><ul><li>Complete show-overflow-tooltip (#736)</li><li>Remove dropdown outline (#798)</li><li>Fix popover positioning (#796)</li><li>Fix on demand importing dialog lacking overlay css (#809)</li><li>Fix select value did not match issue (#808)</li><li>Fix select height error bug (#834)</li><li>Fix ts name error (#813)</li><li>Fix popper border .is-light style bug (#829)</li><li>Fix form-item auto width bug (#830)</li><li>Set popper appendToBody to true by default (#845)</li></ul><h3 id=\"1.0.1-beta.3\"><a class=\"header-anchor\" href=\"#1.0.1-beta.3\">¶</a> 1.0.1-beta.3</h3><p><em>2020-12-03</em></p><h4 id=\"bug-fixes-2\"><a class=\"header-anchor\" href=\"#bug-fixes-2\">¶</a> Bug fixes</h4><ul><li>Fix nested menu ref unwrap value problem (#775)</li><li>Fix alert style errors when no description (#782)</li><li>Fix dialog show-close is invalid (#773)</li><li>Destructing import from lodash (#788)</li><li>Fix popper transition with &#39;el-zoom-in-top&#39; (#785)</li></ul><h3 id=\"1.0.1-beta.2\"><a class=\"header-anchor\" href=\"#1.0.1-beta.2\">¶</a> 1.0.1-beta.2</h3><p><em>2020-12-02</em></p><h4 id=\"bug-fixes-3\"><a class=\"header-anchor\" href=\"#bug-fixes-3\">¶</a> Bug fixes</h4><ul><li>Fix navigation menu potential bug (#768)</li></ul><h3 id=\"1.0.1-beta.1\"><a class=\"header-anchor\" href=\"#1.0.1-beta.1\">¶</a> 1.0.1-beta.1</h3><p><em>2020-12-01</em></p><h4 id=\"bug-fixes-4\"><a class=\"header-anchor\" href=\"#bug-fixes-4\">¶</a> Bug fixes</h4><ul><li>Fix router behavior (#745)</li><li>Add esm bundle (#577)</li><li>Fix date picker referencing issue (#757)</li><li>Fix pagination current-change event not emitting (#756)</li><li>Fix <code>bodyStyle</code> bug (#754)</li></ul>", 17);

function md_loader_CHANGELOG_fr_FRvue_type_template_id_1f84d392_render(_ctx, _cache) {
  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", md_loader_CHANGELOG_fr_FRvue_type_template_id_1f84d392_hoisted_1, [md_loader_CHANGELOG_fr_FRvue_type_template_id_1f84d392_hoisted_2]);
}
// CONCATENATED MODULE: ./CHANGELOG.fr-FR.md?vue&type=template&id=1f84d392

// CONCATENATED MODULE: ./CHANGELOG.fr-FR.md

const CHANGELOG_fr_FR_script = {}
CHANGELOG_fr_FR_script.render = md_loader_CHANGELOG_fr_FRvue_type_template_id_1f84d392_render

/* harmony default export */ var CHANGELOG_fr_FR = (CHANGELOG_fr_FR_script);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./CHANGELOG.jp.md?vue&type=template&id=600c7530

var md_loader_CHANGELOG_jpvue_type_template_id_600c7530_hoisted_1 = {
  class: "content element-doc"
};

var md_loader_CHANGELOG_jpvue_type_template_id_600c7530_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"changelog\"><a class=\"header-anchor\" href=\"#changelog\">¶</a> Changelog</h2><h3 id=\"1.0.1-beta.4\"><a class=\"header-anchor\" href=\"#1.0.1-beta.4\">¶</a> 1.0.1-beta.4</h3><p><em>2020-12-05</em></p><h4 id=\"bug-fixes\"><a class=\"header-anchor\" href=\"#bug-fixes\">¶</a> Bug fixes</h4><ul><li>Complete show-overflow-tooltip (#736)</li><li>Remove dropdown outline (#798)</li><li>Fix popover positioning (#796)</li><li>Fix on demand importing dialog lacking overlay css (#809)</li><li>Fix select value did not match issue (#808)</li><li>Fix select height error bug (#834)</li><li>Fix ts name error (#813)</li><li>Fix popper border .is-light style bug (#829)</li><li>Fix form-item auto width bug (#830)</li><li>Set popper appendToBody to true by default (#845)</li></ul><h3 id=\"1.0.1-beta.3\"><a class=\"header-anchor\" href=\"#1.0.1-beta.3\">¶</a> 1.0.1-beta.3</h3><p><em>2020-12-03</em></p><h4 id=\"bug-fixes-2\"><a class=\"header-anchor\" href=\"#bug-fixes-2\">¶</a> Bug fixes</h4><ul><li>Fix nested menu ref unwrap value problem (#775)</li><li>Fix alert style errors when no description (#782)</li><li>Fix dialog show-close is invalid (#773)</li><li>Destructing import from lodash (#788)</li><li>Fix popper transition with &#39;el-zoom-in-top&#39; (#785)</li></ul><h3 id=\"1.0.1-beta.2\"><a class=\"header-anchor\" href=\"#1.0.1-beta.2\">¶</a> 1.0.1-beta.2</h3><p><em>2020-12-02</em></p><h4 id=\"bug-fixes-3\"><a class=\"header-anchor\" href=\"#bug-fixes-3\">¶</a> Bug fixes</h4><ul><li>Fix navigation menu potential bug (#768)</li></ul><h3 id=\"1.0.1-beta.1\"><a class=\"header-anchor\" href=\"#1.0.1-beta.1\">¶</a> 1.0.1-beta.1</h3><p><em>2020-12-01</em></p><h4 id=\"bug-fixes-4\"><a class=\"header-anchor\" href=\"#bug-fixes-4\">¶</a> Bug fixes</h4><ul><li>Fix router behavior (#745)</li><li>Add esm bundle (#577)</li><li>Fix date picker referencing issue (#757)</li><li>Fix pagination current-change event not emitting (#756)</li><li>Fix <code>bodyStyle</code> bug (#754)</li></ul>", 17);

function md_loader_CHANGELOG_jpvue_type_template_id_600c7530_render(_ctx, _cache) {
  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", md_loader_CHANGELOG_jpvue_type_template_id_600c7530_hoisted_1, [md_loader_CHANGELOG_jpvue_type_template_id_600c7530_hoisted_2]);
}
// CONCATENATED MODULE: ./CHANGELOG.jp.md?vue&type=template&id=600c7530

// CONCATENATED MODULE: ./CHANGELOG.jp.md

const CHANGELOG_jp_script = {}
CHANGELOG_jp_script.render = md_loader_CHANGELOG_jpvue_type_template_id_600c7530_render

/* harmony default export */ var CHANGELOG_jp = (CHANGELOG_jp_script);
// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(728);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/pages/changelog.vue?vue&type=script&lang=js






/* harmony default export */ var changelogvue_type_script_lang_js = ({
  components: {
    ChangeLogCn: CHANGELOG_zh_CN,
    ChangeLogEs: CHANGELOG_es,
    ChangeLogEn: CHANGELOG_en_US,
    ChangeLogFr: CHANGELOG_fr_FR,
    ChangeLogJp: CHANGELOG_jp
  },
  data: function data() {
    return {
      lang: this.$route.meta.lang
    };
  },
  computed: {
    langConfig: function langConfig() {
      var _this = this;

      return page.filter(function (config) {
        return config.lang === _this.lang;
      })[0].pages.changelog;
    }
  },
  mounted: function mounted() {
    var changeLog = this.$refs.changeLog;
    var changeLogNodes = changeLog.$el.children;
    var a = changeLogNodes[1].querySelector('a');
    a && a.remove();
    var release = changeLogNodes[1].textContent.trim();
    var fragments = "<li><h3><a href=\"https://github.com/ElemeFE/element/releases/tag/v" + release + "\" target=\"_blank\">" + release + "</a></h3>";

    for (var len = changeLogNodes.length, i = 2; i < len; i++) {
      var node = changeLogNodes[i];
      a = changeLogNodes[i].querySelector('a');
      a && a.getAttribute('class') === 'header-anchor' && a.remove();

      if (node.tagName !== 'H3') {
        fragments += changeLogNodes[i].outerHTML;
      } else {
        release = changeLogNodes[i].textContent.trim();
        fragments += "</li><li><h3><a href=\"https://github.com/ElemeFE/element/releases/tag/v" + release + "\" target=\"_blank\">" + release + "</a></h3>";
      }
    }

    fragments = fragments.replace(/#(\d+)/g, '<a href="https://github.com/ElemeFE/element/issues/$1" target="_blank">#$1</a>');
    fragments = fragments.replace(/@([\w-]+)/g, '<a href="https://github.com/$1" target="_blank">@$1</a>');
    this.$refs.timeline.innerHTML = fragments + "</li>";
    changeLog.$el.remove();
  }
});
// CONCATENATED MODULE: ./website/pages/changelog.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/changelog.vue?vue&type=style&index=0&id=44127ed9&lang=sass
var changelogvue_type_style_index_0_id_44127ed9_lang_sass = __webpack_require__(737);

// CONCATENATED MODULE: ./website/pages/changelog.vue





changelogvue_type_script_lang_js.render = render

/* harmony default export */ var changelog = __webpack_exports__["default"] = (changelogvue_type_script_lang_js);

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(738);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_changelog_vue_vue_type_style_index_0_id_44127ed9_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(730);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_changelog_vue_vue_type_style_index_0_id_44127ed9_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_changelog_vue_vue_type_style_index_0_id_44127ed9_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);