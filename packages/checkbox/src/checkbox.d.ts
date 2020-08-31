import { ComputedRef, PropType } from 'vue'
export interface ICheckboxGroupInstance {
  name?: string
  modelValue?: ComputedRef
  disabled?: boolean
  min?: string | number
  max?: string | number
  size?: string
  fill?: string
  textColor?: string
  checkboxGroupSize?: ComputedRef<string>
  changeEvent?: (val: any) => void
}

export interface ICheckboxProps {
  modelValue: ICheckboxModelValue
  label?:ICheckboxLabel
  indeterminate?: boolean
  disabled?: boolean
  checked?: boolean
  name?: string
  trueLabel?: string| number
  falseLabel?: string| number
  id?: string
  controls?: string
  border?: boolean
  size?: string
}

export type ICheckboxLabel = PropType<string | boolean | number>
export type ICheckboxModelValue = PropType<string | boolean | number>

