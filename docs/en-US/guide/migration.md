---
title: Migration
lang: en-US
---

# Migration

This document will help you upgrade from Element 2.x to Element Plus.

## Design updates

Element Plus added many design updates to the core design, we want to make element plus much better looking and easier to use.
The list contains the changes we brought to Element Plus and the comparison with **ElementUI 2.x**.
If you'd like to know the reason behind all this, you can check out [this link](https://element-ui.yuque.com/docs/share/833524dd-d27f-42bb-b44e-5d4bf48a9b59?#)

This API effects all components with a size attribute/prop

| API Name | Previous acceptable value      | Current Acceptable value |
| -------- | ------------------------------ | ------------------------ |
| size     | large / default / small / mini | large / default / small  |

## Component API changes

:::tip

We are currently working on updating the content, if you do find what we have lost mention in this list,
please [open an issue](https://github.com/element-plus/element-plus/issues/new/choose). :bow:

:::

In this section we will use forms which would be more comprehensive to describe the changes we made to the components, you can go to the desired section for checking it out.

<!--
Table format for API naming change.

| Previous API Name | Current API Name | Description |
| ----------------  | -------- | ----------- |
| example           | new-example |  some description |

-->

<!--
Table format for API value change.

| API Name | Previous Value | Current Value |
| ----------------  | -------- | ----------- |
| example           | prev-val |  current-val |

-->

### Timeline

<details>
  <summary> API Naming Change</summary>

| Previous API Name | Current API Name | Description                                      |
| ----------------- | ---------------- | ------------------------------------------------ |
| reverse           | -                | You should reverse the data instead of using API |

</details>

## New components

In Element Plus, we added a few new components, you can check them out, the components added in Element Plus are:

- [Config Provider](/en-US/component/config-provider.html)
- [Description](/en-US/component/descriptions.html)
- [Empty](/en-US/component/empty.html)
- [Skeleton](/en-US/component/skeleton.html)
- [Space](/en-US/component/space.html)
- [Virtual Select](/en-US/component/select-v2.html)
- [Virtual Tree](/en-US/component/tree-v2.html)

Here is the list of breaking changes.

For now, check [list of breaking changes](https://github.com/element-plus/element-plus/issues/162)
for full details before more thorough documentation is available.

## Vue 3 migration build

You may encounter some issues when using ElementPlus with Vue 3 migration build. Some of the components rely on Vue 3 internal API's. It's worth trying to adjust compatConfig mode to 3, either globally or [per component in your project](https://v3.vuejs.org/guide/migration/migration-build.html#per-component-config).

<style scoped>
  details {
    margin-top: 8px;
  }
</style>
