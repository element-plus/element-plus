---
title: Pagination
lang: en-US
---

# Pagination

If you have too much data to display in one page, use pagination.

## Basic usage

:::demo Set `layout` with different pagination elements you wish to display separated with a comma. Pagination elements are: `prev` (a button navigating to the previous page), `next` (a button navigating to the next page), `pager` (page list), `jumper` (a jump-to input), `total` (total item count), `size` (a select to determine page size) and `->`(every element after this symbol will be pulled to the right).

pagination/basic-usage

:::

## Number of pagers

:::demo By default, Pagination collapses extra pager buttons when it has more than 7 pages. This can be configured with the `pager-count` attribute.

pagination/number-of-pagers

:::

## Buttons with background color

:::demo Set the `background` attribute and the buttons will have a background color.

pagination/background-color

:::

## Small Pagination

Use small pagination in the case of limited space.

:::demo Just set the `small` attribute to `true` and the Pagination becomes smaller.

pagination/small-pagination

:::

## Hide pagination when there is only one page

When there is only one page, hide the pagination by setting the `hide-on-single-page` attribute.

:::demo

pagination/auto-hide-pagination

:::

## More elements

Add more modules based on your scenario.

:::demo This example is a complete use case. It uses `size-change` and `current-change` event to handle page size changes and current page changes. `page-sizes` accepts an array of integers, each of which represents a different page size in the `sizes` select options, e.g. `[100, 200, 300, 400]` indicates that the select will have four options: 100, 200, 300 or 400 items per page.

pagination/more-elements

:::

## Attributes

| Name                                | Description                                                                                                                     | Type                                                                              | Default                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------ |
| small                               | whether to use small pagination                                                                                                 | ^[boolean]                                                                        | false                                |
| background                          | whether the buttons have a background color                                                                                     | ^[boolean]                                                                        | false                                |
| page-size / v-model:page-size       | item count of each page                                                                                                         | ^[number]                                                                         | 10                                   |
| default-page-size                   | default initial value of page size                                                                                              | ^[number]                                                                         | -                                    |
| total                               | total item count                                                                                                                | ^[number]                                                                         | —                                    |
| page-count                          | total page count. Set either `total` or `page-count` and pages will be displayed; if you need `page-sizes`, `total` is required | ^[number]                                                                         | —                                    |
| pager-count                         | number of pagers. Pagination collapses when the total page count exceeds this value                                             | ^[number]`5 \| 7 \| 9 \| 11 \| 13 \| 15 \| 17 \| 19 \| 21`                        | 7                                    |
| current-page / v-model:current-page | current page number                                                                                                             | ^[number]                                                                         | 1                                    |
| default-current-page                | default initial value of current-page                                                                                           | ^[number]                                                                         | -                                    |
| layout                              | layout of Pagination, elements separated with a comma                                                                           | ^[string]`string (consists of sizes, prev, pager, next, jumper, ->, total, slot)` | prev, pager, next, jumper, ->, total |
| page-sizes                          | options of item count per page                                                                                                  | ^[array]`number[]`                                                                | [10, 20, 30, 40, 50, 100]            |
| popper-class                        | custom class name for the page size Select's dropdown                                                                           | ^[string]                                                                         | —                                    |
| prev-text                           | text for the prev button                                                                                                        | ^[string]                                                                         | —                                    |
| prev-icon                           | icon for the prev button, higher priority of `prev-text`                                                                        | ^[string] / ^[Component]                                                          | ArrowLeft                            |
| next-text                           | text for the next button                                                                                                        | ^[string]                                                                         | —                                    |
| next-icon                           | icon for the next button, higher priority of `next-text`                                                                        | ^[string] / ^[Component]                                                          | ArrowRight                           |
| disabled                            | whether Pagination is disabled                                                                                                  | ^[boolean]                                                                        | false                                |
| hide-on-single-page                 | whether to hide when there's only one page                                                                                      | ^[boolean]                                                                        | -                                    |

:::warning

We'll detect some deprecated usages, if your pagination don't appeared or worked as expected, please check rules below:

- You have to define one of `total` and `page-count`, otherwise we can't determine count of total pages.When both defined, `page-count` taken as priority.
- If `current-page` is defined, you have to listen `current-page` change, by also define `@update:current-page`, otherwise pagination didn't work.
- If `page-size` is defined while page size selector displayed(`sizes` included in `layout`), you have to listen `page-size` change as well, by define `@update:page-size`, otherwise change of page size didn't work.

:::

## Events

| Name           | Description                                                       | Type                                 |
| -------------- | ----------------------------------------------------------------- | ------------------------------------ |
| size-change    | triggers when `page-size` changes                                 | ^[Function]`(value: number) => void` |
| current-change | triggers when `current-page` changes                              | ^[Function]`(value: number) => void` |
| prev-click     | triggers when the prev button is clicked and current page changes | ^[Function]`(value: number) => void` |
| next-click     | triggers when the next button is clicked and current page changes | ^[Function]`(value: number) => void` |

:::warning

Events above are not recommended(but are still supported for compatible reason), better choice is to use the two-way data binding by `v-model`.

:::

## Slots

| Name    | Description                                                         |
| ------- | ------------------------------------------------------------------- |
| default | custom content. To use this, you need to declare `slot` in `layout` |
