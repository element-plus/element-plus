---
title: Space
lang: en-US
---

# Space

Even though we have [Divider](/en-US/component/divider), but sometimes we need more than one [Divider](/en-US/component/divider) to split the elements apart, so we stack each elements upon [Divider](/en-US/component/divider), but doing so not only makes our code ugly but also makes it difficult to maintain. **Space** is this kind of component provides us both productivity and elegance.

## Basic usage

The basic use case is using this component to provide unified space between each components

:::demo Using Space to provide space

space/basic

:::

## Vertical layout

Using `direction` attribute to control the layout, we use `flex-direction` to implement this.

:::demo We also provide vertical layout.

space/vertical-layout

:::

## Control the size of the space

Control the space size via `size` API.

You can set the size with built-in sizes `small`, `default`, `large`, these size coresponds to `8px`, `12px`, `16px`. The default size is `small`, A.K.A. `8px`

You can also using customized size to override it. Refer to the next part.

:::demo

space/control-size

:::

## Customized Size

Sometimes built-in sizes could not meet the business needs, we can use custom size (number type) to control the space between items.

:::demo

space/customized-size

:::

:::tip

Do not use `ElSpace` with components that depend on ancestor width (height), e.g. `ElSlider`, in this case when you drag the trigger button the bar will grow which causes misplacement between cursor and trigger button.

:::

## Auto wrapping

When in **horizontal** mode, using `wrap` (**bool type**) to control auto wrapping behavior.

:::demo Using `wrap` to control line wrap

space/auto-wrapping

:::

## Spacer

Sometimes we want something more than blank space, so we have (spacer) to help us.

## Literal type spacer

:::demo

space/literal-type-spacer

:::

## Spacer can also be VNode

:::demo

space/vnode-type-spacer

:::

## Alignment

Setting this attribute can adjust the alignment of child nodes, the desirable value can be found at [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

:::demo Using `alignment`

space/alignment

:::

## Fill the container

Through the `fill` **(Boolean type)** parameter, you can control whether the child node automatically fills the container.

In the following example, when set to `fill`, the width of the child node will automatically adapt to the width of the container.

:::demo Use fill to automatically fill the container with child nodes

space/fill

:::

You can also use the `fillRatio` parameter to customize the filling ratio. The default value is `100`, which represents filling based on the width of the parent container at `100%`.

It should be noted that the expression of horizontal layout and vertical layout is slightly different, the specific effect can be viewed in the following example.

:::demo Use fillRatio to customize the fill ratio

space/fill-ratio

:::

## API

### Attributes

| Name       | Description                     | Type                                                                                                                          | Default    |
| ---------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| alignment  | Controls the alignment of items | ^[enum]`'center' \| 'normal' \| 'stretch' \| ...` [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | center     |
| class      | className                       | ^[string] / ^[object] / ^[array]                                                                                              | —          |
| direction  | Placement direction             | ^[enum]`'vertical' \| 'horizontal'`                                                                                           | horizontal |
| prefixCls  | Prefix for space-items          | ^[string]                                                                                                                     | —          |
| style      | Extra style rules               | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]`                                                           | —          |
| spacer     | Spacer                          | ^[string] / ^[number] / ^[VNode]                                                                                              | —          |
| size       | Spacing size                    | ^[enum]`'default' \| 'small' \| 'large'` / ^[number] / ^[array]`[number, number]`                                             | small      |
| wrap       | Auto wrapping                   | ^[boolean]                                                                                                                    | false      |
| fill       | Whether to fill the container   | ^[boolean]                                                                                                                    | false      |
| fill-ratio | Ratio of fill                   | ^[number]                                                                                                                     | 100        |

### Slots

| name    | description        |
| ------- | ------------------ |
| default | Items to be spaced |
