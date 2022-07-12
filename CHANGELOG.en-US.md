## Changelog

### 2.2.9

_2022-07-08_

#### Features

- Components [autocomplete] fit input width (#8596 by @kooriookami)
- Components [slider] placement (#8561 by @ryuhangyeong)

#### Bug fixes

- Components [menu] fix infinite flicker after choosing subMenu (#8533 by @ParkerFiend)
- Theme-chalk [select] change style when disalbed and selectded (#8354 by @ryuhangyeong)
- Components [TreeSelect] checkbox interaction (#8102 by @yujinpan)
- Components [input-number] Fix value decimals miss prop precision (#8587 by @so11y)
- Components add validate-event for form types component (#8173 by @HeftyKoo)
- Components [time-picker] Ignore key down if readonly (#8283 by @ryuhangyeong)
- Components [date-picker] fix type of year disabled failure (#8568 by @ayuan-gy)
- Components [autocomplete] error message (#8591 by @tolking)
- Components [dialog] remove not used style props (#8325 by @ryuhangyeong)
- Components [dialog] make modelValue be an optional property (#8598 by @buqiyuan)
- Components [dropdown] fix visible-change event delay trigger (#8602 by @shooterRao)
- Components [table] table-column expand nested table wrong style (#8522 by @asdjgfr)
- Components [date-picker] disabled year not selectable (#8414 by @Tsong-LC)
- Components [steps] fix type error (#8627 by @ryuhangyeong)
- Components [dropdown] fix A11y when tooltip show (#8655 by @shooterRao)
- Revert(components): [radio] revert input id (#8677 by @chenxch)

#### Refactors

- Components [tabs] add deprecated mark to activeName (#8590 by @tolking)
- Components [steps] use JSX in Unit test (#8259 by @Tsong-LC)

### 2.2.8

_2022-07-01_

#### Bug fixes

- Components [radio] fix typo (#8556 by @holazz)
- Components [message] fix z-index & offset (#8582 by @sxzz)

### 2.2.7

_2022-07-01_

#### Features

- Components close all messages of the specified type (#8415 by @Lete114)
- Components [message-box] add autofocus attribute (#8445 by @YunYouJun)
- Components [autocomplete] expose blur event (#8364 by @tolking)

#### Bug fixes

- Components [tabs] fix change acitve cannot scroll in view (#8332 by @xiahouwei)
- Components [select] collapse-tags-tooltip drop first item (#8344 by @chenxch)
- Components [message-box] the focus error when used ElMessageBox (#8336 by @LinZhanMing)
- Components [autocomplete] the popup still appears after select (#8350 by @tolking)
- Components [tooltip] not disappear when <keep-alive> change (#8301 by @sunnyCoCosun)
- Components [space] missing empty string size (#8039 by @HeftyKoo)
- Components [message]: offset (#8379 by @sxzz)
- Components [select] multiple init height (#8423 by @chenxch)
- Theme-chalk [pagination] style if selected value is disabled (#8447 by @ryuhangyeong)
- Components [select] fix select dropdown width (#8396 by @Cheerwhy) (#8435)
- Components [select-v2] fix select-v2 dropdown width (#8442 by @Cheerwhy)
- Components [popover] fix dark mode background color (#8133 by @holazz)
- Components [color-picker] can't select predefine value (#8205 by @btea)
- Components [radio] Divide attrs into label and input (#8476 by @chenxch)
- Components [tabs] name is number 0 become a string (#8469 by @chenxch)
- Style(components): [transfer] modify import order (#8345 by @holazz)

#### Refactors

- Components [image-viewer] simplify emits type checking (#8329 by @ryuhangyeong)
- Components [dialog] using addUnit in the use-dialog (#8304 by @ryuhangyeong)
- Components [switch] deprecate value prop (#8335 by @sxzz)
- Components [upload] use JSX in Unit test (#8268 by @sxzz)
- Components [descriptions] use JSX in Unit test (#8351 by @ryuhangyeong)
- Components [message] fix typings and switch to script setup (#8378 by @sxzz)
- Components [switch] switch to script-setup syntax (#7792 by @chenxch)
- Components [space] refactor (#8386 by @holazz)
- Components [slider] use JSX in Unit test (#8225 by @holazz)
- Components [popover] switch to script-setup syntax (#8273 by @holazz)
- Add ts-nocheck and check all files (#8401 by @sxzz)
- Components [space] use JSX in Unit test (#8433 by @holazz)
- Components [popconfirm] changed button type (#8436 by @ryuhangyeong)
- Components [drawer] replace with addUnit (#8463 by @ryuhangyeong)
- Components [only-child] simplify conditions (#8480 by @ryuhangyeong)
- Components [transfer] switch to script-setup syntax (#8343 by @holazz)

### 2.2.6

_2022-06-17_

#### Bug fixes

- Components [table] fix namespace in table's expand icon (#8162 by @k713927)
- Components [image] position styles error when used slots (#8109 by @tolking)
- Components [pagination] improved keyboard accessibility (#8107 by @ryuhangyeong)
- Components [date-picker] valid value error (#8187 by @gjfei)
- Components inputNumber cursor offset up (#8193 by @Tsong-LC)
- Components [table-v2] `column's min-width` should work normal (#8226 by @webfansplz)
- Theme-chalk [col] remove float property (#8220 by @ryuhangyeong)
- Components [time-picker] template type assertion (#8237 by @Tsong-LC)
- Components [date-picker] validateEvent prop not work (#8194 by @HeftyKoo)
- Components [checkbox-group] fix Wrong type checking (#8195 by @ytx222)
- Vitest typings (#8239 by @sxzz)
- Components [virtual-list] fix namespace in virtual-list (#8255 by @FlareStone)
- Components [pagination] tab enable error if disabled (#8222 by @ryuhangyeong)
- Components [upload] two-way binding fileList (#8258 by @sxzz)
- Components DOM update finished calculating navOffset (#8221 by @Tsong-LC)
- Style(components): [button] link button add focus-visible css (#8214 by @chenxch)
- Style(components): [button] focus-visible (#8224 by @chenxch)
- Style(components): [button] text-button bg mode add focus (#8232 by @chenxch)
- Style(components): [select] options disabled hover bg (#8266 by @chenxch)

#### Refactors

- Components [slider] switch to script-setup syntax (#8008 by @holazz)
- Components [switch] Simplify color handling (#8199 by @CarterLi)
- Utils import path (#8235 by @sxzz)
- Components [carousel] complete optional values (#8231 by @tolking)
- Components [input] fix ts error (#8200 by @btea)
- Components [result] use JSX in Unit test (#8230 by @ryuhangyeong)
- Components [overlay] use JSX in Unit test (#8227 by @ryuhangyeong)
- Components [tag] use JSX in Unit test (#8233 by @ryuhangyeong)
- Components [icon] use JSX in Unit test (#8249 by @ryuhangyeong)
- Components [empty] use JSX in Unit test (#8245 by @Tsong-LC)
- Components [divider] use JSX in Unit test (#8248 by @ryuhangyeong)
- Components [skeleton] use JSX in Unit test (#8265 by @Tsong-LC)
- Components [page-header] use JSX in Unit test (#8263 by @ryuhangyeong)
- Components [collapse-transition] type error (#8247 by @tolking)
- Components [visual-hidden] visual-hidden  (#8192 by @gjfei)
- Refactor/time picker refactor to setup (#8191 by @jw-foss)
- Components [scrollbar] simplify emits type checking (#8281 by @ryuhangyeong)

### 2.2.5

_2022-06-08_

#### Features

- Check message when commit (#8166 by @sxzz)

#### Bug fixes

- The type extends error (#8106 by @tolking)
- Docs remove extra slashes (#8134 by @btea)
- Vue app typing (#8137 by @sxzz)
- Components [select-v2] remove private API (#8145 by @jw-foss)
- Components import dayjs by a more compatible way (#8144 by @tolking)
- Deps update all non-major dependencies (#7847 by @renovate[bot])
- Components [form] catch validation error when changing rules (#8154 by @HeftyKoo)
- Components [tag] awrong disable-transitions condition (#8161 by @ryuhangyeong)
- Components [switch] tabindex property doesn't work (#8101 by @ryuhangyeong)
- Components [input] hide eye icon if no value (#8096 by @ryuhangyeong)
- Components [collapse-item] If disabled, no focus (#8081 by @ryuhangyeong)
- Components [time-picker] filter invalid value (#8119 by @gjfei)
- Components dts (#8167 by @sxzz)
- Components picker-panel not pop up when disabled/readonly (#8139 by @Tsong-LC)

#### Refactors

- Components [date-picker] basic-date-table (#8095 by @jw-foss)
- Components [time-picker] props (#8108 by @jw-foss)
- Components [time-picker] panel-time-pick (#8115 by @jw-foss)
- Components [time-picker] script setup (#8128 by @jw-foss)
- Components [time-picker] basic-time-spinner (#8132 by @jw-foss)
- Components [link] use JSX in Unit test (#8140 by @logustra)
- Components [alert] delete unnecessary code (#8129 by @ryuhangyeong)
- Components use `useResizeObserver` (#8124 by @CarterLi)
- Components [time-picker] time-picker (#8160 by @jw-foss)

### 2.2.4

_2022-06-05_

#### Bug fixes

- Components [date-picker] circular dependency (#8093 by @chenxch)
- Build copy typings (#8098 by @sxzz)

### 2.2.3

_2022-06-04_

#### Features

- Components [date-picker] extract props (#7893 by @jw-foss)
- Components [dropdown] a11y (#7946 by @opengraphica)
- Components [image] support native lazy loading (#7968 by @tolking)

#### Bug fixes

- Components [input-number] enhanced precision (#7777 by @chenxch)
- Components [form-item] fix top label height (#7830 by @purepear)
- Components [dialog] set destory-on-close drag position abnormal (#7822 by @btea)
- Components [form] label-position props default value (#7838 by @ryuhangyeong)
- Components [loading] namespace (#7857 by @tolking)
- Deps update dependency eslint-plugin-vue to v9 (#7848 by @renovate[bot])
- Build enhance type check (#7880 by @sxzz)
- Components [date-picker] fix error when type="daterange" (#7858 by @shenX-2021)
- Theme-chalk [date-picker] basic & range height size (#7831 by @YunYouJun)
- Components [tabs] card type fixed height (#7840 by @ryuhangyeong)
- Components [select-v2] status-icon position (#7835 by @chenxch)
- Components [button] style compatible issue with :not (#7914 by @dreambo8563)
- Components [focus-trap] respect focusout null relatedTarget (#7915 by @Giwayume)
- Theme-chalk [dark-model] vue-cli tree sharking (#7910 by @chenxch)
- Components [date-picker] Make shortcuts reactive (#7698 by @banbri)
- Components [table] the scrollbar not change (#7905 by @tolking)
- Components [tree] remove form item context (#7956 by @opengraphica)
- Hooks type error (#7941 by @sxzz)
- Deps update dependency yaml-eslint-parser to v1 (#7978 by @renovate[bot])
- Components [collection] type error (#7940 by @sxzz)
- Image-viewer typescript error (#7938 by @sxzz)
- Deps update dependency @element-plus/icons-vue to v2 (#7976 by @renovate[bot])
- Utils type error (#7939 by @sxzz)
- Components [button] :not overrides the disabled style (#7977 by @btea)
- Components [button] link style and docs (#7996 by @chenxch)
- Build remove type safe (not stricter) (#8004 by @sxzz)
- Components [picker] Click to focus fires emit (#8001 by @opengraphica)
- Components [select]  input height is 2px more (#7958 by @chenxch)
- Components [focus-trap] popper input focus (#8025 by @opengraphica)
- Components [scrollbar] expose wrap ref (#8035 by @holazz)
- Components [el-table] hide tooltip when table is scrolling (#8012 by @msidolphin)
- Components [popper] contextual menu (#8054 by @jw-foss)
- Components [form] resetFields object error (#8067 by @chenxch)
- Theme-chalk [message] border width & style css var (#8072 by @YunYouJun)
- Components [loading] fix typo (#8074 by @btea)
- Components [upload] beforeUpload hook (#8079 by @sxzz)
- Components [timeline-item] props validation (#8083 by @ryuhangyeong)
- Components [time-picker] picker missing (#8082 by @jw-foss)
- Build tree shaking (#8088 by @sxzz)
- Components [date-picker] fix style: range-editor padding (#8057 by @zhyipeng)
- Docs [infinite-scroll] fix error when use directive (#7855 by @uncledrewzhaopeng)
- Style update cascader.css (#8070 by @xiaoxian521)
- Fix focus trap datepicker pick (#8085 by @Giwayume)

#### Refactors

- Components [checkbox-group] switch to script-setup syntax (#7825 by @chenxch)
- Components [checkbox-button] switch to script-setup syntax (#7827 by @chenxch)
- Build use esbuild and tsx (#7876 by @sxzz)
- Metadata deduplicate commits (#7879 by @sxzz)
- Components [date-picker] extract props (#7884 by @jw-foss)
- Components [time-select] switch to script-setup syntax (#7833 by @metanas)
- Components [result] switch to script-setup syntax (#7891 by @ryuhangyeong)
- Components [input-number] export component instance type (#7886 by @holazz)
- Components [date-picker] extract props (#7899 by @jw-foss)
- Components useNamespace for date-picker (#7911 by @YunYouJun)
- Components [time-picker] setup migration (#7908 by @jw-foss)
- Components [time-picker] date-picker (#7923 by @jw-foss)
- Components [date-picker] basic cell (#7924 by @jw-foss)
- Components [date-picker] date-range (#7931 by @jw-foss)
- Components [input-number] use JSX in Unit test (#7890 by @holazz)
- Add useMonthRangeHeader hook (#7936 by @iamkun)
- Components [rate] props and emits validation (#7949 by @ryuhangyeong)
- Components [tooltip] transition use useNamespace (#7950 by @btea)
- Components [collapse-transition] switch to script-setup syntax (#7953 by @ryuhangyeong)
- Components [input-number] switch to script-setup syntax (#7888 by @holazz)
- Components [progress] switch to script-setup syntax (#7795 by @chenxch)
- Components [affix] props and emits validation (#7945 by @ryuhangyeong)
- Component improve code (#7959 by @sxzz)
- Components [date-picker] month range (#7948 by @jw-foss)
- Components [alert] use JSX in Unit test (#7973 by @chenxch)
- Components [badge] use JSX in Unit test (#7972 by @chenxch)
- Components [popconfirm] export instance type (#7967 by @chenxch)
- Components [popconfirm] use JSX in Unit test (#7969 by @chenxch)
- Components [config-provider] export component instance type (#7979 by @holazz)
- Components [config-provider] use JSX in Unit test (#7980 by @holazz)
- Components [config-provider] refactor tokens (#7982 by @holazz)
- Components [col] switch to script-setup syntax (#7971 by @HeftyKoo)
- Components [steps] validate values ​​and export values (#7947 by @ryuhangyeong)
- Components [row] switch to script-setup syntax (#7961 by @HeftyKoo)
- Components [date-picker] range picker (#7994 by @jw-foss)
- Components [date-picker] panel-date-pick (#7998 by @jw-foss)
- Components [scrollbar] use JSX in Unit test (#7987 by @holazz)
- Components [scrollbar] switch to script-setup syntax (#7986 by @holazz)
- Components [date-picker] panel-date-pick (#8011 by @jw-foss)
- Components [button] use JSX in Unit test (#8024 by @ryuhangyeong)
- Components [progress] use JSX in Unit test (#8022 by @ryuhangyeong)
- Components [radio] use JSX in Unit test (#8019 by @chenxch)
- Components [layout] use JSX in Unit test (#8020 by @ryuhangyeong)
- Utils ep prop (#8018 by @sxzz)
- Components [avatar] use JSX in Unit test (#8021 by @ryuhangyeong)
- Components [date-picker] panel-date-pick (#8043 by @jw-foss)
- Components [date-picker] basic-year-table (#8045 by @jw-foss)
- Build rename variable (#8027 by @Brain777777)
- Components [input-number] convert to a constant (#8066 by @ryuhangyeong)
- Components [radio] separate hooks (#8065 by @ryuhangyeong)
- Components [tag] add event modifier (#8075 by @ryuhangyeong)
- Components [badge] remove unnecessary condition (#8073 by @ryuhangyeong)
- Components [date-picker] basic-month-table (#8053 by @jw-foss)
- Components [pagination] focusing tab border (#7814 by @ryuhangyeong)

### 2.2.2

_2022-05-23_

#### Features

- Dialog expose dialogContentRef (#7633 by @zhoucan38)

#### Bug fixes

- Components [menu] the styles link error (#7820 by @tolking)
- Components [form] align label width if it exists (#7826 by @ryuhangyeong)
- Correct the deprecated note for el-button (#7854 by @0song)
- Components [radio-group] unique id (#7859 by @JeremyWuuuuu)

### 2.2.1

_2022-05-20_

#### Features

- Components [dialog] a11y and focus trap on dialog components (#7550 by @opengraphica)
- Components [date-picker] work with modal focus trap; a11y controls and attributes (#7598 by @opengraphica)
- Ci enforce commit message linter (#7609 by @JeremyWuuuuu)
- Components menu add more controllable styles (#7549 by @CarterLi)
- Components [button] add link api (#7652 by @chenxch)
- Components [input-number] add :value-on-clear and make it nullable (#7724 by @CarterLi)
- Project introducing triage bot (#7732 by @JeremyWuuuuu)
- Components [button] restore type="text" (#7761 by @JeremyWuuuuu)
- Components [table] ensure minimum-size doesn't follow the content (#7627 by @msidolphin)
- Components [popper] focus trap and a11y (#7736 by @opengraphica)

#### Bug fixes

- Components circle progress 0 percent transition effect (#7562 by @ryuhangyeong)
- Components date picker range input__inner inherit height (#7586 by @YunYouJun)
- Components input textarea padding & label line-height (#7570 by @YunYouJun)
- Docs copy icon (#7587 by @btea)
- Theme-chalk [input] fix unexpected var name of input-inner-height (#7600 by @plainheart)
- Datepicker range default height by map.get (#7608 by @YunYouJun)
- Theme-chalk [input] add not-allowed when disabled (#7612 by @satrong)
- Components [select] in form change size (#7599 by @chenxch)
- Ci replace token for lint notification (#7625 by @JeremyWuuuuu)
- Check-strictly bug (#7422 by @chenxch)
- Ci token limitation for commit lint (#7647 by @JeremyWuuuuu)
- Components tabs focus visible (#7665 by @ryuhangyeong)
- Ci token limitation for commit lint (#7675 by @JeremyWuuuuu)
- Ci post lint message (#7692 by @JeremyWuuuuu)
- Ci post lint message (#7695 by @JeremyWuuuuu)
- Components [upload] show close tip text (#7696 by @ryuhangyeong)
- Components [date-picker] date-table-cell namespace (#7684 by @YunYouJun)
- Components date-picker add keydown events(#7506 by @lily-elephant) (#7536)
- Components [cascader] disabled option can't trigger cancel checked (#7604 by @btea)
- Components [table-v2] don't spread headerClass (#7729 by @btea)
- Ci lint commit message error (#7731 by @JeremyWuuuuu)
- Components [form-item] label is not vertically centered (#7780 by @buqiyuan)
- Theme-chalk [DatetimePicker] change inner to wrapper & use css var (#7703 by @YunYouJun)
- Components [time-picker] can not hide panel when click frequently (#7779 by @buqiyuan)
- Components [popper] provide formItemContext conditionally (#7790 by @CarterLi)
- Hooks use-form-item circular reference (#7793 by @btea)
- Components [dialog/drawer] header slot
- Improve deps (#7763 by @sxzz)
- Radio-group restore name (#7810 by @chenxch)

#### Refactors

- Build use type unsafe (#7523 by @sxzz)
- Components [main] switch to script-setup syntax (#7707 by @ryuhangyeong)
- Components [timeline] switch to script-setup syntax (#7705 by @metanas)
- Components [collection] switch to script-setup syntax (#7710 by @metanas)
- Components [radio] switch to script-setup synatx (#7701 by @chenxch)
- Components [container] switch to script-setup syntax (#7725 by @btea)
- Components [pagination/pager] switch to script-setup syntax (#7746 by @metanas)
- Components [pagination/jumper] switch to script-setup syntax (#7747 by @metanas)
- Components [pagination/total] switch to script-setup syntax (#7750 by @metanas)
- Components [pagination/prev] switch to script-setup syntax (#7745 by @metanas)
- Components [pagination/next] switch to script-setup syntax (#7748 by @metanas)
- Components [checkbox] switch to script-setup syntax (#7794 by @chenxch)
- Components [pagination/sizes] switch to script-setup syntax (#7749 by @metanas)
- Theme-chalk [table] remove useless style (#7807 by @YunYouJun)
- Components [step] switch to script-setup syntax (#7782 by @ryuhangyeong)
- Components [steps] switch to script-setup syntax (#7783 by @ryuhangyeong)

### 2.2.0

_2022-05-09_

[v2.2.0 release note](https://github.com/element-plus/element-plus/discussions/7578)

#### Breaking changes

##### Button

- `type="text"` has been removed from `button`, now you can do this, for more detail see [Documentation](https://element-plus.org/en-US/component/button.html#text-button)

```diff
--- <el-button type="text"/>
+++ <el-button text />
```

#### Features

- Components [slider] aria keyboard controls and attrs (#7389 by @opengraphica)
- Components [switch] add size (#7377 by @josonho)
- Docs use home svg layers for dark (#7408 by @YunYouJun)
- Add custom mix function for colors (#7459 by @YunYouJun)
- Upgrade to pnpm 7 (#7457 by @sxzz)
- Docs add Spanish translation (#7468 by @sxzz)
- Upgrade pnpm 7 (#7480 by @sxzz)
- Docs enable theme toggler (#7479 by @sxzz)
- Components [form-item] auto attach labels to inputs (#7450 by @opengraphica)
- Components [button] update text button (#7515 by @JeremyWuuuuu)
- Components [auto-resizer] new component (#7541 by @JeremyWuuuuu)

#### Bug fixes

- Components [el-select-v2] clear created options (#7305 by @josonho)
- Components [autocomplete] fetch-suggestions support AsyncFunction (#7315 by @chenxch)
- Components [pagination] fix typo (#7420 by @fzq1998)
- Docs icon import (#7440 by @KevinLjb)
- Pin pnpm version (#7455 by @sxzz)
- Deps update dependency @rollup/plugin-commonjs to v22 (#7452 by @renovate[bot])
- Components [image] fix attrs (#7451 by @sxzz)
- Ssr-testing fix code (#7466 by @sxzz)
- Input-number precision accuracy (#7398 by @chenxch)
- Components [descriptions] style (#7474 by @kooriookami)
- Components [select]label is not shown when value is a object (#7054 by @exherb)
- Theme-chalk dark mode details (#7460 by @YunYouJun)
- Table/dropdown/step dark details (#7483 by @YunYouJun)
- Components [select] The problem that the size changes and the height does not change (#7471 by @chenxch)
- Components [input] when textarea resize is both, the wordLimit position inaccurate (#7445 by @buqiyuan)
- Components [pickers] text button issue (#7530 by @JeremyWuuuuu)
- Components [popconfirm] text button type (#7526 by @JeremyWuuuuu)
- Components [popper] appendToBody API deprecation (#7534 by @JeremyWuuuuu)
- Ci publish nightly (#7537 by @sxzz)
- Components [virtual-table] horizontal scroll (#7538 by @JeremyWuuuuu)
- Theme-chalk [button] auto insert space (#7539 by @sxzz)
- Theme-chalk datetime picker time panel bg (#7543 by @YunYouJun)
- Docs icon collection link (#7547 by @btea)
- Docs fix Cross hovering (#7558 by @kooriookami)
- Components input internal autofill border color (#7561 by @YunYouJun)
- Components [el-tree-v2]prop `icon` support Component. fix [#7517] (#7518 by @JobinJia)
- Tree-select nodeKey default selected (#7172 by @chenxch) (#7181)
- Component cascader searching placeholder does not disappear (#7540 by @anflower)
- Components select v2 remote method trigger reset value when blur (#7569 by @YunYouJun)

#### Refactors

- Components [autocomplete] improve typings (#7381 by @sxzz)
- Theme-chalk scss css var namespace (#7344 by @YunYouJun)
- Use svg for guide & resources (#7399 by @YunYouJun)
- Theme-chalk [tabs] use font-size-base (#7416 by @satrong)
- Remove babel (#7453 by @sxzz)
- Components [tabs] refactor register pane (#7449 by @sxzz)
- Docs add missing deps (#7465 by @sxzz)
- Components!: remove deprecated warning (#7528 by @JeremyWuuuuu)
- Components [popconfirm] refactor to script-setup (#7522 by @sxzz)

### 2.1.11

_2022-04-25_

#### Features

- Drop jest (#7248 by @sxzz)
- Components [virtual-table] renderers (#7273 by @JeremyWuuuuu)
- Components [virtual-list] renderers
- Components [virtual-table] empty renderer (#7308 by @JeremyWuuuuu)
- Components [virtual-table] overlay renderer (#7314 by @JeremyWuuuuu)
- Components [virtual-table] compsables (#7341 by @JeremyWuuuuu)
- Components [input] add input formatter (#6876 by @Serendipity96)
- Components[image] imageviewer add close-on-press-escape(#7154 by @chenxch) (#7182)

#### Bug fixes

- Components [el-upload] icon is covered (#6951 by @josonho)
- Deps update all non-major dependencies (#7209 by @renovate[bot])
- Theme-chalk components details when dark (#7229 by @YunYouJun)
- Components [input] fix status icon gap (#7228 by @plainheart)
- Components [select] not set input padding anymore (#7269 by @plainheart)
- Docs radio-group (#7257 by @OneDayOneStep)
- Tsconfig (#7319 by @sxzz)
- Build dts generate (#7322 by @sxzz)
- Popperjs esm version (#7321 by @sxzz)
- Components [upload] stop bubble (#7304 by @josonho)
- [upload] prevent preview link (#7326 by @sxzz)
- Components [upload] make action optional (#7325 by @sxzz)
- Theme-chalk [pagination] fix spacing when sizes is at the end (#7339 by @plainheart)
- Components [calendar] fix range year bug (#7227 by @Dreamcreative)
- Components [input-number] suffix icon position (#7358 by @josonho)
- Components [date-picker] fix input inner box sizing (#7373 by @plainheart)
- Reasonable remaining (#7353 by @chenxch) (#7364)
- Components [input] fix prepend/append not fill height (#7274 by @plainheart)
- Color-picker v-model trigger active-change (#7260 by @chenxch)
- Directives use standard wheel event with passive option (#7256 by @TANGENNT)
- Components [col] component typing issue (#7376 by @JeremyWuuuuu)

#### Refactors

- Utils move function (#7336 by @sxzz)

### 2.1.10

_2022-04-18_

#### Features

- Components [form-item] support use form-item only (#7095 by @sxzz)

#### Bug fixes

- Vitest
- Components [color-picker] vertical bar bg (#7113 by @YunYouJun)
- Docs outDir error of VitePWA (#7100 by @tolking)
- Docs contributors when only one language (#7093 by @sxzz)
- Vitest ui (#7116 by @sxzz)
- Tag bg color & other dark details (#7138 by @YunYouJun)
- Docs logo link (#7133 by @sxzz)
- Docs fix markdown transformer (#7150 by @plainheart)
- Components [date-picker] fix `cell-class-name` not work (#7149 by @plainheart)
- Components [TreeSelect] incorrect props interaction and css paths (#7156 by @yujinpan)
- Components [tree-select] use `proxy` instead of `ctx` (#7160 by @plainheart)
- Components [popper] zIndex bug (#7115 by @chenxch)
- Empty svg when dark (#7203 by @YunYouJun)
- Components [table] fix `SummaryMethod` type (#7206 by @hminghe)

#### Refactors

- Docs improve style and fix typo (#7094 by @sxzz)
- Metadata move to dev deps (#7126 by @sxzz)
- Components [message-box] use useNamespace (#5721 by @buqiyuan)
- Components [time-select] use useNamespace (#6459 by @gjfei)
- Components [virtual-list, visual-hidden] use useNamespace (#6461 by @gjfei)
- Refactor menu to support namespace (#7131 by @iamkun)
- Components [input] change to flex layout (#7179 by @plainheart)

### 2.1.9

_2022-04-11_

#### Features

- Theme-chalk card support dark (#6975 by @YunYouJun)
- Theme-chalk dark palette & common color mixins (#6999 by @YunYouJun)
- Components [virtual-table] (#7014 by @JeremyWuuuuu)
- Components [virtual-table] (#7024 by @JeremyWuuuuu)
- Components [virtual-table] columns (#7027 by @JeremyWuuuuu)
- Docs add source and contributors (#6044 by @sxzz)
- Components [virtual-table] row (#7047 by @JeremyWuuuuu)
- Components [virtual-table] row (#7060 by @JeremyWuuuuu)
-  Release Publish eslint config and metadata (#7063 by @sxzz)
- Components [virtual-table] cell (#7068 by @JeremyWuuuuu)
- Components [virtual-table] header (#7070 by @JeremyWuuuuu)
- Components [virtual-table] table header row (#7072 by @JeremyWuuuuu)
- Components [virtual-table] TableHeaderCell (#7075 by @JeremyWuuuuu)
- ThemeChalk dark bg color overlay for components (#7005 by @YunYouJun)
- Docs add PWA support for docs (#7074 by @tolking)
- Components [virtual-table] grid table (#7081 by @JeremyWuuuuu)
- Components [virtual-table] Table (#7083 by @JeremyWuuuuu)
- ThemeChalk Add dark for custom button & adjust details (#7086 by @YunYouJun)

#### Bug fixes

- Docs documentation layout issue
- Docs small screen docs sidebar layout
- Docs small screen docs style
- Components [image] add infinite prop (#7021 by @btea)
- Deps update dependency eslint-plugin-unicorn to v42 (#6996 by @renovate[bot])
- Move @types/lodash to dep (#7046 by @sxzz)
- Utils circular reference (#7057 by @JeremyWuuuuu)
- Docs contributors when other language (#7066 by @sxzz)
- Components [popper-container] recreate container when unmounted (#7076 by @nieyuyao)
- Popover esc after visible invalid (#7064 by @chenxch)
- Components [scrollbar] dynamic update scrollbar (#7050 by @btea)
- Components [input] improved when both `suffix` and `prefix` are displayed (#7001 by @baiwusanyu-c)
- Components [select] inner input height is inconsistent with select (#6979 by @buqiyuan)
- Components [dropdown] with dialog use zIndex loop (#7012 by @chenxch)
- Dev Play vite exclude dts deps (#7089 by @weidehai)
- Components [table]emit "current-change" when currentRowKey changed (#6992 by @kakigakki)

#### Refactors

- Build improve building (#7048 by @sxzz)

### 2.1.8

_2022-04-03_

#### Features

- Components [tooltip-v2] documentation (#6870 by @JeremyWuuuuu)
- Components [el-table] add placeholder for tree table (#6905 by @msidolphin)
- Components [el-scrollbar] expose scrollTo method (#6663 by @msidolphin)
- Components [tag] add new API for rounded
- Components [el-virtual-list] support native behaviours (#6945 by @msidolphin)
- Components add tree select component (#6843 by @yujinpan)
- Components [tabs] add tab-change event (#6978 by @buqiyuan)
- Locale: Added Azerbaijani language (#6878 by @chz)

#### Bug fixes

- Components [el-input] change icon when showing password (#6846 by @plainheart)
- Components [autocomplete] can not fetch suggestions after clear (#6847 by @buqiyuan)
- Deps update all non-major dependencies (#6893 by @renovate[bot])
- Remove default size warn by set componetSizes (#6908 by @YunYouJun)
- [ElMessage] grouping mode default type (#6836 by @chenxch)
- Components [update] fix onChange hook called twice (#6885 by @LYlanfeng)
- Components [el-table] use table width as empty block width (#6694 by @plainheart)
- [el-select-v2] 修復select-v2 v-model 不能正常的支持 Object (#6888 by @czh740132583)
- Components [input] 添加prepend或append插槽后, clearable无法显示 (#6756 by @cn-troy)
- Docs [el-divider] Document case error, String to string (#6934 by @zcj996)
- Components [select] value support object (#6933 by @btea)
- Docs documentation style (#6952 by @JeremyWuuuuu)
- Theme-chalk [el-table] fix custom header background of fixed column (#6931 by @plainheart)

#### Refactors

- Components [tabs] switch to script-setup syntax (#6468 by @freedomlang)
- Components [image, image-viewer] refactor (#6704 by @buqiyuan)
- Components [calendar] refactor (#6682 by @buqiyuan)
- Chore(components): [calender] remove import defineExpose (#6974 by @btea)

### 2.1.7

_2022-03-28_

Revert "fix(components): [el-tabs] label slot not update (#6738 by @btea)" (#6871)

#### Refactors

- Theme-chalk overlay/mask/box-shadow css vars (#6848 by @YunYouJun)

### 2.1.6

_2022-03-27_

#### Bug fixes

- Time-picker spinner error style (#6850 by @iamkun)

### 2.1.5

_2022-03-25_

#### Features

- Ci enable ssr testing in CI (#6710 by @JeremyWuuuuu)
- Components [cascader] add tag-type attribute (#6726 by @btea)
- Components [autocomplete] fetchSuggestions supports Promise (#6695 by @CarterLi)
- Export constants (#6763 by @sxzz)
- Components [dropdown] add buttonProps (#6183 by @gjfei) (#6185)
- Components [el-config-provider] experimental feature toggle (#6794 by @JeremyWuuuuu)
- Components [el-config-provider] add config items (#6797 by @JeremyWuuuuu)
- Project adapt floating ui (#6812 by @JeremyWuuuuu)
- Hooks [floating] add use-floating (#6822 by @JeremyWuuuuu)

#### Bug fixes

- Components [menu-item] add fallback-placement (#6684 by @freedomlang)
- Docs update tabs click prop type (#6709 by @MrpandaLiu)
- Fix "Invalid date" display error in docs site (#6714 by @jasonren0403)
- Components [el-input] keydown event validator warming (#6691 by @HeftyKoo)
- Style [el-checkbox-group] vertical align in form-item (#6688 by @HeftyKoo)
- Components [dropdown] ignore show/hide timeouts for click trigger (#6720 by @purepear)
- Components [el-tabs] label slot not update (#6738 by @HeftyKoo)
- Components [time-picker] cancel button not work correctly (#6735 by @HeftyKoo)
- Components [input] textarea border does not display on ios (#6768 by @HeftyKoo)
- Components [message-box] textarea can not use multiline text (#6774 by @HeftyKoo)
- Global config when undefined (#6777 by @sxzz)
- Components [form] add debounce for validate state (#6779 by @sxzz)
- Doc domain check (#6793 by @0song)
- Components [el-select] reset selectedLabel when toggle multiple (#6769 by @muuyao)
- Components [el-table] cannot scroll when tableLayout is auto (#6790 by @msidolphin)
- Components [el-table] filter failed when tableLayout is auto (#6798 by @msidolphin)
- Components [form] clear validate after resetFields (#6758 by @sxzz)
- Components [cascader] loading icon position (#6802 by @btea)
- Components [el-form] clear validate after reset fields
- Import dayjs
- Components [autocomplete] fix can not fetch suggestions when after clear (#6820 by @buqiyuan)
- Cascader Unexpected display 'No Data' (#6815 by @chenxch)
- Components [tree-v2] fix setCheckedKeys([]) can't clear halfCheckedKeys (#6819 by @buqiyuan)
- Components [table-column] does not render defualt slot when children are comment nodes (#6745 by @buqiyuan)

#### Refactors

- Components [carousel] refactor (#6681 by @buqiyuan)
- Css vars for reset.scss & reset for docs & fix cards (#6698 by @YunYouJun)
- Build improve build plugin (#6721 by @sxzz)
- Theme-chalk use css var instead of component hex colors (#6727 by @YunYouJun)
- Docs switch to unocss (#6728 by @sxzz)
- Components [empty] refactor (#6703 by @buqiyuan)
- Theme-chalk use getCssVar instead of var(--el) & fix details
- Components [upload] improve code and typings (#6762 by @sxzz)
- Components [time-picker] use useNamespace (#6523 by @gjfei)
- Theme-chalk remove default size class & simplify button css (#6782 by @YunYouJun)
- Components [el-popper] refactor popper to script setups (#6725 by @JeremyWuuuuu)

### 2.1.4

_2022-03-16_

#### Bug fixes

- Components [menu] do not handle resize of child vnode (#6131 by @nieyuyao)
- Docs build without window and Element error (#6656 by @YunYouJun)
- Components [table] not scroll empty block when scrolling table (#6615 by @plainheart)
- Components [el-form] validation with callbacks throws (#6669 by @JeremyWuuuuu)
- Components [form-item] emit validate when passed not triggered (#6671 by @LYlanfeng)
- Components [el-dialog] DoneFn parameter should be optional (#6675 by @yeyuqiudeng)
- Input-number in step-strictly onChange bug (#6662 by @chenxch)

### 2.1.3

_2022-03-15_

#### Features

- Components [loading] export directive alias (#6629 by @sxzz)
- Components [el-result] warn users using subTitle as slots (#6651 by @JeremyWuuuuu)

#### Bug fixes

- Components [pagination] button bg color (#6628 by @YunYouJun)
- Deps update dependency @vueuse/core to v8 (#6605 by @renovate[bot])
- Theme-chalk [drawer] bg color (#6631 by @YunYouJun)
- Theme-chalk [mixins] use set-css-var-value to transpile text (#6630 by @YunYouJun)
- Form item instance was not destroyed (#6641 by @JeremyWuuuuu)
- Components [result] rename slot's name from 'subTitle' to 'sub-title' (#6636 by @freedomlang)
- Docs  fix wrong link in README.md (#6649 by @Serendipity96)
- Selet-v2 value-key mode selected style and onClonse bug (#6602 by @chenxch)

#### Refactors

- Docs adjust style details & fix pages width (#6624 by @YunYouJun)
- Build move to internal package (#6585 by @sxzz)

### 2.1.2

_2022-03-14_

#### Bug fixes

- Deps update all non-major dependencies (#6604 by @renovate[bot])
- Docs border-color css var (#6620 by @YunYouJun)
- Components [el-form] Form not emitting validation result (#6610 by @JeremyWuuuuu)
- Theme-chalk [message-box] el-message-box__status position may o… (#6614 by @yeyuqiudeng)
- Theme-chalk [cascader/checkbox] fix unexpected fill color (#6619 by @plainheart)

#### Refactors

- Components [rate] use css var & disable to disabled & star-color to fill-color (#6601 by @YunYouJun)

### 2.1.1

_2022-03-13_

#### Features

- Ci setup cypress circle ci (#6581 by @JeremyWuuuuu)
- Ci replace cypress  with puppeteer (#6592 by @JeremyWuuuuu)
- Components [el-table] exposes scroll methods (#6539 by @msidolphin)

#### Bug fixes

- Component [el-tabs] the initial pane should only render for once (#6563 by @KawaiiZapic)
- Components [carousel] center arrow (#6573 by @buqiyuan)
- Ci skip if no changes at all (#6574 by @JeremyWuuuuu)
- Components [popper-trigger] SSR issue (#6575 by @JeremyWuuuuu)
- Ci build product check (#6587 by @JeremyWuuuuu)
- Components [dialog] remove footer when not existed (#6590 by @sxzz)
- Docsearch dark shadow (#6595 by @YunYouJun)
- Components [form] set validateState to success after passed (#6596 by @plainheart)
- Upload component remove status label box shadow (#6586 by @iamkun)

#### Refactors

- Components [divider] switch to script-setup (#6556 by @wzrove)
- Components [input] refactor (#6545 by @sxzz)
- Theme-chalk rewrite palette & remove -base suffix (#6593 by @YunYouJun)
- Components [rate] switch to script-setup syntax (#6565 by @btea)
- Components [skeleton] switch to script-setup syntax (#6395 by @freedomlang)
- Theme-chalk dark.scss to css vars & migrate fill-color-blank (#6597 by @YunYouJun)

### 2.1.0

_2022-03-12_

#### Features

- Components [message] support re-render vnode (#6527 by @sxzz)

#### Bug fixes

- Ci remove clean script (#6550 by @JeremyWuuuuu)
- Ci clean up several warning (#6551 by @HerringtonDarkholme)
- Ci fix cascader ns querySelector class (#6552 by @HerringtonDarkholme)
- Build move eslint config to internal (#6553 by @sxzz)
- Ci suppress warning by mark icon as raw (#6555 by @HerringtonDarkholme)
- Components [upload] photo-wall wrap (#6546 by @YunYouJun)

#### Refactors

- Components [link] dynamic css vars & fix inner align (#6557 by @YunYouJun)
- Components [link] refactor (#6543 by @sxzz)


### 2.0.6

_2022-03-11_

#### Features

- [el-table] support always show scrollbar & get selection rows (#6469 by @msidolphin)
- Extract eslint config to separate package (#6495 by @sxzz)
- Export dayjs instance, closes #6498 (#6517 by @sxzz)
- Components [select]add collapse-tags-tooltip (#6245 by @Alanscut)
- Components [select-v2]add collapse-tags-tooltip (#6532 by @Alanscut)
- Components [cascader]add collapse-tags-tooltip (#6331 by @Alanscut)

#### Bug fixes

- Deps update all non-major dependencies (#6448 by @renovate[bot])
- Components [el-select] optimize prefix size & selected style (#6267 by @msidolphin)
- Components [el-table] defaultSort not working (#6322 by @msidolphin)
- [el-table] fixed columns display when horizontal cannot scroll (#6320 by @msidolphin)
- Components [el-checkbox] modelValue (#6168 by @gjfei) (#6169)
- Components[select] (#6446 by @gjfei) (#6474)
- Components [el-collapse] collapse item key pressing jumping (#6462 by @JeremyWuuuuu)
- Components [message] offset error (#6497 by @Alanscut)
- Components[select] namespace (#6486 by @gjfei)
- Components el-select-allow-dynamically-update-options (#6473 by @gjfei)
- Components [el-tooltip] close the dropdown after set disabled (#6467 by @Alanscut)
- Docs improve component typings (#6524 by @sxzz)
- Workflow coverage (#6518 by @sxzz)
- Components [upload] fileList prop should sync uploadFiles (#6492 by @exherb)
- Components [rate] fix disbaledVoidIcon typo (#6456 by @Shana-AE)
- Components [select] display error when setting persistent to false (#6522 by @Alanscut)
- Components [el-input] pass input-style props to input-wrapper (#6506 by @zt123123)
- Components [el-table] escape special html characters (#6520 by @msidolphin)
- Components [autocomplete] fix shaking at first open (#6342 by @freedomlang)
- Components [el-upload] jitter when remove file in the list (#6505 by @msidolphin)
- Components [el-menu] icon is not to the right of the text (#6268 by @Alanscut)
- Test(components): [select] click icon twice (#6471 by @Alanscut)
- Chore(project): add escape-html as dependency for main entry (#6534 by @JeremyWuuuuu)

#### Refactors

- Components!: refactor form (#5401 by @sxzz)
- Components [row] refactor (#6354 by @sxzz)
- Docs [form] improve docs and typings (#6447 by @sxzz)
- Improve build dts (#6457 by @sxzz)
- Components [cascader,cascader-panel] add namespace (#5589 by @gjfei)
- Components [breadcrumb] switch to script-setup syntax (#6073 by @buqiyuan)
- Theme-chalk message css var & add getCssVarName (#6488 by @YunYouJun)
- Utils remove isFF (#6507 by @btea)
- Theme-chalk [upload] use bem rewrite upload scss & fix bugs (#6508 by @YunYouJun)
- Perf(components): [el-table] optimize the performance of expand rows (#6480 by @msidolphin)
- Style(components): rename disabled to is-disabled (#6475 by @freedomlang)


### 2.0.5

_2022-03-06_

#### Features

- Components [el-notification] add context for notification (#6367 by @JeremyWuuuuu)
- Components [el-notification] add context for notification (#6368 by @JeremyWuuuuu)
- Components export prop `persistent` in `el-select` (#6428 by @CarterLi)
- Components [el-messagebox] add context for message box (#6379 by @JeremyWuuuuu)
- Components [el-dialog] add border-radius css variable (#6412 by @msidolphin)

#### Bug fixes

- Components set flex-shrink for first child of submenu title (#6315 by @nieyuyao)
- Components [message-box]add type declaration of button-size (#6344 by @Wiensss)
- Components [message-box] fix center style (#6356 by @llllllllllx)
- Components [el-dropdown-menu] override default style (#6328 by @msidolphin)
- Components [button] space is not added (#6361 by @Alanscut)
- Components [tabs] optimize new icon style (#6327 by @msidolphin)
- Components work around #6378 (#6380 by @CarterLi)
- Components make margin of search equal to padding of el-input (#6409 by @nieyuyao)
- Components [select] fix align issue for remove button (#6397 by @freedomlang)
- Components [select-v2] style error when form is set to disabled (#6391 by @Alanscut)
- Components [el-input] override edge browser default password style (#6423 by @msidolphin)
- Theme-chalk [input] custom theme error (#6430 by @Alanscut)
- Theme-chalk namespace (#6416 by @gjfei)
- Components[el-collapse-transition] styles (#6414 by @gjfei)
- Build output task name repeat (#6363 by @HitStarrySky)
- [el-table] selection cell when double clicking expand icon (#6400 by @msidolphin)
- Components [form] trigger can be a string list (#5975 by @ntnyq)
- Components [el-popover] transition error (#6329 by @Alanscut)
- Components [select] click icon not respond (#6441 by @Alanscut)
- Components [el-table] render failed when custom table column (#6398 by @msidolphin)
- Components [el-table] scrollbar cannot display when resize table (#6369 by @msidolphin)
- Components [dropdown] add disabled support (#6375 by @freedomlang)

#### Refactors

- Components [autocomplete] refactor autocomplete (#6067 by @buqiyuan)
- Components [collapse] refactor (#6307 by @buqiyuan)
- Components [slot] refactor (#6302 by @sxzz)
- Components [check-tag] switch to script-setup syntax (#6296 by @sxzz)
- Components [page-header] switch to script-setup syntax (#6321 by @freedomlang)
- Components [col] refactor (#6303 by @sxzz)
- Components [teleport] refactor (#6301 by @sxzz)
- Components [affix] use vueuse utils (#6295 by @sxzz)
- Components [dialog] refactor (#6300 by @sxzz)
- Components refactor upload (#6014 by @emojiiii)

### 2.0.4

_2022-02-28_

#### Features

- Components [button] add icon slot (#6343 by @sxzz)

#### Bug fixes

- Docs jitter when expand source code (#6279 by @msidolphin)
- Docs fix banner covering sponsor problem (#6269 by @msidolphin)
- Deps update dependency @element-plus/icons-vue to v1 (#6319 by @renovate[bot])
- Components [el-dialog] don't ignore z-index (#6332 by @purepear)
- Components [el-dialog] revert focus trapping feature (#6346 by @JeremyWuuuuu)

#### Refactors

- Components [tag] switch to script-setup syntax (#6288 by @freedomlang)
- Utils extract `isElement` (#6292 by @btea)

### 2.0.3

_2022-02-25_

#### Features

- Components [el-menu] support customize popper offset (#6049 by @msidolphin)
- [el-popover] add before-enter、before-leave (#6203 by @xiaoxian521)
- Docs add docs dark basic style (#6196 by @YunYouJun)
- Components [el-popconfirm] support persistent (#6207 by @msidolphin)
- Components [el-dialog] enhancement for dialog a11y (#6087 by @JeremyWuuuuu)
- Components [el-row] enhancement for supporting space-evenly (#6223 by @gp5251)
- Components [badge] expose content (#6247 by @sxzz)
- Components [message] add vue context for message component (#6259 by @JeremyWuuuuu)

#### Bug fixes

- Components [el-table] auto-load missing scrollbar style (#6045 by @msidolphin)
- Components [el-input] missing margin between two icons (#5942 by @kouchao) (#6017)
- Components [el-rate] allow-half show two icon (#6076 by @btea)
- Components pass through appendTo (#6146 by @hhparty)
- Components [el-table] footer layout error (#6090 by @msidolphin)
- Components [el-table] optimize popover  performance (#6170 by @msidolphin)
- Components [el-table] column width calc error during resize (#6171 by @msidolphin)
- Components [el-dropdown-item] (#6147 by @iwusong)
- Components [el-switch] increase the word count of (in)active-text (#6140 by @Alanscut)
- Docs [popover] add description of teleported (#6137 by @Alanscut)
- Formatter func parameter type miss (#6186 by @zongzi531)
- Components [el-table] some columns are missing in older chrome (#6111 by @msidolphin)
- [el-popover] compatible svg (#6089 by @xiaoxian521)
- Components [select-v2] fix #6083 bug (#6084 by @weidehai)
- Locale language type (#6198 by @sxzz)
- Deps (#6213 by @sxzz)
- Docs remove fixed variables & add color palette (#6216 by @YunYouJun)
- Components [el-dialog] refactor left overs (#6211 by @JeremyWuuuuu)
- Style classes for hiding elements (#6217 by @Alanscut)
- Components [el-table] fix clearFilter failure problem (#6212 by @msidolphin)
- Components [el-popper] fix #6152 bug (#6173 by @weidehai)
- Components[el-date-picker] styles (#6187 by @gjfei)
- Theme-chalk remove useless tag close icon css attribute (#6242 by @YunYouJun)
- Deps update all non-major dependencies (#6251 by @renovate[bot])
- Components [el-dropdown-menu] adjust html tag (#6231 by @msidolphin)
- Components [el-time-picker] lags when open range picker (#6249 by @msidolphin)
- Docs do not useDark when production (#6262 by @YunYouJun)
- Typo (#6263 by @HandsomeOne)
- [el-select] remove last tag margin-right (#5992 by @btea)
- Style(components): [el-select] add margin-left when collapse-tags exists (#6037 by @wzrove)

#### Refactors

- Improve tsconfig (#5993 by @sxzz)
- Components [badge] switch to script-setup syntax (#6068 by @buqiyuan)
- Components [el-badge] use utils isNumber (#6095 by @btea)
- Components [affix] switch to script-setup syntax (#6065 by @buqiyuan)
- Components [alert] switch to script-setup syntax (#6066 by @buqiyuan)
- Components [backtop] switch to script-setup syntax (#6069 by @buqiyuan)
- Components [el-input] use box-shadow to implement border (#6031 by @msidolphin)
- Theme-chalk use scss list & map generate type css var (#6221 by @YunYouJun)
- Components [avatar] switch to script-setup syntax (#6070 by @buqiyuan)
- Components [affix] use JSX in Unit test (#6159 by @buqiyuan)
- Components [backtop] use JSX in Unit test (#6160 by @buqiyuan)
- Components [card] switch to script-setup syntax (#6071 by @buqiyuan)
- Components [button-group] switch to script-setup syntax (#6256 by @freedomlang)

### 2.0.2

_2022-02-14_

#### Features

- Switch to lodash-unified (#5734 by @sxzz)
- Components [el-table] support tableLayout (#5860 by @msidolphin)
- Tabpane name support number type (#5915 by @xiaoxian521)
- Dev support multi-entry (#5945 by @sxzz)
- Export all locale (#5943 by @sxzz)
- Components [el-time-picker] add visibleChange event (#5704 by @weidehai)
- Add `defineOptions` for `script-setup` (#5932 by @sxzz)
- Support jsx, closes #5708 (#5947 by @sxzz)
- Components [el-table] `maxHeight` support more units (#5904 by @msidolphin)
- Components [el-image] support append preview to body (#5883 by @msidolphin)
- Components [el-select] add effect and close #5956 (#5976 by @BeADre)
- Play file doesn't exist jump to App (#5985 by @btea)
- Components [el-pagination] support custom button background color (#6012 by @DarkHighness)
- Add support for malagay language (#6019 by @mrzdevcore)

#### Bug fixes

- Hooks [use-namespace] cannot be used in nested hooks (#5795 by @buqiyuan)
- Compnents [el-input-number] cannot read properties of null (reading 'setAttribute') #5691
- Components [el-dropdown] use custom attributes for dropdown items (#5779 by @mawi1512)
- Components [el-table] group header not supported fixed column (#5873 by @msidolphin)
- Components [el-popover] update popperInstance when props change (#5835 by @QuXiaoMing)
- Only enable preserveSymlinks on build (#5877 by @sxzz)
- Utils undefined when omiting prop default (#5868 by @sxzz)
- Docs [pagination] example bugfix according to new usage (#5833 by @ioslh)
- Utils-v2 add Function type to iconPropType (#5890 by @xiaoxian521)
- Components [el-slider] sync manually updated value (#5876 by @msidolphin)
- Docs algolia searching (#5926 by @JeremyWuuuuu)
- Value does not exist, warning appears (#5906 by @xiaoxian521)
- Components [dialog] fix dialog not fill full screen after drag (#5875 by @buqiyuan)
- Hooks `namespace.is` default state (#5941 by @sxzz)
- Components [el-popconfirm] fix onConfirm and onCancel type bug (#5948 by @virgosoy)
- Components [select] define nsInput & rename ns to nsSelect (#5953 by @buqiyuan)
- Components [el-time-picker] border overlap in hover state (#5950 by @msidolphin)
- Components [el-select] (#5952 by @JacBian)
- Components [select] change the tagType and style default value (#5884 by @btea)
- Components [el-menu] collapse menu active color (#5735 by @adaex)
- [el-select-v2] avoid remove new option when reserve-keyword is true (#5912 by @msidolphin)
- Delete alteredCollapse in menu (#5889 by @xiaoxian521)
- Components [el-table] avoid scrollbar not display (#5920 by @msidolphin)
- Play fix tsconfig types path (#5965 by @btea)
- Replenish popover missing types (#5958 by @xiaoxian521)
- Namespace typo (#5972 by @msidolphin)
- Utils restore scrollIntoView method (#5973 by @JeremyWuuuuu)
- El-tree isLeaf type is string (#5954 by @xiaoxian521)
- Components fix [el-select] infinite bounce (#5977 by @eriksyuan)
- Delete offset in usePopoverProps (#5980 by @xiaoxian521)
- Add offset in usePopoverProps (#5982 by @xiaoxian521)
- Components [el-select] tag default theme (#5983 by @JeremyWuuuuu)
- Components [el-popper] effect prop validation error (#5978 by @JeremyWuuuuu)
- Components style error when component import order is unknown (#5938 by @emojiiii)

#### Refactors

- Components [collapse-transition] use useNamespace (#5716 by @buqiyuan)
- Components [color-picker] use useNamespace (#5718 by @buqiyuan)
- Components [page-header] use useNamespace (#5724 by @buqiyuan)
- Components [overlay] use useNamespace (#5723 by @buqiyuan)
- Components [teleport] use useNamespace (#5751 by @buqiyuan)
- Components [notification] use useNamespace (#5722 by @buqiyuan)
- Add transition namespace (#5829 by @sxzz)
- Components [col] use useNamespace (#5714 by @buqiyuan)
- Components [progress] use useNamespace (#5729 by @buqiyuan)
- Components [collapse,collapse-item] use useNamespace (#5715 by @buqiyuan)
- Components [popconfirm] use useNamespace (#5726 by @buqiyuan)
- Components [message] use useNamespace (#5720 by @buqiyuan)
- Components [dialog] use useNamespace (#5761 by @buqiyuan)
- Components [space] use useNamespace (#5749 by @buqiyuan)
- Hooks refactor popup manager to useZIndex (#5701 by @sxzz)
- Utils-v2 refactor utils (#5699 by @sxzz)
- Components [upload] use useNamespace (#5758 by @buqiyuan)
- Components  [tree-v2] use useNamespace (#5757 by @buqiyuan)
- Components [transfer] use useNamespace (#5753 by @buqiyuan)
- Components [tooltip] use useNamespace (#5752 by @buqiyuan)
- Components [select-v2] use useNamespace (#5738 by @buqiyuan)
- Components [slider] use useNamespace (#5743 by @buqiyuan)
- Components [tree] use useNamespace (#5754 by @buqiyuan)
- Components [select] use useNamespace (#5733 by @buqiyuan)
- Components [popper] use useNamespace (#5728 by @buqiyuan)
- Components [steps] use useNamespace (#5944 by @buqiyuan)
- Components [pagination] use useNamespace (#5725 by @buqiyuan)
- Components [dropdown,dropdown-item,dropdown-menu] use useNamespace (#5719 by @buqiyuan)
- Utils migrate utils (#5949 by @sxzz)
- Fix buildProps (#5936 by @sxzz)
- Components [popover] use useNamespace (#5727 by @buqiyuan)
- Components refactor button (#5933 by @sxzz)
- Components [radio,radio-button,radio-group] use useNamespace (#5731 by @buqiyuan)
- Utils improve escapeStringRegexp (#6013 by @sxzz)
- Components refactor icon (#5934 by @sxzz)
- Fix select-v2 placeholder's size wrong (#5989 by @xiaoxian521)

### 2.0.1

_2022-02-07_

#### Bug fixes

- Components [el-popconfirm] revert component name (#5815 by @msidolphin)
- [el-pagination] fix justify alignment (#5814 by @msidolphin)

### 2.0.0

_2022-02-07_

#### Bug fixes

- Components [Dialog & MessageBox] support draggable (#5369 by @kooriookami)
- Components [el-popper] append to body compatability (#5755 by @JeremyWuuuuu)

### 1.3.0-beta.10

_2022-01-31_

#### Features

- Theme-chalk css var for empty & rate (#5359 by @MoConWu)

#### Bug fixes

- Components [el-table] fix invalid maxHeight issue (#5584 by @msidolphin)
- Components [el-table] hover not working in fixed mode (#5638 by @msidolphin)
- Theme-chalk el-breadcrumb__item style (#5597 by @GGupzHH)
- Theme-chalk [el-pagination] quick button disabled state (#5672 by @msidolphin)
- Components [image-viewer] fix some bugs and improve style (#5673 by @kooriookami)
- Components fix #5582 (#5583 by @CarterLi)
- Docs fix el-tree props disabled type (#5540 by @ChenAdien)
- Upgrade vueuse (#5698 by @sxzz)
- Components [cascader] Unable to use spaces when filtering (#5676 by @emojiiii)
- Components [popover] after-enter/leave events not trigger (#5681 by @emojiiii)
- Style: fix popper style (#5736 by @kooriookami)

#### Refactors

- Components [drawer] use useNamespace (#5596 by @btea)
- Components [el-tag] use namespace (#5643 by @msidolphin)
- Components [el-pagination] adjust component size (#5640 by @msidolphin)
- Components [el-pagination] optimize component style (#5666 by @msidolphin)
- Components [scrollbar] use useNamespace (#5732 by @buqiyuan)
- Components [skeleton,skeleton-item] use useNamespace (#5739 by @buqiyuan)
- Perf(components): [el-scrollbar] prevent re-render when scrolling (#5670 by @msidolphin)


### 1.3.0-beta.9

_2022-01-25_

#### Bug fixes

- Components [el-checkbox] is-disabled class is added unexpectedly
- Components [el-popover] hide-after bug (#5386 by @BigPengZai)
- Components [el-transfer] can't find clearQuery (#5438 by @btea)
- Components [el-message-box] add default value to button-size (#5620 by @btea)

#### Refactors

- Refactor carousel to support namespace (#5553 by @iamkun)

### 1.3.0-beta.8

_2022-01-24_

#### Features

- Components [el-dialog] remove width validator (#5329 by @purepear) (#5568)

#### Bug fixes

- Dev fix default imports & add https support (#5572 by @sxzz)
- Build esbuild transform vue sfc (#5602 by @sxzz)
- Build locale export default (#5576 by @sxzz)

#### Refactors

- Refactor backtop to support namespace (#5552 by @iamkun)
- Refactor autocomplete to support namespace (#5550 by @iamkun)
- Components [checkbox] use useNamespace (#5493 by @btea)

### 1.3.0-beta.7

_2022-01-22_

#### Bug fixes

- Components [el-pagination] jumper prohibit decimal (#5512 by @btea)
- Build disable tree shaking (#5558 by @sxzz)

#### Refactors

- Components [image, image-viewer] use useNamespace (#5513 by @btea)

### 1.3.0-beta.6

_2022-01-22_

#### Features

- Components [el-time-select] support custom format (e.g. 12-hour) (#5309 by @Alanscut)
- Support custom namespace (#5377 by @iamkun)
- Dropdown add popper-options prop (#5396 by @kooriookami)
- Build add full bundle locale (#5399 by @sxzz)
- Components [el-drawer] add footer slot (#5404 by @Alanscut)
- Components [el-date-picker] add panel change event (#5304 by @msidolphin)
- [el-select-v2]add reserve-keyword and change docs (#5308 by @Alanscut)
- Hooks [use-namespace] add is (#5466 by @sxzz)
- Hooks [use-namespace] add bm (#5475 by @sxzz)
- Components [el-dropdown]add handleOpen and handleClose methods (#5444 by @Alanscut)
- Components [tree] node-click passes event object (#4312 by @msidolphin)
- Components [el-button] support for customize loading component (#5505 by @msidolphin)

#### Bug fixes

- Components [el-cascader] inline style (#5339 by @Alanscut)
- Components [el-dropdown-menu] size (#5343 by @Alanscut)
- Components fix TreeOptionProps types (#4813 by @ElsaOOo)
- Fix space style (#5387 by @kooriookami)
- Components time picker when midnight (#5403 by @sxzz)
- Components [el-select] suffix-icon disabled (#5354 by @Alanscut)
- Hooks component size (#5402 by @sxzz)
- Components [el-table] fixed column position error issue (#5430 by @msidolphin)
- [input-number] modelValue change to non-required (#4338 by @msidolphin)
- Components [el-scrollbar] fix cannot selection issue (#5330 by @msidolphin)
- Components [el-popover] revert hide method (#5344 by @msidolphin)
- [el-table] fix checkbox cleared when data reference is not changed (#5443 by @msidolphin)
- Components [el-time-picker] fix adjust scroll position fail issue (#5312 by @msidolphin)
- Components [el-image] image load error (#4820 by @holynewbie)
- Components [el-avatar] fix avatar default size (#5129 by @zhuige)
- Components [el-input-number]do not change undefined to NaN (#5049 by @Alanscut)
- Components [el-date-picker]make defaultValue be reactive (#4808 by @Alanscut)
- Components [el-select] hover index (#4423 by @Alanscut)
- Components [el-cascader] suddenly jump to the left (#4516 by @Alanscut)
- Components [el-collapse] watch modelValue invalid (#4593 by @Alanscut)
- Components [el-color-picker] active-change triggered incorrectly (#4729 by @Alanscut)
- Slider tooltip (#5508 by @kooriookami)
- Components fix sub-menu style (#5516 by @sxzz)
- Components [el-message] style conflict (#5530 by @msidolphin)
- Upgrade vueuse, closes #5313, #5362 (#5543 by @sxzz)
- Add export file extension, closes #5522 (#5544 by @sxzz)
- Components [el-select-v2] optimize component size (#5531 by @msidolphin)
- Components [el-tree] accordion attribute error at third level (#3862 by @Alanscut)
- Components [infinite-scroll] Infinite scroll (#5393 by @Alanscut)
- Components [el-select-v2]set v-model has error (#5128 by @Alanscut)
- Components [el-cascader] checkStrict and lazyLoad need click twice (#4182 by @Alanscut)
- Style: msgbox (#5371 by @kooriookami)
- Style: tooltip padding (#5433 by @kooriookami)
- Chore: improve table style (#5511 by @msidolphin)

#### Refactors

- Components [empty] add namespace & instance type (#5446 by @sxzz)
- Components [card] add namespace & instance type (#5445 by @sxzz)
- Components [link] add namespace & instance type (#5449 by @sxzz)
- Components [result] add namespace & instance type (#5453 by @sxzz)
- Components [switch] add namespace (#5455 by @sxzz)
- Components [icon] add namespace & instance type (#5452 by @sxzz)
- Components [row] add namespace & instance type (#5454 by @sxzz)
- Components refactor timeline (#5458 by @sxzz)
- Components [rate] add namespace & instance type (#5456 by @sxzz)
- Components [divider] add namespace & instance type (#5462 by @sxzz)
- Components [avatar] add namespace & instance type (#5461 by @sxzz)
- Components [alert] add namespace & instance type (#5459 by @sxzz)
- Components [breadcrumb] add namespace & instance type (#5472 by @sxzz)
- Components [badge] add namespace & instance type (#5473 by @sxzz)
- Components [affix] add namespace & instance type (#5474 by @sxzz)
- Components [input, input-number] add namespace (#5488 by @Valar103769)
- Components use useNamespace is (#5468 by @sxzz)
- [el-table] refactoring table with el-scrollbar (#5384 by @msidolphin)
- Components [descriptions] use useNamespace (#5499 by @btea)
- Components [container] use useNamespace (#5498 by @btea)
- Components [calendar] add namespace (#5496 by @Valar103769)
- Build switch to @vitejs/plugin-vue (#5504 by @sxzz)
- Components [el-table] use namespace (#5528 by @msidolphin)
- Refactor(components): refactor check-tag (#5451 by @sxzz)

### 1.3.0-beta.5

_2022-01-12_

#### Bug fixes

- Fix error build type file (#5335 by @JeremyWuuuuu)

### 1.3.0-beta.4

_2022-01-11_

#### Features

- Components [el-tabs] add active-bar width transition (#5206 by @purepear) (#5223)

#### Bug fixes

- Dropdowm item can not click (#5257 by @kooriookami)
- Components [el-tree] fix safari drop animation issue (#5294 by @msidolphin)
- Components [el-dropdown] cannot be closed by clicking outside (#5287 by @JeremyWuuuuu)
- Style [el-dropdown] fix doc style (#5266 by @kooriookami)
- Components [el-date-picker] panel position error after view switch (#5277 by @msidolphin)
- Components [el-tooltip] restoring append-to API (#5296 by @JeremyWuuuuu)
- Fix DateRangePicker custom style & class bug (#5300 by @0song)
- [el-calendar] selected wrong date when change the month/year (#5297 by @msidolphin)
- Project adding cypress into element plus (#5281 by @JeremyWuuuuu)

### 1.3.0-beta.3

_2022-01-09_

#### Bug fixes

- Components make Datepicker `value-format="x"` emit number timestamp value (#5187 by @CarterLi)
- Tooltip with compoents add persistent (#5250 by @kooriookami)

### 1.3.0-beta.2

_2022-01-08_

#### Features

- Add global properties typings (#5075 by @sxzz)
- Components [el-message-box] add role="dialog" attribute (#5190 by @purepear)
- Components [el-rate] rate add size prop (#5102 by @kooriookami)
- Components [el-switch] switch add size prop (#5101 by @kooriookami)
- Components [el-slider] slider add size prop (#5091 by @kooriookami)
- Components checkbox & radio support small size (#5189 by @msidolphin)
- Docs Add migration chapter (#5205 by @JeremyWuuuuu)
- Export popup manager (#5220 by @sxzz)
- Components [el-tag] adjust icon size (#5207 by @btea)
- Components [el-cascader] cascader panel loading placeholder (#5064 by @KawaiiZapic)
- Components [el-message] config-provider message max attr (#5063 by @btea)

#### Bug fixes

- Docs docs site deploy error (#5081 by @JeremyWuuuuu)
- Theme-chalk input-number controls increase/decrease height (#5088 by @YunYouJun)
- Components popper content fallback placements (#5119 by @JeremyWuuuuu)
- Docs correct minor typos (#5140 by @MrFu1998)
- Components [el-select-v2] tag overflow (#5160 by @Alanscut)
- Components width reset to empty string should be parsed to auto (#5186 by @cokemine)
- Components [el-date-picker] fix footer style (#5144 by @msidolphin)
- Components [el-table] improve scrollable condition (#5149 by @msidolphin)
- Fix el-input-number inputting will trigger form validate (#4838 by @kooriookami)
- Components [el-form] fix form style (#5145 by @kooriookami)
- Hooks provide root locale (#5218 by @sxzz)
- Components [el-date-picker] ignore special flag (#5200 by @msidolphin)
- Docs [el-icon] fix svg icon cannot copied issue (#5208 by @msidolphin)
- Components [el-pagination] layout error (#5181 by @Alanscut)
- Components [el-transfer] improve styles (#5139 by @msidolphin)

#### Refactors

- Docs auto import icons & optimize details (#5087 by @YunYouJun)
- Docs add spacing for switch example (#5092 by @YunYouJun)
- Utils!: remove global config (#5093 by @sxzz)
- Components popper composables (#5035 by @JeremyWuuuuu)
- Components [layout] optimize performance (#4600 by @msidolphin)
- [el-table] using sticky position refactor fixed column (#4414 by @msidolphin)
- Utils remove isServer (#5173 by @btea)

### 1.3.0-beta.1

_2021-12-31_

#### Breaking changes:

- Please refer to: [1.3.0-beta.1 Breaking change](https://github.com/element-plus/element-plus/discussions/5037)

#### Features

- Components [el-dropdown] add new "popper-class" prop (#4909 by @jagoncalves14)
- [el-popconfirm]add debounce of confirm() and cancel() (#4943 by @Alanscut)
- Components [date/time-picker] add id attribute to the inputs (#4972 by @purepear)
- Components [ElCheckboxGroup] add Fragment (#4743 by @emojiiii)

#### Bug fixes

- Components [ElDatePicker] click clear is invalid (#4768 by @emojiiii)
- Style update cascader radio button padding size (#5057 by @JeremyWuuuuu)
- [el-date-picker] focus input box when focus method is called (#4343 by @msidolphin)
- Components [date-picker] filter custom content comment (#4651 by @btea)
- Build circular dependency (#4791 by @sxzz)
- Style custom icon size (#4798 by @YunYouJun)
- Theme-chalk Put back !optional to @extend (#4835 by @cregis0073)
- Components [el-form] vertical aligin (#4717 by @Alanscut)
- Style adjust component size & demo (#4801 by @YunYouJun)
- Components [el-popper] onVisibilityChange (#4907 by @imswk)
- [el-checkbox-group]: default value adjusted to empty array (#4316 by @msidolphin)
- Tag in select style (#4914 by @YunYouJun)
- Components [select-v2] missing validate action when clear (#4892 by @Ryan2128)
- Core fix unit testing warning (#4948 by @HerringtonDarkholme)
- Components change size mini to small (#4947 by @HerringtonDarkholme)
- Components always emit scroll with scrollTop number (#4974 by @HerringtonDarkholme)
- Components fix more size prop checks (#4975 by @HerringtonDarkholme)
- Components fix message warning (#4979 by @HerringtonDarkholme)
- Components [el-step] 移除在simple模式下多余的点 (#4944 by @cn-troy)
- Components [el-loading] fix the overlap problem
- Message-box confirm button style (#4988 by @YunYouJun)
- Components [el-drawer] fix content cannot scroll issue (#5001 by @msidolphin)
- Components [el-upload] improve image style (#4902 by @fanhefeng)
- Locale update translation/spelling of Khmer (#4930 by @ITKHMER)
- Components input-number/input/dropdown/select/badge details (#4866 by @YunYouJun)
- Components [el-input-number]set undefined to modelValue (#4869 by @Alanscut)
- Theme-chalk upload progress & menu padding style & pagination align (#5011 by @YunYouJun)
- Adjust tag icon size & add checkbox with-border demo (#5033 by @YunYouJun)
- Theme-chalk auto menu item height & add css var, close #4864 (#5034 by @YunYouJun)
- Components adjust style of the radio and form (#5047 by @msidolphin)
- Components [time-picker] improve typings (#4810 by @CarterLi)
- Perf: [el-switch] activeIcon and inactiveIcon type (#4899 by @xiaoxian521)
- Style: update descriptions style (#5025 by @kooriookami)

#### Refactors

- Utils use @ctrl/tinycolor instead of custom color.ts (#4682 by @YunYouJun)
- Style adjust component size to large/default/small (#4491 by @YunYouJun)
- Utils remove isServer (#4792 by @sxzz)
- Docs use setup sugar simplify input demo (#4845 by @YunYouJun)
- Components set messagebox button size be default (#4846 by @YunYouJun)
- Upgrade vue & remove `@vue/compiler-sfc` (#4815 by @sxzz)
- Style adjust table size to large/default/small (#5036 by @iamkun)
- Utils: refactor global config (#4793 by @sxzz)

### 1.2.0-beta.6

_2021-12-10_

#### Features

- Components [ElCalender] add internationalization (#4582 by @emojiiii)
- Components [el-dialog] support custom close icon (#4514 by @spx443812507)
- Components [el-divider] support setting the dividing line style  (#4435 by @Alanscut)
- Components [el-select] tag type (#4504 by @Alanscut)
- Components [el-config-provider] add size (#4730 by @sxzz)

#### Bug fixes

- Theme-chalk add !optional to @extend
- Components [el-date-picker] can't use numpadEnter (#4563 by @Alanscut)
- Hooks rename `ConfigProvdierContext` to `ConfigProviderContext` (#4620 by @emojiiii)
- Components dropdown menu divided style, close #4631 (#4638 by @YunYouJun)
- Components [el-config-provider] autoInsertSpace false (#4629 by @Alanscut)
- Locale update ca (#4644 by @oscaralbareda)
- Components [el-button] computed type (#4641 by @btea)
- Style icon font-size inherit (#4565 by @YunYouJun)
- Hooks fix translate option (#4619 by @sxzz)
- Components [el-message] fit badge error type (#4662 by @btea)
- Hooks return key name if not defined (#4664 by @sxzz)
- Upgrade @element-plus/icons-vue to currentColor (#4671 by @YunYouJun)
- Vue type errors (#4696 by @sxzz)
- Components [el-table] tooltip wrong style
- Components [el-input-number]raise native form validation error (#4706 by @Alanscut)
- Hooks [lockscreen] body lock remove unexpected (#4693 by @KawaiiZapic) (#4694)
- Docs fix code not working in Codepen (#4678 by @imguolao) (#4679)
- Components [el-input-number]set value equal to min will update (#4650 by @Alanscut)
- Docs replace @element-plus/icons with @element-plus/icons-vue (#4704 by @pdsuwwz)
- Docs fix webpack config import syntax (#4718 by @owenvip)
- Style override el-icon display in el-input__icon (#4684 by @YunYouJun)
- Components [el-menu] third-party icons are hidden (#4754 by @Alanscut)
- Components [table-column, time-picker] improve typings (#4761 by @CarterLi)
- Build compatible to build on windows (#4747 by @sxzz)
- Components [el-tooltip] fallback placement (#4771 by @Alanscut)

#### Refactors

- Change icon package name (#4625 by @sxzz)
- Components refactor drawer (#4282 by @Alanscut)
- Style rename -color-base to --el-bg-color (#4615 by @YunYouJun)
- Components refactor calendar (#4325 by @Alanscut)
- Components refactor progress
- Components refactor progress
- Improve types (#4746 by @sxzz)
- Components refactor loading (#4750 by @sxzz)
- Components [el-checkbox] simplify the value (#4674 by @iceshou)
- Components refactor switch (#4271 by @emojiiii)

### 1.2.0-beta.5

_2021-12-01_

#### Features

- Docs add auto import and update icon (#4554 by @sxzz)

#### Bug fixes

- Components confirm button style when in message-box (#4564 by @YunYouJun)
- Style input inner padding right when has suffix (#4574 by @YunYouJun)
- Components [ElMenu] the collapsible menu switch will disappear (#4575 by @emojiiii)
- Components [ElScrollbar] fix useResizeObserver watch undefined (#4576 by @emojiiii)
- Components [el-tag] icon-center (#4438 by @Alanscut)
- Components [el-dropdown] icon vertical center (#4431 by @Alanscut)
- Utils setTimeout & config-provider type (#4598 by @sxzz)

#### Refactors

- Hooks refactor hooks (#4253 by @sxzz)
- Improvement(components): [el-cascader-panel] unref store (#4544 by @btea)
- Update item.vue (#4555 by @yonghui-wang)

### 1.2.0-beta.4

_2021-11-27_

#### Features

- Components [el-select] support suffix-icon (#4364 by @emojiiii)
- Add translation for pashto language (#4456 by @NangialaiStoman)
- Components add custom color for button & rename css var bg-color (#3664 by @YunYouJun)
- Add figma resource (#4469 by @0song)

#### Bug fixes

- Components [el-autocomplete] fix popper position (#4321 by @btea)
- Components [el-tabs] fix tab render (#4383 by @sxzz)
- Docs el-image picture icon (#4433 by @adaex)
- Components [el-rate] icon hidden (#4452 by @imswk)
- I18n improve Polish translations (#4475 by @lukaszwojtow)
- Components [ElSelect] fix group disabled don't work (#4481 by @emojiiii)
- Components [el-image] preview-src-list warn (#4472 by @emojiiii)
- Components [el-select-v2] set option default value 0 (#4417 by @btea)
- Style radio checkbox button default color (#4492 by @YunYouJun)
- Coler picker support touch (#4477 by @kooriookami)
- Components [ElFormItem] label will be show undefined (#4487 by @emojiiii)
- Locale improve Indonesian (Bahasa) translations and fix typo (#4476 by @muhammadcahya)
- Components [el-menu] menu-collapse onLeave lose done (#4517 by @xiaoxian521)
- Components [el-upload] fix get accept from uploader.props (#4506 by @sumy7)
- Components [date-picker] `range-separator slot` don't work (#4522 by @emojiiii)
- Avoid unnecessary tab switch rerender (#4513 by @oliverzy)

#### Refactors

- [el-config-provider] change default autoInsertSpace to false (#4330 by @msidolphin)
- Components refactor tabs
- Components refactor tabs
- Components refactor scrollbar
- Components refactor scrollbar
- Components refactor skeleton/skeleton-item (#4264 by @emojiiii)
- Style rename to text-color bg-color (#4468 by @YunYouJun)
- Style rename disabled color and migrate to css var (#4493 by @YunYouJun)
- Components refactor button (#4499 by @emojiiii)
- Improve tsconfig (#4386 by @sxzz)

### 1.2.0-beta.3

_2021-11-09_

#### Bug fixes

- Components [el-cascader] empty children set leaf (#3758 by @btea)
- Build fix types  (#4254 by @sxzz)
- Components [el-checkbox] tabindex property doesn't work (#4286 by @undefined-degisn)
- Style radio group set inline-block (#4255 by @btea)
- Theme-chalk fix icon style in Menu component is wrong (#4302 by @undefined-degisn)
- Side-effects (#4310 by @sxzz)

#### Refactors

- Components refactor rate
- Components refactor result
- Components [el-result] improve props
- Components refactor row
- Components [el-row] improve props
- Components refactor radio

### 1.2.0-beta.2

_2021-11-05_

#### Features

- Components [el-tree] allow tree node to have customizable class (#3912 by @greper)
- Components [el-color-picker] hex color with transparency (#3893 by @Alanscut)
- Components el-teleport (#4186 by @JeremyWuuuuu)
- Components [el-select-v2] mouse trigger scrollbar show/hide (#3722 by @btea)
- Components [el-image] initialIndex (#4235 by @Alanscut)
- Components [el-message] merge the same content messages(#3836 by @zhazhanitian) (#3988)
- Docs add support for copying svg content (#4169 by @adaex)
- 
#### Bug fixes

- Components [el-tree-v2] indent can not set zero (#3881 by @btea)
- [el-date-picker] avoid click event error & fix cell props (#4134 by @msidolphin)
- Components [el-tree] emptyText  empty string is invalid (#4135 by @imswk) (#4136)
- Components [el-tree-v2] empty-text supports empty string & virtual list width become no required (#4144 by @msidolphin)
- [el-transfer]modelvalue is not in original order (#4082 by @Alanscut)
- Components el-loading spinner directive (#4133 by @adaex)
- Components el-select-v2 empty icon (#4154 by @adaex)
- Input suffix icon center by flex (#4159 by @YunYouJun)
- Components [el-affix] listen resize (#3932 by @midcu)
- Components [time-picker] am/pm mode avoid render redundant content (#4137 by @msidolphin)
- Components [image-viewer] fix typo (#4183 by @btea)
- Components input icon justify by flex (#4187 by @YunYouJun)
- Docs fix typo (#4190 by @btea)
- Style remove chinese comments in checkbox (#4189 by @YunYouJun)
- Components el-teleport potential failure (#4197 by @JeremyWuuuuu)
- Components view tag does not render (#4198 by @adaex)
- Theme-chalk el-menu arrow icon style (#4230 by @adaex)
- Components el-dropdown cannot be used with v-show (#4221 by @undefined-degisn)
- Components [el-table] fixed mode layout misalignment (#4188 by @msidolphin)
- Components empty icon component judgment (#4178 by @adaex)
- [el-input]hidden input is not hidden (#4128 by @KawaiiZapic)
- Components [el-cascader] search result switch not highlight (#4087 by @btea)
- [el-date-picker] cannot change the time when provide default-time (#4228 by @msidolphin)
- Components `h` function children parameter usage (#4238 by @adaex)
- Components ensure table size affects inner selection (#3979 by @cokemine)
- Components [el-table] development environment warning issues (#4167 by @msidolphin)
- Components [el-select] first item hover status error (#3880 by @Alanscut)
- Components [el-form] reset form validate error (#3759 by @btea)
- Components [el-select] display false (#4036 by @Alanscut)
- Fix el-input-number unexcepted text selecting when clicking buttons (#4191 by @KawaiiZapic)

#### Refactors

- Components elForm form rule & custom type (#3951 by @Otto-J)
- Components [el-config-provider] improve componomponent  extendiability (#4175 by @msidolphin)
- Docs use markdown-it instead of marked (#4239 by @YunYouJun)


### 1.2.0-beta.1

_2021-10-30_

#### Breaking changes:

- Please refer to: [1.2.0-beta.1 Breaking change](https://github.com/element-plus/element-plus/discussions/4060)

#### Features

- Use svg icons in components (#3492 by @adaex)
- Remove font icon scss & font-path (#4074 by @YunYouJun)
- Simplify build & support esm import (#4018 by @sxzz)
- Components [el-popconfirm] adjust tag and style (#3981 by @btea)
- Components add space between two characters in Chinese (#3992 by @cokemine)
- Components el-switch add inline content support (#4091 by @adaex)
- Add fit-input-width prop (#4088 by @kooriookami)
- Components [el-date-picker] support customized cell content (#4078 by @msidolphin)
- Components [el-message] & [el-notification] appendTo option added (#4012 by @codespikex)
- Add translation for Bengali language (#3972 by @IbrahimAlKhalil)
- Dev play add unplugin-vue-components (#3931 by @sxzz)
- Dev play add @element-plus/icons (#4034 by @xiaoxian521)

#### Bug fixes

- Components select v-2 value-key seems not working #2904 (#3915 by @spx443812507)
- Utils remove $ from util
- Tag should support large size too (#3948 by @cbbfcd)
- Components [el-affix] update method does not exist (#3996 by @Alanscut)
- Components [el-input] disable button style error (#3989 by @Alanscut)
- Docs doc language selector kept reversing (#3987 by @JeremyWuuuuu)
- Components [el-select-v2] set a non-empty array value error (#3998 by @btea)
- Docs docs-search-not-working (#4004 by @JeremyWuuuuu)
- Docs translation missing (#4006 by @JeremyWuuuuu)
- Type error
- Components [el-icon] support string size (#3835 by @cn-troy)
- Docs add extra field for frontmatter
- Components button displays icon only (#4019 by @sxzz)
- Docs adding title for components (#4025 by @JeremyWuuuuu)
- Dev fix play auto import (#4031 by @sxzz)
- Popover repeat when exist fixed column in table (#3394 by @Alanscut)
- Components [el-date-picker] increase  width of  range separator (#4028 by @baboon-king)
- Components [el-form-item] validate success does not return fields (#4001 by @msidolphin)
- Hooks add type remove ts error (#4055 by @btea)
- Components [el-input-number] add a type attribute (#4030 by @921)
- Components fix add space in prod mode (#4062 by @cokemine)
- Dev fix playground and docs alias (#4068 by @sxzz)
- Components [el-form-item] align inline elements vertically (#4080 by @921)
- Components [el-input] maxlength is not correct (#3969 by @Alanscut)
- Components [el-page-header] icon size (#4085 by @adaex)
- Components [el-menu] trigger hover, open and close events no work (#4077 by @xiaoxian521)
- Deps update dependency axios to ^0.24.0 (#4102 by @renovate[bot])
- Docs tree document error (#4115 by @JeremyWuuuuu)
- Checkbox fix checkbox when modelvalue length less than min limit (#1745 by @cokemine)
- Docs update readme local development file name (#4117 by @btea)
- Build transform to es2018 syntax (#4090 by @sxzz)
- Components [el-upload] request headers missing when headers is typeof Headers(#4043 by @wxyong) (#4045)
- Components [el-input] input border (#4110 by @Alanscut)
- Components upload headers add type judge (#4119 by @btea)
- Components [el-cascader] can not use keyboard select node(#3254 by @imswk) (#3260)
- Components [el-menu] icon style (#4122 by @imswk)

#### Refactors

- Components ElInputNumber (#3974 by @JeremyWuuuuu)
- Components [el-message] change the name of stopTimer
- Docs icon usage (#4057 by @adaex)
- Componentes deprecate the icon font of some components (#4067 by @adaex)
- Directives use util method replace judge firefox (#4086 by @btea)
- Utils!: remove resize-observer-polyfill (#4058 by @sxzz)

### 1.1.0-beta.24

_2021-10-20_


### 1.1.0-beta.23

_2021-10-20_

#### Bug fixes

- Build fix package entry field (#3962 by @JeremyWuuuuu)

### 1.1.0-beta.22

_2021-10-20_

#### Bug fixes

- Utils svg classname deal (#3926 by @btea)
- Components [el-rate] decimal icon display problem (#3921 by @Alanscut)
- Components ElProgress remove unnecessary required props to prevent form error (#3954 by @Otto-J)

#### Refactors

- Utils dom and add test (#3950 by @btea)

### 1.1.0-beta.21

_2021-10-18_

#### Features

- Components [el-menu] add ellipsis prop (#3870 by @xiaoxian521)
- Build!: improve esm exports (#3871 by @sxzz)

#### Bug fixes

- About custom extension of table column (#3437 by @Alanscut)
- [ElSelectV2] set value to an empty array after selection error (#3875 by @Alanscut)
- Table lazy rows can't expand at the first time (#3731 by @Alanscut)
- Capitalize the first letter of the error message (#3882 by @deepthan)
- Components [el-form-item] calc the label-width. (#3914 by @cbbfcd)
- Style(components): [el-message-box] string does not wrap (#3856 by @zhazhanitian) (#3867)

#### Refactors

- Utils improve props validator warning (#3847 by @sxzz)
- Components refactor input (#3805 by @sxzz)
- Components refactor image-viewer (#3810 by @sxzz)
- Utils use built-in throwError function (#3916 by @cbbfcd)
- Utils addClass and removeClass (#3858 by @btea)

### 1.1.0-beta.20

_2021-10-11_

#### Bug fixes

- Components fix composition event bug (#3659 by @bchen1029)
- Build fix generate component type (#3766 by @sxzz)
- Components [el-date-picker] panel not select value enter error (#3768 by @btea)
- Build: add default slot to generate better code hint files (#3763 by @tolking)

#### Refactors

- Components refactor space (#3757 by @sxzz)
- Utils refactor buildProps & replace buildProp (#3775 by @sxzz)
- Components refactor image (#3770 by @sxzz)
- Components refactor col (#3804 by @sxzz)
- Build: refactor copyDefinitions (#3756 by @sxzz)
- Utils improve defineProps (#3811 by @sxzz)

### 1.1.0-beta.19

_2021-09-30_

#### Features

- Utils add buildProps (#3718 by @sxzz)
- Components [el-menu] expose handleResize (#3723 by @xiaoxian521)

#### Bug fixes

- Components [el-autocomplete] popover auto width (#3674 by @Alanscut)
- Table Attributes expand-row-keys has changed, but fold not work (#3675 by @Alanscut)
- Style(components): optimize the addable style (#3726 by @xiaoxian521)
- Build: fix build helper (#3727 by @sxzz)
- Chore: fix the source value error in web-types (#3736 by @tolking)
- Build: fix url error of docs in code prompt file (#3735 by @tolking)
- Build: fix sideEffects at package.json (#3721 by @HelloJunWei)

#### Refactors

- Utils refactor aria color (#3742 by @btea)

### 1.1.0-beta.18

_2021-09-28_

#### Features

- Build support esm and minified full bundle (#3677 by @sxzz)
- Docs enable mirror site redirection (#3683 by @JeremyWuuuuu)
- Theme-chalk use @use instead of @import & remove /\*\*/ comment (#3696 by @YunYouJun)
- Components [el-button-group] add type prop (#3702 by @sxzz)

#### Bug fixes

- Components [el-affix] get scrollContainer of vertical (#3424 by @SorrowX)
- Docs quote to tip
- Components [el-form] fix async-validator version (#3697 by @sxzz)

#### Refactors

- Dev drop babel (#3678 by @sxzz)
- Components refactor menu (#3639 by @sxzz)
- Play play start-up show network (#3707 by @btea)

### 1.1.0-beta.17

_2021-09-27_

#### Features

- Dev add global component types for volar (#3624 by @sxzz)
- Utils extract color to utils & fix submenu color (#3638 by @YunYouJun)
- Components [el-virtualized-grid] fulfillment (#3612 by @JeremyWuuuuu)
- Project upgrade async-validator to 4.0.3 (#3667 by @sxzz)
- Components add virtual tree (#3398 by @msidolphin)

#### Bug fixes

- Components [el-date-picker] validate callback (#3649 by @msidolphin)
- Components [el-date-picker] dayjs props not extended (#3662 by @adaex)
- Build fix dependencies packaging (#3665 by @sxzz)
- Components trigger update:modelValue by itself (#3660 by @spx443812507)

#### Refactors

- Components [el-message][el-notification] improve type (#3636 by @sxzz)

### 1.1.0-beta.16

_2021-09-24_

#### Features

- Docs document website enhancement (#3580 by @JeremyWuuuuu)
- Docs document add changelog page (#3596 by @JeremyWuuuuu)

#### Bug fixes

- Build release script error (#3576 by @JeremyWuuuuu)
- Components fix message closeAll (#3583 by @sxzz)
- Components [el-form] fix the methods validate callback invalid (#3589 by @btea)
- Components [el-popover] fix the title renderIf type error (#3552 by @btea)
- Components sub components no install issue (#3615 by @JeremyWuuuuu)
- [el-menu] using v-for causing render loop (#3617 by @xiaoxian521)
- Components [el-popconfirm] fix vue warning (#3618 by @sxzz)

#### Refactors

- Improve buildProp (#3592 by @sxzz)

### 1.1.0-beta.15

_2021-09-23_

#### Features

- Build update pnpm lock for meoize one (#3575 by @JeremyWuuuuu)

#### Bug fixes

- Components [el-selectv2] add type remove ts error (#3480 by @btea)

#### Refactors

- Replace yarn with pnpm (#3571 by @sxzz)

#### Other

- Added missing 'memoize-one' to the publish package (#3572 by @kaiyum2012)

### 1.1.0-beta.14

_2021-09-22_

#### Features

- Components [el-virtualized-list] enable virtual list perf mode (#3547 by @JeremyWuuuuu)
- Components exposing sub components (#3563 by @JeremyWuuuuu)

#### Bug fixes

- Build memoize-one not found issue (#3556 by @JeremyWuuuuu)
- Components fix typo (#3561 by @sxzz)
- Docs doc-content table min-width modify (#3557 by @imswk)
- Components [el-select] fix composition bug #3532 (#3533 by @bchen1029)

#### Refactors

- Components use css var to set menu global style (#3539 by @YunYouJun)
- Improve buildProp (#3558 by @sxzz)

#### Other

- Chore(project): compatible windows the shell command (#3550 by @btea)
- Perf: improve jump link for home page (#3551 by @zouhangwithsweet)

### 1.1.0-beta.13

_2021-09-22_

#### Features

- Dev improve typings (#3457 by @sxzz)
- Project local dev environment (#3463 by @JeremyWuuuuu)
- Hooks add same target support (#3473 by @adaex)
- Components [el-timeline] add center prop (#3436 by @BeADre)
- Components [el-message-box] add inline style prop (#3537 by @yuzhang9804)

#### Bug fixes

- Release scirpt (#3410 by @JeremyWuuuuu)
- Release scirpt (#3412 by @JeremyWuuuuu)
- [el-cascader] multiple search with v-model can't work (#3350 by @Alanscut)
- Utils add type remove the ts error (#3406 by @btea)
- Use fromPairs replace Object.fromEntries (#3422 by @xiaoxian521)
- Theme-chalk [el-input] textarea focus & hover border color (#3403 by @adaex)
- Components el-icon root element receives attributes twice (#3442 by @JeremyWuuuuu)
- Docs document wrong line error (#3453 by @JeremyWuuuuu)
- [el-form] button type is reset and reset form (#3445 by @xiaoxian521)
- [el-table] an extra 0 after the total line at safari (#3471 by @xiaoxian521)
- Components [el-dialog] content scrolling behavior (#3484 by @adaex)
- Theme-chalk [el-radio] input border hover color (#3493 by @adaex)
- Build full bundle transform error (#3504 by @JeremyWuuuuu)
- Components [el-virtual-list] potential mem issue (#3510 by @JeremyWuuuuu)
- Docs theme documentation issue (#3511 by @JeremyWuuuuu)
- Docs dialog documentation syntax error (#3515 by @JeremyWuuuuu)
- Docs notification documentation with types demo icon missing (#3521 by @imswk)
- Style use flex replace float & fix vertical center (#3523 by @YunYouJun)
- Components [el-select-v2] fix style problem when select-v2 option too long (#3534 by @Dreamcreative)
- [el-scrollbar] cascade selector of cascader is stuck after clicking (#3546 by @xiaoxian521)
- Build external packages (#3415 by @sxzz)
- Remove mitt (#3356 by @purepear)
- Style add css var width & margin-top for dialog (#3431 by @YunYouJun)
- Remove mitt (#3474 by @sxzz)
- [el-button] delete isEmpty (#3479 by @xiaoxian521)
- Remove import-from (#3503 by @YunYouJun)
- Support latest volar (#3508 by @sxzz)

#### Refactors

- Components drawer animation use transition replace keyframe (#3447 by @YunYouJun)
- Components refactor backtop (#3486 by @sxzz)
- Components refactor divider (#3488 by @sxzz)
- Components refactor overlay (#3496 by @sxzz)
- Components refactor breadcrumb (#3487 by @sxzz)
- Components refactor popconfirm (#3490 by @sxzz)
- Components refactor tag (#3489 by @sxzz)
- Components refactor page-header (#3491 by @sxzz)
- Fix buildProp (#3529 by @sxzz)
- Components refactor icon (#3528 by @sxzz)
- Components refactor link (#3527 by @sxzz)
- Components refactor pagination (#3526 by @sxzz)
- Components refactor notification (#3495 by @sxzz)
- Components refactor message (#3524 by @sxzz)
- Components refactor empty (#3522 by @sxzz)

### 1.1.0-beta.11

_2021-09-14_

#### Bug fixes

- Core downgrade vueuse version (#3405 by @sxzz)
- Build fix exclude dependency (#3404 by @sxzz)

### 1.1.0-beta.10

_2021-09-13_

#### Features

- Components [el-badge] support color of type when is-dot (#3279 by @adaex)
- Components [el-virtual-scroll-bar] handle click event (#3308 by @SorrowX)
- Components image-viewer component support slot (#3345 by @xiaoxian521)
- Components calendar component header support slot (#3316 by @xiaoxian521)
- Components [el-calendar] add prev-year and next-year (#3360 by @xiaoxian521)
- Components [el-input-number] add focus & blur methods (#3337 by @adaex)
- Components [el-upload] support put method (#3358 by @xiaoxian521)
- Components [el-upload] `clearFiles` support filter status (#1501 by @gaoyia)
- Utils getPropByPath function adjust (#1276 by @jectychen)
- Hooks extracting size injection for form items (#3383 by @JeremyWuuuuu)

#### Bug fixes

- Components [el-menu] fix the infinite loop (#3263 by @BeADre)
- Components [el-alert] change the border-radius variable (#3271 by @btea)
- Components [el-dialog] avoid custom class style conflict (#3267 by @adaex)
- Components [el-form]: ensure form validation always triggers callback (#3294 by @digitalkaoz)
- Hooks warn renamed to debugWarn (#3329 by @sxzz)
- Project typo (#3340 by @sxzz)
- Components [el-cascader] event renamed to e (#3344 by @btea)
- Components [el-textarea] show different font family (#3349 by @Alanscut)
- [el-table] default-expand-all doesn't work (#3321 by @Alanscut)
- Components rename loading directive instance name (#3336 by @sxzz)
- Add @vueuse/core as dependency (#3374 by @sxzz)
- Components [el-dialog] fix emits (#3375 by @sxzz)
- Components [el-badge] add export type (#3376 by @sxzz)
- Components [el-virtual-scrollbar] fix move bug (#3379 by @SorrowX)

#### Refactors

- Utils improve debug warn (#3302 by @adaex)
- Hooks refactor useAttrs (#3300 by @sxzz)
- Utils refactor `throwError` (#3301 by @sxzz)
- Components refactor check-tag (#3311 by @sxzz)
- Utils drop ie support (#3304 by @sxzz)
- Utils refactor menu-bar (#3343 by @btea)
- Utils refactor with-install (#3355 by @sxzz)
- Components refactor button (#3341 by @sxzz)
- Components [el-alert] improve judgment (#1985 by @cbbfcd)
- Components refactor avatar (#3364 by @sxzz)
- Components refactor alert (#3365 by @sxzz)
- Components refactor badge (#3366 by @sxzz)
- Components refactor card (#3367 by @sxzz)
- Components refactor dialog (#3369 by @sxzz)
- Components refactor affix (#3368 by @sxzz)
- Add type declaration (#3310 by @xiaoxian521)
- Revert "fix(components): [el-form]: ensure form validation always triggers callback (#3294 by @HerringtonDarkholme)" (#3324)

### 1.1.0-beta.9

_2021-09-05_

#### Features

- Components [el-timeline] add hollow prop (#3229 by @kooriookami)

#### Bug fixes

- El-image-viewer drag have problem (#3133 by @Alanscut)
- Components virtualized selector optimize (#3160 by @msidolphin)
- Theme-chalk fixed the wrong background color of timeline-item (#3165 by @msidolphin)
- Utils improve element.addEventListener (#3173 by @adaex)
- Components [el-form-item] dom element null checking (#3172 by @taosher)
- Utils make width valid with `calc` (#3181 by @cokemine)
- Components collapse incorrect export statement (#3185 by @msidolphin)
- Components descriptions cell class (#3195 by @adaex)
- Components tabs dynamic text (#3174 by @imswk) (#3180)
- Components [el-input-number] model:value not required (#3190 by @msidolphin)
- Missing timepicker css var (#3204 by @YunYouJun)
- [el-form-item] add min-width (#3208 by @sxzz)
- Chore typo package.json (#3214 by @linrongbin16)
- Theme-chalk [el-form] no display red asterisk when width is auto (#3222 by @msidolphin)
- Docs fix typo in README.md (close #3216) (#3230 by @KimYangOfCat)
- Build agolia indices script (#3234 by @JeremyWuuuuu)
- Components message verified by el-form is "" validate (#3227 by @imswk) (#3231)
- Components [el-menu] fix warn & listen item (#3225 by @sxzz)
- Components lazy image is not work when it changes src (#3189 by @zycoJamie)
- Allow custom tr background-color (#3166 by @YunYouJun)
- Perf menu add back arrow-icon and overflow (#3167 by @kooriookami)
- Style `$--border-color-hover` var reference (#3179 by @adaex)
- Style fixed style (#3202 by @sunnuan)
- Perf [el-menu] only vertical mode has transition (#3200 by @kooriookami)
- Style fix missing import (#3212 by @sunnuan)
- Style use prettier (#3228 by @sxzz)
- Style [el-image] format code (#3238 by @sxzz)

#### Refactors

- Components Improve calendar date range validate (#3156 by @adaex)
- Upgrade to husky@7 & lint-staged@11 & commitlint@13 (#3239 by @YunYouJun)

### 1.1.0-beta.8

_2021-08-31_

#### Features

- Components form add scrollToField method (#3110 by @sxzz)
- Components select-v2 support filter-method & remote-search (#3092 by @msidolphin)
- Components button-group add size (#3098 by @sxzz)
- Components [el-image-viewer] emit close event (#3129 by @btea)
- Components select-v2 support keyboard operations (#3138 by @msidolphin)
- Menu add ellipsis in horizontal mode (#3083 by @kooriookami)

#### Bug fixes

- Theme-chalk add the missing margin-left to transfer
- Remove useless and duplicate declaration (#3082 by @BeADre)
- Components image no emit switch event (close #3132) (#3134 by @imswk)
- Components [el-upload] revoke object url on item remove (#3135 by @adaex)
- [el-cascader-panel] fix childrenData (close #3126) (#3131 by @qinpeip)
- Locale update korean translation (#3137 by @rikapo)
- Components layout css lost (#3140 by @JeremyWuuuuu)
- Icon clipboard (#3142 by @kooriookami)
- Components [el-table] width init error (close #3087) (#3117 by @imswk)
- [el-scrollbar] add missing off mouseup (#3143 by @kooriookami)
- Style update calc style (#3090 by @kooriookami)
- Style checkbox support size prop both border or not (#3099 by @kooriookami)
- Style radio support size prop both border or not (#3103 by @kooriookami)
- Table fix Destructuring assignment bug (#2893 by @HaitaoWang555)
- [image-viewer] two-finger zoom in and out (#3114 by @Alanscut)

#### Refactors

- Enhance type definition (#3062 by @sxzz)

### 1.1.0-beta.7

_2021-08-26_

#### Bug fixes

- Components style path error for radio button (#3079 by @JeremyWuuuuu)
- Input autosize type problem (#3008 by @imswk) (#3012)
- Build marking side effects for webpack importing styles

### 1.1.0-beta.6

_2021-08-26_

#### Bug fixes

- Components [table] avoid table border style conflict (#3064 by @adaex)
- Eslint ignore bundle file (#3061 by @sxzz)
- Form el-from/src/token.d.ts file miss (#2979 by @imswk) (#2988)
- Components exposing style folder for select dropdpwn (#3077 by @JeremyWuuuuu)
- Style(docs): Optimized style of documentation (#3010 by @kooriookami)

### 1.1.0-beta.5

_2021-08-25_

#### Features

- Select-v2 support allow-create feature (#3017 by @msidolphin)

#### Bug fixes

- Missing folders and umd locale builds and i18n docs for umd builds (#3053 by @JeremyWuuuuu)
- Rateuse constant (#3011 by @Notryag)
- Stop pinning vue peer dependency version (#3051 by @sodatea)
- Ed resolve font path errors (#3048 by @wilhantian)
- Build unpin vue compiler version (#3055 by @JeremyWuuuuu)
- Style remove useless style (#3042 by @kooriookami)
- Perf pdate tw lang (#3045 by @kooriookami)

### 1.1.0-beta.4

_2021-08-25_

#### Bug fixes

- Message-box fix type (#3038 by @sxzz)
- [label-wrap] Fix misspellings (#3030 by @wangbincyzj)
- Components [descriptions] avoid conflict with el-table (#3005 by @adaex)
- Build exposing installer function and version for umd build (#3041 by @JeremyWuuuuu)

#### Refactors

- Rename el-submenu to el-sub-menu (#3037 by @sxzz)

### 1.1.0-beta.3

_2021-08-24_

#### Bug fixes

- Build fix rollup full bundile issue (#3034 by @JeremyWuuuuu)

### 1.1.0-beta.2

_2021-08-24_

#### Bug fixes

- Build upgrade vue to 3.2.x (#3031 by @JeremyWuuuuu)
- Build: update browserslist (#3027 by @kooriookami)

### 1.1.0-beta.1

_2021-08-24_

#### Breaking changes:

- Please refer to: [Breaking changes made in 1.1.0-beta.1](https://github.com/element-plus/element-plus/discussions/3020)

#### Features

- Date-picker custom date-editor width (#2836 by @YunYouJun)
- Card add var background-color & prepare for dark mode (#2912 by @YunYouJun)
- Link remove href prototype when empty (#2969 by @adaex)
- Add ElSkeleton template scoped parameter `key`. (#2944 by @callmesoul)

#### Bug fixes

- Dropdown add css var for popper (#2909 by @inottn)
- Carousel a invalid css rule by typo (#2951 by @KawaiiZapic)
- Pagination icon center aligned (#2962 by @adaex)
- Link fix style (#2990 by @kooriookami)
- Notification icon color error (#2992 by @adaex)
- Components form-item Fix misspellings (#3019 by @wangbincyzj)
- Update token.ts (#3001 by @wangbincyzj)
- Improvement(tabs): optimize tab-bar offset calc (#2844 by @Senasiko)
- checkbox fix the size property is invalid (#2985 by @kooriookami)
- Menu change to border-box (#2999 by @kooriookami)
- Transfer add text-algin (#3018 by @kooriookami)

#### Refactors

- Update package path and bundle folder (#3016 by @JeremyWuuuuu)

### 1.0.2-beta.71

_2021-08-18_

#### Features

- Table add new css var background-color (#2866 by @YunYouJun)
- Switch add border color (#2933 by @HatemSat)
- Add 'calendar-change' event to date-range datetime-range picker (#2964 by @iamkun)
- Scrollbar add min-size prop (#2916 by @kooriookami)

#### Bug fixes

- Button when(circle) use button-padding-vertical & add size demo (#2860 by @YunYouJun)
- Drawer missing css var, close #2848 (#2861 by @YunYouJun)
- Select options display fix when allow-create, also empty & entered #2826 #2854 (#2830 by @noah19846)
- Locale update error url and remove useless code (#2852 by @zwwtj2014)
- Comments update var button comments (#2896 by @liamfend)
- Tabs add v-resize directive (#2886 by @kooriookami)
- Tree undefined parent cause error on SSR (#2942 by @tolking)
- Badge fix dot-badge color (#2943 by @ninedev-i)
- Style allow custom alone color sass var (#2963 by @YunYouJun)
- Pagination locale key correction (#2889 by @ioslh)
- Pagination Fix that current-page and page-size do not support hyphen style when using v-model (#2884 by @LeeSamFong)

#### Refactors

- Transition use sass map refactor & rename some transition (#2879 by @YunYouJun)
- Tag use inherit css var way to simplify tag (#2878 by @YunYouJun)
- Color add css var color for button & fix style for datepicker (#2869 by @YunYouJun)
- Pagination optimize demo style (#2890 by @Eyes22798)
- Var alert/badge/link/message/message-box/notification/tag (#2892 by @YunYouJun)

### 1.0.2-beta.70

_2021-08-05_

#### Bug fixes

- Date-picker color-text has been renamed to text-color (#2835 by @YunYouJun)
- Cascader revert #2344 to fix not update when options change (#2843 by @SimonaliaChen)
- Cascader missing cascader-panel css var & add default var for thumb (#2847 by @YunYouJun)

### 1.0.2-beta.69

_2021-08-04_

#### Bug fixes

- Fix sass compiling error (#2831)

### 1.0.2-beta.68

_2021-08-04_

#### Bug fixes

- Dropdown styles error (#2823 by @tolking)
- Var fix input/radio/checkbox used by other components (#2821 by @YunYouJun)
- Project node is not exporting issue (#2827 by @JeremyWuuuuu)

### 1.0.2-beta.67

_2021-08-04_

#### Bug fixes

- Theme-chalk fix fonts build by gulp (#2817 by @YunYouJun)

#### Refactors

- Var move css var from root to class (#2808 by @YunYouJun)

### 1.0.2-beta.66

_2021-08-03_

#### Features

- Input Removed validator for autocomplete attribute (#2757 by @ShookTea)
- Icon introduce-el-icons-into-ep (#2766 by @JeremyWuuuuu)
- Space add fill support (#2716 by @adaex)
- Var var sass map for components (#2778 by @YunYouJun)

#### Bug fixes

- Var map merge default var (#2727 by @YunYouJun)
- Scrollbar the problem of ScrollbarDirKey being deleted (#2722 by @msidolphin)
- Input no trigger input event when clear value (#2723 by @msidolphin)
- Message using iconClass causes "el-message\_\_icon" to be lost (#2709 by @GaliMu)
- Locale inject locale for modal like components (#2737 by @JeremyWuuuuu)
- Tooltip styles error (#2763 by @tolking)
- Input Improve inputStyle reference (#2780 by @adaex)
- Select-v2's dropdown width wrong if create in style(display: none) (#2791 by @zhaozhongyu)
- Checkbox checkbox bordered padding & height (#2784 by @YunYouJun)
- Locale update Norwegian translation file (#2789 by @AdrianAndersen)
- Select option does not delete in onBeforeMount (#2753 by @zhaozhongyu)
- Fix Nullable type for RefElement (#2730 by @PxlBuzzard)
- Fix LabelWraplabel-width bug (#2742 by @SorrowX)

#### Refactors

- Var simplify checkbox var & move transition to root (#2729 by @YunYouJun)
- Backtop migrate css var (#2711 by @YunYouJun)
- Badge/card/dropdown/rate migrate css var & use sass:map (#2764 by @YunYouJun)
- Link remove unused link variables & add sass map (#2768 by @YunYouJun)
- Slider migrate css var & use sass map for message (#2772 by @YunYouJun)
- Button use sass map & add outline:none for focus (#2774 by @YunYouJun)

### 1.0.2-beta.65

_2021-07-28_

#### Bug fixes

- fix(input-number): fix style (#2738)
- fix(date-picker): date-picker focus end-time resets start-time (#2290)
- fix: date-time picker same day select time bug (#2747)
- fix(image-viewer): image-viewer export error (#2754)
- fix: time picker adjust spinner bug (#2743)

#### Chore

- test(select-v2): complete unit tests (#2739)

### 1.0.2-beta.64

#### Bug fixes

- fix(var): map merge default var (#2727)
- fix(scrollbar): the problem of ScrollbarDirKey being deleted (#2722)
- fix(input): no trigger input event when clear value (#2723) …
- fix(message): using iconClass causes "el-message\_\_icon" to be lost (#… …
- fix(typing): fixed Nullable type for RefElement (#2730)
- fix(locale): inject locale for modal like components (#2737)

#### Refactors

- refactor(backtop): migrate css var (#2711)
- refactor(var): simplify checkbox var & move transition to root (#2729)

### 1.0.2-beta.63

_2021-07-27_

#### Refactor

- Refactor popover migrate css var (#2687)
- Refactor tooltip migrate css var (#2686)
- Refactor color rename color-text to text-color (#2691)
- Refactor scrollbar migrate css var (#2698)
- Refactor date-picker migrate css var (#2689)
- Refactor tree popup form timeline-item migrate css var (#2697)

#### Bug fixes

- Fix radio-button checked should sync with state (#2699)
- Update i18n version (#2690)
- Fix notification improve type definition and define closeAll function (#2705)
- Fix message iconClass not working (#2695)
- Fix avatar css property line-height (#2702)

### 1.0.2-beta.62

_2021-07-26_

#### Bug fixes

- Fix build script error on Github Runner (#2683)

### 1.0.2-beta.61

_2021-07-26_

#### Bug fixes

- Fix documentation error for `Config Provider` (#2679)
- Fix build script issue (#2680)

### 1.0.2-beta.60

_2021-07-26_

#### Bug fixes

- Fix `dayjs` integration issue with `el-config-provider` and `build.sh` shell error (#2678)

### 1.0.2-beta.59

_2021-07-26_

#### Breaking change

- feat(locale): i18n implementation (#2670)

#### Bug fixes

- fix(locale): missing install & locale issue (#2647)
- fix(select): should not stop at invisible options by up and down (#2585) …
- fix(style): ondemand style lost (#2648)
- fix(select-v2): adjust the trigger conditions of focus and blur (#2650)
- fix(style): remove bg-color of menu items at ':focus'
- fix(input): input maxlength calculate the correct length (#2654)

#### Chore

- chore: update i18n demo (#2672)

#### Refactors

- refactor(result): migrate css var (#2637)
- refactor(carousel): migrate css var (#2638)
- refactor(transfer): migrate css var (#2639)
- refactor(dialog): migrate css var (#2641)
- refactor(menu): migrate css var (#2642)
- refactor(descriptions): migrate css var (#2643)
- refactor(empty): migrate css var (#2644)
- refactor(color): migrate all color-text var & simplify color docs (#2656)
- refactor(border): migrate css var & simplify docs (#2663)
- refactor(collapse): migrate css var (#2661)
- refactor: i18n implementation (#2670)
- refactor(locale): i18n migration website code (#2671)

### 1.0.2-beta.58

_2021-07-24_

#### Bug fixes

- Hotfix for setLocale

### 1.0.2-beta.57

_2021-07-23_

#### Bug fixes

- Hotfix for setLocale

### 1.0.2-beta.56

_2021-07-23_

#### Features

- Add useCssVar for inject custom css vars (#2547)
- Cascader supports popper-append-to-body feature (#2544)
- Improve menu handleItemClick (#2514)
- Re-design popper apis (#2529)
- Change formItem slot label formItem to scopedSlots (#2522)
- Export popperjs common attributes (#2520)
- Update checkbox label supports object type
- Update loading custom loading svg (#2456)

#### Refactor

- Refactor link migrate css var (#2622)
- Refactor avatar migrate css var (#2601)
- Refactor tag migrate css var (#2592)
- Refactor skeleton migrate css var (#2586)
- Refactor pagination migrate css var (#2587)
- Refactor switch migrate css var (#2584)
- Refactor button migrate css var (#2582)
- Refactor cascader migrate css var (#2578)
- Refactor message-box migrate css var (#2568)
- Refactor table+calendar migrate css var (#2588)
- Refactor color add error var (#2565)
- Refactor message migrate css var (#2560)
- Refactor notification migrate css var (#2552)
- Refactor color migrate color css var & simplify color box docs (#2589)
- Refactor alert replace all css var (#2545)
- Refactor typography add css var for typography
- Refactor container header/footer/aside size by css variables (#2530)
- Refactor container header/footer/asdide size by css variables (#2526)
- Refactor generate color var by sass map (#2504)
- Refactor button/radio/input size by sass map (#2502)
- Refactor color css var for border-color & simplify border-color docs (#2540)
- Refactor checkbox migrate checkbox css3 var (#2493)
- Refactor style use css3 var refactor base variable (#2478)

#### Bug fixes

- Fix select-v2 add some test cases & fix selectLabel/multiple-limit issue (#2626)
- Optimize select-v2 style (#2628)
- Update bundle strategy
- Update date-picker shortcuts support function type (#2617)
- Fix ensure that the loading icon is inline (#2550)
- Fix affix expose update function (#2603)
- Fix autocomplete optimize some const of autocomplete (#2593)
- Fix descriptions fix the last td colspan (#2567)
- Fix time-select fix editable prop and add disabled prop (#1899)
- Update hooks refactor transition (#2556)
- Fix el-tree accordion attribute only takes effect on root nodes (#2523)
- Fix select filtered empty groups (#2507)
- Refactor popper use-popper-hook for popper
- Fix select-v2 inputWidth is not defined (#2510)
- Fix el-menu activeIndex bug (#2468)
- Fix select hoverIndex has incorrect when popover is turned on again (#2469)
- Fix option selectemitter was not turned off when it was destroyed (#2450)
- Fix time-picker model-value should sync when disable-attrs was updated (#2462)
- Fix table-column parse width and minWidth (#2466)
- Fix form no effect when label-width prop is auto (#2480)
- Fix time-picker missing blur methods and spelling error (#2457)
- Fix upload file-list is updated but without re-rendered (#2405) (#2460)
- Fix more than one component in table_column.spec.js (#2461)
- refactor pagination pagination internal logic refactored (#2491)
- Fix form add default value of label-width (#2492)
- Fix time-select missing blur method (#2477)

### 1.0.2-beta.55

_2021-07-09_

#### Bug fixes

- Refactor the type definition of breadcrumb (#2443)
- Add use-timeout hook (#2439)
- Fix menu missing styles (#2423) (#2444)
- Fix table selectable callback index incorrect issue (#2393)
- Fix isScroll Utils (#2433)
- Fix scrollbar add always show props and control scrollbar methods
- Add use-model-toggle hook
- Add use-transition-fallthrough-hook
- Fix duplicate cell-contextmenu (#2426)
- Add use-teleport hook (#2421)
- Add descriptions new feature for customized style (#2358)
- Fix warning in console when cell-contextmenu triggered (#2404)
- Fix table add cell-contextmenu emit event (#2074)
- Fix table-column rendered other component in hidden-columns (#2401)
- Add event type definition
- Fix menu hover color not change when background is changed (#2417)
- Fix table empty data render bug
- Fix form label-width supports number type (#2396)
- Fix code space style (#2411)

### 1.0.2-beta.54

_2021-07-02_

#### Bug fixes

- Fix select_v2 asynchronous binding issue (#2368)
- Fix add resize directive (#2167)
- Fix checkbox label auto convert to bool when label is empty (#2287)
- Fix update peerDependencies vue version (#2352)
- Fix virtual-list template string to render function (#2388)
- Fix code space (#2376)
- Fix cascader arrow position (#2356)
- Fix carousel not working when using v-show (#2361)
- Revert fix scrollbar update when slot changed (#2322)

### 1.0.2-beta.53

_2021-06-25_

#### Bug fixes

- Fix messageBox should close when press enter (#2308)
- Fix scrollbar update when slot changed (#2322)
- Fix can not binding multiple click-outside directives on a component (#2327)
- Fix v-popover can't work (#2341)
- Fix cascader-panel should not re-init when props's value not change
- Fix input-number fix border color when disabled and hover over buttons (#2334)
- Fix @use "sass:math" repeat reference (#2336)
- Fix cascader-panel default value doesn't work in lazy mode (#2338)

### 1.0.2-beta.52

_2021-06-24_

#### Bug fixes

- Fix virtual-list module resolve issue (#2316)

### 1.0.2-beta.49

_2021-06-23_

#### Bug fixes

- Fix col different size style (#2237)
- Refactor extract common props for props (#2300)
- Fix Descriptions not re-rendered when slots is updated (#2275)
- Fix table index error issue (#1919)
- Fix form use flex layout
- Fix checkbox selfModel use ref
- Fix cascader style
- Fix cascader add fallback-placements in some components (#2267)
- Rename message-box some var --msgbox to --messagebox (#2241)
- Fix menu add ms-menu-border-color (#2240)
- Fix Checkbox checked optional cannot control state issue (#2046)
- Refactor table test cases (#2232)
- Fix ElTable index calculation issue (#2143)
- Fix table test (#2229)
- Fix date-picker default-time does not work when type is datetime (#2177)

### 1.0.2-beta.47

_2021-06-11_

#### Features

- Feat Popover: add himBH-popover-border-radius variable (#2094) (#2095)
- Feat SelectV2: integrate-virtual-list-with-select (#1906)

#### Bug fixes

- Fix DatePicker: date picker support value-format (#2120)
- Fix Input: style use show-password and clearable (#2168) (#2169)
- Fix Rate: update change event trigger condition (#2181)
- Fix PopConfirm: import missing popover.scss (#2207)
- Fix Project: upgrade to vue 3.1.1 and with bug fix (#2220)

#### Chore

- Chore docs: side-nav refactor with Vue3 (#1943)
- Chore docs: update doc template (#2142)
- Chore docs: Collapse code for composition (#2152)
- Chore docs: Checkbox code for composition (#2153)
- Chore docs: Cascader code for composition (#2154)
- Chore docs: Card code for composition (#2155)
- Chore docs: Calendar code for composition (#2156)
- Chore docs: Image code for composition (#2157)
- Chore docs: Avatar code for composition (#2158)
- Chore docs: ColorPicker code for composition (#2160)
- Chore docs: Container code for composition (#2161)
- Chore docs: DatePicker code for composition (#2162)
- Chore docs: DateTimePicker code for composition (#2163)
- Chore docs: Dialog code for composition (#2164)
- Chore docs: Drawer code for composition (#2165)
- Chore docs:
- Chore docs: drawer put v-model to the first (#2174)
- Chore docs: update Dialog doc (#2175)
- Chore docs: update dialog (#2176)
- Chore docs: tooltip appendToBody default value is true (#2184)
- Chore docs: InfiniteScroll code for composition (#2193)
- Chore docs: Dropdown code for composition (#2194)
- Chore docs: InputNumber code for composition (#2195)
- Chore docs: Loading code for composition (#2196)

### 1.0.2-beta.46

_2021-06-04_

#### Features

- Feat website: demo Composition API (#2099)
- Feat Input: add input-style prop (#2117)

#### Bugfixes

- Fix Col: should hidden when span is zero (#1769)
- Fix Table: hot reload (#2077) (#2097)
- Fix Popper: in dialog isn't enough space to position problem (#2102)
- Fix ImageViewer: isLast attribute calculation error issue (#1902) (#2125)
- Fix Popper: tabindex prop type (#2130)
- Fix Locale: week translations for hr locale (#2134)
- Fix Cascader: size issue when filterable and multiple are enabled (#2123)

#### Chore

- Chore Website: update radio VCA doc (#2111)
- Chore Project: esbuild for single component build (#2112)
- Chore Website: use built-in throwError function. (#2131)

### 1.0.2-beta.45

_2021-05-28_

#### Features

- Feat VClickOutside: Expose mousedown and mouseup event object (#2038)

#### Bugfixes

- Fix Website: 'textContent' of undefined and text wrapping (#1973)
- Fix DatePicker: attribute 'type' add ts declare (#1979)
- Fix Table: fix sorting error #1919 (#1983)
- Fix Table: fix v-if patch bug on el-table-column (#1988)
- Fix Badge: should test is-dot class existed. (#1992)
- Fix Dropdown: add additional css in dropdown (#1998)
- Fix Notification: fix notification component zIndex prop can not work (#2021)
- Fix Tabs: update the setCurrentName function. (#2030)
- Fix DateTimePicker: respect format props and default value (#2034)
- Fix Locale: japanese translations (#2050)
- Fix Pagination: fix bug #2025 (#2062)
- Fix Website: algolia search wrong search parameter (#2065)
- Fix ScrollBar: perf behavior of bar click (#2066)
- Fix DateTimePicker: allow clearable to control both of the clear button (#2072)

#### Chore

- Chore Tag: add specific type declaration (#1939)
- Chore Docs: drawer.md add modal-class attribute (#1974)
- Chore Transfer: remove useless button style (#1975)
- Chore Badge: Remove unused type declarations (#1991)
- Chore Table: refactored the type definition of table (#1997)
- Chore Result: it should verify that text is inserted in the slot (#2000)
- Chore Website: webpackChunkName of jp doc map. (#2007)
- Chore Docs: added dropdown disabled attribute for all languages (#2013)
- Chore Tabs: remove unused code (#2019)
- Chore Tabs: add tabs type's definition (#2020)
- Chore TabNav: use same throw error utils function. (#2022)
- Chore add button click type's definition (#2026)
- Chore Tab: remove meaningless parentheses (#2033)
- Chore Docs: update the 'value' property to 'ModelValue' (#2044)
- Chore ScrollBar: add scrollbar type's definition (#2057)
- Chore Style: remove useless style (#2058)
- Chore Project: bump sass from 1.26.10 to 1.34.0 (#2060)
- Chore Docs: value -> model-value in vue 3 (#2067)

### 1.0.2-beta.44

_2021-05-11_

#### Bug fixes

- Hot fix for #1980 (#1981)

### 1.0.2-beta.43

_2021-05-10_

#### Bug fixes

- Fix DateTimePicker positioning issue (#1980, #1981)

### 1.0.2-beta.42

_2021-05-09_

#### Bug fixes

- Fix Rate: remove the confusing this (#1910)
- Fix Drawer: add modal false div class (#1932)
- Fix Button: fix incorrect style rule when hovering disabled plain button (#1937)
- Fix Form: fix validate typing error (#1938)
- Fix Table: fix table checkbox onChange event unable to be emitted in legacy browser (#1945)
- Fix Icon: update icon design styles (#1950)
- Fix Transfer: remove useless button style (#1953)
- Fix Popover: add additional css in popover (#1956)
- Fix Switch: fix switch component onMounted condition error (#1966)

#### Chore

- Chore Notification: Remove magic numbers (#1928)
- Chore Tag: keep the same with property name (#1940)
- Chore Pagination: update Pagination documentation with .sync modifier (#1920 #1957)
- Chore Project: replace unreasonable code (#1963)
- Chore website: update ad (#1968)
- Chore ThemeChalk: add missing `!default` modifiers for global variables (#1969)

### 1.0.2-beta.41

_2021-04-26_

#### Features

- Progress: indeterminate progress bar (#1832)
- Descriptions: new component descriptions (#1856)
- Scrollbar: new component Scrollbar (#1859)
- Switch: add beforeChange hook (#1878)

#### Bug fixes

- Fix Image fix image Add the dom of the preview picture to the body (#1577)
- Fix Icon fix icon (#1896)
- Fix page-header add icon props and slots (#1882)
- Fix Scrollbar perf behavior of scrollbar (#1869)
- Fix Button setup props add type (#1879)
- Fix Upload expose abort method (#1877)
- Fix Dropdown fix click disabled still trigger (#1865)
- Fix Virtual-list enhance-virtual-list (#1813)
- Fix Space string spacer style issue (#1845)
- Fix Checkbox activeStyle boxShadow error (#1829)

### 1.0.2-beta.40

_2021-04-14_

#### Bug fixes

- Fix table page resize event not monitor (#1790)
- Fix time-picker added popperRef in picker to Fix issue #1809 (#1812)
- Fix select fix select with filterable has wrong dropdown options (#1811)
- Fix table fix bug of table crash under complex data (#1805)
- Fix alert.scss carousel.scss switch.scss v-enter(vue2) to v-enter(vue3) (#1803)
- Fix build not generate code hint files when publish-npm (#1802)
- Fix avatar fix src attributes default value (#1770)
- Fix talbe null check error (#1807)
- Fix image-viewer fix image src attribute error #1791 (#1819)
- Fix date-picker date-picker daterange panel clear value and view not updated (#1816)
- style(date-picker): date-picker-com conditional judgment (#1823)
- Fix docs footer links error (#1827)
- Fix table fix table column rerendered whenever table updates
- Fix time-picker time picker change event bug (#1828)

#### Features

- Result: new componet Result (#1818)

#### Chore updares

- style using 'Array.prototype.forEach()' (#1826)

### 1.0.2-beta.39

_2021-04-09_

#### Bug fixes

- Fix `packages/utils` path issue (#1792)

### 1.0.2-beta.38

_2021-04-08_

- Fix `packages/utils` build issue caused `setConfig` not working (#1788)

### 1.0.2-beta.37

_2021-04-08_

#### Bug fixes

- Fix input prefix-icon-incorrect-height (#1766)
- Fix select fix filter method is not called when input first letter (#1711)
- Fix picker add focus (#1475)
- Fix time-select input value not changed with v-model bindings (#1725)
- Fix tooltip component tabindex prop (#1621)
- Fix select fix type of modelValue incompatible (#1719)
- Fix utils isIE logic (#1757)
- Refactor card remove needless div tag (#1732)
- Fix input add keydown event listener for textarea (#1723)
- Fix time-picker update oldValue when visible change (#1635)
- Fix drawer close button outline issue when focusing (#1727)

### 1.0.2-beta.36

_2021-03-28_

#### Bug fixes

- fix option-group error when groupQueryChange event trigger
- fix model-value error when Slider rendered
- fix use-lock-screen hook (#1651)
- fix modelValue should be deep reactive in multiple mode (#1624)
- fix not returning resetField & clearValidate methods (#1663)
- fix bug in render column structure (#1664)
- fix bug caused by dynamic rendering (#1640) …
- fix tooltip's export (#1678)
- fix should reset placeholder after clear (#1679)
- fix image onload overridden (#1689)
- fix #1653 (#1665)
- fix tabindex prop (#1642)
- fix notification css word break (#1699)
- fix transition error trigger when fileList is static (#1686 …
- fix error position of input and tags (#1682)
- fix incompatible migration (#1671) …
- fix the current row render flashing when expanding line toggle
- fix menu component animation bug (#1690)
- fix style of break word (#1701)

#### Features

- add new feature check-tag (#1696)

#### Chore updates

- docs update label docs of tab-pane (#1646)
- add web-types.json (#1662)
- chore: remove an repetitive file in .gitignore (#1673)
- docs: Update the quickstart.md of zh-cn language (#1698)
- docs: update on demand import docs (#1672)
- project/bumping-vue-version (#1702)

### 1.0.2-beta.35

_2021-03-15_

- Fix type generator error

### 1.0.2-beta.34

_2021-03-12_

#### Bug fixes

- Fix slider warning of modelValue (#1622)
- Fix tree auto expand parent on set current key and node (#1502)
- Fix avatar watch invalid when src is missing from props (#1615)
- Fix select tag can't close if the option is disabled (#1605)
- Fix table the bug that cannot watch data (#1612)
- Fix cascader-panel no loaded nodes should not be checked (#1583)
- Fix cascader prevent log error for before filter (#1582)
- Fix some components miss install type (#1547)
- Fix pagination current-page event error emit (#1575)
- Fix select option migrate error (#1574)
- Fix popover panel disappear when hover on panel (#1573)
- Fix table fix #1572 (#1592)
- Fix table fix #1591 (#1593)
- Fix radio type order (#1554)
- Fix time-picker replace test `it.only` with `it` in test (#1586)
- Fix popper simplify mapEvents logic & add PopperEvents (#1541)
- Fix pagination component layout prop bug (#1576)
- Fix select disabled group not works (#1559)
- Fix dropdown dropdown will expand when unexpected (#1569)
- Fix table table column resize not work (#1567) …

### 1.0.2-beta.33

_2021-03-03_

#### Bug fixes

- Fix cascader-panel value can be falsy value (#1533)
- Fix scss error (#1542)
- Fix popper error cause by vue version update (#1556)
- Fix col will always be hidden when responsive span is zero (#1532)
- Fix empty svg render not normal in multiple tab-pane (#1534)
- Fix layout gutter bug (#1537)
- Fix select options watch flush post (#1513)
- Fix select noMatchText error show (#1523)
- Fix avatar need reset hasLoadError to false, if src changed (#1515)
- Fix input remove invalid attrs after render (#1489)
- Fix select emit blur event (#1504)
- Fix table bug of invalid tooltipEffect prop (#1470)
- Fix table column default rendering errors (#1433) …
- Fix scrollbar update bar when window resize (#1456)
- Fix autocomplete migration error (#1493)
- Fix message-box miss overlay style when on demand import (#1494)

### 1.0.2-beta.32

_2021-01-31_

#### Bug fixes

- Fix switch cannot change width dynamically (#1435)
- Fix PopConfirm translation error (#1450)
- Fix date range picker input issue (#1439)
- Fix date picker second clear not trigger change event #1438
- Fix behavior of tooltip (#1443)
- Fix bug cause by scrollToOption (#1440)
- Fix the issue which caused input area render error on Safari (#1429)
- Fix shadow rendering bug of initializing fixed columns (#1418)
- Fix popper trigger ref cannot be fetched (#1419)
- Remove tab incorrect highlight style (#1416)
- Fix type check error of message (#1413)
- Fix that the column width is calculated incorrectly (#1381)
- Fix popper position error (#1411)
- Fix style of demo card header (#1405)
- Fix upload list remove animation incorrect (#1379)

#### Features

- feat(carousel): add pause-on-hover prop (#1423)
- feat(dropdown): add max-height prop of menu (#1436)
- feat(progress): add default slot (#1426)

#### Chore updates

- docs: remove auto-complete of input and select (#1437)
- css prefix (#1407)
- docs(project): Update `importing on demand` section in `quickstart.md, to solve the issue which caused importing on demand not working (#1414)
- Fix dome-block bottom bar width error when fixed (#1406)

### 1.0.2-beta.31

_2021-01-31_

#### Bug fixes

- Fix Select can not scroll to default option (#1397)
- Fix Select tag's text is empty string when multiple with remote (#1393)
- Fix Tree error cause by child node's data is not reactive (#1396)
- Update Button change height to min-height (#1402)
- Fix Tree every node @check-change event fire only once (#1390)
- Fix Notification remove dom when destoryed (#1378)
- Fix Message component trigger many times bug #1269 (#1270)
- Fix ColorPicker compilation errors caused by switch (#1375)
- Fix Table column insertion disorder (#1329)
- Fix Popover z-index won't update when popover is shown (#1364)
- Update Dialog to accept number type (#1373)
- Fix Pagination jumper style error (#1372)
- Fix Col style gets affected by invalid value bug (#1370)
- Fix table remove tooltip when the component destroyed (#1245)
- Update Scrollbar when scrollbar isn't shown, hide the bar (#1342)
- Fix MessageBox remove default button text which caused i18n not working (#1357)
- Fix Popper api consistency (#1354)
- Fix dropdown/select/picker popper position error when has line-height (#1349)
- Fix DatePicker modify the judgment logic of startDate and endDate (#1322)
- Refactor Message and Notification component with VCA (#1387)

#### Chore updates

- Update Axure resource v2.1.0 (#1400)

### 1.0.2-beta.30

_2021-01-25_

#### Bug fixes

- Fix dropdown/select/picker popper position error when has line-height (#1349)
- Fix DatePicker modify the judgment logic of startDate and endDate (#1322)
- Fix full bundle export bug (#1350)

### 1.0.2-beta.29

_2021-01-25_

#### New feature

- Add type 'contextmenu' trigger for Dropdown (#1286)

#### Bug fixes

- Fix i18n bundle error (#1346)
- Fix Drawer error size prop to support Number (#1335)
- Fix affix to change target.value to props.target in judgement (#1343)
- Fix carousel don't update the indicator and items when data change(#1244)
- Fix fixed table height error when no data(#1332)
- Fix table header checkbox can be triggered when disabled(#1333)
- Repair table column width calculation abnormal (#1334)
- Fix image incorrect custom object-fit ratio (#1338)
- Fix color-picker can't select 8-digit hex color (#1323)

### 1.0.2-beta.28

_2021-01-20_

#### New feature

- Support vue-i18n@next (#1306)

#### Bug fixes

- Add tags and attributes completions for Vetur (#1303)
- Fix table when the data changes, the table does not update the layout (#1315)
- Fix table bug of table-column property watching (#1309)
- Fix loading transition invalid (#1321)
- Fix checkbox migrate error (#1293)
- Fix notification style when its type set and title not set (#1288)
- Fix tree node not render in lazy (#1298)
- Fix slider can't drag in mobile (#1299)
- Fix table column insertion disorder BUG
- Fix table checkbox in table header style error (#1292)
- Fix table migrate error (#1294)

### 1.0.1-beta.27

_2021-01-15_

#### Bug fixes

- Fix overlay overflowing issue (#1282)
- Fix loading directive cannot dispatch for the second time (#1281)
- Fix Date picker bind attr to panel error (#1277)

### 1.0.1-beta.26

_2021-01-14_

#### New feature

- New component `Affix` (#1210)

#### Bug fixes

- Fix overlay event triggering issue (#1235)
- Fix form add missing emits (#1272)
- Fix switch id of input can't be empty (#1273)
- Fix table filter icon height of table header (#1233)
- Fix col lacking props named tag (#1264)
- Fix input-number increase/decrease button not work (#1259)

### 1.0.1-beta.24

_2021-01-11_

#### Bug fixes

- Fix time picker scroll bug (#1227)
- Fix tree node don't update after push new node into parent (#1231)
- Fix loading error show when parent's display is not block (#1250)
- Fix input-number behavior error (#1252)
- Fix select emptyText error show (#1213)
- Fix select to replace symbols to strings to avoid individual importing symbol bug (#1224)

### 1.0.1-beta.23

_2021-01-07_

#### New feature

- New component `ElEmpty` (#1210)

#### Bug fixes

- Fix dropdown menu stop-popper-mouse-event (#1219)
- Fix menu item group not working (#1217)

#### Chore updates

- Bumping dep versions (#1214)

### 1.0.1-beta.22

_2021-01-06_

#### Bug fixes

- Fix menu item not expanding correctly (#1212)
- Fix popover hijacking mouse event bug (#1201)

#### Chore updates

- Update contain doc style (#1204)

### 1.0.1-beta.21

_2021-01-05_

#### Bug fixes

- Separate ImageViewer component (#1199)
- Fix YearPicker disabledDate bug (#1193)
- Fix Dialog render bug (#1144)
- Fix Tree deep watch data (#1188)
- Fix Popper transition lost bug (#1190)
- Fix Popover clickoutside not working bug (#1171)
- Fix Textarea line-height style bug (#1181)

### 1.0.1-beta.19

_2021-01-02_

#### Bug fixes

- Fix WeekPicker should return the first day of the week (#1169)
- Fix Dialog close event (#1164)
- Fix Select prop type missing array (#1168)

### 1.0.1-beta.18

_2020-12-31_

#### Bug fixes

- Fix timepicker keyevent bug (#1151)
- Bumping vue version to 3.0.5 (#1159)
- Fix table when the data changes, the layout is not updated bug (#1059)
- Fix Module @vue/test-utils has no exported members bug (#1139)
- Fix scrollbar mouseup event bug (#1123)
- Fix select props modelValue type error (#1158)

### 1.0.1-beta.15

_2020-12-27_

#### Bug fixes

- Fix cascader panel bug (#1112)
- Fix date-picker clear bug (#1114)
- Update build logic (#1118)
- Fix notification style bug (#1122)

### 1.0.1-beta.14

_2020-12-24_

#### Bug fixes

- Export textarea method resizeTextarea (#1032)
- Fix table column not deleted bug (#1062)
- Fix scrollbar mouseup scroll bug (#1066)
- Fix slider mouseup scroll bug (#1066)
- Fix pagination v-model of page-size not work (#1079)
- Fix app.use(comp.vue) type (#1067)
- Fix the style of scrollbar (#1042)
- Fix color-picker drag (#1084)
- Fix table z-index (#1078)

### 1.0.1-beta.11

_2020-12-21_

#### New features

- Add Skeleton compontent (#953)

#### Bug fixes

- Fix input add placeholder (#1052)
- Fix date-picker bind $attrs issue (#1069)
- Fix popper use EmitType to replace string (#1053)
- Fix table border style (#1056)

### 1.0.1-beta.10

_2020-12-18_

#### New features

- Add Space Component (#1002)

#### Bug fixes

- Fix select content overflow in multiple select (#967)
- Fix table global config (#999)

### 1.0.1-beta.9

_2020-12-16_

#### Bug fixes

- Fix menu collapse animation failure (#1003)
- Fix timepicker / datepicker fragment error (#1009)
- Update time select (#1014)
- Fix dialog can't scroll if the content too large (#993)
- Fix tree keyboard navigation bug (#995)
- Fix table filter-panel style (#943)
- Fix dialog header slot (#997)
- Fix native scrollbar not hide when `native` is not true (#971)

### 1.0.1-beta.8

_2020-12-12_

#### Bug fixes

- Fix table style bug (#969)
- Fix some components import type (#959)
- Fix popover with pure should has border (#954)
- Fix export locale (#950)
- Fix menu open method error (#952)
- Fix collapse not emitting change (#949)
- Fix dialog bouncing (#955)

### 1.0.1-beta.7

_2020-12-10_

#### Bug fixes

- Fix select multi mode rendering (#941)
- Fix notification left empty divs (#913)
- Fix upload bug (#927)
- Add input placeholder type (#814)
- Fix cascader-panel checked nodes not update when options change (#934)
- Update col layout style (#875)
- Fix drawer layout issue (#924)

### 1.0.1-beta.6

_2020-12-09_

#### Bug fixes

- Fix error PropType (#906)
- Fix tree right click event bug (#886)
- Fix form-item props undefined bug (#888)
- Fix autocomplete clearable doesn't work (#892)
- Fix color-picker can not select color (#896)
- Fix popper attr style fallthrough failed (#897)
- Fix color-picker popper-class invalid (#883)
- Fix tree document bug (#873)
- Fix upload file slot not work bug (#868)

### 1.0.1-beta.5

_2020-12-07_

#### Bug fixes

- Fix input non-emit events such as keyup not work (#866)
- Fix Select.focus is undefined bug (#862)
- Optimize useAttrs signature (#864)
- Fix table ts error (#863)
- Fix table avoiding the error of el-table-column rendering (#828)
- Fix popper gets covered by dialog/drawer (#861)
- Fix drawer implementation with hook (#817)
- Fix exporting fix for volar (#849)
- Fix cascader render error of radio label (#859)
- Fix pagination known issues (#811)
- Fix select error style of select-dropdown (#838)

### 1.0.1-beta.4

_2020-12-05_

#### Bug fixes

- Complete show-overflow-tooltip (#736)
- Remove dropdown outline (#798)
- Fix popover positioning (#796)
- Fix on demand importing dialog lacking overlay css (#809)
- Fix select value did not match issue (#808)
- Fix select height error bug (#834)
- Fix ts name error (#813)
- Fix popper border .is-light style bug (#829)
- Fix form-item auto width bug (#830)
- Set popper appendToBody to true by default (#845)

### 1.0.1-beta.3

_2020-12-03_

#### Bug fixes

- Fix nested menu ref unwrap value problem (#775)
- Fix alert style errors when no description (#782)
- Fix dialog show-close is invalid (#773)
- Destructing import from lodash (#788)
- Fix popper transition with 'el-zoom-in-top' (#785)

### 1.0.1-beta.2

_2020-12-02_

#### Bug fixes

- Fix navigation menu potential bug (#768)

### 1.0.1-beta.1

_2020-12-01_

#### Bug fixes

- Fix router behavior (#745)
- Add esm bundle (#577)
- Fix date picker referencing issue (#757)
- Fix pagination current-change event not emitting (#756)
- Fix `bodyStyle` bug (#754)
