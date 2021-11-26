---
title: Button
lang: en-US
---

# Button

Commonly used button.

## Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

button/basic

:::

## Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

button/disabled

:::

## Text Button

Buttons without border and background.

:::demo

button/text

:::

## Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element Plus icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

button/icon

:::

## Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<el-button-group>` to group your buttons.

button/group

:::

## Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

button/loading

:::

## Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

button/size

:::

## Custom Color <el-tag>beta</el-tag>

You can custom button color.

We will calculate hover color & active color automatically.

:::demo

button/custom

:::

## Button Attributes

| Attribute         | Description                                                 | Type               | Accepted Values                                    | Default |
| ----------------- | ----------------------------------------------------------- | ------------------ | -------------------------------------------------- | ------- |
| size              | button size                                                 | string             | medium / small / mini                              | —       |
| type              | button type                                                 | string             | primary / success / warning / danger / info / text | —       |
| plain             | determine whether it's a plain button                       | boolean            | —                                                  | false   |
| round             | determine whether it's a round button                       | boolean            | —                                                  | false   |
| circle            | determine whether it's a circle button                      | boolean            | —                                                  | false   |
| loading           | determine whether it's loading                              | boolean            | —                                                  | false   |
| disabled          | disable the button                                          | boolean            | —                                                  | false   |
| icon              | icon component                                              | string / Component | —                                                  | —       |
| autofocus         | same as native button's `autofocus`                         | boolean            | —                                                  | false   |
| native-type       | same as native button's `type`                              | string             | button / submit / reset                            | button  |
| auto-insert-space | automatically insert a space between two chinese characters | boolean            |                                                    | —       |

## Button Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |

## Button-Group Attributes

| Attribute | Description                                      | Type   | Accepted Values             | Default |
| --------- | ------------------------------------------------ | ------ | --------------------------- | ------- |
| size      | control the size of buttons in this button-group | string | medium / small / mini       | —       |
| type      | control the type of buttons in this button-group | string | primary / success / warning | —       |

## Button-Group Slots

| Name | Description                    | Subtags |
| ---- | ------------------------------ | ------- |
| -    | customize button group content | Button  |

<style lang="scss">
.example-showcase {
  .el-row {
    margin-bottom: 20px;
    align-items: baseline;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-button + .el-button {
    margin-left: 10px;
  }
  .el-button-group {
    .el-button + .el-button {
      margin-left: 0;
    }

    & + .el-button-group {
      margin-left: 10px;
    }
  }
}

</style>
