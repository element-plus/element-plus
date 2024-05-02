import { computed, getCurrentInstance } from 'vue'
import { memoize } from 'lodash-unified'
import memoOne from 'memoize-one'

import type { VirtualizedProps } from '../props'

export const useCache = <T>() => {
  const vm = getCurrentInstance()!

  const props = vm.proxy!.$props as VirtualizedProps

  return computed(() => {
    const _getItemStyleCache = (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _: any,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      __: any,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ___: any
    ): Record<string, T> => ({})
    return props.perfMode
      ? memoize(_getItemStyleCache)
      : memoOne(_getItemStyleCache)
  })
}
