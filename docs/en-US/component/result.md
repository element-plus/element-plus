---
title: Result
lang: en-US
---

# Result

Used to give feedback on the result of user's operation or access exception.

## Basic usage

:::demo `primary` has been added in ^(2.9.11).

result/basic-usage

:::

## Customized content

:::demo

result/customized-content

:::

## API

### Attributes

| Name      | Description         | Type                                                                       | Default |
| --------- | ------------------- | -------------------------------------------------------------------------- | ------- |
| title     | Title of result     | ^[string]                                                                  | ''      |
| sub-title | Sub title of result | ^[string]                                                                  | ''      |
| icon      | Icon type of result | ^[enum]`'primary' (2.9.11) \| 'success' \| 'warning' \| 'info' \| 'error'` | info    |

### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| icon      | Content as result icon       |
| title     | Content as result title      |
| sub-title | Content as result sub title  |
| extra     | Content as result extra area |
