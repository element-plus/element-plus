(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[286],{

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/upload.md?vue&type=template&id=fc648ac2

const uploadvue_type_template_id_fc648ac2_hoisted_1 = {
  class: "content element-doc"
};

const uploadvue_type_template_id_fc648ac2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("アップロード ");

const uploadvue_type_template_id_fc648ac2_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "クリックまたはドラッグ＆ドロップでファイルをアップロード", -1);

const uploadvue_type_template_id_fc648ac2_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("クリックしてファイルをアップロード ");

const uploadvue_type_template_id_fc648ac2_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を用いてアップロードボタンの種類とテキストをカスタマイズする。最大アップロード数を制限するために "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "limit"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "on-exceed"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定し、制限を超えたときの方法を指定します。さらに、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-remove"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" フックでファイルの削除を中止することもできる。")])], -1);

const uploadvue_type_template_id_fc648ac2_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :before-remove=\"beforeRemove\"\n  multiple\n  :limit=\"3\"\n  :on-exceed=\"handleExceed\"\n  :file-list=\"fileList\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n      handleExceed(files, fileList) {\n        this.$message.warning(\n          `The limit is 3, you selected ${\n            files.length\n          } files this time, add up to ${\n            files.length + fileList.length\n          } totally`\n        )\n      },\n      beforeRemove(file, fileList) {\n        return this.$confirm(`Cancel the transfert of ${file.name} ?`)\n      },\n    },\n  }\n</script>\n")], -1);

const uploadvue_type_template_id_fc648ac2_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ユーザーアバターのアップロード ");

const uploadvue_type_template_id_fc648ac2_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("アップロードするファイルの形式やサイズを制限するには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-upload"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" フックを使う。")], -1);

const uploadvue_type_template_id_fc648ac2_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"avatar-uploader\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :show-file-list=\"false\"\n  :on-success=\"handleAvatarSuccess\"\n  :before-upload=\"beforeAvatarUpload\"\n>\n  <img v-if=\"imageUrl\" :src=\"imageUrl\" class=\"avatar\" />\n  <i v-else class=\"el-icon-plus avatar-uploader-icon\"></i>\n</el-upload>\n\n<style>\n  .avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n  }\n  .avatar-uploader .el-upload:hover {\n    border-color: #409eff;\n  }\n  .avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n  }\n  .avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        imageUrl: '',\n      }\n    },\n    methods: {\n      handleAvatarSuccess(res, file) {\n        this.imageUrl = URL.createObjectURL(file.raw)\n      },\n      beforeAvatarUpload(file) {\n        const isJPG = file.type === 'image/jpeg'\n        const isLt2M = file.size / 1024 / 1024 < 2\n\n        if (!isJPG) {\n          this.$message.error('Avatar picture must be JPG format!')\n        }\n        if (!isLt2M) {\n          this.$message.error('Avatar picture size can not exceed 2MB!')\n        }\n        return isJPG && isLt2M\n      },\n    },\n  }\n</script>\n")], -1);

const uploadvue_type_template_id_fc648ac2_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("フォトウォール ");

const uploadvue_type_template_id_fc648ac2_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("fileList のスタイルを変更するには "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "list-type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を用いる。")], -1);

const uploadvue_type_template_id_fc648ac2_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  list-type=\"picture-card\"\n  :on-preview=\"handlePictureCardPreview\"\n  :on-remove=\"handleRemove\"\n>\n  <i class=\"el-icon-plus\"></i>\n</el-upload>\n<el-dialog v-model=\"dialogVisible\">\n  <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\" />\n</el-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url\n        this.dialogVisible = true\n      },\n    },\n  }\n</script>\n")], -1);

