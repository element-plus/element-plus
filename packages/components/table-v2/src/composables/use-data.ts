import { computed, ref, unref, watch } from 'vue'
import { isArray } from '@element-plus/utils'

import type { TableV2Props } from '../table'
import type { KeyType } from '../types'
import type { UseRowReturn } from './use-row'

type UseDataProps = {
  expandedRowKeys: UseRowReturn['expandedRowKeys']
  lastRenderedRowIndex: UseRowReturn['lastRenderedRowIndex']
  resetAfterIndex: UseRowReturn['resetAfterIndex']
}

export const useData = (
  props: TableV2Props,
  { expandedRowKeys, lastRenderedRowIndex, resetAfterIndex }: UseDataProps
) => {
  const depthMap = ref<Record<KeyType, number>>({})

  const flattenedData = computed(() => {
    const depths: Record<KeyType, number> = {}
    const { data, rowKey } = props

    const _expandedRowKeys = unref(expandedRowKeys)

    if (!_expandedRowKeys || !_expandedRowKeys.length) return data

    const array: any[] = []
    const keysSet = new Set()
    _expandedRowKeys.forEach((x) => keysSet.add(x))

    let copy: any[] = data.slice()
    copy.forEach((x) => (depths[x[rowKey]] = 0))
    while (copy.length > 0) {
      const item = copy.shift()!

      array.push(item)
      if (
        keysSet.has(item[rowKey]) &&
        isArray(item.children) &&
        item.children.length > 0
      ) {
        copy = [...item.children, ...copy]
        item.children.forEach(
          (child: any) => (depths[child[rowKey]] = depths[item[rowKey]] + 1)
        )
      }
    }

    depthMap.value = depths
    return array
  })

  const data = computed(() => {
    const { data, expandColumnKey } = props
    return expandColumnKey ? unref(flattenedData) : data
  })

  watch(data, (val, prev) => {
    if (val !== prev) {
      lastRenderedRowIndex.value = -1
      resetAfterIndex(0, true)
    }
  })

  return {
    data,
    depthMap,
  }
}

export type UseDataReturn = ReturnType<typeof useData>
