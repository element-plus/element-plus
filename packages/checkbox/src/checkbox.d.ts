import { ComputedRef } from 'vue'
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
  modelValue: string | boolean | number
  label?:string | boolean | number
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

export type IArgs<T extends (...args: any) => any> = Partial<ReturnType<T>>
