(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[211],{

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/tree.md?vue&type=template&id=3f370f8e

const treevue_type_template_id_3f370f8e_hoisted_1 = {
  class: "content element-doc"
};

const treevue_type_template_id_3f370f8e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tree ");

const treevue_type_template_id_3f370f8e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Affiche un ensemble de données possédant plusieurs niveaux de hiérarchie ou d'imbrication.", -1);

const treevue_type_template_id_3f370f8e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Usage ");

const treevue_type_template_id_3f370f8e_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Voici la structure basique.", -1);

const treevue_type_template_id_3f370f8e_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  @node-click=\"handleNodeClick\"\n></el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            label: 'Niveau un 1',\n            children: [\n              {\n                label: 'Niveau deux 1-1',\n                children: [\n                  {\n                    label: 'Niveau trois 1-1-1',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: 'Niveau un 2',\n            children: [\n              {\n                label: 'Niveau deux 2-1',\n                children: [\n                  {\n                    label: 'Niveau trois 2-1-1',\n                  },\n                ],\n              },\n              {\n                label: 'Niveau deux 2-2',\n                children: [\n                  {\n                    label: 'Niveau trois 2-2-1',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: 'Niveau un 3',\n            children: [\n              {\n                label: 'Niveau deux 3-1',\n                children: [\n                  {\n                    label: 'Niveau trois 3-1-1',\n                  },\n                ],\n              },\n              {\n                label: 'Niveau deux 3-2',\n                children: [\n                  {\n                    label: 'Niveau trois 3-2-1',\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data)\n      },\n    },\n  }\n</script>\n")], -1);

const treevue_type_template_id_3f370f8e_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Sélection ");

