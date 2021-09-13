(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[355],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/tree.md?vue&type=template&id=cf06e5e6

const treevue_type_template_id_cf06e5e6_hoisted_1 = {
  class: "content element-doc"
};

const treevue_type_template_id_cf06e5e6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tree 树形控件 ");

const treevue_type_template_id_cf06e5e6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "用清晰的层级结构展示信息，可展开或折叠。", -1);

const treevue_type_template_id_cf06e5e6_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const treevue_type_template_id_cf06e5e6_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "基础的树形结构展示。", -1);

const treevue_type_template_id_cf06e5e6_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  @node-click=\"handleNodeClick\"\n></el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            label: '一级 1',\n            children: [\n              {\n                label: '二级 1-1',\n                children: [\n                  {\n                    label: '三级 1-1-1',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: '一级 2',\n            children: [\n              {\n                label: '二级 2-1',\n                children: [\n                  {\n                    label: '三级 2-1-1',\n                  },\n                ],\n              },\n              {\n                label: '二级 2-2',\n                children: [\n                  {\n                    label: '三级 2-2-1',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: '一级 3',\n            children: [\n              {\n                label: '二级 3-1',\n                children: [\n                  {\n                    label: '三级 3-1-1',\n                  },\n                ],\n              },\n              {\n                label: '二级 3-2',\n                children: [\n                  {\n                    label: '三级 3-2-1',\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data)\n      },\n    },\n  }\n</script>\n")], -1);

const treevue_type_template_id_cf06e5e6_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可选择 ");