const uploadvue_type_template_id_fc648ac2_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタムファイルのサムネイル ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("デフォルトのサムネイルテンプレートを変更するには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "scoped-slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を用いる。")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload action=\"#\" list-type=\"picture-card\" :auto-upload=\"false\">\n  <template #default>\n    <i class=\"el-icon-plus\"></i>\n  </template>\n  <template #file=\"{file}\">\n    <div>\n      <img class=\"el-upload-list__item-thumbnail\" :src=\"file.url\" alt=\"\" />\n      <span class=\"el-upload-list__item-actions\">\n        <span\n          class=\"el-upload-list__item-preview\"\n          @click=\"handlePictureCardPreview(file)\"\n        >\n          <i class=\"el-icon-zoom-in\"></i>\n        </span>\n        <span\n          v-if=\"!disabled\"\n          class=\"el-upload-list__item-delete\"\n          @click=\"handleDownload(file)\"\n        >\n          <i class=\"el-icon-download\"></i>\n        </span>\n        <span\n          v-if=\"!disabled\"\n          class=\"el-upload-list__item-delete\"\n          @click=\"handleRemove(file)\"\n        >\n          <i class=\"el-icon-delete\"></i>\n        </span>\n      </span>\n    </div>\n  </template>\n</el-upload>\n<el-dialog v-model=\"dialogVisible\">\n  <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\" />\n</el-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n        disabled: false,\n      }\n    },\n    methods: {\n      handleRemove(file) {\n        console.log(file)\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url\n        this.dialogVisible = true\n      },\n      handleDownload(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("サムネイル付き FileList ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  list-type=\"picture\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ファイルリスト制御 ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "on-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" フック関数を使ってアップロードファイルの一覧を制御する")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-change=\"handleChange\"\n  :file-list=\"fileList\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.fileList = fileList.slice(-3)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ドラッグしてアップロード ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ファイルを特定の場所にドラッグしてアップロードすることができます。", -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  drag\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  multiple\n>\n  <i class=\"el-icon-upload\"></i>\n  <div class=\"el-upload__text\">Drop file here or <em>click to upload</em></div>\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("手動アップロード ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  ref=\"upload\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :auto-upload=\"false\"\n>\n  <template #trigger>\n    <el-button size=\"small\" type=\"primary\">select file</el-button>\n  </template>\n  <el-button\n    style=\"margin-left: 10px;\"\n    size=\"small\"\n    type=\"success\"\n    @click=\"submitUpload\"\n    >upload to server</el-button\n  >\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    methods: {\n      submitUpload() {\n        this.$refs.upload.submit()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Default")])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "action"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "必須、リクエスト URL"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "headers"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "リクエストヘッダ"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "method"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "アップロードリクエスト方法を設定する"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "post/put"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "post")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "複数ファイルのアップロードが許可されているかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "リクエストの追加オプション"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "アップロードファイルのキー名"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "file")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "with-credentials"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "クッキーを送信するかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-file-list"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "アップロードされたファイルリストを表示するかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "drag"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ドラッグ＆ドロップモードを有効にするかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "accept", -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("accepted ");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("file types");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", will not work when ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "thumbnail-mode", -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true", -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string", -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-preview"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "アップロードされたファイルをクリックした時のフック関数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(file)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-remove"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ファイル削除時のフック関数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-success"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "アップロード成功時のフック関数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(response, file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-error"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "エラー時のフック関数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(err, file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-progress"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "進捗時のフック関数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(event, file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ファイル選択時、アップロード成功時、アップロード失敗時のフック関数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "before-upload"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("フック関数を使用してアップロードする前に、アップロードするファイルをパラメータとしてアップロードすることができます。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を返すか、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を返した後に拒否された場合、アップロードは中止されます。")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(file)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "before-remove"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("フック関数を使用して、ファイルとファイルリストをパラメータとしてファイルを削除することができます。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を返すか、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を返した後に拒否された場合、削除は中止される。")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "thumbnail-mode"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "サムネイルが表示されているかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "file-list"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "default uploaded files, e.g. [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "array"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "[]")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "list-type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ファイルリストの型"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "text/picture/picture-card"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "text")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "auto-upload"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ファイルを自動アップロードするかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "http-request"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "デフォルトの xhr の動作をオーバーライドし、独自のアップロードファイルのリクエストを実装できるようにします。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "アップロードを無効にするかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "limit"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "アップロード可能な最大数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-exceed"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "リミットを突破した時のフック関数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(files, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-")], -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スロット ");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ファイルダイアログをトリガーする内容")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tip"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tips の内容")])])], -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("メソッド ");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Methods Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>clearFiles</td><td>アップロードされたファイルリストをクリアします (このメソッドは <code>before-upload</code> フックではサポートされていません)。</td><td>—</td></tr><tr><td>abort</td><td>アップロード要求の取り消し</td><td>（ file: fileList&#39;s item ）</td></tr><tr><td>submit</td><td>ファイルリストを手動でアップロード</td><td>—</td></tr></tbody></table>", 1);

