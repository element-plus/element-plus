import { computed, getCurrentInstance } from 'vue'
import { memoize } from 'lodash-unified'
import memoOne from 'memoize-one'
import type { ComputedRef } from 'vue'

import type { VirtualizedProps } from '../props'

type UseCacheReturnType = ComputedRef<
  | ReturnType<typeof memoize<(_: any, __: any, ___: any) => void>>
  | ReturnType<typeof memoOne<(_: any, __: any, ___: any) => void>>
>
export const useCache = (): UseCacheReturnType => {
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