const treevue_type_template_id_cf06e5e6_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "适用于需要选择层级时使用。", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "本例还展示了动态加载节点数据的方法。")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :props=\"props\"\n  :load=\"loadNode\"\n  lazy\n  show-checkbox\n  @check-change=\"handleCheckChange\"\n>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones',\n        },\n        count: 1,\n      }\n    },\n    methods: {\n      handleCheckChange(data, checked, indeterminate) {\n        console.log(data, checked, indeterminate)\n      },\n      handleNodeClick(data) {\n        console.log(data)\n      },\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'region1' }, { name: 'region2' }])\n        }\n        if (node.level > 3) return resolve([])\n\n        var hasChild\n        if (node.data.name === 'region1') {\n          hasChild = true\n        } else if (node.data.name === 'region2') {\n          hasChild = false\n        } else {\n          hasChild = Math.random() > 0.5\n        }\n\n        setTimeout(() => {\n          var data\n          if (hasChild) {\n            data = [\n              {\n                name: 'zone' + this.count++,\n              },\n              {\n                name: 'zone' + this.count++,\n              },\n            ]\n          } else {\n            data = []\n          }\n\n          resolve(data)\n        }, 500)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("懒加载自定义叶子节点 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree :props=\"props\" :load=\"loadNode\" lazy show-checkbox> </el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones',\n          isLeaf: 'leaf',\n        },\n      }\n    },\n    methods: {\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'region' }])\n        }\n        if (node.level > 1) return resolve([])\n\n        setTimeout(() => {\n          const data = [\n            {\n              name: 'leaf',\n              leaf: true,\n            },\n            {\n              name: 'zone',\n            },\n          ]\n\n          resolve(data)\n        }, 500)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("默认展开和默认选中 ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可将 Tree 的某些节点设置为默认展开或默认选中", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("分别通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default-expanded-keys"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default-checked-keys"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置默认展开和默认选中的节点。需要注意的是，此时必须设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  node-key=\"id\"\n  :default-expanded-keys=\"[2, 3]\"\n  :default-checked-keys=\"[5]\"\n  :props=\"defaultProps\"\n>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            id: 1,\n            label: '一级 1',\n            children: [\n              {\n                id: 4,\n                label: '二级 1-1',\n                children: [\n                  {\n                    id: 9,\n                    label: '三级 1-1-1',\n                  },\n                  {\n                    id: 10,\n                    label: '三级 1-1-2',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            id: 2,\n            label: '一级 2',\n            children: [\n              {\n                id: 5,\n                label: '二级 2-1',\n              },\n              {\n                id: 6,\n                label: '二级 2-2',\n              },\n            ],\n          },\n          {\n            id: 3,\n            label: '一级 3',\n            children: [\n              {\n                id: 7,\n                label: '二级 3-1',\n              },\n              {\n                id: 8,\n                label: '二级 3-2',\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("禁用状态 ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可将 Tree 的某些节点设置为禁用状态", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置禁用状态。")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  node-key=\"id\"\n  :default-expanded-keys=\"[2, 3]\"\n  :default-checked-keys=\"[5]\"\n>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            id: 1,\n            label: '一级 2',\n            children: [\n              {\n                id: 3,\n                label: '二级 2-1',\n                children: [\n                  {\n                    id: 4,\n                    label: '三级 3-1-1',\n                  },\n                  {\n                    id: 5,\n                    label: '三级 3-1-2',\n                    disabled: true,\n                  },\n                ],\n              },\n              {\n                id: 2,\n                label: '二级 2-2',\n                disabled: true,\n                children: [\n                  {\n                    id: 6,\n                    label: '三级 3-2-1',\n                  },\n                  {\n                    id: 7,\n                    label: '三级 3-2-2',\n                    disabled: true,\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("树节点的选择 ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("本例展示如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  default-expand-all\n  node-key=\"id\"\n  ref=\"tree\"\n  highlight-current\n  :props=\"defaultProps\"\n>\n</el-tree>\n\n<div class=\"buttons\">\n  <el-button @click=\"getCheckedNodes\">通过 node 获取</el-button>\n  <el-button @click=\"getCheckedKeys\">通过 key 获取</el-button>\n  <el-button @click=\"setCheckedNodes\">通过 node 设置</el-button>\n  <el-button @click=\"setCheckedKeys\">通过 key 设置</el-button>\n  <el-button @click=\"resetChecked\">清空</el-button>\n</div>\n\n<script>\n  export default {\n    methods: {\n      getCheckedNodes() {\n        console.log(this.$refs.tree.getCheckedNodes())\n      },\n      getCheckedKeys() {\n        console.log(this.$refs.tree.getCheckedKeys())\n      },\n      setCheckedNodes() {\n        this.$refs.tree.setCheckedNodes([\n          {\n            id: 5,\n            label: '二级 2-1',\n          },\n          {\n            id: 9,\n            label: '三级 1-1-1',\n          },\n        ])\n      },\n      setCheckedKeys() {\n        this.$refs.tree.setCheckedKeys([3])\n      },\n      resetChecked() {\n        this.$refs.tree.setCheckedKeys([])\n      },\n    },\n\n    data() {\n      return {\n        data: [\n          {\n            id: 1,\n            label: '一级 1',\n            children: [\n              {\n                id: 4,\n                label: '二级 1-1',\n                children: [\n                  {\n                    id: 9,\n                    label: '三级 1-1-1',\n                  },\n                  {\n                    id: 10,\n                    label: '三级 1-1-2',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            id: 2,\n            label: '一级 2',\n            children: [\n              {\n                id: 5,\n                label: '二级 2-1',\n              },\n              {\n                id: 6,\n                label: '二级 2-2',\n              },\n            ],\n          },\n          {\n            id: 3,\n            label: '一级 3',\n            children: [\n              {\n                id: 7,\n                label: '二级 3-1',\n              },\n              {\n                id: 8,\n                label: '二级 3-2',\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义节点内容 ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "节点的内容支持自定义，可以在节点区添加按钮或图标等内容", -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可以通过两种方法进行树节点内容的自定义："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和 scoped slot。使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。使用 scoped slot 会传入两个参数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，分别表示当前节点的 Node 对象和当前节点的数据。注意：由于 jsfiddle 不支持 JSX 语法，所以"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("示例在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。")])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"custom-tree-container\">\n  <div class=\"block\">\n    <p>使用 render-content</p>\n    <el-tree\n      :data=\"data\"\n      show-checkbox\n      node-key=\"id\"\n      default-expand-all\n      :expand-on-click-node=\"false\"\n      :render-content=\"renderContent\"\n    >\n    </el-tree>\n  </div>\n  <div class=\"block\">\n    <p>使用 scoped slot</p>\n    <el-tree\n      :data=\"data\"\n      show-checkbox\n      node-key=\"id\"\n      default-expand-all\n      :expand-on-click-node=\"false\"\n    >\n      <template #default=\"{ node, data }\">\n        <span class=\"custom-tree-node\">\n          <span>{{ node.label }}</span>\n          <span>\n            <a @click=\"append(data)\"> Append </a>\n            <a @click=\"remove(node, data)\"> Delete </a>\n          </span>\n        </span>\n      </template>\n    </el-tree>\n  </div>\n</div>\n\n<script>\n  let id = 1000\n\n  export default {\n    data() {\n      const data = [\n        {\n          id: 1,\n          label: '一级 1',\n          children: [\n            {\n              id: 4,\n              label: '二级 1-1',\n              children: [\n                {\n                  id: 9,\n                  label: '三级 1-1-1',\n                },\n                {\n                  id: 10,\n                  label: '三级 1-1-2',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          id: 2,\n          label: '一级 2',\n          children: [\n            {\n              id: 5,\n              label: '二级 2-1',\n            },\n            {\n              id: 6,\n              label: '二级 2-2',\n            },\n          ],\n        },\n        {\n          id: 3,\n          label: '一级 3',\n          children: [\n            {\n              id: 7,\n              label: '二级 3-1',\n            },\n            {\n              id: 8,\n              label: '二级 3-2',\n            },\n          ],\n        },\n      ]\n      return {\n        data: JSON.parse(JSON.stringify(data)),\n      }\n    },\n\n    methods: {\n      append(data) {\n        const newChild = { id: id++, label: 'testtest', children: [] }\n        if (!data.children) {\n          data.children = []\n        }\n        data.children.push(newChild)\n        this.data = [...this.data]\n      },\n\n      remove(node, data) {\n        const parent = node.parent\n        const children = parent.data.children || parent.data\n        const index = children.findIndex((d) => d.id === data.id)\n        children.splice(index, 1)\n        this.data = [...this.data]\n      },\n\n      renderContent(h, { node, data, store }) {\n        return h(\n          'span',\n          {\n            class: 'custom-tree-node',\n          },\n          h('span', null, node.label),\n          h(\n            'span',\n            null,\n            h(\n              'a',\n              {\n                onClick: () => this.append(data),\n              },\n              'Append '\n            ),\n            h(\n              'a',\n              {\n                onClick: () => this.remove(node, data),\n              },\n              'Delete'\n            )\n          )\n        )\n      },\n    },\n  }\n</script>\n\n<style>\n  .custom-tree-node {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    padding-right: 8px;\n  }\n</style>\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("节点过滤 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "通过关键字过滤树节点", -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在需要对节点进行过滤时，调用 Tree 实例的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("方法，参数为关键字。需要注意的是，此时需要设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-node-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，值为过滤函数。")])], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-input placeholder=\"输入关键字进行过滤\" v-model=\"filterText\"> </el-input>\n\n<el-tree\n  class=\"filter-tree\"\n  :data=\"data\"\n  :props=\"defaultProps\"\n  default-expand-all\n  :filter-node-method=\"filterNode\"\n  ref=\"tree\"\n>\n</el-tree>\n\n<script>\n  export default {\n    watch: {\n      filterText(val) {\n        this.$refs.tree.filter(val)\n      },\n    },\n\n    methods: {\n      filterNode(value, data) {\n        if (!value) return true\n        return data.label.indexOf(value) !== -1\n      },\n    },\n\n    data() {\n      return {\n        filterText: '',\n        data: [\n          {\n            id: 1,\n            label: '一级 1',\n            children: [\n              {\n                id: 4,\n                label: '二级 1-1',\n                children: [\n                  {\n                    id: 9,\n                    label: '三级 1-1-1',\n                  },\n                  {\n                    id: 10,\n                    label: '三级 1-1-2',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            id: 2,\n            label: '一级 2',\n            children: [\n              {\n                id: 5,\n                label: '二级 2-1',\n              },\n              {\n                id: 6,\n                label: '二级 2-2',\n              },\n            ],\n          },\n          {\n            id: 3,\n            label: '一级 3',\n            children: [\n              {\n                id: 7,\n                label: '二级 3-1',\n              },\n              {\n                id: 8,\n                label: '二级 3-2',\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("手风琴模式 ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "对于同一级的节点，每次只能展开一个", -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  accordion\n  @node-click=\"handleNodeClick\"\n>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            label: '一级 1',\n            children: [\n              {\n                label: '二级 1-1',\n                children: [\n                  {\n                    label: '三级 1-1-1',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: '一级 2',\n            children: [\n              {\n                label: '二级 2-1',\n                children: [\n                  {\n                    label: '三级 2-1-1',\n                  },\n                ],\n              },\n              {\n                label: '二级 2-2',\n                children: [\n                  {\n                    label: '三级 2-2-1',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: '一级 3',\n            children: [\n              {\n                label: '二级 3-1',\n                children: [\n                  {\n                    label: '三级 3-1-1',\n                  },\n                ],\n              },\n              {\n                label: '二级 3-2',\n                children: [\n                  {\n                    label: '三级 3-2-1',\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可拖拽节点 ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "通过 draggable 属性可让节点变为可拖拽。", -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  node-key=\"id\"\n  default-expand-all\n  @node-drag-start=\"handleDragStart\"\n  @node-drag-enter=\"handleDragEnter\"\n  @node-drag-leave=\"handleDragLeave\"\n  @node-drag-over=\"handleDragOver\"\n  @node-drag-end=\"handleDragEnd\"\n  @node-drop=\"handleDrop\"\n  draggable\n  :allow-drop=\"allowDrop\"\n  :allow-drag=\"allowDrag\"\n>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            id: 1,\n            label: '一级 1',\n            children: [\n              {\n                id: 4,\n                label: '二级 1-1',\n                children: [\n                  {\n                    id: 9,\n                    label: '三级 1-1-1',\n                  },\n                  {\n                    id: 10,\n                    label: '三级 1-1-2',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            id: 2,\n            label: '一级 2',\n            children: [\n              {\n                id: 5,\n                label: '二级 2-1',\n              },\n              {\n                id: 6,\n                label: '二级 2-2',\n              },\n            ],\n          },\n          {\n            id: 3,\n            label: '一级 3',\n            children: [\n              {\n                id: 7,\n                label: '二级 3-1',\n              },\n              {\n                id: 8,\n                label: '二级 3-2',\n                children: [\n                  {\n                    id: 11,\n                    label: '三级 3-2-1',\n                  },\n                  {\n                    id: 12,\n                    label: '三级 3-2-2',\n                  },\n                  {\n                    id: 13,\n                    label: '三级 3-2-3',\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n        defaultProps: {\n          children: 'children',\n          label: 'label',\n        },\n      }\n    },\n    methods: {\n      handleDragStart(node, ev) {\n        console.log('drag start', node)\n      },\n      handleDragEnter(draggingNode, dropNode, ev) {\n        console.log('tree drag enter: ', dropNode.label)\n      },\n      handleDragLeave(draggingNode, dropNode, ev) {\n        console.log('tree drag leave: ', dropNode.label)\n      },\n      handleDragOver(draggingNode, dropNode, ev) {\n        console.log('tree drag over: ', dropNode.label)\n      },\n      handleDragEnd(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drag end: ', dropNode && dropNode.label, dropType)\n      },\n      handleDrop(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drop: ', dropNode.label, dropType)\n      },\n      allowDrop(draggingNode, dropNode, type) {\n        if (dropNode.data.label === '二级 3-1') {\n          return type !== 'inner'\n        } else {\n          return true\n        }\n      },\n      allowDrag(draggingNode) {\n        return draggingNode.data.label.indexOf('三级 3-2-2') === -1\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>展示数据</td><td>array</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>内容为空的时候展示的文本</td><td>String</td><td>—</td><td>—</td></tr><tr><td>node-key</td><td>每个树节点用来作为唯一标识的属性，整棵树应该是唯一的</td><td>String</td><td>—</td><td>—</td></tr><tr><td>props</td><td>配置选项，具体看下表</td><td>object</td><td>—</td><td>—</td></tr><tr><td>render-after-expand</td><td>是否在第一次展开某个树节点后才渲染其子节点</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>load</td><td>加载子树数据的方法，仅当 lazy 属性为 true 时生效</td><td>function(node, resolve)</td><td>—</td><td>—</td></tr><tr><td>render-content</td><td>树节点的内容区的渲染 Function</td><td>Function(h, { node, data, store })</td><td>—</td><td>—</td></tr><tr><td>highlight-current</td><td>是否高亮当前选中节点，默认值是 false。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-expand-all</td><td>是否默认展开所有节点</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>check-on-click-node</td><td>是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>auto-expand-parent</td><td>展开子节点的时候是否自动展开父节点</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>default-expanded-keys</td><td>默认展开的节点的 key 的数组</td><td>array</td><td>—</td><td>—</td></tr><tr><td>show-checkbox</td><td>节点是否可被选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>check-strictly</td><td>在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-checked-keys</td><td>默认勾选的节点的 key 的数组</td><td>array</td><td>—</td><td>—</td></tr><tr><td>current-node-key</td><td>当前选中的节点</td><td>string, number</td><td>—</td><td>—</td></tr><tr><td>filter-node-method</td><td>对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏</td><td>Function(value, data, node)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>是否每次只打开一个同级树节点展开</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indent</td><td>相邻级节点间的水平缩进，单位为像素</td><td>number</td><td>—</td><td>16</td></tr><tr><td>icon-class</td><td>自定义树节点的图标</td><td>string</td><td>-</td><td>-</td></tr><tr><td>lazy</td><td>是否懒加载子节点，需与 load 方法结合使用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>draggable</td><td>是否开启拖拽节点功能</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-drag</td><td>判断节点能否被拖拽</td><td>Function(node)</td><td>—</td><td>—</td></tr><tr><td>allow-drop</td><td>拖拽时判定目标节点能否被放置。<code>type</code> 参数有三种情况：&#39;prev&#39;、&#39;inner&#39; 和 &#39;next&#39;，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后</td><td>Function(draggingNode, dropNode, type)</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("props ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>指定节点标签为节点对象的某个属性值</td><td>string, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>children</td><td>指定子树为节点对象的某个属性值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>指定节点选择框是否禁用为节点对象的某个属性值</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>isLeaf</td><td>指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("方法 ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p><code>Tree</code> 内部使用了 Node 类型的对象来包装用户传入的数据，用来保存目前节点的状态。 <code>Tree</code> 拥有如下方法：</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>filter</td><td>对树节点进行筛选操作</td><td>接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数</td></tr><tr><td>updateKeyChildren</td><td>通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性</td><td>(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组</td></tr><tr><td>getCheckedNodes</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点所组成的数组</td><td>(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 <code>false</code> 2. 是否包含半选节点，默认值为 <code>false</code></td></tr><tr><td>setCheckedNodes</td><td>设置目前勾选的节点，使用此方法必须设置 node-key 属性</td><td>(nodes) 接收勾选节点数据的数组</td></tr><tr><td>getCheckedKeys</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点的 key 所组成的数组</td><td>(leafOnly) 接收一个 boolean 类型的参数，若为 <code>true</code> 则仅返回被选中的叶子节点的 keys，默认值为 <code>false</code></td></tr><tr><td>setCheckedKeys</td><td>通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性</td><td>(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 <code>true</code> 则仅设置叶子节点的选中状态，默认值为 <code>false</code></td></tr><tr><td>setChecked</td><td>通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性</td><td>(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false</td></tr><tr><td>getHalfCheckedNodes</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前半选中的节点所组成的数组</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前半选中的节点的 key 所组成的数组</td><td>-</td></tr><tr><td>getCurrentKey</td><td>获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null</td><td>—</td></tr><tr><td>getCurrentNode</td><td>获取当前被选中节点的 data，若没有节点被选中则返回 null</td><td>—</td></tr><tr><td>setCurrentKey</td><td>通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td><td>(key, shouldAutoExpandParent=true) 1. 待被选节点的 key，若为 null 则取消当前高亮的节点 2. 是否扩展父节点</td></tr><tr><td>setCurrentNode</td><td>通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td><td>(node, shouldAutoExpandParent=true) 1. 待被选节点的 node 2. 是否扩展父节点</td></tr><tr><td>getNode</td><td>根据 data 或者 key 拿到 Tree 组件中的 node</td><td>(data) 要获得 node 的 key 或者 data</td></tr><tr><td>remove</td><td>删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性</td><td>(data) 要删除的节点的 data 或者 node</td></tr><tr><td>append</td><td>为 Tree 中的一个节点追加一个子节点</td><td>(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node</td></tr><tr><td>insertBefore</td><td>为 Tree 的一个节点的前面增加一个节点</td><td>(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node</td></tr><tr><td>insertAfter</td><td>为 Tree 的一个节点的后面增加一个节点</td><td>(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node</td></tr></tbody></table>", 2);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>node-click</td><td>节点被点击时的回调</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td></tr><tr><td>node-contextmenu</td><td>当某一节点被鼠标右键点击时会触发该事件</td><td>共四个参数，依次为：event、传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td></tr><tr><td>check-change</td><td>节点选中状态发生变化时的回调</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点</td></tr><tr><td>check</td><td>当复选框被点击的时候触发</td><td>共两个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性</td></tr><tr><td>current-change</td><td>当前选中节点变化时触发的事件</td><td>共两个参数，依次为：当前节点的数据，当前节点的 Node 对象</td></tr><tr><td>node-expand</td><td>节点被展开时触发的事件</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身</td></tr><tr><td>node-collapse</td><td>节点被关闭时触发的事件</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身</td></tr><tr><td>node-drag-start</td><td>节点开始拖拽时触发的事件</td><td>共两个参数，依次为：被拖拽节点对应的 Node、event</td></tr><tr><td>node-drag-enter</td><td>拖拽进入其他节点时触发的事件</td><td>共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event</td></tr><tr><td>node-drag-leave</td><td>拖拽离开某个节点时触发的事件</td><td>共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event</td></tr><tr><td>node-drag-over</td><td>在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）</td><td>共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event</td></tr><tr><td>node-drag-end</td><td>拖拽结束时（可能未成功）触发的事件</td><td>共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event</td></tr><tr><td>node-drop</td><td>拖拽成功完成时触发的事件</td><td>共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event</td></tr></tbody></table>", 1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Scoped Slot ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义树节点的内容，参数为 { node, data }")])])], -1);

