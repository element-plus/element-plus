import { computed, getCurrentInstance } from 'vue'
import memo from 'lodash/memoize'
import memoOne from 'memoize-one'

import type { VirtualizedProps } from '../props'

export const useCache = () => {
  const vm = getCurrentInstance()!

  const props = vm.proxy!.$props as VirtualizedProps

  return computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _getItemStyleCache = (_: any, __: any, ___: any) => ({})
    return props.perfMode
      ? memo(_getItemStyleCache)
      : memoOne(_getItemStyleCache)
  })
}