function uploadvue_type_template_id_fc648ac2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_element_demo6 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo6");

  const _component_element_demo7 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo7");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", uploadvue_type_template_id_fc648ac2_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atupurodo",
    content: "アップロード",
    href: "#atupurodo",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_fc648ac2_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atupurodo"
    })]),
    _: 1
  }), uploadvue_type_template_id_fc648ac2_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kuritukusitehuairuwoatupurodo",
    content: "クリックしてファイルをアップロード",
    href: "#kuritukusitehuairuwoatupurodo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_fc648ac2_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kuritukusitehuairuwoatupurodo"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_fc648ac2_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_fc648ac2_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "yuzaabatanoatupurodo",
    content: "ユーザーアバターのアップロード",
    href: "#yuzaabatanoatupurodo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_fc648ac2_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yuzaabatanoatupurodo"
    })]),
    _: 1
  }), uploadvue_type_template_id_fc648ac2_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_fc648ac2_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "huotouoru",
    content: "フォトウォール",
    href: "#huotouoru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_fc648ac2_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#huotouoru"
    })]),
    _: 1
  }), uploadvue_type_template_id_fc648ac2_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_fc648ac2_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamuhuairunosamuneiru",
    content: "カスタムファイルのサムネイル",
    href: "#kasutamuhuairunosamuneiru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_fc648ac2_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamuhuairunosamuneiru"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "samuneirufu-ki-filelist",
    content: "サムネイル付き FileList",
    href: "#samuneirufu-ki-filelist",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#samuneirufu-ki-filelist"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "huairurisutozhi-yu",
    content: "ファイルリスト制御",
    href: "#huairurisutozhi-yu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#huairurisutozhi-yu"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "doratugusiteatupurodo",
    content: "ドラッグしてアップロード",
    href: "#doratugusiteatupurodo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#doratugusiteatupurodo"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shou-dong-atupurodo",
    content: "手動アップロード",
    href: "#shou-dong-atupurodo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shou-dong-atupurodo"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_27, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_37, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39]),
    _: 1
  }), _hoisted_40, _hoisted_41, _hoisted_42, _hoisted_43]), _hoisted_44, _hoisted_45, _hoisted_46]), _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60, _hoisted_61, _hoisted_62])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "surotuto",
    content: "スロット",
    href: "#surotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_63, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#surotuto"
    })]),
    _: 1
  }), _hoisted_64, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "mesotudo",
    content: "メソッド",
    href: "#mesotudo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_65, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#mesotudo"
    })]),
    _: 1
  }), _hoisted_66, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/upload.md?vue&type=template&id=fc648ac2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/upload.md?vue&type=script&lang=ts

