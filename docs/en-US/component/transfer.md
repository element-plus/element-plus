---
title: Transfer
lang: en-US
---

# Transfer

## Basic usage

:::demo Data is passed to Transfer via the `data` attribute. The data needs to be an object array, and each object should have these attributes: `key` being the identification of the data item, `label` being the displayed text, and `disabled` indicating if the data item is disabled. Items inside the target list are in sync with the variable binding to `v-model`, and the value of that variable is an array of target item keys. So, if you don't want the target list be initially empty, you can initialize the `v-model` with an array.

transfer/basic

:::

## Filterable

You can search and filter data items.

:::demo Set the `filterable` attribute to `true` to enable filter mode. By default, if the data item `label` contains the search keyword, it will be included in the search result. Also, you can implement you own filter method with the `filter-method` attribute. It takes a method and passes search keyword and each data item to it whenever the keyword changes. For a certain data item, if the method returns true, it will be included in the result list.

transfer/filterable

:::

## Customizable

You can customize list titles, button texts, render function for data items, checking status texts in list footer and list footer contents.

:::demo Use `titles`, `button-texts`, `render-content` and `format` to respectively customize list titles, button texts, render function for data items, checking status texts in list header. Plus, you can also use scoped slot to customize data items. For list footer contents, two named slots are provided: `left-footer` and `right-footer`. Plus, if you want some items initially checked, you can use `left-default-checked` and `right-default-checked`. Finally, this example demonstrate the `change` event. Note that this demo can't run in JSFiddle because it doesn't support JSX syntax. In a real project, `render-content` will work if relevant dependencies are correctly configured.

transfer/customizable

:::

## Custom empty content ^(2.9.0)

You can customize the content when the list is empty or when no filtering results are found.

:::demo Use `left-empty` and `right-empty` slots to customize the empty content for each panel.

transfer/empty-content

:::

## Prop aliases

By default, Transfer looks for `key`, `label` and `disabled` in a data item. If your data items have different key names, you can use the `props` attribute to define aliases.

:::demo The data items in this example do not have `key`s or `label`s, instead they have `value`s and `desc`s. So you need to set aliases for `key` and `label`.

transfer/prop-alias

:::

## Transfer API

### Transfer Attributes

| Name                        | Description                                                                                                                                                                                                                                                                        | Type                                                               | Default  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------- |
| model-value / v-model       | Binding value                                                                                                                                                                                                                                                                      | ^[array]`Array<string \| number>`                                  | []       |
| data                        | Data source                                                                                                                                                                                                                                                                        | ^[array]`Record<string, any>[]`                                    | []       |
| filterable                  | Whether Transfer is filterable                                                                                                                                                                                                                                                     | ^[boolean]                                                         | false    |
| filter-placeholder          | Placeholder for the filter input                                                                                                                                                                                                                                                   | ^[string]                                                          | —        |
| filter-method               | Custom filter method                                                                                                                                                                                                                                                               | ^[Function]`(query: string, item: Record<string, any>) => boolean` | —        |
| target-order                | Order strategy for elements in the target list. If set to `original`, the elements will keep the same order as the data source. If set to `push`, the newly added elements will be pushed to the bottom. If set to `unshift`, the newly added elements will be inserted on the top | ^[enum]`'original' \| 'push' \| 'unshift'`                         | original |
| titles                      | Custom list titles                                                                                                                                                                                                                                                                 | ^[array]`[string, string]`                                         | []       |
| button-texts                | Custom button texts                                                                                                                                                                                                                                                                | ^[array]`[string, string]`                                         | []       |
| render-content              | Custom render function for data items                                                                                                                                                                                                                                              | ^[object]`renderContent`                                           | —        |
| format                      | Texts for checking status in list header                                                                                                                                                                                                                                           | ^[object]`TransferFormat`                                          | {}       |
| [props](#type-declarations) | Prop aliases for data source                                                                                                                                                                                                                                                       | ^[object]`TransferPropsAlias`                                      | —        |
| left-default-checked        | Key array of initially checked data items of the left list                                                                                                                                                                                                                         | ^[array]`Array<string \| number>`                                  | []       |
| right-default-checked       | Key array of initially checked data items of the right list                                                                                                                                                                                                                        | ^[array]`Array<string \| number>`                                  | []       |
| validate-event              | Whether to trigger form validation                                                                                                                                                                                                                                                 | ^[boolean]                                                         | true     |

### Transfer Events

| Name               | Description                                                                         | Type                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| change             | Triggers when data items change in the right list                                   | ^[Function]`(value: TransferKey[], direction: TransferDirection, movedKeys: TransferKey[]) => void` |
| left-check-change  | Triggers when end user changes the checked state of any data item in the left list  | ^[Function]`(value: TransferKey[], movedKeys?: TransferKey[]) => void`                              |
| right-check-change | Triggers when end user changes the checked state of any data item in the right list | ^[Function]`(value: TransferKey[], movedKeys?: TransferKey[]) => void`                              |

### Transfer Slots

| Name                 | Description                                                          | Type                                    |
| -------------------- | -------------------------------------------------------------------- | --------------------------------------- |
| default              | Custom content for data items                                        | ^[object]`{ option: TransferDataItem }` |
| left-footer          | Content of left list footer                                          | —                                       |
| right-footer         | Content of right list footer                                         | —                                       |
| left-empty ^(2.9.0)  | Content when left panel is empty or when no data matches the filter  | —                                       |
| right-empty ^(2.9.0) | Content when right panel is empty or when no data matches the filter | —                                       |

### Transfer Exposes

| Name       | Description                                 | Type                                            |
| ---------- | ------------------------------------------- | ----------------------------------------------- |
| clearQuery | Clear the filter keyword of a certain panel | ^[Function]`(which: TransferDirection) => void` |
| leftPanel  | Left panel ref                              | ^[object]`Ref<TransferPanelInstance>`           |
| rightPanel | Right panel ref                             | ^[object]`Ref<TransferPanelInstance>`           |

## Transfer Panel API

### Transfer Panel Exposes

| Name  | Description    | Type      |
| ----- | -------------- | --------- |
| query | Filter keyword | ^[string] |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
import type { h as H, VNode } from 'vue'

type TransferKey = string | number

type TransferDirection = 'left' | 'right'

type TransferDataItem = Record<string, any>

type renderContent = (h: typeof H, option: TransferDataItem) => VNode | VNode[]

interface TransferFormat {
  noChecked?: string
  hasChecked?: string
}

interface TransferPropsAlias {
  label?: string
  key?: string
  disabled?: string
}
```

</details>
