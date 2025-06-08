---
title: Table
lang: en-US
---

# Table

Display multiple data with similar format. You can sort, filter, compare your data in a table.

## Basic table

Basic table is just for data display.

:::demo After setting attribute `data` of `el-table` with an object array, you can use `prop` (corresponding to a key of the object in `data` array) in `el-table-column` to insert data to table columns, and set the attribute `label` to define the column name. You can also use the attribute `width` to define the width of columns.

table/basic

:::

## Striped Table

Striped table makes it easier to distinguish different rows.

:::demo Attribute `stripe` accepts a `Boolean`. If `true`, table will be striped.

table/striped

:::

## Table with border

:::demo By default, Table has no vertical border. If you need it, you can set attribute `border` to `true`.

table/with-border

:::

## Table with status

You can highlight your table content to distinguish between "success, information, warning, danger" and other states.

:::demo Use `row-class-name` in `el-table` to add custom classes to a certain row. Then you can style it with custom classes.

table/with-status

:::

## Table with show overflow tooltip

When the content is too long, it will break into multiple lines, you can use `show-overflow-tooltip` to keep it in one line.

:::demo Attribute `show-overflow-tooltip`, which accepts a `Boolean` value. When set `true`, the extra content will show in tooltip when hover on the cell.

table/show-overflow-tooltip

:::

## Table with fixed header

When there are too many rows, you can use a fixed header.

:::demo By setting the attribute `height` of `el-table`, you can fix the table header without any other codes.

table/fixed-header

:::

## Table with fixed column

When there are too many columns, you can fix some of them.

:::demo Attribute `fixed` is used in `el-table-column`, it accepts a `Boolean`. If `true`, the column will be fixed at left. It also accepts two string literals: 'left' and 'right', both indicating that the column will be fixed at corresponding direction.

table/fixed-column

:::

## Table with fixed columns and header

When you have huge chunks of data to put in a table, you can fix the header and columns at the same time.

:::demo Fix columns and header at the same time by combining the above two examples.

table/fixed-column-and-header

:::

## Fluid-height Table with fixed header (and columns)

When the the data is dynamically changed, you might want the table to have a maximum height rather than a fixed height and to show the scroll bar if needed.

:::demo By setting the attribute `max-height` of `el-table`, you can fix the table header. The table body scrolls only if the height of the rows exceeds the max height value.

table/fixed-header-with-fluid-header

:::

## Grouping table head

When the data structure is complex, you can use group header to show the data hierarchy.

:::demo Only need to place el-table-column inside a el-table-column, you can achieve group header.

table/grouping-header

:::

## Table with fixed group header

fixed group head is supported

:::demo The attribute `fixed` of the group header is determined by the outermost `el-table-column`

table/fixed-column-and-group-header

:::

## Single select

Single row selection is supported.

:::demo Table supports single row selection. You can activate it by adding the `highlight-current-row` attribute. An event called `current-change` will be triggered when row selection changes, and its parameters are the rows after and before this change: `currentRow` and `oldCurrentRow`. If you need to display row index, you can add a new `el-table-column` with its `type` attribute assigned to `index`, and you will see the index starting from 1.

table/single-select

:::

## Multiple select

You can also select multiple rows.

After ^(2.8.3), `toggleRowSelection` supports the third parameter `ignoreSelectable` to determine whether to ignore the selectable attribute.

:::demo Activating multiple selection is easy: simply add an `el-table-column` with its `type` set to `selection`.

table/multi-select

:::

## Sorting

Sort the data to find or compare data quickly.

:::demo Set attribute `sortable` in a certain column to sort the data based on this column. It accepts `Boolean` with a default value `false`. Set table attribute `default-sort` to determine default sort column and order. To apply your own sorting rules, use `sort-method` or `sort-by`. If you need remote sorting from backend, set `sortable` to `custom`, and listen to the `sort-change` event on Table. In the event handler, you have access to the sorting column and sorting order so that you can fetch sorted table data from API. In this example we use another attribute named `formatter` to format the value of certain columns. It accepts a function which has two parameters: `row` and `column`. You can handle it according to your own needs.

table/sort

:::

## Filter

Filter the table to find desired data.

:::demo Set attribute `filters` and `filter-method` in `el-table-column` makes this column filterable. `filters` is an array, and `filter-method` is a function deciding which rows are displayed. It has three parameters: `value`, `row` and `column`.

