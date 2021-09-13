(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[353],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/transfer.md?vue&type=template&id=458e29b8

const transfervue_type_template_id_458e29b8_hoisted_1 = {
  class: "content element-doc"
};

const transfervue_type_template_id_458e29b8_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Transfer 穿梭框 ");

const transfervue_type_template_id_458e29b8_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const transfervue_type_template_id_458e29b8_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Transfer 的数据通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性传入。数据需要是一个对象数组，每个对象有以下属性："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 为数据的唯一性标识，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 为显示文本，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定至 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的变量，值为数据项的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 绑定的变量赋予一个初始值。")])], -1);

const transfervue_type_template_id_458e29b8_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-transfer v-model=\"value\" :data=\"data\" />\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = (_) => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `备选项 ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      return {\n        data: generateData(),\n        value: [1, 4],\n      }\n    },\n  }\n</script>\n")], -1);

const transfervue_type_template_id_458e29b8_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可搜索 ");

const transfervue_type_template_id_458e29b8_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "在数据很多的情况下，可以对数据进行搜索和过滤。", -1);

const transfervue_type_template_id_458e29b8_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 即可开启搜索模式。默认情况下，若数据项的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 定义自己的搜索逻辑。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，则会在搜索结果中显示对应的数据项。")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    filterable\n    :filter-method=\"filterMethod\"\n    filter-placeholder=\"请输入城市拼音\"\n    :data=\"data\"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = (_) => {\n        const data = []\n        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']\n        const spell = [\n          'shanghai',\n          'beijing',\n          'guangzhou',\n          'shenzhen',\n          'nanjing',\n          'xian',\n          'chengdu',\n        ]\n        cities.forEach((city, index) => {\n          data.push({\n            label: city,\n            key: index,\n            spell: spell[index],\n          })\n        })\n        return data\n      }\n      return {\n        data: generateData(),\n        value: [],\n        filterMethod(query, item) {\n          return item.spell.indexOf(query) > -1\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可自定义 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "titles"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "button-texts"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。数据项的渲染还可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "scoped-slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 进行自定义。对于列表底部的内容区，提供了两个具名 slot："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left-footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "right-footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。此外，如果希望某些数据项在初始化时就被勾选，可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left-default-checked"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "right-default-checked"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性。最后，本例还展示了 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 事件的用法。注意：由于 jsfiddle 不支持 JSX 语法，所以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 自定义数据项的例子在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <p style=\"text-align: center; margin: 0 0 20px\">\n    使用 render-content 自定义数据项\n  </p>\n  <div style=\"text-align: center\">\n    <el-transfer\n      v-model=\"leftValue\"\n      style=\"text-align: left; display: inline-block\"\n      filterable\n      :left-default-checked=\"[2, 3]\"\n      :right-default-checked=\"[1]\"\n      :render-content=\"renderFunc\"\n      :titles=\"['Source', 'Target']\"\n      :button-texts=\"['到左边', '到右边']\"\n      :format=\"{\n        noChecked: '${total}',\n        hasChecked: '${checked}/${total}'\n      }\"\n      :data=\"data\"\n      @change=\"handleChange\"\n    >\n      <template #left-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">操作</el-button>\n      </template>\n      <template #right-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">操作</el-button>\n      </template>\n    </el-transfer>\n  </div>\n  <p style=\"text-align: center; margin: 50px 0 20px\">\n    使用 scoped-slot 自定义数据项\n  </p>\n  <div style=\"text-align: center\">\n    <el-transfer\n      v-model=\"rightValue\"\n      style=\"text-align: left; display: inline-block\"\n      filterable\n      :left-default-checked=\"[2, 3]\"\n      :right-default-checked=\"[1]\"\n      :titles=\"['Source', 'Target']\"\n      :button-texts=\"['到左边', '到右边']\"\n      :format=\"{\n        noChecked: '${total}',\n        hasChecked: '${checked}/${total}'\n      }\"\n      :data=\"data\"\n      @change=\"handleChange\"\n    >\n      <template #default=\"{option}\">\n        <span>{{ option.key }} - {{ option.label }}</span>\n      </template>\n      <template #left-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">操作</el-button>\n      </template>\n      <template #right-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">操作</el-button>\n      </template>\n    </el-transfer>\n  </div>\n</template>\n\n<style>\n  .transfer-footer {\n    margin-left: 20px;\n    padding: 6px 5px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      const generateData = (_) => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `备选项 ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      return {\n        data: generateData(),\n        leftValue: [1],\n        rightValue: [1],\n        renderFunc(h, option) {\n          return h('span', null, option.key, ' - ', option.label)\n        },\n      }\n    },\n\n    methods: {\n      handleChange(value, direction, movedKeys) {\n        console.log(value, direction, movedKeys)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("数据项属性别名 ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("默认情况下，Transfer 仅能识别数据项中的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 字段。如果你的数据的字段名不同，可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性为它们设置别名。")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("本例中的数据源没有 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 字段，在功能上与它们相同的字段名为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "desc"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。因此可以使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 设置别名。")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    :props=\"{\n      key: 'value',\n      label: 'desc'\n    }\"\n    :data=\"data\"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = (_) => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            value: i,\n            desc: `备选项 ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      return {\n        data: generateData(),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>array</td><td>—</td><td>—</td></tr><tr><td>data</td><td>Transfer 的数据源</td><td>array[{ key, label, disabled }]</td><td>—</td><td>[ ]</td></tr><tr><td>filterable</td><td>是否可搜索</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-placeholder</td><td>搜索框占位符</td><td>string</td><td>—</td><td>请输入搜索内容</td></tr><tr><td>filter-method</td><td>自定义搜索方法</td><td>function</td><td>—</td><td>—</td></tr><tr><td>target-order</td><td>右侧列表元素的排序策略：若为 <code>original</code>，则保持与数据源相同的顺序；若为 <code>push</code>，则新加入的元素排在最后；若为 <code>unshift</code>，则新加入的元素排在最前</td><td>string</td><td>original / push / unshift</td><td>original</td></tr><tr><td>titles</td><td>自定义列表标题</td><td>array</td><td>—</td><td>[&#39;列表 1&#39;, &#39;列表 2&#39;]</td></tr><tr><td>button-texts</td><td>自定义按钮文案</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>render-content</td><td>自定义数据项渲染函数</td><td>function(h, option)</td><td>—</td><td>—</td></tr><tr><td>format</td><td>列表顶部勾选状态文案</td><td>object{noChecked, hasChecked}</td><td>—</td><td>{ noChecked: &#39;${checked}/${total}&#39;, hasChecked: &#39;${checked}/${total}&#39; }</td></tr><tr><td>props</td><td>数据源的字段别名</td><td>object{key, label, disabled}</td><td>—</td><td>—</td></tr><tr><td>left-default-checked</td><td>初始状态下左侧列表的已勾选项的 key 数组</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>right-default-checked</td><td>初始状态下右侧列表的已勾选项的 key 数组</td><td>array</td><td>—</td><td>[ ]</td></tr></tbody></table>", 1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "left-footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "左侧列表底部的内容")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "right-footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "右侧列表底部的内容")])])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Scoped Slot ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义数据项的内容，参数为 { option }")])])], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Methods ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "方法名"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "参数")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clearQuery"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "清空某个面板的搜索关键词"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "'left' / 'right'，指定需要清空的面板")])])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>右侧列表元素变化时触发</td><td>当前值、数据移动的方向（&#39;left&#39; / &#39;right&#39;）、发生移动的数据 key 数组</td></tr><tr><td>left-check-change</td><td>左侧列表元素被用户选中 / 取消选中时触发</td><td>当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</td></tr><tr><td>right-check-change</td><td>右侧列表元素被用户选中 / 取消选中时触发</td><td>当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</td></tr></tbody></table>", 1);

