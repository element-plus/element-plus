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

You can set `label-position` of `el-form-item` separately ^(2.7.7). If the value is empty, the `label-position` of `el-form` is used.

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

| Name                              | Description                                                                                                                                                                              | Type                                           | Default |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| model                             | Data of form component.                                                                                                                                                                  | ^[object]`Record<string, any>`                 | —       |
| rules                             | Validation rules of form.                                                                                                                                                                | ^[object]`FormRules`                           | —       |
| inline                            | Whether the form is inline.                                                                                                                                                              | ^[boolean]                                     | false   |
| label-position                    | Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.                                                                                                 | ^[enum]`'left' \| 'right' \| 'top'`            | right   |
| label-width                       | Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.                                                                             | ^[string] / ^[number]                          | ''      |
| label-suffix                      | Suffix of the label.                                                                                                                                                                     | ^[string]                                      | ''      |
| hide-required-asterisk            | Whether to hide required fields should have a red asterisk (star) beside their labels.                                                                                                   | ^[boolean]                                     | false   |
| require-asterisk-position         | Position of asterisk.                                                                                                                                                                    | ^[enum]`'left' \| 'right'`                     | left    |
| show-message                      | Whether to show the error message.                                                                                                                                                       | ^[boolean]                                     | true    |
| inline-message                    | Whether to display the error message inline with the form item.                                                                                                                          | ^[boolean]                                     | false   |
| status-icon                       | Whether to display an icon indicating the validation result.                                                                                                                             | ^[boolean]                                     | false   |
| validate-on-rule-change           | Whether to trigger validation when the `rules` prop is changed.                                                                                                                          | ^[boolean]                                     | true    |
| size                              | Control the size of components in this form.                                                                                                                                             | ^[enum]`'' \| 'large' \| 'default' \| 'small'` | —       |
| disabled                          | Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.                                                           | ^[boolean]                                     | false   |
| scroll-to-error                   | When validation fails, scroll to the first error form entry.                                                                                                                             | ^[boolean]                                     | false   |
| scroll-into-view-options ^(2.3.2) | When validation fails, it scrolls to the first error item based on the scrollIntoView option. [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView). | ^[object]`Record<string, any>` / ^[boolean]    | true    |

### Form Events

| Name     | Description                             | Type                                                                         |
| -------- | --------------------------------------- | ---------------------------------------------------------------------------- |
| validate | triggers after a form item is validated | ^[Function]`(prop: FormItemProp, isValid: boolean, message: string) => void` |

### Form Slots

| Name    | Description               | Subtags  |
| ------- | ------------------------- | -------- |
| default | customize default content | FormItem |

### Form Exposes

