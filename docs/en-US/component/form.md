---
title: Form
lang: en-US
---

# Form

Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data.

:::tip

The component has been upgraded with a flex layout to replace the old float layout.

:::

## Basic Form

It includes all kinds of input items, such as `input`, `select`, `radio` and `checkbox`.

:::demo In each `form` component, you need a `form-item` field to be the container of your input item.

form/basic-form

:::

:::tip

[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) regulates that

> <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>

To prevent this behavior, you can add `@submit.prevent` on `<el-form>`.

:::

## Inline Form

When the vertical space is limited and the form is relatively simple, you can put it in one line.

:::demo Set the `inline` attribute to `true` and the form will be inline.

form/inline-form

:::

## Alignment

Depending on your design, there are several different ways to align your label element.

:::demo The `label-position` attribute decides how labels align, it can be `top` or `left`. When set to `top`, labels will be placed at the top of the form field.

form/alignment

:::

## Validation

Form component allows you to verify your data, helping you find and correct errors.

:::demo Just add the `rules` attribute for `Form` component, pass validation rules, and set `prop` attribute for `FormItem` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).

form/validation

:::

## Custom Validation Rules

This example shows how to customize your own validation rules to finish a two-factor password verification.

:::demo Here we use `status-icon` to reflect validation result as an icon.

form/custom-validation

:::

:::tip

Custom validate callback function must be called. See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).

:::

## Add/Delete Form Item

:::demo In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.

form/form-items

:::

## Number Validate

:::demo Number Validate need a `.number` modifier added on the input `v-model` binding，it's used to transform the string value to the number which is provided by Vue.

form/number-validate

:::

:::tip

When an `el-form-item` is nested in another `el-form-item`, its label width will be `0`. You can set `label-width` on that `el-form-item` if needed.

:::

## Size Control

All components in a Form inherit their `size` attribute from that Form. Similarly, FormItem also has a `size` attribute.

:::demo Still you can fine tune each component's `size` if you don't want that component to inherit its size from From or FormItem.

form/size-control

:::

## Accessibility

When only a single input (or related control such as select or checkbox) is inside of a `el-form-item`, the form item's label will automatically be attached to that input. However, if multiple inputs are inside of the `el-form-item`, the form item will be assigned the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role of [group](https://www.w3.org/TR/wai-aria/#group) instead. In this case, it is your responsibility to assign assistive labels to the individual inputs.

:::demo

form/accessibility

:::

## Form API

### Form Attributes

| Attribute                 | Description                                                                                                                    | Type                              | Default   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | --------- |
| `model`                   | Data of form component.                                                                                                        | `Record<string, any>`             | —         |
| `rules`                   | Validation rules of form.                                                                                                      | `FormRules`                       | —         |
| `inline`                  | Whether the form is inline.                                                                                                    | `boolean`                         | `false`   |
| `label-position`          | Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.                                       | `'left' \| 'right' \| 'top'`      | `'right'` |
| `label-width`             | Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.                   | `string \| number`                | —         |
| `label-suffix`            | Suffix of the label.                                                                                                           | `string`                          | —         |
| `hide-required-asterisk`  | Whether required fields should have a red asterisk (star) beside their labels.                                                 | `boolean`                         | `false`   |
| `show-message`            | Whether to show the error message.                                                                                             | `boolean`                         | `true`    |
| `inline-message`          | Whether to display the error message inline with the form item.                                                                | `boolean`                         | `false`   |
| `status-icon`             | Whether to display an icon indicating the validation result.                                                                   | `boolean`                         | `false`   |
| `validate-on-rule-change` | Whether to trigger validation when the `rules` prop is changed.                                                                | `boolean`                         | `true`    |
| `size`                    | Control the size of components in this form.                                                                                   | `'large' \| 'default' \| 'small'` | —         |
| `disabled`                | Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component. | `boolean`                         | `false`   |
| `scroll-to-error`         | When validation fails, scroll to the first error form entry.                                                                   | `boolean`                         | `false`   |

### Form Methods

| Method          | Description                                                        | Type                                                                                                                             |
| --------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `validate`      | Validate the whole form. Receives a callback or returns `Promise`. | `(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>`                                  |
| `validateField` | Validate specified fields.                                         | `(props?: Arrayable<FormItemProp>, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>` |
| `resetFields`   | Reset specified fields and remove validation result.               | `(props?: Arrayable<FormItemProp>) => void`                                                                                      |
| `scrollToField` | Scroll to the specified fields.                                    | `(prop: FormItemProp) => void`                                                                                                   |
| `clearValidate` | Clear validation message for specified fields.                     | `(props?: Arrayable<FormItemProp>) => void`                                                                                      |

### Form Events

| Event Name | Description                             | Parameters                                                        |
| ---------- | --------------------------------------- | ----------------------------------------------------------------- |
| `validate` | triggers after a form item is validated | `(prop: FormItemProp, isValid: boolean, message: string) => void` |

### Form Slots

| Name | Description               | Subtags  |
| ---- | ------------------------- | -------- |
| -    | customize default content | FormItem |

## Form Item API

### Form Item Attributes

| Attribute        | Description                                                                                                                                                   | Type                              | Default     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `prop`           | A key of `model`. It could be an array of property paths (e.g `['a', 'b', 0]`). In the use of `validate` and `resetFields` method, the attribute is required. | `string \| string[]`              | —           |
| `label`          | Label text.                                                                                                                                                   | `string`                          | —           |
| `label-width`    | Width of label, e.g. `'50px'`. `'auto'` is supported.                                                                                                         | `string \| number`                | —           |
| `required`       | Whether the field is required or not, will be determined by validation rules if omitted.                                                                      | `boolean`                         | `false`     |
| `rules`          | Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).    | `FormItemRule \| FormItemRule[]`  | —           |
| `error`          | Field error message, set its value and the field will validate error and show this message immediately.                                                       | `string`                          | —           |
| `show-message`   | Whether to show the error message.                                                                                                                            | `boolean`                         | `true`      |
| `inline-message` | Inline style validate message.                                                                                                                                | `boolean`                         | `false`     |
| `size`           | Control the size of components in this form-item.                                                                                                             | `'large' \| 'default' \| 'small'` | `'default'` |

#### FormItemRule

| Name      | Description                     | Type                 | Default |
| --------- | ------------------------------- | -------------------- | ------- |
| `trigger` | How the validator is triggered. | `'blur' \| 'change'` | —       |

### Form Item Slots

| Name    | Description                                   | Slot Scope  |
| ------- | --------------------------------------------- | ----------- |
| —       | Content of Form Item.                         | —           |
| `label` | Custom content to display on label.           | `{ label }` |
| `error` | Custom content to display validation message. | `{ error }` |

### Form Item Methods

| Method          | Description                                       | Type         |
| --------------- | ------------------------------------------------- | ------------ |
| `resetField`    | Reset current field and remove validation result. | `() => void` |
| `clearValidate` | Remove validation status of the field.            | `() => void` |
