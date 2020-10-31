import type { InjectionKey } from 'vue'
import { ElFormItemSize } from '@element-plus/form/src/token'

type IModelType = boolean | string | number

export interface RadioGroupContext {
  name: string
  changeEvent: (val: IModelType) => void
  radioGroupSize: ElFormItemSize
  fill: string
  textColor: string
  disabled: boolean
  modelValue: IModelType
}

const radioGroupKey: InjectionKey<RadioGroupContext> = 'RadioGroup' as any

export default radioGroupKey
