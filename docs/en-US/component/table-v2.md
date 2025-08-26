---
title: Virtualized Table
lang: en-US
---

# Virtualized Table ^(beta)

Along with evolutionary web development, table component has always been the most popular component in our web apps especially for dashboards, data analysis. For [Table V1](./table.md), with even just 1000 records of data, it can be very annoying when using it, because of the poor performance.

With Virtualized Table, you can render massive chunks of data in a blink of an eye.

:::tip

This component is **still under testing**, use at your own risk. If you find any bugs or issues, please report them at [GitHub](https://github.com/element-plus/element-plus/issues) for us to fix. Also there were some APIs which are not mentioned in this documentation, some of them were not
fully developed yet, which is why they are not mentioned here.

**Even though** Virtualized Table is efficient, when the data load is too large, your **network** and **memory size** can become the bottleneck of your app. So keep in mind that Virtualized Table is never the ultimate solution for everything, consider paginating your data, adding filters etc.

:::

## Basic usage

Let's demonstrate the performance of the Virtualized Table by rendering a basic example with 10 columns and 1000 rows.

:::demo

table-v2/basic

:::

## Auto resizer

When you do not want to manually pass the `width` and `height` properties to the table, you can wrap the table component with the AutoResizer.
This will automatically update the width and height for you.

Resize your browser to see how it works.

:::tip

Make sure the parent node of the `AutoResizer` **HAS A FIXED HEIGHT**, since its default height value is set to 100%.
Alternatively, you can define it by passing the `style` attribute to `AutoResizer`.

:::

:::demo

table-v2/auto-resizer

:::

## Customize Cell Renderer{#customize-cell-renderer}

Of course, you can render the table cell according to your needs. Here's a simple example of how to customize your cell.

:::demo

table-v2/cell-templating

:::

## Table with selections

Using customized cell renderer to allow selection for your table.

:::demo

table-v2/selection

:::

## Inline editing

Just as we demonstrated with selections above, you can use the same method to enable inline editing.

:::demo

table-v2/inline-editing

:::

## Table with status

You can highlight your table content to distinguish between "success, information, warning, danger" and other states.

To customize the appearance of rows, use the `row-class-name` attribute. For example, every 10th row is highlighted using the `bg-blue-200` class, and every 5th row with the `bg-red-100` class.

:::demo

table-v2/row-class

:::

## Table with sticky rows

You can make some rows stick to the top of the table, and that can be very easily achieved by using the `fixed-data` attribute.

You can dynamically set the sticky row based on scroll events, as shown in this example.

:::demo

table-v2/sticky-rows

:::

## Table with fixed columns

If you want to have columns stick to the left or right for some reason, you can achieve this by adding special attributes to the table.

You can set the column's attribute `fixed` to `true` (representing `FixedDir.LEFT`) or `FixedDir.LEFT` or `FixedDir.RIGHT`

:::demo

table-v2/fixed-columns

:::

## Grouping header

By customizing your header renderer, you can group your header as shown in this example.

:::tip

In this case we used `JSX` feature which is not supported in the playground. You may try them out in your local environment or on online IDEs such as `codesandbox`.

It is recommended that you write your table component in JSX, since it contains VNode manipulations.

:::

:::demo

table-v2/grouping-header

:::

## Filter

Virtualized Table provides custom header renderers for creating customized headers. We can then utilize these to render filters.

:::demo

table-v2/filter

:::

## Sortable

You can sort the table with sort state.

:::demo

table-v2/sort

:::

## Controlled Sort

You can define multiple sortable columns as needed. Keep in mind that if you define multiple sortable columns, the UI
may appear confusing to your users, as it becomes unclear which column is currently being sorted.

:::demo

table-v2/controlled-sort

:::

## Cross hovering

When dealing with a large list, it's easy to lose track of the current row and column you are visiting. In such cases, using this feature can be very helpful.

:::demo

table-v2/cross-hovering

:::

## Colspan

The virtualized table doesn't use the built-in `table` element, so `colspan` and `rowspan` behave a bit differently compared to [TableV1](./table.md). However, with a customized row renderer, these features can still be implemented. In this section, we'll demonstrate how to achieve this.

:::demo

table-v2/colspan

:::

## Rowspan

Since we have covered [Colspan](#colspan), it's worth noting that we also have row span. It's a little bit different from colspan but the idea
is basically the same.

:::demo

table-v2/rowspan

:::

## Rowspan and Colspan together

We can combine rowspan and colspan together to meet your business goal!

:::demo

table-v2/spans

:::

## Tree data

Virtual Table can also render data in a tree-like structure. By clicking the arrow icon, you can expand or collapse the tree nodes.

:::demo

table-v2/tree-data

:::

## Dynamic height rows

Virtual Table is capable of rendering rows with dynamic heights. If you're working with data and are uncertain about the content size,
this feature is ideal for rendering rows that adjust to the content's height. To enable this, pass down the `estimated-row-height` attribute.
The closer the estimated height matches the actual content, the smoother the rendering experience.

:::tip

Each row's height is dynamically measured during rendering the rows. As a result, if you're trying to display a large amount of data,
the UI **might be** bouncing.

:::

:::demo

table-v2/dynamic-height

:::

## Detail view

Using dynamic height rendering, you can also display a detailed view within the table.

:::demo

table-v2/detailed-view

:::

## Customized Footer

Render a customized footer when you want to show a concluding message or information.

:::demo

table-v2/footer

:::

## Customized Empty Renderer

Render a customized empty element.

:::demo

table-v2/empty

:::

## Overlay

Render an overlay on top of the table when you want to show a loading indicator or something else.

:::demo

table-v2/overlay

:::

## Manual scrolling

Use the methods provided by Table V2 to scroll manually/programmatically with desired offset/rows.

:::tip

The second parameter for `scrollToRow` is the scrolling strategy which by default is `auto`, it calculates the position
to scroll by itself. If you wish to scroll to a specific position, you can define the strategy yourself.
The available options are `"auto" | "center" | "end" | "start" | "smart"`

The difference between `smart` and `auto` is that `auto` is a subset of `smart` scroll strategy.

:::

:::demo

table-v2/manual-scroll

:::

## TableV2 Attributes

| Name                      | Description                                                                                                                | Type                                                   | Default   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------- |
| cache                     | Number of rows rendered in advance to boost the performance                                                                | `number`                                               | 2         |
| estimated-row-height      | The estimated row height for rendering dynamic height rows                                                                 | `number`                                               | —         |
| header-class              | Customized class name passed to header wrapper                                                                             | `string` / Function<[HeaderClassGetter](#typings)>     | —         |
| header-props              | Customized props name passed to header component                                                                           | `object` / Function<[HeaderPropsGetter](#typings)>     | —         |
| header-cell-props         | Customized props name passed to header cell component                                                                      | `object` / Function<[HeaderCellPropsGetter](#typings)> | —         |
| header-height             | The height of the header is set by `height`. If given an array, it renders header rows equal to its length                 | `number`/ `number[]`                                   | 50        |
| footer-height             | The height of the footer element, when provided, will be part to the calculation of the table's height.                    | `number`                                               | 0         |
| row-class                 | Customized class name passed to row wrapper                                                                                | `string` / Function<[RowClassGetter](#typings)>        | —         |
| row-key                   | The key of each row, if not provided, will be the index of the row                                                         | `string` / `Symbol` / `number`                         | id        |
| row-props                 | Customized props name passed to row component                                                                              | `object` / Function<[RowPropsGetter](#typings)>        | —         |
| row-height                | The height of each row, used for calculating the total height of the table                                                 | `number`                                               | 50        |
| row-event-handlers        | A collection of handlers attached to each row                                                                              | `object`\<[RowEventHandlers](#typings)\>               | —         |
| cell-props                | extra props passed to each cell (except header cells)                                                                      | `object` / Function<[CellPropsGetter](#typings)>       | —         |
| columns                   | An array of column definitions.                                                                                            | [Column[]](#column-attribute)                          | —         |
| data                      | An array of data to be rendered in the table.                                                                              | [Data[]](#typings)                                     | []        |
| data-getter               | A method to customize data fetch from the data source.                                                                     | Function<[DataGetter\<T\>](#typings)>                  | —         |
| fixed-data                | Data for rendering rows above the main content and below the header                                                        | `object`\<[Data](#typings)\>                           | —         |
| expand-column-key         | The column key indicates which row is expandable                                                                           | `string`                                               | —         |
| expanded-row-keys         | An array of keys for expanded rows, can be used with `v-model`                                                             | [KeyType[]](#typings)                                  | —         |
| default-expanded-row-keys | An array of keys for default expanded rows, **NON REACTIVE**                                                               | [KeyType[]](#typings)                                  | —         |
| class                     | Class name for the virtual table, will be applied to all three tables (left, right, main)                                  | `string` / `array` / `object`                          | —         |
| fixed                     | Flag indicates the table column's width to be fixed or flexible.                                                           | `boolean`                                              | false     |
| width ^(required)         | Width of the table                                                                                                         | `number`                                               | —         |
| height ^(required)        | Height of the table                                                                                                        | `number`                                               | —         |
| max-height                | Maximum height of the table                                                                                                | `number`                                               | —         |
| indent-size               | horizontal indentation of tree table                                                                                       | `number`                                               | 12        |
| h-scrollbar-size          | Indicates the horizontal scrollbar's size for the table, used to prevent the horizontal and vertical scrollbar to collapse | `number`                                               | 6         |
| v-scrollbar-size          | Indicates the vertical scrollbar's size for the table, used to prevent the horizontal and vertical scrollbar to collapse   | `number`                                               | 6         |
| scrollbar-always-on       | If true, the scrollbar will always be shown instead of when mouse is placed above the table                                | `boolean`                                              | false     |
| sort-by                   | Sort indicator                                                                                                             | `object`\<[SortBy](#typings)\>                         | {}        |
| sort-state                | Multiple sort indicator                                                                                                    | `object`\<[SortState](#typings)\>                      | undefined |

## TableV2 Slots

| Name        | Params                                      |
| ----------- | ------------------------------------------- |
| cell        | `object`\<[CellSlotProps](#typings)\>       |
| header      | `object`\<[HeaderSlotProps](#typings)\>     |
| header-cell | `object`\<[HeaderCellSlotProps](#typings)\> |
| row         | `object`\<[RowSlotProps](#typings)\>        |
| footer      | —                                           |
| empty       | —                                           |
| overlay     | —                                           |

## TableV2 Events

| Name                 | Description                                                                                                                     | Parameters                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| column-sort          | Invoked when column sorted                                                                                                      | `object`\<[ColumnSortParam](#typings)\>       |
| expanded-rows-change | Invoked when expanded rows changed                                                                                              | [KeyType[]](#typings)                         |
| end-reached          | Invoked when the end of the table is reached. The callback contain the remain distance, it is the usually the scrollbar height. | ^[Function]`(remainDistance: number) => void` |
| scroll               | Invoked after scrolling                                                                                                         | `object`\<[ScrollParams](#typings)\>          |
| rows-rendered        | Invoked when rows are rendered                                                                                                  | `object`\<[RowsRenderedParams](#typings)\>    |
| row-expand           | Invoked when expand/collapse the tree node by clicking the arrow icon                                                           | `object`\<[RowExpandParams](#typings)\>       |

## TableV2 Methods

| Event Name   | Description                                          | Parameters                                                                             |
| ------------ | ---------------------------------------------------- | -------------------------------------------------------------------------------------- |
| scrollTo     | Scroll to a given position                           | ^[Function]`(param: {scrollLeft?: number, scrollTop?: number}) => void`                |
| scrollToLeft | Scroll to a given horizontal position                | ^[Function]`(scrollLeft: number) => void`                                              |
| scrollToTop  | Scroll to a given vertical position                  | ^[Function]`(scrollTop: number) => void`                                               |
| scrollToRow  | scroll to a given row with specified scroll strategy | ^[Function]`(row: number, strategy?: 'center' \| 'end' \| 'start' \| 'smart') => void` |

:::tip

Note that these are `JavaScript` Objects, so you **CANNOT USE** kebab-case for these attributes

:::

## Column Attribute

| Name               | Description                                                           | Type                                                                                                                                                                 | Default |
| ------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| align              | Alignment of the table cell content                                   | [Alignment](https://github.com/element-plus/element-plus/blob/b92b22932758f0ddea98810ae248f6ca62f77e25/packages/components/table-v2/src/constants.ts#L6)             | left    |
| class              | Class name for the column                                             | `string`                                                                                                                                                             | —       |
| key                | Unique identification                                                 | [KeyType](#typings)                                                                                                                                                  | —       |
| dataKey            | Unique identification of data                                         | [KeyType](#typings)                                                                                                                                                  | —       |
| fixed              | Fixed direction of the column                                         | `boolean` / [FixedDir](https://github.com/element-plus/element-plus/blob/b92b22932758f0ddea98810ae248f6ca62f77e25/packages/components/table-v2/src/constants.ts#L11) | false   |
| flexGrow           | CSSProperties flex grow, Only useful when this is not a fixed table   | `number`                                                                                                                                                             | 0       |
| flexShrink         | CSSProperties flex shrink, Only useful when this is not a fixed table | `number`                                                                                                                                                             | 1       |
| headerClass        | Used for customizing header column class                              | `string`                                                                                                                                                             | —       |
| hidden             | Whether the column is invisible                                       | `boolean`                                                                                                                                                            | —       |
| style              | Customized style for column cell, will be merged with grid cell       | ^[object]`CSSProperties`                                                                                                                                             | —       |
| sortable           | Indicates whether the column is sortable                              | `boolean`                                                                                                                                                            | —       |
| title              | The default text rendered in header cell                              | `string`                                                                                                                                                             | —       |
| maxWidth           | Maximum width for the column                                          | `number`                                                                                                                                                             | —       |
| minWidth           | Minimum width for the column                                          | `number`                                                                                                                                                             | —       |
| width ^(required)  | Width for the column                                                  | `number`                                                                                                                                                             | —       |
| cellRenderer       | Customized Cell renderer                                              | `VueComponent` / (props: [CellRenderProps](#typings)) => VNode                                                                                                       | —       |
| headerCellRenderer | Customized Header renderer                                            | `VueComponent` / (props: [HeaderRenderProps](#typings)) => VNode                                                                                                     | —       |

## Typings{#typings}

<details>
<summary>Show Type Declarations</summary>

```ts
type HeaderClassGetter = (param: {
  columns: Column<any>[]
  headerIndex: number
}) => string

type HeaderPropsGetter = (param: {
  columns: Column<any>[]
  headerIndex: number
}) => Record<string, any>

type HeaderCellPropsGetter = (param: {
  columns: Column<any>[]
  column: Column<any>
  columnIndex: number
  headerIndex: number
  style: CSSProperties
}) => Record<string, any>

type RowClassGetter = (param: {
  columns: Column<any>[]
  rowData: any
  rowIndex: number
}) => string

type RowPropsGetter = (param: {
  columns: Column<any>[]
  rowData: any
  rowIndex: number
}) => Record<string, any>

type CellPropsGetter = (param: {
  column: Column<any>
  columns: Column<any>[]
  columnIndex: number
  cellData: any
  rowData: any
  rowIndex: number
}) => void

type DataGetterParams<T> = {
  columns: Column<T>[]
  column: Column<T>
  columnIndex: number
} & RowCommonParams

type DataGetter<T> = (params: DataGetterParams<T>) => T

type CellRenderProps<T> = {
  cellData: T
  column: Column<T>
  columns: Column<T>[]
  columnIndex: number
  rowData: any
  rowIndex: number
}

type HeaderRenderProps<T> = {
  column: Column<T>
  columns: Column<T>[]
  columnIndex: number
  headerIndex: number
}

type ScrollParams = {
  xAxisScrollDir: 'forward' | 'backward'
  scrollLeft: number
  yAxisScrollDir: 'forward' | 'backward'
  scrollTop: number
}

type CellSlotProps<T> = {
  column: Column<T>
  columns: Column<T>[]
  columnIndex: number
  depth: number
  style: CSSProperties
  rowData: any
  rowIndex: number
  isScrolling: boolean
  expandIconProps?:
    | {
        rowData: any
        rowIndex: number
        onExpand: (expand: boolean) => void
      }
    | undefined
}

type HeaderSlotProps = {
  cells: VNode[]
  columns: Column<any>[]
  headerIndex: number
}

type HeaderCellSlotProps = {
  class: string
  columns: Column<any>[]
  column: Column<any>
  columnIndex: number
  headerIndex: number
  style: CSSProperties
  headerCellProps?: any
  sortBy: SortBy
  sortState?: SortState | undefined
  onColumnSorted: (e: MouseEvent) => void
}

type RowCommonParams = {
  rowData: any
  rowIndex: number
}

type RowEventHandlerParams = {
  rowKey: KeyType
  event: Event
} & RowCommonParams

type RowEventHandler = (params: RowEventHandlerParams) => void
type RowEventHandlers = {
  onClick?: RowEventHandler
  onContextmenu?: RowEventHandler
  onDblclick?: RowEventHandler
  onMouseenter?: RowEventHandler
  onMouseleave?: RowEventHandler
}

type RowsRenderedParams = {
  rowCacheStart: number
  rowCacheEnd: number
  rowVisibleStart: number
  rowVisibleEnd: number
}

type RowSlotProps = {
  columns: Column<any>[]
  rowData: any
  columnIndex: number
  rowIndex: number
  data: any
  key: number | string
  isScrolling?: boolean
  style: CSSProperties
}

type RowExpandParams = {
  expanded: boolean
  rowKey: KeyType
} & RowCommonParams

type Data = {
  [key: KeyType]: any
  children?: Array<any>
}

type FixedData = Data

type KeyType = string | number | symbol

type ColumnSortParam<T> = { column: Column<T>; key: KeyType; order: SortOrder }

enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

type SortBy = { key: KeyType; Order: SortOrder }
type SortState = Record<KeyType, SortOrder>
```

</details>

## FAQs

#### How do I render a list with a checkbox in the first column?

Since you are allowed to define your own cell renderer, you can do what the example
[Customize Cell Renderer](#customize-cell-renderer) did to render `checkbox` yourself, and maintain the
state by yourself.

#### Why does virtualized table provide less features than [TableV1](./table.md)

For virtualized table, we intend to provide less feature and let our users implement their own features as needed.
Integrating too many features makes the code hard to maintain and for most users the basic features are enough. Some key
features were not developed yet. We would love to hear from you. Join [Discord](https://discord.com/invite/gXK9XNzW3X) to stay tuned.
