## Changelog

### 1.0.2-beta.31

*2021-01-31*

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

*2021-01-25*

#### Bug fixes

- Fix dropdown/select/picker popper position error when has line-height (#1349)
- Fix DatePicker modify the judgment logic of startDate and endDate (#1322)
- Fix full bundle export bug (#1350)

### 1.0.2-beta.29

*2021-01-25*

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

*2021-01-20*

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

*2021-01-15*

#### Bug fixes

- Fix overlay overflowing issue (#1282)
- Fix loading directive cannot dispatch for the second time (#1281)
- Fix Date picker bind attr to panel error (#1277)

### 1.0.1-beta.26

*2021-01-14*

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

*2021-01-11*

#### Bug fixes

- Fix time picker scroll bug (#1227)
- Fix tree node don't update after push new node into parent (#1231)
- Fix loading error show when parent's display is not block (#1250)
- Fix input-number behavior error (#1252)
- Fix select emptyText error show (#1213)
- Fix select to replace symbols to strings to avoid individual importing symbol bug (#1224)

### 1.0.1-beta.23

*2021-01-07*

#### New feature

- New component `ElEmpty` (#1210)

#### Bug fixes

- Fix dropdown menu stop-popper-mouse-event (#1219)
- Fix menu item group not working (#1217)

#### Chore updates

- Bumping dep versions (#1214)

### 1.0.1-beta.22

*2021-01-06*

#### Bug fixes

- Fix menu item not expanding correctly (#1212)
- Fix popover hijacking mouse event bug (#1201)

#### Chore updates

- Update contain doc style (#1204)

### 1.0.1-beta.21

*2021-01-05*

#### Bug fixes

- Separate ImageViewer component (#1199)
- Fix YearPicker disabledDate bug (#1193)
- Fix Dialog render bug (#1144)
- Fix Tree deep watch data (#1188)
- Fix Popper transition lost bug (#1190)
- Fix Popover clickoutside not working bug (#1171)
- Fix Textarea line-height style bug (#1181)

### 1.0.1-beta.19

*2021-01-02*

#### Bug fixes

- Fix WeekPicker should return the first day of the week (#1169)
- Fix Dialog close event (#1164)
- Fix Select prop type missing array (#1168)

### 1.0.1-beta.18

*2020-12-31*

#### Bug fixes

- Fix timepicker keyevent bug (#1151)
- Bumping vue version to 3.0.5 (#1159)
- Fix table when the data changes, the layout is not updated bug (#1059)
- Fix Module @vue/test-utils has no exported members bug (#1139)
- Fix scrollbar mouseup event bug (#1123)
- Fix select props modelValue type error (#1158)

### 1.0.1-beta.15

*2020-12-27*

#### Bug fixes

- Fix cascader panel bug (#1112)
- Fix date-picker clear bug (#1114)
- Update build logic (#1118)
- Fix notification style bug (#1122)

### 1.0.1-beta.14

*2020-12-24*

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

*2020-12-21*

#### New features

- Add Skeleton compontent (#953)

#### Bug fixes

- Fix input add placeholder (#1052)
- Fix date-picker bind $attrs issue (#1069)
- Fix popper use EmitType to replace string (#1053)
- Fix table border style (#1056)

### 1.0.1-beta.10

*2020-12-18*

#### New features

- Add Space Component (#1002)

#### Bug fixes

- Fix select content overflow in multiple select (#967)
- Fix table global config (#999)

### 1.0.1-beta.9

*2020-12-16*

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

*2020-12-12*

#### Bug fixes

- Fix table style bug (#969)
- Fix some components import type (#959)
- Fix popover with pure should has border (#954)
- Fix export locale (#950)
- Fix menu open method error (#952)
- Fix collapse not emitting change (#949)
- Fix dialog bouncing (#955)

### 1.0.1-beta.7

*2020-12-10*

#### Bug fixes

- Fix select multi mode rendering (#941)
- Fix notification left empty divs (#913)
- Fix upload bug (#927)
- Add input placeholder type (#814)
- Fix cascader-panel checked nodes not update when options change (#934)
- Update col layout style (#875)
- Fix drawer layout issue (#924)

### 1.0.1-beta.6

*2020-12-09*

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

*2020-12-07*

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

*2020-12-05*

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

*2020-12-03*

#### Bug fixes

- Fix nested menu ref unwrap value problem (#775)
- Fix alert style errors when no description (#782)
- Fix dialog show-close is invalid (#773)
- Destructing import from lodash (#788)
- Fix popper transition with 'el-zoom-in-top' (#785)

### 1.0.1-beta.2

*2020-12-02*

#### Bug fixes

- Fix navigation menu potential bug (#768)

### 1.0.1-beta.1

*2020-12-01*

#### Bug fixes

- Fix router behavior (#745)
- Add esm bundle (#577)
- Fix date picker referencing issue (#757)
- Fix pagination current-change event not emitting (#756)
- Fix `bodyStyle` bug (#754)