/* harmony default export */ var uploadvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to upload");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
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
          tip: _withCtx(() => [_hoisted_2]),
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small",
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }, 8, ["on-preview", "on-remove", "before-remove", "on-exceed", "file-list"])]);
      }

      const democomponentExport = {
        data() {
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
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },

          handlePreview(file) {
            console.log(file);
          },

          handleExceed(files, fileList) {
            this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
          },

          beforeRemove(file, fileList) {
            return this.$confirm(`Cancel the transfert of ${file.name} ?`);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createCommentVNode: _createCommentVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = ["src"];
      const _hoisted_2 = {
        key: 1,
        class: "el-icon-plus avatar-uploader-icon"
      };

      function render(_ctx, _cache) {
        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "avatar-uploader",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "show-file-list": false,
          "on-success": _ctx.handleAvatarSuccess,
          "before-upload": _ctx.beforeAvatarUpload
        }, {
          default: _withCtx(() => [_ctx.imageUrl ? (_openBlock(), _createElementBlock("img", {
            key: 0,
            src: _ctx.imageUrl,
            class: "avatar"
          }, null, 8, _hoisted_1)) : (_openBlock(), _createElementBlock("i", _hoisted_2))]),
          _: 1
        }, 8, ["on-success", "before-upload"])]);
      }

      const democomponentExport = {
        data() {
          return {
            imageUrl: ''
          };
        },

        methods: {
          handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },

          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

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

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-plus"
      }, null, -1);

      const _hoisted_2 = ["src"];

      function render(_ctx, _cache) {
        const _component_el_upload = _resolveComponent("el-upload");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          action: "https://jsonplaceholder.typicode.com/posts/",
          "list-type": "picture-card",
          "on-preview": _ctx.handlePictureCardPreview,
          "on-remove": _ctx.handleRemove
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["on-preview", "on-remove"]), _createVNode(_component_el_dialog, {
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.dialogVisible = $event)
        }, {
          default: _withCtx(() => [_createElementVNode("img", {
            width: "100%",
            src: _ctx.dialogImageUrl,
            alt: ""
          }, null, 8, _hoisted_2)]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            dialogImageUrl: '',
            dialogVisible: false
          };
        },

        methods: {
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },

          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createCommentVNode: _createCommentVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-plus"
      }, null, -1);

      const _hoisted_2 = ["src"];
      const _hoisted_3 = {
        class: "el-upload-list__item-actions"
      };
      const _hoisted_4 = ["onClick"];

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-zoom-in"
      }, null, -1);

      const _hoisted_6 = [_hoisted_5];
      const _hoisted_7 = ["onClick"];

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-download"
      }, null, -1);

      const _hoisted_9 = [_hoisted_8];
      const _hoisted_10 = ["onClick"];

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-delete"
      }, null, -1);

      const _hoisted_12 = [_hoisted_11];
      const _hoisted_13 = ["src"];

      function render(_ctx, _cache) {
        const _component_el_upload = _resolveComponent("el-upload");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          action: "#",
          "list-type": "picture-card",
          "auto-upload": false
        }, {
          default: _withCtx(() => [_hoisted_1]),
          file: _withCtx(({
            file
          }) => [_createElementVNode("div", null, [_createElementVNode("img", {
            class: "el-upload-list__item-thumbnail",
            src: file.url,
            alt: ""
          }, null, 8, _hoisted_2), _createElementVNode("span", _hoisted_3, [_createElementVNode("span", {
            class: "el-upload-list__item-preview",
            onClick: $event => _ctx.handlePictureCardPreview(file)
          }, _hoisted_6, 8, _hoisted_4), !_ctx.disabled ? (_openBlock(), _createElementBlock("span", {
            key: 0,
            class: "el-upload-list__item-delete",
            onClick: $event => _ctx.handleDownload(file)
          }, _hoisted_9, 8, _hoisted_7)) : _createCommentVNode("", true), !_ctx.disabled ? (_openBlock(), _createElementBlock("span", {
            key: 1,
            class: "el-upload-list__item-delete",
            onClick: $event => _ctx.handleRemove(file)
          }, _hoisted_12, 8, _hoisted_10)) : _createCommentVNode("", true)])])]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.dialogVisible = $event)
        }, {
          default: _withCtx(() => [_createElementVNode("img", {
            width: "100%",
            src: _ctx.dialogImageUrl,
            alt: ""
          }, null, 8, _hoisted_13)]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
          };
        },

        methods: {
          handleRemove(file) {
            console.log(file);
          },

          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },

          handleDownload(file) {
            console.log(file);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to upload");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "file-list": _ctx.fileList,
          "list-type": "picture"
        }, {
          tip: _withCtx(() => [_hoisted_2]),
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small",
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }, 8, ["on-preview", "on-remove", "file-list"])]);
      }

      const democomponentExport = {
        data() {
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
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },

          handlePreview(file) {
            console.log(file);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to upload");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-change": _ctx.handleChange,
          "file-list": _ctx.fileList
        }, {
          tip: _withCtx(() => [_hoisted_2]),
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small",
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }, 8, ["on-change", "file-list"])]);
      }

      const democomponentExport = {
        data() {
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
          handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-upload"
      }, null, -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__text"
      }, [/*#__PURE__*/_createTextVNode("Drop file here or "), /*#__PURE__*/_createElementVNode("em", null, "click to upload")], -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          drag: "",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "file-list": _ctx.fileList,
          multiple: ""
        }, {
          tip: _withCtx(() => [_hoisted_3]),
          default: _withCtx(() => [_hoisted_1, _hoisted_2]),
          _: 1
        }, 8, ["on-preview", "on-remove", "file-list"])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo7": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("select file");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("upload to server");

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          ref: "upload",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "auto-upload": false
        }, {
          trigger: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small",
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          tip: _withCtx(() => [_hoisted_3]),
          default: _withCtx(() => [_createVNode(_component_el_button, {
            style: {
              "margin-left": "10px"
            },
            size: "small",
            type: "success",
            onClick: _ctx.submitUpload
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }, 8, ["onClick"])]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        methods: {
          submitUpload() {
            this.$refs.upload.submit();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/upload.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/upload.md



uploadvue_type_script_lang_ts.render = uploadvue_type_template_id_fc648ac2_render

/* harmony default export */ var upload = __webpack_exports__["default"] = (uploadvue_type_script_lang_ts);

/***/ })

}]);