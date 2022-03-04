---
title: Container
lang: en-US
---

# Container

Container components for scaffolding basic structure of the page:

`<el-container>`: wrapper container. When nested with a `<el-header>` or `<el-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<el-header>`: container for headers.

`<el-aside>`: container for side sections (usually a side nav).

`<el-main>`: container for main sections.

`<el-footer>`: container for footers.

:::tip

These components use flex for layout, so please make sure your browser supports it. Besides, `<el-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<el-container>`.

:::

## Common layouts

:::demo

container/basic

:::

## Example

:::demo

container/example

:::

## Container Attributes

| Attribute | Description                         | Type   | Accepted Values       | Default                                                                    |
| --------- | ----------------------------------- | ------ | --------------------- | -------------------------------------------------------------------------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `el-header` or `el-footer`; horizontal otherwise |

## Container Slots

| Name | Description               | Subtags                                    |
| ---- | ------------------------- | ------------------------------------------ |
| —    | customize default content | Container / Header / Aside / Main / Footer |

## Header Attributes

| Attribute | Description          | Type   | Accepted Values | Default |
| --------- | -------------------- | ------ | --------------- | ------- |
| height    | height of the header | string | —               | 60px    |

## Header Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |

## Aside Attributes

| Attribute | Description               | Type   | Accepted Values | Default |
| --------- | ------------------------- | ------ | --------------- | ------- |
| width     | width of the side section | string | —               | 300px   |

## Aside Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |

## Main Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |

## Footer Attributes

| Attribute | Description          | Type   | Accepted Values | Default |
| --------- | -------------------- | ------ | --------------- | ------- |
| height    | height of the footer | string | —               | 60px    |

## Footer Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
