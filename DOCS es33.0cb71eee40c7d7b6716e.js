(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/input.md?vue&type=template&id=f54eb448

const inputvue_type_template_id_f54eb448_hoisted_1 = {
  class: "content element-doc"
};

const inputvue_type_template_id_f54eb448_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Input ");

const inputvue_type_template_id_f54eb448_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Ingresa datos usando el ratón o teclado.", -1);

const inputvue_type_template_id_f54eb448_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "warning"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Input es un componente controlado, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "siempre muestra el valor de enlace Vue"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bajo circunstancias normales, el evento \"input\" debe ser manejado. Su handler debe actualizar el valor de enlace del componente (o usar "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("). De lo contrario, el valor del cuadro de entrada no cambiará.")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("No admite modificadores "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const inputvue_type_template_id_f54eb448_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const inputvue_type_template_id_f54eb448_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-input placeholder=\"Please input\" v-model=\"input\"></el-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      return {\n        input: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Disabled ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Deshabilite el Input con el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-input placeholder=\"Please input\" v-model=\"input\" :disabled=\"true\">\n</el-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      return {\n        input: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Limpiable ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Marque que el input puede ser limpiable con el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-input placeholder=\"Please input\" v-model=\"input\" clearable> </el-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      return {\n        input: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Password box ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Haga un input de contraseña conmutable con el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-password"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-input\n  placeholder=\"Please input password\"\n  v-model=\"input\"\n  show-password\n></el-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      return {\n        input: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Input con icono ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Añada un icono para indicar el tipo de Input.", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Para añadir iconos en el Input, puede utilizar los atributos "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prefix-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "suffix-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" . Además, los slots con nombre "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prefix"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "suffix"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" también funcionan.")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"demo-input-suffix\">\n  <span class=\"demo-input-label\">Using attributes</span>\n  <el-input\n    placeholder=\"Pick a date\"\n    suffix-icon=\"el-icon-date\"\n    v-model=\"input1\"\n  >\n  </el-input>\n  <el-input\n    placeholder=\"Type something\"\n    prefix-icon=\"el-icon-search\"\n    v-model=\"input2\"\n  >\n  </el-input>\n</div>\n<div class=\"demo-input-suffix\">\n  <span class=\"demo-input-label\">Using slots</span>\n  <el-input placeholder=\"Pick a date\" v-model=\"input3\">\n    <template #suffix>\n      <i class=\"el-input__icon el-icon-date\"></i>\n    </template>\n  </el-input>\n  <el-input placeholder=\"Type something\" v-model=\"input4\">\n    <template #prefix>\n      <i class=\"el-input__icon el-icon-search\"></i>\n    </template>\n  </el-input>\n</div>\n\n<style>\n  .demo-input-label {\n    display: inline-block;\n    width: 130px;\n  }\n</style>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      return {\n        input1: ref(''),\n        input2: ref(''),\n        input3: ref(''),\n        input4: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Textarea ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Redimensiona para introducir varias líneas de información de texto. Agregue el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type=\"textarea\""), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para cambiar el "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "input"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" al tipo nativo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "textarea"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Controle la altura ajustando el prop "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rows"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-input\n  type=\"textarea\"\n  :rows=\"2\"\n  placeholder=\"Please input\"\n  v-model=\"textarea\"\n>\n</el-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      return {\n        textarea: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Textarea tamaño automático ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El ajuste del prop "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "autosize"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el tipo de Input textarea hace que la altura se ajuste automáticamente en función del contenido. Se puede proporcionar opciones en un objeto para auto dimensionar y especificar el número mínimo y máximo de líneas que el textarea puede ajustar automáticamente.")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-input\n  type=\"textarea\"\n  autosize\n  placeholder=\"Please input\"\n  v-model=\"textarea1\"\n>\n</el-input>\n<div style=\"margin: 20px 0;\"></div>\n<el-input\n  type=\"textarea\"\n  :autosize=\"{ minRows: 2, maxRows: 4}\"\n  placeholder=\"Please input\"\n  v-model=\"textarea2\"\n>\n</el-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      return {\n        textarea1: ref(''),\n        textarea2: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Mezclando elementos con input ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Añade un elemento antes o después del input, generalmente una etiqueta o un botón.", -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilice el "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para seleccionar si el elemento se colocara antes (prepend) o después (append) del Input.")])], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div>\n  <el-input placeholder=\"Please input\" v-model=\"input1\">\n    <template #prepend>Http://</template>\n  </el-input>\n</div>\n<div style=\"margin-top: 15px;\">\n  <el-input placeholder=\"Please input\" v-model=\"input2\">\n    <template #append>.com</template>\n  </el-input>\n</div>\n<div style=\"margin-top: 15px;\">\n  <el-input\n    placeholder=\"Please input\"\n    v-model=\"input3\"\n    class=\"input-with-select\"\n  >\n    <template #prepend>\n      <el-select v-model=\"select\" placeholder=\"Select\">\n        <el-option label=\"Restaurant\" value=\"1\"></el-option>\n        <el-option label=\"Order No.\" value=\"2\"></el-option>\n        <el-option label=\"Tel\" value=\"3\"></el-option>\n      </el-select>\n    </template>\n    <template #append>\n      <el-button icon=\"el-icon-search\"></el-button>\n    </template>\n  </el-input>\n</div>\n\n<style>\n  .el-select .el-input {\n    width: 110px;\n  }\n  .input-with-select .el-input-group__prepend {\n    background-color: #fff;\n  }\n</style>\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      return {\n        input1: ref(''),\n        input2: ref(''),\n        input3: ref(''),\n        select: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tamaño ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Añada el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para cambiar el tamaño del Input. Además del tamaño predeterminado, hay otras tres opciones: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "large"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"demo-input-size\">\n  <el-input placeholder=\"Please Input\" v-model=\"input1\"> </el-input>\n  <el-input size=\"medium\" placeholder=\"Please Input\" v-model=\"input2\">\n  </el-input>\n  <el-input size=\"small\" placeholder=\"Please Input\" v-model=\"input3\">\n  </el-input>\n  <el-input size=\"mini\" placeholder=\"Please Input\" v-model=\"input4\"> </el-input>\n</div>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      return {\n        input1: ref(''),\n        input2: ref(''),\n        input3: ref(''),\n        input4: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Autocompletado ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Puede obtener algunas sugerencias basadas en la entrada actual.", -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El componente Autocomplete proporciona sugerencias de entrada. El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "fetch-suggestions"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es un método que devuelve la entrada sugerida. En este ejemplo, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "querySearch(queryString, cb)"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" devuelve las sugerencias al componente mediante "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "cb(data)"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" cuando están listas.")])], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-row class=\"demo-autocomplete\">\n  <el-col :span=\"12\">\n    <div class=\"sub-title\">list suggestions when activated</div>\n    <el-autocomplete\n      class=\"inline-input\"\n      v-model=\"state1\"\n      :fetch-suggestions=\"querySearch\"\n      placeholder=\"Please Input\"\n      @select=\"handleSelect\"\n    ></el-autocomplete>\n  </el-col>\n  <el-col :span=\"12\">\n    <div class=\"sub-title\">list suggestions on input</div>\n    <el-autocomplete\n      class=\"inline-input\"\n      v-model=\"state2\"\n      :fetch-suggestions=\"querySearch\"\n      placeholder=\"Please Input\"\n      :trigger-on-focus=\"false\"\n      @select=\"handleSelect\"\n    ></el-autocomplete>\n  </el-col>\n</el-row>\n<script>\n  import { defineComponent, ref, onMounted } from 'vue'\n  export default defineComponent({\n    setup() {\n      const restaurants = ref([])\n      const querySearch = (queryString, cb) => {\n        var results = queryString\n          ? restaurants.value.filter(createFilter(queryString))\n          : restaurants.value\n        // call callback function to return suggestions\n        cb(results)\n      }\n      const createFilter = (queryString) => {\n        return (restaurant) => {\n          return (\n            restaurant.value\n              .toLowerCase()\n              .indexOf(queryString.toLowerCase()) === 0\n          )\n        }\n      }\n      const loadAll = () => {\n        return [\n          { value: 'vue', link: 'https://github.com/vuejs/vue' },\n          { value: 'element', link: 'https://github.com/ElemeFE/element' },\n          { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },\n          { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },\n          { value: 'vuex', link: 'https://github.com/vuejs/vuex' },\n          { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },\n          { value: 'babel', link: 'https://github.com/babel/babel' },\n        ]\n      }\n      const handleSelect = (item) => {\n        console.log(item)\n      }\n      onMounted(() => {\n        restaurants.value = loadAll()\n      })\n      return {\n        restaurants,\n        state1: ref(''),\n        state2: ref(''),\n        querySearch,\n        createFilter,\n        loadAll,\n        handleSelect,\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Template personalizado ");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Personalice cómo se muestran las sugerencias.", -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilice "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "scoped slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para personalizar los elementos de sugerencias. En el scope, puede acceder al objeto de sugerencia mediante la clave "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-autocomplete\n  popper-class=\"my-autocomplete\"\n  v-model=\"state\"\n  :fetch-suggestions=\"querySearch\"\n  placeholder=\"Please input\"\n  @select=\"handleSelect\"\n>\n  <template #suffix>\n    <i class=\"el-icon-edit el-input__icon\" @click=\"handleIconClick\"></i>\n  </template>\n  <template #default=\"{ item }\">\n    <div class=\"value\">{{ item.value }}</div>\n    <span class=\"link\">{{ item.link }}</span>\n  </template>\n</el-autocomplete>\n\n<style>\n  .my-autocomplete li {\n    line-height: normal;\n    padding: 7px;\n  }\n  .my-autocomplete li .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n  .my-autocomplete li .addr {\n    font-size: 12px;\n    color: #b4b4b4;\n  }\n  .my-autocomplete li .highlighted .addr {\n    color: #ddd;\n  }\n</style>\n\n<script>\n  import { defineComponent, ref, onMounted } from 'vue'\n  export default defineComponent({\n    setup() {\n      const links = ref([])\n      const querySearch = (queryString, cb) => {\n        var results = queryString\n          ? links.value.filter(createFilter(queryString))\n          : links.value\n        // call callback function to return suggestion objects\n        cb(results)\n      }\n      const createFilter = (queryString) => {\n        return (restaurant) => {\n          return (\n            restaurant.value\n              .toLowerCase()\n              .indexOf(queryString.toLowerCase()) === 0\n          )\n        }\n      }\n      const loadAll = () => {\n        return [\n          { value: 'vue', link: 'https://github.com/vuejs/vue' },\n          { value: 'element', link: 'https://github.com/ElemeFE/element' },\n          { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },\n          { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },\n          { value: 'vuex', link: 'https://github.com/vuejs/vuex' },\n          { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },\n          { value: 'babel', link: 'https://github.com/babel/babel' },\n        ]\n      }\n      const handleSelect = (item) => {\n        console.log(item)\n      }\n\n      const handleIconClick = (ev) => {\n        console.log(ev)\n      }\n\n      onMounted(() => {\n        links.value = loadAll()\n      })\n\n      return {\n        links,\n        state: ref(''),\n        querySearch,\n        createFilter,\n        loadAll,\n        handleSelect,\n        handleIconClick,\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Búsqueda remota ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Búsqueda de datos desde el servidor.", -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-autocomplete\n  v-model=\"state\"\n  :fetch-suggestions=\"querySearchAsync\"\n  placeholder=\"Please input\"\n  @select=\"handleSelect\"\n></el-autocomplete>\n\n<script>\n  import { defineComponent, ref, onMounted } from 'vue'\n  export default defineComponent({\n    setup() {\n      const links = ref([])\n      const loadAll = () => {\n        return [\n          { value: 'vue', link: 'https://github.com/vuejs/vue' },\n          { value: 'element', link: 'https://github.com/ElemeFE/element' },\n          { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },\n          { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },\n          { value: 'vuex', link: 'https://github.com/vuejs/vuex' },\n          { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },\n          { value: 'babel', link: 'https://github.com/babel/babel' },\n        ]\n      }\n      let timeout\n      const querySearchAsync = (queryString, cb) => {\n        var results = queryString\n          ? links.value.filter(createFilter(queryString))\n          : links.value\n\n        clearTimeout(timeout)\n        timeout = setTimeout(() => {\n          cb(results)\n        }, 3000 * Math.random())\n      }\n      const createFilter = (queryString) => {\n        return (restaurant) => {\n          return (\n            restaurant.value\n              .toLowerCase()\n              .indexOf(queryString.toLowerCase()) === 0\n          )\n        }\n      }\n      const handleSelect = (item) => {\n        console.log(item)\n      }\n      onMounted(() => {\n        links.value = loadAll()\n      })\n      return {\n        links,\n        state: ref(''),\n        querySearchAsync,\n        createFilter,\n        loadAll,\n        handleSelect,\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Limitar el tamaño ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "maxlength"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "minlength"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" atributos de la entrada, declaran un límite en el número de caracteres que un usuario puede introducir. La configuración de la pro "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "maxlength"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para un tipo de entrada de texto o de área de texto puede limitar la longitud del valor de entrada y le permite mostrar el recuento de palabras al establecer "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-word-limit"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" al mismo tiempo.")])], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-input\n  type=\"text\"\n  placeholder=\"Please input\"\n  v-model=\"text\"\n  maxlength=\"10\"\n  show-word-limit\n>\n</el-input>\n<div style=\"margin: 20px 0;\"></div>\n<el-input\n  type=\"textarea\"\n  placeholder=\"Please input\"\n  v-model=\"textarea\"\n  maxlength=\"30\"\n  show-word-limit\n>\n</el-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      return {\n        text: ref(''),\n        textarea: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Input atributos ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Atributo"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Tipo"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Valores aceptados"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Por defecto")])], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "type", -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tipo de input", -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string", -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("text, textarea y otros ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("tipos de entrada nativos");

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "text", -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "valor enlazado"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean / string / number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "maxlength"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "La longitud máxima"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "minlength"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "minlength"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el input nativo")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-word-limit"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Si se muestra el contador de palabras, solamente funciona con los tipos "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "textarea")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placeholder del Input"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "si debe mostrar el botón de limpieza"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-password"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "si debe mostrar la posibilidad de conmutación de password input"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "si esta deshabilitado"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("tamaño del input, esto no funciona cuando "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" no es textarea")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "medium / small / mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "prefix-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clase del icono de prefijo"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "suffix-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clase del icono de sufijo"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "rows"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("número de filas, sólo funciona cuando "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "textarea"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "2")], -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "autosize"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("si textarea tiene una altura adaptativa, sólo funciona cuando el"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "textarea"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Puede aceptar un objeto, p. ej. { minRows: 2, maxRows: 6 }")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean / object"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "autocomplete"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "autocomplete"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el input nativo")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "off")], -1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el input nativo")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "readonly"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "readonly"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el input nativo")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el input nativo")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el input nativo")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "step"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el input nativo")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "resize"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "control para el dimensionamiento"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "none, both, horizontal, vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "autofocus"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "autofocus"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el input nativo")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "form"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "form"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el input nativo")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "texto de la etiqueta"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tabindex"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "orden de tabulación para el Input"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-")], -1);