const treevue_type_template_id_3f370f8e_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Vous pouvez activer la sélection des noeuds.", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "cet exemple montre également comment charger des données de manière asynchrone.")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :props=\"props\"\n  :load=\"loadNode\"\n  lazy\n  show-checkbox\n  @check-change=\"handleCheckChange\"\n>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones',\n        },\n        count: 1,\n      }\n    },\n    methods: {\n      handleCheckChange(data, checked, indeterminate) {\n        console.log(data, checked, indeterminate)\n      },\n      handleNodeClick(data) {\n        console.log(data)\n      },\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'Root1' }, { name: 'Root2' }])\n        }\n        if (node.level > 3) return resolve([])\n\n        var hasChild\n        if (node.data.name === 'region1') {\n          hasChild = true\n        } else if (node.data.name === 'region2') {\n          hasChild = false\n        } else {\n          hasChild = Math.random() > 0.5\n        }\n\n        setTimeout(() => {\n          var data\n          if (hasChild) {\n            data = [\n              {\n                name: 'zone' + this.count++,\n              },\n              {\n                name: 'zone' + this.count++,\n              },\n            ]\n          } else {\n            data = []\n          }\n\n          resolve(data)\n        }, 500)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Noeud-feuille personnalisés en mode lazy ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Les données d'un noeud ne sont pas accessibles tant que la noeud n'est pas cliqué, l'arbre ne peut donc pas prédire si un noeud sera une feuille. C'est pourquoi un bouton de menu est ajouté à chaque noeud, et si c'est une feuille il disparaîtra après le clic. Vous pouvez également dire par avance à l'arbre si un noeud est une feuille, pour éviter l'apparition du bouton de menu.")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree :props=\"props\" :load=\"loadNode\" lazy show-checkbox> </el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones',\n          isLeaf: 'leaf',\n        },\n      }\n    },\n    methods: {\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'region' }])\n        }\n        if (node.level > 1) return resolve([])\n\n        setTimeout(() => {\n          const data = [\n            {\n              name: 'leaf',\n              leaf: true,\n            },\n            {\n              name: 'zone',\n            },\n          ]\n\n          resolve(data)\n        }, 500)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox désactivées ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Les checkbox des noeuds peuvent être désactivées individuellement.", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dans cet exemple, la propriété "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" est ajoutée à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "defaultProps"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", et certains noeuds ont "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled:true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Les checkbox correspondantes sont donc désactivées.")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree :data=\"data\" :props=\"defaultProps\" show-checkbox> </el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            id: 1,\n            label: 'Niveau un 1',\n            children: [\n              {\n                id: 3,\n                label: 'Niveau deux 2-1',\n                children: [\n                  {\n                    id: 4,\n                    label: 'Niveau trois 3-1-1',\n                  },\n                  {\n                    id: 5,\n                    label: 'Niveau trois 3-1-2',\n                    disabled: true,\n                  },\n                ],\n              },\n              {\n                id: 2,\n                label: 'Niveau deux 2-2',\n                disabled: true,\n                children: [\n                  {\n                    id: 6,\n                    label: 'Niveau trois 3-2-1',\n                  },\n                  {\n                    id: 7,\n                    label: 'Niveau trois 3-2-2',\n                    disabled: true,\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n          disabled: 'disabled',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Ouverture et sélection par défaut ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Certains noeuds peuvent être ouverts et/ou sélectionnés par défaut.", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default-expanded-keys"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default-checked-keys"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour réglez respectivement les noeuds ouverts et les noeuds sélectionnés par défaut. Notez que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" est requis dans ce cas. Sa valeurs est le nom d'une clé dans l'objets data, et sa valeur devrait être unique dans tout l'arbre.")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  node-key=\"id\"\n  :default-expanded-keys=\"[2, 3]\"\n  :default-checked-keys=\"[5]\"\n  :props=\"defaultProps\"\n>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            id: 1,\n            label: 'Niveau un 1',\n            children: [\n              {\n                id: 4,\n                label: 'Niveau deux 1-1',\n                children: [\n                  {\n                    id: 9,\n                    label: 'Niveau trois 1-1-1',\n                  },\n                  {\n                    id: 10,\n                    label: 'Niveau trois 1-1-2',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            id: 2,\n            label: 'Niveau un 2',\n            children: [\n              {\n                id: 5,\n                label: 'Niveau deux 2-1',\n              },\n              {\n                id: 6,\n                label: 'Niveau deux 2-2',\n              },\n            ],\n          },\n          {\n            id: 3,\n            label: 'Niveau un 3',\n            children: [\n              {\n                id: 7,\n                label: 'Niveau deux 3-1',\n              },\n              {\n                id: 8,\n                label: 'Niveau deux 3-2',\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Sélectionner des noeuds ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cet exemple montre comment récupérer et sélectionner des noeuds. Vous pouvez utiliser deux approches: les noeuds ou les clés. Dans le cas des clés, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" est requis.")])], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  default-expand-all\n  node-key=\"id\"\n  ref=\"tree\"\n  highlight-current\n  :props=\"defaultProps\"\n>\n</el-tree>\n\n<div class=\"buttons\">\n  <el-button @click=\"getCheckedNodes\">Récupération par noeud</el-button>\n  <el-button @click=\"getCheckedKeys\">Récupération par clé</el-button>\n  <el-button @click=\"setCheckedNodes\">Sélection par noeud</el-button>\n  <el-button @click=\"setCheckedKeys\">Sélection par clé</el-button>\n  <el-button @click=\"resetChecked\">Reset</el-button>\n</div>\n\n<script>\n  export default {\n    methods: {\n      getCheckedNodes() {\n        console.log(this.$refs.tree.getCheckedNodes())\n      },\n      getCheckedKeys() {\n        console.log(this.$refs.tree.getCheckedKeys())\n      },\n      setCheckedNodes() {\n        this.$refs.tree.setCheckedNodes([\n          {\n            id: 5,\n            label: 'Niveau deux 2-1',\n          },\n          {\n            id: 9,\n            label: 'Niveau trois 1-1-1',\n          },\n        ])\n      },\n      setCheckedKeys() {\n        this.$refs.tree.setCheckedKeys([3])\n      },\n      resetChecked() {\n        this.$refs.tree.setCheckedKeys([])\n      },\n    },\n\n    data() {\n      return {\n        data: [\n          {\n            id: 1,\n            label: 'Niveau un 1',\n            children: [\n              {\n                id: 4,\n                label: 'Niveau deux 1-1',\n                children: [\n                  {\n                    id: 9,\n                    label: 'Niveau trois 1-1-1',\n                  },\n                  {\n                    id: 10,\n                    label: 'Niveau trois 1-1-2',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            id: 2,\n            label: 'Niveau un 2',\n            children: [\n              {\n                id: 5,\n                label: 'Niveau deux 2-1',\n              },\n              {\n                id: 6,\n                label: 'Niveau deux 2-2',\n              },\n            ],\n          },\n          {\n            id: 3,\n            label: 'Niveau un 3',\n            children: [\n              {\n                id: 7,\n                label: 'Niveau deux 3-1',\n              },\n              {\n                id: 8,\n                label: 'Niveau deux 3-2',\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Contenu personnalisé ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Le contenu des noeuds peut être personnalisé, afin de pouvoir ajouter des icônes ou des boutons par exemple.", -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Il existe deux méthodes de personnalisation: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et les slots avec portée. Utilisez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour assigner une fonction de rendu qui va générer le contenu des noeuds. Voire la documentation de Vue pour plus d'informations. Si vous préférez les slots, vous aurez accès à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" dans le scope, corerspondant à l'objet TreeNode et aux données du noeud courant. Notez que la démo de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" ne marche pas dans jsfiddle car il ne supporte pas JSX. Dans un vrai projet, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" marchera si les dépendances sont satisfaites.")])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"custom-tree-container\">\n  <div class=\"block\">\n    <p>Avec render-content</p>\n    <el-tree\n      :data=\"data\"\n      show-checkbox\n      node-key=\"id\"\n      default-expand-all\n      :expand-on-click-node=\"false\"\n      :render-content=\"renderContent\"\n    >\n    </el-tree>\n  </div>\n  <div class=\"block\">\n    <p>Avec un slot</p>\n    <el-tree\n      :data=\"data\"\n      show-checkbox\n      node-key=\"id\"\n      default-expand-all\n      :expand-on-click-node=\"false\"\n    >\n      <template #default=\"{ node, data }\">\n        <span class=\"custom-tree-node\">\n          <span>{{ node.label }}</span>\n          <span>\n            <a @click=\"append(data)\"> Append </a>\n            <a @click=\"remove(node, data)\"> Delete </a>\n          </span>\n        </span>\n      </template>\n    </el-tree>\n  </div>\n</div>\n\n<script>\n  let id = 1000\n\n  export default {\n    data() {\n      const data = [\n        {\n          id: 1,\n          label: 'Niveau un 1',\n          children: [\n            {\n              id: 4,\n              label: 'Niveau deux 1-1',\n              children: [\n                {\n                  id: 9,\n                  label: 'Niveau trois 1-1-1',\n                },\n                {\n                  id: 10,\n                  label: 'Niveau trois 1-1-2',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          id: 2,\n          label: 'Niveau un 2',\n          children: [\n            {\n              id: 5,\n              label: 'Niveau deux 2-1',\n            },\n            {\n              id: 6,\n              label: 'Niveau deux 2-2',\n            },\n          ],\n        },\n        {\n          id: 3,\n          label: 'Niveau un 3',\n          children: [\n            {\n              id: 7,\n              label: 'Niveau deux 3-1',\n            },\n            {\n              id: 8,\n              label: 'Niveau deux 3-2',\n            },\n          ],\n        },\n      ]\n      return {\n        data: JSON.parse(JSON.stringify(data)),\n      }\n    },\n\n    methods: {\n      append(data) {\n        const newChild = { id: id++, label: 'testtest', children: [] }\n        if (!data.children) {\n          data.children = []\n        }\n        data.children.push(newChild)\n        this.data = [...this.data]\n      },\n\n      remove(node, data) {\n        const parent = node.parent\n        const children = parent.data.children || parent.data\n        const index = children.findIndex((d) => d.id === data.id)\n        children.splice(index, 1)\n        this.data = [...this.data]\n      },\n\n      renderContent(h, { node, data, store }) {\n        return h(\n          'span',\n          {\n            class: 'custom-tree-node',\n          },\n          h('span', null, node.label),\n          h(\n            'span',\n            null,\n            h(\n              'a',\n              {\n                onClick: () => this.append(data),\n              },\n              'Append '\n            ),\n            h(\n              'a',\n              {\n                onClick: () => this.remove(node, data),\n              },\n              'Delete'\n            )\n          )\n        )\n      },\n    },\n  }\n</script>\n\n<style>\n  .custom-tree-node {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    padding-right: 8px;\n  }\n</style>\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Filtrage ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Les noeuds peuvent être filtrés par mot-clé.", -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilisez la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de l'instance de Tree pour pouvoir filtrer les noeuds, son paramètre étant le mot-clé. Notez que pour que cela fonctionne, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-node-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" est requis, sa valeur étant la méthode de filtrage.")])], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-input placeholder=\"Filter keyword\" v-model=\"filterText\"> </el-input>\n\n<el-tree\n  class=\"filter-tree\"\n  :data=\"data\"\n  :props=\"defaultProps\"\n  default-expand-all\n  :filter-node-method=\"filterNode\"\n  ref=\"tree\"\n>\n</el-tree>\n\n<script>\n  export default {\n    watch: {\n      filterText(val) {\n        this.$refs.tree.filter(val)\n      },\n    },\n\n    methods: {\n      filterNode(value, data) {\n        if (!value) return true\n        return data.label.indexOf(value) !== -1\n      },\n    },\n\n    data() {\n      return {\n        filterText: '',\n        data: [\n          {\n            id: 1,\n            label: 'Niveau un 1',\n            children: [\n              {\n                id: 4,\n                label: 'Niveau deux 1-1',\n                children: [\n                  {\n                    id: 9,\n                    label: 'Niveau trois 1-1-1',\n                  },\n                  {\n                    id: 10,\n                    label: 'Niveau trois 1-1-2',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            id: 2,\n            label: 'Niveau un 2',\n            children: [\n              {\n                id: 5,\n                label: 'Niveau deux 2-1',\n              },\n              {\n                id: 6,\n                label: 'Niveau deux 2-2',\n              },\n            ],\n          },\n          {\n            id: 3,\n            label: 'Niveau un 3',\n            children: [\n              {\n                id: 7,\n                label: 'Niveau deux 3-1',\n              },\n              {\n                id: 8,\n                label: 'Niveau deux 3-2',\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Accordéon ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Vous pouvez utiliser un mode accordéon afin que seul un noeud par niveau soit ouvert.", -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  accordion\n  @node-click=\"handleNodeClick\"\n>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            label: 'Niveau un 1',\n            children: [\n              {\n                label: 'Niveau deux 1-1',\n                children: [\n                  {\n                    label: 'Niveau trois 1-1-1',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: 'Niveau un 2',\n            children: [\n              {\n                label: 'Niveau deux 2-1',\n                children: [\n                  {\n                    label: 'Niveau trois 2-1-1',\n                  },\n                ],\n              },\n              {\n                label: 'Niveau deux 2-2',\n                children: [\n                  {\n                    label: 'Niveau trois 2-2-1',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: 'Niveau un 3',\n            children: [\n              {\n                label: 'Niveau deux 3-1',\n                children: [\n                  {\n                    label: 'Niveau trois 3-1-1',\n                  },\n                ],\n              },\n              {\n                label: 'Niveau deux 3-2',\n                children: [\n                  {\n                    label: 'Niveau trois 3-2-1',\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Noeuds déplaçables ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vous pouvez déplacer les noeuds par drag'n drop en ajoutant l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "draggable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  node-key=\"id\"\n  default-expand-all\n  @node-drag-start=\"handleDragStart\"\n  @node-drag-enter=\"handleDragEnter\"\n  @node-drag-leave=\"handleDragLeave\"\n  @node-drag-over=\"handleDragOver\"\n  @node-drag-end=\"handleDragEnd\"\n  @node-drop=\"handleDrop\"\n  draggable\n  :allow-drop=\"allowDrop\"\n  :allow-drag=\"allowDrag\"\n>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            label: 'Niveau un 1',\n            children: [\n              {\n                label: 'Niveau deux 1-1',\n                children: [\n                  {\n                    label: 'Niveau trois 1-1-1',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: 'Niveau un 2',\n            children: [\n              {\n                label: 'Niveau deux 2-1',\n                children: [\n                  {\n                    label: 'Niveau trois 2-1-1',\n                  },\n                ],\n              },\n              {\n                label: 'Niveau deux 2-2',\n                children: [\n                  {\n                    label: 'Niveau trois 2-2-1',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: 'Niveau un 3',\n            children: [\n              {\n                label: 'Niveau deux 3-1',\n                children: [\n                  {\n                    label: 'Niveau trois 3-1-1',\n                  },\n                ],\n              },\n              {\n                label: 'Niveau deux 3-2',\n                children: [\n                  {\n                    label: 'Niveau trois 3-2-1',\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n    methods: {\n      handleDragStart(node, ev) {\n        console.log('drag start', node)\n      },\n      handleDragEnter(draggingNode, dropNode, ev) {\n        console.log('tree drag enter: ', dropNode.label)\n      },\n      handleDragLeave(draggingNode, dropNode, ev) {\n        console.log('tree drag leave: ', dropNode.label)\n      },\n      handleDragOver(draggingNode, dropNode, ev) {\n        console.log('tree drag over: ', dropNode.label)\n      },\n      handleDragEnd(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drag end: ', dropNode && dropNode.label, dropType)\n      },\n      handleDrop(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drop: ', dropNode.label, dropType)\n      },\n      allowDrop(draggingNode, dropNode, type) {\n        if (dropNode.data.label === 'Niveau deux 3-1') {\n          return type !== 'inner'\n        } else {\n          return true\n        }\n      },\n      allowDrag(draggingNode) {\n        return draggingNode.data.label.indexOf('Niveau trois 3-1-1') === -1\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>data</td><td>Données de l&#39;arbre</td><td>array</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>Texte à afficher quand il n&#39;y a pas de données.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>node-key</td><td>Identifiant unique pour chaque noeud, doit être unique dans tout l&#39;arbre.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>props</td><td>Options de configuration, voir table suivante.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>render-after-expand</td><td>Si les noeuds enfants doivent être générés seulement après la première ouverture du parent.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>load</td><td>Méthode pour charger les noeuds enfants, uniquement en mode <code>lazy</code>.</td><td>function(node, resolve)</td><td>—</td><td>—</td></tr><tr><td>render-content</td><td>Fonction de rendu pour les noeuds.</td><td>Function(h, { node, data, store })</td><td>—</td><td>—</td></tr><tr><td>highlight-current</td><td>Si le noeud courant est mis en valeur.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-expand-all</td><td>Si tous les noeuds sont ouverts par défaut.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>Si l&#39;ouverture se fait aussi en cliquant sur le noeud. Si <code>false</code>, l&#39;ouverture ne se fera qu&#39;en cliquant sur l&#39;icône.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>check-on-click-node</td><td>Si la sélection se fait aussi en cliquant sur le noeud. Si <code>false</code>, la sélection ne se fera qu&#39;en cliquant sur la checkbox.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>auto-expand-parent</td><td>Si un noeud parent est automatiquement ouvert quand un noeud enfant s&#39;ouvre.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>default-expanded-keys</td><td>Tableau des clés des noeuds initialement ouverts.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>show-checkbox</td><td>Si un noeud est sélectionnable.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>check-strictly</td><td>Si la sélection d&#39;un noeud affecte celle de son parent quand <code>show-checkbox</code> est <code>true</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-checked-keys</td><td>Tableau des clés des noeuds initialement sélectionnés.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>current-node-key</td><td>Clé du noeud initialement sélectionné.</td><td>string, number</td><td>—</td><td>—</td></tr><tr><td>filter-node-method</td><td>Fonction exécutée sur chaque noeud pour le filtrage. Si elle retourne <code>false</code>, les noeuds seront cachés.</td><td>Function(value, data, node)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>Si les noeuds fonctionnent en mode accordéon.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indent</td><td>Indentation horizontale des noeuds en px.</td><td>number</td><td>—</td><td>16</td></tr><tr><td>icon-class</td><td>Icône pour chaque noeud.</td><td>string</td><td>-</td><td>-</td></tr><tr><td>lazy</td><td>Si les noeuds sont chargés en mode lazy, utilisé avec l&#39;attribut <code>load</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>draggable</td><td>Si les noeuds sont déplaçables par drag&#39;n drop.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-drag</td><td>Fonction exécutée avant le déplacement d&#39;un noeud. Si <code>false</code> est retourné, le noeud ne sera pas déplaçable.</td><td>Function(node)</td><td>—</td><td>—</td></tr><tr><td>allow-drop</td><td>Fonction exécutée avant le placement d&#39;un noeud. Si <code>false</code> est retourné, le noeud ne pourra être placé sur la zone en question. <code>type</code> a trois valeurs possibles: &#39;prev&#39; (insertion avant le noeud cible), &#39;inner&#39; (insertion dans le noeud cible) and &#39;next&#39; (insertion après le noeud cible).</td><td>Function(draggingNode, dropNode, type)</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("props ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>label</td><td>Détermine quelle clé de l&#39;objet noeud représente le label.</td><td>string, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>children</td><td>Détermine quelle clé de l&#39;objet noeud représente les noeuds enfants.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Détermine quelle clé de l&#39;objet noeud représente la désactivation du noeud.</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>isLeaf</td><td>Détermine si le noeud est une feuille, ne marche qu&#39;avec le mode lazy loading.</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Méthodes ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p><code>Tree</code> possède les méthodes suivantes, qui retourne la sélection de noeuds actuelle.</p><table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>filter</td><td>Filtre les noeuds.</td><td>Accepte un paramètre qui sera le premier paramètre de <code>filter-node-method</code>.</td></tr><tr><td>updateKeyChildren</td><td>Ajoute de nouvelles données au noeud, ne marche que lorsque <code>node-key</code> est assigné.</td><td>(key, data) Accepte deux paramètres: 1. clé du noeud 2. nouvelles données.</td></tr><tr><td>getCheckedNodes</td><td>Si le noeud peut-être sélectionné (<code>show-checkbox</code> est <code>true</code>), il retourne un tableau des noeuds sélectionnés.</td><td>(leafOnly, includeHalfChecked) Accepte deux booléen: 1. Défaut à <code>false</code>. Si <code>true</code>, retourne seulement un tableau des sous-noeuds sélectionnés. 2. Défaut à <code>false</code>. Si <code>true</code>, retourne la moitié des noeuds sélectionnés.</td></tr><tr><td>setCheckedNodes</td><td>Détermine quels noeuds sont sélectionnés, ne marche que si <code>node_key</code> est assigné.</td><td>Un tableau de noeuds qui doivent être sélectionnés.</td></tr><tr><td>getCheckedKeys</td><td>Si le noeud peut être sélectionné (<code>show-checkbox</code> est <code>true</code>), retourne un tableau de clés des noeuds sélectionnés.</td><td>(leafOnly) Booléen, défaut à <code>false</code>. Si à <code>true</code>, Il retourne seulement un tableau des sous-noeuds sélectionnés.</td></tr><tr><td>setCheckedKeys</td><td>Détermine quels noeuds sont sélectionnés, ne marche que si <code>node_key</code> est assigné.</td><td>(keys, leafOnly) Accepte deux paramètres: 1. un tableau de clés de noeuds à sélectionner 2. un booléen avec pour défaut <code>false</code>. Si à <code>true</code>, Il retourne seulement un tableau des sous-noeuds sélectionnés.</td></tr><tr><td>setChecked</td><td>Détermine si un noeud est sélectionnable, ne marche que si <code>node_key</code> est assigné.</td><td>(key/data, checked, deep) Accepte trois paramètres: 1. La clé ou les données du noeud 2. un booléen indiquant si sélectionné. 3. un booléen indiquant si profond.</td></tr><tr><td>getHalfCheckedNodes</td><td>Si le noeud peut être sélectionné (<code>show-checkbox</code> est <code>true</code>), retourne la moitié des noeuds sélectionnés.</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>Si le noeud peut être sélectionné (<code>show-checkbox</code> est <code>true</code>), retourne les clés de la moitié des noeuds sélectionnés.</td><td>-</td></tr><tr><td>getCurrentKey</td><td>retourne la clé du noeud actuellement en valeur (<code>null</code> si aucun noeud n&#39;est en valeur).</td><td>—</td></tr><tr><td>getCurrentNode</td><td>retourne les données du noeud actuellement en valeur (<code>null</code> si aucun noeud n&#39;est en valeur).</td><td>—</td></tr><tr><td>setCurrentKey</td><td>Met un noeud en valeur par sa clé, ne marche que si <code>node_key</code> est assigné.</td><td>(key, shouldAutoExpandParent=true) 1. la clé du noeud. Si <code>null</code>, annule la sélection actuelle. 2. whether to automatically expand parent node</td></tr><tr><td>setCurrentNode</td><td>Met un noeud en valeur, ne marche que si <code>node_key</code> est assigné.</td><td>(node, shouldAutoExpandParent=true) 1. le noeud. 2. whether to automatically expand parent node</td></tr><tr><td>getNode</td><td>Retourne le noeud grâce à sa clé ou ses données.</td><td>(data) la clé ou les données du noeud.</td></tr><tr><td>remove</td><td>Supprime un noeud, ne marche que si node-key est assigné.</td><td>(data) le noeud ou ses données à supprimer.</td></tr><tr><td>append</td><td>Ajoute un noeud à un autre noeud.</td><td>(data, parentNode) 1. les données du noeud à ajouter 2. les données du parent, clé ou données.</td></tr><tr><td>insertBefore</td><td>Insère un noeud avant un autre noeud.</td><td>(data, refNode) 1. Les données du noeud à insérer 2. Clé ou noeud de référence.</td></tr><tr><td>insertAfter</td><td>Insère un noeud après un autre noeud.</td><td>(data, refNode) 1. Les données du noeud à insérer 2. Clé ou noeud de référence.</td></tr></tbody></table>", 2);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Évènements ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>node-click</td><td>Se déclenche quand est cliqué.</td><td>Le noeud cliqué, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td></tr><tr><td>node-contextmenu</td><td>Se déclenche quand un noeud reçoit un clic droit.</td><td>L&#39;évènement, le noeud cliqué, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td></tr><tr><td>check-change</td><td>Se déclenche quand quand la sélection d&#39;un noeud change.</td><td>Le noeud modifié, si le noeud est sélectionné, si des enfants sont sélectionnés.</td></tr><tr><td>check</td><td>Se déclenche après un clic sur le checkbox.</td><td>Le noeud modifié, l&#39;objet statut de l&#39;arbre avec quatre propriétés: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys.</td></tr><tr><td>current-change</td><td>Se déclenche quand le noeud courant changes.</td><td>Le noeud courant, la propriété <code>node</code> de TreeNode</td></tr><tr><td>node-expand</td><td>Se déclenche quand le noeud courant s&#39;ouvre.</td><td>Le noeud ouvert, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td></tr><tr><td>node-collapse</td><td>Se déclenche quand le noeud courant se ferme.</td><td>Le noeud fermé, la propriété <code>node</code> de TreeNode, TreeNode lui-même.</td></tr><tr><td>node-drag-start</td><td>Se déclenche quand le déplacement commence.</td><td>Le noeud déplacé, l&#39;évènement.</td></tr><tr><td>node-drag-enter</td><td>Se déclenche quand le noeud déplacé entre dans un autre noeud.</td><td>Le noeud déplacé, l&#39;autre noeud, l&#39;évènement.</td></tr><tr><td>node-drag-leave</td><td>Se déclenche quand le noeud déplacé quitte un autre noeud.</td><td>Le noeud déplacé, l&#39;autre noeud, l&#39;évènement.</td></tr><tr><td>node-drag-over</td><td>Se déclenche quand le noeud passe au-dessus d&#39;un autre noeud (comme l&#39;évènement mouseover).</td><td>Le noeud déplacé, l&#39;autre noeud, l&#39;évènement.</td></tr><tr><td>node-drag-end</td><td>Se déclenche quand le déplacement se termine.</td><td>Le noeud déplacé, le noeud d&#39;arrivée (peut-être <code>undefined</code>), le type de placement (before / after / inner), l&#39;évènement.</td></tr><tr><td>node-drop</td><td>Se déclenche après que le noeud déplacé soit placé.</td><td>Le noeud déplacé, le noeud d&#39;arrivée, le type de placement (before / after / inner), l&#39;évènement.</td></tr></tbody></table>", 1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot avec portée ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nom"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Le contenu personnalisé des noeuds. les paramètres sont { node, data }.")])])], -1);

