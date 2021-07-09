(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[208],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/tree.md?vue&type=template&id=7c8d78a6

var treevue_type_template_id_7c8d78a6_hoisted_1 = {
  class: "content element-doc"
};

var treevue_type_template_id_7c8d78a6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "tree"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tree"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Tree")], -1);

var treevue_type_template_id_7c8d78a6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Affiche un ensemble de données possédant plusieurs niveaux de hiérarchie ou d'imbrication.", -1);

var treevue_type_template_id_7c8d78a6_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Usage")], -1);

var treevue_type_template_id_7c8d78a6_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Voici la structure basique.", -1);

var treevue_type_template_id_7c8d78a6_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tree :data=\"data\" :props=\"defaultProps\" @node-click=\"handleNodeClick\"></el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: 'Niveau un 1',\n          children: [{\n            label: 'Niveau deux 1-1',\n            children: [{\n              label: 'Niveau trois 1-1-1'\n            }]\n          }]\n        }, {\n          label: 'Niveau un 2',\n          children: [{\n            label: 'Niveau deux 2-1',\n            children: [{\n              label: 'Niveau trois 2-1-1'\n            }]\n          }, {\n            label: 'Niveau deux 2-2',\n            children: [{\n              label: 'Niveau trois 2-2-1'\n            }]\n          }]\n        }, {\n          label: 'Niveau un 3',\n          children: [{\n            label: 'Niveau deux 3-1',\n            children: [{\n              label: 'Niveau trois 3-1-1'\n            }]\n          }, {\n            label: 'Niveau deux 3-2',\n            children: [{\n              label: 'Niveau trois 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "selection"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#selection"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Sélection")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Vous pouvez activer la sélection des noeuds.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "cet exemple montre également comment charger des données de manière asynchrone.")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :props=\"props\"\n  :load=\"loadNode\"\n  lazy\n  show-checkbox\n  @check-change=\"handleCheckChange\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones'\n        },\n        count: 1\n      };\n    },\n    methods: {\n      handleCheckChange(data, checked, indeterminate) {\n        console.log(data, checked, indeterminate);\n      },\n      handleNodeClick(data) {\n        console.log(data);\n      },\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);\n        }\n        if (node.level > 3) return resolve([]);\n\n        var hasChild;\n        if (node.data.name === 'region1') {\n          hasChild = true;\n        } else if (node.data.name === 'region2') {\n          hasChild = false;\n        } else {\n          hasChild = Math.random() > 0.5;\n        }\n\n        setTimeout(() => {\n          var data;\n          if (hasChild) {\n            data = [{\n              name: 'zone' + this.count++\n            }, {\n              name: 'zone' + this.count++\n            }];\n          } else {\n            data = [];\n          }\n\n          resolve(data);\n        }, 500);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "noeud-feuille-personnalises-en-mode-lazy"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#noeud-feuille-personnalises-en-mode-lazy"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Noeud-feuille personnalisés en mode lazy")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Les données d'un noeud ne sont pas accessibles tant que la noeud n'est pas cliqué, l'arbre ne peut donc pas prédire si un noeud sera une feuille. C'est pourquoi un bouton de menu est ajouté à chaque noeud, et si c'est une feuille il disparaîtra après le clic. Vous pouvez également dire par avance à l'arbre si un noeud est une feuille, pour éviter l'apparition du bouton de menu.")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :props=\"props\"\n  :load=\"loadNode\"\n  lazy\n  show-checkbox>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones',\n          isLeaf: 'leaf'\n        },\n      };\n    },\n    methods: {\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'region' }]);\n        }\n        if (node.level > 1) return resolve([]);\n\n        setTimeout(() => {\n          const data = [{\n            name: 'leaf',\n            leaf: true\n          }, {\n            name: 'zone'\n          }];\n\n          resolve(data);\n        }, 500);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "checkbox-desactivees"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#checkbox-desactivees"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Checkbox désactivées")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Les checkbox des noeuds peuvent être désactivées individuellement.", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Dans cet exemple, la propriété "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" est ajoutée à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "defaultProps"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", et certains noeuds ont "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "disabled:true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Les checkbox correspondantes sont donc désactivées.")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  show-checkbox>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: 'Niveau un 1',\n          children: [{\n            id: 3,\n            label: 'Niveau deux 2-1',\n            children: [{\n              id: 4,\n              label: 'Niveau trois 3-1-1'\n            }, {\n              id: 5,\n              label: 'Niveau trois 3-1-2',\n              disabled: true\n            }]\n          }, {\n            id: 2,\n            label: 'Niveau deux 2-2',\n            disabled: true,\n            children: [{\n              id: 6,\n              label: 'Niveau trois 3-2-1'\n            }, {\n              id: 7,\n              label: 'Niveau trois 3-2-2',\n              disabled: true\n            }]\n          }]\n        }],\n        defaultProps: {\n            children: 'children',\n            label: 'label',\n            disabled: 'disabled',\n        },\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ouverture-et-selection-par-defaut"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ouverture-et-selection-par-defaut"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Ouverture et sélection par défaut")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Certains noeuds peuvent être ouverts et/ou sélectionnés par défaut.", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "default-expanded-keys"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "default-checked-keys"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour réglez respectivement les noeuds ouverts et les noeuds sélectionnés par défaut. Notez que "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" est requis dans ce cas. Sa valeurs est le nom d'une clé dans l'objets data, et sa valeur devrait être unique dans tout l'arbre.")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  node-key=\"id\"\n  :default-expanded-keys=\"[2, 3]\"\n  :default-checked-keys=\"[5]\"\n  :props=\"defaultProps\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: 'Niveau un 1',\n          children: [{\n            id: 4,\n            label: 'Niveau deux 1-1',\n            children: [{\n              id: 9,\n              label: 'Niveau trois 1-1-1'\n            }, {\n              id: 10,\n              label: 'Niveau trois 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: 'Niveau un 2',\n          children: [{\n            id: 5,\n            label: 'Niveau deux 2-1'\n          }, {\n            id: 6,\n            label: 'Niveau deux 2-2'\n          }]\n        }, {\n          id: 3,\n          label: 'Niveau un 3',\n          children: [{\n            id: 7,\n            label: 'Niveau deux 3-1'\n          }, {\n            id: 8,\n            label: 'Niveau deux 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "selectionner-des-noeuds"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#selectionner-des-noeuds"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Sélectionner des noeuds")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Cet exemple montre comment récupérer et sélectionner des noeuds. Vous pouvez utiliser deux approches: les noeuds ou les clés. Dans le cas des clés, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" est requis.")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  default-expand-all\n  node-key=\"id\"\n  ref=\"tree\"\n  highlight-current\n  :props=\"defaultProps\">\n</el-tree>\n\n<div class=\"buttons\">\n  <el-button @click=\"getCheckedNodes\">Récupération par noeud</el-button>\n  <el-button @click=\"getCheckedKeys\">Récupération par clé</el-button>\n  <el-button @click=\"setCheckedNodes\">Sélection par noeud</el-button>\n  <el-button @click=\"setCheckedKeys\">Sélection par clé</el-button>\n  <el-button @click=\"resetChecked\">Reset</el-button>\n</div>\n\n<script>\n  export default {\n    methods: {\n      getCheckedNodes() {\n        console.log(this.$refs.tree.getCheckedNodes());\n      },\n      getCheckedKeys() {\n        console.log(this.$refs.tree.getCheckedKeys());\n      },\n      setCheckedNodes() {\n        this.$refs.tree.setCheckedNodes([{\n          id: 5,\n          label: 'Niveau deux 2-1'\n        }, {\n          id: 9,\n          label: 'Niveau trois 1-1-1'\n        }]);\n      },\n      setCheckedKeys() {\n        this.$refs.tree.setCheckedKeys([3]);\n      },\n      resetChecked() {\n        this.$refs.tree.setCheckedKeys([]);\n      }\n    },\n\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: 'Niveau un 1',\n          children: [{\n            id: 4,\n            label: 'Niveau deux 1-1',\n            children: [{\n              id: 9,\n              label: 'Niveau trois 1-1-1'\n            }, {\n              id: 10,\n              label: 'Niveau trois 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: 'Niveau un 2',\n          children: [{\n            id: 5,\n            label: 'Niveau deux 2-1'\n          }, {\n            id: 6,\n            label: 'Niveau deux 2-2'\n          }]\n        }, {\n          id: 3,\n          label: 'Niveau un 3',\n          children: [{\n            id: 7,\n            label: 'Niveau deux 3-1'\n          }, {\n            id: 8,\n            label: 'Niveau deux 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "contenu-personnalise"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#contenu-personnalise"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Contenu personnalisé")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Le contenu des noeuds peut être personnalisé, afin de pouvoir ajouter des icônes ou des boutons par exemple.", -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Il existe deux méthodes de personnalisation: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et les slots avec portée. Utilisez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour assigner une fonction de rendu qui va générer le contenu des noeuds. Voire la documentation de Vue pour plus d'informations. Si vous préférez les slots, vous aurez accès à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" dans le scope, corerspondant à l'objet TreeNode et aux données du noeud courant. Notez que la démo de "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ne marche pas dans jsfiddle car il ne supporte pas JSX. Dans un vrai projet, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" marchera si les dépendances sont satisfaites.")])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"custom-tree-container\">\n  <div class=\"block\">\n    <p>Avec render-content</p>\n    <el-tree\n      :data=\"data\"\n      show-checkbox\n      node-key=\"id\"\n      default-expand-all\n      :expand-on-click-node=\"false\"\n      :render-content=\"renderContent\">\n    </el-tree>\n  </div>\n  <div class=\"block\">\n    <p>Avec un slot</p>\n    <el-tree\n      :data=\"data\"\n      show-checkbox\n      node-key=\"id\"\n      default-expand-all\n      :expand-on-click-node=\"false\">\n      <template #default=\"{ node, data }\">\n        <span class=\"custom-tree-node\">\n          <span>{{ node.label }}</span>\n          <span>\n            <a\n              @click=\"append(data)\">\n              Append\n            </a>\n            <a\n              @click=\"remove(node, data)\">\n              Delete\n            </a>\n          </span>\n        </span>\n      </template>\n    </el-tree>\n  </div>\n</div>\n\n<script>\n  let id = 1000;\n\n  export default {\n    data() {\n      const data = [{\n        id: 1,\n        label: 'Niveau un 1',\n        children: [{\n          id: 4,\n          label: 'Niveau deux 1-1',\n          children: [{\n            id: 9,\n            label: 'Niveau trois 1-1-1'\n          }, {\n            id: 10,\n            label: 'Niveau trois 1-1-2'\n          }]\n        }]\n      }, {\n        id: 2,\n        label: 'Niveau un 2',\n        children: [{\n          id: 5,\n          label: 'Niveau deux 2-1'\n        }, {\n          id: 6,\n          label: 'Niveau deux 2-2'\n        }]\n      }, {\n        id: 3,\n        label: 'Niveau un 3',\n        children: [{\n          id: 7,\n          label: 'Niveau deux 3-1'\n        }, {\n          id: 8,\n          label: 'Niveau deux 3-2'\n        }]\n      }];\n      return {\n        data: JSON.parse(JSON.stringify(data)),\n      }\n    },\n\n    methods: {\n      append(data) {\n        const newChild = { id: id++, label: 'testtest', children: [] };\n        if (!data.children) {\n          data.children = []\n        }\n        data.children.push(newChild);\n        this.data = [...this.data]\n      },\n\n      remove(node, data) {\n        const parent = node.parent;\n        const children = parent.data.children || parent.data;\n        const index = children.findIndex(d => d.id === data.id);\n        children.splice(index, 1);\n        this.data = [...this.data]\n      },\n\n      renderContent(h, { node, data, store }) {\n        return h(\"span\", {\n          class: \"custom-tree-node\"\n        }, h(\"span\", null, node.label), h(\"span\", null, h(\"a\", {\n          onClick: () => this.append(data)\n        }, \"Append \"), h(\"a\", {\n          onClick: () => this.remove(node, data)\n        }, \"Delete\")));\n      }\n    }\n  };\n</script>\n\n<style>\n  .custom-tree-node {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    padding-right: 8px;\n  }\n</style>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "filtrage"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filtrage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Filtrage")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Les noeuds peuvent être filtrés par mot-clé.", -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilisez la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "filter"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" de l'instance de Tree pour pouvoir filtrer les noeuds, son paramètre étant le mot-clé. Notez que pour que cela fonctionne, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "filter-node-method"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" est requis, sa valeur étant la méthode de filtrage.")])], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  placeholder=\"Filter keyword\"\n  v-model=\"filterText\">\n</el-input>\n\n<el-tree\n  class=\"filter-tree\"\n  :data=\"data\"\n  :props=\"defaultProps\"\n  default-expand-all\n  :filter-node-method=\"filterNode\"\n  ref=\"tree\">\n</el-tree>\n\n<script>\n  export default {\n    watch: {\n      filterText(val) {\n        this.$refs.tree.filter(val);\n      }\n    },\n\n    methods: {\n      filterNode(value, data) {\n        if (!value) return true;\n        return data.label.indexOf(value) !== -1;\n      }\n    },\n\n    data() {\n      return {\n        filterText: '',\n        data: [{\n          id: 1,\n          label: 'Niveau un 1',\n          children: [{\n            id: 4,\n            label: 'Niveau deux 1-1',\n            children: [{\n              id: 9,\n              label: 'Niveau trois 1-1-1'\n            }, {\n              id: 10,\n              label: 'Niveau trois 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: 'Niveau un 2',\n          children: [{\n            id: 5,\n            label: 'Niveau deux 2-1'\n          }, {\n            id: 6,\n            label: 'Niveau deux 2-2'\n          }]\n        }, {\n          id: 3,\n          label: 'Niveau un 3',\n          children: [{\n            id: 7,\n            label: 'Niveau deux 3-1'\n          }, {\n            id: 8,\n            label: 'Niveau deux 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "accordeon"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#accordeon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Accordéon")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Vous pouvez utiliser un mode accordéon afin que seul un noeud par niveau soit ouvert.", -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  accordion\n  @node-click=\"handleNodeClick\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: 'Niveau un 1',\n          children: [{\n            label: 'Niveau deux 1-1',\n            children: [{\n              label: 'Niveau trois 1-1-1'\n            }]\n          }]\n        }, {\n          label: 'Niveau un 2',\n          children: [{\n            label: 'Niveau deux 2-1',\n            children: [{\n              label: 'Niveau trois 2-1-1'\n            }]\n          }, {\n            label: 'Niveau deux 2-2',\n            children: [{\n              label: 'Niveau trois 2-2-1'\n            }]\n          }]\n        }, {\n          label: 'Niveau un 3',\n          children: [{\n            label: 'Niveau deux 3-1',\n            children: [{\n              label: 'Niveau trois 3-1-1'\n            }]\n          }, {\n            label: 'Niveau deux 3-2',\n            children: [{\n              label: 'Niveau trois 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "noeuds-deplacables"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#noeuds-deplacables"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Noeuds déplaçables")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Vous pouvez déplacer les noeuds par drag'n drop en ajoutant l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "draggable"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  node-key=\"id\"\n  default-expand-all\n  @node-drag-start=\"handleDragStart\"\n  @node-drag-enter=\"handleDragEnter\"\n  @node-drag-leave=\"handleDragLeave\"\n  @node-drag-over=\"handleDragOver\"\n  @node-drag-end=\"handleDragEnd\"\n  @node-drop=\"handleDrop\"\n  draggable\n  :allow-drop=\"allowDrop\"\n  :allow-drag=\"allowDrag\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: 'Niveau un 1',\n          children: [{\n            label: 'Niveau deux 1-1',\n            children: [{\n              label: 'Niveau trois 1-1-1'\n            }]\n          }]\n        }, {\n          label: 'Niveau un 2',\n          children: [{\n            label: 'Niveau deux 2-1',\n            children: [{\n              label: 'Niveau trois 2-1-1'\n            }]\n          }, {\n            label: 'Niveau deux 2-2',\n            children: [{\n              label: 'Niveau trois 2-2-1'\n            }]\n          }]\n        }, {\n          label: 'Niveau un 3',\n          children: [{\n            label: 'Niveau deux 3-1',\n            children: [{\n              label: 'Niveau trois 3-1-1'\n            }]\n          }, {\n            label: 'Niveau deux 3-2',\n            children: [{\n              label: 'Niveau trois 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleDragStart(node, ev) {\n        console.log('drag start', node);\n      },\n      handleDragEnter(draggingNode, dropNode, ev) {\n        console.log('tree drag enter: ', dropNode.label);\n      },\n      handleDragLeave(draggingNode, dropNode, ev) {\n        console.log('tree drag leave: ', dropNode.label);\n      },\n      handleDragOver(draggingNode, dropNode, ev) {\n        console.log('tree drag over: ', dropNode.label);\n      },\n      handleDragEnd(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drag end: ', dropNode && dropNode.label, dropType);\n      },\n      handleDrop(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drop: ', dropNode.label, dropType);\n      },\n      allowDrop(draggingNode, dropNode, type) {\n        if (dropNode.data.label === 'Niveau deux 3-1') {\n          return type !== 'inner';\n        } else {\n          return true;\n        }\n      },\n      allowDrag(draggingNode) {\n        return draggingNode.data.label.indexOf('Niveau trois 3-1-1') === -1;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"attributs\"><a class=\"header-anchor\" href=\"#attributs\">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>data</td><td>Données de l&#39;arbre</td><td>array</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>Texte à afficher quand il n&#39;y a pas de données.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>node-key</td><td>Identifiant unique pour chaque noeud, doit être unique dans tout l&#39;arbre.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>props</td><td>Options de configuration, voir table suivante.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>render-after-expand</td><td>Si les noeuds enfants doivent être générés seulement après la première ouverture du parent.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>load</td><td>Méthode pour charger les noeuds enfants, uniquement en mode <code>lazy</code>.</td><td>function(node, resolve)</td><td>—</td><td>—</td></tr><tr><td>render-content</td><td>Fonction de rendu pour les noeuds.</td><td>Function(h, { node, data, store })</td><td>—</td><td>—</td></tr><tr><td>highlight-current</td><td>Si le noeud courant est mis en valeur.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-expand-all</td><td>Si tous les noeuds sont ouverts par défaut.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>Si l&#39;ouverture se fait aussi en cliquant sur le noeud. Si <code>false</code>, l&#39;ouverture ne se fera qu&#39;en cliquant sur l&#39;icône.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>check-on-click-node</td><td>Si la sélection se fait aussi en cliquant sur le noeud. Si <code>false</code>, la sélection ne se fera qu&#39;en cliquant sur la checkbox.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>auto-expand-parent</td><td>Si un noeud parent est automatiquement ouvert quand un noeud enfant s&#39;ouvre.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>default-expanded-keys</td><td>Tableau des clés des noeuds initialement ouverts.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>show-checkbox</td><td>Si un noeud est sélectionnable.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>check-strictly</td><td>Si la sélection d&#39;un noeud affecte celle de son parent quand <code>show-checkbox</code> est <code>true</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-checked-keys</td><td>Tableau des clés des noeuds initialement sélectionnés.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>current-node-key</td><td>Clé du noeud initialement sélectionné.</td><td>string, number</td><td>—</td><td>—</td></tr><tr><td>filter-node-method</td><td>Fonction exécutée sur chaque noeud pour le filtrage. Si elle retourne <code>false</code>, les noeuds seront cachés.</td><td>Function(value, data, node)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>Si les noeuds fonctionnent en mode accordéon.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indent</td><td>Indentation horizontale des noeuds en px.</td><td>number</td><td>—</td><td>16</td></tr><tr><td>icon-class</td><td>Icône pour chaque noeud.</td><td>string</td><td>-</td><td>-</td></tr><tr><td>lazy</td><td>Si les noeuds sont chargés en mode lazy, utilisé avec l&#39;attribut <code>load</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>draggable</td><td>Si les noeuds sont déplaçables par drag&#39;n drop.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-drag</td><td>Fonction exécutée avant le déplacement d&#39;un noeud. Si <code>false</code> est retourné, le noeud ne sera pas déplaçable.</td><td>Function(node)</td><td>—</td><td>—</td></tr><tr><td>allow-drop</td><td>Fonction exécutée avant le placement d&#39;un noeud. Si <code>false</code> est retourné, le noeud ne pourra être placé sur la zone en question. <code>type</code> a trois valeurs possibles: &#39;prev&#39; (insertion avant le noeud cible), &#39;inner&#39; (insertion dans le noeud cible) and &#39;next&#39; (insertion après le noeud cible).</td><td>Function(draggingNode, dropNode, type)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> props</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>label</td><td>Détermine quelle clé de l&#39;objet noeud représente le label.</td><td>string, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>children</td><td>Détermine quelle clé de l&#39;objet noeud représente les noeuds enfants.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Détermine quelle clé de l&#39;objet noeud représente la désactivation du noeud.</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>isLeaf</td><td>Détermine si le noeud est une feuille, ne marche qu&#39;avec le mode lazy loading.</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"methodes\"><a class=\"header-anchor\" href=\"#methodes\">¶</a> Méthodes</h3><p><code>Tree</code> possède les méthodes suivantes, qui retourne la sélection de noeuds actuelle.</p><table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>filter</td><td>Filtre les noeuds.</td><td>Accepte un paramètre qui sera le premier paramètre de <code>filter-node-method</code>.</td></tr><tr><td>updateKeyChildren</td><td>Ajoute de nouvelles données au noeud, ne marche que lorsque <code>node-key</code> est assigné.</td><td>(key, data) Accepte deux paramètres: 1. clé du noeud 2. nouvelles données.</td></tr><tr><td>getCheckedNodes</td><td>Si le noeud peut-être sélectionné (<code>show-checkbox</code> est <code>true</code>), il retourne un tableau des noeuds sélectionnés.</td><td>(leafOnly, includeHalfChecked) Accepte deux booléen: 1. Défaut à <code>false</code>. Si <code>true</code>, retourne seulement un tableau des sous-noeuds sélectionnés. 2. Défaut à <code>false</code>. Si <code>true</code>, retourne la moitié des noeuds sélectionnés.</td></tr><tr><td>setCheckedNodes</td><td>Détermine quels noeuds sont sélectionnés, ne marche que si <code>node_key</code> est assigné.</td><td>Un tableau de noeuds qui doivent être sélectionnés.</td></tr><tr><td>getCheckedKeys</td><td>Si le noeud peut être sélectionné (<code>show-checkbox</code> est <code>true</code>), retourne un tableau de clés des noeuds sélectionnés.</td><td>(leafOnly) Booléen, défaut à <code>false</code>. Si à <code>true</code>, Il retourne seulement un tableau des sous-noeuds sélectionnés.</td></tr><tr><td>setCheckedKeys</td><td>Détermine quels noeuds sont sélectionnés, ne marche que si <code>node_key</code> est assigné.</td><td>(keys, leafOnly) Accepte deux paramètres: 1. un tableau de clés de noeuds à sélectionner 2. un booléen avec pour défaut <code>false</code>. Si à <code>true</code>, Il retourne seulement un tableau des sous-noeuds sélectionnés.</td></tr><tr><td>setChecked</td><td>Détermine si un noeud est sélectionnable, ne marche que si <code>node_key</code> est assigné.</td><td>(key/data, checked, deep) Accepte trois paramètres: 1. La clé ou les données du noeud 2. un booléen indiquant si sélectionné. 3. un booléen indiquant si profond.</td></tr><tr><td>getHalfCheckedNodes</td><td>Si le noeud peut être sélectionné (<code>show-checkbox</code> est <code>true</code>), retourne la moitié des noeuds sélectionnés.</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>Si le noeud peut être sélectionné (<code>show-checkbox</code> est <code>true</code>), retourne les clés de la moitié des noeuds sélectionnés.</td><td>-</td></tr><tr><td>getCurrentKey</td><td>retourne la clé du noeud actuellement en valeur (<code>null</code> si aucun noeud n&#39;est en valeur).</td><td>—</td></tr><tr><td>getCurrentNode</td><td>retourne les données du noeud actuellement en valeur (<code>null</code> si aucun noeud n&#39;est en valeur).</td><td>—</td></tr><tr><td>setCurrentKey</td><td>Met un noeud en valeur par sa clé, ne marche que si <code>node_key</code> est assigné.</td><td>(key, shouldAutoExpandParent=true) 1. la clé du noeud. Si <code>null</code>, annule la sélection actuelle. 2. whether to automatically expand parent node</td></tr><tr><td>setCurrentNode</td><td>Met un noeud en valeur, ne marche que si <code>node_key</code> est assigné.</td><td>(node, shouldAutoExpandParent=true) 1. le noeud. 2. whether to automatically expand parent node</td></tr><tr><td>getNode</td><td>Retourne le noeud grâce à sa clé ou ses données.</td><td>(data) la clé ou les données du noeud.</td></tr><tr><td>remove</td><td>Supprime un noeud, ne marche que si node-key est assigné.</td><td>(data) le noeud ou ses données à supprimer.</td></tr><tr><td>append</td><td>Ajoute un noeud à un autre noeud.</td><td>(data, parentNode) 1. les données du noeud à ajouter 2. les données du parent, clé ou données.</td></tr><tr><td>insertBefore</td><td>Insère un noeud avant un autre noeud.</td><td>(data, refNode) 1. Les données du noeud à insérer 2. Clé ou noeud de référence.</td></tr><tr><td>insertAfter</td><td>Insère un noeud après un autre noeud.</td><td>(data, refNode) 1. Les données du noeud à insérer 2. Clé ou noeud de référence.</td></tr></tbody></table><h3 id=\"evenements\"><a class=\"header-anchor\" href=\"#evenements\">¶</a> Évènements</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>node-click</td><td>Se déclenche quand est cliqué.</td><td>Le noeud cliqué, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td></tr><tr><td>node-contextmenu</td><td>Se déclenche quand un noeud reçoit un clic droit.</td><td>L&#39;évènement, le noeud cliqué, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td></tr><tr><td>check-change</td><td>Se déclenche quand quand la sélection d&#39;un noeud change.</td><td>Le noeud modifié, si le noeud est sélectionné, si des enfants sont sélectionnés.</td></tr><tr><td>check</td><td>Se déclenche après un clic sur le checkbox.</td><td>Le noeud modifié, l&#39;objet statut de l&#39;arbre avec quatre propriétés: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys.</td></tr><tr><td>current-change</td><td>Se déclenche quand le noeud courant changes.</td><td>Le noeud courant, la propriété <code>node</code> de TreeNode</td></tr><tr><td>node-expand</td><td>Se déclenche quand le noeud courant s&#39;ouvre.</td><td>Le noeud ouvert, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td></tr><tr><td>node-collapse</td><td>Se déclenche quand le noeud courant se ferme.</td><td>Le noeud fermé, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td></tr><tr><td>node-drag-start</td><td>Se déclenche quand le déplacement commence.</td><td>Le noeud déplacé, l&#39;évènement.</td></tr><tr><td>node-drag-enter</td><td>Se déclenche quand le noeud déplacé entre dans un autre noeud.</td><td>Le noeud déplacé, l&#39;autre noeud, l&#39;évènement.</td></tr><tr><td>node-drag-leave</td><td>Se déclenche quand le noeud déplacé quitte un autre noeud.</td><td>Le noeud déplacé, l&#39;autre noeud, l&#39;évènement.</td></tr><tr><td>node-drag-over</td><td>Se déclenche quand le noeud passe au-dessus d&#39;un autre noeud (comme l&#39;évènement mouseover).</td><td>Le noeud déplacé, l&#39;autre noeud, l&#39;évènement.</td></tr><tr><td>node-drag-end</td><td>Se déclenche quand le déplacement se termine.</td><td>Le noeud déplacé, le noeud d&#39;arrivée (peut-être <code>undefined</code>), le type de placement (before / after / inner), l&#39;évènement.</td></tr><tr><td>node-drop</td><td>Se déclenche après que le noeud déplacé soit placé.</td><td>Le noeud déplacé, le noeud d&#39;arrivée, le type de placement (before / after / inner), l&#39;évènement.</td></tr></tbody></table><h3 id=\"slot-avec-portee\"><a class=\"header-anchor\" href=\"#slot-avec-portee\">¶</a> Slot avec portée</h3><table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Le contenu personnalisé des noeuds. les paramètres sont { node, data }.</td></tr></tbody></table>", 11);

function treevue_type_template_id_7c8d78a6_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo7");

  var _component_element_demo8 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo8");

  var _component_element_demo9 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo9");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", treevue_type_template_id_7c8d78a6_hoisted_1, [treevue_type_template_id_7c8d78a6_hoisted_2, treevue_type_template_id_7c8d78a6_hoisted_3, treevue_type_template_id_7c8d78a6_hoisted_4, treevue_type_template_id_7c8d78a6_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [treevue_type_template_id_7c8d78a6_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_25, _hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_33, _hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), _hoisted_36, _hoisted_37, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/tree.md?vue&type=template&id=7c8d78a6

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/tree.md?vue&type=script&lang=ts


/* harmony default export */ var treevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
              label: 'Niveau un 1',
              children: [{
                label: 'Niveau deux 1-1',
                children: [{
                  label: 'Niveau trois 1-1-1'
                }]
              }]
            }, {
              label: 'Niveau un 2',
              children: [{
                label: 'Niveau deux 2-1',
                children: [{
                  label: 'Niveau trois 2-1-1'
                }]
              }, {
                label: 'Niveau deux 2-2',
                children: [{
                  label: 'Niveau trois 2-2-1'
                }]
              }]
            }, {
              label: 'Niveau un 3',
              children: [{
                label: 'Niveau deux 3-1',
                children: [{
                  label: 'Niveau trois 3-1-1'
                }]
              }, {
                label: 'Niveau deux 3-2',
                children: [{
                  label: 'Niveau trois 3-2-1'
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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
              label: 'Niveau un 1',
              children: [{
                id: 3,
                label: 'Niveau deux 2-1',
                children: [{
                  id: 4,
                  label: 'Niveau trois 3-1-1'
                }, {
                  id: 5,
                  label: 'Niveau trois 3-1-2',
                  disabled: true
                }]
              }, {
                id: 2,
                label: 'Niveau deux 2-2',
                disabled: true,
                children: [{
                  id: 6,
                  label: 'Niveau trois 3-2-1'
                }, {
                  id: 7,
                  label: 'Niveau trois 3-2-2',
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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
              label: 'Niveau un 1',
              children: [{
                id: 4,
                label: 'Niveau deux 1-1',
                children: [{
                  id: 9,
                  label: 'Niveau trois 1-1-1'
                }, {
                  id: 10,
                  label: 'Niveau trois 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: 'Niveau un 2',
              children: [{
                id: 5,
                label: 'Niveau deux 2-1'
              }, {
                id: 6,
                label: 'Niveau deux 2-2'
              }]
            }, {
              id: 3,
              label: 'Niveau un 3',
              children: [{
                id: 7,
                label: 'Niveau deux 3-1'
              }, {
                id: 8,
                label: 'Niveau deux 3-2'
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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "buttons"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Récupération par noeud");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Récupération par clé");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Sélection par noeud");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Sélection par clé");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Reset");

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
              label: 'Niveau deux 2-1'
            }, {
              id: 9,
              label: 'Niveau trois 1-1-1'
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
              label: 'Niveau un 1',
              children: [{
                id: 4,
                label: 'Niveau deux 1-1',
                children: [{
                  id: 9,
                  label: 'Niveau trois 1-1-1'
                }, {
                  id: 10,
                  label: 'Niveau trois 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: 'Niveau un 2',
              children: [{
                id: 5,
                label: 'Niveau deux 2-1'
              }, {
                id: 6,
                label: 'Niveau deux 2-2'
              }]
            }, {
              id: 3,
              label: 'Niveau un 3',
              children: [{
                id: 7,
                label: 'Niveau deux 3-1'
              }, {
                id: 8,
                label: 'Niveau deux 3-2'
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
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "custom-tree-container"
      };
      var _hoisted_2 = {
        class: "block"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "Avec render-content", -1);

      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", null, "Avec un slot", -1);

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
            label: 'Niveau un 1',
            children: [{
              id: 4,
              label: 'Niveau deux 1-1',
              children: [{
                id: 9,
                label: 'Niveau trois 1-1-1'
              }, {
                id: 10,
                label: 'Niveau trois 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: 'Niveau un 2',
            children: [{
              id: 5,
              label: 'Niveau deux 2-1'
            }, {
              id: 6,
              label: 'Niveau deux 2-2'
            }]
          }, {
            id: 3,
            label: 'Niveau un 3',
            children: [{
              id: 7,
              label: 'Niveau deux 3-1'
            }, {
              id: 8,
              label: 'Niveau deux 3-2'
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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
              label: 'Niveau un 1',
              children: [{
                id: 4,
                label: 'Niveau deux 1-1',
                children: [{
                  id: 9,
                  label: 'Niveau trois 1-1-1'
                }, {
                  id: 10,
                  label: 'Niveau trois 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: 'Niveau un 2',
              children: [{
                id: 5,
                label: 'Niveau deux 2-1'
              }, {
                id: 6,
                label: 'Niveau deux 2-2'
              }]
            }, {
              id: 3,
              label: 'Niveau un 3',
              children: [{
                id: 7,
                label: 'Niveau deux 3-1'
              }, {
                id: 8,
                label: 'Niveau deux 3-2'
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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
              label: 'Niveau un 1',
              children: [{
                label: 'Niveau deux 1-1',
                children: [{
                  label: 'Niveau trois 1-1-1'
                }]
              }]
            }, {
              label: 'Niveau un 2',
              children: [{
                label: 'Niveau deux 2-1',
                children: [{
                  label: 'Niveau trois 2-1-1'
                }]
              }, {
                label: 'Niveau deux 2-2',
                children: [{
                  label: 'Niveau trois 2-2-1'
                }]
              }]
            }, {
              label: 'Niveau un 3',
              children: [{
                label: 'Niveau deux 3-1',
                children: [{
                  label: 'Niveau trois 3-1-1'
                }]
              }, {
                label: 'Niveau deux 3-2',
                children: [{
                  label: 'Niveau trois 3-2-1'
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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
              label: 'Niveau un 1',
              children: [{
                label: 'Niveau deux 1-1',
                children: [{
                  label: 'Niveau trois 1-1-1'
                }]
              }]
            }, {
              label: 'Niveau un 2',
              children: [{
                label: 'Niveau deux 2-1',
                children: [{
                  label: 'Niveau trois 2-1-1'
                }]
              }, {
                label: 'Niveau deux 2-2',
                children: [{
                  label: 'Niveau trois 2-2-1'
                }]
              }]
            }, {
              label: 'Niveau un 3',
              children: [{
                label: 'Niveau deux 3-1',
                children: [{
                  label: 'Niveau trois 3-1-1'
                }]
              }, {
                label: 'Niveau deux 3-2',
                children: [{
                  label: 'Niveau trois 3-2-1'
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
            if (dropNode.data.label === 'Niveau deux 3-1') {
              return type !== 'inner';
            } else {
              return true;
            }
          },
          allowDrag: function allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('Niveau trois 3-1-1') === -1;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/tree.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/tree.md



treevue_type_script_lang_ts.render = treevue_type_template_id_7c8d78a6_render

/* harmony default export */ var tree = __webpack_exports__["default"] = (treevue_type_script_lang_ts);

/***/ })

}]);