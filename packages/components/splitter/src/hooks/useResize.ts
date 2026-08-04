import { computed, ref, watch } from 'vue'
import { clamp } from 'lodash-unified'
import { isPct, isPx, resolveLimit } from './useSize'
import { NOOP } from '@element-plus/utils'

import type { ComputedRef, Ref } from 'vue'
import type { PanelItemState } from '../type'

export function useResize(
  panels: Ref<PanelItemState[]>,
  containerSize: ComputedRef<number>,
  pxSizes: ComputedRef<number[]>,
  lazy: Ref<boolean>
) {
  const getLimitSize = (
    str: string | number | undefined,
    defaultLimit: number
  ) => resolveLimit(str, containerSize.value, defaultLimit)

  const lazyOffset = ref(0)
  const movingIndex = ref<{
    index: number
    confirmed: boolean
  } | null>(null)

  let cachePxSizes: number[] = []
  let updatePanelSizes = NOOP

  const limitSizes = computed(() =>
    panels.value.map((item) => [item.min, item.max])
  )

  watch(lazy, () => {
    if (lazyOffset.value) {
      const mouseup = new MouseEvent('mouseup', { bubbles: true })
      window.dispatchEvent(mouseup)
    }
  })

  const onMoveStart = (index: number) => {
    lazyOffset.value = 0
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
    lazyOffset.value = mergedOffset

    updatePanelSizes = () => {
      panels.value.forEach((panel, index) => {
        panel.size = numSizes[index]
        // Dragging a pinned panel is a deliberate resize, so it becomes the
        // new pinned width - including a drag right down to 0. Only the two
        // panels either side of this bar took part, though: a panel collapsed
        // elsewhere still reads 0 here and must keep the width it had.
        const isDragged = index === mergedIndex || index === nextIndex
        if (isDragged && panel.isFixedSize && numSizes[index] !== undefined) {
          panel.fixedPxSize = numSizes[index]
        }
      })
      updatePanelSizes = NOOP
    }

    if (!lazy.value) {
      updatePanelSizes()
    }
  }

  const onMoveEnd = () => {
    if (lazy.value) {
      updatePanelSizes()
    }

    lazyOffset.value = 0
    movingIndex.value = null
    cachePxSizes = []
  }

  // A panel's declared size mode (fixed pixel vs proportional) is read from
  // `panel.isFixedSize`, which is derived purely from its `size` prop and is
  // NOT affected by `panel.size` itself being overwritten with a live raw px
  // number while dragging/collapsing (see split-panel.vue).
  const px2ptg = (px: number) =>
    containerSize.value ? px / containerSize.value : 0
  const ptg2pxSize = (ptg: number) => ptg * containerSize.value

  interface CachedSize {
    value: number
    isRatio: boolean
  }

  const toCachedSize = (
    px: number,
    isFixed: boolean | undefined
  ): CachedSize =>
    isFixed
      ? { value: px, isRatio: false }
      : { value: px2ptg(px), isRatio: true }

  const cachedSizeToPx = (cached: CachedSize | undefined) =>
    cached ? (cached.isRatio ? ptg2pxSize(cached.value) : cached.value) : 0

  // Limits follow different unit rules to sizes: `getLimitSize` reads a bare
  // number or an "Npx" string as a literal pixel floor, and only a '%' string
  // scales with the container.
  const isFixedLimit = (limit: string | number | undefined) =>
    limit != null &&
    limit !== '' &&
    !isPct(limit) &&
    // `isPx` first: `Number('100px')` is NaN, which would otherwise class an
    // explicit pixel limit as proportional even though `resolveLimit` reads it
    // as a literal width.
    (isPx(limit) || !Number.isNaN(Number(limit)))

  // A panel whose *declared* size always resolves to 0 (e.g. "0%") has no
  // meaningful size of its own to remember - `min` is the real floor, so
  // classify by min's units instead of the (irrelevantly proportional) size.
  const isFixedForCache = (
    panel: PanelItemState | undefined,
    minLimit: string | number | undefined
  ) => (panel?.isZeroSize ? isFixedLimit(minLimit) : !!panel?.isFixedSize)

  // Keyed by *panel* index, not bar index: a middle panel can be collapsed
  // from one bar and expanded from the other, so its remembered size has to
  // belong to the panel itself rather than to whichever bar collapsed it.
  const cacheCollapsedSize: (CachedSize | undefined)[] = []
  const onCollapse = (index: number, type: 'start' | 'end') => {
    if (!cacheCollapsedSize.length) {
      cacheCollapsedSize.push(
        ...pxSizes.value.map((size, i) => {
          const minLimit = limitSizes.value[i]?.[0]
          const validSize = size <= 0 ? getLimitSize(minLimit, 0) : size
          return toCachedSize(
            validSize,
            isFixedForCache(panels.value[i], minLimit)
          )
        })
      )
    }

    const currentSizes = pxSizes.value

    const currentIndex = type === 'start' ? index : index + 1
    const targetIndex = type === 'start' ? index + 1 : index

    const currentSize = currentSizes[currentIndex]
    const targetSize = currentSizes[targetIndex]

    if (currentSize !== 0 && targetSize !== 0) {
      currentSizes[currentIndex] = 0
      currentSizes[targetIndex]! += currentSize
      if (panels.value[currentIndex]) {
        panels.value[currentIndex]!.isCollapsed = true
      }
      cacheCollapsedSize[currentIndex] = toCachedSize(
        currentSize,
        isFixedForCache(
          panels.value[currentIndex],
          limitSizes.value[currentIndex]?.[0]
        )
      )
    } else {
      // Whichever of the pair sits at 0 is the one being expanded; restore it
      // from its own cache entry and give the remainder to its neighbour.
      const collapsedIndex = currentSize === 0 ? currentIndex : targetIndex
      const totalSize = currentSize + targetSize

      const restoredSize = clamp(
        cachedSizeToPx(cacheCollapsedSize[collapsedIndex]),
        0,
        totalSize
      )

      // Restoring has to respect the same limits dragging enforces - a cached
      // ratio can otherwise land outside them once the container was resized
      // while the panel sat collapsed. Applied in the same order as onMoving
      // (start min, end min, start max, end max) so conflicting limits resolve
      // identically whether the size came from a drag or from an expand.
      const startIndex = index
      const endIndex = index + 1
      const startMinSize = getLimitSize(limitSizes.value[startIndex]?.[0], 0)
      const endMinSize = getLimitSize(limitSizes.value[endIndex]?.[0], 0)
      const startMaxSize = getLimitSize(
        limitSizes.value[startIndex]?.[1],
        containerSize.value || 0
      )
      const endMaxSize = getLimitSize(
        limitSizes.value[endIndex]?.[1],
        containerSize.value || 0
      )

      let startSize =
        collapsedIndex === startIndex ? restoredSize : totalSize - restoredSize

      startSize = Math.max(startSize, startMinSize)
      startSize = Math.min(startSize, totalSize - endMinSize)
      startSize = Math.min(startSize, startMaxSize)
      startSize = Math.max(startSize, totalSize - endMaxSize)
      startSize = clamp(startSize, 0, totalSize)

      currentSizes[startIndex] = startSize
      currentSizes[endIndex] = totalSize - startSize
      if (panels.value[collapsedIndex]) {
        panels.value[collapsedIndex]!.isCollapsed = false
      }
    }

    panels.value.forEach((panel, index) => {
      panel.size = currentSizes[index]
    })
  }

  return {
    lazyOffset,
    onMoveStart,
    onMoving,
    onMoveEnd,
    movingIndex,
    onCollapse,
  }
}
