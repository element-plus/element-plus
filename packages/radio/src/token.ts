import type { InjectionKey } from 'vue'

type IModelType = boolean | string | number

export interface RadioGroupContext {
  name: string
  changeEvent: (val: IModelType) => void
  radioGroupSize: ComponentSize
  fill: string
  textColor: string
  disabled: boolean
  modelValue: IModelType
}

const radioGroupKey: InjectionKey<RadioGroupContext> = 'RadioGroup' as any

export default radioGroupKey