| Name            | Description                                                        | Type                                                                                                                              |
| --------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| validate        | Validate the whole form. Receives a callback or returns `Promise`. | ^[Function]`(callback?: FormValidateCallback) => Promise<void>`                                                                   |
| validateField   | Validate specified fields.                                         | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined, callback?: FormValidateCallback \| undefined) => FormValidationResult` |
| resetFields     | Reset specified fields and remove validation result.               | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined) => void`                                                               |
| scrollToField   | Scroll to the specified fields.                                    | ^[Function]`(prop: FormItemProp) => void`                                                                                         |
| clearValidate   | Clear validation messages for all or specified fields.             | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined) => void`                                                               |
| fields ^(2.7.3) | Get all fields context.                                            | ^[array]`FormItemContext[]`                                                                                                       |

## FormItem API

### FormItem Attributes

| Name                    | Description                                                                                                                                                            | Type                                                | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| prop                    | A key of `model`. It could be a path of the property (e.g `a.b.0` or `['a', 'b', '0']`). In the use of `validate` and `resetFields` method, the attribute is required. | ^[string] / ^[string&#91;&#93;]                     | —       |
| label                   | Label text.                                                                                                                                                            | ^[string]                                           | —       |
| label-position ^(2.7.7) | Position of item label. If set to `'left'` or `'right'`, `label-width` prop is also required. Default extend `label-postion` of `form`.                                | ^[enum]`'left' \| 'right' \| 'top'`                 | ''      |
| label-width             | Width of label, e.g. `'50px'`. `'auto'` is supported.                                                                                                                  | ^[string] / ^[number]                               | ''      |
| required                | Whether the field is required or not, will be determined by validation rules if omitted.                                                                               | ^[boolean]                                          | —       |
| rules                   | Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).             | ^[object]`Arrayable<FormItemRule>`                  | —       |
| error                   | Field error message, set its value and the field will validate error and show this message immediately.                                                                | ^[string]                                           | —       |
| show-message            | Whether to show the error message.                                                                                                                                     | ^[boolean]                                          | true    |
| inline-message          | Inline style validate message.                                                                                                                                         | ^[string] / ^[boolean]                              | ''      |
| size                    | Control the size of components in this form-item.                                                                                                                      | ^[enum]`'' \| 'large' \| 'default' \| 'small'`      | —       |
| for                     | Same as for in native label.                                                                                                                                           | ^[string]                                           | —       |
| validate-status         | Validation state of formItem.                                                                                                                                          | ^[enum]`'' \| 'error' \| 'validating' \| 'success'` | —       |

#### FormItemRule

| Name    | Description                     | Type                        | Default |
| ------- | ------------------------------- | --------------------------- | ------- |
| trigger | How the validator is triggered. | ^[enum]`'blur' \| 'change'` | —       |

:::tip

If you don't want to trigger the validator based on input events, set the `validate-event` attribute as `false` on the corresponding input type components (`<el-input>`, `<el-radio>`, `<el-select>`, ...).

:::

### FormItem Slots

| Name    | Description                                   | Type                         |
| ------- | --------------------------------------------- | ---------------------------- |
| default | Content of Form Item.                         | —                            |
| label   | Custom content to display on label.           | ^[object]`{ label: string }` |
| error   | Custom content to display validation message. | ^[object]`{ error: string }` |

### FormItem Exposes

| Name            | Description                                       | Type                                                                                                 |
| --------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| size            | Form item size.                                   | ^[object]`ComputedRef<'' \| 'large' \| 'default' \| 'small'>`                                        |
| validateMessage | Validation message.                               | ^[object]`Ref<string>`                                                                               |
| validateState   | Validation state.                                 | ^[object]`Ref<'' \| 'error' \| 'validating' \| 'success'>`                                           |
| validate        | Validate form item.                               | ^[Function]`(trigger: string, callback?: FormValidateCallback \| undefined) => FormValidationResult` |
| resetField      | Reset current field and remove validation result. | ^[Function]`() => void`                                                                              |
| clearValidate   | Remove validation status of the field.            | ^[Function]`() => void`                                                                              |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type Arrayable<T> = T | T[]

type FormValidationResult = Promise<boolean>

// ValidateFieldsError: see [async-validator](https://github.com/yiminghe/async-validator/blob/master/src/interface.ts)
type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => Promise<void> | void

// RuleItem: see [async-validator](https://github.com/yiminghe/async-validator/blob/master/src/interface.ts)
interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}

type Primitive = null | undefined | string | number | boolean | symbol | bigint
type BrowserNativeObject = Date | FileList | File | Blob | RegExp
type IsTuple<T extends ReadonlyArray<any>> = number extends T['length']
  ? false
  : true
type ArrayMethodKey = keyof any[]
type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, ArrayMethodKey>
type ArrayKey = number
type PathImpl<K extends string | number, V> = V extends
  | Primitive
  | BrowserNativeObject
  ? `${K}`
  : `${K}` | `${K}.${Path<V>}`
type Path<T> = T extends ReadonlyArray<infer V>
  ? IsTuple<T> extends true
    ? {
        [K in TupleKey<T>]-?: PathImpl<Exclude<K, symbol>, T[K]>
      }[TupleKey<T>]
    : PathImpl<ArrayKey, V>
  : {
      [K in keyof T]-?: PathImpl<Exclude<K, symbol>, T[K]>
    }[keyof T]
type FieldPath<T> = T extends object ? Path<T> : never
// MaybeRef: see [@vueuse/core](https://github.com/vueuse/vueuse/blob/main/packages/shared/utils/types.ts)
// UnwrapRef: see [vue](https://github.com/vuejs/core/blob/main/packages/reactivity/src/ref.ts)
type FormRules<T extends MaybeRef<Record<string, any> | string> = string> =
  Partial<
    Record<
      UnwrapRef<T> extends string ? UnwrapRef<T> : FieldPath<UnwrapRef<T>>,
      Arrayable<FormItemRule>
    >
  >

type FormItemValidateState = typeof formItemValidateStates[number]
type FormItemProps = ExtractPropTypes<typeof formItemProps>

type FormItemContext = FormItemProps & {
  $el: HTMLDivElement | undefined
  size: ComponentSize
  validateState: FormItemValidateState
  isGroup: boolean
  labelId: string
  inputIds: string[]
  hasLabel: boolean
  fieldValue: any
  addInputId: (id: string) => void
  removeInputId: (id: string) => void
  validate: (
    trigger: string,
    callback?: FormValidateCallback
  ) => FormValidationResult
  resetField(): void
  clearValidate(): void
}
```

</details>
