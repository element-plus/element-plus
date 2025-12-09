---
title: Pagination Table
lang: en-US
---

# Pagination Table ^(beta)

The pagination table combines the functions of components `el-table` and `el-pagination`.

## Basic usage

:::demo

pagination-table/basic-usage

:::

## Data at-once

:::demo

pagination-table/data-at-once

:::

## Example

:::demo

pagination-table/example

:::

## API

### Attributes

| Name         | Description                   | Type       | Default |
| ------------ | ----------------------------- | ---------- | ------- |
| data-at-once | whether load the data at-once | ^[boolean] | false   |

Since this component combines the functions of components `el-table` and `el-pagination`,
the original properties have not been changed, so no repetition here,
and please go to the original component to view the documentation.

| Attributes                                          | Methods                               | Events                                          | Slots                                          |
| --------------------------------------------------- | ------------------------------------- | ----------------------------------------------- | ---------------------------------------------- |
| [table](./table.md#attributes)                      | [table](./table.md#method)            | [table](./table.md#events)                      | [table](./table.md#slots)                      |
| [pagination](./pagination.md#pagination-attributes) | [pagination](./pagination.md#methods) | [pagination](./pagination.md#pagination-events) | [pagination](./pagination.md#pagination-slots) |

### Exposes

| Name          | Description                   | Type                 |
| ------------- | ----------------------------- | -------------------- |
| tableRef      | Table component instance      | `TableInstance`      |
| paginationRef | Pagination component instance | `PaginationInstance` |
