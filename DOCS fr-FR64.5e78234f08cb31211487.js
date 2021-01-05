(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[192],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/upload.md?vue&type=template&id=4367371e

var uploadvue_type_template_id_4367371e_hoisted_1 = {
  class: "content element-doc"
};

var uploadvue_type_template_id_4367371e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "atupurodo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#atupurodo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" アップロード")], -1);

var uploadvue_type_template_id_4367371e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "クリックまたはドラッグ＆ドロップでファイルをアップロード", -1);

var uploadvue_type_template_id_4367371e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kuritukusitehuairuwoatupurodo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kuritukusitehuairuwoatupurodo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" クリックしてファイルをアップロード")], -1);

var uploadvue_type_template_id_4367371e_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用いてアップロードボタンの種類とテキストをカスタマイズする。最大アップロード数を制限するために "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "limit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "on-exceed"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を設定し、制限を超えたときの方法を指定します。さらに、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-remove"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" フックでファイルの削除を中止することもできる。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :before-remove=\"beforeRemove\"\n  multiple\n  :limit=\"3\"\n  :on-exceed=\"handleExceed\"\n  :file-list=\"fileList\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n      handleExceed(files, fileList) {\n        this.$message.warning(\n          `The limit is 3, you selected ${\n            files.length\n          } files this time, add up to ${\n            files.length + fileList.length\n          } totally`,\n        )\n      },\n      beforeRemove(file, fileList) {\n        return this.$confirm(`Cancel the transfert of ${file.name} ?`)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "yuzaabatanoatupurodo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yuzaabatanoatupurodo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ユーザーアバターのアップロード")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("アップロードするファイルの形式やサイズを制限するには、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-upload"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" フックを使う。")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"avatar-uploader\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :show-file-list=\"false\"\n  :on-success=\"handleAvatarSuccess\"\n  :before-upload=\"beforeAvatarUpload\"\n>\n  <img v-if=\"imageUrl\" :src=\"imageUrl\" class=\"avatar\" />\n  <i v-else class=\"el-icon-plus avatar-uploader-icon\"></i>\n</el-upload>\n\n<style>\n  .avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n  }\n  .avatar-uploader .el-upload:hover {\n    border-color: #409eff;\n  }\n  .avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n  }\n  .avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        imageUrl: '',\n      }\n    },\n    methods: {\n      handleAvatarSuccess(res, file) {\n        this.imageUrl = URL.createObjectURL(file.raw)\n      },\n      beforeAvatarUpload(file) {\n        const isJPG = file.type === 'image/jpeg'\n        const isLt2M = file.size / 1024 / 1024 < 2\n\n        if (!isJPG) {\n          this.$message.error('Avatar picture must be JPG format!')\n        }\n        if (!isLt2M) {\n          this.$message.error('Avatar picture size can not exceed 2MB!')\n        }\n        return isJPG && isLt2M\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "huotouoru"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#huotouoru"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" フォトウォール")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("fileListのスタイルを変更するには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "list-type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用いる。")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  list-type=\"picture-card\"\n  :on-preview=\"handlePictureCardPreview\"\n  :on-remove=\"handleRemove\"\n>\n  <i class=\"el-icon-plus\"></i>\n</el-upload>\n<el-dialog v-model=\"dialogVisible\">\n  <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\" />\n</el-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url\n        this.dialogVisible = true\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kasutamuhuairunosamuneiru"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamuhuairunosamuneiru"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" カスタムファイルのサムネイル")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("デフォルトのサムネイルテンプレートを変更するには、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "scoped-slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用いる。")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload action=\"#\" list-type=\"picture-card\" :auto-upload=\"false\">\n  <template #default>\n    <i class=\"el-icon-plus\"></i>\n  </template>\n  <template #file=\"{file}\">\n    <div>\n      <img class=\"el-upload-list__item-thumbnail\" :src=\"file.url\" alt=\"\" />\n      <span class=\"el-upload-list__item-actions\">\n        <span\n          class=\"el-upload-list__item-preview\"\n          @click=\"handlePictureCardPreview(file)\"\n        >\n          <i class=\"el-icon-zoom-in\"></i>\n        </span>\n        <span\n          v-if=\"!disabled\"\n          class=\"el-upload-list__item-delete\"\n          @click=\"handleDownload(file)\"\n        >\n          <i class=\"el-icon-download\"></i>\n        </span>\n        <span\n          v-if=\"!disabled\"\n          class=\"el-upload-list__item-delete\"\n          @click=\"handleRemove(file)\"\n        >\n          <i class=\"el-icon-delete\"></i>\n        </span>\n      </span>\n    </div>\n  </template>\n</el-upload>\n<el-dialog v-model=\"dialogVisible\">\n  <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\" />\n</el-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n        disabled: false,\n      }\n    },\n    methods: {\n      handleRemove(file) {\n        console.log(file)\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url\n        this.dialogVisible = true\n      },\n      handleDownload(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "samuneiru-fukifilelist"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#samuneiru-fukifilelist"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" サムネイル付きFileList")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  list-type=\"picture\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">\n      jpg/png files with a size less than 500kb\n    </div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "huairurisuto-zhi-yu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#huairurisuto-zhi-yu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ファイルリスト制御")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "on-change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" フック関数を使ってアップロードファイルの一覧を制御する")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-change=\"handleChange\"\n  :file-list=\"fileList\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">\n      jpg/png files with a size less than 500kb\n    </div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url:\n              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.fileList = fileList.slice(-3)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "doratugusiteatupurodo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#doratugusiteatupurodo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ドラッグしてアップロード")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ファイルを特定の場所にドラッグしてアップロードすることができます。", -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  drag\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  multiple\n>\n  <i class=\"el-icon-upload\"></i>\n  <div class=\"el-upload__text\">Drop file here or <em>click to upload</em></div>\n  <template #tip>\n    <div class=\"el-upload__tip\">\n      jpg/png files with a size less than 500kb\n    </div>\n  </template>\n</el-upload>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "shou-dongatupurodo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shou-dongatupurodo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 手動アップロード")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  ref=\"upload\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :auto-upload=\"false\"\n>\n  <template #trigger>\n    <el-button size=\"small\" type=\"primary\">select file</el-button>\n  </template>\n  <el-button\n    style=\"margin-left: 10px;\"\n    size=\"small\"\n    type=\"success\"\n    @click=\"submitUpload\"\n    >upload to server</el-button\n  >\n  <template #tip>\n    <div class=\"el-upload__tip\">\n      jpg/png files with a size less than 500kb\n    </div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    methods: {\n      submitUpload() {\n        this.$refs.upload.submit()\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>action</td><td>必須、リクエストURL</td><td>string</td><td>—</td><td>—</td></tr><tr><td>headers</td><td>リクエストヘッダ</td><td>object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>複数ファイルのアップロードが許可されているかどうか</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>data</td><td>リクエストの追加オプション</td><td>object</td><td>—</td><td>—</td></tr><tr><td>name</td><td>アップロードファイルのキー名</td><td>string</td><td>—</td><td>file</td></tr><tr><td>with-credentials</td><td>クッキーを送信するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-file-list</td><td>アップロードされたファイルリストを表示するかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>drag</td><td>ドラッグ＆ドロップモードを有効にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>accept</td><td>accepted <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept\">file types</a>, will not work when <code>thumbnail-mode</code> is <code>true</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>on-preview</td><td>アップロードされたファイルをクリックした時のフック関数</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>on-remove</td><td>ファイル削除時のフック関数</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-success</td><td>アップロード成功時のフック関数</td><td>function(response, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-error</td><td>エラー時のフック関数</td><td>function(err, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-progress</td><td>進捗時のフック関数</td><td>function(event, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-change</td><td>ファイル選択時、アップロード成功時、アップロード失敗時のフック関数</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>before-upload</td><td>フック関数を使用してアップロードする前に、アップロードするファイルをパラメータとしてアップロードすることができます。<code>false</code>を返すか、<code>Promise</code>を返した後に拒否された場合、アップロードは中止されます。</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>before-remove</td><td>フック関数を使用して、ファイルとファイルリストをパラメータとしてファイルを削除することができます。<code>false</code>を返すか、<code>Promise</code>を返した後に拒否された場合、削除は中止される。</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>thumbnail-mode</td><td>サムネイルが表示されているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>file-list</td><td>default uploaded files, e.g. [{name: &#39;food.jpg&#39;, url: &#39;https://xxx.cdn.com/xxx.jpg&#39;}]</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>list-type</td><td>ファイルリストの型</td><td>string</td><td>text/picture/picture-card</td><td>text</td></tr><tr><td>auto-upload</td><td>ファイルを自動アップロードするかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>http-request</td><td>デフォルトの xhr の動作をオーバーライドし、独自のアップロードファイルのリクエストを実装できるようにします。</td><td>function</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>アップロードを無効にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>limit</td><td>アップロード可能な最大数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>on-exceed</td><td>リミットを突破した時のフック関数</td><td>function(files, fileList)</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"surotuto\"><a class=\"header-anchor\" href=\"#surotuto\">¶</a> スロット</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>trigger</td><td>ファイルダイアログをトリガーする内容</td></tr><tr><td>tip</td><td>tipsの内容</td></tr></tbody></table><h3 id=\"mesotudo\"><a class=\"header-anchor\" href=\"#mesotudo\">¶</a> メソッド</h3><table><thead><tr><th>Methods Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>clearFiles</td><td>アップロードされたファイルリストをクリアします (このメソッドは <code>before-upload</code> フックではサポートされていません)。</td><td>—</td></tr><tr><td>abort</td><td>アップロード要求の取り消し</td><td>（ file: fileList&#39;s item ）</td></tr><tr><td>submit</td><td>ファイルリストを手動でアップロード</td><td>—</td></tr></tbody></table>", 6);

