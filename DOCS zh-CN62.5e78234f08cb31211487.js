(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[255],{

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tree.md?vue&type=template&id=14e21131

var treevue_type_template_id_14e21131_hoisted_1 = {
  class: "content element-doc"
};

var treevue_type_template_id_14e21131_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tree-shu-xing-kong-jian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tree-shu-xing-kong-jian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tree 树形控件")], -1);

var treevue_type_template_id_14e21131_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "用清晰的层级结构展示信息，可展开或折叠。", -1);

var treevue_type_template_id_14e21131_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var treevue_type_template_id_14e21131_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "基础的树形结构展示。", -1);

var treevue_type_template_id_14e21131_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree :data=\"data\" :props=\"defaultProps\" @node-click=\"handleNodeClick\"></el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: '一级 1',\n          children: [{\n            label: '二级 1-1',\n            children: [{\n              label: '三级 1-1-1'\n            }]\n          }]\n        }, {\n          label: '一级 2',\n          children: [{\n            label: '二级 2-1',\n            children: [{\n              label: '三级 2-1-1'\n            }]\n          }, {\n            label: '二级 2-2',\n            children: [{\n              label: '三级 2-2-1'\n            }]\n          }]\n        }, {\n          label: '一级 3',\n          children: [{\n            label: '二级 3-1',\n            children: [{\n              label: '三级 3-1-1'\n            }]\n          }, {\n            label: '二级 3-2',\n            children: [{\n              label: '三级 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ke-xuan-ze"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-xuan-ze"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 可选择")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "适用于需要选择层级时使用。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "本例还展示了动态加载节点数据的方法。")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :props=\"props\"\n  :load=\"loadNode\"\n  lazy\n  show-checkbox\n  @check-change=\"handleCheckChange\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones'\n        },\n        count: 1\n      };\n    },\n    methods: {\n      handleCheckChange(data, checked, indeterminate) {\n        console.log(data, checked, indeterminate);\n      },\n      handleNodeClick(data) {\n        console.log(data);\n      },\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'region1' }, { name: 'region2' }]);\n        }\n        if (node.level > 3) return resolve([]);\n\n        var hasChild;\n        if (node.data.name === 'region1') {\n          hasChild = true;\n        } else if (node.data.name === 'region2') {\n          hasChild = false;\n        } else {\n          hasChild = Math.random() > 0.5;\n        }\n\n        setTimeout(() => {\n          var data;\n          if (hasChild) {\n            data = [{\n              name: 'zone' + this.count++\n            }, {\n              name: 'zone' + this.count++\n            }];\n          } else {\n            data = [];\n          }\n\n          resolve(data);\n        }, 500);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "lan-jia-zai-zi-ding-yi-xie-zi-jie-dian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#lan-jia-zai-zi-ding-yi-xie-zi-jie-dian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 懒加载自定义叶子节点")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :props=\"props\"\n  :load=\"loadNode\"\n  lazy\n  show-checkbox>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones',\n          isLeaf: 'leaf'\n        },\n      };\n    },\n    methods: {\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'region' }]);\n        }\n        if (node.level > 1) return resolve([]);\n\n        setTimeout(() => {\n          const data = [{\n            name: 'leaf',\n            leaf: true\n          }, {\n            name: 'zone'\n          }];\n\n          resolve(data);\n        }, 500);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "mo-ren-zhan-kai-he-mo-ren-xuan-zhong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mo-ren-zhan-kai-he-mo-ren-xuan-zhong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 默认展开和默认选中")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可将 Tree 的某些节点设置为默认展开或默认选中", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("分别通过"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "default-expanded-keys"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "default-checked-keys"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置默认展开和默认选中的节点。需要注意的是，此时必须设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  node-key=\"id\"\n  :default-expanded-keys=\"[2, 3]\"\n  :default-checked-keys=\"[5]\"\n  :props=\"defaultProps\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: '一级 1',\n          children: [{\n            id: 4,\n            label: '二级 1-1',\n            children: [{\n              id: 9,\n              label: '三级 1-1-1'\n            }, {\n              id: 10,\n              label: '三级 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: '一级 2',\n          children: [{\n            id: 5,\n            label: '二级 2-1'\n          }, {\n            id: 6,\n            label: '二级 2-2'\n          }]\n        }, {\n          id: 3,\n          label: '一级 3',\n          children: [{\n            id: 7,\n            label: '二级 3-1'\n          }, {\n            id: 8,\n            label: '二级 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可将 Tree 的某些节点设置为禁用状态", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置禁用状态。")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  node-key=\"id\"\n  :default-expanded-keys=\"[2, 3]\"\n  :default-checked-keys=\"[5]\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: '一级 2',\n          children: [{\n            id: 3,\n            label: '二级 2-1',\n            children: [{\n              id: 4,\n              label: '三级 3-1-1'\n            }, {\n              id: 5,\n              label: '三级 3-1-2',\n              disabled: true\n            }]\n          }, {\n            id: 2,\n            label: '二级 2-2',\n            disabled: true,\n            children: [{\n              id: 6,\n              label: '三级 3-2-1'\n            }, {\n              id: 7,\n              label: '三级 3-2-2',\n              disabled: true\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "shu-jie-dian-de-xuan-ze"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shu-jie-dian-de-xuan-ze"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 树节点的选择")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("本例展示如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  default-expand-all\n  node-key=\"id\"\n  ref=\"tree\"\n  highlight-current\n  :props=\"defaultProps\">\n</el-tree>\n\n<div class=\"buttons\">\n  <el-button @click=\"getCheckedNodes\">通过 node 获取</el-button>\n  <el-button @click=\"getCheckedKeys\">通过 key 获取</el-button>\n  <el-button @click=\"setCheckedNodes\">通过 node 设置</el-button>\n  <el-button @click=\"setCheckedKeys\">通过 key 设置</el-button>\n  <el-button @click=\"resetChecked\">清空</el-button>\n</div>\n\n<script>\n  export default {\n    methods: {\n      getCheckedNodes() {\n        console.log(this.$refs.tree.getCheckedNodes());\n      },\n      getCheckedKeys() {\n        console.log(this.$refs.tree.getCheckedKeys());\n      },\n      setCheckedNodes() {\n        this.$refs.tree.setCheckedNodes([{\n          id: 5,\n          label: '二级 2-1'\n        }, {\n          id: 9,\n          label: '三级 1-1-1'\n        }]);\n      },\n      setCheckedKeys() {\n        this.$refs.tree.setCheckedKeys([3]);\n      },\n      resetChecked() {\n        this.$refs.tree.setCheckedKeys([]);\n      }\n    },\n\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: '一级 1',\n          children: [{\n            id: 4,\n            label: '二级 1-1',\n            children: [{\n              id: 9,\n              label: '三级 1-1-1'\n            }, {\n              id: 10,\n              label: '三级 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: '一级 2',\n          children: [{\n            id: 5,\n            label: '二级 2-1'\n          }, {\n            id: 6,\n            label: '二级 2-2'\n          }]\n        }, {\n          id: 3,\n          label: '一级 3',\n          children: [{\n            id: 7,\n            label: '二级 3-1'\n          }, {\n            id: 8,\n            label: '二级 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-jie-dian-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-jie-dian-nei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义节点内容")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "节点的内容支持自定义，可以在节点区添加按钮或图标等内容", -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可以通过两种方法进行树节点内容的自定义："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("和 scoped slot。使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。使用 scoped slot 会传入两个参数"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，分别表示当前节点的 Node 对象和当前节点的数据。注意：由于 jsfiddle 不支持 JSX 语法，所以"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("示例在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。")])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"custom-tree-container\">\n  <div class=\"block\">\n    <p>使用 render-content</p>\n    <el-tree\n      :data=\"data\"\n      show-checkbox\n      node-key=\"id\"\n      default-expand-all\n      :expand-on-click-node=\"false\"\n      :render-content=\"renderContent\">\n    </el-tree>\n  </div>\n  <div class=\"block\">\n    <p>使用 scoped slot</p>\n    <el-tree\n      :data=\"data\"\n      show-checkbox\n      node-key=\"id\"\n      default-expand-all\n      :expand-on-click-node=\"false\">\n      <template #default=\"{ node, data }\">\n        <span class=\"custom-tree-node\">\n          <span>{{ node.label }}</span>\n          <span>\n            <a\n              @click=\"append(data)\">\n              Append\n            </a>\n            <a\n              @click=\"remove(node, data)\">\n              Delete\n            </a>\n          </span>\n        </span>\n      </template>\n    </el-tree>\n  </div>\n</div>\n\n<script>\n  let id = 1000;\n\n  export default {\n    data() {\n      const data = [{\n        id: 1,\n        label: '一级 1',\n        children: [{\n          id: 4,\n          label: '二级 1-1',\n          children: [{\n            id: 9,\n            label: '三级 1-1-1'\n          }, {\n            id: 10,\n            label: '三级 1-1-2'\n          }]\n        }]\n      }, {\n        id: 2,\n        label: '一级 2',\n        children: [{\n          id: 5,\n          label: '二级 2-1'\n        }, {\n          id: 6,\n          label: '二级 2-2'\n        }]\n      }, {\n        id: 3,\n        label: '一级 3',\n        children: [{\n          id: 7,\n          label: '二级 3-1'\n        }, {\n          id: 8,\n          label: '二级 3-2'\n        }]\n      }];\n      return {\n        data: JSON.parse(JSON.stringify(data)),\n      }\n    },\n\n    methods: {\n      append(data) {\n        const newChild = { id: id++, label: 'testtest', children: [] };\n        if (!data.children) {\n          data.children = []\n        }\n        data.children.push(newChild);\n        this.data = [...this.data]\n      },\n\n      remove(node, data) {\n        const parent = node.parent;\n        const children = parent.data.children || parent.data;\n        const index = children.findIndex(d => d.id === data.id);\n        children.splice(index, 1);\n        this.data = [...this.data]\n      },\n\n      renderContent(h, { node, data, store }) {\n        return h(\"span\", {\n          class: \"custom-tree-node\"\n        }, h(\"span\", null, node.label), h(\"span\", null, h(\"a\", {\n          onClick: () => this.append(data)\n        }, \"Append \"), h(\"a\", {\n          onClick: () => this.remove(node, data)\n        }, \"Delete\")));\n      }\n    }\n  };\n</script>\n\n<style>\n  .custom-tree-node {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    padding-right: 8px;\n  }\n</style>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "jie-dian-guo-lu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jie-dian-guo-lu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 节点过滤")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "通过关键字过滤树节点", -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("在需要对节点进行过滤时，调用 Tree 实例的"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("方法，参数为关键字。需要注意的是，此时需要设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-node-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，值为过滤函数。")])], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  placeholder=\"输入关键字进行过滤\"\n  v-model=\"filterText\">\n</el-input>\n\n<el-tree\n  class=\"filter-tree\"\n  :data=\"data\"\n  :props=\"defaultProps\"\n  default-expand-all\n  :filter-node-method=\"filterNode\"\n  ref=\"tree\">\n</el-tree>\n\n<script>\n  export default {\n    watch: {\n      filterText(val) {\n        this.$refs.tree.filter(val);\n      }\n    },\n\n    methods: {\n      filterNode(value, data) {\n        if (!value) return true;\n        return data.label.indexOf(value) !== -1;\n      }\n    },\n\n    data() {\n      return {\n        filterText: '',\n        data: [{\n          id: 1,\n          label: '一级 1',\n          children: [{\n            id: 4,\n            label: '二级 1-1',\n            children: [{\n              id: 9,\n              label: '三级 1-1-1'\n            }, {\n              id: 10,\n              label: '三级 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: '一级 2',\n          children: [{\n            id: 5,\n            label: '二级 2-1'\n          }, {\n            id: 6,\n            label: '二级 2-2'\n          }]\n        }, {\n          id: 3,\n          label: '一级 3',\n          children: [{\n            id: 7,\n            label: '二级 3-1'\n          }, {\n            id: 8,\n            label: '二级 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "shou-feng-qin-mo-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shou-feng-qin-mo-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 手风琴模式")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "对于同一级的节点，每次只能展开一个", -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  accordion\n  @node-click=\"handleNodeClick\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: '一级 1',\n          children: [{\n            label: '二级 1-1',\n            children: [{\n              label: '三级 1-1-1'\n            }]\n          }]\n        }, {\n          label: '一级 2',\n          children: [{\n            label: '二级 2-1',\n            children: [{\n              label: '三级 2-1-1'\n            }]\n          }, {\n            label: '二级 2-2',\n            children: [{\n              label: '三级 2-2-1'\n            }]\n          }]\n        }, {\n          label: '一级 3',\n          children: [{\n            label: '二级 3-1',\n            children: [{\n              label: '三级 3-1-1'\n            }]\n          }, {\n            label: '二级 3-2',\n            children: [{\n              label: '三级 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ke-tuo-zhuai-jie-dian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-tuo-zhuai-jie-dian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 可拖拽节点")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "通过 draggable 属性可让节点变为可拖拽。", -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  node-key=\"id\"\n  default-expand-all\n  @node-drag-start=\"handleDragStart\"\n  @node-drag-enter=\"handleDragEnter\"\n  @node-drag-leave=\"handleDragLeave\"\n  @node-drag-over=\"handleDragOver\"\n  @node-drag-end=\"handleDragEnd\"\n  @node-drop=\"handleDrop\"\n  draggable\n  :allow-drop=\"allowDrop\"\n  :allow-drag=\"allowDrag\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: '一级 1',\n          children: [{\n            id: 4,\n            label: '二级 1-1',\n            children: [{\n              id: 9,\n              label: '三级 1-1-1'\n            }, {\n              id: 10,\n              label: '三级 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: '一级 2',\n          children: [{\n            id: 5,\n            label: '二级 2-1'\n          }, {\n            id: 6,\n            label: '二级 2-2'\n          }]\n        }, {\n          id: 3,\n          label: '一级 3',\n          children: [{\n            id: 7,\n            label: '二级 3-1'\n          }, {\n            id: 8,\n            label: '二级 3-2',\n            children: [{\n             id: 11,\n              label: '三级 3-2-1'\n            }, {\n              id: 12,\n              label: '三级 3-2-2'\n            }, {\n              id: 13,\n              label: '三级 3-2-3'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleDragStart(node, ev) {\n        console.log('drag start', node);\n      },\n      handleDragEnter(draggingNode, dropNode, ev) {\n        console.log('tree drag enter: ', dropNode.label);\n      },\n      handleDragLeave(draggingNode, dropNode, ev) {\n        console.log('tree drag leave: ', dropNode.label);\n      },\n      handleDragOver(draggingNode, dropNode, ev) {\n        console.log('tree drag over: ', dropNode.label);\n      },\n      handleDragEnd(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drag end: ', dropNode && dropNode.label, dropType);\n      },\n      handleDrop(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drop: ', dropNode.label, dropType);\n      },\n      allowDrop(draggingNode, dropNode, type) {\n        if (dropNode.data.label === '二级 3-1') {\n          return type !== 'inner';\n        } else {\n          return true;\n        }\n      },\n      allowDrag(draggingNode) {\n        return draggingNode.data.label.indexOf('三级 3-2-2') === -1;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>展示数据</td><td>array</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>内容为空的时候展示的文本</td><td>String</td><td>—</td><td>—</td></tr><tr><td>node-key</td><td>每个树节点用来作为唯一标识的属性，整棵树应该是唯一的</td><td>String</td><td>—</td><td>—</td></tr><tr><td>props</td><td>配置选项，具体看下表</td><td>object</td><td>—</td><td>—</td></tr><tr><td>render-after-expand</td><td>是否在第一次展开某个树节点后才渲染其子节点</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>load</td><td>加载子树数据的方法，仅当 lazy 属性为true 时生效</td><td>function(node, resolve)</td><td>—</td><td>—</td></tr><tr><td>render-content</td><td>树节点的内容区的渲染 Function</td><td>Function(h, { node, data, store }</td><td>—</td><td>—</td></tr><tr><td>highlight-current</td><td>是否高亮当前选中节点，默认值是 false。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-expand-all</td><td>是否默认展开所有节点</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>check-on-click-node</td><td>是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>auto-expand-parent</td><td>展开子节点的时候是否自动展开父节点</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>default-expanded-keys</td><td>默认展开的节点的 key 的数组</td><td>array</td><td>—</td><td>—</td></tr><tr><td>show-checkbox</td><td>节点是否可被选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>check-strictly</td><td>在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-checked-keys</td><td>默认勾选的节点的 key 的数组</td><td>array</td><td>—</td><td>—</td></tr><tr><td>current-node-key</td><td>当前选中的节点</td><td>string, number</td><td>—</td><td>—</td></tr><tr><td>filter-node-method</td><td>对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏</td><td>Function(value, data, node)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>是否每次只打开一个同级树节点展开</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indent</td><td>相邻级节点间的水平缩进，单位为像素</td><td>number</td><td>—</td><td>16</td></tr><tr><td>icon-class</td><td>自定义树节点的图标</td><td>string</td><td>-</td><td>-</td></tr><tr><td>lazy</td><td>是否懒加载子节点，需与 load 方法结合使用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>draggable</td><td>是否开启拖拽节点功能</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-drag</td><td>判断节点能否被拖拽</td><td>Function(node)</td><td>—</td><td>—</td></tr><tr><td>allow-drop</td><td>拖拽时判定目标节点能否被放置。<code>type</code> 参数有三种情况：&#39;prev&#39;、&#39;inner&#39; 和 &#39;next&#39;，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后</td><td>Function(draggingNode, dropNode, type)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>指定节点标签为节点对象的某个属性值</td><td>string, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>children</td><td>指定子树为节点对象的某个属性值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>指定节点选择框是否禁用为节点对象的某个属性值</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>isLeaf</td><td>指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"fang-fa\"><a class=\"header-anchor\" href=\"#fang-fa\">¶</a> 方法</h3><p><code>Tree</code> 内部使用了 Node 类型的对象来包装用户传入的数据，用来保存目前节点的状态。 <code>Tree</code> 拥有如下方法：</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>filter</td><td>对树节点进行筛选操作</td><td>接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数</td></tr><tr><td>updateKeyChildren</td><td>通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性</td><td>(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组</td></tr><tr><td>getCheckedNodes</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点所组成的数组</td><td>(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 <code>false</code> 2. 是否包含半选节点，默认值为 <code>false</code></td></tr><tr><td>setCheckedNodes</td><td>设置目前勾选的节点，使用此方法必须设置 node-key 属性</td><td>(nodes) 接收勾选节点数据的数组</td></tr><tr><td>getCheckedKeys</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点的 key 所组成的数组</td><td>(leafOnly) 接收一个 boolean 类型的参数，若为 <code>true</code> 则仅返回被选中的叶子节点的 keys，默认值为 <code>false</code></td></tr><tr><td>setCheckedKeys</td><td>通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性</td><td>(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 <code>true</code> 则仅设置叶子节点的选中状态，默认值为 <code>false</code></td></tr><tr><td>setChecked</td><td>通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性</td><td>(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false</td></tr><tr><td>getHalfCheckedNodes</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前半选中的节点所组成的数组</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前半选中的节点的 key 所组成的数组</td><td>-</td></tr><tr><td>getCurrentKey</td><td>获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null</td><td>—</td></tr><tr><td>getCurrentNode</td><td>获取当前被选中节点的 data，若没有节点被选中则返回 null</td><td>—</td></tr><tr><td>setCurrentKey</td><td>通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td><td>(key) 待被选节点的 key，若为 null 则取消当前高亮的节点</td></tr><tr><td>setCurrentNode</td><td>通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td><td>(node) 待被选节点的 node</td></tr><tr><td>getNode</td><td>根据 data 或者 key 拿到 Tree 组件中的 node</td><td>(data) 要获得 node 的 key 或者 data</td></tr><tr><td>remove</td><td>删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性</td><td>(data) 要删除的节点的 data 或者 node</td></tr><tr><td>append</td><td>为 Tree 中的一个节点追加一个子节点</td><td>(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node</td></tr><tr><td>insertBefore</td><td>为 Tree 的一个节点的前面增加一个节点</td><td>(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node</td></tr><tr><td>insertAfter</td><td>为 Tree 的一个节点的后面增加一个节点</td><td>(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>node-click</td><td>节点被点击时的回调</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td></tr><tr><td>node-contextmenu</td><td>当某一节点被鼠标右键点击时会触发该事件</td><td>共四个参数，依次为：event、传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td></tr><tr><td>check-change</td><td>节点选中状态发生变化时的回调</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点</td></tr><tr><td>check</td><td>当复选框被点击的时候触发</td><td>共两个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性</td></tr><tr><td>current-change</td><td>当前选中节点变化时触发的事件</td><td>共两个参数，依次为：当前节点的数据，当前节点的 Node 对象</td></tr><tr><td>node-expand</td><td>节点被展开时触发的事件</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身</td></tr><tr><td>node-collapse</td><td>节点被关闭时触发的事件</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身</td></tr><tr><td>node-drag-start</td><td>节点开始拖拽时触发的事件</td><td>共两个参数，依次为：被拖拽节点对应的 Node、event</td></tr><tr><td>node-drag-enter</td><td>拖拽进入其他节点时触发的事件</td><td>共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event</td></tr><tr><td>node-drag-leave</td><td>拖拽离开某个节点时触发的事件</td><td>共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event</td></tr><tr><td>node-drag-over</td><td>在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）</td><td>共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event</td></tr><tr><td>node-drag-end</td><td>拖拽结束时（可能未成功）触发的事件</td><td>共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event</td></tr><tr><td>node-drop</td><td>拖拽成功完成时触发的事件</td><td>共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event</td></tr></tbody></table><h3 id=\"scoped-slot\"><a class=\"header-anchor\" href=\"#scoped-slot\">¶</a> Scoped Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>自定义树节点的内容，参数为 { node, data }</td></tr></tbody></table>", 11);

function treevue_type_template_id_14e21131_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", treevue_type_template_id_14e21131_hoisted_1, [treevue_type_template_id_14e21131_hoisted_2, treevue_type_template_id_14e21131_hoisted_3, treevue_type_template_id_14e21131_hoisted_4, treevue_type_template_id_14e21131_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [treevue_type_template_id_14e21131_hoisted_6];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/tree.md?vue&type=template&id=14e21131

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tree.md?vue&type=script&lang=ts


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
          "default-checked-keys": [5]
        }, null, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
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

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("通过 node 获取");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("通过 key 获取");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("通过 node 设置");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("通过 key 设置");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("清空");

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
              label: '二级 2-1'
            }, {
              id: 9,
              label: '三级 1-1-1'
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

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "使用 render-content", -1);

      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", null, "使用 scoped slot", -1);

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
          placeholder: "输入关键字进行过滤",
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
            if (dropNode.data.label === '二级 3-1') {
              return type !== 'inner';
            } else {
              return true;
            }
          },
          allowDrag: function allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/tree.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/tree.md



treevue_type_script_lang_ts.render = treevue_type_template_id_14e21131_render

/* harmony default export */ var tree = __webpack_exports__["default"] = (treevue_type_script_lang_ts);

/***/ })

}]);