(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/transfer.md?vue&type=template&id=fe73265a

var transfervue_type_template_id_fe73265a_hoisted_1 = {
  class: "content element-doc"
};

var transfervue_type_template_id_fe73265a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "transfer"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#transfer"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Transfer")], -1);

var transfervue_type_template_id_fe73265a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var transfervue_type_template_id_fe73265a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Los datos se pasan a Transfer a través del atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Los datos tienen que ser un array de objetos, y cada objeto debe tener estos atributos: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" que será el identificador del ítem, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" que será el texto a mostrar, y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" que indicará si el elemento esta desactivado. Los items dentro de la lista destino están sincronizados con la variable asociada a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y el valor de esa variable es un array de claves de los elementos de la lista destino. Así que si no quiere que la lista destino esté vacía inicialmente puede inicializar el "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" con un array.")])], -1);

var transfervue_type_template_id_fe73265a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    :data=\"data\">\n  </el-transfer>\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `Option ${ i }`,\n            disabled: i % 4 === 0\n          });\n        }\n        return data;\n      };\n      return {\n        data: generateData(),\n        value: [1, 4]\n      };\n    }\n  };\n</script>\n")], -1);

var transfervue_type_template_id_fe73265a_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "filtrar"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filtrar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Filtrar")], -1);

var transfervue_type_template_id_fe73265a_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede buscar y filtrar los items.", -1);

