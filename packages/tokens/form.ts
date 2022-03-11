import type { InjectionKey, SetupContext, UnwrapRef } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type {
  FormProps,
  FormEmits,
  FormItemProp,
  FormItemProps,
  FormValidateCallback,
  FormLabelWidthContext,
} from '@element-plus/components/form'
import type { Arrayable } from '@element-plus/utils'

export type FormContext = FormProps &
  UnwrapRef<FormLabelWidthContext> & {
    emit: SetupContext<FormEmits>['emit']

    // expose
    addField: (field: FormItemContext) => void
    removeField: (field: FormItemContext) => void
    resetFields: (props?: Arrayable<FormItemProp>) => void
    clearValidate: (props?: Arrayable<FormItemProp>) => void
    validateField: (
      props?: Arrayable<FormItemProp>,
      callback?: FormValidateCallback
    ) => Promise<void>
  }

export interface FormItemContext extends FormItemProps {
  $el: HTMLDivElement | undefined
  size: ComponentSize
  validateState: string
  validate: (trigger: string, callback?: FormValidateCallback) => Promise<void>
  resetField(): void
  clearValidate(): void
}

export const formContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')
