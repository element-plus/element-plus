import { computed, ref } from 'vue'
import { getPct, getPx, isPct, isPx } from './useSize'

import type { ComputedRef, Ref } from 'vue'
import type { PanelItemState } from '../type'

export function useResize(
  panels: Ref<PanelItemState[]>,
  containerSize: ComputedRef<number>,
  pxSizes: ComputedRef<number[]>
) {
  const ptg2px = (ptg: number) => ptg * containerSize.value || 0

  function getLimitSize(
    str: string | number | undefined,
    defaultLimit: number
  ) {
    if (isPct(str)) {
      return ptg2px(getPct(str))
    } else if (isPx(str)) {
      return getPx(str)
    }
    return str ?? defaultLimit
  }

  const movingIndex = ref<{
    index: number
    confirmed: boolean
  } | null>(null)

  let cachePxSizes: number[] = []

  const limitSizes = computed(() =>
    panels.value.map((item) => [item.min, item.max])
  )

  const onMoveStart = (index: number) => {
    movingIndex.value = { index, confirmed: false }
    cachePxSizes = pxSizes.value
  }

  const onMoving = (index: number, offset: number) => {
    let confirmedIndex: number | null = null

    // When overlapping, find the nearest draggable index
    if ((!movingIndex.value || !movingIndex.value.confirmed) && offset !== 0) {
      if (offset > 0) {
        confirmedIndex = index
        movingIndex.value = { index, confirmed: true }
      } else {
        for (let i = index; i >= 0; i -= 1) {
          if (cachePxSizes[i]! > 0) {
            confirmedIndex = i
            movingIndex.value = { index: i, confirmed: true }
            break
          }
        }
      }
    }
    const mergedIndex = confirmedIndex ?? movingIndex.value?.index ?? index

    const numSizes = [...cachePxSizes]
    const nextIndex = mergedIndex + 1

    // Handle the maximum and minimum edge cases
    const startMinSize = getLimitSize(limitSizes.value[mergedIndex]![0], 0)
    const endMinSize = getLimitSize(limitSizes.value[nextIndex]![0], 0)
    const startMaxSize = getLimitSize(
      limitSizes.value[mergedIndex]![1],
      containerSize.value || 0
    )
    const endMaxSize = getLimitSize(
      limitSizes.value[nextIndex]![1],
      containerSize.value || 0
    )

    let mergedOffset = offset

    if (numSizes[mergedIndex]! + mergedOffset < startMinSize) {
      mergedOffset = startMinSize - numSizes[mergedIndex]!
    }
    if (numSizes[nextIndex]! - mergedOffset < endMinSize) {
      mergedOffset = numSizes[nextIndex]! - endMinSize
    }
    if (numSizes[mergedIndex]! + mergedOffset > startMaxSize) {
      mergedOffset = startMaxSize - numSizes[mergedIndex]!
    }
    if (numSizes[nextIndex]! - mergedOffset > endMaxSize) {
      mergedOffset = numSizes[nextIndex]! - endMaxSize
    }

    numSizes[mergedIndex]! += mergedOffset
    numSizes[nextIndex]! -= mergedOffset

    panels.value.forEach((panel, index) => {
      panel.size = numSizes[index]
    })
  }

  const onMoveEnd = () => {
    movingIndex.value = null
    cachePxSizes = []
  }

  const cacheCollapsedSize: number[] = []
  const onCollapse = (index: number, type: 'start' | 'end') => {
    const currentSizes = pxSizes.value

    const currentIndex = type === 'start' ? index : index + 1
    const targetIndex = type === 'start' ? index + 1 : index

    const currentSize = currentSizes[currentIndex]!
    const targetSize = currentSizes[targetIndex]!

    if (currentSize !== 0 && targetSize !== 0) {
      currentSizes[currentIndex] = 0
      currentSizes[targetIndex]! += currentSize
      cacheCollapsedSize[index] = currentSize
    } else {
      const totalSize = currentSize + targetSize

      const targetCacheCollapsedSize = cacheCollapsedSize[index]!
      const currentCacheCollapsedSize = totalSize - targetCacheCollapsedSize

      currentSizes[targetIndex] = targetCacheCollapsedSize
      currentSizes[currentIndex] = currentCacheCollapsedSize
    }

    panels.value.forEach((panel, index) => {
      panel.size = currentSizes[index]
    })
  }

  return { onMoveStart, onMoving, onMoveEnd, movingIndex, onCollapse }
}