const _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "input-style"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "the style of the input element or textarea element"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "{}")], -1);

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Input slots ");

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre</th><th>Descripción</th></tr></thead><tbody><tr><td>prefix</td><td>contenido como prefijo del input</td></tr><tr><td>suffix</td><td>contenido como sufijo del input</td></tr><tr><td>prepend</td><td>contenido antes del input</td></tr><tr><td>append</td><td>contenido a añadir después del input</td></tr></tbody></table>", 1);

const _hoisted_83 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Input eventos ");

const _hoisted_84 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>blur</td><td>Se dispara cuando se pierde el foco</td><td>(event: Event)</td></tr><tr><td>focus</td><td>Se dispara cuando se obtiene el foco</td><td>(event: Event)</td></tr><tr><td>change</td><td>se activa cuando cambia el valor de entrada</td><td>(value: string | number)</td></tr><tr><td>change</td><td>se activa solo cuando el cuadro de entrada pierde el foco o el usuario presiona Enter</td><td>(value: string | number)</td></tr><tr><td>input</td><td>se activa cuando cambia el valor de entrada</td><td>(value: string | number)</td></tr><tr><td>clear</td><td>se dispara cuando la entrada es borrada por el botón generado por el atributo <code>clearable</code>.</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_85 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Input Metodo ");