var transfervue_type_template_id_fe73265a_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Ponga el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a true para permitir el filtrado.Por defecto si el "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" del ítem contiene el término buscado será incluido en el resultado. También puede implementar su propio método de filtrado con el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", que recibe un método y le pasa la búsqueda y cada ítem. Los items para los que devuelva true serán incluidos en el resultado de la búsqueda.")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    filterable\n    :filter-method=\"filterMethod\"\n    filter-placeholder=\"State Abbreviations\"\n    :data=\"data\"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];\n        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];\n        states.forEach((city, index) => {\n          data.push({\n            label: city,\n            key: index,\n            initial: initials[index]\n          });\n        });\n        return data;\n      };\n      return {\n        data: generateData(),\n        value: [],\n        filterMethod(query, item) {\n          return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "personalizable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#personalizable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Personalizable")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede personalizar los títulos, botones, la función de renderizado de los items, el texto de estatus de la cabecera y el contenido del pie.", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "titles"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "button-texts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" respectivamente para personalizar los títulos de las listas, el texto de los botones, la función de renderizado para los items y el texto de la cabecera que muestra el estado de los items. Además, también puede utilizar el scoped-slot para personalizar los elementos de datos. Para el pie de la lista hay dos slots: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "left-footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "right-footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Además, si quiere algunos items marcados inicialmente puede usar "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "left-default-checked"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "right-default-checked"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Finalmente este ejemplo muestra el evento "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Tenga en cuenta que este ejemplo no se puede ejecutar en jsfiddle porque no soporta sintaxis JSX. En un proyecto real "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" funcionará si las dependencias son configuradas correctamente.")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <p style=\"text-align: center; margin: 0 0 20px\">Customize data items using render-content</p>\n  <div style=\"text-align: center\">\n    <el-transfer\n      v-model=\"leftValue\"\n      style=\"text-align: left; display: inline-block\"\n      filterable\n      :left-default-checked=\"[2, 3]\"\n      :right-default-checked=\"[1]\"\n      :render-content=\"renderFunc\"\n      :titles=\"['Source', 'Target']\"\n      :button-texts=\"['To left', 'To right']\"\n      :format=\"{\n        noChecked: '${total}',\n        hasChecked: '${checked}/${total}'\n      }\"\n      :data=\"data\"\n      @change=\"handleChange\"\n    >\n      <template #left-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n      </template>\n      <template #right-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n      </template>\n    </el-transfer>\n  </div>\n  <p style=\"text-align: center; margin: 50px 0 20px\">Customize data items using scoped slot</p>\n  <div style=\"text-align: center\">\n    <el-transfer\n      v-model=\"rightValue\"\n      style=\"text-align: left; display: inline-block\"\n      filterable\n      :left-default-checked=\"[2, 3]\"\n      :right-default-checked=\"[1]\"\n      :titles=\"['Source', 'Target']\"\n      :button-texts=\"['To left', 'To right']\"\n      :format=\"{\n        noChecked: '${total}',\n        hasChecked: '${checked}/${total}'\n      }\"\n      :data=\"data\"\n      @change=\"handleChange\"\n    >\n      <template #default=\"{option}\">\n        <span>{{ option.key }} - {{ option.label }}</span>\n      </template>\n      <template #left-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n      </template>\n      <template #right-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n      </template>\n    </el-transfer>\n  </div>\n</template>\n\n<style>\n.transfer-footer {\n  margin-left: 20px;\n  padding: 6px 5px;\n}\n</style>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `Option ${ i }`,\n            disabled: i % 4 === 0\n          });\n        }\n        return data;\n      };\n      return {\n        data: generateData(),\n        leftValue: [1],\n        rightValue: [1],\n        renderFunc(h, option) {\n          return h(\"span\", null, option.key, \" - \", option.label);\n        }\n      };\n    },\n\n    methods: {\n      handleChange(value, direction, movedKeys) {\n        console.log(value, direction, movedKeys);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "prop-con-alias"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#prop-con-alias"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Prop con alias")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Por defecto Transfer busca los atributos "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en cada elemento. Si sus datos tienen un nombre diferente para la clave puede usar el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para añadir alias.")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("En este ejemplo los elementos no tienen "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", en vez de eso tienen "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "desc"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Así que tiene que añadir alias para "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    :props=\"{\n      key: 'value',\n      label: 'desc'\n    }\"\n    :data=\"data\"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = _ => {\n        const data = [];\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            value: i,\n            desc: `Option ${ i }`,\n            disabled: i % 4 === 0\n          });\n        }\n        return data;\n      };\n      return {\n        data: generateData(),\n        value: []\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos\"><a class=\"header-anchor\" href=\"#atributos\">¶</a> Atributos</h3><table><thead><tr><th>Atriburo</th><th>Descripcion</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor enlazado</td><td>array</td><td>—</td><td>—</td></tr><tr><td>data</td><td>Origen de datos</td><td>array[{ key, label, disabled }]</td><td>—</td><td>[ ]</td></tr><tr><td>filterable</td><td>Si se puede filtrar</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-placeholder</td><td>Placeholder para el input del filtro</td><td>string</td><td>—</td><td>Enter keyword</td></tr><tr><td>filter-method</td><td>Método de filtrado</td><td>function</td><td>—</td><td>—</td></tr><tr><td>target-order</td><td>estrategia de órdenes para elementos de la lista destino. Si está configurado en <code>original</code>, los elementos mantendrán el mismo orden que la fuente de datos. Si está configurado para <code>push</code>, los nuevos elementos añadidos se insertaran al final. Si se ajusta a <code>unshift</code>, los nuevos elementos añadidos se insertarán en la parte superior.</td><td>string</td><td>original / push / unshift</td><td>original</td></tr><tr><td>titles</td><td>Títulos de las listas</td><td>array</td><td>—</td><td>[&#39;List 1&#39;, &#39;List 2&#39;]</td></tr><tr><td>button-texts</td><td>Texto de los botones</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>render-content</td><td>Función de renderizado</td><td>function(h, option)</td><td>—</td><td>—</td></tr><tr><td>format</td><td>Texto para el status en el header</td><td>object{noChecked, hasChecked}</td><td>—</td><td>{ noChecked: &#39;${checked}/${total}&#39;, hasChecked: &#39;${checked}/${total}&#39; }</td></tr><tr><td>props</td><td>prop alias para el origen de datos</td><td>object{key, label, disabled}</td><td>—</td><td>—</td></tr><tr><td>left-default-checked</td><td>Array de claves de los elementos marcados inicialmente en la lista de la izquierda</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>right-default-checked</td><td>Array de claves de los elementos marcados inicialmente en la lista de la derecha</td><td>array</td><td>—</td><td>[ ]</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>Nombre</th><th>Descripcion</th></tr></thead><tbody><tr><td>left-footer</td><td>Contenido del footer de la lista de la izquierda</td></tr><tr><td>right-footer</td><td>Contenido del footer de la lista de la derecha</td></tr></tbody></table><h3 id=\"scoped-slot\"><a class=\"header-anchor\" href=\"#scoped-slot\">¶</a> Scoped Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Contenido personalizado para los datos de los items. El parámetro del scope es { option }</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\">¶</a> Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>clearQuery</td><td>borra la palabra clave del filtro de un determinado panel</td><td>&#39;left&#39; / &#39;right&#39;</td></tr></tbody></table><h3 id=\"eventos\"><a class=\"header-anchor\" href=\"#eventos\">¶</a> Eventos</h3><table><thead><tr><th>Nombre</th><th>Descripcion</th><th>Parametros</th></tr></thead><tbody><tr><td>change</td><td>se lanza cuando los elementos cambian en la lista de la derecha</td><td>array con las claves de los elementos de la lista de la derecha</td></tr><tr><td>left-check-change</td><td>se dispara cuando el usuario final cambia el estado verificado de cualquier elemento de datos en la lista izquierda</td><td>array clave de ítems actualmente verificados, array clave de ítems cuyo estado verificado ha cambiado</td></tr><tr><td>right-check-change</td><td>se dispara cuando el usuario final cambia el estado verificado de cualquier elemento de datos en la lista derecha.</td><td>array clave de ítems actualmente verificados, array clave de ítems cuyo estado verificado ha cambiado</td></tr></tbody></table>", 10);