table/filter

:::

## Custom column template

Customize table column so it can be integrated with other components.

:::demo You have access to the following data: row, column, $index and store (state management of Table) by [slot](https://v3.vuejs.org/guide/component-slots.html).

table/custom-column

:::

## Table with custom header

Customize table header so it can be even more customized.

:::demo You can customize how the header looks by header [slots](https://v3.vuejs.org/guide/component-slots.html).

table/custom-header

:::

## Expandable row

When the row content is too long and you do not want to display the horizontal scroll bar, you can use the expandable row feature.

After ^(2.9.7), `preserve-expanded-content` is added to control whether to preserve expanded row content in DOM when collapsed.

:::demo Activate expandable row by adding type="expand" and slot. The template for el-table-column will be rendered as the contents of the expanded row, and you can access the same attributes as when you are using `slot` in custom column templates.

table/expandable-row

:::

## Tree data and lazy mode

:::demo You can display tree structure data. When row contains the `children` field, it is treated as nested data. For rendering nested data, the prop `row-key` is required. Also, child row data can be loaded asynchronously. Set `lazy` property of Table to true and the function `load`. Specify `hasChildren` attribute in row to determine which row contains children. Both `children` and `hasChildren` can be configured via `tree-props`.

table/tree-and-lazy

:::

## Selectable tree ^(2.8.0)

:::demo When `treeProps.checkStrictly` is true, the selection state of parent and child nodes is no longer associated, that is, when the parent node is selected, its child nodes will not be selected; when `treeProps.checkStrictly` is false, the selection state of parent and child nodes will be associated with the selection state of child nodes, that is, when the parent node is selected, all its child nodes will be selected.

table/check-strictly

:::

## Summary row

For table of numbers, you can add an extra row at the table footer displaying each column's sum.

:::demo You can add the summary row by setting `show-summary` to `true`. By default, for the summary row, the first column does not sum anything up but always displays 'Sum' (you can configure the displayed text using `sum-text`), while other columns sum every number in that column up and display them. You can of course define your own sum behaviour. To do so, pass a method to `summary-method`, which returns an array, and each element of the returned array will be displayed in the columns of the summary row, It can be a VNode or string. The second table of this example is a detailed demo.

table/summary

:::

## Rowspan and colspan

Configuring rowspan and colspan allows you to merge cells

:::demo Use the `span-method` attribute to configure rowspan and colspan. It accepts a method, and passes an object to that method including current row `row`, current column `column`, current row index `rowIndex` and current column index `columnIndex`. The method should return an array of two numbers, the first number being `rowspan` and second `colspan`. It can also return an object with `rowspan` and `colspan` props.

table/rowspan-and-colspan

:::

## Custom index

You can customize row index in `type=index` columns.

:::demo To customize row indices, use `index` attribute on `el-table-column` with `type=index`. If it is assigned to a number, all indices will have an offset of that number. It also accepts a method with each index (starting from `0`) as parameter, and the returned value will be displayed as index.

table/custom-index

:::

## Table Layout

The [table-layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) property sets the algorithm used to lay out table cells, rows, and columns.

:::demo

table/table-layout

:::

## Tooltip formatter ^(2.9.4)

You can use `tooltip-formatter` to customize the tooltip content.

:::demo

table/tooltip-formatter

:::

## Table API

### Table Attributes

| Name                               | Description                                                                                                                                                                                                                                                                | Type                                                                                                                                                                 | Default                                                                                                                 |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| data                               | table data                                                                                                                                                                                                                                                                 | ^[array]`any[]`                                                                                                                                                      | []                                                                                                                      |
| height                             | table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles                                  | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| max-height                         | table's max-height. The legal value is a number or the height in px                                                                                                                                                                                                        | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| stripe                             | whether Table is striped                                                                                                                                                                                                                                                   | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| border                             | whether Table has vertical border                                                                                                                                                                                                                                          | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| size                               | size of Table                                                                                                                                                                                                                                                              | ^[enum]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                       | —                                                                                                                       |
| fit                                | whether width of column automatically fits its container                                                                                                                                                                                                                   | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| show-header                        | whether Table header is visible                                                                                                                                                                                                                                            | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| highlight-current-row              | whether current row is highlighted                                                                                                                                                                                                                                         | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| current-row-key                    | key of current row, a set only prop                                                                                                                                                                                                                                        | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| row-class-name                     | function that returns custom class names for a row, or a string assigning class names for every row                                                                                                                                                                        | ^[Function]`(data: { row: any, rowIndex: number }) => string` / ^[string]                                                                                            | —                                                                                                                       |
| row-style                          | function that returns custom style for a row, or an object assigning custom style for every row                                                                                                                                                                            | ^[Function]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                                                      | —                                                                                                                       |
| cell-class-name                    | function that returns custom class names for a cell, or a string assigning class names for every cell                                                                                                                                                                      | ^[Function]`(data: { row: any, column: any, rowIndex: number, columnIndex: number }) => string` / ^[string]                                                          | —                                                                                                                       |
| cell-style                         | function that returns custom style for a cell, or an object assigning custom style for every cell                                                                                                                                                                          | ^[Function]`(data: { row: any, column: any, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                    | —                                                                                                                       |
| header-row-class-name              | function that returns custom class names for a row in table header, or a string assigning class names for every row in table header                                                                                                                                        | ^[Function]`(data: { row: any, rowIndex: number }) => string` / ^[string]                                                                                            | —                                                                                                                       |
| header-row-style                   | function that returns custom style for a row in table header, or an object assigning custom style for every row in table header                                                                                                                                            | ^[Function]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                                                      | —                                                                                                                       |
| header-cell-class-name             | function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header                                                                                                                                      | ^[Function]`(data: { row: any, column: any, rowIndex: number, columnIndex: number }) => string` / ^[string]                                                          | —                                                                                                                       |
| header-cell-style                  | function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header                                                                                                                                          | ^[Function]`(data: { row: any, column: any, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                    | —                                                                                                                       |
| row-key                            | key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used | ^[function]`(row: any) => string` / ^[string]                                                                                                                        | —                                                                                                                       |
| empty-text                         | displayed text when data is empty. You can customize this area with `#empty`                                                                                                                                                                                               | ^[string]                                                                                                                                                            | No Data                                                                                                                 |
| default-expand-all                 | whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data                                                                                                                                                        | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| expand-row-keys                    | set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop                                                                                                                                                     | ^[array]`string[]`                                                                                                                                                   | —                                                                                                                       |
| default-sort                       | set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order                                                                                                                              | ^[object]`Sort`                                                                                                                                                      | if `prop` is set, and `order` is not set, then `order` is default to ascending                                          |
| tooltip-effect                     | the `effect` of the overflow tooltip                                                                                                                                                                                                                                       | ^[enum]`'dark' \| 'light'`                                                                                                                                           | dark                                                                                                                    |
| tooltip-options ^(2.2.28)          | the options for the overflow tooltip, [see the following tooltip component](tooltip.html#attributes)                                                                                                                                                                       | ^[object]`Pick<ElTooltipProps, 'effect' \| 'enterable' \| 'hideAfter' \| 'offset' \| 'placement' \| 'popperClass' \| 'popperOptions' \| 'showAfter' \| 'showArrow'>` | ^[object]`{ enterable: true, placement: 'top', showArrow: true, hideAfter: 200, popperOptions: { strategy: 'fixed' } }` |
| append-filter-panel-to ^(2.8.4)    | which element the filter panels appends to                                                                                                                                                                                                                                 | ^[string]                                                                                                                                                            | —                                                                                                                       |
| show-summary                       | whether to display a summary row                                                                                                                                                                                                                                           | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| sum-text                           | displayed text for the first column of summary row                                                                                                                                                                                                                         | ^[string]                                                                                                                                                            | Sum                                                                                                                     |
| summary-method                     | custom summary method                                                                                                                                                                                                                                                      | ^[Function]`(data: { columns: any[], data: any[] }) => (VNode \| string)[]`                                                                                          | —                                                                                                                       |
| span-method                        | method that returns rowspan and colspan                                                                                                                                                                                                                                    | ^[Function]`(data: { row: any, column: any, rowIndex: number, columnIndex: number }) => number[] \| { rowspan: number, colspan: number } \| void`                    | —                                                                                                                       |
| select-on-indeterminate            | controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected                                                                                                        | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| indent                             | horizontal indentation of tree data                                                                                                                                                                                                                                        | ^[number]                                                                                                                                                            | 16                                                                                                                      |
| lazy                               | whether to lazy loading data                                                                                                                                                                                                                                               | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| load                               | method for loading child row data, only works when `lazy` is true                                                                                                                                                                                                          | ^[Function]`(row: any, treeNode: TreeNode, resolve: (data: any[]) => void) => void`                                                                                  | —                                                                                                                       |
| tree-props                         | configuration for rendering nested data                                                                                                                                                                                                                                    | ^[object]`{ hasChildren?: string, children?: string, checkStrictly?: boolean }`                                                                                      | ^[object]`{ hasChildren: 'hasChildren', children: 'children', checkStrictly: false }`                                   |
| table-layout                       | sets the algorithm used to lay out table cells, rows, and columns                                                                                                                                                                                                          | ^[enum]`'fixed' \| 'auto'`                                                                                                                                           | fixed                                                                                                                   |
| scrollbar-always-on                | always show scrollbar                                                                                                                                                                                                                                                      | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| show-overflow-tooltip              | whether to hide extra content and show them in a tooltip when hovering on the cell.It will affect all the table columns, refer to table [tooltip-options](#table-attributes)                                                                                               | ^[boolean] / [`object`](#table-attributes) ^(2.3.7)                                                                                                                  | —                                                                                                                       |
| flexible ^(2.2.1)                  | ensure main axis minimum-size doesn't follow the content                                                                                                                                                                                                                   | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| scrollbar-tabindex ^(2.8.3)        | body scrollbar's wrap container tabindex                                                                                                                                                                                                                                   | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| allow-drag-last-column ^(2.9.2)    | whether to allow drag the last column                                                                                                                                                                                                                                      | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| tooltip-formatter ^(2.9.4)         | customize tooltip content when using `show-overflow-tooltip`                                                                                                                                                                                                               | ^[Function]`(data: { row: any, column: any, cellValue: any }) => VNode \| string`                                                                                    | —                                                                                                                       |
| preserve-expanded-content ^(2.9.7) | whether to preserve expanded row content in DOM when collapsed                                                                                                                                                                                                             | ^[boolean]                                                                                                                                                           | false                                                                                                                   |

### Table Events

| Name               | Description                                                                                                                                  | Type                                                                                         |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| select             | triggers when user clicks the checkbox in a row                                                                                              | ^[Function]`<T = any>(selection: T[], row: T) => void`                                       |
| select-all         | triggers when user clicks the checkbox in table header                                                                                       | ^[Function]`(selection: any[]) => void`                                                      |
| selection-change   | triggers when selection changes                                                                                                              | ^[Function]`(newSelection: any[]) => void`                                                   |
| cell-mouse-enter   | triggers when hovering into a cell                                                                                                           | ^[Function]`(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void`       |
| cell-mouse-leave   | triggers when hovering out of a cell                                                                                                         | ^[Function]`(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void`       |
| cell-click         | triggers when clicking a cell                                                                                                                | ^[Function]`(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void`       |
| cell-dblclick      | triggers when double clicking a cell                                                                                                         | ^[Function]`(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void`       |
| cell-contextmenu   | triggers when user right clicks on a cell                                                                                                    | ^[Function]`(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void`       |
| row-click          | triggers when clicking a row                                                                                                                 | ^[Function]`(row: any, column: any, event: Event) => void`                                   |
| row-contextmenu    | triggers when user right clicks on a row                                                                                                     | ^[Function]`(row: any, column: any, event: Event) => void`                                   |
| row-dblclick       | triggers when double clicking a row                                                                                                          | ^[Function]`(row: any, column: any, event: Event) => void`                                   |
| header-click       | triggers when clicking a column header                                                                                                       | ^[Function]`(column: any, event: Event) => void`                                             |
| header-contextmenu | triggers when user right clicks on a column header                                                                                           | ^[Function]`(column: any, event: Event) => void`                                             |
| sort-change        | triggers when Table's sorting changes                                                                                                        | ^[Function]`(data: {column: any, prop: string, order: any }) => void`                        |
| filter-change      | column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered             | ^[Function]`(newFilters: any) => void`                                                       |
| current-change     | triggers when current row changes                                                                                                            | ^[Function]`(currentRow: any, oldCurrentRow: any) => void`                                   |
| header-dragend     | triggers after changing a column's width by dragging the column header's border                                                              | ^[Function]`(newWidth: number, oldWidth: number, column: any, event: MouseEvent) => void`    |
| expand-change      | triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded) | ^[Function]`(row: any, expandedRows: any[]) => void & (row: any, expanded: boolean) => void` |
| scroll ^(2.9.0)    | Invoked after scrolled                                                                                                                       | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void`                             |

### Table Slots

| Name    | Description                                                                                                                                                                                   | Subtags      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| default | customize default content                                                                                                                                                                     | Table-column |
| append  | Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one. | —            |
| empty   | you can customize content when data is empty.                                                                                                                                                 | —            |

### Table Exposes

| Method                     | Description                                                                                                                                                       | Type                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| clearSelection             | used in multiple selection Table, clear user selection                                                                                                            | ^[Function]`() => void`                                                      |
| getSelectionRows           | returns the currently selected rows                                                                                                                               | ^[Function]`() => any[]`                                                     |
| toggleRowSelection         | used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected                    | ^[Function]`(row: any, selected?: boolean, ignoreSelectable = true) => void` |
| toggleAllSelection         | used in multiple selection Table, toggle select all and deselect all                                                                                              | ^[Function]`() => void`                                                      |
| toggleRowExpansion         | used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed | ^[Function]`(row: any, expanded?: boolean) => void`                          |
| setCurrentRow              | used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection                                              | ^[Function]`(row: any) => void`                                              |
| clearSort                  | clear sorting, restore data to the original order                                                                                                                 | ^[Function]`() => void`                                                      |
| clearFilter                | clear filters of the columns whose `columnKey` are passed in. If no params, clear all filters                                                                     | ^[Function]`(columnKeys?: string[]) => void`                                 |
| doLayout                   | refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout                                       | ^[Function]`() => void`                                                      |
| sort                       | sort Table manually. Property `prop` is used to set sort column, property `order` is used to set sort order                                                       | ^[Function]`(prop: string, order: string) => void`                           |
| scrollTo                   | scrolls to a particular set of coordinates                                                                                                                        | ^[Function]`(options: number \| ScrollToOptions, yCoord?: number) => void`   |
| setScrollTop               | set vertical scroll position                                                                                                                                      | ^[Function]`(top?: number) => void`                                          |
| setScrollLeft              | set horizontal scroll position                                                                                                                                    | ^[Function]`(left?: number) => void`                                         |
| columns ^(2.7.6)           | Get table columns context.                                                                                                                                        | ^[array]`TableColumnCtx<T>[]`                                                |
| updateKeyChildren ^(2.8.4) | used in lazy Table, must set `rowKey`, update key children                                                                                                        | ^[Function]`(key: string, data: T[]) => void`                                |

## Table-column API

### Table-column Attributes

| Name                       | Description                                                                                                                                                                                                        | Type                                                                                                                                                                        | Default                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| type                       | type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon | ^[enum]`'default' \| 'selection' \| 'index' \| 'expand'`                                                                                                                    | default                           |
| index                      | customize indices for each row, works on columns with `type=index`                                                                                                                                                 | ^[number] / ^[Function]`(index: number) => number`                                                                                                                          | —                                 |
| label                      | column label                                                                                                                                                                                                       | ^[string]                                                                                                                                                                   | —                                 |
| column-key                 | column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered                                                                                       | ^[string]                                                                                                                                                                   | —                                 |
| prop                       | field name. You can also use its alias: `property`                                                                                                                                                                 | ^[string]                                                                                                                                                                   | —                                 |
| width                      | column width                                                                                                                                                                                                       | ^[string] / ^[number]                                                                                                                                                       | ''                                |
| min-width                  | column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion                                                                         | ^[string] / ^[number]                                                                                                                                                       | ''                                |
| fixed                      | whether column is fixed at left / right. Will be fixed at left if `true`                                                                                                                                           | ^[enum]`'left' \| 'right'` / ^[boolean]                                                                                                                                     | false                             |
| render-header              | render function for table header of this column                                                                                                                                                                    | ^[Function]`(data: { column: any, $index: number }) => void`                                                                                                                | —                                 |
| sortable                   | whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table                                                                   | ^[boolean] / ^[string]                                                                                                                                                      | false                             |
| sort-method                | sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort                                                                                                                      | ^[Function]`<T = any>(a: T, b: T) => number`                                                                                                                                | —                                 |
| sort-by                    | specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal       | ^[Function]`(row: any, index: number) => string` / ^[string] / ^[object]`string[]`                                                                                          | —                                 |
| sort-orders                | the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array    | ^[object]`('ascending' \| 'descending' \| null)[]`                                                                                                                          | ['ascending', 'descending', null] |
| resizable                  | whether column width can be resized, works when `border` of `el-table` is `true`                                                                                                                                   | ^[boolean]                                                                                                                                                                  | true                              |
| formatter                  | function that formats cell content                                                                                                                                                                                 | ^[function]`(row: any, column: any, cellValue: any, index: number) => VNode \| string`                                                                                      | —                                 |
| show-overflow-tooltip      | whether to hide extra content and show them in a tooltip when hovering on the cell                                                                                                                                 | ^[boolean] / [`object`](#table-attributes) ^(2.2.28)                                                                                                                        | undefined                         |
| align                      | alignment                                                                                                                                                                                                          | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| header-align               | alignment of the table header. If omitted, the value of the above `align` attribute will be applied                                                                                                                | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| class-name                 | class name of cells in the column                                                                                                                                                                                  | ^[string]                                                                                                                                                                   | —                                 |
| label-class-name           | class name of the label of this column                                                                                                                                                                             | ^[string]                                                                                                                                                                   | —                                 |
| selectable                 | function that determines if a certain row can be selected, works when `type` is 'selection'                                                                                                                        | ^[Function]`(row: any, index: number) => boolean`                                                                                                                           | —                                 |
| reserve-selection          | whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work                                                                             | ^[boolean]                                                                                                                                                                  | false                             |
| filters                    | an array of data filtering options. For each element in this array, `text` and `value` are required                                                                                                                | ^[array]`Array<{text: string, value: string}>`                                                                                                                              | —                                 |
| filter-placement           | placement for the filter dropdown                                                                                                                                                                                  | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | —                                 |
| filter-class-name ^(2.5.0) | className for the filter dropdown                                                                                                                                                                                  | ^[string]                                                                                                                                                                   | —                                 |
| filter-multiple            | whether data filtering supports multiple options                                                                                                                                                                   | ^[boolean]                                                                                                                                                                  | true                              |
| filter-method              | data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`                                               | ^[function]`(value: any, row: any, column: any) => void`                                                                                                                    | —                                 |
| filtered-value             | filter value for selected data, might be useful when table header is rendered with `render-header`                                                                                                                 | ^[object]`string[]`                                                                                                                                                         | —                                 |
| tooltip-formatter ^(2.9.4) | customize tooltip content when using `show-overflow-tooltip`                                                                                                                                                       | ^[Function]`(data: { row: any, column: any, cellValue: any }) => VNode \| string`                                                                                           | —                                 |

### Table-column Slots

| Name                 | Description                       | Type                                                 |
|----------------------|-----------------------------------| ---------------------------------------------------- |
| default              | Custom content for table columns  | ^[object]`{ row: any, column: any, $index: number }` |
| header               | Custom content for table header   | ^[object]`{ column: any, $index: number }`           |
| filter-icon ^(2.7.8) | Custom content for filter icon    | ^[object]`{ filterOpened: boolean }`                 |
| expand ^(2.10.0)     | Custom content for expand columns | ^[object]`{ expanded: boolean }`                     |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
interface Sort {
  prop: string
  order: 'ascending' | 'descending'
  init?: any
  silent?: any
}

interface TreeNode {
  expanded?: boolean
  loading?: boolean
  noLazyChildren?: boolean
  indent?: number
  level?: number
  display?: boolean
}
```

</details>

## FAQ

#### How to use image preview in the table?

```vue{4}
<template>
  <el-table-column width="180">
    <template #default="scope">
      <el-image preview-teleported :preview-src-list="srcList" />
    </template>
  </el-table-column>
</template>
```

#### Why column is not rendered when use DOM templates?

Typical issue: [#5046](https://github.com/element-plus/element-plus/issues/5046) [#5862](https://github.com/element-plus/element-plus/issues/5862) [#6919](https://github.com/element-plus/element-plus/issues/6919)

This is because the HTML spec only allows a few specific elements to omit closing tags, the most common being `<input>` and `<img>`. For all other elements, if you omit the closing tag, the native HTML parser will think you never terminated the opening tag

For more details please refer to [vue docs](https://vuejs.org/guide/essentials/component-basics.html#self-closing-tags)