const _hoisted_86 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>focus</td><td>coloca el foco en el elemento</td><td>—</td></tr><tr><td>blur</td><td>quita el foco del elemento</td><td>—</td></tr><tr><td>select</td><td>selecciona el texto del input</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_87 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Autocomplete Atributos ");

const _hoisted_88 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Opciones</th><th>Por defecto</th></tr></thead><tbody><tr><td>placeholder</td><td>el placeholder del Autocomplete</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si el Autocompete esta deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>nombre del campo del objeto de sugerencia del input para la visualización</td><td>string</td><td>—</td><td>value</td></tr><tr><td>icon</td><td>nombre del icono</td><td>string</td><td>—</td><td>—</td></tr><tr><td>model-value / v-model</td><td>valor enlazado</td><td>string</td><td>—</td><td>—</td></tr><tr><td>debounce</td><td>retardo al escribir, en milisegundos</td><td>number</td><td>—</td><td>300</td></tr><tr><td>placement</td><td>ubicación del menú emergente</td><td>string</td><td>top / top-start / top-end / bottom / bottom-start / bottom-end</td><td>bottom-start</td></tr><tr><td>fetch-suggestions</td><td>un método para obtener las sugerencias del input. Cuando las sugerencias estén listas, invocar <code>callback(data:[])</code> para devolverlas a Autocomplete</td><td>Function(queryString, callback)</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>nombre personalizado de clase para el dropdown de autocomplete</td><td>string</td><td>—</td><td>—</td></tr><tr><td>trigger-on-focus</td><td>si se deben mostrar sugerencias cuando el input obtiene el foco</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>name</td><td>igual que <code>name</code> en el input nativo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>select-when-unmatched</td><td>si se emite un evento <code>select</code> al pulsar enter cuando no hay coincidencia de Autocomplete</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>label</td><td>texto de la etiqueta</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>prefix icon class</td><td>string</td><td>—</td><td>—</td></tr><tr><td>suffix-icon</td><td>suffix icon class</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-loading</td><td>si se debe ocultar el icono de loading en la búsqueda remota</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>si añadir el desplegable al cuerpo. Si la posición del menú desplegable es incorrecta, puede intentar establecer este prop a false</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>validate-event</td><td>si se debe lanzar la validación de formulario</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>highlight-first-item</td><td>si se debe resaltar el primer elemento en las sugerencias de búsqueda remota de forma predeterminada</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_89 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Autocomplete Slots ");

