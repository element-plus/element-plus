(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/dropdown.md?vue&type=template&id=42d6d79c

var dropdownvue_type_template_id_42d6d79c_hoisted_1 = {
  class: "content element-doc"
};

var dropdownvue_type_template_id_42d6d79c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Dropdown ");

var dropdownvue_type_template_id_42d6d79c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Menú conmutable para visualizar listas de enlaces y acciones.", -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Uso básico ");

var dropdownvue_type_template_id_42d6d79c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Pase el ratón por el menú desplegable para desplegarlo y obtener más acciones.", -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "El elemento desencadenante se representa con el slot predeterminado, y la parte desplegable se representa con el slot llamado dropdown. Por defecto, la lista desplegable se muestra cuando se pasa el ratón por encima del elemento desencadenante sin necesidad de hacer clic en él.")], -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown>\n  <span class=\"el-dropdown-link\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n")], -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Elemento detonante ");

var dropdownvue_type_template_id_42d6d79c_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Utilizando un botón para activar la lista desplegable.", -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilice "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para dividir el elemento detonante en un grupo de botones, siendo el botón izquierdo un botón normal y el botón derecho el objetivo real de la detonacion. Si desea insertar una línea de separación entre la posición tres y la posición cuatro, sólo añada un divisor de clase a la posición cuatro.")])], -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown>\n  <el-button type=\"primary\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </el-button>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n      <el-dropdown-item>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n<el-dropdown split-button type=\"primary\" @click=\"handleClick\">\n  Dropdown List\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n      <el-dropdown-item>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown {\n    vertical-align: top;\n  }\n  .el-dropdown + .el-dropdown {\n    margin-left: 15px;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        alert('button click');\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleClick = () => {\n        alert('button click');\n      };\n      return {\n        handleClick,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Cómo detonar el evento ");

var dropdownvue_type_template_id_42d6d79c_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Haga clic en el elemento detonante o sobre él.", -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilice el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Por defecto, es "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"block-col-2\">\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">hover to trigger</span>\n    <el-dropdown>\n      <span class=\"el-dropdown-link\">\n        Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">Action 2</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">Action 3</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">Action 5</el-dropdown-item>\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">click to trigger</span>\n    <el-dropdown trigger=\"click\">\n      <span class=\"el-dropdown-link\">\n        Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">Action 2</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">Action 3</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">Action 5</el-dropdown-item>\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">right click to trigger</span>\n    <el-dropdown trigger=\"contextmenu\">\n      <span class=\"el-dropdown-link\">\n        Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">Action 2</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">Action 3</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">Action 5</el-dropdown-item>\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n</el-row>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n  .demonstration {\n    display: block;\n    color: #8492a6;\n    font-size: 14px;\n    margin-bottom: 20px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Ocultamiento del menú ");

var dropdownvue_type_template_id_42d6d79c_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para definir si el menú se cierra al hacer clic.")], -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("El menú predeterminado se cerrará cuando haga clic en los elementos del menú, y se puede desactivar configurando "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" como false.")])], -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown :hide-on-click=\"false\">\n  <span class=\"el-dropdown-link\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_42d6d79c_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Evento command ");

