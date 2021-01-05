(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/tree.md?vue&type=template&id=32134812

var treevue_type_template_id_32134812_hoisted_1 = {
  class: "content element-doc"
};

var treevue_type_template_id_32134812_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tree"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tree"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tree")], -1);

var treevue_type_template_id_32134812_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Muestra un conjunto de datos jerárquicos.", -1);

var treevue_type_template_id_32134812_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var treevue_type_template_id_32134812_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Estructura básica de árbol.", -1);

var treevue_type_template_id_32134812_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree :data=\"data\" :props=\"defaultProps\" @node-click=\"handleNodeClick\"></el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: 'Level one 1',\n          children: [{\n            label: 'Level two 1-1',\n            children: [{\n              label: 'Level three 1-1-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 2',\n          children: [{\n            label: 'Level two 2-1',\n            children: [{\n              label: 'Level three 2-1-1'\n            }]\n          }, {\n            label: 'Level two 2-2',\n            children: [{\n              label: 'Level three 2-2-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 3',\n          children: [{\n            label: 'Level two 3-1',\n            children: [{\n              label: 'Level three 3-1-1'\n            }]\n          }, {\n            label: 'Level two 3-2',\n            children: [{\n              label: 'Level three 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "seleccionable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#seleccionable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Seleccionable")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Usado para la selección de nodos.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Este ejemplo también muestra como cargar los datos de forma asíncrona.")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :props=\"props\"\n  :load=\"loadNode\"\n  lazy\n  show-checkbox\n  @check-change=\"handleCheckChange\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones'\n        },\n        count: 1\n      };\n    },\n    methods: {\n      handleCheckChange(data, checked, indeterminate) {\n        console.log(data, checked, indeterminate);\n      },\n      handleNodeClick(data) {\n        console.log(data);\n      },\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);\n        }\n        if (node.level > 3) return resolve([]);\n\n        var hasChild;\n        if (node.data.name === 'region1') {\n          hasChild = true;\n        } else if (node.data.name === 'region2') {\n          hasChild = false;\n        } else {\n          hasChild = Math.random() > 0.5;\n        }\n\n        setTimeout(() => {\n          var data;\n          if (hasChild) {\n            data = [{\n              name: 'zone' + this.count++\n            }, {\n              name: 'zone' + this.count++\n            }];\n          } else {\n            data = [];\n          }\n\n          resolve(data);\n        }, 500);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "nodos-hoja-en-modo-perezoso-lazy-load"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#nodos-hoja-en-modo-perezoso-lazy-load"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Nodos hoja en modo perezoso (lazy load)")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Los datos de un nodo no son cargados hasta que no es pinchado, así que el árbol no puede predecir si es una hoja. Por eso a cada nodo se le añade el botón de desplegar, y si el nodo es una hoja el botón desaparecerá al pinchar en él. También puede decirle al árbol que el nodo es una hoja de antemano, y así evita que muestre el botón de desplegar.")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :props=\"props\"\n  :load=\"loadNode\"\n  lazy\n  show-checkbox>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones',\n          isLeaf: 'leaf'\n        },\n      };\n    },\n    methods: {\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'region' }]);\n        }\n        if (node.level > 1) return resolve([]);\n\n        setTimeout(() => {\n          const data = [{\n            name: 'leaf',\n            leaf: true\n          }, {\n            name: 'zone'\n          }];\n\n          resolve(data);\n        }, 500);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "checkbox-desactivados"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#checkbox-desactivados"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Checkbox desactivados")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "El checkbox de un nodo se puede poner como desactivado.", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("En el ejemplo, la propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" se declara en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "defaultProps"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y algunos nodos se ponen como "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled:true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Los checkboxes correspondientes son desactivados y no se pueden pinchar.")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  show-checkbox>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: 'Level one 1',\n          children: [{\n            id: 3,\n            label: 'Level two 2-1',\n            children: [{\n              id: 4,\n              label: 'Level three 3-1-1'\n            }, {\n              id: 5,\n              label: 'Level three 3-1-2',\n              disabled: true\n            }]\n          }, {\n            id: 2,\n            label: 'Level two 2-2',\n            disabled: true,\n            children: [{\n              id: 6,\n              label: 'Level three 3-2-1'\n            }, {\n              id: 7,\n              label: 'Level three 3-2-2',\n              disabled: true\n            }]\n          }]\n        }],\n        defaultProps: {\n            children: 'children',\n            label: 'label',\n            disabled: 'disabled',\n        },\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "desplegado-o-seleccionado-por-defecto"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#desplegado-o-seleccionado-por-defecto"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Desplegado o seleccionado por defecto")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Los nodos pueden estar desplegados o seleccionados por defecto.", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilice "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "default-expanded-keys"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "default-checked-keys"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para establecer los nodos desplegados y seleccionados respectivamente. Tenga en cuenta que para que funcione es necesario que tengan "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Su valor es el nombre de una clave en el objeto data, y el valor de la clave debe ser único en todo el árbol.")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  node-key=\"id\"\n  :default-expanded-keys=\"[2, 3]\"\n  :default-checked-keys=\"[5]\"\n  :props=\"defaultProps\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: 'Level one 1',\n          children: [{\n            id: 4,\n            label: 'Level two 1-1',\n            children: [{\n              id: 9,\n              label: 'Level three 1-1-1'\n            }, {\n              id: 10,\n              label: 'Level three 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: 'Level one 2',\n          children: [{\n            id: 5,\n            label: 'Level two 2-1'\n          }, {\n            id: 6,\n            label: 'Level two 2-2'\n          }]\n        }, {\n          id: 3,\n          label: 'Level one 3',\n          children: [{\n            id: 7,\n            label: 'Level two 3-1'\n          }, {\n            id: 8,\n            label: 'Level two 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "seleccionando-nodos"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#seleccionando-nodos"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Seleccionando nodos")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Este ejemplo muestra como establecer y leer nodos seleccionados. Esto se puede hacer por nodos o por claves. Si lo hace por claves el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es necesario.")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  default-expand-all\n  node-key=\"id\"\n  ref=\"tree\"\n  highlight-current\n  :props=\"defaultProps\">\n</el-tree>\n\n<div class=\"buttons\">\n  <el-button @click=\"getCheckedNodes\">get by node</el-button>\n  <el-button @click=\"getCheckedKeys\">get by key</el-button>\n  <el-button @click=\"setCheckedNodes\">set by node</el-button>\n  <el-button @click=\"setCheckedKeys\">set by key</el-button>\n  <el-button @click=\"resetChecked\">reset</el-button>\n</div>\n\n<script>\n  export default {\n    methods: {\n      getCheckedNodes() {\n        console.log(this.$refs.tree.getCheckedNodes());\n      },\n      getCheckedKeys() {\n        console.log(this.$refs.tree.getCheckedKeys());\n      },\n      setCheckedNodes() {\n        this.$refs.tree.setCheckedNodes([{\n          id: 5,\n          label: 'Level two 2-1'\n        }, {\n          id: 9,\n          label: 'Level three 1-1-1'\n        }]);\n      },\n      setCheckedKeys() {\n        this.$refs.tree.setCheckedKeys([3]);\n      },\n      resetChecked() {\n        this.$refs.tree.setCheckedKeys([]);\n      }\n    },\n\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: 'Level one 1',\n          children: [{\n            id: 4,\n            label: 'Level two 1-1',\n            children: [{\n              id: 9,\n              label: 'Level three 1-1-1'\n            }, {\n              id: 10,\n              label: 'Level three 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: 'Level one 2',\n          children: [{\n            id: 5,\n            label: 'Level two 2-1'\n          }, {\n            id: 6,\n            label: 'Level two 2-2'\n          }]\n        }, {\n          id: 3,\n          label: 'Level one 3',\n          children: [{\n            id: 7,\n            label: 'Level two 3-1'\n          }, {\n            id: 8,\n            label: 'Level two 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "contenido-personalizado-en-los-nodos"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#contenido-personalizado-en-los-nodos"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Contenido personalizado en los nodos")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "El contenido de los nodos puede ser personalizado, así que puede añadir iconos y botones a su gusto.", -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Hay dos maneras de personalizar la plantilla para los nodos de árbol: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y scoped slot. Utilice "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para asignar una función de renderizado que devuelve el contenido del árbol de nodos. Mire la documentación de node para una introducción detallada a las funciones de renderizado. Si prefiere scoped slot, tendrá acceso a los "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "nodos"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "datos"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en el ámbito de aplicación, representando el objeto TreeNode y los datos del nodo actual respectivamente. Tenga en cuenta que este ejemplo no puede ejecutarse en codepen.io ya que no soporta la sintaxis JSX. En un proyecto real "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" funcionará si las dependencias relevantes están configuradas correctamente.")])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"custom-tree-container\">\n  <div class=\"block\">\n    <p>Using render-content</p>\n    <el-tree\n      :data=\"data\"\n      show-checkbox\n      node-key=\"id\"\n      default-expand-all\n      :expand-on-click-node=\"false\"\n      :render-content=\"renderContent\">\n    </el-tree>\n  </div>\n  <div class=\"block\">\n    <p>Using scoped slot</p>\n    <el-tree\n      :data=\"data\"\n      show-checkbox\n      node-key=\"id\"\n      default-expand-all\n      :expand-on-click-node=\"false\">\n      <template #default=\"{ node, data }\">\n        <span class=\"custom-tree-node\">\n          <span>{{ node.label }}</span>\n          <span>\n            <a\n              @click=\"append(data)\">\n              Append\n            </a>\n            <a\n              @click=\"remove(node, data)\">\n              Delete\n            </a>\n          </span>\n        </span>\n      </template>\n    </el-tree>\n  </div>\n</div>\n\n<script>\n  let id = 1000;\n\n  export default {\n    data() {\n      const data = [{\n        id: 1,\n        label: 'Level one 1',\n        children: [{\n          id: 4,\n          label: 'Level two 1-1',\n          children: [{\n            id: 9,\n            label: 'Level three 1-1-1'\n          }, {\n            id: 10,\n            label: 'Level three 1-1-2'\n          }]\n        }]\n      }, {\n        id: 2,\n        label: 'Level one 2',\n        children: [{\n          id: 5,\n          label: 'Level two 2-1'\n        }, {\n          id: 6,\n          label: 'Level two 2-2'\n        }]\n      }, {\n        id: 3,\n        label: 'Level one 3',\n        children: [{\n          id: 7,\n          label: 'Level two 3-1'\n        }, {\n          id: 8,\n          label: 'Level two 3-2'\n        }]\n      }];\n      return {\n        data: JSON.parse(JSON.stringify(data)),\n      }\n    },\n\n    methods: {\n      append(data) {\n        const newChild = { id: id++, label: 'testtest', children: [] };\n        if (!data.children) {\n          data.children = []\n        }\n        data.children.push(newChild);\n        this.data = [...this.data]\n      },\n\n      remove(node, data) {\n        const parent = node.parent;\n        const children = parent.data.children || parent.data;\n        const index = children.findIndex(d => d.id === data.id);\n        children.splice(index, 1);\n        this.data = [...this.data]\n      },\n\n      renderContent(h, { node, data, store }) {\n        return h(\"span\", {\n          class: \"custom-tree-node\"\n        }, h(\"span\", null, node.label), h(\"span\", null, h(\"a\", {\n          onClick: () => this.append(data)\n        }, \"Append \"), h(\"a\", {\n          onClick: () => this.remove(node, data)\n        }, \"Delete\")));\n      }\n    }\n  };\n</script>\n\n<style>\n  .custom-tree-node {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    padding-right: 8px;\n  }\n</style>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "filtrado-de-nodos"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filtrado-de-nodos"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Filtrado de nodos")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Los nodos del árbol se pueden filtrar.", -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Invoque el método "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de la instancia de Tree para filtrar los nodos. Su parámetro es la palabra de filtrado. Tenga en cuenta que para que funcione es necesario "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-node-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y su valor el método de filtrado.")])], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  placeholder=\"Filter keyword\"\n  v-model=\"filterText\">\n</el-input>\n\n<el-tree\n  class=\"filter-tree\"\n  :data=\"data\"\n  :props=\"defaultProps\"\n  default-expand-all\n  :filter-node-method=\"filterNode\"\n  ref=\"tree\">\n</el-tree>\n\n<script>\n  export default {\n    watch: {\n      filterText(val) {\n        this.$refs.tree.filter(val);\n      }\n    },\n\n    methods: {\n      filterNode(value, data) {\n        if (!value) return true;\n        return data.label.indexOf(value) !== -1;\n      }\n    },\n\n    data() {\n      return {\n        filterText: '',\n        data: [{\n          id: 1,\n          label: 'Level one 1',\n          children: [{\n            id: 4,\n            label: 'Level two 1-1',\n            children: [{\n              id: 9,\n              label: 'Level three 1-1-1'\n            }, {\n              id: 10,\n              label: 'Level three 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: 'Level one 2',\n          children: [{\n            id: 5,\n            label: 'Level two 2-1'\n          }, {\n            id: 6,\n            label: 'Level two 2-2'\n          }]\n        }, {\n          id: 3,\n          label: 'Level one 3',\n          children: [{\n            id: 7,\n            label: 'Level two 3-1'\n          }, {\n            id: 8,\n            label: 'Level two 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "acordeon"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#acordeon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Acordeón")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Solo puede ser expandido un nodo del mismo nivel a la vez.", -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  accordion\n  @node-click=\"handleNodeClick\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: 'Level one 1',\n          children: [{\n            label: 'Level two 1-1',\n            children: [{\n              label: 'Level three 1-1-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 2',\n          children: [{\n            label: 'Level two 2-1',\n            children: [{\n              label: 'Level three 2-1-1'\n            }]\n          }, {\n            label: 'Level two 2-2',\n            children: [{\n              label: 'Level three 2-2-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 3',\n          children: [{\n            label: 'Level two 3-1',\n            children: [{\n              label: 'Level three 3-1-1'\n            }]\n          }, {\n            label: 'Level two 3-2',\n            children: [{\n              label: 'Level three 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "draggable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#draggable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Draggable")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Puede arrastrar y soltar nodos de Tree añadiendo un atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "draggable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" .")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  node-key=\"id\"\n  default-expand-all\n  @node-drag-start=\"handleDragStart\"\n  @node-drag-enter=\"handleDragEnter\"\n  @node-drag-leave=\"handleDragLeave\"\n  @node-drag-over=\"handleDragOver\"\n  @node-drag-end=\"handleDragEnd\"\n  @node-drop=\"handleDrop\"\n  draggable\n  :allow-drop=\"allowDrop\"\n  :allow-drag=\"allowDrag\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: 'Level one 1',\n          children: [{\n            label: 'Level two 1-1',\n            children: [{\n              label: 'Level three 1-1-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 2',\n          children: [{\n            label: 'Level two 2-1',\n            children: [{\n              label: 'Level three 2-1-1'\n            }]\n          }, {\n            label: 'Level two 2-2',\n            children: [{\n              label: 'Level three 2-2-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 3',\n          children: [{\n            label: 'Level two 3-1',\n            children: [{\n              label: 'Level three 3-1-1'\n            }]\n          }, {\n            label: 'Level two 3-2',\n            children: [{\n              label: 'Level three 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleDragStart(node, ev) {\n        console.log('drag start', node);\n      },\n      handleDragEnter(draggingNode, dropNode, ev) {\n        console.log('tree drag enter: ', dropNode.label);\n      },\n      handleDragLeave(draggingNode, dropNode, ev) {\n        console.log('tree drag leave: ', dropNode.label);\n      },\n      handleDragOver(draggingNode, dropNode, ev) {\n        console.log('tree drag over: ', dropNode.label);\n      },\n      handleDragEnd(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drag end: ', dropNode && dropNode.label, dropType);\n      },\n      handleDrop(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drop: ', dropNode.label, dropType);\n      },\n      allowDrop(draggingNode, dropNode, type) {\n        if (dropNode.data.label === 'Level two 3-1') {\n          return type !== 'inner';\n        } else {\n          return true;\n        }\n      },\n      allowDrag(draggingNode) {\n        return draggingNode.data.label.indexOf('Level three 3-1-1') === -1;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos\"><a class=\"header-anchor\" href=\"#atributos\">¶</a> Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>data</td><td>Datos del árbol</td><td>array</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>Texto a mostrar cuando data es void</td><td>string</td><td>—</td><td>—</td></tr><tr><td>node-key</td><td>Identificador único en todo el árbol para los nodos</td><td>string</td><td>—</td><td>—</td></tr><tr><td>props</td><td>Opciones de configuración</td><td>object</td><td>—</td><td>—</td></tr><tr><td>render-after-expand</td><td>si se mostrarán los nodos hijo sólo después de que se desglose por primera vez un nodo padre</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>load</td><td>Método para cargar los datos de subárboles</td><td>function(node, resolve)</td><td>—</td><td>—</td></tr><tr><td>render-content</td><td>Función de renderizado para los nodos</td><td>Function(h, { node, data, store }</td><td>—</td><td>—</td></tr><tr><td>highlight-current</td><td>Si el nodo actual está resaltado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-expand-all</td><td>Expandir todos los nodos por defecto</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>Si expandir o contraer un nodo al pincharlo, si es false solo se hará al pinchar en la flecha</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>check-on-click-node</td><td>si marcar o desmarcar el nodo al hacer clic en el. Si es <code>false</code>, el nodo sólo se puede marcar o desmarcar haciendo clic en la casilla de verificación.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>auto-expand-parent</td><td>Expandir un nodo padre si el hijo está seleccionado</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>default-expanded-keys</td><td>Array de claves de los nodos expandidos inicialmente</td><td>array</td><td>—</td><td>—</td></tr><tr><td>show-checkbox</td><td>Si un nodo es seleccionable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>check-strictly</td><td>El estado de selección de un nodo no afecta a sus padres o hijos, cuando <code>show-checkbox</code> es <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-checked-keys</td><td>Array con claves de los nodos seleccionados inicialmente</td><td>array</td><td>—</td><td>—</td></tr><tr><td>current-node-key</td><td>la clave del nodo inicialmente seleccionado</td><td>string, number</td><td>—</td><td>—</td></tr><tr><td>filter-node-method</td><td>Esta función se ejecutará en cada nodo cuando se use el método filtrar, si devuelve <code>false</code> el nodo se oculta</td><td>Function(value, data, node)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>Si solo un nodo de cada nivel puede expandirse a la vez</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indent</td><td>Indentación horizontal de los nodos en niveles adyacentes, en pixeles</td><td>number</td><td>—</td><td>16</td></tr><tr><td>icon-class</td><td>Icono del nodo del árbol de cliente</td><td>string</td><td>-</td><td>-</td></tr><tr><td>lazy</td><td>si se trata de un nodo de hoja lazy load, utilizado con el atributo <code>load</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>draggable</td><td>si se habilita la función de drag &amp; drop en los nodos</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-drag</td><td>esta función se ejecutará antes de arrastrar un nodo. si devuelve <code>false</code>, el nodo no puede ser arrastrado.</td><td>Function(nodo)</td><td>—</td><td>—</td></tr><tr><td>allow-drop</td><td>esta función se ejecutará al arrastrar y soltar un nodo. si devuelve false, el nodo arrastrando no se puede soltar en el nodo destino. <code>type</code> tiene tres valores posibles: &#39;prev&#39; (insertar el nodo de arrastre antes del nodo de destino), &#39;inner&#39; (insertar el nodo de arrastre en el nodo de destino) y &#39;next&#39; (insertar el nodo de arrastre después del nodo de destino)</td><td>Function(Nodoquesearrastra, Nododestino, type)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> props</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>label</td><td>Especifica que clave del objecto nodo se utilizará como label</td><td>string, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>children</td><td>Especifica que objeto del nodo se utiliza como subárbol</td><td>string</td><td>—</td><td>—</td></tr><tr><td>isLeaf</td><td>Especifica si el nodo es una hoja, sólo funciona cuando lazy load está activado</td><td>boolean, function(datos, nodo)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"metodos\"><a class=\"header-anchor\" href=\"#metodos\">¶</a> Métodos</h3><p><code>Tree</code> tiene los siguientes métodos, que devuelven el array de nodos seleccionados.</p><table><thead><tr><th>Método</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>filter</td><td>Filtra los nodos del árbol, los nodos filtrados estarán ocultos</td><td>Acepta un parámetro que será usado como primer parámetro para filter-node-method</td></tr><tr><td>updateKeyChildren</td><td>Asocia un nuevo dato al nodo, solo funciona si <code>node-key</code> está asignado</td><td>(key, data)Acepta dos parámetros: 1. clave del nodo 2. nuevo dato</td></tr><tr><td>getCheckedNodes</td><td>si el nodo puede ser seleccionado (<code>show-checkbox</code> es <code>true</code>), devuelve el array de nodos actualmente seleccionada.</td><td>(leafOnly, includeHalfChecked) Acepta dos parámetros de tipo booleano: 1. El valor por defecto es <code>false</code>. Si el parámetro es <code>true</code>, sólo devuelve el array de subnodos actualmente seleccionado. 2. El valor por defecto es <code>false</code>. Si el parámetro es <code>true</code>, el valor de retorno contiene nodos halfchecked.</td></tr><tr><td>setCheckedNodes</td><td>Establece algunos nodos como seleccionados, solo funciona cuando <code>node-key</code> está asignado</td><td>Un array de nodos a seleccionar</td></tr><tr><td>getCheckedKeys</td><td>Si los nodos pueden ser seleccionados (<code>show-checkbox</code> es <code>true</code>), devuelve un array con las claves de los nodos seleccionados</td><td>(leafOnly) Acepta un booleano que por defecto es <code>false</code>.</td></tr><tr><td>setCheckedKeys</td><td>Establece algunos nodos como seleccionados, solo si <code>node-key</code> está asignado</td><td>(keys, leafOnly) Acepta dos parametros: 1. un array de claves 2. un booleano cuyo valor por defecto es <code>false</code>. Si el parámetro es <code>true</code>, solo devuelve los nodos seleccionados</td></tr><tr><td>setChecked</td><td>Establece si un nodo está seleccionado, solo funciona si <code>node-key</code> esta asignado</td><td>(key/data, checked, deep) Acepta tres parámetros: 1. la clave o dato del nodo a ser seleccionado 2. un booleano que indica si un nodo el nodo estará seleccionado 3. un booleanoque indica si se hará en profundidad</td></tr><tr><td>getHalfCheckedNodes</td><td>Si el nodo puede ser seleccionado (<code>show-checkbox</code> es <code>true</code>), devuelve la mitad del array de nodos actualmente seleccionada.</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>Si el nodo puede ser seleccionado (<code>show-checkbox</code> es <code>true</code>), devuelve la mitad del array de claves del nodo actualmente seleccionado.</td><td>-</td></tr><tr><td>getCurrentKey</td><td>devuelve la clave del nodo resaltado actualmente (null si no hay ninguno)</td><td>—</td></tr><tr><td>getCurrentNode</td><td>devuelve los datos del nodo de resaltado (nulo si no hay ningún nodo resaltado)</td><td>—</td></tr><tr><td>setCurrentKey</td><td>establece el nodo resaltado por la clave, solo funciona si <code>node-key</code> está asignado</td><td>(key) la clave del nodo a ser resaltado. Si es <code>null</code>, cancela los nodos actualmente resaltados</td></tr><tr><td>setCurrentNode</td><td>establece el nodo resaltado, solo funciona si <code>node-key</code> está asignado</td><td>(node) nodo a ser resaltado</td></tr><tr><td>getNode</td><td>devuelve el nodo por el dato o la clave</td><td>(data) los datos o clave del nodo</td></tr><tr><td>remove</td><td>elimina un nodo, solo funciona si <code>node-key</code> está asignado</td><td>(data) los datos del nodo o nodo a borrar</td></tr><tr><td>append</td><td>añadir un nodo hijo a un nodo determinado del árbol</td><td>(data, parentNode) 1. los datos del nodo hijo que se añadirán 2. los datos del nodo padre, clave o nodo</td></tr><tr><td>insertBefore</td><td>insertar un nodo antes de un nodo dado en el árbol</td><td>(data, refNode) 1. Datos del nodo que se insertarán 2. Datos del nodo de referencia, clave o nodo</td></tr><tr><td>insertAfter</td><td>insertar un nodo después de un nodo dado en el árbol</td><td>(data, refNode) 1. Datos del nodo que se insertarán 2. Datos del nodo de referencia, clave o nodo</td></tr></tbody></table><h3 id=\"eventos\"><a class=\"header-anchor\" href=\"#eventos\">¶</a> Eventos</h3><table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>node-click</td><td>se lanza cuando un nodo es pinchado</td><td>tres parámetros: el objeto del nodo seleccionado, propiedad <code>node</code> de TreeNode y el TreeNode en si</td></tr><tr><td>node-contextmenu</td><td>se lanza cuando en un nodo se hace clic con el botón derecho</td><td>cuatro parámetros: evento, el objeto nodo sobre el que se hizo clic, la propiedad <code>node</code> del TreeNode, el TreeNode en si mismo</td></tr><tr><td>check-change</td><td>se lanza cuando el estado de selección del nodo cambia</td><td>tres parámetros: objeto nodo que se corresponde con el que ha cambiado, booleano que dice si esta seleccionado, booleano que dice si el nodo tiene hijos seleccionados</td></tr><tr><td>check</td><td>se activa al hacer clic en la casilla de selección de un nodo</td><td>dos parámetros: objeto de nodo correspondiente al nodo que se marca/desmarca, objeto de estatus de árbol verificado que tiene cuatro puntales: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys</td></tr><tr><td>current-change</td><td>cambia cuando el nodo actual cambia</td><td>dos parámetros: objeto nodo que se corresponde al nodo actual y propiedad <code>node</code> del TreeNode</td></tr><tr><td>node-expand</td><td>se lanza cuando el nodo actual se abre</td><td>tres parámetros: el objeto del nodo abierto, propiedad <code>node</code> de TreeNode y el TreeNode en si</td></tr><tr><td>node-collapse</td><td>se lanza cuando el nodo actual se cierra</td><td>tres parámetros: el objeto del nodo cerrado, propiedad <code>node</code> de TreeNode y el TreeNode en si</td></tr><tr><td>node-drag-start</td><td>se activa cuando se inicia el arrastre</td><td>dos parámetros: el objeto del nodo que se arrastrara, evento.</td></tr><tr><td>node-drag-enter</td><td>se desencadena cuando el nodo de arrastre entra en otro nodo</td><td>tres parámetros: objeto del nodo que se arrastra, objeto del nodo en el que entra, evento.</td></tr><tr><td>node-drag-leave</td><td>se desencadena cuando el nodo de arrastre sale de un nodo</td><td>tres parámetros: objeto del nodo que se arrastra, objeto del nodo del cual se sale, evento.</td></tr><tr><td>node-drag-over</td><td>se activa cuando se arrastra sobre un nodo (como el evento mouseover)</td><td>tres parámetros: objeto del nodo que se arrastra, objeto del nodo sobre el que esta el arrastre, evento.</td></tr><tr><td>node-drag-end</td><td>se activa cuando se termina de arrastrar</td><td>cuatro parámetros: objeto del nodo que se arrastra, objeto del nodo que corresponde al final del arrastre (puede ser <code>undefined</code> ), tipo de integración (antes (before), después (after), dentro (inner) ), evento.</td></tr><tr><td>node-drop</td><td>después de soltar el nodo de arrastre</td><td>cuatro parámetros: objeto del nodo que se esta arrastrando, objeto del nodo sobre el que se esta soltando, tipo de integración (antes (before), después (after), dentro (inner) ), evento.</td></tr></tbody></table><h3 id=\"scoped-slot\"><a class=\"header-anchor\" href=\"#scoped-slot\">¶</a> Scoped Slot</h3><table><thead><tr><th>Nombre</th><th>Descripción</th></tr></thead><tbody><tr><td>—</td><td>Contenido personalizado para nodos de tree. El parámetro del scope es { node, data }.</td></tr></tbody></table>", 11);

function treevue_type_template_id_32134812_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  var _component_element_demo8 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo8");

  var _component_element_demo9 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo9");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", treevue_type_template_id_32134812_hoisted_1, [treevue_type_template_id_32134812_hoisted_2, treevue_type_template_id_32134812_hoisted_3, treevue_type_template_id_32134812_hoisted_4, treevue_type_template_id_32134812_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [treevue_type_template_id_32134812_hoisted_6];
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
  }), _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_25, _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_29, _hoisted_30, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_33, _hoisted_34, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), _hoisted_36, _hoisted_37, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    _: 1
  }), _hoisted_39]);
}
// CONCATENATED MODULE: ./website/docs/es/tree.md?vue&type=template&id=32134812

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/tree.md?vue&type=script&lang=ts