const _hoisted_90 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre</th><th>Descripción</th></tr></thead><tbody><tr><td>prefix</td><td>contenido como prefijo del input</td></tr><tr><td>suffix</td><td>contenido como sufijo del input</td></tr><tr><td>prepend</td><td>contenido antes del input</td></tr><tr><td>append</td><td>contenido a añadir después del input</td></tr></tbody></table>", 1);

const _hoisted_91 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Autocomplete Scoped Slot ");

const _hoisted_92 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Contenido personalizado para el input de sugerencias. El parámetro del scope es { ítem }")])])], -1);

const _hoisted_93 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Autocomplete Eventos ");

const _hoisted_94 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>select</td><td>se dispara cuando se hace clic a una sugerencia</td><td>sugerencia en la que se está haciendo clic</td></tr><tr><td>change</td><td>se activa cuando cambia el valor de entrada</td><td>(value: string | number)</td></tr></tbody></table>", 1);

const _hoisted_95 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Autocomplete Metodo ");

const _hoisted_96 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Metodo"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parametros")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "focus"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "coloca el foco en el elemento"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")])])], -1);

function inputvue_type_template_id_f54eb448_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  const _component_element_demo8 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo8");

  const _component_element_demo9 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo9");

  const _component_element_demo10 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo10");

  const _component_element_demo11 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo11");

  const _component_element_demo12 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo12");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", inputvue_type_template_id_f54eb448_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "input",
    content: "Input",
    href: "#input",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [inputvue_type_template_id_f54eb448_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#input"
    })]),
    _: 1
  }), inputvue_type_template_id_f54eb448_hoisted_3, inputvue_type_template_id_f54eb448_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [inputvue_type_template_id_f54eb448_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [inputvue_type_template_id_f54eb448_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "disabled",
    content: "Disabled",
    href: "#disabled",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#disabled"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "limpiable",
    content: "Limpiable",
    href: "#limpiable",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#limpiable"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "password-box",
    content: "Password box",
    href: "#password-box",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#password-box"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "input-con-icono",
    content: "Input con icono",
    href: "#input-con-icono",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#input-con-icono"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "textarea",
    content: "Textarea",
    href: "#textarea",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#textarea"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "textarea-tamano-automatico",
    content: "Textarea tamaño automático",
    href: "#textarea-tamano-automatico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#textarea-tamano-automatico"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "mezclando-elementos-con-input",
    content: "Mezclando elementos con input",
    href: "#mezclando-elementos-con-input",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#mezclando-elementos-con-input"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tamano",
    content: "Tamaño",
    href: "#tamano",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tamano"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "autocompletado",
    content: "Autocompletado",
    href: "#autocompletado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#autocompletado"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "template-personalizado",
    content: "Template personalizado",
    href: "#template-personalizado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#template-personalizado"
    })]),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo10)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_40]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "busqueda-remota",
    content: "Búsqueda remota",
    href: "#busqueda-remota",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#busqueda-remota"
    })]),
    _: 1
  }), _hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo11)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_44]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "limitar-el-tamano",
    content: "Limitar el tamaño",
    href: "#limitar-el-tamano",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#limitar-el-tamano"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo12)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "input-atributos",
    content: "Input atributos",
    href: "#input-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#input-atributos"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_49, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_50, _hoisted_51, _hoisted_52, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input#Form_%3Cinput%3E_types"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_54]),
    _: 1
  })]), _hoisted_55]), _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60, _hoisted_61, _hoisted_62, _hoisted_63, _hoisted_64, _hoisted_65, _hoisted_66, _hoisted_67, _hoisted_68, _hoisted_69, _hoisted_70, _hoisted_71, _hoisted_72, _hoisted_73, _hoisted_74, _hoisted_75, _hoisted_76, _hoisted_77, _hoisted_78, _hoisted_79, _hoisted_80])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "input-slots",
    content: "Input slots",
    href: "#input-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_81, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#input-slots"
    })]),
    _: 1
  }), _hoisted_82, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "input-eventos",
    content: "Input eventos",
    href: "#input-eventos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_83, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#input-eventos"
    })]),
    _: 1
  }), _hoisted_84, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "input-metodo",
    content: "Input Metodo",
    href: "#input-metodo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_85, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#input-metodo"
    })]),
    _: 1
  }), _hoisted_86, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "autocomplete-atributos",
    content: "Autocomplete Atributos",
    href: "#autocomplete-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_87, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#autocomplete-atributos"
    })]),
    _: 1
  }), _hoisted_88, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "autocomplete-slots",
    content: "Autocomplete Slots",
    href: "#autocomplete-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_89, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#autocomplete-slots"
    })]),
    _: 1
  }), _hoisted_90, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "autocomplete-scoped-slot",
    content: "Autocomplete Scoped Slot",
    href: "#autocomplete-scoped-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_91, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#autocomplete-scoped-slot"
    })]),
    _: 1
  }), _hoisted_92, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "autocomplete-eventos",
    content: "Autocomplete Eventos",
    href: "#autocomplete-eventos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_93, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#autocomplete-eventos"
    })]),
    _: 1
  }), _hoisted_94, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "autocomplete-metodo",
    content: "Autocomplete Metodo",
    href: "#autocomplete-metodo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_95, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#autocomplete-metodo"
    })]),
    _: 1
  }), _hoisted_96, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/input.md?vue&type=template&id=f54eb448

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/input.md?vue&type=script&lang=ts

