(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/carousel.md?vue&type=template&id=2d90deaa

var carouselvue_type_template_id_2d90deaa_hoisted_1 = {
  class: "content element-doc"
};

var carouselvue_type_template_id_2d90deaa_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "carousel"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#carousel"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Carousel")], -1);

var carouselvue_type_template_id_2d90deaa_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Presenta una serie de imágenes o textos en un espacio limitado", -1);

var carouselvue_type_template_id_2d90deaa_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var carouselvue_type_template_id_2d90deaa_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Combine "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-carousel"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" con "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", para conseguir el carrusel. El contenido de cada diapositiva es completamente personalizable, y sólo tiene que colocarla dentro de la etiqueta "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-carousel-item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" . Por defecto, el carrusel cambia cuando el ratón pasa por encima de un indicador. Fije "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", si lo que se desea es que el carrusel cambie sólo cuando se haga clic en un indicador.")])], -1);

var carouselvue_type_template_id_2d90deaa_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Switch when indicator is hovered (default)</span>\n    <el-carousel height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Switch when indicator is clicked</span>\n    <el-carousel trigger=\"click\" height=\"150px\">\n      <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h3 class=\"small\">{{ item }}</h3>\n      </el-carousel-item>\n    </el-carousel>\n  </div>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 150px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "indicadores"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#indicadores"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Indicadores")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Los indicadores de paginación pueden mostrarse fuera del carrusel", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" determina dónde se encuentran los indicadores de paginación. Por defecto están dentro del carrusel, y el ajuste de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "outside"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" los mueve hacia fuera; en cambio "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "none"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" los oculta.")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel indicator-position=\"outside\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "flechas"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#flechas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Flechas")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede definir cuando se visualizan las flechas", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" determina cuándo se visualizan las flechas. Por defecto aparecen cuando el ratón se desplaza sobre el carrusel. Ajuste "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" o "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para mostrar u ocultar las flechas permanentemente.")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"5000\" arrow=\"always\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3>{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "modo-card"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#modo-card"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Modo Card")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Cuando una página es suficientemente ancha pero tiene una altura limitada, puede activar el modo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para carrusel.")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Ajuste "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para activar el modo tarjeta. Aparte de la apariencia, la mayor diferencia entre el modo tarjeta y el modo común es que al hacer clic en las diapositivas de ambos lados, el carrusel cambia directamente en modo tarjeta.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel :interval=\"4000\" type=\"card\" height=\"200px\">\n    <el-carousel-item v-for=\"item in 6\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Por defecto, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "horizontal"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". El carousel puede ser mostrado de forma vertical cambiando "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-carousel height=\"200px\" direction=\"vertical\" :autoplay=\"false\">\n    <el-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h3 class=\"medium\">{{ item }}</h3>\n    </el-carousel-item>\n  </el-carousel>\n</template>\n\n<style>\n  .el-carousel__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n  \n  .el-carousel__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n  \n  .el-carousel__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos-de-carousel\"><a class=\"header-anchor\" href=\"#atributos-de-carousel\">¶</a> Atributos de Carousel</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>height</td><td>Alto del carrusel</td><td>string</td><td>—</td><td>—</td></tr><tr><td>initial-index</td><td>Indice del slider inicial activo (empieza desde 0)</td><td>number</td><td>—</td><td>0</td></tr><tr><td>trigger</td><td>Evento que muestra los indicadores</td><td>string</td><td>hover/click</td><td>hover</td></tr><tr><td>autoplay</td><td>Si se enlazan automáticamente las diapositivas</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>interval</td><td>Intervalo del auto loop, en milisegundos</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>indicator-position</td><td>Posición del indicador de paginación</td><td>string</td><td>outside/none</td><td>—</td></tr><tr><td>arrow</td><td>Cuando se muestran las flechas</td><td>string</td><td>always/hover/never</td><td>hover</td></tr><tr><td>type</td><td>Tipo de carrusel</td><td>string</td><td>card</td><td>—</td></tr><tr><td>loop</td><td>Si se muestra cíclicamente</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>direction</td><td>direccion en la que se muestra el contenido</td><td>string</td><td>horizontal/vertical</td><td>horizontal</td></tr></tbody></table><h3 id=\"eventos-de-carousel\"><a class=\"header-anchor\" href=\"#eventos-de-carousel\">¶</a> Eventos de Carousel</h3><table><thead><tr><th>Nombre evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>change</td><td>Se dispara cuando el slider activo cambia</td><td>Indice del nuevo slider activo, indice del anterior slider activo.</td></tr></tbody></table><h3 id=\"metodos-de-carousel\"><a class=\"header-anchor\" href=\"#metodos-de-carousel\">¶</a> Metodos de Carousel</h3><table><thead><tr><th>Metodos</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>setActiveItem</td><td>Cambio manual de slider</td><td>indice del slider al que se va a cambiar, empezando por 0; o el <code>name</code> del <code>el-carousel-item</code> correspondiente</td></tr><tr><td>prev</td><td>Cambia al slider anterior</td><td>—</td></tr><tr><td>next</td><td>Cambia al slider siguiente</td><td>—</td></tr></tbody></table><h3 id=\"atributos-de-carousel-item\"><a class=\"header-anchor\" href=\"#atributos-de-carousel-item\">¶</a> Atributos de Carousel-Item</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>name</td><td>Nombre del item que puede ser usado en <code>setActiveItem</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>Texto que se mostrara en el indicador de paginacion correspondiente</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 8);

function carouselvue_type_template_id_2d90deaa_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", carouselvue_type_template_id_2d90deaa_hoisted_1, [carouselvue_type_template_id_2d90deaa_hoisted_2, carouselvue_type_template_id_2d90deaa_hoisted_3, carouselvue_type_template_id_2d90deaa_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [carouselvue_type_template_id_2d90deaa_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [carouselvue_type_template_id_2d90deaa_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_21]);
}
// CONCATENATED MODULE: ./website/docs/es/carousel.md?vue&type=template&id=2d90deaa

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/carousel.md?vue&type=script&lang=ts


/* harmony default export */ var carouselvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Switch when indicator is hovered (default)", -1);

      var _hoisted_3 = {
        class: "small"
      };
      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Switch when indicator is clicked", -1);

      var _hoisted_6 = {
        class: "small"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_carousel, {
          height: "150px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_3, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_carousel, {
          trigger: "click",
          height: "150px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_6, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          "indicator-position": "outside"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", null, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 5000,
          arrow: "always"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", null, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          interval: 4000,
          type: "card",
          height: "200px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(6, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_1, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        var _component_el_carousel_item = _resolveComponent("el-carousel-item");

        var _component_el_carousel = _resolveComponent("el-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_carousel, {
          height: "200px",
          direction: "vertical",
          autoplay: false
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_el_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h3", _hoisted_1, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
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
// CONCATENATED MODULE: ./website/docs/es/carousel.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/carousel.md



carouselvue_type_script_lang_ts.render = carouselvue_type_template_id_2d90deaa_render

/* harmony default export */ var carousel = __webpack_exports__["default"] = (carouselvue_type_script_lang_ts);

/***/ })

}]);