function uploadvue_type_template_id_4367371e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", uploadvue_type_template_id_4367371e_hoisted_1, [uploadvue_type_template_id_4367371e_hoisted_2, uploadvue_type_template_id_4367371e_hoisted_3, uploadvue_type_template_id_4367371e_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [uploadvue_type_template_id_4367371e_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_21, _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_26]);
}
// CONCATENATED MODULE: ./website/docs/jp/upload.md?vue&type=template&id=4367371e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/upload.md?vue&type=script&lang=ts


/* harmony default export */ var uploadvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
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
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createCommentVNode = vue_esm_browser["k" /* createCommentVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
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
          _withCtx = vue_esm_browser["db" /* withCtx */],
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
          _withCtx = vue_esm_browser["db" /* withCtx */];

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
          _withCtx = vue_esm_browser["db" /* withCtx */],
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
          _withCtx = vue_esm_browser["db" /* withCtx */],
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
          _withCtx = vue_esm_browser["db" /* withCtx */],
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
          _withCtx = vue_esm_browser["db" /* withCtx */],
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
// CONCATENATED MODULE: ./website/docs/jp/upload.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/upload.md



uploadvue_type_script_lang_ts.render = uploadvue_type_template_id_4367371e_render

/* harmony default export */ var upload = __webpack_exports__["default"] = (uploadvue_type_script_lang_ts);

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/upload.md?vue&type=template&id=8f27320e

