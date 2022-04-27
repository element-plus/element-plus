---
title: Virtualized Table
lang: en-US
---

# Virtualized Table

Along with the evolutionary web development, table component has always been the most popular component in our web apps especially for dashboards, data analysis. For [Table V1](./table.md), with even just 1000 records of data, it can be very annoying when using it, because the poor performance.

With Virtualized Table, you can render massive chunks of data in a blink of an eye.

:::tip

**Even though** Virtualized Table is efficient, but when the data load is too big, your **network**, **memory size** can be the bottle neck of your app. So keep in mind that Virtualized Table is never the ultimate solution for everything, consider paginate your data, add filters etc.

:::

## Basic usage

Let's render a basic case of Virtualized Table with 10 columns by 1000 rows, to demonstrate how performant it is.

:::demo

table-v2/basic

:::

## Customize Cell Renderer

Of course, you can render the table cell per your needs, here is a simple example of how to customize your cell.

:::demo

table-v2/cell-templating

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
