import { InjectionKey, Ref } from 'vue'

export const collapseTransitionOpenKey: InjectionKey<
  Ref<boolean> | boolean | undefined
> = Symbol('collapseTransitionOpenKey')
