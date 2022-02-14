import { computed, getCurrentInstance } from 'vue'
import { memoize } from 'lodash-unified'
import memoOne from 'memoize-one'

import type { VirtualizedProps } from '../props'

export const useCache = () => {
  const vm = getCurrentInstance()!

  const props = vm.proxy!.$props as VirtualizedProps

  return computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _getItemStyleCache = (_: any, __: any, ___: any) => ({})
    return props.perfMode
      ? memoize(_getItemStyleCache)
      : memoOne(_getItemStyleCache)
  })
}
