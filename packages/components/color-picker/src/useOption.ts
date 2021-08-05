import { inject } from 'vue'

import type { ComputedRef } from 'vue'

export interface IUseOptions {
  currentColor: ComputedRef<string>
}

export const OPTIONS_KEY = Symbol()

export const useOptions = () => {
  return inject<IUseOptions>(OPTIONS_KEY)
}
