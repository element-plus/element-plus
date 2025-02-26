## Changelog


### 2.9.5

_2025-02-21_

#### Features

- Components [dropdown] add `persistent` prop (#19797 by @zzjiaxiang)
- Components [menu] add `persistent` prop (#19874 by @zzjiaxiang)
- Components [cascader] add suggestion slot (#19866 by @DiamondYuan)
- Components [message-box] support custom close icon in message-box (#18168 by @xionkq)
- Components [slider] add `persistent` prop (#19889 by @zzjiaxiang)

#### Bug fixes

- Components [message-box] init validator (#19832 by @warmthsea)
- Components [tree-select] dynamic bind class invalid (#19803 by @btea)
- Components [table] compatible with window non-existence (#19837 by @purepear)
- Components [select] solve memory leak (#19709 by @dddssw)
- Components [steps] update border-color to support safari (#19726 by @LoTwT)
- Components [description] tsx rendering functional component error (#19879 by @btea)
- Components [cascader] prevent default behavior when pressing a key to toggle suggestion list (#19897 by @warmthsea)
- Components [message-box] vue warning when closeIcon is component (#19901 by @btea)
- Components [select] ensure scrollbar syncs when scrolling to selected option (#19636 by @DDDDD12138)
- Components [tree-select] search solve memory leak (#19895 by @warmthsea)

#### Refactors

- Components [menu] change to `script setup` writing  and optimizing code (#19816 by @zzjiaxiang)
- [menu] add necessary braces (#19840 by @btea)
- [time-picker] optimize type declaration (#19875 by @zzjiaxiang)

### 2.9.4

_2025-02-07_

#### Features

- Components [image-viewer] add showPreview method (#19466 by @zzjiaxiang)
- Locale add language Chinese Hongkong and Chinese Macau (#19608 by @markpro-code)
- Components [select] add popup-scroll event (#19589 by @zzjiaxiang)
- I18n add Telugu language (#19624 by @moulibheemaneti)
- Components [image-viewer] add `progress` slot and `show-progress` props (#19465 by @zzjiaxiang)
- Components [image-viewer] add toolbar slot (#19497 by @zzjiaxiang)
- Components [cascader] add `prefix` slot (#19631 by @DavidKitano)
- Components [table] add tooltip-formatter table & table-column prop (#19524 by @zhixiaotong)
- Locale export zhHk/zhMo (#19762 by @btea)
- Locale export Norsk(no) (#19747 by @changehu)
- Locale export missing language (#19790 by @btea)

#### Bug fixes

- Components [table-footer] update cols width on layout change (#19064 by @Dsaquel)
- Ci types & dark theme sync with pr (#19668 by @Dsaquel)
- Ci move all bundle to docs dist (#19671 by @Dsaquel)
- Components [table] selection-change event emit incorrectly (#19618 by @wNing50)
- Components [table] The index parameter of the selectable function is undefined (#19587 by @YiMo1)
- Components [autocomplete] prevent closing if focus is inside popper content (#19522 by @DDDDD12138)
- Components [input] refused to apply inline style because it violates csp (#19541 by @markpro-code)
- Components [table-v2] make the fixed columns scroll like mainTable (#19104 by @hanchao-c0ldwave)
- Components [cascader-panel] lazy return children can't get value (#19100 by @coderchang0105)
- Components [table] fix the logic of `selection` column when `fixed` state changes dynamically (#19703 by @wNing50)
- Components [table] the toggleTreeExpansion failed to trigger load function (#18728 by @webvs2)
- Components [table-v2] reset `lastVisitedColumnIdx` if width change (#19757 by @Dsaquel)
- Chore: [time-picker] correct typo in `timePickerRangeTriggerProps` (#19487 by @DDDDD12138)

### 2.9.3

_2025-01-10_

#### Features

- Components [dialog/drawer] add custom sub classes (#19099 by @Dsaquel)
- I18n add Hindi language (#19483 by @steveWang13)
- I18n add Norsk(no) language (#19523 by @changehu)
- Component [time-select] add include end time attribute (#19253 by @Dsaquel)

#### Bug fixes

- Components [description] `labelWidth` is invalid when no border (#19162 by @btea)
- Hooks [use-lockscreen] remove hiddenCls (#19429 by @Liao-js)
- Components [form] on post rules update reset field (#19129 by @Dsaquel)
- Components [tabs] set modelValue synchronously if beforeLeave is not set or is synchronous (#19387 by @DDDDD12138)
- Components [select] make sure the e-tag is not obstructed(#19529 by @baiwusanyu-c) (#19534)
- Components [dialog] fix scroll bar not resetting to top on reopen (#19471 by @wjp980108)
- Improvement(components): [text] add the title attribute (#19496 by @btea)
- Improvement(components): [text] keep the inherited title attribute (#19551 by @btea)
- Style(components): [dialog] no rounded when in fullscreen (#19583 by @warmthsea)

### 2.9.2

_2025-01-03_

#### Features

- Components [select-v2] add `fit-input-width` prop (#18834 by @YiMo1)
- Components [select, select-v2] add loading class to validateIcon (#19379 by @LoTwT)
- Components [table] add allow-drag-last-column prop (#19374 by @btea)

#### Bug fixes

- Components [select] resolve 'false' display issue when dropdown hides on search clear (#19244 by @DDDDD12138)
- Components [date-picker] model-value unexpected changes when type is week (#16795 by @FrontEndDog)
- Components [menu] fix `sliceIndex` calculation error (#19164 by @wen-lun)
- Components [anchor] scroll whether link is selected at the top (#18047 by @k983551019)
- Components [focus-trap] tryFocus is invalid for document.body (#19272 by @tolking)
- Components [inputnumber, input] resolve styling issues caused by using `prefix` and `suffix` (#19042 by @DDDDD12138)
- Components [color-picker] optimize the flickering issue (#18872 by @momei-LJM)
- Theme-chalk [input-tag] correct input-tag placeholder color (#19386 by @DDDDD12138)
- Components prevent blur event when is disabled (#19320 by @DDDDD12138)
- Types packing unexpected types (#19419 by @btea)
- Components [table] the overflowTooltip cannot be refreshed (#19440 by @xingyixiang)
- Components [upload] unable to delete files in removeFile (#19437 by @ly-yewu)
- Components [page-header] use `$slots` instead of `useSlots` (#19455 by @Dsaquel)
- Components [select] input width fills the remaining width (#19292 by @tolking)
- Style(components): [notification] word wrap (#17052 by @Liao-js)
- Perf(components): [table] prioritize use rowKey to determine whether it is selected (#19451 by @tolking)

### 2.9.1

_2024-12-13_

#### Features

- Components [dropdown] add triggerKeys attribute (#19124 by @hanchao-c0ldwave)
- Components [tree-v2] `filter-method` support third parameter (#19177 by @btea)
- Components [badge] add content slot (#18922 by @xing403)

#### Bug fixes

- Components [input-tag] trigger the add of tag when Chinese is Composing (#19079 by @tolking)
- Components [notification] display html as string (#19068 by @Dsaquel)
- Components [select] use option.isDisabled as the source of truth (#19137 by @makedopamine)
- Components [input] disabled state wrapper cursor style (#19176 by @btea)
- Components [select-v2] empty value check error in inputRef (#19140 by @Liao-js)
- Components [select] modify the logic of update the watch option (#18931 by @YiMo1)
- Components [table-v2] dynamic height causes overall calculation errors (#19082 by @hanchao-c0ldwave)
- Revert pkg pr new to main version (#19254 by @Aslemammad)

#### Refactors

- Components [alert] introduce hasDesc helper (#19085 by @zhangenming)
### 2.9.0

_2024-11-29_

#### Breaking changes

- See #15834

#### Features

- Components [tree-v2] add `props.class` prop (#18911 by @zzjiaxiang)
- Components [notification] add support for message as a Function (#18558 by @DDDDD12138)
- I18n add Malay(ms) translation (#18932 by @hcw2175)
- Components [table] expose scroll event (#12524 by @blesstosam)
- Components [tree-v2] add slot `empty` (#18980 by @zhixiaotong)
- Components [transfer] add custom empty slot for transfer panels (#18929 by @piskesocute)
- Components [select] add tabindex attribute (#19034 by @tolking)
- Components [input-tag] new component (#18885 by @tolking)

#### Bug fixes

- Components [select] keep the selected label (#18549 by @warmthsea)
- Types improve styles type by CSSProperties (#18942 by @thinkasany)
- Components [image-viewer] unable to capture focus (#17919 by @tolking)
- Components [tag] make stubbed Transition work in tests (#18928 by @purepear)
- Components [tree-select] expose `selectedLabel` (#18981 by @zhixiaotong)
- Components [cascader] multiple selection mode tag causes height change (#18285 by @zzjiaxiang)
- Components [calendar] respect table semantics (#18552 by @Jungzl)
- Components [select] the disabled state should render the input tag (#18443 by @btea)
- Components [date-picker] resolve  v-model type inconsistency (#18888 by @DDDDD12138)
- Components [input] the cursor error when click show-password (#19003 by @tolking)
- Components [select] change states.filtertedOptionsCount to filteredOptionsCount.value (#19010 by @makedopamine)
- Components [table] fixed column style when lazyload title (#19020 by @btea)
- Components [input-number] Chinese can be displayed in the numeric input box (#19018 by @yuxi-ovo)
- Components [time-picker] add passive modifier on touchstart event (#19046 by @Dsaquel)
- Components [notification] type declaration error and four types of methods are missing context parameters (#18951 by @YiMo1)
- Components [time-picker] click the Cancel button twice to close time picker (#18938 by @thinkasany)
- Style(components): [button] keep default hover color of link unchanged (#17050 by @btea)
- Style(components): [table] use `--font-size-base` for default font size (#18725 by @DDDDD12138)

### 2.8.8

_2024-11-15_

#### Features

- Components [select-v2] add `append-to` prop (#18798 by @btea)
- Components [skeleton] `throttle` supports values ​​as object (#17041 by @chenweiyi)
- Components [select] add `offset` and `show-arrow` prop (#18837 by @DDDDD12138)
- Components [description-item] add labelWidth prop (#18673 by @Lakphy)

#### Bug fixes

- Utils[vue] ensure `flattedChildren` traverse component's subTree (#18649 by @ddeerdevil)
- Components [select] prevent keyboard from deleting disabled option (#18752 by @cszhjh)
- Theme-chalk  sass `!global assignments` deprecation warning (#18711 by @warmthsea)
- Components [picker] fix popup not opening when editable is false (#18767 by @DDDDD12138)
- Components [mention] keyboard control options not work as expected (#18751 by @btea)
- Components [segmented] invisible active indicator after clearing selection (#18818 by @DDDDD12138)
- Components [mention] ref dom array order error when list changes (#18787 by @warmthsea)
- Components [table] `table-layout:auto` fixed column misalignment (#18736 by @btea)
- Components [table] failed to insert tooltip when show-overflow-tooltip is enabled (#18317 by @xingyixiang)
- Components [select] getValueIndex empty error (#18867 by @warmthsea)
- Components [select & select-v2] status-icon is invalid (#18101 by @WangYJEE)
- Components [pagination] input style loss (#18878 by @ToyCat93)
- Components time-picker disabled-[hours/minutes/seconds] (#13364 by @StephenKe) (#14216)
- Components numpadEnter does not work like the Enter (#18855 by @tolking)
- Components [select-v2] resolve overlap of tags and placeholder (#18388 by @tuskermanshu)
- Components [table] repeat setting the height style (#16054 by @betavs)

#### Refactors

- Improvement: [select] optimize the effect of keyboard switching options (#18773 by @btea)
- Components [select] simplify code (#18810 by @makedopamine)

### 2.8.7

_2024-11-01_

#### Features

- Components [date-picker] add `show-now` prop (#18625 by @btea)
- Components [date-picker] accessibility enhancement (#18109 by @tolking)
- Components segmented support vertical direction (#18653 by @thinkasany)

#### Bug fixes

- Components [table-v2] header rendering is misplaced (#18628 by @btea)
- Components [tree] highlight the corresponding node after data reset (#18578 by @momei-LJM)
- Components [slider] no render popper dom when showTooltip is false (#18667 by @zzjiaxiang)
- Hooks [useId] SSR hydration error caused by id in vue@3.5+ (#18647 by @tolking)
- Components [select-v2] group label overflow hidden (#18551 by @zzjiaxiang)
- Components [select] error parameters of getValueIndex (#14173 by @tolking)
- Downgrade vue-tsc to 2.0.28 (#18737 by @makedopamine)

#### Refactors

- Theme-chalk update Sass functions to prep for 3.0.0 (#18579 by @wjp980108)
- Replace Array.isArray with the built-in isArray (#18671 by @zzjiaxiang)
- Replace typeof fn with the built-in isFunction (#18705 by @zzjiaxiang)
- Replace typeof number with the built-in isNumber (#18706 by @zzjiaxiang)
- Replace type checking with built-in functions (#18720 by @zzjiaxiang)
- Style(components): [popper] popper border error (#18635 by @Liao-js)
- Chore(components): [tour] remove redundant check for 'open' variable (#18668 by @cszhjh)
- Chore(components): [descriptions] optimize the labelAlign (#18644 by @zzjiaxiang)

### 2.8.6

_2024-10-18_

#### Features

- Components [input] show pwd visible icon when the input is readonly (#18458 by @LoTwT)

#### Bug fixes

- Components [dropdown-item] remove redundant attributes (#18340 by @betavs)
- Components [select-v2] data echo abnormality (#18334 by @betavs)
- Components [segmented] no option to not render (#18509 by @btea)
- Progress bar get stuck when navigating between routes (#18586 by @makedopamine)
- Revert(components): [table-v2] #18179 & fix header checkbox z-index (#18554 by @warmthsea)

### 2.8.5

_2024-10-11_

#### Features

- I18n update germany translations (#18447 by @MaikoTan)
- Components [mention] explicit export dropdownVisible (#18460 by @SorrowX)
- Components [select & select-v2] explicit export `selectedLabel` (#18350 by @warmthsea)

#### Bug fixes

- Play dayjs cahce miss (#18381 by @makedopamine)
- Theme-chalk upgrade SASS version and fix deprecated color function (#18376 by @lvzhenbo)
- Components [transfer] render the option's label correctly when there's only an empty comment in the default slot (#18416 by @LoTwT)
- Components [table] cancel layout update when component unmount (#18440 by @btea)
- Hooks [lockscreen] compatible with document non-existence (#18445 by @btea)
- Components [mention] native event triggered twice (#18453 by @SorrowX)
- Components [select] use `blur` in the tooltip slot has no effect (#18335 by @warmthsea)
- Hooks rendering multiple popper container DOM in SSR/SSG (#18482 by @tolking)
- Components [select] the blur not triggered when click the outside (#18478 by @tolking)
- Components [table] the last column shuld not allow drag (#18444 by @btea)

#### Refactors

- Components [badge] show-zero implement (#18360 by @warmthsea)
- Docs remove Vite (#18383 by @makedopamine)

### 2.8.4

_2024-09-27_

#### Features

- Components [autocomplete] add getData to exposes (#18237 by @dormadekhin)
- Components [date-picker] add `placement` & `fallback-placements` (#18310 by @btea)
- Components [input-number] add prefix and suffix (#17993 by @guze2003)
- Components [cascader] update cascader component to expost presentText (#18338 by @0song)
- Components add the ability to append table filter panel, select and pagination size dropdowns to any element (#14318 by @Karolis-Stoncius)
- Components [table] export `updateKeyChildren` method & correct version (#17709 by @warmthsea)

#### Bug fixes

- Components [segmented] item may be undefined (#18199 by @vaebe)
- Components `step-strictly` is true and should keep the initial value and step matching (#18277 by @KESHAOYE)
- Components [scrollbar] compatibility with `wrapRef` does not exist (#18311 by @btea)
- I18n improve translations of Persian (Farsi) (#18290 by @Notorious-Ali)
- Components [checkbox] default false if no false-value attr (#18187 by @tuskermanshu)
- Components  [carousel] fix style when use motionBlur (#18329 by @momei-LJM)
- Components [descriptions-cell] redundant slot function calls (#18330 by @betavs)
- Components [avatar] remove outline from el-avatar component (#18303 by @DDDDD12138)
- Components [color-picker] support dynamic change of showAlpha prop (#18280 by @chensuifengran)
- Style(components): [form-item] top-label change to `inline-block` element (#18293 by @warmthsea)
- Style(components): [transfer] delete input__inner `border-radius` (#18351 by @warmthsea)

### 2.8.3

_2024-09-13_

#### Features

- Components [scrollbar] add tabindex to scrollbar wrap content (#14320 by @Karolis-Stoncius)
- Components [tree-v2] support `node-drop` event (#16935 by @MoConWu)
- Components [collapse] collpase item supports custom icon (#18215 by @kimverchan)
- Components [cascader-panel] add `empty` slot (#16274 by @btea)

#### Bug fixes

- Components [menu] move ulStyle from render to setup to fix memory leak (#18122 by @ShirleyYoung19)
- Components [table-v2] sass declaration deprecation error (#18218 by @gaoyia)
- Components [select-v2] label display error when re-rendering (#18128 by @btea)
- Components [tooltip] change ariaHidden value after closed the dropdown (#18207 by @tolking)
- Components [color-picker] supports dynamic change of colorFormat (#18135 by @SKSQ2529720581)
- Components [time-picker] close pick when click clear on pick open (#15390 by @wzc520pyfm)
- Components [table] the disabled checkbox are selected (#18034 by @tolking)

### 2.8.2

_2024-09-06_

#### Features

- Components [check-tag] add disabled prop (#17936 by @HaceraI)
- Components [config-provider] support more message config (#18106 by @btea)

#### Bug fixes

- The disabled state should not trigger focus (#18012 by @btea)
- Components [pagination] global size dynamic modification error (#18004 by @btea)
- Components [table] getColumnIndex may be undefned (#16782 by @406087475)
- Components [tag] leave animations not working (#18006 by @makedopamine)
- Components [select] switching single/multiple generates an error (#18030 by @tolking)
- The disabled state should not trigger focus (#18108 by @btea)
- Components [el-tree-select] fix lazy and multiple select node (#17903 by @gaoxuan-haxibiao)
- Theme-chalk [select] remove unnecessary codes of the select border (#18116 by @LoTwT)
- Components [select] call the exposes blur is invalid (#17691 by @tolking)
- Components [mention] replace props.disabled with useFormDisabled (#18119 by @tolking)
- Components [tree-v2] expand all ancestor nodes of the specified node (#18077 by @dadaguai-git)
- Theme-chalk [select] box-shadow noise (#18120 by @HaceraI)
- Hooks PopperContainer cannot be recreated when body is recreated (#18121 by @kimverchan)
- Components [calendar] improve range validation (#18125 by @btea)
- Components [table-v2] columns missing key field (#17891 by @betavs)
- Components [tabs] active-bar not move with the tab label changes (#18165 by @btea)
- Components [message] max affects grouping display (#18189 by @dadaguai-git)
- Components [table-v2] header checkbox cover fixedHeader when scroll (#18179 by @kimverchan)

#### Refactors

- Import shared utilities from @element-plus/utils (#18048 by @makedopamine)

### 2.8.1

_2024-08-23_

#### Features

- Components [cascader] support `placement` & `fallback-placements` (#17840 by @btea)
- Components [description] export props types (#17859 by @ntnyq)
- Components [mention] accessibility enhancement (#17848 by @tolking)
- I18n add Burmese(my) translation (#17765 by @myonaingwinn)
- Components [descriptions] add rowspan (#10314 by @guze2003)
- Components [popconfirm] add actions slot (#17957 by @typed-sigterm)

#### Bug fixes

- Components [input] blur event fails when using textarea (#17836 by @tolking)
- Components [date-picker] disabledDate is invalid when selecting year or month picker (#15848 by @xingyixiang)
- Components [dialog] error calling resetPostion before dialog is rendered (#17855 by @donga-gao)
- Components [tree] instance type missing (#17882 by @betavs)
- Components [select] binding click event is invalid (#17876 by @tolking)
- Components [tree] FireFox dargging dataTransfer judge (#17849 by @warmthsea)
- Components [table] toggleRowSelection restores previous behavior (#17884 by @tolking)
- Components [table] emptyText/sumText empty string is invalid (#8340 by @starryeve)
- Components [time-picker] avoid update initial value when using disabledHours & isRange (#17813 by @momei-LJM)
- Components [button] use tag and disabled comp click triggered (#17804 by @VENI-VIDIVICI)
- Components [table] use isEqual to determine whether it is selected (#17885 by @tolking)
- Components [segmented] fix async disabled style of selected item (#17716 by @wzc520pyfm)
- Components tree nodesMap leak (#10195 by @Simon-He95)
- Components add segmented component type to `global.d.ts` file (#17949 by @DDDDD12138)
- Components [dialog] rename resetPostion to resetPosition (#17900 by @yuuuuuyu)
- Theme-chalk replace margin with padding (#15499 by @kaine0923)
- Perf(components): [virtual-list] wrap row with Fragment and set key on it (#8284 by @tkitesy)
- Style(components): [popper] fix arrow style (#17826 by @momei-LJM)
- Style(theme-chalk): [input-number] fix controlled comps style (#10639 by @MARIOMARUI)
- Style(components): [select] add a unique class name for the clear icon (#17575 by @HaceraI)
- Chore(components): [dialog] change border-radius to base (#17975 by @warmthsea)

#### Refactors

- Components [affix] optimized code logic (#17929 by @lxKylin)
- Components [carousel] use var to replace raw string (#17958 by @blesstosam)

### 2.8.0

_2024-08-09_

#### Features

- Components [color-picker] alpha-slider a11y (#14245 by @tolking)
- Add mention component (#17586 by @Fuphoenixes)
- Components [tree-v2] add scrollTo method (#14050 by @kaine0923)
- Components [drawer] add append-to (#17761 by @tolking)
- Components [table] tree children add check strictly (#13519 by @tiandaoyi)
- Hooks use-draggable support resetPostion (#17699 by @donga-gao)
- Components [upload] added index parameter to default slot (#17143 by @zhuchaoling)
- Components [date-picker] add type yearrange for DatePicker (#14804 by @CherishTheYouth)
- Components [date-picker] add icon slots (#17453 by @zhixiaotong)

#### Bug fixes

- Build-utils ignore the effects of directories when exclude files (#17654 by @tolking)
- Components [select] exceeding the limit will still trigger update (#17685 by @btea)
- Components [slider] set slider precision (#15328 by @heappynd)
- Components [table] cover more edge cases for `show-overflow-tooltip` (#17629 by @makedopamine)
- Components [table] fix sorting issue in table-column (#17608 by @xixiIBN5100)
- Components [scrollbar] restore scroll position in onActivated hook (#11363 by @makedopamine)
- Components [table] inaccurate type of `toggleRowSelection` (#17687 by @makedopamine)
- Components [slider] data anomaly when the input value is undefined (#15402 by @betavs)
- Components [tabs] optimize SSR (#15183 by @makedopamine)
- Style [radio] marginRight 30px same as checkbox (#15260 by @taojunnan)
- Components [select-v2] corrent focus to input when select clicked (#17362 by @wzc520pyfm)
- Components[tabs] reactive objects may lose reactivity in label slot (#14135 by @makedopamine)
- Theme-chalk [tabs] padding is incorrect while hovering on `border-card`-shaped tab (#17694 by @makedopamine)
- Components [image] cannot trigger event when image is loaded error (#17692 by @zhixiaotong)
- Components [abort popper] fix effect type error (#17758 by @wzc520pyfm)
- Components [date-picker] fix user input error in monthrange (#12943 by @mdoi2)
- Components [slider] click on marks is inaccurately positioned (#15332 by @heappynd)
- Components [date-picker] clear button repeatedly triggers update:model-value (#17274 by @CherishTheYouth)
- Components SSR hydration error caused by disabled prop of teleport (#17551 by @tolking)
- Components [drawer] fix low animation fps without graphics acceleration (#17696 by @qianjiachun)
- I18n Compared with traditional Chinese, add simplified Chinese … (#17737 by @WangYJEE)
- I18n zh-cn lang typo (#17768 by @warmthsea)
- Components [tree] check isLeaf using lazy and default-expand-all (#17585 by @gaoxuan-haxibiao)
- Components add class name and disable style when disabling upload (#17753 by @ma-shuo)
- Components [select] with teleported="false" dropdown closes abnormally (#17548 by @Aaron-zon)
- Components [select] equal objects cannot destroy instances (#17214 by @dddssw)
- Components [radio] change not trigger (#17047 by @VENI-VIDIVICI)
- Components [upload] remove file when fileList does not use v-model (#16715 by @Liao-js)
- Components [statistic] fix excessive decimals when value is NAN (#17798 by @dadaguai-git)
- Components fixed add listeners not remove on beforeunmount (#17344 by @myronliu347)
- Components [date-picker] slot not take effect when type is month (#17748 by @btea)
- Components [date-picker] Return to normal when reopened (#11802 by @lyric-zemin)
- Components [dialog] appendTo type error (#17814 by @zhixiaotong)

#### Refactors

- Hooks rewrite composition as a composable function (#14240 by @tolking)
- Components [slider]optimize ts types (#17292 by @tyj-321)
- Components [image-viewer] optimise translate calc method (#13157 by @zwgwf)
- Components [select] cancel type conversion at initialization (#17606 by @tolking)
- Hooks determine the focus by event listening (#17719 by @tolking)
- Improvement(components): @touchstart @touchmove @wheel add passive (#16741 by @warmthsea)
- Perf(hooks): replace the ref object with a plain object (#15061 by @Polaris-tl)

### 2.7.8

_2024-07-26_

#### Features

- Components [cascader] add persistent props to cascader to improve performace (#17526 by @0song)
- Components [date-picker]  `type` add  `months` params (#17342 by @Panzer-Jack)
- Components [cascader] add tag-effect prop (#17443 by @ntnyq)
- Components [loading] replenish loading attributes (#17174 by @zhixiaotong)
- Docs support playground sync theme (#16735 by @btea)
- Components [time-select] export TimeSelectProps and Instance (#16511 by @l-x-f)
- Components [table-column] add `filter-icon` slot (#17272 by @btea)
- Components [carousel] add cardScale prop (#17621 by @warmthsea)
- Components [carousel] export `activeIndex` (#17650 by @warmthsea)

#### Bug fixes

- Components [tree-v2] component activation content not displayed (#17511 by @btea)
- Components [radio-button] model-value click style lost and format test file (#16692 by @warmthsea)
- Components [color-picker/tree-v2] build error typechecking fails with error TS2300 (#17545 by @Aaron-zon)
- Components [cascader] reactive prop collapse-tags (#17449 by @ntnyq)
- Components [tree]calling method to expand node accordion mode fail (#17441 by @btea)
- Components [table] expand-row-keys change to explicit type (#17333 by @warmthsea)
- Components [countdown] SSR hydration error (#17554 by @tolking)
- Sass declaration deprecation error (#17549 by @jw-foss)
- Components [message-box] vue wraning when button state is loading (#17603 by @btea)
- Components [input] add prop "row" explicit declare (#17085 by @sleepyShen1989)
- Components [tabs] add button misalignment in vertical layout (#16986 by @Yolo-00)
- Components [tabs] bar width is error when only one bar (#17016 by @Liao-js)
- Popper content type check (#17040 by @JiuRanYa)
- Components [form] not use status-icon and use slot icon style error (#16848 by @warmthsea)
- Components [cascader] failed to retrieve value when value is 0 (#17651 by @dadaguai-git)
- Components [segmented] `modelValue` boolean type validation warning (#17656 by @ToyCat93)

#### Refactors

- Docs upgrade vitepress (#17444 by @makedopamine)
- Components [button-group] optimize code (#17607 by @chouchouji)
- Components [link & text] optimize boolean type (#17610 by @chouchouji)
- Components optimize component boolean type (#17622 by @chouchouji)

### 2.7.7

_2024-07-12_

#### Features

- Components [form-item]: add `label-position` prop (#17111 by @xing403)
- Components improve event and supplement docs (#17150 by @warmthsea)
- Components [message-box] add loading-icon to confirmbtn,cancelbtn (#17360 by @wzc520pyfm)
- Components [select & select-v2] add `tag-effect` prop (#17445 by @ntnyq)
- I18n add fr translation for el-tour (#17484 by @warmthsea)

#### Bug fixes

- Components [pagination] `size` global adaptation (#17306 by @webvs2)
- Components [tree] add missing type reject for LoadFunction (#16990 by @kaedeair)
- Components [image] imageViewer crossorigin configuration missing (#17341 by @declanchiu)
- Components [carousel] disable the last monitoblur effect (#17374 by @btea)
- Ssr [tree-select] document is not defined (#17460 by @tolking)
- Components [tree-select] fix filter no matching data error (#17473 by @Fuphoenixes)
- Hooks cannot access 'useEmptyValuesProps' before initialization (#17448 by @tolking)
- Style: css uniformly uses `px` (#17101 by @warmthsea)
- Flx(component): buttonColor is calculated in the 'var' case (#17319 by @webvs2)

### 2.7.6

_2024-06-21_

#### Features

- Components [table] export columns (#17252 by @warmthsea)
- Pagination : add  `size` prop (#16858 by @webvs2)

#### Bug fixes

- Components [color-picker] replenish enableAlpha contral (#17015 by @warmthsea)
- Components [select] invalid name setting (#17127 by @btea)
- Components [table] dragging cell should not trigger `header-click` (#17093 by @btea)
- Components [table-v2] the selector is invalid when `row-key` is a number (#16989 by @Whbbit1999)
- Components [input] class bind error corresponding to dynamic slot (#17194 by @btea)
- Components [table] fit set to false bottom border error (#17023 by @btea)
- Components date-picker minDate change unexpectedly (#16748 by @xiaodong2008)
- Components [select-v2] with `teleported="false"` dropdown closes abnormally (#16714 by @GUEThe)
- Components fix iOS select click event listening (#16393 by @raphaelbernhart)
- Components [progress] setting both color and striped is invalid (#17235 by @btea)
- Components [date-picker] support dynamic setting of `format` (#17161 by @dddssw)

### 2.7.5

_2024-06-07_

#### Features

- Components [input] add `is-focus` class name when textarea focus (#17049 by @btea)

#### Refactors

- Components [watermark] change textBaseline default value to `hanging` (#17036 by @warmthsea)
- Style(components): [table] th text can be selected (#17039 by @warmthsea)
- Style(docs): fix fill color of badge in dark mode (#17078 by @tyj-321)

### 2.7.4

_2024-05-31_

#### Features

- Components [select & select-v2] add label slot (#16960 by @kooriookami)
- Play feedback components style (#17022 by @warmthsea)

#### Bug fixes

- Components [popper] remove unnecessary conditional judgment (#16834 by @warmthsea)
- Types non-null assertion component name (#16804 by @warmthsea)
- Components [table] cell tooltip display error (#16868 by @btea)
- Components [input] unify `async-validator` string length calc (#16757 by @btea)
- Components [select & select-v2] remove-tag when use backspace (#16832 by @Liao-js)
- Components [tree-select] empty slot display error (#16943 by @btea)
- Components [color-picker] attrs class (#16887 by @Liao-js)
- Components [date-picker] modelValue typo (#15080 by @chenxch)
- Style(components): dropdown-item blur hover style (#16895 by @Liao-js)
- Style(components): [select & select-v2] remove split dash (#17009 by @kooriookami)

#### Refactors

- Hooks unite import origin (#16872 by @warmthsea)
- Components [virtual-list] remove use-wheel ts-nocheck comments (#16929 by @warmthsea)

### 2.7.3

_2024-05-13_

#### Features

- Components [time-picker] @touchstart add passive (#16665 by @warmthsea)
- Components [form] export fields (#16755 by @warmthsea)

#### Bug fixes

- Components [pagination] jumper input label warning (#16682 by @Liao-js)
- Compoents [message-box] adapt `Parameters` extraction rules (#16592 by @reiwang01)
- Components [InfiniteScroll] error caused by value of el[SCOPE] (#16686 by @YiMo1)
- Components [table] selection reference when toggleAllSelection (#16800 by @Liao-js)
- Style(components): tour delete content outline style (#16725 by @Fuphoenixes)

### 2.7.2

_2024-04-26_

#### Features

- Hooks add use-aria hooks (#16598 by @kooriookami)
- Components [color-picker] add `teleported` prop (#16634 by @zhixiaotong)
- Components [form] add validate callback promise type (#16652 by @warmthsea)

#### Bug fixes

- 🐛 update autocomplete default width (#16633 by @xxholly32)
- Components [select] group error when custom option component (#16621 by @Liao-js)
- Components [table] return type of function summary-method  supports VNode (#16648 by @FrontEndDog)
- Test-utils fix main export error (#16504 by @wzc520pyfm)
- Components Add missing export (#16323 by @zzh948498)
- Components [table-v2] fix scrolling fail (#16470 by @Tsong-LC)
- Components [select] `isDisabled` is not fresh (#16419 by @makedopamine)
- Components [progress] bar background support gradient (#16666 by @btea)
- Components [select-v2] custom options init error in multiple (#16664 by @Liao-js)

### 2.7.1

_2024-04-20_

#### Features

- Components [badge] Add badge-style and badge-class (#16585 by @kooriookami)

#### Bug fixes

- Hooks [empty-values] warning on modifying computead value (#16508 by @btea)
- Components [input-number] fix binding wheel event warning (#16495 by @Canroc)
- Components [table] fix cell tooltip display error (#16449 by @electroluxcode)
- Components [table] hover style error (#16517 by @dowinweb)
- Components [table] fix grouping head when dynamic column (#16433 by @Liao-js)
- Components [select-v2] fix has existing option  when allow create (#16590 by @Liao-js)
- Components [table] table body rerendered when use row-key (#16544 by @Liao-js)

### 2.7.0

_2024-04-12_

#### Breaking changes

- See #15834

#### Features

- Components [segmented] new component (#16258 by @kooriookami)
- Components add empty-values and value-on-clear props (#16361 by @kooriookami)
- Components [badge] add dotClass、dotStyle、offset props (#16434 by @lxw15337674)
- Support node 18+ & update tsx and vitest (#16190 by @btea)

#### Bug fixes

- Components [input-number] wrapper padding style is overridden (#16310 by @betavs)
- Components [input-number] fix cascading style order (#16308 by @makedopamine)
- Components [table-v2] fixed mode hovering rerender cell (#12378 by @chenxch)
- Components [select-v2] manually set object type modelValue error (#16473 by @Fuphoenixes)
- Components [select & select-v2] fix filterable double click error (#16456 by @Fuphoenixes)
- Components [table] fixed hover on colSpan > 2 background is error (#16443 by @Liao-js)

#### Refactors

- Components [button] use buttonkls (#16090 by @wzc520pyfm)

### 2.6.3

_2024-03-29_

#### Features

- Components [tree] lazy load provide reject (#16099 by @btea)
- Locale update ru locale (#16192 by @VisualYuki)
- Components [message] add plain prop (#16214 by @kooriookami)
- Components [input-number] support slot custom icons (#16275 by @selicens)
- Components [badge] add color prop  (#16069 by @lxw15337674)

#### Bug fixes

- Components [icon] remove repeat style (#16242 by @Fuphoenixes)
- Components [select] fix error in low versions of vue (#16234 by @kooriookami)
- Components [date-picker] click the clear to reset the date panel (#15835 by @Ganlvin)
- Components [tree] dragging a node will deselect the node (#14830 by @Alixhan)

### 2.6.2

_2024-03-22_

#### Features

- Components [breadcrumb] aria-label uses locale (#16089 by @btea)

#### Bug fixes

- Components [anchor] `type` default value typo (#16102 by @cullyfung)
- Components [tree] remove duplicate type declaration (#16106 by @inside5545)
- Components [cascader] form nested causing clear icon invalid (#16068 by @btea)
- Components [anchor,tour] the `type`  type typo (#16119 by @warmthsea)
- Components [select] stop the click event propagation of `header/footer` slot (#16151 by @warmthsea)
- Components [tree] the value of append can be zero (#16130 by @btea)
- Components [select & select-v2] click toggleMenu add prevent (#16149 by @kooriookami)
- Theme-chalk replace `gulp-clean-css` with `cssnano` (#16056 by @zhixiaotong)
- Components [tag] remove duplicate style (#16174 by @btea)
- Hooks SSR hydration error caused by z-index (#16175 by @tolking)
- Components [cascader-panel] get the reactive proxy of `node` to trigger side effects (#16198 by @makedopamine)
- Style(components): [anchor] marker transition expression incorrect (#16100 by @zeyongTsai)

### 2.6.1

_2024-03-08_

#### Bug fixes

- Components fix deprecated warning (#16034 by @kooriookami)
- Components [checkbox] fix true-value and false-value (#16051 by @kooriookami)
- Locale typo (#16060 by @Shyam-Chen)
- Components [anchor] querySelector error (#16078 by @Fuphoenixes)

#### Refactors

- Style(components): [anchor] marker transition change (#16023 by @Fuphoenixes)
- Components [tree & date-picker] use public function and type (#16017 by @btea)

### 2.6.0

_2024-03-01_

#### Features

- Components anchor component (#15670 by @Fuphoenixes)
- Components [badge] add show-zero prop (#15944 by @IceyWu)
- Components [checkbox & radio] Use value instead of label act as value (#15525 by @kooriookami)
- Components [Carousel] Add motion blur functionality (#15603 by @JedediahXu)
- Components [date-picker] add type years for year multiple select (#15980 by @yuchenii)
- Components [select & select-v2] support empty string dynamically (#15995 by @kooriookami)

#### Bug fixes

- Components [upload] drag use before-upload to intercepting files (#15861 by @klren0312)
- Components [input] type hidden use class (#15865 by @chenxch)
- Components [drawer] use dynamic zIndex from useDialog hook(#15641 by @drylint) (#15900)
- Components [select] the font color does not change when disabled (#15920 by @betavs)
- Components [table-v2] header style error (#15950 by @btea)
- Components [tour] focusout error (#15970 by @Fuphoenixes)
- Components [input-number] fix default value reset error  (#15725 by @nova1751) (#15725)
- Components [tour] floating-ui autoUpdate error (#15972 by @Fuphoenixes)
- Components [date-picker] selected value comparison logic error (#15918 by @betavs)
- Components [select-v2] show header and footer slots when empty (#15964 by @kooriookami)
- Components [select-v2] set modalValue when filtering display error (#15981 by @kooriookami)
- Components [menu] Fixing Menu component's flickering issue with surplus sub-items on insufficient page height. (#15953 by @ikkkp)
- Components [tree-select] remote method and selected override (#15974 by @yujinpan)
- Components [tree-v2] fix issue in tree-v2 for setCheckedKeys invalid (#15997 by @huangjw1997)
- Style(components): [message] Update message style (#15912 by @kooriookami)
- Style(components): [alert] Update alert style (#15911 by @kooriookami)
- Style(components): [button] remove focus styles,  Fix outline flickering when foucs-visible (#16002 by @FrontEndDog)
- Perf(components): [select & select-v2] optimize performance (#15962 by @kooriookami)

### 2.5.6

_2024-02-18_

#### Features

- Style add og-image & apply lint (#15588 by @yeonjulee1005)
- Components [select] & [select-v2] add fallbackPlacements prop (#15765 by @Fuphoenixes)
- Docs preview page jumps to github with pr number (#15854 by @btea)

#### Bug fixes

- Components [carousel] improve a11y (#15579 by @cloydlau)
- Components [number-input] cannot scroll the container when the mouse pointer over an input (#15211 by @makedopamine)
- Components [tree-select] always focus when using filters (#15768 by @yujinpan)
- Components  [table] row has rowspan when hover it only has background on the first row of this rowspan (#15529 by @dowinweb)
- Docs toc link overflow (#15276 by @heygsc)
- Components [scrollbar] multiple rendering (#15822 by @xingyixiang)
- Components [select-v2] Tags not update when options sync added (#15838 by @kooriookami)

### 2.5.5

_2024-02-03_

#### Bug fixes

- Fix lodash import error (#15773 by @tolking)


### 2.5.4

_2024-02-02_

#### Features

- Components [dialog] Dialog can drag overflow the viewport (#15643 by @kooriookami)
- Components [message-box] MessageBox can drag overflow the viewport (#15674 by @kooriookami)
- Play custom namespace (#15677 by @btea)
- Components [check-tag] add type prop (#15727 by @kooriookami)

#### Bug fixes

- Components [table] The namespace of the showOverflowTooltip is invalid. (#15627 by @xingyixiang)
- Components [select] Remote search does not show menu when it has options and no query (#15683 by @wen403)
- Docs overlay error caused by sidebar (#15694 by @heygsc)
- Components [select] Fix value with value-key not selected (#15681 by @kooriookami)
- Components [tour] buttonProps & isSameProps errors (#15680 by @Fuphoenixes)
- Components [select] el-option-group error when el-option in a component (#15703 by @Fuphoenixes)
- Components [drawer] click allow focus out (#11965 by @tolking)
- Components [menu] Add menu-item margin when calculating `calcSliceIndex` (#15699 by @zhixiaotong)
- Components [upload] Add crossorigin property (#15524 by @wkasunsampath)
- Components [tabs] slot name use kebab-case style (#15733 by @chenxch)

### 2.5.3

_2024-01-22_

#### Bug fixes

- Components [select & select-v2] select can't delete input val (#15607 by @wzc520pyfm)

### 2.5.2

_2024-01-19_

#### Features

- Components [select-v2] Add header and footer slots (#15519 by @kooriookami)
- Components [checkbox] Checkbox can uncheck exceed max value (#15513 by @kooriookami)
- Components [select & select-v2] Add loading slot (#15540 by @kooriookami)
- Components [tour] target prop add more type (#15578 by @Fuphoenixes)

#### Bug fixes

- Ci Replace jest-coverage-report-action with  vitest-coverage-report-action (#15435 by @FrontEndDog)
- Components [select select-v2] fix input click event (#15462 by @kooriookami)
- Components [image-viewer] Maximum recursive updates exceeded error (#15483 by @Fuphoenixes)
- Docs popover offset default value error (#15502 by @FrontEndDog)
- Components [collapse] SSR hydration error caused by random ID (#15500 by @tolking)
- Fix doc sidebar error z-index (#15498 by @0song)
- Components [image-viewer] Fix crossorigin (#15511 by @kooriookami)
- Components [select] style break change in multiple collapseTags (#15460 by @Fuphoenixes)
- Components [input] resolve input attributes issue for textarea (#15514 by @YoungDan-hero)
- Components [select-v2] the select option style is incorrect (#15501 by @btea)
- Components [tree] setCheckedNodes incorrectly checked node (#15377 by @btea)
- Components [autocomplete] SSR hydration error caused by random ID (#15523 by @tolking)
- Components [dropdown] SSR hydration error caused by random ID (#15532 by @tolking)
- Components [cascader-panel] SSR hydration error caused by ID (#15533 by @tolking)
- Components [select] Fix input key event (#15544 by @kooriookami)
- Components [space] Fix gap style (#15560 by @kooriookami)

#### Refactors

- Components [table] The overflowTooltip of the table is implemented by the Eltooltip component. (#15470 by @xingyixiang)
- Components [drawer] use setup (#15556 by @wzc520pyfm)

### 2.5.1

_2024-01-11_

#### Bug fixes

- Components [select] remove redundant named slots (#15441 by @xiaoxian521)
- Components [select] Fix value bind object and trigger twice in form label (#15449 by @kooriookami)
- Components [select] exposes blur invalid (#15450 by @xiaoxian521)

### 2.5.0

_2024-01-10_

#### Features

- Docs add translations for doc search (#15180 by @plainheart)
- I18n add Arabic(ar-eg) translation for Egypt and middle east (#15125 by @HaniOurEdu)
- Components [menu] add `popper-class`、`subMenuTimeout` props (#15193 by @zhixiaotong)
- Components [autocomplete] add `loading` slot (#15206 by @zhixiaotong)
- Components tour component (#14952 by @Fuphoenixes)
- Components [tree] export TreeInstance (#15293 by @btea)
- Components [form] FormContext adds the getField method (#14930 by @cloudcome)
- Element-plus Support last 2 versions of browsers (#15313 by @kooriookami)
- Components [table] add `filterClassName` props in TableColumn (#15389 by @xiaoxian521)

#### Bug fixes

- Components [tree] filter expand loaded node (#15150 by @btea)
- Docs algolia search (#15173 by @chenxch)
- Components [tree] node drag error when using custom `allowDrop` method (#15005 by @CherishTheYouth)
- Components [input] input-style rendering error (#15174 by @btea)
- Docs fix doc search option doesn't update after switching language (#15181 by @plainheart)
- Docs replace `fonts.loli.net` with original `fonts.googleapis.com` (#15182 by @plainheart)
- Components [input] remove unnecessary properties (#15220 by @ryuhangyeong)
- Components [date-picker] handleFocusPicker delay (#15197 by @chenxch)
- Components [collapse] emit value type check error (#15242 by @btea)
- Style [col] media sm max-wdith 768 to 767 (#15085 by @chenxch)
- Components [date-picker] add first click demo (#15252 by @chenxch)
- Docs fix tip text overflows when no result (#15295 by @plainheart)
- Components [input-number] Displayed values is different from modelValue when use model-value (#15184 by @FrontEndDog)
- Components [select-v2] clear icon invalid when status-icon is set (#15306 by @btea)
- Components [link] add target attribute and relevant docs (#15266 by @yj-liuzepeng)
- Components [message] type is not working after customizing icon (#15233 by @betavs)
- Style [tour] fixed the closebtn's hover style when type is primary (#15309 by @Fuphoenixes)
- Components [input] remove useless contants (#15351 by @pzzyf)
- Build [date-picker] `type` prop error in web-types.json (#15376 by @btea)
- Components [menu] set `teleported`, parent menu popper not closed (#15342 by @xiaoxian521)
- Ci GITHUB_TOKEN is empty in `publish-npm-nightly.yml` (#15382 by @xiaoxian521)
- Components [tree-select] case-insensitive when filterable (#14617 by @hellomrbigshot)
- Build build web-types.json compatible with windows (#15379 by @btea)
- Components [loading] complete destroy vLoading directive unmounted (#15393 by @xiaoxian521)
- Components fixed total column without background color (#15336 by @SeaAster)
- Components [image, image-viewer] Add crossorigin property (#15406 by @wkasunsampath)
- Components [input] the cursor is misplaced when type setting number (#15341 by @yuchiXiong)
- Style(theme-chalk): replace word-break with overflow-wrap (#15190 by @kooriookami)
- Style(components): [menu] Collapse mode active color (#15343 by @chenxch)
- Chore(build): [ElTour & ElTourStep & ElPopover] update global types (#15401 by @xiaoxian521)

#### Refactors

- Components [input] get maxlength and minlength from props instead of attrs (#15212 by @FrontEndDog)
- Components [carousel] class optimization in code (#14954 by @wzc520pyfm)
- Docs [tour] use `ButtonInstance` and format code (#15304 by @btea)
- Components [tour] replace rect with path (#15315 by @btea)
- Components [select & select-v2] Refactor components (#15352 by @kooriookami)
- Perf(components): [menu] popper close any levels in `menu-trigger:hover` (#15383 by @xiaoxian521)


### 2.4.4

_2023-12-15_

#### Features

- Components [menu] add popperOffset and ellipsisIcon props(#14923 by @zhixiaotong) (#15051)
- Components [switch] (in)active icon slot (#15078 by @xing403)
- Components [pagination] add change event (#14828 by @xingyixiang)
- Components [el-menu] allow user to hide menu when clicking outside (#14742 by @cuongle-hdwebsoft)

#### Bug fixes

- Components [select-v2] popup height is not accurate (#15012 by @Jevin0) (#15014)
- Components [date-picker] the time panel is closed without losing focus (#14748 by @CherishTheYouth)
- Components [watermark] mutationObserver should work (#14822 by @Fuphoenixes)
- Components [watermark] Support for lower versions of Firefox (#14993 by @godxiaoji)
- Docs Algolia highlight error (#14831 by @FrontEndDog)
- Components [table-v2] cell, header-cell, empty slots not displayed (#15016 by @FrontEndDog)
- Components [table] header slot not displayed (#15035 by @FrontEndDog)
- Components [data-picker] use renderSlot simplified code (#15036 by @FrontEndDog)
- Components [table] tooltipOptions.showAfter is not effective  (#14741 by @xingyixiang)
- Ci git workflows not work (#15092 by @FrontEndDog)
- Components [input-number] Fix not trigger change event and incorrect value display (#15066 by @kooriookami)
- Components [collapse-transition] collapse get el exists height (#14801 by @Innei)
- Components [date-picker] tagName judgement error (#15079 by @ivan0525)
- Build fix built component source contains unsafe file path (#15152 by @plainheart)

### 2.4.3

_2023-11-27_

#### Features

- Components [card] adds footer slot (#10357 by @faga295)
- Components [dialog] append dialog to any element (#14317 by @Karolis-Stoncius)
- Docs add 2023 figma ui kit (#14922 by @YunYouJun)
- Components [select] add header and footer slot (#14876 by @Cheerwhy)

#### Bug fixes

- Components [select] style error in multiple collapseTags (#14602 by @Fuphoenixes)
- Components [date-picker] add the vertical-align attribute  to d… (#14798 by @yj-liuzepeng)
- Docs [watermark] adjusting the text color in dark mode (#14871 by @btea)
- Components [tree] default slots not displayed (#14939 by @FrontEndDog)

### 2.4.2

_2023-11-03_

#### Features

- Components [select-v2] add props attribute (#14536 by @tolking)
- I18n add Swahili(sw) translation (#14660 by @Manonicu)
- Components [watermark] add font textAlign and textBaseline (#14567 by @IceyWu)

#### Bug fixes

- Components [select] Fix border and shadow color error (#12757 by @baiwusanyu-c)
- Components [message-box] uncaught on draggable (#14618 by @betavs)
- Components [select-v2] label error when value not in the options (#14656 by @tolking)
- Components [rate] Fix the background rate when decimal (#14622 by @cc-hearts)
- Components [dialog] fix el-dialog z-index bug (#14373 by @nothing-sy)
- Components [dialog] consistent imports of lodash
- Components [tree-select] v-model invalid when source changes (#14603 by @yujinpan)
- Components [table] tooltipOptions.showAfter is not effective (#13175 by @xingyixiang)
- Revert "fix(components): [table] tooltipOptions.showAfter is not effe… (#14735 by @btea)

### 2.4.1

_2023-10-18_

#### Features

- Components [switch] add label attribute for accessibility (#14319 by @Karolis-Stoncius)

#### Bug fixes

- Components inconsistent style rounded button (#14552 by @cuongle-hdwebsoft)
- Components prevent carousel from auto playing (#14553 by @cuongle-hdwebsoft)
- Components [watermark] missing the CSS file (#14564 by @tolking)
- Theme-chalk menu horizontal popover height, close #14566 (#14573 by @YunYouJun)
- Components [select] input height calculation error (#14565 by @tolking)

### 2.4.0

_2023-10-13_

#### Features

- Components watermark component (#14236 by @TomatoDroid)
- Add menu horizontal height for img center (#14307 by @YunYouJun)
- Components [tabs] add addIcon slot (#12970 by @btea)
- Components [form-item]Label attribute for judging modification (#14344 by @Xaw-xu)
- Components [color-picker] add focus and blur event (#14244 by @tolking)
- Docs theme switch use startViewTransition api (#14489 by @btea)
- Feat(components): [date-picker] add dateFormat and timeFormat props (#14330 by @FrontEndDog)
- Components [select] accessibility enhancement (#14503 by @tolking)
- Components [image-viewer] add `minScale` and `maxScale` (#14120 by @IceyWu)

#### Bug fixes

- Components [menu] export MenuInstance (#14284 by @HeftyKoo)
- Components [carousel] Watch items causing state loss(#13010 by @SaberA1ter) (#13011)
- Components [collapse] fix triggering form action when inside it (#14308 by @Karolis-Stoncius)
- Docs [form] `label-position` type error (#14312 by @btea)
- Components row-class-name bgColor can not cover fixed column (#14225 by @StephenKe)
- Components [tabs] Fix some events accidentally firing (#14224 by @Mario34)
- Cannot find type definition file for `element-plus/global` (#13698 by @mioxs)
- Components [description] use `withDirectives` add custom directive (#14299 by @btea)
- Components fix: update timepicker options when changing locale (#14287 by @cuongle-hdwebsoft)
- Components [popper] invalid when props z-index is zero (#14375 by @betavs)
- Theme-chalk table tr bg in dark mode (#14443 by @YunYouJun)
- Components [date-picker] slot compatible with Vue3.3.x (#14354 by @FrontEndDog)
- Components [select-v2] read properties of null (#14321 by @FrontEndDog)
- Play apply esbuild plugin to tsx component (#14480 by @btea)
- Components [color-picker] exposed show method wrong behavior (#14064 by @wonderl17)
- Components [table] table-layout auto fixed by sticky (#11742 by @MrWeilian)
- Components [carousel] two length transform optimize (#12174 by @MrWeilian)
- Components inline style doesn't use the custom sass setting value (#14117 by @kamesan012)
- Components [table] fix summary row cells on table with layout auto not aligned with data cells (#14315 by @FrontEndDog)
- Components [upload] icon style abnormal (#14471 by @betavs)
- Components [table] show-summary style error when table-layout=auto (#14523 by @tolking)
- Components [checkbox] indeterminate checkbox a11y fix (#14322 by @Karolis-Stoncius)
- Components [sub-menu] style error in collapsed state (#13135 by @Lucky-Ya-Q)
- Components [menu] remove excess inline styles (#13693 by @tolking)
- Components [text] not support multi-line ellipsis (#11976 by @gimjin)
- Chore(MessageBox): unused keyframe (#14335 by @zhousg)
- Chore(components): [table] fix typo (#14473 by @FrontEndDog)

#### Refactors

- Descriptions improve types (#14313 by @makedopamine)
- Components [tabs] enhance instance type (#14352 by @HeftyKoo)
- Components [select] use utils function (#14345 by @btea)
- Components [checkbox] set the label default value to `undefined` (#14011 by @btea)
- Components!: [select-v2] value-key is used for object select (#13263 by @tolking)

### 2.3.14

_2023-09-14_

Fix release error. The changelog is the same as 2.3.13.


### 2.3.13

_2023-09-14_

#### Features

- Components [el-pagination] add teleported prop (#14072 by @boomboy4)
- Components [image-viewer] Add rotate event when rotating images (#14138 by @HADB)
- Components [upload] support async data (#14015 by @jianjunyuu)

#### Bug fixes

- Components [select] gurad value type error (#14074 by @sseinHu)
- Components [collapse] allow nested inputs in ElCollapseItem (#14061 by @kinggq)
- Components [rate] bind the textColor property (#14092 by @yj-liuzepeng)
- Components [table] add tabindex to tbody to fix #13991 (#14020 by @FrankFang)
- Components [form] improve types (#14062 by @ModyQyW)
- Components [select] fix hover index error when creating option (#12635 by @wzc520pyfm)
- I18n improve Dutch(nl) translation (#14164 by @JBtje)
- Components [color-picker] first click should be trigger (#14209 by @wonderl17)
- Docs [date-picker] `calendar-change` event parameter type error (#14237 by @btea)
- Docs [upload] fix the version of supporting async data (#14242 by @HADB)
- Components [collapse] fix accessibility issues (#13832 by @Karolis-Stoncius)
- Components [date-picker] month range should emit `calendar-change` (#14262 by @Justineo)
- Components [input] missing autofocus types (#14246 by @HeftyKoo)

#### Refactors

- Components [upload] reuse revkoeObjectURL function (#14126 by @HeftyKoo)
- Components [collapse] replace `keypress` with `keydown` (#14137 by @btea)
- Components [date-picker] add aria-labels to date picker btns (#14149 by @Karolis-Stoncius)
- Components [date-picker] basic-date-table (#10344 by @jw-foss)

### 2.3.11

_2023-08-26_

#### Other

- Revert "refactor(components): [form-label-wrap] use getStyle method (… (#14106 by @btea)


### 2.3.10

_2023-08-25_

#### Features

- Ci enable provenance (#13799 by @btea)
- Ci enable provenance (#13901 by @btea)
- Components [card]  add body class (#11869 by @uxuip)
- Components [cascader] add max-collpase-tags prop  (#13386 by @chenweiyi)
- Components added aria-level attributes for dialog and drawer headers; Fixed input-number's aria-valuenow being null (#13822 by @Karolis-Stoncius)
- Components [select] add aria-label to select's input (#13932 by @Karolis-Stoncius)

#### Bug fixes

- Components [tree] the issue with retrieving childrenKey (#13798 by @yj-liuzepeng)
- Components [select] fix set value error(#13872 by @cc-hearts) (#13879)
- Docs [table-v2.md] corrected en-US grammar, spelling, readability (#13900 by @MilesTails01)
- Components [autocomplete] tooltip offset (#12216 by @MrWeilian)
- Components fix the problem that chrome 72 table doesnotdisplaydata (#10640 by @LiZheGuang)
- Components [table] add table selection checkbox aria-labels (#13908 by @Karolis-Stoncius)
- Components [upload] fix empty array error (#13490 by @youpinyao)
- Components [select] backspace delete disabled option (#11995 by @MrWeilian)
- Components [tree-v2] modify the condition for when the value of currentKey is 0 (#13935 by @yj-liuzepeng)
- Components [table-v2] calculate the width of MainTable in the same way (#13584 by @makedopamine)
- Components [radio checkbox] fix click event triggered twice (#13936 by @FrontEndDog)
- Components fix the attribute conflict (#13504 by @kamesan012)
- Components [dropdown] adjust onItemLeave trigger (#13212 by @tolking)
- Components [select] fix the logic of updating selected data (#13374 by @inottn)
- Components [date-picker] fix the logic of checking the date range (#13377 by @inottn)
- Components [date-picker] correct onCalendarChange param type (#13976 by @evanryuu)

#### Refactors

- Components [form-label-wrap] use getStyle method (#13913 by @tiansQAQ)
- Components [table] reuse rAF (#13918 by @btea)
- [date-picker] rename time-arrow-control (#13651 by @btea)
- Components [upload] remove useless useSlot (#14053 by @HeftyKoo)

### 2.3.9

_2023-08-04_

#### Features

- Components [switch] add custom action icon prop (#13746 by @btea)

#### Bug fixes

- Components [input] fix textarea disabled box-shadow (#13632 by @shigma)
- Components [collapse-transition] fixed transition canceled bug (#13358 by @kaine0923)
- Components [tree] fix expand-icon.is-leaf prevent click event (#13616 by @matto49)
- Components [focus-trap] Fixed the function that removed the listener (#13158 by @qiYuei)
- Components [table] add filteredValue watcher (#13121 by @wonderl17)
- Components [autocomplete] improve a11y (#12647 by @init-qy)
- Components [select] fix for confusing click behaviour (#13664 by @wuzhidexiaoming)
- Theme-chalk [menu] the popup menu has 2px border at the bottom (#13695 by @tolking)
- Components [row] align="top" is not working properly (#13550 by @yj-liuzepeng)
- Components [cascader] reactive size change (#12294 by @MrWeilian)
- Components [collapse-transition] remove redundant code (#13715 by @mhpsy)
- Hooks [use-focus-controller] remove unnecessary role attributes (#13749 by @tolking)
- Components [date-picker] disable button if now is disabled (#13655 by @btea)
- Components [el-table] rangeWidth dealing with loss of precision (#12938 by @lxy030988)
- Components [cascader] checkbox sync error (#11462 by @acyza)
- Components [avatar] set img tag's width attribute (#13844 by @yj-liuzepeng)
- Components [select] abnormal focus when click tags (#13699 by @tolking)
- Components [select] clearIcon did not work with form statusIcon (#13533 by @init-qy)

#### Refactors

- Components [input] extract InputInstance (#13620 by @btea)
- Components [upload] fix the type of file (#13637 by @hhucqian)
- Components [menu] adjust default value of fallbackPlacements (#13696 by @tolking)
- Chore(components): [date-picker] export instasnce type (#13618 by @makedopamine)

### 2.3.8

_2023-07-14_

#### Bug fixes

- Correct sass map has-key parameter (#13132 by @wonderl17)
- Components [date-picker] One input affect the other input (#12181 by @HeftyKoo)
- Components [virtual-list] Resetting the vertical scrollbar state (#13319 by @huangguangfa)
- Components [tree] fix node can drop inner (#9770 by @init-qy)
- Style [progress] linecap value of track is consistent with path (#13395 by @btea)
- Theme-chalk [form] remove default width of Input in inline form (#13375 by @tolking)
- Components [checkbox] default after border color is transparent (#13402 by @chenxch)
- Components [table] multiple line ellipsis tooltip takes effect (#12805 by @btea)
- Style [select] tooltip positioning is incorrect (#13424 by @wuzhidexiaoming)
- Tree content checkbox height larger than item height, close #13396 (#13446 by @YunYouJun)
- Types in exports (#13443 by @zhuying547)
- Add more exports types (#13498 by @sxzz)
- Components [color-picker] fix incorrect cursor position (#13516 by @kooriookami)
- Components [input] lose focus when click suffix icon (#13264 by @tolking)
- Style(theme-chalk): [table] fix th font weight (#13556 by @kaine0923)
#### Refactors

- Components [select] override the class using computed (#13302 by @wzc520pyfm)

### 2.3.7

_2023-06-21_

#### Features

- Theme-chalk [form] add default width to Input in inline form (#12897 by @tolking)
- Components [upload] item add title attribute (#13231 by @btea)
- Components [Table] add show-overflow-tooltip props (#13169 by @yuyinws)

#### Bug fixes

- Components [backtop] change default visible (#13069 by @init-qy)
- Components [table] add missing append height (#12676 by @init-qy)
- Components [table] width of columns become 0 unexpectedly (#12920 by @makedopamine)
- Components[time-picker] add parseFloat to resolve TimePicker offset (#12837 by @zhengsixsix)
- Components [input] fix formatter and parse problem (#12622 by @wzc520pyfm)
- Components [table] fix clearFilter type (#13149 by @mdoi2)
- Locale : improve sr translation (#13125 by @N-M)
- Components [form] improve types (#12549 by @ModyQyW)
- Components [calendar] improve types (#13165 by @ModyQyW)
- Components [select] filter shake (#12106 by @chenxch)
- Components [tag] element vertically centered (#13235 by @yj-liuzepeng)
- Components [table] adjust the showOverflowTooltip value logic (#13282 by @btea)
- Perf(components): [select-v2] performance enhancement for initStates (#12390 by @CeceWall)
- Style(theme-chalk): remove unreferenced modules (#12974 by @zwgwf)
- Style(theme-chalk): change input-number hover style (#13120 by @yj-liuzepeng)
- Style(theme-chalk): change border-left:0 to border-left-color:transparent (#13107 by @zhengsixsix)

### 2.3.6

_2023-06-02_

#### Bug fixes

- Components [popper] prioritise user's popper-style (#12833 by @Lionad-Morotar)
- Components [select-v2] Fix border color error (#12755 by @baiwusanyu-c)
- Components [notification] fix props.zIndex lose efficacy bug (#12474 by @Ganlvin)
- Components [select] optimize the triggering of blur event (#11524 by @tolking)
- Components [table] maxHeight shark (#12349 by @chenxch)
- Components [steps] preserve the order of subcomponents (#12896 by @makedopamine)

#### Refactors

- Components [message-box] remove useRestoreActive (#11646 by @tolking)

### 2.3.5

_2023-05-19_

#### Features

- Docs right menu tag convert (#12606 by @btea)
- Components [carousel] If the carousel height is auto apply item height (#12388 by @qq282126990)

#### Bug fixes

- Components [table] text node not have closest method (#12543 by @btea)
- Components [loading] Compatible with vue3.2.0~12 (#12377 by @chenxch)
- Components [tree] fix always trigger drag (#12612 by @init-qy)
- Components [image] fixed lazyLoad scroll end not loading (#12596 by @cicada-ah)
- Components [table-v2] Adjust the expandable (#12519 by @chenxch)
- Components [upload] before-upload change data in promise (#12575 by @GenerQAQ)
- Components [menu] calc slice index remove comment node (#12472 by @chenxch)
- Components [input-number] add Judging if the max is greater than the min (#12741 by @zhengsixsix)
- Components [tree] Fix TreeOptionProps (#12511 by @lyric-zemin)
- Components [select] fix placeholder display (#11051 by @sleepyShen1989)
- Components [TreeSelect] incorrect check event params (#12370 by @yujinpan)
- Components [TreeSelect] checking node reset checked cache node (#12367 by @yujinpan)
- Components [tree-select] incorrect selection when using `checkOnClickNode` without checkbox (#12826 by @yujinpan)
- Improvement(locale) : update fa language. (#12677 by @4limirzaei)

#### Refactors

- Components [steps] optomizate class in code (#12672 by @wzc520pyfm)

### 2.3.4

_2023-04-23_

#### Features

- Components [button] add tag attribute (#11853 by @tolking)
- Components [progress] support set striped progress bar (#12333 by @wzc520pyfm)
- Docs document preview jumps to playground with pr number (#12365 by @btea)
- Components [tree] support customize content when data is empty (#12459 by @heappynd)

#### Bug fixes

- Components [image] Display error content when picture loading fails (#11600 by @ljf1834)
- Components [select] delete key should not choose tag (#12200 by @MrWeilian)
- Components [date-picker] optimize props definition and export (#12199 by @Brain777777)
- Components [menu] change declartion of ulStyle to setup function (#12319 by @CeceWall)
- Components [input] Write Chinese in parenthesis, letters repeat (#12154 by @HeftyKoo)
- Components [loading] fix zIndex (#12442 by @pan2-2)
- Components [dropdown] improve types (#12514 by @ModyQyW)
- Components [select] correct update selectSize (#11973 by @acyza)
- Build(components): fix generateExternal use wrong reference (#12180 by @daolanfler)
- Chore(build): optimize the type conversion of tag plugin (#11590 by @tolking)
- Style(theme-chalk): [menu] horizontal mode submenu line-high (#11848 by @WindBearr)
- Style(theme-chalk): [transfer] improve transfer filter style (#12454 by @wjw-gavin)

#### Refactors

- Extract isClient and isNumber isBoolean (#12504 by @btea)

### 2.3.3

_2023-04-07_

#### Features

- Components [color-picker] add `show` `hide` expose (#11942 by @xiterjia)
- Components [date-picker] support numpadEnter (#12323 by @chenxch)

#### Bug fixes

- Components [tree-select] add to global components (#12255 by @btea)
- Components [upload] add before-upload test (#12287 by @chenxch)
- Components [text] add to global components (#12317 by @Altermoe)
- Components [statistic] add to global components (#12324 by @btea)
- Components [menu] Avoid call router when index is not provided (#12206 by @HeftyKoo)
- Components [popover] default trigger (#12321 by @MrWeilian)
- Revert "fix(components): [popover] default trigger" (#12341 by @chenxch)
#### Refactors

- Components [table] remove useless brackets (#12283 by @MrWeilian)

### 2.3.2

_2023-03-31_

#### Features

- Components [form] scroll-into-view options (#12164 by @ryuhangyeong)

#### Bug fixes

- Components [select-v2] reset hoverindex when close dropdown list (#12090 by @btea)
- Components [input] scrollbar not hide after autosize (#10137 by @HeftyKoo)
- Docs [tabs] example type error (#12160 by @bigsnowballhehe)
- Components [input] textarea height calc (#12087 by @MrWeilian)
- Components [select] multiple disabled style (#12015 by @MrWeilian)
- Components [pagination] delete input value display empty string (#12134 by @btea)
- Upload data is not independent (#12029 by @jianjunyuu)
- Style(components): [Tabs] Modify tabs to flex layout (#12048 by @kooriookami)

### 2.3.1

_2023-03-19_

#### Bug fixes

- Components [select] iOS keyboard not appear when focus (#11498 by @MrWeilian)
- Components [cascader] clickoutside (#11997 by @chenxch)
- Components [table-column] first default column set placeholder (#11705 by @MrWeilian)
- Components [input-number] modelValue incorrect update (#12007 by @Mario34)
- Hooks vm may be null (#12058 by @liulinboyi)
- Hooks [use-delayed-toggle] clear timer when call onClose (#12056 by @wangcch)
- Style [message-box] border box (#12086 by @jw-foss)
- Style(theme-chalk): use variable instead of '-' (#11889 by @fishermanxzx)
- Style(theme-chalk): [select-v2] text overflow (#11969 by @emojiiii)
- Style(components): [input] update exceed style (#12094 by @btea)

### 2.3.0

_2023-03-12_

#### Features

- Components [select-v2] Add max-collapse-tags prop (#11405 by @kooriookami)
- Components [select] Add max-collapse-tags prop (#11378 by @kooriookami)
- Components [cascader] Adjust expose and typo (#11781 by @chenxch)
- Components add el-text component (#11653 by @gimjin)

#### Bug fixes

- [message-box] lock scroll (#11921 by @jw-foss)
- Components [popover | tooltip] keep autoClose prop (#11833 by @wangcch)
- Components [table-v2] endReached triggered twice when first (#11928 by @MrWeilian)
- Components [input] update input value length calculate (#11816 by @btea)
- Components [loading] namespace config (#11956 by @btea)
- Components [tooltip] remove mousemove listener when unmount (#11940 by @zt123123)
- Style(components): [select-v2] input-icon margin-left (not first) (#11830 by @wangcch)
- Chore(components): [pagination] accessibility improvement (#11817 by @tolking)
- Style(theme-chalk): [rate] size (#11920 by @chenxch)

### 2.2.36

_2023-03-08_

#### Bug fixes

- Components [select] Filter duplicate emits of "update options" (#11884 by @godxiaoji)
- Components [table] useZIndex is called outside setup (#11895 by @Mario34) (#11900)
- Components [select] filter all ElOption item labels (#11909 by @godxiaoji)
- Components [global-config] global injection (#11899 by @jw-foss)

### 2.2.35

_2023-03-07_

#### Bug fixes

- Components [select] console warning (#11868 by @jw-foss)
- Components [global-config] (#11866 by @jw-foss)
- Components [overlay] namespace issue (#11881 by @jw-foss)

### 2.2.34

_2023-03-06_

#### Bug fixes

- Components [table-v2] class of column is not valid (#11815 by @tolking)
- Components [tree-select] cache data update incorrect (#11225 by @yujinpan)
- Components [global-config] (#11847 by @jw-foss)

### 2.2.33

_2023-03-03_

#### Features

- Components [tree-v2] add item-size attribute (#11522 by @btea)

#### Bug fixes

- Theme-chalk [upload] wrong hover style when disabled (#11635 by @wonderl17)
- Components [input-number] prevent input wheel events (#11677 by @Mario34)
- Components [tooltip] display tooltip correctly (#11643 by @acyza)
- Components [autocomplete] clearable and disabled props not working (#11714 by @richex-cn)
- Docs [search] fix navigate error when enter pressed (#11718 by @wonderl17)
- Components adjust menu close api (#11682 by @chenxch)
- Components [select] fix the hoverIndex display error (#11297 by @btea)
- Components [tabs] add deep attribute to watch (#11724 by @tolking)
- Components [select] add popper-options prop (#11734 by @ryuhangyeong)
- Components [select] support custom height (#10840 by @MrWeilian) (#10847)
- Components [tabs] tab-bar need to adapt to tabs width change (#11731 by @godxiaoji)
- Components [autocomplete] the blur event is not triggered (#10091 by @tolking)
- Components circular referencing issue (#11777 by @jw-foss)
- Theme-chalk [tab] correct padding of card item on hover (#11283 by @makedopamine)

#### Refactors

- Components [slider] remove useless code (#11681 by @Geekhyt)
- Tokens - [form] (#11743 by @jw-foss)
- Components [config-provider] (#11749 by @jw-foss)
- Tooltip replace any to OnlyChildExpose (#11660 by @Lck6de1p)
- Project removing packages/tokens (#11769 by @jw-foss)
- Components [color-picker] alpha-slider (#10332 by @jw-foss)
- Components [steps] (#10427 by @Simon-He95)
- Chore(components): [table] fix table config typo (#11700 by @wonderl17)
- Style(components): [breadcrumb] item use inline-flex (#11683 by @chenxch)

### 2.2.32

_2023-02-19_

#### Bug fixes

- Components [table] fix an undefined reference in table-layout (#11204 by @jaa134)
- Components [cascader] add focus and blur event when set filterable (#11273 by @btea)
- Components [dropdown] unmounted error (#11649 by @chenxch)

### 2.2.31

_2023-02-17_

#### Features

- Components [cascader] add togglePopperVisible for expose (#11559 by @MrWeilian)
- Components [descriptions] render null when empty label (#11575 by @wangcch)

#### Bug fixes

- Components [carousel] delete the indicator props (#11483 by @ryuhangyeong)
- Components [cascader-panel] clear active style (#11495 by @esttom)
- Components [upload-dragger] Avoid firefox open file (#11092 by @acyza)
- Hooks [use-lockscreen] prevent flaky unit tests (#11404 by @robert-wloch-iits)
- Translate arabic language (#11510 by @itsalimanuel)
- Components [input] box-shadow noise (#11518 by @chenxch)
- Components [select] ensure select options respect filter query during initialization (#11205 by @jaa134)
- Components [select] i18n issue of select placeholder (#11508 by @wonderl17)
- Components [input] fix textarea autosize (#11376 by @acyza)
- Components [tree] setCheckedKeys keys attribute add type (#11390 by @qq282126990)
- Components [dropdown] fix focus after close (#11586 by @Giwayume)‘
- Enhancement(theme-chalk): [checkbox] refactor checkbox disabled style (#11503 by @Geekhyt)

#### Refactors

- Components [empty] (#11494 by @ryuhangyeong)
- Components [menu] add deprecated mark to popperAppendToBody (#11509 by @tolking)

### 2.2.30

_2023-02-10_

#### Features

- Components [statistic] (#11420 by @chenxch)

#### Bug fixes

- Components [select] recalculate input height when display change (#11374 by @makedopamine)
- Components [input] use v-if throw exception (#11187 by @acyza)
- Components [tree] update refNode type (#11421 by @btea)
- Components [dropdown] (#11431 by @jw-foss)
- Theme-chalk [table] the cell missing padding style (#11456 by @tolking)
- Components fix virtual list scroll&wheel handler (#11472 by @Rapliangle)
- Components [virtual-list] scroll issue (#11475 by @jw-foss)

#### Refactors

- Tokens use Symbol as injection key (#11251 by @Naeemo)
- Locale change short months naming (#11326 by @ADISAKBOONMARK)

### 2.2.29

_2023-02-03_

#### Features

- Integrate use popper (#11045 by @jw-foss)

#### Bug fixes

- Components [dialog] remove "word-break: break-all;" (#11090 by @purepear)
- Components [InfiniteScroll] keep-alive dom undefined (#11084 by @chenxch)
- Component [badge] fix auto width  (#11003 by @AydenGen)
- Components [select] display tags correctly (#11149 by @holazz)
- Components [tree-select] disabled attribute does not take effect (#10670 by @iDestin)
- Components [message] fix space when offset exists (#11268 by @linxianxi)
- Components default table cell padding SCSS variable fix (#10708 by @bartoszrudzinski)
- Components [table-column] column miss update due to key (#8528 by @MrWeilian) (#10679)
- Components [link] fix the link jump to element-ui (#11357 by @NekoYyang)
- Components [popper] (#11377 by @jw-foss)
- Components [form-item] fix error message animation (#11352 by @niuxinyu)
- Components [cascader] fix warning when clear (#11335 by @sleepyShen1989)
- Style(components): [checkbox] fix checkbox-button class var spelling (#11044 by @iamdin)
- Chore(components): [tabs] optimize code (#11261 by @RadiumAg)

#### Refactors

- Components [image] use standard wheel event (#11107 by @Naeemo)
- Components [backtop] use scrollTo with smooth (#11103 by @Naeemo)
- Components [popper] rename the component name to ElPopper (#11383 by @tolking)

### 2.2.28

_2022-12-30_

#### Features

- Hooks [use-popper] (#10983 by @jw-foss)
- Components [table] overflow tooltip supports `enterable` and customization (#10984 by @plainheart)

#### Bug fixes

- Components [input-number] fix args order (#11020 by @sleepyShen1989)
- Components [cascader] placeholder is not displayed correctly (#11031 by @btea)
- Docs some wrong examples in the document (#11072 by @asdjgfr)
- Element-plus exposing ElSubMenu component (#11100 by @tolking)

#### Refactors

- Components [cascader] use script-setup syntax (#11013 by @chenxch)

### 2.2.27

_2022-12-16_

#### Features

- Components el-image support set zoom-rate (#10930 by @JiatLn)

#### Bug fixes

- Components [notification] option zIndex for notification can't effect (#10796 by @acfinity)
- Components [tree-select] props `cacheData` not reactive (#10885 by @yujinpan)
- Components [focus-trap] input selection (#10606 by @holazz)
- Theme-chalk [menu] arrow position error in popup (#10960 by @tolking)
- Theme-chalk [menu] the popup style error (#10958 by @tolking)
- Components [tabs] correct active bar position (#10989 by @holazz)
- Components input-number 0 can not triger change event (#10980 by @StephenKe)
- Style(theme-chalk): [color-picker] Fix focus-visible outline (#10911 by @kooriookami)
- Add Kurdish language (Sorani - ckb) (#10913 by @swarakaka)
- Style(theme-chalk): [Menu] Fix menu style (#10813 by @jianjunyuu)

#### Refactors

- Components [statistic] (#10939 by @holazz)
- Components [transfer] remove useless code (#10971 by @HeftyKoo)

### 2.2.26

_2022-12-02_

#### Features

- Components [menu] add `popper-effect` menu attribute (#10867 by @xiaoxian521)

#### Bug fixes

- Components [table] fix error in dynamic change table-column (#10713 by @init-qy)
- Components [date-picker] default-time affects now result(#10729 by @MrWeilian) (#10737)
- Components [input-number] Fix decrease and increase disabled (#10787 by @kooriookami)
- Components [select-v2] initial value compatibility (#10759 by @holazz)
- Components [tree] revert inherits the label class (#10812 by @chenxch)
- Components [TreeSelect] incorrect label when child not rendered (#10716 by @yujinpan)
- Theme-chalk [menu] optimize the SubMenu title style (#10828 by @tolking)
- Components [table]fix the problem that show-overflow-tooltip will also be displayed when the browser is zoomed (#10816 by @Cenavy1019)
- Style(theme-chalk): fix carousel button style (#10869 by @xiaoxian521)

### 2.2.25

_2022-11-25_

#### Bug fixes

- Components [popconfirm] import missing button style (#10774 by @plainheart)
- Revert: "fix(components): [table] fix expand icon center (#9943 by @xiaoxian521)" (#10773)

### 2.2.24

_2022-11-25_

#### Fix
- Revert "fix(components): [menu] menus that are not in the expanded path do not open" (#10769 by @holazz)

### 2.2.23

_2022-11-25_

#### Bug fixes

- Components [upload] use useDisabled (#10663 by @btea)
- Components [cascader] collapse tags tooltip style (#10669 by @holazz)
- Components [menu] menus that are not in the expanded path do not open (#10480 by @iDestin)
- Components [input] prefix and suffix add click focus event (#10674 by @chenxch)
- Components [pagination] Nesting causes missing styles (#10666 by @chenxch)
- Components [table] optimizate types export (#10677 by @xiaoxian521)
- Components [tooltip] SSR hydration error caused by random ID (#10541 by @tolking)
- Components [input-number] Input actions can update values (#10329 by @baiwusanyu-c)
- Components [table] fix expand icon center (#9943 by @zhengbangbo)
- Components [page-header] display if breadcrumb slot exists (#10719 by @ryuhangyeong)
- Add drawer deprecated custom-class warning (#10745 by @0song)
- Style(theme-chalk): [Pagination] Fix pagination style (#10692 by @kooriookami)

### 2.2.22

_2022-11-18_

#### Bug fixes

- Components [select-v2] case-insensitive when filterable (#10575 by @hellomrbigshot)
- Style(components): [pagination] Refactor pagination style (#10563 by @kooriookami)

### 2.2.21

_2022-11-11_

#### Bug fixes

- Docs [alert] (#10460 by @jw-foss)
- Docs [vp-api-typing] (#10467 by @jw-foss)
- Components [dropdown-item] prevent click if disabled (#10532 by @ryuhangyeong)
- Components [focus-trap] input select text (#10535 by @chenxch)
- Components [checkbox] wrong checked status when label is Object (#9863 by @init-qy)
- Components [cascader] set height correctly (#10538 by @holazz)
- Components [image-viewer] `hide-on-click-modal` not work (#10568 by @holazz)
- Components [calendar] fix range cross year bug (#10574 by @sunyuu)
- Style(components): [select] Fix tags style (#10502 by @kooriookami)
- Style(components): [select-v2] Uniform style consistent with select (#10501 by @kooriookami)

### 2.2.20

_2022-11-06_

#### Features

- Components [dropdown] add props for teleported API (#10012 by @consultation-applio)
- Docs vite-press new component (#10346 by @jw-foss)
- Docs api typing shortcuts (#10353 by @jw-foss)
- Docs [components] additions (#10374 by @jw-foss)

#### Bug fixes

- Components [select-v2] empty value should be undefined (#10189 by @holazz)
- Components [popover] abnormal style when effect is dark (#10190 by @holazz)
- Components [table] fixed column supported in grouped header (#10096 by @tinyfind)
- Components [popper] enable the adaptive configuration (#10104 by @tolking)
- Components [select] blur trigger remote event should pass string (#10218 by @btea)
- Components [form] throw non-validation error (#10255 by @holazz)
- Components [checkbox] circular reference (#10278 by @btea)
- Components [input-number]  increase and decrease error  (#10067 by @gjfei)
- Components [tooltip] remove deprecated api (#10264 by @chenxch)
- Components [cascader] consistent component height (#10214 by @holazz)
- Components [date-picker] monthRange mode switching month sync (#10292 by @chenxch)
- Components [upload] add uid for file handleStart (#9876 by @init-qy)
- Components [carousel] missing root ref (#10312 by @holazz)
- Utils [vnode] flattedChildren support subTree (#10298 by @chenxch)
- Components [tree-v2] add missing icon (#10340 by @init-qy)
- Components [tree-v2] default icon render test (#10342 by @init-qy)
- Docs [autocomplete] (#10426 by @jw-foss)
- Components [cascader] remove extra space in the search text (#10439 by @holazz)
- Docs [autocomplete] [affix] (#10443 by @jw-foss)
- Component [table]  can't select row children (#10221 by @faga295)

#### Refactors

- Components [calendar] (#10163 by @jw-foss)
- Components [carousel] (#10188 by @jw-foss)
- Components [carousel-item] (#10219 by @jw-foss)
- Components [tabs] simplify logic with hooks (#10224 by @holazz)
- Components [select] use util function (#10286 by @btea)
- Components [collapse] (#10289 by @jw-foss)
- Components [input] export instance type (#10368 by @chenxch)
- Docs tooltip plugin (#10440 by @tolking)

### 2.2.19

_2022-10-21_

#### Features

- Components [message-box] add append-to option (#10071 by @consultation-applio)

#### Bug fixes

- Components [input] missing native form attribute (#10093 by @HeftyKoo)
- Components [date-picker] fix readonly picker can be triggered (#9931 by @ntnyq)
- Components [table-v2] fix scroll to bottom (#9959 by @Tsong-LC)
- Component [table] row-key due to current-change trigger (#10060 by @Simon-He95)
- Components [autocomplete] optimize the select event type (#10105 by @tolking)
- Components [table] fix merge cell cannot show side shadow (#10095 by @tinyfind)
- Components [switch] clipped text (#10081 by @Simon-He95)
- Components [cascader] modelValue update problem (#10119 by @chenxch)
- Components [dialog] click allow focus out (#10160 by @Giwayume)

#### Refactors

- Components [backtop] (#10151 by @jw-foss)
- Components [button] (#10152 by @jw-foss)
- Components [calendar] (#10155 by @jw-foss)
- Components [calendar] (#10158 by @jw-foss)
- Components [tree-v2] switch to script-setup syntax (#10133 by @SnowingFox)

### 2.2.18

_2022-10-13_

#### Features

- Components [select] Simplified API (#9994 by @chenxch)
- Components [rate] add clearable attribute (#10031 by @HeftyKoo)
- Export type TableInstance TableColumnInstance (#10021 by @yangliguo7)

#### Bug fixes

- Components [color-picker] expose color (#9797 by @sxzz)
- Components [tabs] tabs order
- Components [checkbox] fix injection warn (#9813 by @holazz)
- Components [color-picker] correct event validation (#9814 by @holazz)
- Components [date-picker] remove extra prop in unit test (#9822 by @holazz)
- Components [popper] perfect role types (#9823 by @holazz)
- Components [select-v2] pressing the up key may cause errors (#9818 by @tolking)
- Components [select-v2] improve placeholder display (#9835 by @holazz)
- Components [affix] fix affix when scroll container is not window (#9660 by @LiZhequ)
- Components [calendar] show wrong weekday when set weekStart (#9824 by @init-qy)
- Components [input-number] correct input event behavior (#9850 by @holazz)
- Components [dialog] fix document click event invalid (#6711 by @gjfei)
- Theme-chalk [drawer] close btn align style (#9875 by @YunYouJun)
- Components [steps] step line style (#9865 by @gjfei)
- Components [tree] tree node click parameter (#9872 by @gjfei)
- Components [select] excute filter/remoteMethod when blur (#9587 by @Circkoooooo)
- Components [radio] fix type error (#9879 by @Tsong-LC)
- Theme-chalk [table] remove redundant border styles (#9839 by @tolking)
- Components [slider] fix type error (#9886 by @ryuhangyeong)
- Components [result] fix type error (#9887 by @ryuhangyeong)
- Components [backtop] fix a display bug (#9892 by @fwr220807)
- Components [progress] fix type error (#9894 by @ryuhangyeong)
- Components [time-select] fix type error (#9884 by @Tsong-LC)
- Components [pagination] fix type error (#9893 by @ryuhangyeong)
- Components [descriptions] fix type error (#9899 by @Tsong-LC)
- Components [tabs] correct the position of tab-bar when scaling (#9896 by @holazz)
- Locale added missing strings for Hebrew (#9871 by @yeya)
- Components [form] no margin when there is no label (#9940 by @iDestin)
- `withInstallDirective` type error (#9946 by @BTBMan)
- Components [select-v2] Test file code misspelled (#9978 by @wizardAEI)
- Components [select] click label only focus in form (#9798 by @chenxch)
- Components [carousel] improper active item (#8904 by @makedopamine)
- Components [input] memory leak (#9965 by @chenxch)
- Components [tabs] arrow icon centered horizontally (#9989 by @btea)
- Components [el-form] adjust the warn about label (#9889 by @btea)
- Components [select-v2] dynamic update popper (#9888 by @btea)
- Components [tabs] prevent scroll tab into view after focusing it (#9990 by @makedopamine)
- Components [table] wrong hover style in nested tables (#9932 by @init-qy)
- Build fix Window build locale (#9995 by @frank201113)
- Components [form-item] do not validate without `prop` property (#9993 by @btea)
- Components [dropdown] button group style missing (#10029 by @chenxch)
- Locale update estonian translations (#10004 by @vinksz)
- Components the label causes the click event to trigger twice (#9991 by @iDestin)
- Components [tooltip] update popper after content change (#10044 by @btea)
- Components [cascader] placeholder disappear when resetForm (#10036 by @Tsong-LC)
- Components [tabs] fix typo of PaneName (#10006 by @THUzxj)
- Components [time-picker] fix popup not showing (#9941 by @Giwayume)

#### Refactors

- Components [loading] use JSX in Unit test (#9772 by @Tsong-LC)
- Components [checkbox] refactor (#9594 by @MonsterPi13)
- Components [color-picker] switch to script-setup syntax (#9672 by @weidehai)
- Components switch to vue macros (#9306 by @sxzz)
- Components [loading] change `viewBox` default value (#9769 by @tolking)
- Components [tree-select] use JSX in Unit test (#9786 by @Tsong-LC)
- Components [upload] use JSX in Unit test (#9811 by @ryuhangyeong)
- Components [tooltip] switch to script-setup syntax (#9685 by @SnowingFox)
- Directives [repeat-click] refactor (#9853 by @sxzz)
- Components [calendar] use self-closing element (#9854 by @Tsong-LC)
- Components [popper] fix type error (#8529 by @holazz)
- Components [popper] use JSX in Unit test (#8462 by @holazz)
- Docs filter bot in contributors list (#9967 by @btea)
- Perf(components): [tabs] improve order performance
- Build optimize the conversion of attributes in documents (#9970 by @tolking)

### 2.2.17

_2022-09-16_

#### Features

- Components [select] add placement (#9621 by @chenxch)
- Components [select-v2] add placement (#9622 by @chenxch)
- Components [el-steps] support custom icon when status is error (#9603 by @z-ao)
- Components [message-box] allow pass function to `message` option (#9405 by @holazz)
- Components [select] enhanced suffix (#9619 by @chenxch)
- Components [select-v2][tree-v2] add virtual-list style dependency (#7129 by @muuyao)

#### Bug fixes

- Components [select-v2] support empty string value (#9609 by @chenxch)
- Components [tree-node-content] slot inherit styles (#9613 by @chenxch)
- Hooks [useLockscreen] close shake (#9610 by @chenxch)
- Components [button] type text deprecated (#9611 by @chenxch)
- Components [upload] always display upload trigger (#9607 by @holazz)
- ElPopover components dts (#9569 by @hackycy)
- Components [form-item] don't add required rule repeatedly (#9618 by @sxzz)
- Components [popper] default flip feature (#9584 by @YornQiu)
- Components [table] typed column's min-width not effect  (#9540 by @wiidede) (#9593)
- Components [tree-select] fix typo (#9635 by @Tsong-LC)
- Components [table] selection column don't create table placeholder (#9637 by @Tsong-LC)
- Theme-chalk [select] missing the is-small style (#9639 by @humorHan)
- Components [select] fix content overflow (#9633 by @Tsong-LC)
- Components [table] fix namespace (#9654 by @holazz)
- Components [tree] repeat trigger change event on the same node (#9645 by @holazz)
- Components [select] keep hover after clearing (#9644 by @chenxch)
- Components [loading] remove `el-loading-parent--relative` correctly (#9630 by @wiidede)
- Hooks [use-popper-container] fix namespace (#9655 by @holazz)
- Components [rate] fast move mouseLeave not triggered (#9608 by @chenxch)
- Components [select-v2] Tags content overflow wrap (#9677 by @Tsong-LC)
- Components [table] throw error when no matching column (#9682 by @qq282126990)
- Components [table-v2] cell and header-cell slots parmas (#9665 by @chenxch)
- Components [select-v2] fix placeholder style (#9707 by @holazz)
- Components [select-v2] respect `--el-component-size` (#9706 by @holazz)
- Components [time-picker] fix end-time can't be callback (#9669 by @MrCat33)
- Components [tree] setCurrentKey() type error (#9709 by @zhiyuanzmj)
- Components [cascader] fix large interval when multiple checkboxes (#9428 by @Tsong-LC)
- Components [select] fix select hover flicker (#9521 by @ChenAdien)
- Components [select] fix option-group get wrong visible (#9726 by @init-qy)
- Components [loading] fix invalid position sticky (#9720 by @Tsong-LC)
- Components [el-input] center in vertical direction (#9732 by @btea)
- Components [checkbox] fix only child element style border-radius (#9746 by @Tsong-LC)
- Components [popper] add missing id (#9632 by @plehnen)
- Components [cascader-panel] fix type error (#9753 by @Tsong-LC)
- [alert] description value in title's class (#9771 by @baiwusanyu-c)
- Components [virtual-list] fix type error (#9780 by @Tsong-LC)

#### Refactors

- Components [calendar] rename slot dateCell to date-cell (#9590 by @tolking)
- Components [tabs] improve types (#9561 by @tolking)
- Components [cascader] use JSX in Unit test (#9674 by @Tsong-LC)
- Build use pnpm `shell-emulator` instead of `cross-env` (#9693 by @sxzz)
- Components [cascader-panel] use JSX in Unit test (#9710 by @Tsong-LC)
- Components [image-viewer] use JSX in Unit test (#9717 by @holazz)
- Docs simplify imports (#9724 by @jack-pearson)
- Utils refactor `flattedChildren` (#9748 by @Tsong-LC)
- Perf(components): [message] prefer function slots (#9625 by @holazz)

### 2.2.16

_2022-09-02_

#### Features

- Components [image-viewer] add `setActiveItem` method (#9389 by @holazz)
- Components [dialog] add align center prop (#8947 by @Hfutsora)
- Components [input-number] add new prop `readonly` (#9545 by @holazz)
- Components [time-picker] add open and close handlers (#9572 by @jagoncalves14)
- Components [date-picker] add open and close handlers (#9571 by @jagoncalves14)
- Components el-tree.currentNodekey responsive. close #9576 (#9577 by @zhiyuanzmj)
- Components  CascaderProps expandTrigger enum to type (#9265 by @hcwhan)

#### Bug fixes

- Theme-chalk fix datepicker sidebar of panel is covered by footer (#9352 by @Duncanxyz)
- Components [date-picker] add flat polyfill (#9465 by @sxzz)
- Components [upload] onExceed is not called (#9145 by @makedopamine)
- Components [upload] `onPreview` not work when `picture` list type (#9448 by @holazz)
- Components [time-select] inherit disabled from form (#9242 by @Tsong-LC)
- Components [affix] expose `updateRoot` (#9159 by @CodeListener)
- Deps update dependency @floating-ui/dom to v1 (#9000 by @renovate[bot])
- Components [notification] custom icon not work (#9498 by @holazz)
- Utils fix `iconPropType` (#9506 by @holazz)
- Components [cascader] collapse-tags-tooltip drop first item (#9503 by @ryuhangyeong)
- Components [table-v2] fix style import (#9510 by @holazz)
- Components [dialog] bind `$attrs` (#9455 by @holazz)
- Components [date-picker] only `td` tags with content can be select (#9537 by @btea)
- Components [table] fix sort-change event behavior (#4640 by @cokemine)
- Components [slider] trigger change event correctly (#9553 by @holazz)
- Components [select-v2] emit('blur') does not carry parameter (#9547 by @sechi747)
- Components [table] el-table__placeholder class disappear(#9527 by @wiidede) (#9529)
- Components [table-v2] cell slots invalid (#9531 by @chenxch)
- Components [select] update finished calculating optionsInDropdown (#9475 by @Tsong-LC)
- Components [input] formatted values are out of sync (#9501 by @chenxch)
- Directives [repeat-click] Interval time is too short for single clicks (#9466 by @opuu)
- Components [tabs] nav offset error when use both number and string (#9222 by @tolking)
- Components [select] support dynamic value for option (#9220 by @buqiyuan)
- Issue #8278 (#8331 by @StephenKe)
- [el-date-picker] fix DatePicker render error (#7017 by @soandsoprogrammer)
- Components [form] reset field validate invalid (#7166 by @btea)
- Components [el-form] clear validate after reset fields
- Components [el-menu] compatible `menu.value` is null (#9566 by @xiaoxian521)
- Components [page-header] fix styles introduced on demand (#9564 by @LiZhequ)
- Components [pagination] add validate-event (#9563 by @tolking)
- Components [loading] prevent click through (#5822 by @weidehai)
- Components [tree-v2] updated when pass dynamic defaultCheckedKeys (#8228 by @webfansplz)
- Components [tree-select] `expand-on-click-node` not work (#8973 by @holazz)
- Components [table] toggleRowExpansion typing (#9512 by @wiidede)
- Components [tree] fix setCurrentKey setCurrentNode emit (#8881 by @gjfei)
- Components [select] fix typo (#9578 by @Tsong-LC)
- Components [transfer] child component don't validate (#9403 by @Tsong-LC)
- Components [date-picker] Component ElInput validateEvent pass true (#9402 by @Tsong-LC)
- Components [table-v2] header-cell slots invalid (#9585 by @btea)
- UseTree.ts修复tree-v2组件开启accordion模式后展开不了的问题 (#9591 by @qinhuangdaoooo)
- Style(components): [select, select-v2] adjust style (#9496 by @daonatural)
- Fix Table using load to click to expand will trigger multiple load callbacks (#9397 by @qq282126990)
- Perf(components): [table] export table defaults (#8393 by @xiaoxian521)
- Perf(hooks): [use-namespace] simplify code (#9298 by @holazz)

#### Refactors

- Components [tree] fix typo (#9477 by @Tsong-LC)
- Components [popper]redfine the prop role type (#9471 by @MonsterPi13)
- Components [popover] use JSX in Unit test (#8337 by @holazz)
- Utils refactor `iconPropType` (#9502 by @holazz)
- Utils refine `iconPropType` (#9515 by @holazz)
- Components [notification] use JSX in Unit test (#9530 by @holazz)
- Icon reduce getter access (#9360 by @zhangenming)
- Components [date-time-picker] use JSX in Unit test (#9520 by @Tsong-LC)

### 2.2.15

_2022-08-26_

#### Features

- Components [page-header] enhancement (#9215 by @jw-foss)
- Components [tree-v2] add `setExpendKeys` method (#9412 by @holazz)
- Components [form] add require-asterisk-position prop (#9433 by @btea)
- Components [menu] add `expand-close-icon`、`expand-open-icon`、`collapse-close-icon`、`collapse-open-icon`  props (#9444 by @xiaoxian521)

#### Bug fixes

- Components [message-box] fix Wrong type checking (#8399 by @MMmaXingXing)
- Components [tree-v2] `setExpandedKeys` instead of `setExpendKeys` (#9413 by @holazz)
- Components [el-menu] childNodes is null (#9408 by @xiaoxian521)
- Components [cascader] when multiple is true keyboard delete error (#9415 by @btea)
- Components [table] repetition labelCellName (#8967 by @gjfei)
- Components [message] the value of exposeProxy may be null (#9378 by @btea)
- Components [notification] closeAll invalid (#9417 by @chenxch)
- Components [opover] effect dark mode title color (#9445 by @chenxch)
- Components [space] complete the prop of space (#9380 by @MonsterPi13)
- Components [table] bodyWrapper resized calculate scrollbarStyle (#9149 by @Tsong-LC)
- Components [checkbox] label is object in group (#9271 by @chenxch)
- Theme-chalk [select] set `vertical-align` (#8800 by @holazz)
- Style(docs): change the example mask and overlay z-index (#9356 by @btea)
- Style(components): [rate] in safari has outline (#9396 by @chenxch)

#### Refactors

- Components [time-picker] use JSX in Unit test (#9134 by @Tsong-LC)
- Components [table] style of the footer-wrapper (#9084 by @tolking)

### 2.2.14

_2022-08-19_

#### Features

- Components [pagination] btns icon can be customized Vuecomponent (#9372 by @Tsong-LC)

#### Bug fixes

- Components use namespace (#9299 by @holazz)
- Deps update dependency eslint-plugin-markdown to v3 (#9139 by @renovate[bot])
- Deps update dependency @vueuse/core to v9 (#9138 by @renovate[bot])
- Deps update dependency eslint-plugin-unicorn to v43 (#8610 by @renovate[bot])
- Components [dialog] should emit open event after nextTick (#9209 by @buqiyuan)
- Theme-chalk [select] text overflow shows ellipsis (#9305 by @holazz)
- Components [docs] menu example code menu name error (#9355 by @feiyuOL)
- Components [tree] calc parentNode state after doCreateChildren (#9362 by @Tsong-LC)
- Components [switch] fix type error (#9171 by @Tsong-LC)
- Components [select] option value is object (#9287 by @chenxch)
- Components [cascader] placeholder disappeared after clear value (#9190 by @sechi747)
- Components [menu] resize event infinite invoke (#9342 by @holazz)
- Perf: RTLOffsetType compare (#9320 by @alwynou)
- Style(theme-chalk): fix input (#9178 by @daonatural)

#### Refactors

- Components [table] fix typo (#9338 by @Tsong-LC)

### 2.2.13

_2022-08-12_

#### Features

- Components [tree-v2] expose several helpful methods (#9156 by @plainheart)
- Components [popconfirm] add width prop (#9103 by @btea)

#### Bug fixes

- Components [table-body] keep row data reactive (#8592 by @jianjunyuu)
- Components [table] fix selection style (#9179 by @holazz)
- Locale update zh-tw translation (#8822 by @ChiahongHong)
- Components [select] injected form context may be undefined (#8860 by @holazz)
- Components [cascader] injected form context may be undefined (#8861 by @holazz)
- Components [color-picker] injected form context may be undefined (#8862 by @holazz)
- Components [time-picker] injected form context may be undefined (#8866 by @holazz)
- Components [checkbox] injected form context may be undefined (#8865 by @holazz)
- Element-plus dts entry (#8842 by @holazz)
- Timer-pick automatically skip disabled items (#8850 by @baiwusanyu-c)
- Components [table] the empty slot height error (#9226 by @tolking)
- Style(theme-chalk): fix message (#9143 by @kooriookami)

#### Refactors

- Components [tabs] use JSX in Unit test (#9050 by @Tsong-LC)
- Components [notification] switch to script-setup syntax (#9106 by @holazz)
- Utils drop `resize-event` (#8618 by @holazz)
- Hooks [use-lockscreen] change from padding to width (#9151 by @chenxch)

### 2.2.12

_2022-08-01_

#### Bug fixes

- Components [color-picker] element event binding error (#9061 by @btea)
- Components [menu] expand active menu item (#9069 by @holazz)
- Theme-chalk [message] long test support newline (#9074 by @Tsong-LC)
- Components [notification] correct offset value (#9080 by @holazz)
- Components [table] header scroll height error (#9063 by @tolking)
- Components [carousel] reset the timer (#8388 by @Tsong-LC)
- Hooks [use-namespace] exclude invalid CSS variables (#8905 by @tolking)
- Components [space] extract nested fragment children (#8992 by @HeftyKoo)
- Style(theme-chalk): message flexable (#9087 by @kooriookami)
- Style: vertical menu (#9104 by @xiaoxian521)

#### Refactors

- Components [switch] use JSX in Unit test (#9052 by @Tsong-LC)
- Components [time-select] use JSX in Unit test (#9101 by @Tsong-LC)

### 2.2.11

_2022-07-27_

#### Features

- Image Component add show event (#8920 by @wydingez)

#### Bug fixes

- Theme-chalk [table-v2] long text does not wrap (#8986 by @tolking)
- Components [checkbox] fix type error (#8937 by @Tsong-LC)
- Components [select] sync the tooltip component change (#8998 by @tolking)
- Build add target (#9018 by @sxzz)
- Menu horizontal mode menu drag causes browser crash (#9027 by @xiaoxian521)
- Components [carousel] computed interval prop (#9022 by @btea)
- Components [tooltip] related components are controlled (#9019 by @chenxch)
- Components [time-picker] fix clear for range mode (#8961 by @freedomlang)
- Hooks [use-lockscreen] fix  namespace (#8711 by @gjfei)
- Components [table] `clearFilter` not work (#8966 by @holazz)
- Theme-chalk [picker] adjust range picker input height (#8879 by @holazz)
- Components [dropdown] fix style (#9034 by @holazz)
- Components [table] fix maxHeight doesn't consider footer height (#9011 by @plainheart)
- Element-plus fix type error (#8982 by @holazz)
- Directives [mousewheel] fix type error (#8880 by @holazz)
- Theme-chalk [rate] fix vertical offset (#8959 by @Tsong-LC)
- Time-picker clicking on prefix does not open the panel (#9044 by @xiaoxian521)
- Components [slider] disabled slider button can still be focused (#9004 by @tolking)
- Components [cascader] pass forced param to syncMenuState (#8794 by @nieyuyao)
- Hooks [use-escape-keydown] fix memory leak (#8005 by @nhpupu) (#8060)

#### Refactors

- Components [checkbox] use JSX in Unit test (#9009 by @holazz)
- Utils drop off/on/once, use EventListener instead (#8960 by @Tsong-LC)
- Components [color-picker] use JSX in Unit test (#9033 by @Tsong-LC)

#### Other

- Style(components): [table] prettier format, no code changes (#8318 by @Tsong-LC)

### 2.2.10

_2022-07-22_

#### Features

- Components [tooltip] adjust controlled mode (#8762 by @chenxch)

#### Bug fixes

- Components [select-v2] add null check to filter method (#8537 by @lshunran) (#8538)
- Components [select] change disabled color (#8705 by @ryuhangyeong)
- Hooks [use-form-item] fix type error (#8726 by @holazz)
- Hooks [use-floating] fix type error (#8727 by @holazz)
- Components [step] className should be is-icon when using icon slot (#8706 by @buqiyuan)
- Components [input] fix type error (#8731 by @ryuhangyeong)
- Theme-chalk [slider] style error when vertical (#8734 by @tolking)
- Components [slider] not changed marker style (#8737 by @ryuhangyeong)
- Hooks [use-attrs] fix type error (#8558 by @holazz)
- Components [select] automatic-dropdown next focus invalid (#8398 by @chenxch)
- Components [cascader] fix namespace (#8719 by @gjfei)
- Hooks [use-locale] fix type error (#8733 by @holazz)
- Components [tree] allow and node drop-type (#8681 by @chenxch)
- Components [form-item] clearValidate invalid (#8643 by @chenxch)
- Components [focus-trap] maximum call stack size exceeded error (#8218 by @webfansplz)
- Utils fix type error (#8779 by @holazz)
- Components [select] fix select tooltip zIndex (#8768 by @gjfei)
- Components [timeline] fix type error (#8829 by @holazz)
- Components [message] set appentTo value (#8730 by @btea)
- Directives [click-outside] fix type error (#8782 by @holazz)
- Locale update ko translation (#8839 by @ryuhangyeong)
- Components [tabs] disabled pane can still be focused (#8600 by @tolking)
- Test-utils fix type error (#8780 by @holazz)
- Components [virtual-list] throw non-corresponding error message (#8835 by @makedopamine)
- Components [table] spanMethod check return type (#8844 by @chenxch)
- Docs fixed the link icon would be duplicated when switching pages (#8103 by @SuperRay3)
- Components [message] fix message grouping styles (#8809 by @gjfei)
- Components [upload] one-way cannot add attachments (#8877 by @chenxch)
- Docs fix table v2 filter demo style error (#8847 by @KimYangOfCat)
- Components [rate] fix type error (#8896 by @Tsong-LC)
- [select] label can be displayed correctly after selecting operation (#8589 by @baiwusanyu-c)
- Components [dialog] fix type error (#8898 by @Tsong-LC)
- Components [date-picker] prevent duplicate pick date (#8588 by @holazz)
- Directives [repeat-click] click handler is fired correctly (#8828 by @holazz)
- Components [menu] resize when dynamic data in horizontal mode (#8616 by @holazz)

#### Refactors

- Components [dialog] use JSX in Unit test (#8270 by @Tsong-LC)
- Components [el-table] using flex to refactor table (#8690 by @msidolphin)
- Components [popconfirm] remove redundant function (#8786 by @btea)
- Components [container] use JSX in Unit test (#8778 by @gjfei)
- Directives [repeat-click] use JSX in Unit test (#8785 by @holazz)
- Components [pagination] use JSX in Unit test (#8269 by @Tsong-LC)
- Components [timeline] use JSX in Unit test (#8339 by @ryuhangyeong)
- Components [transfer] use JSX in Unit test (#8274 by @Tsong-LC)
- Components [color-picker] use useNamespace (#8722 by @Tsong-LC)
- Directives [click-outside] use JSX in Unit test (#8783 by @holazz)
- Directives [trap-focus] refactor (#8818 by @holazz)
- Directives [trap-focus] use JSX in Unit test (#8819 by @holazz)
- Components [descriptions] switch to script-setup syntax (#8349 by @ryuhangyeong)
- Directives [repeat-click] use `addEventListener` (#8784 by @holazz)
- Directives drop resize (#8617 by @holazz)
- Perf(components): [slider] emit UPDATE_MODEL_EVENT only if value changes (#8603 by @buqiyuan)
- Style(theme-chalk): message-box support small screen (#8856 by @kooriookami)
- Perf(components): [table] improve find the closest ancestor (#8621 by @holazz)
- Style(theme-chalk): message support small screen (#8957 by @kooriookami)

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
