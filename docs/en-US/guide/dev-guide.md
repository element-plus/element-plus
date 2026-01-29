---
title: Local Development
lang: en-US
---

# Local Development

## Bootstrap project

With command

```shell
pnpm i
```

the project will install all dependencies.

## Website preview

With command

```shell
pnpm docs:dev
```

the project will launch website for you to preview all existing component.

## Local development

See [Local development guide](https://github.com/element-plus/element-plus/blob/dev/CONTRIBUTING.md)

1. With command

```shell
pnpm dev
```

will start the local development environment.

2. Add your component into `play/src/App.vue`

```vue [App.vue]
<template>
  <ComponentYouAreDeveloping />
</template>

<script setup lang="ts">
// make sure this component is registered in @element-plus/components
</script>
```

Modify `App.vue` file per your needs to get things work.

## Component instance types

If a component uses `defineExpose`, you can get type hints on a `ref` by using
its exported `*Instance` type.

```ts
import { ref } from 'vue'

import type { DatePickerInstance } from 'element-plus'

const datePickerRef = ref<DatePickerInstance>()

datePickerRef.value?.handleOpen()
```

Components that currently use `defineExpose`:

| Component        | Instance type(s)                                |
| ---------------- | ----------------------------------------------- |
| Button           | `ButtonInstance`, `ButtonGroupInstance`         |
| Scrollbar        | `ScrollbarInstance`                             |
| Splitter         | `SplitterInstance`, `SplitterPanelInstance`     |
| Autocomplete     | `AutocompleteInstance`                          |
| Cascader         | `CascaderInstance`                              |
| CascaderPanel    | `CascaderPanelInstance`, `CascaderMenuInstance` |
| ColorPickerPanel | `ColorPickerPanelInstance`                      |
| ColorPicker      | `ColorPickerInstance`                           |
| Form             | `FormInstance`, `FormItemInstance`              |
| Input            | `InputInstance`                                 |
| InputNumber      | `InputNumberInstance`                           |
| InputTag         | `InputTagInstance`                              |
| Mention          | `MentionInstance`                               |
| Rate             | `RateInstance`                                  |
| Switch           | `SwitchInstance`                                |
| DatePicker       | `DatePickerInstance`                            |
| TimePicker       | `TimePickerInstance`                            |
| TimeSelect       | `TimeSelectInstance`                            |
| Transfer         | `TransferInstance`, `TransferPanelInstance`     |
| Upload           | `UploadInstance`                                |
| Calendar         | `CalendarInstance`                              |
| Carousel         | `CarouselInstance`                              |
| Collapse         | `CollapseInstance`, `CollapseItemInstance`      |
| Image            | `ImageInstance`                                 |
| ImageViewer      | `ImageViewerInstance`                           |
| Table            | `TableInstance`                                 |
| TableV2          | `TableV2Instance`                               |
| TreeV2           | `TreeV2Instance`                                |
| Statistic        | `StatisticInstance`                             |
| Countdown        | `CountdownInstance`                             |
| Affix            | `AffixInstance`                                 |
| Anchor           | `AnchorInstance`                                |
| Dropdown         | `DropdownInstance`                              |
| Menu             | `MenuInstance`                                  |
| Tabs             | `TabsInstance`, `TabNavInstance`                |
| Dialog           | `DialogInstance`                                |
| Drawer           | `DrawerInstance`                                |
| Notification     | `NotificationInstance`                          |
| Popconfirm       | `PopconfirmInstance`                            |
| Popover          | `PopoverInstance`                               |
| Tooltip          | `TooltipInstance`                               |

## The following commands are also useful during development

### Generate component template

With command

```shell
pnpm gen <component-name>
# eg.
pnpm gen awesome
pnpm gen awesome-button
```

will generate a component template in `packages/components/awesome` and `packages/components/awesome-button` directory.

### Sync locale files

With command

```shell
pnpm locale:sync
```

will sync the new fields from the `en.ts` locale file to other locale files and add the comment `// to be translated`.
