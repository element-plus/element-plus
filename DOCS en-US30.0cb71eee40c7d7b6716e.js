(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/image.md?vue&type=template&id=7d2ebe1c

const imagevue_type_template_id_7d2ebe1c_hoisted_1 = {
  class: "content element-doc"
};

const imagevue_type_template_id_7d2ebe1c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Image ");

const imagevue_type_template_id_7d2ebe1c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Besides the native features of img, support lazy load, custom placeholder and load failure, etc.", -1);

const imagevue_type_template_id_7d2ebe1c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic Usage ");

const imagevue_type_template_id_7d2ebe1c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Indicate how the image should be resized to fit its container by ");

const imagevue_type_template_id_7d2ebe1c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "fit", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", same as native ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("object-fit");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"demo-image\">\n  <div class=\"block\" v-for=\"fit in fits\" :key=\"fit\">\n    <span class=\"demonstration\">{{ fit }}</span>\n    <el-image\n      style=\"width: 100px; height: 100px\"\n      :src=\"url\"\n      :fit=\"fit\"\n    ></el-image>\n  </div>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Placeholder ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Custom placeholder content when image hasn't loaded yet by "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot = placeholder")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"demo-image__placeholder\">\n  <div class=\"block\">\n    <span class=\"demonstration\">Default</span>\n    <el-image :src=\"src\"></el-image>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Custom</span>\n    <el-image :src=\"src\">\n      <template #placeholder>\n        <div class=\"image-slot\">Loading<span class=\"dot\">...</span></div>\n      </template>\n    </el-image>\n  </div>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const src = ref('https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg');\n\n      return {\n        src,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Load Failed ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Custom failed content when error occurs to image load by "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot = error")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"demo-image__error\">\n  <div class=\"block\">\n    <span class=\"demonstration\">Default</span>\n    <el-image></el-image>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Custom</span>\n    <el-image>\n      <template #error>\n        <div class=\"image-slot\">\n          <i class=\"el-icon-picture-outline\"></i>\n        </div>\n      </template>\n    </el-image>\n  </div>\n</div>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Lazy Load ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use lazy load by "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lazy = true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Image will load until scroll into view when set. You can indicate scroll container that adds scroll listener to by "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "scroll-container"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". If undefined, will be the nearest parent container whose overflow property is auto or scroll.")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"demo-image__lazy\">\n  <el-image v-for=\"url in urls\" :key=\"url\" :src=\"url\" lazy></el-image>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        urls: [\n          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\n          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',\n          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',\n          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',\n          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',\n          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',\n          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const urls = ref([\n        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\n        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',\n        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',\n        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',\n        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',\n        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',\n        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',\n      ]);\n\n      return {\n        urls,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Image Preview ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("allow big image preview by setting "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "previewSrcList"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" prop.")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"demo-image__preview\">\n  <el-image\n    style=\"width: 100px; height: 100px\"\n    :src=\"url\"\n    :preview-src-list=\"srcList\"\n  >\n  </el-image>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\n        srcList: [\n          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',\n          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const url = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');\n      const srcList = ref([\n        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',\n        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',\n      ]);\n\n      return {\n        url,\n        srcList,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Image Attributes ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Accepted values"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Default")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "alt"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Native alt"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "fit", -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Indicate how the image should be resized to fit its container, same as ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("object-fit");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "fill / contain / cover / none / scale-down", -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hide-on-click-modal"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "When enabling preview, use this flag to control whether clicking on backdrop can exit preview mode"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true / false"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "lazy"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Whether to use lazy load"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "preview-src-list"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "allow big image preview"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Array"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "referrer-policy"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Native referrerPolicy"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "src"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Image source, same as native"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "scroll-container"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "The container to add scroll listener when using lazy load"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string / HTMLElement"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "The nearest parent container whose overflow property is auto or scroll")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "z-index"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "set image preview z-index"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "2000")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Image Events ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>load</td><td>Same as native load</td><td>(e: Event)</td></tr><tr><td>error</td><td>Same as native error</td><td>(e: Error)</td></tr></tbody></table>", 1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Image Slots ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Triggers when image load")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Triggers when image load failed")])])], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ImageViewer Attributes ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Acceptable Value</th><th>Default</th></tr></thead><tbody><tr><td>url-list</td><td>Preview link list</td><td>Array&lt;string&gt;</td><td>-</td><td>[]</td></tr><tr><td>z-index</td><td>Preview backdrop z-index</td><td>number / string</td><td>int / string&lt;int&gt;</td><td>2000</td></tr><tr><td>initial-index</td><td>The initial preview image index, less than or equal to the length of <code>url-list</code></td><td>number</td><td>int</td><td>0</td></tr><tr><td>infinite</td><td>Whether preview is infinite</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>hide-on-click-modal</td><td>Whether user can emit close event when clicking backdrop</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>append-to-body</td><td>whether to append image itself to body. A nested parent element attribute transform should have this attribute set to <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ImageViewer Events ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event name</th><th>Description</th><th>Callback parameter</th></tr></thead><tbody><tr><td>close</td><td>Emitted when clicking on <code>X</code> button or when <code>hide-on-click-modal</code> enabled clicking on backdrop</td><td>None</td></tr><tr><td>switch</td><td>When switching images</td><td><code>(val: number)</code> switching target index</td></tr></tbody></table>", 1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ImageViewer Slots ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "viewer"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Contents of the preview area")])])], -1);