var dropdownvue_type_template_id_42d6d79c_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Al hacer clic en cada elemento desplegable se detona un evento cuyo parámetro es asignado por cada elemento.", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown @command=\"handleCommand\">\n  <span class=\"el-dropdown-link\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item command=\"a\">Action 1</el-dropdown-item>\n      <el-dropdown-item command=\"b\">Action 2</el-dropdown-item>\n      <el-dropdown-item command=\"c\">Action 3</el-dropdown-item>\n      <el-dropdown-item command=\"d\" disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item command=\"e\" divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleCommand(command) {\n        this.$message('click on item ' + command);\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const handleCommand = (command) => {\n        ElMessage(`click on item ${command}`);\n      };\n      return {\n        handleCommand,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Tamaños ");

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Además del tamaño predeterminado, el componente Dropdown proporciona tres tamaños adicionales para que pueda elegir entre diferentes escenarios", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilice el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para establecer tamaños adicionales con "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown split-button type=\"primary\">\n  Default\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"medium\" split-button type=\"primary\">\n  Medium\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"small\" split-button type=\"primary\">\n  Small\n  <template #dropdown>\n<el-dropdown-menu>\n   <el-dropdown-item>Action 1</el-dropdown-item>\n   <el-dropdown-item>Action 2</el-dropdown-item>\n   <el-dropdown-item>Action 3</el-dropdown-item>\n   <el-dropdown-item>Action 4</el-dropdown-item>\n  </el-dropdown-menu>\n</template>\n</el-dropdown>\n\n<el-dropdown size=\"mini\" split-button type=\"primary\">\n  Mini\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Dropdown atributos ");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Atributo"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Tipo"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Valores aceptados"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Por defecto")])], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("tipo de botón de menú, consulte Componente"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Button"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", sólo funciona cuando "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" es true.")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("tamaño del menú, también funciona en "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "split-button")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "medium / small / mini"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "max-height"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "the max height of menu"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "si se visualiza un grupo de botones"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Ya sea para deshabilitar"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "colocación del menú"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "top/top-start/top-end/bottom/bottom-start/bottom-end"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "bottom")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "cómo detonar"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "hover/click/contextmenu"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "hover")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "si se oculta el menú después de hacer clic en el elemento"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "show-timeout"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Tiempo de retardo antes de mostrar un dropdown (solamente trabaja cuando se dispara "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(")")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "250")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "hide-timeout"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Tiempo de retardo antes de ocultar un dropdown (solamente trabaja cuando se dispara "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(")")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "150")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "tabindex", -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("tabindex");

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" de Dropdown");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number", -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0", -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Dropdown Slots ");

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Nombre</th><th>Descripción</th></tr></thead><tbody><tr><td>—</td><td>contenido del Dropdown. Aviso: Debe ser un elemento html dom válido (ej. <code>&lt;span&gt;, &lt;button&gt;</code> etc.) o <code>el-component</code>, para adjuntar el listener trigger</td></tr><tr><td>dropdown</td><td>contenido del menu Dropdown, normalmente es un elemento <code>&lt;el-dropdown-menu&gt;</code></td></tr></tbody></table>", 1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Dropdown Eventos ");

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Nombre</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>click</td><td>si <code>split-button</code> es <code>true</code>, se activa al hacer clic en el botón izquierdo</td><td>—</td></tr><tr><td>command</td><td>activa cuando se hace clic en un elemento desplegable</td><td>el comando enviado desde el elemento desplegable</td></tr><tr><td>visible-change</td><td>se activa cuando aparece/desaparece el desplegable</td><td>true cuando aparece, y false de otro modo</td></tr></tbody></table>", 1);

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Dropdown Menu Item Atributos ");

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>command</td><td>un comando que se enviará al <code>command</code> callback del Dropdown</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si el elemento está desactivado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divided</td><td>si se visualiza un divisor</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>nombre de la clase del icono</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function dropdownvue_type_template_id_42d6d79c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", dropdownvue_type_template_id_42d6d79c_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "dropdown",
    content: "Dropdown",
    href: "#dropdown",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#dropdown"
      })];
    }),
    _: 1
  }), dropdownvue_type_template_id_42d6d79c_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#uso-basico"
      })];
    }),
    _: 1
  }), dropdownvue_type_template_id_42d6d79c_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "elemento-detonante",
    content: "Elemento detonante",
    href: "#elemento-detonante",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#elemento-detonante"
      })];
    }),
    _: 1
  }), dropdownvue_type_template_id_42d6d79c_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_10];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "como-detonar-el-evento",
    content: "Cómo detonar el evento",
    href: "#como-detonar-el-evento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#como-detonar-el-evento"
      })];
    }),
    _: 1
  }), dropdownvue_type_template_id_42d6d79c_hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_14];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ocultamiento-del-menu",
    content: "Ocultamiento del menú",
    href: "#ocultamiento-del-menu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ocultamiento-del-menu"
      })];
    }),
    _: 1
  }), dropdownvue_type_template_id_42d6d79c_hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_18];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "evento-command",
    content: "Evento command",
    href: "#evento-command",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_42d6d79c_hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#evento-command"
      })];
    }),
    _: 1
  }), dropdownvue_type_template_id_42d6d79c_hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "tamanos",
    content: "Tamaños",
    href: "#tamanos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#tamanos"
      })];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "dropdown-atributos",
    content: "Dropdown atributos",
    href: "#dropdown-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#dropdown-atributos"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [_hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_40];
    }),
    _: 1
  }), _hoisted_41]), _hoisted_42, _hoisted_43, _hoisted_44])])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "dropdown-slots",
    content: "Dropdown Slots",
    href: "#dropdown-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_45, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#dropdown-slots"
      })];
    }),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "dropdown-eventos",
    content: "Dropdown Eventos",
    href: "#dropdown-eventos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_47, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#dropdown-eventos"
      })];
    }),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "dropdown-menu-item-atributos",
    content: "Dropdown Menu Item Atributos",
    href: "#dropdown-menu-item-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_49, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#dropdown-menu-item-atributos"
      })];
    }),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/dropdown.md?vue&type=template&id=42d6d79c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/dropdown.md?vue&type=script&lang=ts


/* harmony default export */ var dropdownvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
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
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Dropdown List");

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 5");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode(" Dropdown List ");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary",
          onClick: _ctx.handleClick
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_11];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_13];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_8];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          handleClick: function handleClick() {
            alert('button click');
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "hover to trigger", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 5");

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "click to trigger", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Action 5");

      var _hoisted_15 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "right click to trigger", -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "block-col-2"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_dropdown, null, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_3];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_4];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_5];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_6];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _createVNode(_component_el_dropdown, {
                  trigger: "click"
                }, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_10];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_11];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_12];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_13];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_14];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_15, _createVNode(_component_el_dropdown, {
                  trigger: "contextmenu"
                }, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_17];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_18];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_19];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_20];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_21];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                })];
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
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          "hide-on-click": false
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
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
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          onCommand: _ctx.handleCommand
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, {
                  command: "a"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "b"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "c"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "d",
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "e",
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onCommand"])]);
      }

      var democomponentExport = {
        methods: {
          handleCommand: function handleCommand(command) {
            this.$message('click on item ' + command);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Default ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode(" Medium ");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode(" Small ");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode(" Mini ");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Action 4");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "medium",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_8];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "small",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_13];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_14];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_11];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "mini",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_19];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_20];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_16];
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
// CONCATENATED MODULE: ./website/docs/es/dropdown.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/dropdown.md



dropdownvue_type_script_lang_ts.render = dropdownvue_type_template_id_42d6d79c_render

/* harmony default export */ var dropdown = __webpack_exports__["default"] = (dropdownvue_type_script_lang_ts);

/***/ })

}]);