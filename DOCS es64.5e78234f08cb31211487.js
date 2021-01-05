(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/upload.md?vue&type=template&id=00ea4b1d

var uploadvue_type_template_id_00ea4b1d_hoisted_1 = {
  class: "content element-doc"
};

var uploadvue_type_template_id_00ea4b1d_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "carga-de-archivos"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#carga-de-archivos"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Carga de archivos")], -1);

var uploadvue_type_template_id_00ea4b1d_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Carga archivos haciendo clic o arrastrándolos.", -1);

var uploadvue_type_template_id_00ea4b1d_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "clic-para-cargar-archivos"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#clic-para-cargar-archivos"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Clic para cargar archivos")], -1);

var uploadvue_type_template_id_00ea4b1d_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Personalice el tipo y texto del botón utilizando la propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Defina las propiedades "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "limit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "on-exceed"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para limitar el número máximo de archivos a subir y especifique un método para cuando el límite ha sido excedido.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  multiple\n  :limit=\"3\"\n  :on-exceed=\"handleExceed\"\n  :file-list=\"fileList\">\n  <el-button size=\"small\" type=\"primary\">Clic para subir archivo</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">Solo archivos jpg/png con un tamaño menor de 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]\n      };\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList);\n      },\n      handlePreview(file) {\n        console.log(file);\n      },\n      handleExceed(files, fileList) {\n        this.$message.warning(`El límite es 3, haz seleccionado ${files.length} archivos esta vez, añade hasta ${files.length + fileList.length}`);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "cargar-avatar-de-usuario"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cargar-avatar-de-usuario"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Cargar avatar de usuario")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilice el "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("em", null, "hook"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-upload"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para limitar el formato de archivo y su tamaño.")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"avatar-uploader\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :show-file-list=\"false\"\n  :on-success=\"handleAvatarSuccess\"\n  :before-upload=\"beforeAvatarUpload\">\n  <img v-if=\"imageUrl\" :src=\"imageUrl\" class=\"avatar\">\n  <i v-else class=\"el-icon-plus avatar-uploader-icon\"></i>\n</el-upload>\n\n<style>\n  .avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n  }\n  .avatar-uploader .el-upload:hover {\n    border-color: #409EFF;\n  }\n  .avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n  }\n  .avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        imageUrl: ''\n      };\n    },\n    methods: {\n      handleAvatarSuccess(res, file) {\n        this.imageUrl = URL.createObjectURL(file.raw);\n      },\n      beforeAvatarUpload(file) {\n        const isJPG = file.type === 'image/jpeg';\n        const isLt2M = file.size / 1024 / 1024 < 2;\n\n        if (!isJPG) {\n          this.$message.error('La imagen debe estar en formato JPG!');\n        }\n        if (!isLt2M) {\n          this.$message.error('La imagen excede los 2MB!');\n        }\n        return isJPG && isLt2M;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "pared-de-fotografias"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#pared-de-fotografias"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Pared de fotografías")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilice la propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "list-type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para cambiar el estilo a un listado de archivos.")], -1);

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
  id: "lista-de-archivos-con-miniatura"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#lista-de-archivos-con-miniatura"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Lista de archivos con miniatura")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  list-type=\"picture\">\n  <el-button size=\"small\" type=\"primary\">Clic para subir archivo</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">Solo archivos jpg/png con un tamaño menor de 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]\n      };\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList);\n      },\n      handlePreview(file) {\n        console.log(file);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "control-de-lista-de-archivos"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#control-de-lista-de-archivos"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Control de lista de archivos")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilice el "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("em", null, "hook"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "on-change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para controlar la funcionalidad de la lista de archivos subidos.")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-change=\"handleChange\"\n  :file-list=\"fileList\">\n  <el-button size=\"small\" type=\"primary\">Clic para subir archivo</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">Solo archivos jpg/png con un tamaño menor de 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [{\n          name: 'food.jpeg',\n          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'\n        }, {\n          name: 'food2.jpeg',\n          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'\n        }]\n      };\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.fileList = fileList.slice(-3);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "arrastrar-para-cargar-archivo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#arrastrar-para-cargar-archivo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Arrastrar para cargar archivo")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede arrastrar el archivo dentro de un área en especifico para cargar el archivo.", -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  drag\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  multiple>\n  <i class=\"el-icon-upload\"></i>\n  <div class=\"el-upload__text\">Suelta tu archivo aquí o <em>haz clic para cargar</em></div>\n  <template #tip>\n    <div class=\"el-upload__tip\">Solo archivos jpg/png con un tamaño menor de 500kb</div>\n  </template>\n</el-upload>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "carga-normal"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#carga-normal"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Carga normal")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  ref=\"upload\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :auto-upload=\"false\">\n  <template #trigger>\n    <el-button size=\"small\" type=\"primary\">Selecciona un archivo</el-button>\n  </template>\n  <el-button style=\"margin-left: 10px;\" size=\"small\" type=\"success\" @click=\"submitUpload\">Cargar al servidor</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">Solo archivos jpg/png con un tamaño menor de 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    methods: {\n      submitUpload() {\n        this.$refs.upload.submit();\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos\"><a class=\"header-anchor\" href=\"#atributos\">¶</a> Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>action</td><td>obligatorio, URL de la petición</td><td>string</td><td>—</td><td>—</td></tr><tr><td>headers</td><td>cabeceras de la petición</td><td>object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>especifica si se permite subir múltiples archivos</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>data</td><td>opciones adicionales de la petición</td><td>object</td><td>—</td><td>—</td></tr><tr><td>name</td><td>nombre clave del archivo</td><td>string</td><td>—</td><td>file</td></tr><tr><td>with-credentials</td><td>especifica si enviará cookies</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-file-list</td><td>especifica si se debe mostrar la lista de archivos cargados</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>drag</td><td>se especifica si se activará el modo arrastrar y soltar</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>accept</td><td>acepta <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept\">tipos de archivos</a>, puede no funcionar cuando <code>thumbnail-mode</code> esta en <code>true</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>on-preview</td><td><em>hook</em> lanzado al hacer clic en los archivos subidos</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>on-remove</td><td><em>hook</em> lanzado cuando los archivos son eliminados</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-success</td><td><em>hook</em> lanzado cuando los archivos fueron cargados correctamente</td><td>function(response, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-error</td><td><em>hook</em> lanzado cuando han ocurrido algunos errores</td><td>function(err, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-progress</td><td><em>hook</em> lanzado cuando se produce algún progreso</td><td>function(event, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-change</td><td><em>hook</em> lanzado cuando el archivo seleccionado se carga correctamente o falla</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>before-upload</td><td><em>hook</em> lanzado antes de que el archivo sea cargado. Si este devuelve <code>true</code> o <code>Promise</code> entonces será rechazado, la carga puede ser cancelada</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>before-remove</td><td><em>hook</em> lanzado antes de eliminar un archivo. Los parámetros son el archivo y la lista de archivos. Si se devuelve <code>false</code> o se devuelve una <code>Promise</code> y que luego es rechazada, la eliminación será abortada.</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>thumbnail-mode</td><td>especifica si se mostrará la miniatura</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>file-list</td><td>archivos cargados por defecto, por ejemplo, [{name: &#39;food.jpg&#39;, url: &#39;https://xxx.cdn.com/xxx.jpg&#39;}]</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>list-type</td><td>tipo de lista de archivos</td><td>string</td><td>text/picture/picture-card</td><td>text</td></tr><tr><td>auto-upload</td><td>se especifica si se autocargan archivos</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>http-request</td><td>sobrescribe el comportamiento por defecto de xhr, permitiendo implementar tu propia petición de carga de archivos</td><td>function</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>especifica si se deshabilita la carga de archivos</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>limit</td><td>número máximo de cargas permitidas</td><td>number</td><td>—</td><td>—</td></tr><tr><td>on-exceed</td><td><em>hook</em> lanzado cuando el límite ha sido excedido</td><td>function(files, fileList)</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>Nombre</th><th>Descripcion</th></tr></thead><tbody><tr><td>trigger</td><td>contenido que desencadena el diálogo de archivo</td></tr><tr><td>tip</td><td>contenido de los tips</td></tr></tbody></table><h3 id=\"metodos\"><a class=\"header-anchor\" href=\"#metodos\">¶</a> Métodos</h3><table><thead><tr><th>Nombre del método</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>clearFiles</td><td>limpia la lista de archivos cargados (este método no esta soportado en el <em>hook</em> <code>before-upload</code>)</td><td>—</td></tr><tr><td>abort</td><td>cancela la petición de carga</td><td>（ file: fileList&#39;s item ）</td></tr><tr><td>submit</td><td>La lista de archivos se sube manualmente</td><td>—</td></tr></tbody></table>", 6);

