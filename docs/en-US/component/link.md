# Link

Text hyperlink

<style lang="scss">

.example-showcase {
  .el-link {
    margin-right: 8px;
  }
}

</style>

## Basic

Basic text link

:::demo

link/basic

:::

## Disabled

Disabled state of link

:::demo

link/disabled

:::

## Underline

Underline of link

:::demo

link/underline

:::

## Icon

Link with icon

:::demo

link/with-icon

:::

## Attributes

| Attribute | Description                         | Type    | Accepted Values                             | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's `href`   | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |

## Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