function treevue_type_template_id_cf06e5e6_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", treevue_type_template_id_cf06e5e6_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tree-shu-xing-kong-jian",
    content: "Tree 树形控件",
    href: "#tree-shu-xing-kong-jian",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [treevue_type_template_id_cf06e5e6_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tree-shu-xing-kong-jian"
    })]),
    _: 1
  }), treevue_type_template_id_cf06e5e6_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [treevue_type_template_id_cf06e5e6_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), treevue_type_template_id_cf06e5e6_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [treevue_type_template_id_cf06e5e6_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-xuan-ze",
    content: "可选择",
    href: "#ke-xuan-ze",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [treevue_type_template_id_cf06e5e6_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-xuan-ze"
    })]),
    _: 1
  }), treevue_type_template_id_cf06e5e6_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "lan-jia-zai-zi-ding-yi-ye-zi-jie-dian",
    content: "懒加载自定义叶子节点",
    href: "#lan-jia-zai-zi-ding-yi-ye-zi-jie-dian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#lan-jia-zai-zi-ding-yi-ye-zi-jie-dian"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "mo-ren-zhan-kai-he-mo-ren-xuan-zhong",
    content: "默认展开和默认选中",
    href: "#mo-ren-zhan-kai-he-mo-ren-xuan-zhong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#mo-ren-zhan-kai-he-mo-ren-xuan-zhong"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jin-yong-zhuang-tai",
    content: "禁用状态",
    href: "#jin-yong-zhuang-tai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jin-yong-zhuang-tai"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-jie-dian-de-xuan-ze",
    content: "树节点的选择",
    href: "#shu-jie-dian-de-xuan-ze",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-jie-dian-de-xuan-ze"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-jie-dian-nei-rong",
    content: "自定义节点内容",
    href: "#zi-ding-yi-jie-dian-nei-rong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-jie-dian-nei-rong"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jie-dian-guo-lu",
    content: "节点过滤",
    href: "#jie-dian-guo-lu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jie-dian-guo-lu"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shou-feng-qin-mo-shi",
    content: "手风琴模式",
    href: "#shou-feng-qin-mo-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shou-feng-qin-mo-shi"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-tuo-zhuai-jie-dian",
    content: "可拖拽节点",
    href: "#ke-tuo-zhuai-jie-dian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-tuo-zhuai-jie-dian"
    })]),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
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
    id: "fang-fa",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "scoped-slot",
    content: "Scoped Slot",
    href: "#scoped-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#scoped-slot"
    })]),
    _: 1
  }), _hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/tree.md?vue&type=template&id=cf06e5e6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/tree.md?vue&type=script&lang=ts

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
              label: '一级 1',
              children: [{
                label: '二级 1-1',
                children: [{
                  label: '三级 1-1-1'
                }]
              }]
            }, {
              label: '一级 2',
              children: [{
                label: '二级 2-1',
                children: [{
                  label: '三级 2-1-1'
                }]
              }, {
                label: '二级 2-2',
                children: [{
                  label: '三级 2-2-1'
                }]
              }]
            }, {
              label: '一级 3',
              children: [{
                label: '二级 3-1',
                children: [{
                  label: '三级 3-1-1'
                }]
              }, {
                label: '二级 3-2',
                children: [{
                  label: '三级 3-2-1'
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
                name: 'region1'
              }, {
                name: 'region2'
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
              label: '一级 1',
              children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                  id: 9,
                  label: '三级 1-1-1'
                }, {
                  id: 10,
                  label: '三级 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: '一级 2',
              children: [{
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }]
            }, {
              id: 3,
              label: '一级 3',
              children: [{
                id: 7,
                label: '二级 3-1'
              }, {
                id: 8,
                label: '二级 3-2'
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
          "default-checked-keys": [5]
        }, null, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
          return {
            data: [{
              id: 1,
              label: '一级 2',
              children: [{
                id: 3,
                label: '二级 2-1',
                children: [{
                  id: 4,
                  label: '三级 3-1-1'
                }, {
                  id: 5,
                  label: '三级 3-1-2',
                  disabled: true
                }]
              }, {
                id: 2,
                label: '二级 2-2',
                disabled: true,
                children: [{
                  id: 6,
                  label: '三级 3-2-1'
                }, {
                  id: 7,
                  label: '三级 3-2-2',
                  disabled: true
                }]
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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("通过 node 获取");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("通过 key 获取");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("通过 node 设置");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("通过 key 设置");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("清空");

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
              label: '二级 2-1'
            }, {
              id: 9,
              label: '三级 1-1-1'
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
              label: '一级 1',
              children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                  id: 9,
                  label: '三级 1-1-1'
                }, {
                  id: 10,
                  label: '三级 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: '一级 2',
              children: [{
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }]
            }, {
              id: 3,
              label: '一级 3',
              children: [{
                id: 7,
                label: '二级 3-1'
              }, {
                id: 8,
                label: '二级 3-2'
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

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("p", null, "使用 render-content", -1);

      const _hoisted_4 = {
        class: "block"
      };

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("p", null, "使用 scoped slot", -1);

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
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
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
          placeholder: "输入关键字进行过滤",
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
              label: '一级 1',
              children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                  id: 9,
                  label: '三级 1-1-1'
                }, {
                  id: 10,
                  label: '三级 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: '一级 2',
              children: [{
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }]
            }, {
              id: 3,
              label: '一级 3',
              children: [{
                id: 7,
                label: '二级 3-1'
              }, {
                id: 8,
                label: '二级 3-2'
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
              label: '一级 1',
              children: [{
                label: '二级 1-1',
                children: [{
                  label: '三级 1-1-1'
                }]
              }]
            }, {
              label: '一级 2',
              children: [{
                label: '二级 2-1',
                children: [{
                  label: '三级 2-1-1'
                }]
              }, {
                label: '二级 2-2',
                children: [{
                  label: '三级 2-2-1'
                }]
              }]
            }, {
              label: '一级 3',
              children: [{
                label: '二级 3-1',
                children: [{
                  label: '三级 3-1-1'
                }]
              }, {
                label: '二级 3-2',
                children: [{
                  label: '三级 3-2-1'
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
              id: 1,
              label: '一级 1',
              children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                  id: 9,
                  label: '三级 1-1-1'
                }, {
                  id: 10,
                  label: '三级 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: '一级 2',
              children: [{
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }]
            }, {
              id: 3,
              label: '一级 3',
              children: [{
                id: 7,
                label: '二级 3-1'
              }, {
                id: 8,
                label: '二级 3-2',
                children: [{
                  id: 11,
                  label: '三级 3-2-1'
                }, {
                  id: 12,
                  label: '三级 3-2-2'
                }, {
                  id: 13,
                  label: '三级 3-2-3'
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
            if (dropNode.data.label === '二级 3-1') {
              return type !== 'inner';
            } else {
              return true;
            }
          },

          allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
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
// CONCATENATED MODULE: ./website/docs/zh-CN/tree.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/tree.md



treevue_type_script_lang_ts.render = treevue_type_template_id_cf06e5e6_render

/* harmony default export */ var tree = __webpack_exports__["default"] = (treevue_type_script_lang_ts);

/***/ })

}]);