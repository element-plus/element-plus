import type { InjectionKey, Ref } from 'vue'

export const namespaceContextKey: InjectionKey<Ref<string | undefined>> =
  Symbol('namespaceContextKey')