/* harmony default export */ var treevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          props: _ctx.defaultProps,
          onNodeClick: _ctx.handleNodeClick
        }, null, 8, ["data", "props", "onNodeClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            data: [{
              label: 'Level one 1',
              children: [{
                label: 'Level two 1-1',
                children: [{
                  label: 'Level three 1-1-1'
                }]
              }]
            }, {
              label: 'Level one 2',
              children: [{
                label: 'Level two 2-1',
                children: [{
                  label: 'Level three 2-1-1'
                }]
              }, {
                label: 'Level two 2-2',
                children: [{
                  label: 'Level three 2-2-1'
                }]
              }]
            }, {
              label: 'Level one 3',
              children: [{
                label: 'Level two 3-1',
                children: [{
                  label: 'Level three 3-1-1'
                }]
              }, {
                label: 'Level two 3-2',
                children: [{
                  label: 'Level three 3-2-1'
                }]
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        },
        methods: {
          handleNodeClick: function handleNodeClick(data) {
            console.log(data);
          }
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
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          props: _ctx.props,
          load: _ctx.loadNode,
          lazy: "",
          "show-checkbox": "",
          onCheckChange: _ctx.handleCheckChange
        }, null, 8, ["props", "load", "onCheckChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            props: {
              label: 'name',
              children: 'zones'
            },
            count: 1
          };
        },
        methods: {
          handleCheckChange: function handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
          },
          handleNodeClick: function handleNodeClick(data) {
            console.log(data);
          },
          loadNode: function loadNode(node, resolve) {
            var _this = this;

            if (node.level === 0) {
              return resolve([{
                name: 'Root1'
              }, {
                name: 'Root2'
              }]);
            }

            if (node.level > 3) return resolve([]);
            var hasChild;

            if (node.data.name === 'region1') {
              hasChild = true;
            } else if (node.data.name === 'region2') {
              hasChild = false;
            } else {
              hasChild = Math.random() > 0.5;
            }

            setTimeout(function () {
              var data;

              if (hasChild) {
                data = [{
                  name: 'zone' + _this.count++
                }, {
                  name: 'zone' + _this.count++
                }];
              } else {
                data = [];
              }

              resolve(data);
            }, 500);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          props: _ctx.props,
          load: _ctx.loadNode,
          lazy: "",
          "show-checkbox": ""
        }, null, 8, ["props", "load"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            props: {
              label: 'name',
              children: 'zones',
              isLeaf: 'leaf'
            }
          };
        },
        methods: {
          loadNode: function loadNode(node, resolve) {
            if (node.level === 0) {
              return resolve([{
                name: 'region'
              }]);
            }

            if (node.level > 1) return resolve([]);
            setTimeout(function () {
              var data = [{
                name: 'leaf',
                leaf: true
              }, {
                name: 'zone'
              }];
              resolve(data);
            }, 500);
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
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          props: _ctx.defaultProps,
          "show-checkbox": ""
        }, null, 8, ["data", "props"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            data: [{
              id: 1,
              label: 'Level one 1',
              children: [{
                id: 3,
                label: 'Level two 2-1',
                children: [{
                  id: 4,
                  label: 'Level three 3-1-1'
                }, {
                  id: 5,
                  label: 'Level three 3-1-2',
                  disabled: true
                }]
              }, {
                id: 2,
                label: 'Level two 2-2',
                disabled: true,
                children: [{
                  id: 6,
                  label: 'Level three 3-2-1'
                }, {
                  id: 7,
                  label: 'Level three 3-2-2',
                  disabled: true
                }]
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label',
              disabled: 'disabled'
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          "show-checkbox": "",
          "node-key": "id",
          "default-expanded-keys": [2, 3],
          "default-checked-keys": [5],
          props: _ctx.defaultProps
        }, null, 8, ["data", "props"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            data: [{
              id: 1,
              label: 'Level one 1',
              children: [{
                id: 4,
                label: 'Level two 1-1',
                children: [{
                  id: 9,
                  label: 'Level three 1-1-1'
                }, {
                  id: 10,
                  label: 'Level three 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: 'Level one 2',
              children: [{
                id: 5,
                label: 'Level two 2-1'
              }, {
                id: 6,
                label: 'Level two 2-2'
              }]
            }, {
              id: 3,
              label: 'Level one 3',
              children: [{
                id: 7,
                label: 'Level two 3-1'
              }, {
                id: 8,
                label: 'Level two 3-2'
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "buttons"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("get by node");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("get by key");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("set by node");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("set by key");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("reset");

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          "show-checkbox": "",
          "default-expand-all": "",
          "node-key": "id",
          ref: "tree",
          "highlight-current": "",
          props: _ctx.defaultProps
        }, null, 8, ["data", "props"]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          onClick: _ctx.getCheckedNodes
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.getCheckedKeys
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.setCheckedNodes
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.setCheckedKeys
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.resetChecked
        }, {
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["onClick"])])]);
      }

      var democomponentExport = {
        methods: {
          getCheckedNodes: function getCheckedNodes() {
            console.log(this.$refs.tree.getCheckedNodes());
          },
          getCheckedKeys: function getCheckedKeys() {
            console.log(this.$refs.tree.getCheckedKeys());
          },
          setCheckedNodes: function setCheckedNodes() {
            this.$refs.tree.setCheckedNodes([{
              id: 5,
              label: 'Level two 2-1'
            }, {
              id: 9,
              label: 'Level three 1-1-1'
            }]);
          },
          setCheckedKeys: function setCheckedKeys() {
            this.$refs.tree.setCheckedKeys([3]);
          },
          resetChecked: function resetChecked() {
            this.$refs.tree.setCheckedKeys([]);
          }
        },
        data: function data() {
          return {
            data: [{
              id: 1,
              label: 'Level one 1',
              children: [{
                id: 4,
                label: 'Level two 1-1',
                children: [{
                  id: 9,
                  label: 'Level three 1-1-1'
                }, {
                  id: 10,
                  label: 'Level three 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: 'Level one 2',
              children: [{
                id: 5,
                label: 'Level two 2-1'
              }, {
                id: 6,
                label: 'Level two 2-2'
              }]
            }, {
              id: 3,
              label: 'Level one 3',
              children: [{
                id: 7,
                label: 'Level two 3-1'
              }, {
                id: 8,
                label: 'Level two 3-2'
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "custom-tree-container"
      };
      var _hoisted_2 = {
        class: "block"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "Using render-content", -1);

      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", null, "Using scoped slot", -1);

      var _hoisted_6 = {
        class: "custom-tree-node"
      };

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_tree, {
          data: _ctx.data,
          "show-checkbox": "",
          "node-key": "id",
          "default-expand-all": "",
          "expand-on-click-node": false,
          "render-content": _ctx.renderContent
        }, null, 8, ["data", "render-content"])]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_tree, {
          data: _ctx.data,
          "show-checkbox": "",
          "node-key": "id",
          "default-expand-all": "",
          "expand-on-click-node": false
        }, {
          default: _withCtx(function (_ref) {
            var node = _ref.node,
                data = _ref.data;
            return [_createVNode("span", _hoisted_6, [_createVNode("span", null, _toDisplayString(node.label), 1), _createVNode("span", null, [_createVNode("a", {
              onClick: function onClick($event) {
                return _ctx.append(data);
              }
            }, " Append ", 8, ["onClick"]), _createVNode("a", {
              onClick: function onClick($event) {
                return _ctx.remove(node, data);
              }
            }, " Delete ", 8, ["onClick"])])])];
          }),
          _: 1
        }, 8, ["data"])])])]);
      }

      var id = 1000;
      var democomponentExport = {
        data: function data() {
          var data = [{
            id: 1,
            label: 'Level one 1',
            children: [{
              id: 4,
              label: 'Level two 1-1',
              children: [{
                id: 9,
                label: 'Level three 1-1-1'
              }, {
                id: 10,
                label: 'Level three 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: 'Level one 2',
            children: [{
              id: 5,
              label: 'Level two 2-1'
            }, {
              id: 6,
              label: 'Level two 2-2'
            }]
          }, {
            id: 3,
            label: 'Level one 3',
            children: [{
              id: 7,
              label: 'Level two 3-1'
            }, {
              id: 8,
              label: 'Level two 3-2'
            }]
          }];
          return {
            data: JSON.parse(JSON.stringify(data))
          };
        },
        methods: {
          append: function append(data) {
            var newChild = {
              id: id++,
              label: 'testtest',
              children: []
            };

            if (!data.children) {
              data.children = [];
            }

            data.children.push(newChild);
            this.data = [].concat(this.data);
          },
          remove: function remove(node, data) {
            var parent = node.parent;
            var children = parent.data.children || parent.data;
            var index = children.findIndex(function (d) {
              return d.id === data.id;
            });
            children.splice(index, 1);
            this.data = [].concat(this.data);
          },
          renderContent: function renderContent(h, _ref2) {
            var _this2 = this;

            var node = _ref2.node,
                data = _ref2.data,
                store = _ref2.store;
            return h("span", {
              class: "custom-tree-node"
            }, h("span", null, node.label), h("span", null, h("a", {
              onClick: function onClick() {
                return _this2.append(data);
              }
            }, "Append "), h("a", {
              onClick: function onClick() {
                return _this2.remove(node, data);
              }
            }, "Delete")));
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Filter keyword",
          modelValue: _ctx.filterText,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.filterText = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_tree, {
          class: "filter-tree",
          data: _ctx.data,
          props: _ctx.defaultProps,
          "default-expand-all": "",
          "filter-node-method": _ctx.filterNode,
          ref: "tree"
        }, null, 8, ["data", "props", "filter-node-method"])]);
      }

      var democomponentExport = {
        watch: {
          filterText: function filterText(val) {
            this.$refs.tree.filter(val);
          }
        },
        methods: {
          filterNode: function filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
          }
        },
        data: function data() {
          return {
            filterText: '',
            data: [{
              id: 1,
              label: 'Level one 1',
              children: [{
                id: 4,
                label: 'Level two 1-1',
                children: [{
                  id: 9,
                  label: 'Level three 1-1-1'
                }, {
                  id: 10,
                  label: 'Level three 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: 'Level one 2',
              children: [{
                id: 5,
                label: 'Level two 2-1'
              }, {
                id: 6,
                label: 'Level two 2-2'
              }]
            }, {
              id: 3,
              label: 'Level one 3',
              children: [{
                id: 7,
                label: 'Level two 3-1'
              }, {
                id: 8,
                label: 'Level two 3-2'
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo8": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          props: _ctx.defaultProps,
          accordion: "",
          onNodeClick: _ctx.handleNodeClick
        }, null, 8, ["data", "props", "onNodeClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            data: [{
              label: 'Level one 1',
              children: [{
                label: 'Level two 1-1',
                children: [{
                  label: 'Level three 1-1-1'
                }]
              }]
            }, {
              label: 'Level one 2',
              children: [{
                label: 'Level two 2-1',
                children: [{
                  label: 'Level three 2-1-1'
                }]
              }, {
                label: 'Level two 2-2',
                children: [{
                  label: 'Level three 2-2-1'
                }]
              }]
            }, {
              label: 'Level one 3',
              children: [{
                label: 'Level two 3-1',
                children: [{
                  label: 'Level three 3-1-1'
                }]
              }, {
                label: 'Level two 3-2',
                children: [{
                  label: 'Level three 3-2-1'
                }]
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        },
        methods: {
          handleNodeClick: function handleNodeClick(data) {
            console.log(data);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo9": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          "node-key": "id",
          "default-expand-all": "",
          onNodeDragStart: _ctx.handleDragStart,
          onNodeDragEnter: _ctx.handleDragEnter,
          onNodeDragLeave: _ctx.handleDragLeave,
          onNodeDragOver: _ctx.handleDragOver,
          onNodeDragEnd: _ctx.handleDragEnd,
          onNodeDrop: _ctx.handleDrop,
          draggable: "",
          "allow-drop": _ctx.allowDrop,
          "allow-drag": _ctx.allowDrag
        }, null, 8, ["data", "onNodeDragStart", "onNodeDragEnter", "onNodeDragLeave", "onNodeDragOver", "onNodeDragEnd", "onNodeDrop", "allow-drop", "allow-drag"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            data: [{
              label: 'Level one 1',
              children: [{
                label: 'Level two 1-1',
                children: [{
                  label: 'Level three 1-1-1'
                }]
              }]
            }, {
              label: 'Level one 2',
              children: [{
                label: 'Level two 2-1',
                children: [{
                  label: 'Level three 2-1-1'
                }]
              }, {
                label: 'Level two 2-2',
                children: [{
                  label: 'Level three 2-2-1'
                }]
              }]
            }, {
              label: 'Level one 3',
              children: [{
                label: 'Level two 3-1',
                children: [{
                  label: 'Level three 3-1-1'
                }]
              }, {
                label: 'Level two 3-2',
                children: [{
                  label: 'Level three 3-2-1'
                }]
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        },
        methods: {
          handleDragStart: function handleDragStart(node, ev) {
            console.log('drag start', node);
          },
          handleDragEnter: function handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter: ', dropNode.label);
          },
          handleDragLeave: function handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave: ', dropNode.label);
          },
          handleDragOver: function handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over: ', dropNode.label);
          },
          handleDragEnd: function handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end: ', dropNode && dropNode.label, dropType);
          },
          handleDrop: function handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop: ', dropNode.label, dropType);
          },
          allowDrop: function allowDrop(draggingNode, dropNode, type) {
            if (dropNode.data.label === 'Level two 3-1') {
              return type !== 'inner';
            } else {
              return true;
            }
          },
          allowDrag: function allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('Level three 3-1-1') === -1;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/tree.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/tree.md



treevue_type_script_lang_ts.render = treevue_type_template_id_32134812_render

/* harmony default export */ var tree = __webpack_exports__["default"] = (treevue_type_script_lang_ts);

/***/ })

}]);