var uploadvue_type_template_id_8f27320e_hoisted_1 = {
  class: "content element-doc"
};

var uploadvue_type_template_id_8f27320e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "upload"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#upload"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Upload")], -1);

var uploadvue_type_template_id_8f27320e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Permet d'uploader des fichiers en cliquant ou en les déplaçant sur le composant.", -1);

var uploadvue_type_template_id_8f27320e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "cliquer-pour-envoyer"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cliquer-pour-envoyer"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Cliquer pour envoyer")], -1);

var uploadvue_type_template_id_8f27320e_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Personnalisez le bouton d'envoi avec "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "limit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "on-exceed"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour limiter le nombre maximal de fichiers et déterminer le comportement quand ce nombre est dépassé. De plus, vous pouvez annuler la suppression d'un fichier avec "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-remove"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :before-remove=\"beforeRemove\"\n  multiple\n  :limit=\"3\"\n  :on-exceed=\"handleExceed\"\n  :file-list=\"fileList\">\n  <el-button size=\"small\" type=\"primary\">Cliquer pour envoyer</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">Fichiers jpg/png avec une taille inférieure à 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]\n      };\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList);\n      },\n      handlePreview(file) {\n        console.log(file);\n      },\n      handleExceed(files, fileList) {\n        this.$message.warning(`La limite est 3, vous avez choisi ${files.length} fichiers, soit ${files.length + fileList.length} au total.`);\n      },\n      beforeRemove(file, fileList) {\n        return this.$confirm(`Supprimer le transfert de ${ file.name } ?`);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "envoi-d-avatar-utilisateur"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#envoi-d-avatar-utilisateur"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Envoi d'avatar utilisateur")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-upload"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour restreindre le format et la taille du fichier à envoyer.")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"avatar-uploader\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :show-file-list=\"false\"\n  :on-success=\"handleAvatarSuccess\"\n  :before-upload=\"beforeAvatarUpload\">\n  <img v-if=\"imageUrl\" :src=\"imageUrl\" class=\"avatar\">\n  <i v-else class=\"el-icon-plus avatar-uploader-icon\"></i>\n</el-upload>\n\n<style>\n  .avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n  }\n  .avatar-uploader .el-upload:hover {\n    border-color: #409EFF;\n  }\n  .avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n  }\n  .avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        imageUrl: ''\n      };\n    },\n    methods: {\n      handleAvatarSuccess(res, file) {\n        this.imageUrl = URL.createObjectURL(file.raw);\n      },\n      beforeAvatarUpload(file) {\n        const isJPG = file.type === 'image/jpeg';\n        const isLt2M = file.size / 1024 / 1024 < 2;\n\n        if (!isJPG) {\n          this.$message.error('L\\'avatar doit être en JPG !');\n        }\n        if (!isLt2M) {\n          this.$message.error('L\\'avatar ne peut pas excéder 2Mb !');\n        }\n        return isJPG && isLt2M;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "mur-de-photos"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mur-de-photos"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Mur de photos")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "list-type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour changer le style de la liste de fichiers.")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  list-type=\"picture-card\"\n  :on-preview=\"handlePictureCardPreview\"\n  :on-remove=\"handleRemove\">\n  <i class=\"el-icon-plus\"></i>\n</el-upload>\n<el-dialog v-model=\"dialogVisible\">\n  <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\">\n</el-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false\n      };\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList);\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url;\n        this.dialogVisible = true;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "custom-file-thumbnail"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#custom-file-thumbnail"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Custom file thumbnail")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "scoped-slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to change default thumbnail template.")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  action=\"#\"\n  list-type=\"picture-card\"\n  :auto-upload=\"false\">\n    <template #default>\n      <i class=\"el-icon-plus\"></i>\n    </template>\n    <template #file=\"{file}\">\n      <div>\n        <img class=\"el-upload-list__item-thumbnail\" :src=\"file.url\" alt=\"\" />\n        <span class=\"el-upload-list__item-actions\">\n          <span\n            class=\"el-upload-list__item-preview\"\n            @click=\"handlePictureCardPreview(file)\"\n          >\n            <i class=\"el-icon-zoom-in\"></i>\n          </span>\n          <span\n            v-if=\"!disabled\"\n            class=\"el-upload-list__item-delete\"\n            @click=\"handleDownload(file)\"\n          >\n            <i class=\"el-icon-download\"></i>\n          </span>\n          <span\n            v-if=\"!disabled\"\n            class=\"el-upload-list__item-delete\"\n            @click=\"handleRemove(file)\"\n          >\n            <i class=\"el-icon-delete\"></i>\n          </span>\n        </span>\n      </div>\n    </template>\n</el-upload>\n<el-dialog v-model=\"dialogVisible\">\n  <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\">\n</el-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n        disabled: false\n      };\n    },\n    methods: {\n      handleRemove(file) {\n        console.log(file);\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url;\n        this.dialogVisible = true;\n      },\n      handleDownload(file) {\n        console.log(file);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "liste-de-fichiers-avec-miniatures"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#liste-de-fichiers-avec-miniatures"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Liste de fichiers avec miniatures")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  list-type=\"picture\">\n  <el-button size=\"small\" type=\"primary\">Cliquer pour envoyer</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">Fichiers jpg/png avec une taille inférieure à 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]\n      };\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList);\n      },\n      handlePreview(file) {\n        console.log(file);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "controle-de-la-liste-de-fichiers"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#controle-de-la-liste-de-fichiers"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Contrôle de la liste de fichiers")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "on-change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour contrôler le comportement de la liste de fichiers.")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-change=\"handleChange\"\n  :file-list=\"fileList\">\n  <el-button size=\"small\" type=\"primary\">Cliquer pour envoyer</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">Fichiers jpg/png avec une taille inférieure à 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [{\n          name: 'food.jpeg',\n          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'\n        }, {\n          name: 'food2.jpeg',\n          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'\n        }]\n      };\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.fileList = fileList.slice(-3);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "envoi-en-deposant"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#envoi-en-deposant"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Envoi en déposant")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez déposer les fichiers par drag'n drop sur l'espace dédié.", -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  drag\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  multiple>\n  <i class=\"el-icon-upload\"></i>\n  <div class=\"el-upload__text\">Déposer les fichiers ici ou<em>cliquez pour envoyer</em></div>\n  <template #tip>\n    <div class=\"el-upload__tip\">Fichiers jpg/png avec une taille inférieure à 500kb</div>\n  </template>\n</el-upload>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "envoi-manuel"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#envoi-manuel"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Envoi manuel")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  ref=\"upload\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :auto-upload=\"false\">\n  <template #trigger>\n    <el-button size=\"small\" type=\"primary\">Choisir un fichier</el-button>\n  </template>\n  <el-button style=\"margin-left: 10px;\" size=\"small\" type=\"success\" @click=\"submitUpload\">Envoyer au serveur</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">Fichiers jpg/png avec une taille inférieure à 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    methods: {\n      submitUpload() {\n        this.$refs.upload.submit();\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs\"><a class=\"header-anchor\" href=\"#attributs\">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>action</td><td>Requis, l&#39;url de requête.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>headers</td><td>Les headers de la requête.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>Si envoyer de multiples fichiers est autorisé.</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>data</td><td>Options additionnelles de la requête.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>name</td><td>Identifiant du fichier.</td><td>string</td><td>—</td><td>file</td></tr><tr><td>with-credentials</td><td>Si les cookies sont aussi envoyés.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-file-list</td><td>Si la liste des fichiers est affichée.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>drag</td><td>Si le mode drag&#39;n drop est activé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>accept</td><td><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept\">Types de fichiers</a> acceptés, ne marche pas si <code>thumbnail-mode</code> est <code>true</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>on-preview</td><td>Fonction pour quand le fichier est cliqué.</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>on-remove</td><td>Fonction pour quand des fichiers sont supprimés.</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-success</td><td>Fonction pour quand l&#39;upload a réussi.</td><td>function(response, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-error</td><td>Fonction pour quand l&#39;upload renvoi une erreur.</td><td>function(err, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-progress</td><td>Fonction pour quand l&#39;upload est en cours.</td><td>function(event, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-change</td><td>Fonction pour quand le statut d&#39;un fichier change (sélection, upload, erreur...).</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>before-upload</td><td>Fonction pour avant l&#39;upload. Si <code>false</code> est retourné ou une <code>Promise</code> qui est ensuite rejetée, l&#39;envoi sera annulé.</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>before-remove</td><td>Fonction pour avant la suppression de fichiers. Si <code>false</code> est retourné ou une <code>Promise</code> qui est ensuite rejetée, la suppression sera ensuite annulée.</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>thumbnail-mode</td><td>Si les miniatures sont affichées.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>file-list</td><td>Les fichiers envoyé par défaut, e.g. [{name: &#39;food.jpg&#39;, url: &#39;https://xxx.cdn.com/xxx.jpg&#39;}]</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>list-type</td><td>Le type de liste de fichiers.</td><td>string</td><td>text/picture/picture-card</td><td>text</td></tr><tr><td>auto-upload</td><td>Si l&#39;envoi est automatique.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>http-request</td><td>Écrase le xhr par défaut, afin que vous puissiez implémenter votre propre fonction d&#39;envoi.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si le composant est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>limit</td><td>Nombre maximum d&#39;envoi autorisés.</td><td>number</td><td>—</td><td>—</td></tr><tr><td>on-exceed</td><td>Fonction pour quand la limite d&#39;envoi est dépassée.</td><td>function(files, fileList)</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>trigger</td><td>Le contenu qui déclenche le Dialog du fichier.</td></tr><tr><td>tip</td><td>Le contenu des tips.</td></tr></tbody></table><h3 id=\"methodes\"><a class=\"header-anchor\" href=\"#methodes\">¶</a> Méthodes</h3><table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>clearFiles</td><td>Efface la liste (non supporté dans <code>before-upload</code>).</td><td>—</td></tr><tr><td>abort</td><td>Annule l&#39;envoi en cours.</td><td>（ file: fileList&#39;s item ）</td></tr><tr><td>submit</td><td>Envoi la liste de fichiers manuellement.</td><td>—</td></tr></tbody></table>", 6);

function uploadvue_type_template_id_8f27320e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", uploadvue_type_template_id_8f27320e_hoisted_1, [uploadvue_type_template_id_8f27320e_hoisted_2, uploadvue_type_template_id_8f27320e_hoisted_3, uploadvue_type_template_id_8f27320e_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [uploadvue_type_template_id_8f27320e_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_21, _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_26]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/upload.md?vue&type=template&id=8f27320e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/upload.md?vue&type=script&lang=ts


/* harmony default export */ var uploadvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquer pour envoyer");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "Fichiers jpg/png avec une taille inférieure à 500kb", -1);

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
            this.$message.warning("La limite est 3, vous avez choisi " + files.length + " fichiers, soit " + (files.length + fileList.length) + " au total.");
          },
          beforeRemove: function beforeRemove(file, fileList) {
            return this.$confirm("Supprimer le transfert de " + file.name + " ?");
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createCommentVNode = vue_esm_browser["k" /* createCommentVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
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
              this.$message.error('L\'avatar doit être en JPG !');
            }

            if (!isLt2M) {
              this.$message.error('L\'avatar ne peut pas excéder 2Mb !');
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
          _withCtx = vue_esm_browser["db" /* withCtx */],
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
          _withCtx = vue_esm_browser["db" /* withCtx */];

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
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquer pour envoyer");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "Fichiers jpg/png avec une taille inférieure à 500kb", -1);

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
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquer pour envoyer");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "Fichiers jpg/png avec une taille inférieure à 500kb", -1);

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
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-upload"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__text"
      }, [/*#__PURE__*/_createTextVNode("Déposer les fichiers ici ou"), /*#__PURE__*/_createVNode("em", null, "cliquez pour envoyer")], -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "Fichiers jpg/png avec une taille inférieure à 500kb", -1);

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
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Choisir un fichier");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Envoyer au serveur");

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "Fichiers jpg/png avec une taille inférieure à 500kb", -1);

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
// CONCATENATED MODULE: ./website/docs/fr-FR/upload.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/upload.md



uploadvue_type_script_lang_ts.render = uploadvue_type_template_id_8f27320e_render

/* harmony default export */ var upload = __webpack_exports__["default"] = (uploadvue_type_script_lang_ts);

/***/ })

}]);