(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[243],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/message-box.md?vue&type=template&id=fac84070

var message_boxvue_type_template_id_fac84070_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"metusezibotukusu\"><a class=\"header-anchor\" href=\"#metusezibotukusu\">¶</a> メッセージボックス</h2><p>システムのメッセージボックスをシミュレートしたモーダルボックスのセットで、主にアラート情報、オペレーション確認、プロンプトメッセージを表示します。</p><div class=\"tip\"><p>メッセージボックスはシステムの <code>alert</code>, <code>confirm</code>, <code>prompt</code> のシミュレーションを提供するように設計されていますので、内容はシンプルなものになっています。より複雑な内容の場合は、ダイアログを使ってください。</p></div><h3 id=\"arato\"><a class=\"header-anchor\" href=\"#arato\">¶</a> アラート</h3><p>アラートは、ユーザーが確認するまでユーザーの操作を中断します。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$alert"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" メソッドを呼び出してアラートを開きます。これはシステムの "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" をシミュレートしたものであり、ESCを押したりボックスの外をクリックしたりして閉じることはできません。この例では、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" の2つのパラメータを受け取っている。ボックスが閉じられると "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" オブジェクトが返され、さらなる処理が行われます。ターゲットブラウザが "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" をサポートしているかどうかわからない場合は、この例のようにサードパーティのポリフィルをインポートするか、コールバックを使用してください。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: action => {\n            this.$message({\n              type: 'info',\n              message: `action: ${ action }`\n            });\n          }\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "que-ren"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#que-ren"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 確認")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "確認は、ユーザーに確認を求めるために使用します。", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$confirm"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("メソッドを呼び出すと、システムの "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" をシミュレートしてconfirmを開くことができる。また、リテラルオブジェクトである第三の属性 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を渡すことで、メッセージボックスを高度にカスタマイズすることができます。属性 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" はメッセージの種類を示し、その値には "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を指定することができる。2番目の属性 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" は "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" でなければならず、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "object"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" の場合は "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" として扱われることに注意してください。ここでは、さらなる処理を行うために "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用いる。")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning'\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Delete completed'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Delete canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "puronputo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#puronputo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" プロンプト")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "プロンプトは、ユーザーの入力が必要な場合に使用されます。", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("プロンプトを開くために "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$prompt"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" メソッドを呼び出すと、システムの "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" をシミュレートする。パラメータ "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputPattern"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使って独自の RegExp パターンを指定することができる。バリデーションの方法を指定するには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputValidator"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使い、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" または "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を返します。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" または "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を返す場合は検証に失敗したことを意味し、返された文字列が "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputErrorMessage"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" として使用されます。さらに、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputPlaceholder"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" パラメータで入力ボックスのプレースホルダをカスタマイズすることもできます。")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email'\n        }).then(({ value }) => {\n          this.$message({\n            type: 'success',\n            message: 'Your email is:' + value\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Input canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kasutamaizu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamaizu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" カスタマイズ")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "様々なコンテンツを表示するようにカスタマイズ可能", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("上記の3つのメソッドは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" メソッドのリパッケージです。この例では、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "showCancelButton"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を使って "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" メソッドを直接呼び出しています。また、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "cancelButtonClass"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使ってカスタムスタイルを追加したり、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "cancelButtonText"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使ってボタンのテキストをカスタマイズしたりすることもできます (確認ボタンにもこれらのフィールドがあります。) この例では "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性も使用しています。これはメソッドであり、MessageBoxインスタンスが閉じられるときにトリガされ、その実行によってインスタンスの閉じを停止します。このメソッドには3つのパラメータがあります。パラメータは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "action"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "instance"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" の3つです。これを使うことで、閉じる前にインスタンスを操作することができます。例えば、確認ボタンの "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を有効にしたり、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" メソッドを呼び出して MessageBox インスタンスを閉じたりすることができます ("), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 内で "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" が呼び出されなかった場合、インスタンスは閉じられません)。")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open() {\n        this.$msgbox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true;\n              instance.confirmButtonText = 'Loading...';\n              setTimeout(() => {\n                done();\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false;\n                }, 300);\n              }, 3000);\n            } else {\n              done();\n            }\n          }\n        }).then(action => {\n          this.$message({\n            type: 'info',\n            message: 'action: ' + action\n          });\n        });\n      },\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>MessageBoxの内容は <code>VNode</code> にすることができ、カスタムコンポーネントを渡すことができます。MessageBoxを開くとき、Vueは新しい <code>VNode</code> と古い <code>VNode</code> を比較し、UIを効率的に更新する方法を考え出します。この場合、MessageBoxが開くたびに <code>VNode</code> に一意のキーを追加することができます。<a href=\"https://jsfiddle.net/zhiyang/ezmhq2ef\">例</a>。</p></div><h3 id=\"html-wen-zi-liewo-shi-yongsuru\"><a class=\"header-anchor\" href=\"#html-wen-zi-liewo-shi-yongsuru\">¶</a> HTML文字列を使用する</h3><p><code>message</code> は HTML 文字列をサポートしています。</p>", 3);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を true に設定すると、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" は HTML 文字列として扱われます。")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {\n          dangerouslyUseHTMLString: true\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"warning\"><p><code>message</code>プロパティはHTML文字列をサポートしていますが、任意のHTMLを動的にレンダリングすると<a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">XSS攻撃</a>につながりやすく、非常に危険です。したがって、<code>dangerouslyUseHTMLString</code>がオンの場合は、<code>message</code>の内容が信頼できるものであることを確認し、<strong>決して</strong>ユーザが提供したコンテンツに<code>message</code>を代入しないようにしてください。</p></div><h3 id=\"kiyanserutokurozuwo-qu-biesuru\"><a class=\"header-anchor\" href=\"#kiyanserutokurozuwo-qu-biesuru\">¶</a> キャンセルとクローズを区別する</h3><p>場合によっては、キャンセルボタンをクリックするのと閉じるボタンをクリックするのでは意味が異なる場合があります。</p>", 3);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("デフォルトでは、ユーザがメッセージボックスをキャンセル(キャンセルボタンをクリック)して閉じる(閉じるボタンまたはマスクレイヤーをクリック、ESCキーを押す)と、Promiseのリジェクトコールバックと "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "callback"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" のパラメータは 'cancel' になります。distinguishCancelAndClose` が true に設定されている場合、上記の二つの操作のパラメータはそれぞれ 'cancel' と 'close' である。")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Save',\n          cancelButtonText: 'Discard Changes'\n        })\n          .then(() => {\n            this.$message({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.'\n            });\n          })\n          .catch(action => {\n            this.$message({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changes discarded. Proceeding to a new route.'\n                : 'Stay in the current route'\n            })\n          });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zhong-yangni-pei-zhisaretakontentu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhong-yangni-pei-zhisaretakontentu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 中央に配置されたコンテンツ")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "メッセージボックスの内容を中央揃えにすることができます。", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定すると、コンテンツを中央に配置します。")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning',\n          center: true\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Delete completed'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Delete canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"gurobarumesotudo\"><a class=\"header-anchor\" href=\"#gurobarumesotudo\">¶</a> グローバルメソッド</h3><p>Element Plusが完全にインポートされている場合、Vue.prototypeに以下のグローバルメソッドが追加されます。Vue.prototypeには、<code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code>, <code>$prompt</code> というグローバルメソッドが追加されます。そのため、Vueのインスタンスでは、このページで行ったように <code>MessageBox</code> を呼び出すことができます。パラメータは以下の通りです。</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> もしくは <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> もしくは <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> もしくは <code>$prompt(message, options)</code></li></ul><h3 id=\"rokaruinpoto\"><a class=\"header-anchor\" href=\"#rokaruinpoto\">¶</a> ローカルインポート</h3><p>オンデマンドで <code>MessageBox</code> をインポートしたい場合:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessageBox } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>対応するメソッドは以下の通り: 対応するメソッドは <code>ElMessageBox</code>, <code>ElMessageBox.alert</code>, <code>ElMessageBox.confirm</code>, <code>ElMessageBox.prompt</code> である。パラメータは上記と同じである。</p><h3 id=\"opusiyon\"><a class=\"header-anchor\" href=\"#opusiyon\">¶</a> オプション</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>メッセージボックスのタイトル</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>メッセージボックスの内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td><code>message</code> を HTML 文字列として扱うかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>アイコン表示に使用されるメッセージタイプ</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>iconClass</td><td>カスタムアイコンのクラス、 <code>type</code> をオーバーライドします。</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>メッセージボックスのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>Promise を好まない場合、メッセージボックス を閉じるコールバック</td><td>function(action), where action can be &#39;confirm&#39;, &#39;cancel&#39; or &#39;close&#39;, and <code>instance</code> is the MessageBox instance. You can access to that instance&#39;s attributes and methods</td><td>—</td><td>—</td></tr><tr><td>showClose</td><td>メッセージボックスのクローズアイコンを表示するかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>beforeClose</td><td>コールバックは メッセージボックスコンポーネントを閉じる前に呼び出され、メッセージボックスコンポーネントが閉じるのを防ぎます。</td><td>function(action, instance, done), where <code>action</code> can be &#39;confirm&#39;, &#39;cancel&#39; or &#39;close&#39;; <code>instance</code> is the MessageBox instance, and you can access to that instance&#39;s attributes and methods; <code>done</code> is for closing the instance</td><td>—</td><td>—</td></tr><tr><td>distinguishCancelAndClose</td><td>メッセージボックスのキャンセルと終了を区別するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lockScroll</td><td>メッセージボックスがプロンプトを出したときにボディスクロールをロックするかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>キャンセルボタンを表示するかどうか</td><td>boolean</td><td>—</td><td>false (true when called with confirm and prompt)</td></tr><tr><td>showConfirmButton</td><td>確認ボタンを表示するかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>キャンセルボタンのテキスト内容</td><td>string</td><td>—</td><td>Cancel</td></tr><tr><td>confirmButtonText</td><td>確認ボタンのテキスト内容</td><td>string</td><td>—</td><td>OK</td></tr><tr><td>cancelButtonClass</td><td>キャンセルボタンのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>確認ボタンのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>マスクをクリックしてメッセージボックスを閉じることができるかどうか</td><td>boolean</td><td>—</td><td>true (false when called with alert)</td></tr><tr><td>closeOnPressEscape</td><td>ESC を押してメッセージボックスを閉じることができるかどうか</td><td>boolean</td><td>—</td><td>true (false when called with alert)</td></tr><tr><td>closeOnHashChange</td><td>ハッシュが変更された場合にメッセージボックスを閉じるかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>インプットを表示するかどうか</td><td>boolean</td><td>—</td><td>false (true when called with prompt)</td></tr><tr><td>inputPlaceholder</td><td>インプットのプレースホルダー</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>インプットのタイプ</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>インプット初期値</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>インプットの正規表現</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>インプットの検証関数です。ブール値か文字列を返す必要があります。文字列が返された場合、それは inputErrorMessage に代入されます。</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>バリデーション失敗時のエラーメッセージ</td><td>string</td><td>—</td><td>Illegal input</td></tr><tr><td>center</td><td>コンテンツを中央に配置するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>丸いボタンを使うかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>buttonSize</td><td>custom size of confirm and cancel buttons</td><td>string</td><td>mini / small / medium / large</td><td>small</td></tr></tbody></table>", 9);

function message_boxvue_type_template_id_fac84070_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", message_boxvue_type_template_id_fac84070_hoisted_1, [_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/message-box.md?vue&type=template&id=fac84070

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/message-box.md?vue&type=script&lang=ts


/* harmony default export */ var message_boxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this = this;

            this.$alert('This is a message', 'Title', {
              confirmButtonText: 'OK',
              callback: function callback(action) {
                _this.$message({
                  type: 'info',
                  message: "action: " + action
                });
              }
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this2 = this;

            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(function () {
              _this2.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(function () {
              _this2.$message({
                type: 'info',
                message: 'Delete canceled'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this3 = this;

            this.$prompt('Please input your e-mail', 'Tip', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: 'Invalid Email'
            }).then(function (_ref) {
              var value = _ref.value;

              _this3.$message({
                type: 'success',
                message: 'Your email is:' + value
              });
            }).catch(function () {
              _this3.$message({
                type: 'info',
                message: 'Input canceled'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var h = vue_esm_browser["s" /* h */];
      var democomponentExport = {
        methods: {
          open: function open() {
            var _this4 = this;

            this.$msgbox({
              title: 'Message',
              message: h('p', null, [h('span', null, 'Message can be '), h('i', {
                style: 'color: teal'
              }, 'VNode')]),
              showCancelButton: true,
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              beforeClose: function beforeClose(action, instance, done) {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = 'Loading...';
                  setTimeout(function () {
                    done();
                    setTimeout(function () {
                      instance.confirmButtonLoading = false;
                    }, 300);
                  }, 3000);
                } else {
                  done();
                }
              }
            }).then(function (action) {
              _this4.$message({
                type: 'info',
                message: 'action: ' + action
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
              dangerouslyUseHTMLString: true
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this5 = this;

            this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
              distinguishCancelAndClose: true,
              confirmButtonText: 'Save',
              cancelButtonText: 'Discard Changes'
            }).then(function () {
              _this5.$message({
                type: 'info',
                message: 'Changes saved. Proceeding to a new route.'
              });
            }).catch(function (action) {
              _this5.$message({
                type: 'info',
                message: action === 'cancel' ? 'Changes discarded. Proceeding to a new route.' : 'Stay in the current route'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this6 = this;

            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning',
              center: true
            }).then(function () {
              _this6.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(function () {
              _this6.$message({
                type: 'info',
                message: 'Delete canceled'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/message-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/message-box.md



message_boxvue_type_script_lang_ts.render = message_boxvue_type_template_id_fac84070_render

/* harmony default export */ var message_box = __webpack_exports__["default"] = (message_boxvue_type_script_lang_ts);

/***/ })

}]);