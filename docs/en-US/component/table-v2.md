---
title: Virtualized Table
lang: en-US
---

# Virtualized Table<VersionTag version="beta" />

Along with the evolutionary web development, table component has always been the most popular component in our web apps especially for dashboards, data analysis. For [Table V1](./table.md), with even just 1000 records of data, it can be very annoying when using it, because the poor performance.

With Virtualized Table, you can render massive chunks of data in a blink of an eye.

:::tip

This component is **still under testing**, use at your own risk. if you found any bug or issue please report it at [GitHub](https://github.com/element-plus/element-plus/issues) for us to fix. Also there were some APIs which was not mentioned in this documentation, some of them were not
fully developed yet, so that we are not mentioning them here.

**Even though** Virtualized Table is efficient, but when the data load is too big, your **network**, **memory size** can be the bottle neck of your app. So keep in mind that Virtualized Table is never the ultimate solution for everything, consider paginate your data, add filters etc.

:::

:::tip

This component requires the `<client-only></client-only>` wrap when used in SSR (eg: [Nuxt](https://nuxt.com/v3)) and SSG (eg: [VitePress](https://vitepress.vuejs.org/)).

:::

## Basic usage

Let's render a basic case of Virtualized Table with 10 columns by 1000 rows, to demonstrate how performant it is.

:::demo

table-v2/basic

:::

## Auto resizer

When you do not feel like you want to pass the `width` and `height` property to the table, you can use the `AutoResizer`
component to wrap the table component and it will update the width and height for you automatically.

Resize your browser to see how it works.

:::tip

Make sure the parent node of `AutoResizer` **HAS A FIXED HEIGHT**, because the height value was set to `100%` by default.
You may also set it via passing through `style` attribute to `AutoResizer`.

:::

:::demo

table-v2/auto-resizer

:::

## Customize Cell Renderer

Of course, you can render the table cell per your needs, here is a simple example of how to customize your cell.

:::demo

table-v2/cell-templating

:::

## Table with selections

Using customized cell renderer to allow selection for your table.

:::demo

table-v2/selection

:::

## Inline editing

Just like selections we demonstrated above, you can use the same method to enable inline editing.

:::demo

table-v2/inline-editing

:::

## Table with status

You can highlight your table content to distinguish between "success, information, warning, danger" and other states.

Use `row-class-name` to customize how the row looks. In this case, every 10th row will be highlighted with `bg-blue-200` class, every 5th row will be highlighted with `bg-red-100` class.

:::demo

table-v2/row-class

:::

## Table with sticky rows

You can make some rows stick to the top of the table, and that can be very easily achieved by using `fixed-data` attribute.

You can add dynamically set the sticky row with scroll events like this example did.

:::demo

table-v2/sticky-rows

:::

## Table with fixed columns

For some reason, you want to make the columns stick on the left and right, you can do that by adding special attributes for table.

You can set the column's attribute `fixed` to `true` (representing `FixedDir.LEFT`) or `FixedDir.LEFT` or `FixedDir.RIGHT`

:::demo

table-v2/fixed-columns

:::

## Grouping header

By customizing your header renderer you can group your header like this example did.

:::tip

In this case we used `JSX` feature which is not supported in the playground, you may try them out in your local environment or online IDEs such as `codesandbox`.

It is recommended that you write your table component in JSX, since it contains VNode manipulations.

:::

:::demo

table-v2/grouping-header

:::

## Filter

Virtualized Table providers customizing header renderers for rendering customized header, then we can use that to render filters

:::demo

table-v2/filter

:::

## Sortable

You can sort the table with sort state.

:::demo

table-v2/sort

:::

## Controlled Sort

You can define multiple sortable column when you need it. Keep in mind that if you define multiple sortable columns, the UI
might seem strange to your users since the it is unclear which column is being sorted.

:::demo

table-v2/controlled-sort

:::

## Cross hovering

When the list is big, and sometimes you get lost which row and column you are currently visiting, using this is extremely
helpful.

:::demo

table-v2/cross-hovering

:::

## Colspan

Virtualized table did not use built-in `table` element, so that `colspan` and `rowspan` is a little bit different than [TableV1](./table.md). With customized row renderer, we can still do that. In this case, you'll learn how to do that.

:::demo

table-v2/colspan

:::

## Rowspan

Since we have [Colspan](#colspan) of course we have row span as well, it is a little bit different than colspan but the idea
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

Virtual Table can also render data like tree, you can expand/collapse the tree node by clicking the arrow icon.

:::demo

table-v2/tree-data

:::

## Dynamic height rows

Virtual Table can also render rows with dynamic height, when you have data without knowing how big the content it would be, you
might want to use this feature for rendering a dynamic height row. You must pass down `estimated-row-height` to enable this
feature, and the closer the estimated height is, the smoother the rendering will be.

:::tip

The height of each row is dynamically measured while rendering the rows, so that the UI **might be** bouncing if you are trying
to render a large amount of data.

:::

:::demo

table-v2/dynamic-height

:::

## Detail view

With dynamic height rendering, we can use that to render detail view in the table.

:::demo

table-v2/detailed-view

:::

## Customized Footer

Rendering a customized footer when you want to show a concluding message or information.

:::demo

table-v2/footer

:::

## Customized Empty Renderer

Render customized empty element

:::demo

table-v2/empty

:::

## Overlay

Render an overlay above the table when you want to show a loading indicator or something else.

:::demo

table-v2/overlay

:::

## Manual scrolling

Use the methods exposed by Table V2 to scroll manually/programmatically with desired offset/rows.

:::tip

The second parameter for `scrollToRow` is the scrolling strategy which by default is `auto`, it calculates the position
to scroll by itself. You can pass the strategy yourselves if you want to scroll to a specific position.
The available options are `"auto" | "center" | "end" | "start" | "smart"`

The difference between `smart` and `auto` is that `auto` is a subset of `smart` scroll strategy.

:::

:::demo

table-v2/manual-scroll

:::

## TableV2 Attributes

| Name                      | Description                                                                                                                | Type                                                 | Default   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --------- |
| cache                     | Number of rows rendered in advance for boosting the performance                                                            | Number                                               | 2         |
| estimated-row-height      | The estimated row height for rendering dynamic height rows                                                                 | Number                                               | -         |
| header-class              | Customized class name passed to header wrapper                                                                             | String/Function\<[HeaderClassGetter](#typings)\>     | -         |
| header-props              | Customized props name passed to header component                                                                           | Object/Function\<[HeaderPropsGetter](#typings)\>     | -         |
| header-cell-props         | Customized props name passed to header cell component                                                                      | Object/Function\<[HeaderCellPropsGetter](#typings)\> | -         |
| header-height             | The height of entire header, when it's array, it will render as many header rows as the given array's length               | Number/Array\<Number\>                               | 50        |
| footer-height             | The height of the footer element, when presented, it will be part of the calculation of the table's height.                | Number                                               | 0         |
| row-class                 | Customized class name passed to row wrapper                                                                                | String/Function\<[RowClassGetter](#typings)\>        | -         |
| row-key                   | The key of each row, if not provided, it will be the index of the row                                                      | String/Symbol/Number                                 | id        |
| row-props                 | Customized props name passed to row component                                                                              | Object/Function\<[RowPropsGetter](#typings)\>        | -         |
| row-height                | The height of each row, used for calculating the total height of the table                                                 | Number                                               | 50        |
| cell-props                | extra props passed to each cell (except header cells)                                                                      | Object/Function\<[CellPropsGetter](#typings)\>       | -         |
| columns                   | An array of column definitions.                                                                                            | Array\<[Column](#column-attribute)\>                 | -         |
| data                      | An array of data to be rendered in the table.                                                                              | Array\<[Data](#typings)\>                            | []        |
| data-getter               | An method which helps customizing the how to fetch the data from the data source.                                          | Function                                             | -         |
| fixed-data                | Data for rendering rows above the main content and below the header                                                        | Array\<[Data](#typings)\>                            | -         |
| expand-column-key         | The column key indicates which row is expandable                                                                           | String                                               | -         |
| expanded-row-keys         | An array of keys for expanded rows, can be used with `v-model`                                                             | Array\<[KeyType](#typings)\>                         | -         |
| default-expanded-row-keys | An array of keys for default expanded rows, **NON REACTIVE**                                                               | Array\<[KeyType](#typings)\>                         | -         |
| class                     | Class name for the the virtual table, will be applied to all three tables (left, right, main)                              | String/Array/Object                                  | -         |
| fixed                     | Flag indicates the table column's width is a fixed or flexible.                                                            | Boolean                                              | false     |
| width \*                  | Width for the table, required                                                                                              | Number                                               | -         |
| height \*                 | Height for the table, required                                                                                             | Number                                               | -         |
| max-height                | Maximum height for the table                                                                                               | Number                                               | -         |
| h-scrollbar-size          | Indicates the horizontal scrollbar's size for the table, used to prevent the horizontal and vertical scrollbar to collapse | Number                                               | 6         |
| v-scrollbar-size          | Indicates the vertical scrollbar's size for the table, used to prevent the horizontal and vertical scrollbar to collapse   | Number                                               | 6         |
| scrollbar-always-on       | If true, the scrollbar will always be shown instead of when mouse is placed above the table                                | Boolean                                              | false     |
| sort-by                   | Sort indicator                                                                                                             | Object\<[SortBy](#typings)\>                         | {}        |
| sort-state                | Multiple sort indicator                                                                                                    | Object\<[SortState](#typings)\>                      | undefined |

## TableV2 Slots

| Name        | Params                          |
| ----------- | ------------------------------- |
| cell        | [CellSlotProps](#typings)       |
| header      | [HeaderSlotProps](#typings)     |
| header-cell | [HeaderCellSlotProps](#typings) |
| row         | [RowSlotProps](#typings)        |
| footer      | -                               |
| empty       | -                               |
| overlay     | -                               |

## TableV2 Events

| Name                 | Description                                                           | Parameters                               |
| -------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| column-sort          | Invoked when column sorted                                            | Object\<ColumnSortParam\>                |
| expanded-rows-change | Invoked when expanded rows changed                                    | `Array<KeyType>`                         |
| end-reached          | Invoked when the end of the table is reached                          | -                                        |
| scroll               | Invoked after scrolled                                                | Object\<[ScrollParams](#typings)\>       |
| rows-rendered        | Invoked when rows are rendered                                        | Object\<[RowsRenderedParams](#typings)\> |
| row-expand           | Invoked when expand/collapse the tree node by clicking the arrow icon | Object\<[RowExpandParams](#typings)\>    |
| row-event-handlers   | A collection of handlers attached to each row                         | Object\<[RowEventHandlers](#typings)\>   |

## TableV2 Methods

| Event Name   | Description                                          | Parameters                                                                 |
| ------------ | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| scrollTo     | Scroll to a given position                           | `{ scrollLeft?: number, scrollTop?: number}`                               |
| scrollToLeft | Scroll to a given horizontal position                | `scrollLeft: number`                                                       |
| scrollToTop  | Scroll to a given vertical position                  | `scrollTop: number`                                                        |
| scrollToRow  | scroll to a given row with specified scroll strategy | `row: number, strategy?: "auto" \|"center" \| "end" \| "start" \| "smart"` |

:::tip

Note that these are `JavaScript` Objects, so that you **CANNOT USE** kebab-case for these attributes

:::

## Column Attribute

| Name               | Description                                                               | Type                                                                                                                                                             | Default |
| ------------------ | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| align              | Alignment of the table cell content                                       | [Alignment](https://github.com/element-plus/element-plus/blob/b92b22932758f0ddea98810ae248f6ca62f77e25/packages/components/table-v2/src/constants.ts#L6)         | left    |
| class              | Class name for the column                                                 | String                                                                                                                                                           | -       |
| fixed              | Fixed direction of the column                                             | Boolean/[FixedDir](https://github.com/element-plus/element-plus/blob/b92b22932758f0ddea98810ae248f6ca62f77e25/packages/components/table-v2/src/constants.ts#L11) | false   |
| flexGrow           | CSSProperties flex grow, Only useful when not this is not a fixed table   | Number                                                                                                                                                           | 0       |
| flexShrink         | CSSProperties flex shrink, Only useful when not this is not a fixed table | Number                                                                                                                                                           | 1       |
| headerClass        | Used for customizing header column class                                  | String                                                                                                                                                           | -       |
| hidden             | Whether the column is invisible                                           | Boolean                                                                                                                                                          | -       |
| style              | Customized style for column cell, will be merged with grid cell           | CSSProperties                                                                                                                                                    | -       |
| sortable           | Indicates whether the column is sortable                                  | Boolean                                                                                                                                                          | -       |
| title              | The default text rendered in header cell                                  | String                                                                                                                                                           | -       |
| maxWidth           | Maximum width for the column                                              | String                                                                                                                                                           | -       |
| minWidth           | Minimum width for the column                                              | String                                                                                                                                                           | -       |
| width \*           | Width for the column **Required**                                         | Number                                                                                                                                                           | -       |
| cellRenderer       | Customized Cell renderer                                                  | VueComponent/(props: [CellRenderProps](#renderer-typings)) => VNode                                                                                              | -       |
| headerCellRenderer | Customized Header renderer                                                | VueComponent/(props: [HeaderRenderProps](#renderer-typings)) => VNode                                                                                            | -       |

## Typings

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

type RowSlotProps = {
  columnIndex: number
  rowIndex: number
  data: any
  key: number | string
  isScrolling?: boolean | undefined
  style: CSSProperties
}

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

#### How do I render a list with checkbox in the first column?

Since you are allowed to define your own cell renderer, you can do what the example
[Customize Cell Renderer](#customize-cell-renderer) did to render `checkbox` yourselves, and maintaining the
state by yourselves.

#### Why virtualized table provides less features than [TableV1](./table.md)

For virtualized table, we intend to provide less feature and let our users to implement their own features per demand.
Integrating too many features makes the code hard to maintain and for most users the basic features are enough. Some key
features were not developed yet. We would love to hear from you. Join [Discord](https://discord.com/invite/gXK9XNzW3X) to stay tuned.
