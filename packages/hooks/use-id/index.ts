import { computed, inject, unref } from 'vue'
import isServer from '@element-plus/utils/isServer'
import { debugWarn } from '@element-plus/utils/error'

import type { InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'

export type ElIdInjectionContext = {
  prefix: number
  current: number
}

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
}

export const ID_INJECTION_KEY: InjectionKey<ElIdInjectionContext> =
  Symbol('elIdInjection')

export const useId = (deterministicId?: MaybeRef<string>): Ref<string> => {
  const idInjection = inject(ID_INJECTION_KEY, defaultIdInjection)

  if (isServer && idInjection === defaultIdInjection) {
    debugWarn(
      'IdInjection',
      `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`
    )
  }

  const idRef = computed(
    () =>
      unref(deterministicId) ||
      `el-id-${idInjection.prefix}-${idInjection.current++}`
  )

  return idRef
}
