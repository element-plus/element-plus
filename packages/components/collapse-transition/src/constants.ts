import { InjectionKey, Ref } from 'vue'

export const collapseTransitionOpenKey: InjectionKey<Ref<boolean> | undefined> =
  Symbol('collapseTransitionOpenKey')
