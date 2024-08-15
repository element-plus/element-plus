---
title: Tabs
lang: en-US
---

# Tabs

Divide data collections which are related yet belong to different types.

## Basic usage

Basic and concise tabs.

:::demo Tabs provide a selective card functionality. By default the first tab is selected as active, and you can activate any tab by setting the `value` attribute.

tabs/basic

:::

## Card Style

Tabs styled as cards.

:::demo Set `type` to `card` can get a card-styled tab.

tabs/card-style

:::

## Border card

Border card tabs.

:::demo Set `type` to `border-card`.

tabs/border-card

:::

## Tab position

You can use `tab-position` attribute to set the tab's position.

:::demo You can choose from four directions: `tabPosition="left|right|top|bottom"`

tabs/tab-position

:::

## Custom Tab

You can use named slot to customize the tab label content.

:::demo

tabs/custom-tab

:::

## Add & close tab

Only card type Tabs support addable & closeable.

:::demo

tabs/dynamic-tabs

:::

## Customized add button icon ^(2.4.0)

:::demo

tabs/customized-add-button-icon

:::

## Customized trigger button of new tab

:::demo

tabs/customized-trigger

:::

## Tabs API

### Tabs Attributes

| Name                  | Description                                                                                                                             | Type                                                                                             | Default    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------- |
| model-value / v-model | binding value, name of the selected tab, the default value is the name of first tab                                                     | ^[string] / ^[number]                                                                            | —          |
| type                  | type of Tab                                                                                                                             | ^[enum]`'' \| 'card' \| 'border-card'`                                                           | ''         |
| closable              | whether Tab is closable                                                                                                                 | ^[boolean]                                                                                       | false      |
| addable               | whether Tab is addable                                                                                                                  | ^[boolean]                                                                                       | false      |
| editable              | whether Tab is addable and closable                                                                                                     | ^[boolean]                                                                                       | false      |
| tab-position          | position of tabs                                                                                                                        | ^[enum]`'top' \| 'right' \| 'bottom' \| 'left'`                                                  | top        |
| stretch               | whether width of tab automatically fits its container                                                                                   | ^[boolean]                                                                                       | false      |
| before-leave          | hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented | ^[Function]`(activeName: TabPaneName, oldActiveName: TabPaneName) => Awaitable<void \| boolean>` | () => true |

### Tabs Events

| Name       | Description                                           | Parameters                                                                           |
| ---------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
| tab-click  | triggers when a tab is clicked                        | ^[Function]`(pane: TabsPaneContext, ev: Event) => void`                              |
| tab-change | triggers when `activeName` is changed                 | ^[Function]`(name: TabPaneName) => void`                                             |
| tab-remove | triggers when tab-remove button is clicked            | ^[Function]`(name: TabPaneName) => void`                                             |
| tab-add    | triggers when tab-add button is clicked               | ^[Function]`() => void`                                                              |
| edit       | triggers when tab-add button or tab-remove is clicked | ^[Function]`(paneName: TabPaneName \| undefined, action: 'remove' \| 'add') => void` |

### Tabs Slots

| Name                           | Description               | Subtags  |
| ------------------------------ | ------------------------- | -------- |
| default                        | customize default content | Tab-pane |
| addIcon ^(2.4.0) ^(deprecated) | customize add button icon | —        |
| add-icon ^(2.5.4)              | customize add button icon | —        |

## Tab-pane API

### Tab-pane Attributes

| Name     | Description                                                                                                                                                                         | Type                  | Default |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------- |
| label    | title of the tab                                                                                                                                                                    | ^[string]             | ''      |
| disabled | whether Tab is disabled                                                                                                                                                             | ^[boolean]            | false   |
| name     | identifier corresponding to the name of Tabs, representing the alias of the tab-pane, the default is ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '0' | ^[string] / ^[number] | —       |
| closable | whether Tab is closable                                                                                                                                                             | ^[boolean]            | false   |
| lazy     | whether Tab is lazily rendered                                                                                                                                                      | ^[boolean]            | false   |

### Tab-pane Slots

| Name    | Description        |
| ------- | ------------------ |
| default | Tab-pane's content |
| label   | Tab-pane's label   |