function transfervue_type_template_id_fe73265a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", transfervue_type_template_id_fe73265a_hoisted_1, [transfervue_type_template_id_fe73265a_hoisted_2, transfervue_type_template_id_fe73265a_hoisted_3, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [transfervue_type_template_id_fe73265a_hoisted_5];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [transfervue_type_template_id_fe73265a_hoisted_4];
    }),
    _: 1
  }), transfervue_type_template_id_fe73265a_hoisted_6, transfervue_type_template_id_fe73265a_hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [transfervue_type_template_id_fe73265a_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18]);
}
// CONCATENATED MODULE: ./website/docs/es/transfer.md?vue&type=template&id=fe73265a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/transfer.md?vue&type=script&lang=ts


/* harmony default export */ var transfervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];

            for (var i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: "Option " + i,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            value: [1, 4]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          "filter-method": _ctx.filterMethod,
          "filter-placeholder": "State Abbreviations",
          data: _ctx.data
        }, null, 8, ["modelValue", "filter-method", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];
            var states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
            var initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
            states.forEach(function (city, index) {
              data.push({
                label: city,
                key: index,
                initial: initials[index]
              });
            });
            return data;
          };

          return {
            data: generateData(),
            value: [],
            filterMethod: function filterMethod(query, item) {
              return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", {
        style: {
          "text-align": "center",
          "margin": "0 0 20px"
        }
      }, "Customize data items using render-content", -1);

      var _hoisted_2 = {
        style: {
          "text-align": "center"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Operation");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Operation");

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", {
        style: {
          "text-align": "center",
          "margin": "50px 0 20px"
        }
      }, "Customize data items using scoped slot", -1);

      var _hoisted_6 = {
        style: {
          "text-align": "center"
        }
      };

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Operation");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Operation");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.leftValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.leftValue = $event;
          }),
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          filterable: "",
          "left-default-checked": [2, 3],
          "right-default-checked": [1],
          "render-content": _ctx.renderFunc,
          titles: ['Source', 'Target'],
          "button-texts": ['To left', 'To right'],
          format: {
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          },
          data: _ctx.data,
          onChange: _ctx.handleChange
        }, {
          "left-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          "right-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "render-content", "data", "onChange"])]), _hoisted_5, _createVNode("div", _hoisted_6, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.rightValue,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.rightValue = $event;
          }),
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          filterable: "",
          "left-default-checked": [2, 3],
          "right-default-checked": [1],
          titles: ['Source', 'Target'],
          "button-texts": ['To left', 'To right'],
          format: {
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          },
          data: _ctx.data,
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(function (_ref) {
            var option = _ref.option;
            return [_createVNode("span", null, _toDisplayString(option.key) + " - " + _toDisplayString(option.label), 1)];
          }),
          "left-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            })];
          }),
          "right-footer": _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "transfer-footer",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "data", "onChange"])])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];

            for (var i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: "Option " + i,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            leftValue: [1],
            rightValue: [1],
            renderFunc: function renderFunc(h, option) {
              return h("span", null, option.key, " - ", option.label);
            }
          };
        },
        methods: {
          handleChange: function handleChange(value, direction, movedKeys) {
            console.log(value, direction, movedKeys);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          props: {
            key: 'value',
            label: 'desc'
          },
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          var generateData = function generateData(_) {
            var data = [];

            for (var i = 1; i <= 15; i++) {
              data.push({
                value: i,
                desc: "Option " + i,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/transfer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/transfer.md



transfervue_type_script_lang_ts.render = transfervue_type_template_id_fe73265a_render

/* harmony default export */ var transfer = __webpack_exports__["default"] = (transfervue_type_script_lang_ts);

/***/ })

}]);