function uploadvue_type_template_id_00ea4b1d_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", uploadvue_type_template_id_00ea4b1d_hoisted_1, [uploadvue_type_template_id_00ea4b1d_hoisted_2, uploadvue_type_template_id_00ea4b1d_hoisted_3, uploadvue_type_template_id_00ea4b1d_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [uploadvue_type_template_id_00ea4b1d_hoisted_5];
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
// CONCATENATED MODULE: ./website/docs/es/upload.md?vue&type=template&id=00ea4b1d

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/upload.md?vue&type=script&lang=ts


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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Clic para subir archivo");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "Solo archivos jpg/png con un tamaño menor de 500kb", -1);

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
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
        }, 8, ["on-preview", "on-remove", "on-exceed", "file-list"])]);
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
            this.$message.warning("El l\xEDmite es 3, haz seleccionado " + files.length + " archivos esta vez, a\xF1ade hasta " + (files.length + fileList.length));
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
              this.$message.error('La imagen debe estar en formato JPG!');
            }

            if (!isLt2M) {
              this.$message.error('La imagen excede los 2MB!');
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Clic para subir archivo");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "Solo archivos jpg/png con un tamaño menor de 500kb", -1);

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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Clic para subir archivo");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "Solo archivos jpg/png con un tamaño menor de 500kb", -1);

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
      }, [/*#__PURE__*/_createTextVNode("Suelta tu archivo aquí o "), /*#__PURE__*/_createVNode("em", null, "haz clic para cargar")], -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "Solo archivos jpg/png con un tamaño menor de 500kb", -1);

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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Selecciona un archivo");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Cargar al servidor");

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "el-upload__tip"
      }, "Solo archivos jpg/png con un tamaño menor de 500kb", -1);

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
// CONCATENATED MODULE: ./website/docs/es/upload.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/upload.md



uploadvue_type_script_lang_ts.render = uploadvue_type_template_id_00ea4b1d_render

/* harmony default export */ var upload = __webpack_exports__["default"] = (uploadvue_type_script_lang_ts);

/***/ })

}]);