function imagevue_type_template_id_7d2ebe1c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", imagevue_type_template_id_7d2ebe1c_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "image",
    content: "Image",
    href: "#image",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [imagevue_type_template_id_7d2ebe1c_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#image"
    })]),
    _: 1
  }), imagevue_type_template_id_7d2ebe1c_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic Usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [imagevue_type_template_id_7d2ebe1c_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [imagevue_type_template_id_7d2ebe1c_hoisted_5, imagevue_type_template_id_7d2ebe1c_hoisted_6, _hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
      _: 1
    }), _hoisted_9])])]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "placeholder",
    content: "Placeholder",
    href: "#placeholder",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#placeholder"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "load-failed",
    content: "Load Failed",
    href: "#load-failed",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#load-failed"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "lazy-load",
    content: "Lazy Load",
    href: "#lazy-load",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#lazy-load"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "image-preview",
    content: "Image Preview",
    href: "#image-preview",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#image-preview"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "image-attributes",
    content: "Image Attributes",
    href: "#image-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#image-attributes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_24, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_25, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_26, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  })]), _hoisted_29, _hoisted_30, _hoisted_31]), _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "image-events",
    content: "Image Events",
    href: "#image-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#image-events"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "image-slots",
    content: "Image Slots",
    href: "#image-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#image-slots"
    })]),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "imageviewer-attributes",
    content: "ImageViewer Attributes",
    href: "#imageviewer-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#imageviewer-attributes"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "imageviewer-events",
    content: "ImageViewer Events",
    href: "#imageviewer-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#imageviewer-events"
    })]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "imageviewer-slots",
    content: "ImageViewer Slots",
    href: "#imageviewer-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#imageviewer-slots"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/image.md?vue&type=template&id=7d2ebe1c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/image.md?vue&type=script&lang=ts

/* harmony default export */ var imagevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
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
        class: "demo-image"
      };
      const _hoisted_2 = {
        class: "demonstration"
      };

      function render(_ctx, _cache) {
        const _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.fits, fit => {
          return _openBlock(), _createElementBlock("div", {
            class: "block",
            key: fit
          }, [_createElementVNode("span", _hoisted_2, _toDisplayString(fit), 1), _createVNode(_component_el_image, {
            style: {
              "width": "100px",
              "height": "100px"
            },
            src: _ctx.url,
            fit: fit
          }, null, 8, ["src", "fit"])]);
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
    }(),
    "element-demo1": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-image__placeholder"
      };
      const _hoisted_2 = {
        class: "block"
      };

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Default", -1);

      const _hoisted_4 = {
        class: "block"
      };

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Custom", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", {
        class: "image-slot"
      }, [/*#__PURE__*/_createTextVNode("Loading"), /*#__PURE__*/_createElementVNode("span", {
        class: "dot"
      }, "...")], -1);

      function render(_ctx, _cache) {
        const _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_image, {
          src: _ctx.src
        }, null, 8, ["src"])]), _createElementVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_image, {
          src: _ctx.src
        }, {
          placeholder: _withCtx(() => [_hoisted_6]),
          _: 1
        }, 8, ["src"])])])]);
      }

      const democomponentExport = {
        data() {
          return {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-image__error"
      };
      const _hoisted_2 = {
        class: "block"
      };

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Default", -1);

      const _hoisted_4 = {
        class: "block"
      };

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Custom", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", {
        class: "image-slot"
      }, [/*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-picture-outline"
      })], -1);

      function render(_ctx, _cache) {
        const _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_image)]), _createElementVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_image, null, {
          error: _withCtx(() => [_hoisted_6]),
          _: 1
        })])])]);
      }

      const democomponentExport = {};
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
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        createElementVNode: _createElementVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-image__lazy"
      };

      function render(_ctx, _cache) {
        const _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.urls, url => {
          return _openBlock(), _createBlock(_component_el_image, {
            key: url,
            src: url,
            lazy: ""
          }, null, 8, ["src"]);
        }), 128))])]);
      }

      const democomponentExport = {
        data() {
          return {
            urls: ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg', 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg', 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg', 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg', 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg']
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-image__preview"
      };

      function render(_ctx, _cache) {
        const _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_image, {
          style: {
            "width": "100px",
            "height": "100px"
          },
          src: _ctx.url,
          "preview-src-list": _ctx.srcList
        }, null, 8, ["src", "preview-src-list"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            srcList: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg', 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg']
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
// CONCATENATED MODULE: ./website/docs/en-US/image.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/image.md



imagevue_type_script_lang_ts.render = imagevue_type_template_id_7d2ebe1c_render

/* harmony default export */ var en_US_image = __webpack_exports__["default"] = (imagevue_type_script_lang_ts);

/***/ })

}]);