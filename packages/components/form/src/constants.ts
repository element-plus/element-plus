import type { InjectionKey } from 'vue'
import type { FormContext, FormItemContext } from './types'

export const formContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')

export const undeclaredValue = Symbol('undeclared')
