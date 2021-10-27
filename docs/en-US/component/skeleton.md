---
title: Skeleton
lang: en-US
---

# Skeleton

When loading data, and you need a rich experience for visual and interactions for your end users, you can choose `skeleton`.

## Basic usage

The basic skeleton.

:::demo

skeleton/basic-usage

:::

## Configurable Rows

You can configure the row numbers yourself, for more precise rendering effect, the actual rendered row number will always be 1 row more than the given number, that is because we are rendering a title row with 33% width of the others.

:::demo

skeleton/configurable-rows

:::

## Animation

We have provided a switch flag indicating whether showing the loading animation, called `animated` when this is true, all children of `el-skeleton` will show animation

:::demo

skeleton/animation

:::

## Customized Template

Element Plus only provides the most common template, sometimes that could be a problem, so you have a slot named `template` to do that work.

Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference.

:::demo

skeleton/customized-template

:::

## Loading state

When `Loading` ends, we always need to show the real UI with data to our end users. with the attribtue `loading` we can control whether showing the DOM. You can also use slot `default` to structure the real DOM element.

:::demo

skeleton/loading-state

:::

## Rendering a list of data

Most of the time, skeleton is used as indicators of rendering a list of data which haven't been fetched from server yet, then we need to create a list of skeleton out of no where to make it look like it is loading, with `count` attribute, you can control how many these templates you need to render to the browser.

:::tip

We do not recommend rendering lots of fake UI to the browser, it will still cause the performance issue, it also costs longer to destroy the skeleton. Keep `count` as small as it can be to make better user experience.

:::

:::demo

skeleton/rendering-with-data

:::

## Avoiding rendering bouncing.

Sometimes API responds very quickly, when that happens, the skeleton just gets rendered to the DOM then it needs to switch back to real DOM, that causes the sudden flashy. To avoid such thing, you can use the `throttle` attribute.

:::demo

skeleton/avoiding-rendering-bouncing

:::

## Skeleton Attributes

| Attribute | Description                                                      | Type    | Acceptable Value | Default |
| --------- | ---------------------------------------------------------------- | ------- | ---------------- | ------- |
| animated  | whether showing the animation                                    | boolean | true / false     | false   |
| count     | how many fake items to render to the DOM                         | number  | integer          | 1       |
| loading   | whether showing the real DOM                                     | boolean | true / false     | false   |
| rows      | numbers of the row, only useful when no template slot were given | number  | integer          | 3       |
| throttle  | Rendering delay in millseconds                                   | number  | integer          | 0       |

## Skeleton Item Attributes

| Attribute | Description                         | Type         | Acceptable Value                                                     | Default |
| --------- | ----------------------------------- | ------------ | -------------------------------------------------------------------- | ------- |
| variant   | The current rendering skeleton type | Enum(string) | p / text / h1 / h3 / text / caption / button / image / circle / rect | text    |

## Skeleton Slots

| Name     | Description                        |
| -------- | ---------------------------------- |
| default  | Real rendering DOM                 |
| template | Custom rendering skeleton template |