function treevue_type_template_id_3f370f8e_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", treevue_type_template_id_3f370f8e_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tree",
    content: "Tree",
    href: "#tree",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [treevue_type_template_id_3f370f8e_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tree"
    })]),
    _: 1
  }), treevue_type_template_id_3f370f8e_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "usage",
    content: "Usage",
    href: "#usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [treevue_type_template_id_3f370f8e_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#usage"
    })]),
    _: 1
  }), treevue_type_template_id_3f370f8e_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [treevue_type_template_id_3f370f8e_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "selection",
    content: "Sélection",
    href: "#selection",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [treevue_type_template_id_3f370f8e_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#selection"
    })]),
    _: 1
  }), treevue_type_template_id_3f370f8e_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "noeud-feuille-personnalises-en-mode-lazy",
    content: "Noeud-feuille personnalisés en mode lazy",
    href: "#noeud-feuille-personnalises-en-mode-lazy",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#noeud-feuille-personnalises-en-mode-lazy"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-desactivees",
    content: "Checkbox désactivées",
    href: "#checkbox-desactivees",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-desactivees"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ouverture-et-selection-par-defaut",
    content: "Ouverture et sélection par défaut",
    href: "#ouverture-et-selection-par-defaut",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ouverture-et-selection-par-defaut"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "selectionner-des-noeuds",
    content: "Sélectionner des noeuds",
    href: "#selectionner-des-noeuds",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#selectionner-des-noeuds"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "contenu-personnalise",
    content: "Contenu personnalisé",
    href: "#contenu-personnalise",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#contenu-personnalise"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "filtrage",
    content: "Filtrage",
    href: "#filtrage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#filtrage"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "accordeon",
    content: "Accordéon",
    href: "#accordeon",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#accordeon"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "noeuds-deplacables",
    content: "Noeuds déplaçables",
    href: "#noeuds-deplacables",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#noeuds-deplacables"
    })]),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs",
    content: "Attributs",
    href: "#attributs",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "props",
    content: "props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methodes",
    content: "Méthodes",
    href: "#methodes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methodes"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "evenements",
    content: "Évènements",
    href: "#evenements",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#evenements"
    })]),
    _: 1
  }), _hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slot-avec-portee",
    content: "Slot avec portée",
    href: "#slot-avec-portee",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slot-avec-portee"
    })]),
    _: 1
  }), _hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/tree.md?vue&type=template&id=3f370f8e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/tree.md?vue&type=script&lang=ts

