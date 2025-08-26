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
| title     | title of result     | ^[string]                                                                  | ''      |
| sub-title | sub title of result | ^[string]                                                                  | ''      |
| icon      | icon type of result | ^[enum]`'primary' (2.9.11) \| 'success' \| 'warning' \| 'info' \| 'error'` | info    |

### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| icon      | content as result icon       |
| title     | content as result title      |
| sub-title | content as result sub title  |
| extra     | content as result extra area |
