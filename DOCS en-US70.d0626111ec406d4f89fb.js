(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/upload.md?vue&type=template&id=05c4ea94

var uploadvue_type_template_id_05c4ea94_hoisted_1 = {
  class: "content element-doc"
};

var uploadvue_type_template_id_05c4ea94_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "upload"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#upload"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Upload")], -1);

var uploadvue_type_template_id_05c4ea94_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Upload files by clicking or drag-and-drop", -1);

var uploadvue_type_template_id_05c4ea94_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "click-to-upload-files"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#click-to-upload-files"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Click to upload files")], -1);

var uploadvue_type_template_id_05c4ea94_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Customize upload button type and text using "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "limit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "on-exceed"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to limit the maximum number of uploads allowed and specify method when the limit is exceeded. Plus, you can abort removing a file in the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-remove"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" hook.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :before-remove=\"beforeRemove\"\n  multiple\n  :limit=\"3\"\n  :on-exceed=\"handleExceed\"\n  :file-list=\"fileList\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n      handleExceed(files, fileList) {\n        this.$message.warning(\n          `The limit is 3, you selected ${\n            files.length\n          } files this time, add up to ${\n            files.length + fileList.length\n          } totally`,\n        )\n      },\n      beforeRemove(file, fileList) {\n        return this.$confirm(`Cancel the transfert of ${file.name} ?`)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "user-avatar-upload"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#user-avatar-upload"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" User avatar upload")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-upload"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" hook to limit the upload file format and size.")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"avatar-uploader\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :show-file-list=\"false\"\n  :on-success=\"handleAvatarSuccess\"\n  :before-upload=\"beforeAvatarUpload\"\n>\n  <img v-if=\"imageUrl\" :src=\"imageUrl\" class=\"avatar\" />\n  <i v-else class=\"el-icon-plus avatar-uploader-icon\"></i>\n</el-upload>\n\n<style>\n  .avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n  }\n  .avatar-uploader .el-upload:hover {\n    border-color: #409eff;\n  }\n  .avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n  }\n  .avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        imageUrl: '',\n      }\n    },\n    methods: {\n      handleAvatarSuccess(res, file) {\n        this.imageUrl = URL.createObjectURL(file.raw)\n      },\n      beforeAvatarUpload(file) {\n        const isJPG = file.type === 'image/jpeg'\n        const isLt2M = file.size / 1024 / 1024 < 2\n\n        if (!isJPG) {\n          this.$message.error('Avatar picture must be JPG format!')\n        }\n        if (!isLt2M) {\n          this.$message.error('Avatar picture size can not exceed 2MB!')\n        }\n        return isJPG && isLt2M\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "photo-wall"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#photo-wall"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Photo Wall")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "list-type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to change the fileList style.")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  list-type=\"picture-card\"\n  :on-preview=\"handlePictureCardPreview\"\n  :on-remove=\"handleRemove\"\n>\n  <i class=\"el-icon-plus\"></i>\n</el-upload>\n<el-dialog v-model=\"dialogVisible\">\n  <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\" />\n</el-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url\n        this.dialogVisible = true\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "custom-file-thumbnail"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#custom-file-thumbnail"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Custom file thumbnail")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "scoped-slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to change default thumbnail template.")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload action=\"#\" list-type=\"picture-card\" :auto-upload=\"false\">\n  <template #default>\n    <i class=\"el-icon-plus\"></i>\n  </template>\n  <template #file=\"{file}\">\n    <div>\n      <img class=\"el-upload-list__item-thumbnail\" :src=\"file.url\" alt=\"\" />\n      <span class=\"el-upload-list__item-actions\">\n        <span\n          class=\"el-upload-list__item-preview\"\n          @click=\"handlePictureCardPreview(file)\"\n        >\n          <i class=\"el-icon-zoom-in\"></i>\n        </span>\n        <span\n          v-if=\"!disabled\"\n          class=\"el-upload-list__item-delete\"\n          @click=\"handleDownload(file)\"\n        >\n          <i class=\"el-icon-download\"></i>\n        </span>\n        <span\n          v-if=\"!disabled\"\n          class=\"el-upload-list__item-delete\"\n          @click=\"handleRemove(file)\"\n        >\n          <i class=\"el-icon-delete\"></i>\n        </span>\n      </span>\n    </div>\n  </template>\n</el-upload>\n<el-dialog v-model=\"dialogVisible\">\n  <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\" />\n</el-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n        disabled: false,\n      }\n    },\n    methods: {\n      handleRemove(file) {\n        console.log(file)\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url\n        this.dialogVisible = true\n      },\n      handleDownload(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "filelist-with-thumbnail"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filelist-with-thumbnail"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" FileList with thumbnail")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  list-type=\"picture\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">\n      jpg/png files with a size less than 500kb\n    </div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "file-list-control"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#file-list-control"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" File list control")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "on-change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" hook function to control upload file list")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-change=\"handleChange\"\n  :file-list=\"fileList\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">\n      jpg/png files with a size less than 500kb\n    </div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.fileList = fileList.slice(-3)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "drag-to-upload"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#drag-to-upload"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Drag to upload")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can drag your file to a certain area to upload it.", -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  drag\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  multiple\n>\n  <i class=\"el-icon-upload\"></i>\n  <div class=\"el-upload__text\">Drop file here or <em>click to upload</em></div>\n  <template #tip>\n    <div class=\"el-upload__tip\">\n      jpg/png files with a size less than 500kb\n    </div>\n  </template>\n</el-upload>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "manual-upload"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#manual-upload"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Manual upload")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  ref=\"upload\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :auto-upload=\"false\"\n>\n  <template #trigger>\n    <el-button size=\"small\" type=\"primary\">select file</el-button>\n  </template>\n  <el-button\n    style=\"margin-left: 10px;\"\n    size=\"small\"\n    type=\"success\"\n    @click=\"submitUpload\"\n    >upload to server</el-button\n  >\n  <template #tip>\n    <div class=\"el-upload__tip\">\n      jpg/png files with a size less than 500kb\n    </div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    methods: {\n      submitUpload() {\n        this.$refs.upload.submit()\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>action</td><td>required, request URL</td><td>string</td><td>—</td><td>—</td></tr><tr><td>headers</td><td>request headers</td><td>object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>whether uploading multiple files is permitted</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>data</td><td>additions options of request</td><td>object</td><td>—</td><td>—</td></tr><tr><td>name</td><td>key name for uploaded file</td><td>string</td><td>—</td><td>file</td></tr><tr><td>with-credentials</td><td>whether cookies are sent</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-file-list</td><td>whether to show the uploaded file list</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>drag</td><td>whether to activate drag and drop mode</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>accept</td><td>accepted <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept\">file types</a>, will not work when <code>thumbnail-mode</code> is <code>true</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>on-preview</td><td>hook function when clicking the uploaded files</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>on-remove</td><td>hook function when files are removed</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-success</td><td>hook function when uploaded successfully</td><td>function(response, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-error</td><td>hook function when some errors occurs</td><td>function(err, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-progress</td><td>hook function when some progress occurs</td><td>function(event, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-change</td><td>hook function when select file or upload file success or upload file fail</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>before-upload</td><td>hook function before uploading with the file to be uploaded as its parameter. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, uploading will be aborted</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>before-remove</td><td>hook function before removing a file with the file and file list as its parameters. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, removing will be aborted.</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>thumbnail-mode</td><td>whether thumbnail is displayed</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>file-list</td><td>default uploaded files, e.g. [{name: &#39;food.jpg&#39;, url: &#39;https://xxx.cdn.com/xxx.jpg&#39;}]</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>list-type</td><td>type of fileList</td><td>string</td><td>text/picture/picture-card</td><td>text</td></tr><tr><td>auto-upload</td><td>whether to auto upload file</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>http-request</td><td>override default xhr behavior, allowing you to implement your own upload-file&#39;s request</td><td>function</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether to disable upload</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>limit</td><td>maximum number of uploads allowed</td><td>number</td><td>—</td><td>—</td></tr><tr><td>on-exceed</td><td>hook function when limit is exceeded</td><td>function(files, fileList)</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"slots\"><a class=\"header-anchor\" href=\"#slots\">¶</a> Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>trigger</td><td>content which triggers file dialog</td></tr><tr><td>tip</td><td>content of tips</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\">¶</a> Methods</h3><table><thead><tr><th>Methods Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>clearFiles</td><td>clear the uploaded file list (this method is not supported in the <code>before-upload</code> hook)</td><td>—</td></tr><tr><td>abort</td><td>cancel upload request</td><td>（ file: fileList&#39;s item ）</td></tr><tr><td>submit</td><td>upload the file list manually</td><td>—</td></tr></tbody></table>", 6);

