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