/* harmony default export */ var inputvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input = $event)
        }, null, 8, ["modelValue"])]);
      }

      const {
        defineComponent,
        ref
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          return {
            input: ref('')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input = $event),
          disabled: true
        }, null, 8, ["modelValue"])]);
      }

      const {
        defineComponent,
        ref
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          return {
            input: ref('')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input = $event),
          clearable: ""
        }, null, 8, ["modelValue"])]);
      }

      const {
        defineComponent,
        ref
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          return {
            input: ref('')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Please input password",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input = $event),
          "show-password": ""
        }, null, 8, ["modelValue"])]);
      }

      const {
        defineComponent,
        ref
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          return {
            input: ref('')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-input-suffix"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demo-input-label"
      }, "Using attributes", -1);

      const _hoisted_3 = {
        class: "demo-input-suffix"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demo-input-label"
      }, "Using slots", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-input__icon el-icon-date"
      }, null, -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-input__icon el-icon-search"
      }, null, -1);

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_input, {
          placeholder: "Pick a date",
          "suffix-icon": "el-icon-date",
          modelValue: _ctx.input1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input1 = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          placeholder: "Type something",
          "prefix-icon": "el-icon-search",
          modelValue: _ctx.input2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.input2 = $event)
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_input, {
          placeholder: "Pick a date",
          modelValue: _ctx.input3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.input3 = $event)
        }, {
          suffix: _withCtx(() => [_hoisted_5]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_input, {
          placeholder: "Type something",
          modelValue: _ctx.input4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.input4 = $event)
        }, {
          prefix: _withCtx(() => [_hoisted_6]),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      const {
        defineComponent,
        ref
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref(''),
            input4: ref('')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input, {
          type: "textarea",
          rows: 2,
          placeholder: "Please input",
          modelValue: _ctx.textarea,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.textarea = $event)
        }, null, 8, ["modelValue"])]);
      }

      const {
        defineComponent,
        ref
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          return {
            textarea: ref('')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", {
        style: {
          "margin": "20px 0"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input, {
          type: "textarea",
          autosize: "",
          placeholder: "Please input",
          modelValue: _ctx.textarea1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.textarea1 = $event)
        }, null, 8, ["modelValue"]), _hoisted_1, _createVNode(_component_el_input, {
          type: "textarea",
          autosize: {
            minRows: 2,
            maxRows: 4
          },
          placeholder: "Please input",
          modelValue: _ctx.textarea2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.textarea2 = $event)
        }, null, 8, ["modelValue"])]);
      }

      const {
        defineComponent,
        ref
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          return {
            textarea1: ref(''),
            textarea2: ref('')
          };
        }

      });
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Http://");

      const _hoisted_2 = {
        style: {
          "margin-top": "15px"
        }
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode(".com");

      const _hoisted_4 = {
        style: {
          "margin-top": "15px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input1 = $event)
        }, {
          prepend: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.input2 = $event)
        }, {
          append: _withCtx(() => [_hoisted_3]),
          _: 1
        }, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_4, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.input3 = $event),
          class: "input-with-select"
        }, {
          prepend: _withCtx(() => [_createVNode(_component_el_select, {
            modelValue: _ctx.select,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.select = $event),
            placeholder: "Select"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_option, {
              label: "Restaurant",
              value: "1"
            }), _createVNode(_component_el_option, {
              label: "Order No.",
              value: "2"
            }), _createVNode(_component_el_option, {
              label: "Tel",
              value: "3"
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          append: _withCtx(() => [_createVNode(_component_el_button, {
            icon: "el-icon-search"
          })]),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      const {
        defineComponent,
        ref
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref(''),
            select: ref('')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo8": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-input-size"
      };

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_input, {
          placeholder: "Please Input",
          modelValue: _ctx.input1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input1 = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          size: "medium",
          placeholder: "Please Input",
          modelValue: _ctx.input2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.input2 = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          size: "small",
          placeholder: "Please Input",
          modelValue: _ctx.input3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.input3 = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          size: "mini",
          placeholder: "Please Input",
          modelValue: _ctx.input4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.input4 = $event)
        }, null, 8, ["modelValue"])])]);
      }

      const {
        defineComponent,
        ref
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref(''),
            input4: ref('')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo9": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", {
        class: "sub-title"
      }, "list suggestions when activated", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "sub-title"
      }, "list suggestions on input", -1);

      function render(_ctx, _cache) {
        const _component_el_autocomplete = _resolveComponent("el-autocomplete");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          class: "demo-autocomplete"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_1, _createVNode(_component_el_autocomplete, {
              class: "inline-input",
              modelValue: _ctx.state1,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.state1 = $event),
              "fetch-suggestions": _ctx.querySearch,
              placeholder: "Please Input",
              onSelect: _ctx.handleSelect
            }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_2, _createVNode(_component_el_autocomplete, {
              class: "inline-input",
              modelValue: _ctx.state2,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.state2 = $event),
              "fetch-suggestions": _ctx.querySearch,
              placeholder: "Please Input",
              "trigger-on-focus": false,
              onSelect: _ctx.handleSelect
            }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const {
        defineComponent,
        ref,
        onMounted
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          const restaurants = ref([]);

          const querySearch = (queryString, cb) => {
            var results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value; // call callback function to return suggestions

            cb(results);
          };

          const createFilter = queryString => {
            return restaurant => {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          const loadAll = () => {
            return [{
              value: 'vue',
              link: 'https://github.com/vuejs/vue'
            }, {
              value: 'element',
              link: 'https://github.com/ElemeFE/element'
            }, {
              value: 'cooking',
              link: 'https://github.com/ElemeFE/cooking'
            }, {
              value: 'mint-ui',
              link: 'https://github.com/ElemeFE/mint-ui'
            }, {
              value: 'vuex',
              link: 'https://github.com/vuejs/vuex'
            }, {
              value: 'vue-router',
              link: 'https://github.com/vuejs/vue-router'
            }, {
              value: 'babel',
              link: 'https://github.com/babel/babel'
            }];
          };

          const handleSelect = item => {
            console.log(item);
          };

          onMounted(() => {
            restaurants.value = loadAll();
          });
          return {
            restaurants,
            state1: ref(''),
            state2: ref(''),
            querySearch,
            createFilter,
            loadAll,
            handleSelect
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo10": function () {
      const {
        createElementVNode: _createElementVNode,
        toDisplayString: _toDisplayString,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "value"
      };
      const _hoisted_2 = {
        class: "link"
      };

      function render(_ctx, _cache) {
        const _component_el_autocomplete = _resolveComponent("el-autocomplete");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_autocomplete, {
          "popper-class": "my-autocomplete",
          modelValue: _ctx.state,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.state = $event),
          "fetch-suggestions": _ctx.querySearch,
          placeholder: "Please input",
          onSelect: _ctx.handleSelect
        }, {
          suffix: _withCtx(() => [_createElementVNode("i", {
            class: "el-icon-edit el-input__icon",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleIconClick && _ctx.handleIconClick(...args))
          })]),
          default: _withCtx(({
            item
          }) => [_createElementVNode("div", _hoisted_1, _toDisplayString(item.value), 1), _createElementVNode("span", _hoisted_2, _toDisplayString(item.link), 1)]),
          _: 1
        }, 8, ["modelValue", "fetch-suggestions", "onSelect"])]);
      }

      const {
        defineComponent,
        ref,
        onMounted
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          const links = ref([]);

          const querySearch = (queryString, cb) => {
            var results = queryString ? links.value.filter(createFilter(queryString)) : links.value; // call callback function to return suggestion objects

            cb(results);
          };

          const createFilter = queryString => {
            return restaurant => {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          const loadAll = () => {
            return [{
              value: 'vue',
              link: 'https://github.com/vuejs/vue'
            }, {
              value: 'element',
              link: 'https://github.com/ElemeFE/element'
            }, {
              value: 'cooking',
              link: 'https://github.com/ElemeFE/cooking'
            }, {
              value: 'mint-ui',
              link: 'https://github.com/ElemeFE/mint-ui'
            }, {
              value: 'vuex',
              link: 'https://github.com/vuejs/vuex'
            }, {
              value: 'vue-router',
              link: 'https://github.com/vuejs/vue-router'
            }, {
              value: 'babel',
              link: 'https://github.com/babel/babel'
            }];
          };

          const handleSelect = item => {
            console.log(item);
          };

          const handleIconClick = ev => {
            console.log(ev);
          };

          onMounted(() => {
            links.value = loadAll();
          });
          return {
            links,
            state: ref(''),
            querySearch,
            createFilter,
            loadAll,
            handleSelect,
            handleIconClick
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo11": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_autocomplete = _resolveComponent("el-autocomplete");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_autocomplete, {
          modelValue: _ctx.state,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.state = $event),
          "fetch-suggestions": _ctx.querySearchAsync,
          placeholder: "Please input",
          onSelect: _ctx.handleSelect
        }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])]);
      }

      const {
        defineComponent,
        ref,
        onMounted
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          const links = ref([]);

          const loadAll = () => {
            return [{
              value: 'vue',
              link: 'https://github.com/vuejs/vue'
            }, {
              value: 'element',
              link: 'https://github.com/ElemeFE/element'
            }, {
              value: 'cooking',
              link: 'https://github.com/ElemeFE/cooking'
            }, {
              value: 'mint-ui',
              link: 'https://github.com/ElemeFE/mint-ui'
            }, {
              value: 'vuex',
              link: 'https://github.com/vuejs/vuex'
            }, {
              value: 'vue-router',
              link: 'https://github.com/vuejs/vue-router'
            }, {
              value: 'babel',
              link: 'https://github.com/babel/babel'
            }];
          };

          let timeout;

          const querySearchAsync = (queryString, cb) => {
            var results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              cb(results);
            }, 3000 * Math.random());
          };

          const createFilter = queryString => {
            return restaurant => {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          const handleSelect = item => {
            console.log(item);
          };

          onMounted(() => {
            links.value = loadAll();
          });
          return {
            links,
            state: ref(''),
            querySearchAsync,
            createFilter,
            loadAll,
            handleSelect
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo12": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", {
        style: {
          "margin": "20px 0"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input, {
          type: "text",
          placeholder: "Please input",
          modelValue: _ctx.text,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.text = $event),
          maxlength: "10",
          "show-word-limit": ""
        }, null, 8, ["modelValue"]), _hoisted_1, _createVNode(_component_el_input, {
          type: "textarea",
          placeholder: "Please input",
          modelValue: _ctx.textarea,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.textarea = $event),
          maxlength: "30",
          "show-word-limit": ""
        }, null, 8, ["modelValue"])]);
      }

      const {
        defineComponent,
        ref
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          return {
            text: ref(''),
            textarea: ref('')
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/input.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/input.md



inputvue_type_script_lang_ts.render = inputvue_type_template_id_f54eb448_render

/* harmony default export */ var input = __webpack_exports__["default"] = (inputvue_type_script_lang_ts);

/***/ })

}]);