function uploadvue_type_template_id_05c4ea94_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", uploadvue_type_template_id_05c4ea94_hoisted_1, [uploadvue_type_template_id_05c4ea94_hoisted_2, uploadvue_type_template_id_05c4ea94_hoisted_3, uploadvue_type_template_id_05c4ea94_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [uploadvue_type_template_id_05c4ea94_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_21, _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/upload.md?vue&type=template&id=05c4ea94

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/upload.md?vue&type=script&lang=ts


/* harmony default export */ var uploadvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to upload");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "before-remove": _ctx.beforeRemove,
          multiple: "",
          limit: 3,
          "on-exceed": _ctx.handleExceed,
          "file-list": _ctx.fileList
        }, {
          tip: _withCtx(function () {
            return [_hoisted_2];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small",
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["on-preview", "on-remove", "before-remove", "on-exceed", "file-list"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fileList: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          };
        },
        methods: {
          handleRemove: function handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview: function handlePreview(file) {
            console.log(file);
          },
          handleExceed: function handleExceed(files, fileList) {
            this.$message.warning("The limit is 3, you selected " + files.length + " files this time, add up to " + (files.length + fileList.length) + " totally");
          },
          beforeRemove: function beforeRemove(file, fileList) {
            return this.$confirm("Cancel the transfert of " + file.name + " ?");
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createCommentVNode = vue_esm_browser["k" /* createCommentVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];
      var _hoisted_1 = {
        key: 1,
        class: "el-icon-plus avatar-uploader-icon"
      };

      function render(_ctx, _cache) {
        var _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_upload, {
          class: "avatar-uploader",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "show-file-list": false,
          "on-success": _ctx.handleAvatarSuccess,
          "before-upload": _ctx.beforeAvatarUpload
        }, {
          default: _withCtx(function () {
            return [_ctx.imageUrl ? (_openBlock(), _createBlock("img", {
              key: 0,
              src: _ctx.imageUrl,
              class: "avatar"
            }, null, 8, ["src"])) : (_openBlock(), _createBlock("i", _hoisted_1))];
          }),
          _: 1
        }, 8, ["on-success", "before-upload"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            imageUrl: ''
          };
        },
        methods: {
          handleAvatarSuccess: function handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload: function beforeAvatarUpload(file) {
            var isJPG = file.type === 'image/jpeg';
            var isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('Avatar picture must be JPG format!');
            }

            if (!isLt2M) {
              this.$message.error('Avatar picture size can not exceed 2MB!');
            }

            return isJPG && isLt2M;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-plus"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_upload = _resolveComponent("el-upload");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_upload, {
          action: "https://jsonplaceholder.typicode.com/posts/",
          "list-type": "picture-card",
          "on-preview": _ctx.handlePictureCardPreview,
          "on-remove": _ctx.handleRemove
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["on-preview", "on-remove"]), _createVNode(_component_el_dialog, {
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogVisible = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode("img", {
              width: "100%",
              src: _ctx.dialogImageUrl,
              alt: ""
            }, null, 8, ["src"])];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            dialogImageUrl: '',
            dialogVisible: false
          };
        },
        methods: {
          handleRemove: function handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePictureCardPreview: function handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createCommentVNode = vue_esm_browser["k" /* createCommentVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-plus"
      }, null, -1);

      var _hoisted_2 = {
        class: "el-upload-list__item-actions"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-zoom-in"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-download"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-delete"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_upload = _resolveComponent("el-upload");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_upload, {
          action: "#",
          "list-type": "picture-card",
          "auto-upload": false
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          file: _withCtx(function (_ref) {
            var file = _ref.file;
            return [_createVNode("div", null, [_createVNode("img", {
              class: "el-upload-list__item-thumbnail",
              src: file.url,
              alt: ""
            }, null, 8, ["src"]), _createVNode("span", _hoisted_2, [_createVNode("span", {
              class: "el-upload-list__item-preview",
              onClick: function onClick($event) {
                return _ctx.handlePictureCardPreview(file);
              }
            }, [_hoisted_3], 8, ["onClick"]), !_ctx.disabled ? (_openBlock(), _createBlock("span", {
              key: 0,
              class: "el-upload-list__item-delete",
              onClick: function onClick($event) {
                return _ctx.handleDownload(file);
              }
            }, [_hoisted_4], 8, ["onClick"])) : _createCommentVNode("", true), !_ctx.disabled ? (_openBlock(), _createBlock("span", {
              key: 1,
              class: "el-upload-list__item-delete",
              onClick: function onClick($event) {
                return _ctx.handleRemove(file);
              }
            }, [_hoisted_5], 8, ["onClick"])) : _createCommentVNode("", true)])])];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogVisible = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode("img", {
              width: "100%",
              src: _ctx.dialogImageUrl,
              alt: ""
            }, null, 8, ["src"])];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
          };
        },
        methods: {
          handleRemove: function handleRemove(file) {
            console.log(file);
          },
          handlePictureCardPreview: function handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },
          handleDownload: function handleDownload(file) {
            console.log(file);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to upload");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, " jpg/png files with a size less than 500kb ", -1);

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "file-list": _ctx.fileList,
          "list-type": "picture"
        }, {
          tip: _withCtx(function () {
            return [_hoisted_2];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small",
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["on-preview", "on-remove", "file-list"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fileList: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          };
        },
        methods: {
          handleRemove: function handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview: function handlePreview(file) {
            console.log(file);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to upload");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, " jpg/png files with a size less than 500kb ", -1);

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-change": _ctx.handleChange,
          "file-list": _ctx.fileList
        }, {
          tip: _withCtx(function () {
            return [_hoisted_2];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small",
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["on-change", "file-list"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fileList: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          };
        },
        methods: {
          handleChange: function handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-upload"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__text"
      }, [/*#__PURE__*/_createTextVNode("Drop file here or "), /*#__PURE__*/_createVNode("em", null, "click to upload")], -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, " jpg/png files with a size less than 500kb ", -1);

      function render(_ctx, _cache) {
        var _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          drag: "",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "file-list": _ctx.fileList,
          multiple: ""
        }, {
          tip: _withCtx(function () {
            return [_hoisted_3];
          }),
          default: _withCtx(function () {
            return [_hoisted_1, _hoisted_2];
          }),
          _: 1
        }, 8, ["on-preview", "on-remove", "file-list"])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("select file");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("upload to server");

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, " jpg/png files with a size less than 500kb ", -1);

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          ref: "upload",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "auto-upload": false
        }, {
          trigger: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small",
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          tip: _withCtx(function () {
            return [_hoisted_3];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              style: {
                "margin-left": "10px"
              },
              size: "small",
              type: "success",
              onClick: _ctx.submitUpload
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }, 8, ["onClick"])];
          }),
          _: 1
        }, 512)]);
      }

      var democomponentExport = {
        methods: {
          submitUpload: function submitUpload() {
            this.$refs.upload.submit();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/upload.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/upload.md



uploadvue_type_script_lang_ts.render = uploadvue_type_template_id_05c4ea94_render

/* harmony default export */ var upload = __webpack_exports__["default"] = (uploadvue_type_script_lang_ts);

/***/ })

}]);