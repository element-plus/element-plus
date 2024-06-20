import type { InjectionKey, Ref } from 'vue'

export const zIndexContextKey: InjectionKey<Ref<number | undefined>> =
  Symbol('zIndexContextKey')
