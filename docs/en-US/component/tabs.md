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

## Default value ^(2.11.9)

:::demo

tabs/default-value

:::

## Tabs API

### Tabs Attributes

| Name                    | Description                                                                                                                             | Type                                                                                             | Default    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------- |
| model-value / v-model   | Binding value, name of the selected tab, the default value is the name of first tab                                                     | ^[string] / ^[number]                                                                            | —          |
| default-value ^(2.11.9) | The value of the tab that should be active when initially rendered. (avoid initial transition)                                          | ^[string] / ^[number]                                                                            | —          |
| type                    | Type of Tab                                                                                                                             | ^[enum]`'' \| 'card' \| 'border-card'`                                                           | ''         |
| closable                | Whether Tab is closable                                                                                                                 | ^[boolean]                                                                                       | false      |
| addable                 | Whether Tab is addable                                                                                                                  | ^[boolean]                                                                                       | false      |
| editable                | Whether Tab is addable and closable                                                                                                     | ^[boolean]                                                                                       | false      |
| tab-position            | Position of tabs                                                                                                                        | ^[enum]`'top' \| 'right' \| 'bottom' \| 'left'`                                                  | top        |
| stretch                 | Whether width of tab automatically fits its container                                                                                   | ^[boolean]                                                                                       | false      |
| before-leave            | Hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented | ^[Function]`(activeName: TabPaneName, oldActiveName: TabPaneName) => Awaitable<void \| boolean>` | () => true |
| tabindex ^(2.11.7)      | Tabs tabindex                                                                                                                           | ^[string] / ^[number]                                                                            | 0          |

### Tabs Events

| Name       | Description                                           | Parameters                                                                           |
| ---------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
| tab-click  | Triggers when a tab is clicked                        | ^[Function]`(pane: TabsPaneContext, ev: Event) => void`                              |
| tab-change | Triggers when `activeName` is changed                 | ^[Function]`(name: TabPaneName) => void`                                             |
| tab-remove | Triggers when tab-remove button is clicked            | ^[Function]`(name: TabPaneName) => void`                                             |
| tab-add    | Triggers when tab-add button is clicked               | ^[Function]`() => void`                                                              |
| edit       | Triggers when tab-add button or tab-remove is clicked | ^[Function]`(paneName: TabPaneName \| undefined, action: 'remove' \| 'add') => void` |

### Tabs Slots

| Name                           | Description               | Subtags  |
| ------------------------------ | ------------------------- | -------- |
| default                        | Customize default content | Tab-pane |
| add-icon ^(2.5.4)              | Customize add button icon | —        |
| addIcon ^(2.4.0) ^(deprecated) | Customize add button icon | —        |

### Tabs Exposes

| Name                | Description                | Type                                        |
| ------------------- | -------------------------- | ------------------------------------------- |
| currentName         | Current active pane name   | ^[object]`Ref<TabPaneName>`                 |
| tabNavRef ^(2.9.10) | Tab-nav component instance | ^[object]`Ref<TabNavInstance \| undefined>` |

## Tab-nav API

### Tab-nav Exposes

| Name                 | Description                 | Type                                        |
| -------------------- | --------------------------- | ------------------------------------------- |
| scrollToActiveTab    | Scroll to the active tab    | ^[Function]`() => Promise<void>`            |
| removeFocus          | Remove focus status         | ^[Function]`() => boolean`                  |
| tabListRef ^(2.9.10) | el_tabs\_\_nav html element | ^[object]`Ref<HTMLDivElement \| undefined>` |
| tabBarRef ^(2.9.10)  | el_tabs\_\_nav bar instance | ^[object]`Ref<TabBarInstance \| undefined>` |

## Tab-pane API

### Tab-pane Attributes

| Name     | Description                                                                                                                                                                         | Type                  | Default |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------- |
| label    | Title of the tab                                                                                                                                                                    | ^[string]             | ''      |
| disabled | Whether Tab is disabled                                                                                                                                                             | ^[boolean]            | false   |
| name     | Identifier corresponding to the name of Tabs, representing the alias of the tab-pane, the default is ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '0' | ^[string] / ^[number] | —       |
| closable | Whether Tab is closable                                                                                                                                                             | ^[boolean]            | false   |
| lazy     | Whether Tab is lazily rendered                                                                                                                                                      | ^[boolean]            | false   |

### Tab-pane Slots

| Name    | Description        |
| ------- | ------------------ |
| default | Tab-pane's content |
| label   | Tab-pane's label   |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type TabBarInstance = InstanceType<typeof TabBar> & {
  /** @description tab root html element */
  ref: barRef
  /** @description method to manually update tab bar style */
  update
}
```

</details>

## FAQ

#### How to use sortable/draggable tabs ?

We exposed the necessary information to implement it yourself.
You can use a native way to do it, [demo](https://tinyurl.com/2jkyw82j).
Or using [SortableJs](https://github.com/SortableJS/Sortable), [demo](https://tinyurl.com/2r8js24y).
