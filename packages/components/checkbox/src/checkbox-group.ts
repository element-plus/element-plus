import { computed, inject } from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { formContextKey, formItemContextKey } from '@element-plus/tokens'
import { useFormItemInputId } from '@element-plus/hooks'
import {
  buildProps,
  isBoolean,
  isNumber,
  isString,
  isValidComponentSize,
} from '@element-plus/utils'
import type { Component, ComputedRef, ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { FormContext, FormItemContext } from '@element-plus/tokens'
import type CheckboxGroup from './checkbox-group.vue'

export const checkboxGroupProps = buildProps({
  modelValue: {
    type: Array as PropType<Array<string | number>>,
    default: () => [],
  },
  disabled: Boolean,
  min: {
    type: Number,
    default: undefined,
  },
  max: {
    type: Number,
    default: undefined,
  },
  size: {
    type: String as PropType<ComponentSize>,
    validator: isValidComponentSize,
  },
  label: {
    type: String,
    default: undefined,
  },
  fill: {
    type: String,
    default: undefined,
  },
  textColor: {
    type: String,
    default: undefined,
  },
  tag: {
    type: [String, Object] as PropType<string | Component>,
    default: 'div',
  },
  // for internal use, form-item label id
  id: {
    type: String,
    default: undefined,
  },
})

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export const useCheckboxGroup = () => {
  const elForm = inject(formContextKey, {} as FormContext)
  const elFormItem = inject(formItemContextKey, {} as FormItemContext)
  const checkboxGroup = inject<CheckboxGroupProvider>('CheckboxGroup', {})
  const isGroup = computed(
    () => checkboxGroup && checkboxGroup?.name === 'ElCheckboxGroup'
  )
  const elFormItemSize = computed(() => {
    return elFormItem.size
  })

  return {
    isGroup,
    checkboxGroup,
    elForm,
    elFormItemSize,
    elFormItem,
  }
}

export const useCheckboxGroupId = (
  props: CheckboxGroupProps,
  { elFormItem }: Partial<ReturnType<typeof useCheckboxGroup>>
) => {
  const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
  })

  return {
    isLabeledByFormItem,
    groupId,
  }
}

export interface CheckboxGroupProvider {
  name?: string
  modelValue?: ComputedRef
  disabled?: ComputedRef<boolean>
  min?: ComputedRef<string | number>
  max?: ComputedRef<string | number>
  size?: ComputedRef<string>
  fill?: ComputedRef<string>
  textColor?: ComputedRef<string>
  checkboxGroupSize?: ComputedRef<ComponentSize>
  changeEvent?: (...args: any[]) => any
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits
export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>
