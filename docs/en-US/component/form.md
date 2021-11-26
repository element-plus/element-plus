---
title: Form
lang: en-US
---

# Form

Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data.

:::tip

The component has been upgraded with a flex layout to replace the old float layout.

:::

<style lang="scss" scoped>
.example-showcase {
  .el-select .el-input {
    width: 380px;
  }
  .el-form {
    width: 460px;
  }

  .line {
    text-align: center;
  }

  .el-checkbox-group {
    width: 320px;
    margin: 0;
    padding: 0;
    list-style: none;

    &:after,
    &:before {
      content: ' ';
      display: table;
    }
    &:after {
      clear: both;
      visibility: hidden;
      font-size: 0;
      height: 0;
    }

    .el-checkbox {
      float: left;
      width: 160px;
      padding-right: 20px;
      margin: 0;
      padding: 0;

      + .el-checkbox {
        margin-left: 0;
      }
    }
  }
  .demo-form-normal {
    width: 460px;
  }
  .demo-form-inline {
    width: auto;

    .el-input {
      width: 150px;
    }
    > * {
      margin-right: 10px;
    }
  }
  .demo-ruleForm {
    width: 460px;

    .el-select .el-input {
      width: 360px;
    }
  }
  .demo-dynamic {
    .el-input {
      margin-right: 10px;
      width: 270px;
      vertical-align: top;
    }
  }
  .fr {
    float: right;
  }
}
</style>

## Basic form

It includes all kinds of input items, such as `input`, `select`, `radio` and `checkbox`.

:::demo In each `form` component, you need a `form-item` field to be the container of your input item.

form/basic-form

:::

:::tip

[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) regulates that

> <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>

To prevent this behavior, you can add `@submit.prevent` on `<el-form>`.

:::

## Inline form

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

:::demo Just add the `rules` attribute for `Form` component, pass validation rules, and set `prop` attribute for `Form-Item` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).

form/validation

:::

## Custom validation rules

This example shows how to customize your own validation rules to finish a two-factor password verification.

:::demo Here we use `status-icon` to reflect validation result as an icon.

form/custom-validation

:::

:::tip

Custom validate callback function must be called. See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).

:::

## Delete or add form items dynamically

:::demo In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.

form/form-items

:::

## Number Validate

:::demo Number Validate need a `.number` modifier added on the input `v-model` binding，it's used to transform the string value to the number which is provided by Vuejs.

form/number-validate

:::

:::tip

When an `el-form-item` is nested in another `el-form-item`, its label width will be `0`. You can set `label-width` on that `el-form-item` if needed.

:::

## Size control

All components in a Form inherit their `size` attribute from that Form. Similarly, FormItem also has a `size` attribute.

:::demo Still you can fine tune each component's `size` if you don't want that component to inherit its size from From or FormItem.

form/size-control

:::

## Form Attributes

| Attribute               | Description                                                                                                                       | Type            | Accepted Values       | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------- | ------- |
| model                   | data of form component                                                                                                            | object          | —                     | —       |
| rules                   | validation rules of form                                                                                                          | object          | —                     | —       |
| inline                  | whether the form is inline                                                                                                        | boolean         | —                     | false   |
| label-position          | position of label. If set to 'left' or 'right', `label-width` prop is also required                                               | string          | left / right / top    | right   |
| label-width             | width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.                  | string / number | —                     | —       |
| label-suffix            | suffix of the label                                                                                                               | string          | —                     | —       |
| hide-required-asterisk  | whether required fields should have a red asterisk (star) beside their labels                                                     | boolean         | —                     | false   |
| show-message            | whether to show the error message                                                                                                 | boolean         | —                     | true    |
| inline-message          | whether to display the error message inline with the form item                                                                    | boolean         | —                     | false   |
| status-icon             | whether to display an icon indicating the validation result                                                                       | boolean         | —                     | false   |
| validate-on-rule-change | whether to trigger validation when the `rules` prop is changed                                                                    | boolean         | —                     | true    |
| size                    | control the size of components in this form                                                                                       | string          | medium / small / mini | —       |
| disabled                | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop | boolean         | —                     | false   |

## Form Methods

| Method        | Description                                                                                                                                                                                                                                                                      | Parameters                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | Function(callback: Function(boolean, object))                              |
| validateField | validate one or several form items                                                                                                                                                                                                                                               | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields   | reset all the fields and remove validation result                                                                                                                                                                                                                                | —                                                                          |
| scrollToField | Scroll to the specified form field                                                                                                                                                                                                                                               | Function(prop: string)                                                     |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared                                                     | Function(props: string \| array)                                           |

## Form Events

| Event Name | Description                             | Parameters                                                                                            |
| ---------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| validate   | triggers after a form item is validated | prop name of the form item being validated, whether validation is passed and the error message if not |

## Form Slots

| Name | Description                | Subtags   |
| ---- | -------------------------- | --------- |
| —    | customize of Dropdown Item | Form-Item |

## Form-Item Attributes

| Attribute      | Description                                                                                                                              | Type            | Accepted Values                     | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------- | ------- |
| prop           | a key of `model`. In the use of validate and resetFields method, the attribute is required                                               | string          | keys of model that passed to `form` |
| label          | label                                                                                                                                    | string          | —                                   | —       |
| label-width    | width of label, e.g. '50px'. Width `auto` is supported.                                                                                  | string / number | —                                   | —       |
| required       | whether the field is required or not, will be determined by validation rules if omitted                                                  | boolean         | —                                   | false   |
| rules          | validation rules of form, see the following table, more advanced usage at [async-validator](https://github.com/yiminghe/async-validator) | object / array  | —                                   | —       |
| error          | field error message, set its value and the field will validate error and show this message immediately                                   | string          | —                                   | —       |
| show-message   | whether to show the error message                                                                                                        | boolean         | —                                   | true    |
| inline-message | inline style validate message                                                                                                            | boolean         | —                                   | false   |
| size           | control the size of components in this form-item                                                                                         | string          | medium / small / mini               | —       |

## Rules

| Attribute | Description                    | Type   | Accepted Values | Default |
| --------- | ------------------------------ | ------ | --------------- | ------- |
| trigger   | how the validator is triggered | string | blur / change   | —       |

## Form-Item Slots

| Name  | Description                                                                    |
| ----- | ------------------------------------------------------------------------------ |
| —     | content of Form Item                                                           |
| label | Custom content to display on label. The scope parameter is { label }           |
| error | Custom content to display validation message. The scope parameter is { error } |

## Form-Item Methods

| Method        | Description                                      | Parameters |
| ------------- | ------------------------------------------------ | ---------- |
| resetField    | reset current field and remove validation result | —          |
| clearValidate | remove validation status of the field            | —          |
