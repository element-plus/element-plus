import type { InjectionKey } from 'vue'
import type { FormContext, FormItemContext } from './types'

export const formContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext | undefined> =
  Symbol('formItemContextKey')