function transfervue_type_template_id_458e29b8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", transfervue_type_template_id_458e29b8_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "transfer-chuan-suo-kuang",
    content: "Transfer 穿梭框",
    href: "#transfer-chuan-suo-kuang",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_458e29b8_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#transfer-chuan-suo-kuang"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_458e29b8_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_458e29b8_hoisted_5]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_458e29b8_hoisted_4]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-sou-suo",
    content: "可搜索",
    href: "#ke-sou-suo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_458e29b8_hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-sou-suo"
    })]),
    _: 1
  }), transfervue_type_template_id_458e29b8_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_458e29b8_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-zi-ding-yi",
    content: "可自定义",
    href: "#ke-zi-ding-yi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-zi-ding-yi"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-ju-xiang-shu-xing-bie-ming",
    content: "数据项属性别名",
    href: "#shu-ju-xiang-shu-xing-bie-ming",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-ju-xiang-shu-xing-bie-ming"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slot"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "scoped-slot",
    content: "Scoped Slot",
    href: "#scoped-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#scoped-slot"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methods",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/transfer.md?vue&type=template&id=458e29b8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/transfer.md?vue&type=script&lang=ts

/* harmony default export */ var transfervue_type_script_lang_ts = ({
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
        const _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      const democomponentExport = {
        data() {
          const generateData = _ => {
            const data = [];

            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `备选项 ${i}`,
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
        const _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          filterable: "",
          "filter-method": _ctx.filterMethod,
          "filter-placeholder": "请输入城市拼音",
          data: _ctx.data
        }, null, 8, ["modelValue", "filter-method", "data"])]);
      }

      const democomponentExport = {
        data() {
          const generateData = _ => {
            const data = [];
            const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
            const spell = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
            cities.forEach((city, index) => {
              data.push({
                label: city,
                key: index,
                spell: spell[index]
              });
            });
            return data;
          };

          return {
            data: generateData(),
            value: [],

            filterMethod(query, item) {
              return item.spell.indexOf(query) > -1;
            }

          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        toDisplayString: _toDisplayString,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("p", {
        style: {
          "text-align": "center",
          "margin": "0 0 20px"
        }
      }, " 使用 render-content 自定义数据项 ", -1);

      const _hoisted_2 = {
        style: {
          "text-align": "center"
        }
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("操作");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("操作");

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("p", {
        style: {
          "text-align": "center",
          "margin": "50px 0 20px"
        }
      }, " 使用 scoped-slot 自定义数据项 ", -1);

      const _hoisted_6 = {
        style: {
          "text-align": "center"
        }
      };

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("操作");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("操作");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createElementBlock("div", null, [_hoisted_1, _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.leftValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.leftValue = $event),
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          filterable: "",
          "left-default-checked": [2, 3],
          "right-default-checked": [1],
          "render-content": _ctx.renderFunc,
          titles: ['Source', 'Target'],
          "button-texts": ['到左边', '到右边'],
          format: {
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          },
          data: _ctx.data,
          onChange: _ctx.handleChange
        }, {
          "left-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          "right-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "render-content", "data", "onChange"])]), _hoisted_5, _createElementVNode("div", _hoisted_6, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.rightValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.rightValue = $event),
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          filterable: "",
          "left-default-checked": [2, 3],
          "right-default-checked": [1],
          titles: ['Source', 'Target'],
          "button-texts": ['到左边', '到右边'],
          format: {
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          },
          data: _ctx.data,
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(({
            option
          }) => [_createElementVNode("span", null, _toDisplayString(option.key) + " - " + _toDisplayString(option.label), 1)]),
          "left-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          })]),
          "right-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "data", "onChange"])])]);
      }

      const democomponentExport = {
        data() {
          const generateData = _ => {
            const data = [];

            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `备选项 ${i}`,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            leftValue: [1],
            rightValue: [1],

            renderFunc(h, option) {
              return h('span', null, option.key, ' - ', option.label);
            }

          };
        },

        methods: {
          handleChange(value, direction, movedKeys) {
            console.log(value, direction, movedKeys);
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
        const _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          props: {
            key: 'value',
            label: 'desc'
          },
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      const democomponentExport = {
        data() {
          const generateData = _ => {
            const data = [];

            for (let i = 1; i <= 15; i++) {
              data.push({
                value: i,
                desc: `备选项 ${i}`,
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
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/transfer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/transfer.md



transfervue_type_script_lang_ts.render = transfervue_type_template_id_458e29b8_render

/* harmony default export */ var transfer = __webpack_exports__["default"] = (transfervue_type_script_lang_ts);

/***/ })

}]);