/* harmony default export */ var treevue_type_script_lang_ts = ({
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
        const _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          props: _ctx.defaultProps,
          onNodeClick: _ctx.handleNodeClick
        }, null, 8, ["data", "props", "onNodeClick"])]);
      }

      const democomponentExport = {
        data() {
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
          handleNodeClick(data) {
            console.log(data);
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tree, {
          props: _ctx.props,
          load: _ctx.loadNode,
          lazy: "",
          "show-checkbox": "",
          onCheckChange: _ctx.handleCheckChange
        }, null, 8, ["props", "load", "onCheckChange"])]);
      }

      const democomponentExport = {
        data() {
          return {
            props: {
              label: 'name',
              children: 'zones'
            },
            count: 1
          };
        },

        methods: {
          handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
          },

          handleNodeClick(data) {
            console.log(data);
          },

          loadNode(node, resolve) {
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

            setTimeout(() => {
              var data;

              if (hasChild) {
                data = [{
                  name: 'zone' + this.count++
                }, {
                  name: 'zone' + this.count++
                }];
              } else {
                data = [];
              }

              resolve(data);
            }, 500);
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tree, {
          props: _ctx.props,
          load: _ctx.loadNode,
          lazy: "",
          "show-checkbox": ""
        }, null, 8, ["props", "load"])]);
      }

      const democomponentExport = {
        data() {
          return {
            props: {
              label: 'name',
              children: 'zones',
              isLeaf: 'leaf'
            }
          };
        },

        methods: {
          loadNode(node, resolve) {
            if (node.level === 0) {
              return resolve([{
                name: 'region'
              }]);
            }

            if (node.level > 1) return resolve([]);
            setTimeout(() => {
              const data = [{
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
        const _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          props: _ctx.defaultProps,
          "show-checkbox": ""
        }, null, 8, ["data", "props"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          "show-checkbox": "",
          "node-key": "id",
          "default-expanded-keys": [2, 3],
          "default-checked-keys": [5],
          props: _ctx.defaultProps
        }, null, 8, ["data", "props"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "buttons"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Récupération par noeud");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Récupération par clé");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Sélection par noeud");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Sélection par clé");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Reset");

      function render(_ctx, _cache) {
        const _component_el_tree = _resolveComponent("el-tree");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          "show-checkbox": "",
          "default-expand-all": "",
          "node-key": "id",
          ref: "tree",
          "highlight-current": "",
          props: _ctx.defaultProps
        }, null, 8, ["data", "props"]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          onClick: _ctx.getCheckedNodes
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.getCheckedKeys
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.setCheckedNodes
        }, {
          default: _withCtx(() => [_hoisted_4]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.setCheckedKeys
        }, {
          default: _withCtx(() => [_hoisted_5]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.resetChecked
        }, {
          default: _withCtx(() => [_hoisted_6]),
          _: 1
        }, 8, ["onClick"])])]);
      }

      const democomponentExport = {
        methods: {
          getCheckedNodes() {
            console.log(this.$refs.tree.getCheckedNodes());
          },

          getCheckedKeys() {
            console.log(this.$refs.tree.getCheckedKeys());
          },

          setCheckedNodes() {
            this.$refs.tree.setCheckedNodes([{
              id: 5,
              label: 'Niveau deux 2-1'
            }, {
              id: 9,
              label: 'Niveau trois 1-1-1'
            }]);
          },

          setCheckedKeys() {
            this.$refs.tree.setCheckedKeys([3]);
          },

          resetChecked() {
            this.$refs.tree.setCheckedKeys([]);
          }

        },

        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        toDisplayString: _toDisplayString,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "custom-tree-container"
      };
      const _hoisted_2 = {
        class: "block"
      };

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("p", null, "Avec render-content", -1);

      const _hoisted_4 = {
        class: "block"
      };

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("p", null, "Avec un slot", -1);

      const _hoisted_6 = {
        class: "custom-tree-node"
      };
      const _hoisted_7 = ["onClick"];
      const _hoisted_8 = ["onClick"];

      function render(_ctx, _cache) {
        const _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_tree, {
          data: _ctx.data,
          "show-checkbox": "",
          "node-key": "id",
          "default-expand-all": "",
          "expand-on-click-node": false,
          "render-content": _ctx.renderContent
        }, null, 8, ["data", "render-content"])]), _createElementVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_tree, {
          data: _ctx.data,
          "show-checkbox": "",
          "node-key": "id",
          "default-expand-all": "",
          "expand-on-click-node": false
        }, {
          default: _withCtx(({
            node,
            data
          }) => [_createElementVNode("span", _hoisted_6, [_createElementVNode("span", null, _toDisplayString(node.label), 1), _createElementVNode("span", null, [_createElementVNode("a", {
            onClick: $event => _ctx.append(data)
          }, " Append ", 8, _hoisted_7), _createElementVNode("a", {
            onClick: $event => _ctx.remove(node, data)
          }, " Delete ", 8, _hoisted_8)])])]),
          _: 1
        }, 8, ["data"])])])]);
      }

      let id = 1000;
      const democomponentExport = {
        data() {
          const data = [{
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
          append(data) {
            const newChild = {
              id: id++,
              label: 'testtest',
              children: []
            };

            if (!data.children) {
              data.children = [];
            }

            data.children.push(newChild);
            this.data = [...this.data];
          },

          remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
            this.data = [...this.data];
          },

          renderContent(h, {
            node,
            data,
            store
          }) {
            return h('span', {
              class: 'custom-tree-node'
            }, h('span', null, node.label), h('span', null, h('a', {
              onClick: () => this.append(data)
            }, 'Append '), h('a', {
              onClick: () => this.remove(node, data)
            }, 'Delete')));
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo7": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Filter keyword",
          modelValue: _ctx.filterText,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.filterText = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_tree, {
          class: "filter-tree",
          data: _ctx.data,
          props: _ctx.defaultProps,
          "default-expand-all": "",
          "filter-node-method": _ctx.filterNode,
          ref: "tree"
        }, null, 8, ["data", "props", "filter-node-method"])]);
      }

      const democomponentExport = {
        watch: {
          filterText(val) {
            this.$refs.tree.filter(val);
          }

        },
        methods: {
          filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
          }

        },

        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo8": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          props: _ctx.defaultProps,
          accordion: "",
          onNodeClick: _ctx.handleNodeClick
        }, null, 8, ["data", "props", "onNodeClick"])]);
      }

      const democomponentExport = {
        data() {
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
          handleNodeClick(data) {
            console.log(data);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo9": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tree, {
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

      const democomponentExport = {
        data() {
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
          handleDragStart(node, ev) {
            console.log('drag start', node);
          },

          handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter: ', dropNode.label);
          },

          handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave: ', dropNode.label);
          },

          handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over: ', dropNode.label);
          },

          handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end: ', dropNode && dropNode.label, dropType);
          },

          handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop: ', dropNode.label, dropType);
          },

          allowDrop(draggingNode, dropNode, type) {
            if (dropNode.data.label === 'Niveau deux 3-1') {
              return type !== 'inner';
            } else {
              return true;
            }
          },

          allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('Niveau trois 3-1-1') === -1;
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
// CONCATENATED MODULE: ./website/docs/fr-FR/tree.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/tree.md



treevue_type_script_lang_ts.render = treevue_type_template_id_3f370f8e_render

/* harmony default export */ var tree = __webpack_exports__["default"] = (treevue_type_script_lang_ts);

/***/ })

}]);