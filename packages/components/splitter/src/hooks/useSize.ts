import { computed, ref, watch } from 'vue'
import { isString } from '@element-plus/utils'

import type { ComputedRef, Ref } from 'vue'
import type { PanelItemState } from '../type'

export function getPct(str: string) {
  return Number(str.slice(0, -1)) / 100
}

export function getPx(str: string) {
  return Number(str.slice(0, -2))
}

export function isPct(
  itemSize: string | number | undefined | null
): itemSize is string {
  return isString(itemSize) && itemSize.endsWith('%')
}

export function isPx(
  itemSize: string | number | undefined | null
): itemSize is string {
  return isString(itemSize) && itemSize.endsWith('px')
}

// Only an explicit "Npx" string pins a panel to that literal pixel width. A
// bare number (`:size="100"`) is 100px initially and proportional afterwards,
// and a '%' string is always proportional - the unit is the signal of intent,
// per the API discussion in element-plus/element-plus#23016.
export function isFixedSize(
  itemSize: string | number | undefined | null
): boolean {
  return isPx(itemSize)
}

// Whether a *declared* size prop always resolves to exactly 0 (e.g. "0%",
// "0px", or 0), regardless of container size - unlike null/undefined/'' or a
// non-numeric value (auto-fill), which depend on siblings and aren't
// deterministically zero.
export function isZeroSize(
  itemSize: string | number | undefined | null
): boolean {
  if (itemSize == null || itemSize === '') return false
  if (isPct(itemSize)) return getPct(itemSize) === 0
  if (isPx(itemSize)) return getPx(itemSize) === 0
  return Number(itemSize) === 0
}

// Resolves a `min`/`max` to pixels against the current container: a '%' string
// tracks the container, a number or an "Npx" string is a literal pixel limit,
// and null/''/non-numeric mean "no limit".
export function resolveLimit(
  limit: string | number | undefined | null,
  containerSize: number,
  defaultLimit: number
): number {
  if (limit == null || limit === '') return defaultLimit
  if (isPct(limit)) return getPct(limit) * containerSize || 0
  if (isPx(limit)) return getPx(limit)
  const num = Number(limit)
  return Number.isNaN(num) ? defaultLimit : num
}

export function useSize(
  panels: Ref<PanelItemState[]>,
  containerSize: ComputedRef<number>
) {
  const propSizes = computed(() => panels.value.map((i) => i.size))

  const panelCounts = computed(() => panels.value.length)

  const percentSizes = ref<number[]>([])

  watch([propSizes, panelCounts, containerSize], () => {
    let ptgList: (number | undefined)[] = []
    let emptyCount = 0
    // Pixel width of each panel declared with an "Npx" size, captured here
    // because the normalisation below would otherwise dissolve it into a ratio
    const fixedPx: (number | undefined)[] = []

    // Convert the passed props size to a percentage
    for (let i = 0; i < panelCounts.value; i += 1) {
      const itemSize = panels.value[i]?.size

      // A pinned panel the user collapsed holds at 0 - re-pinning it to its
      // declared width would make it impossible to collapse. Both conditions
      // are needed: the flag alone would ignore a parent writing a real size
      // back, and a zero size alone would strand a panel that a neighbour's
      // expand merely squeezed to 0.
      fixedPx[i] =
        panels.value[i]?.isCollapsed && Number(itemSize) === 0
          ? 0
          : panels.value[i]?.fixedPxSize

      if (isPct(itemSize)) {
        ptgList[i] = getPct(itemSize)
      } else if (isPx(itemSize)) {
        ptgList[i] = getPx(itemSize) / containerSize.value
      } else if (itemSize || itemSize === 0) {
        const num = Number(itemSize)

        if (!Number.isNaN(num)) {
          ptgList[i] = num / containerSize.value
        }
      } else {
        emptyCount += 1
        ptgList[i] = undefined
      }
    }

    const totalPtg = ptgList.reduce<number>((acc, ptg) => acc + (ptg || 0), 0)

    if (totalPtg > 1 || !emptyCount) {
      // If it is greater than 1, the scaling ratio
      const scale = 1 / totalPtg
      ptgList = ptgList.map((ptg) => (ptg === undefined ? 0 : ptg * scale))
    } else {
      // If it is less than 1, the filling ratio
      const avgRest = (1 - totalPtg) / emptyCount
      ptgList = ptgList.map((ptg) => (ptg === undefined ? avgRest : ptg))
    }

    percentSizes.value = pinFixedPanels(ptgList as number[], fixedPx)
  })

  // A panel declared with an "Npx" size keeps that pixel width whatever the
  // container does. The width comes from the declared prop rather than the
  // panel's live `size`, which a drag or collapse overwrites - a panel that
  // absorbed a collapsed neighbour must not get pinned at the absorbed width.
  // The rest of the container is shared out among the other panels.
  function pinFixedPanels(
    ptgList: number[],
    fixedPxInput: (number | undefined)[]
  ): number[] {
    let fixedPx = fixedPxInput
    if (!containerSize.value) return ptgList
    if (!fixedPx.some((px) => px !== undefined)) return ptgList

    // `min`/`max` can be percentages, which move with the container, so a
    // stored pixel pin has to be re-checked against them on every pass. A pin
    // of 0 is a collapse or a deliberate drag shut, and stays put.
    fixedPx = fixedPx.map((px, i) => {
      if (px === undefined || px === 0) return px
      const panel = panels.value[i]
      const min = resolveLimit(panel?.min, containerSize.value, 0)
      const max = resolveLimit(
        panel?.max,
        containerSize.value,
        containerSize.value
      )
      return Math.min(Math.max(px, min), max)
    })

    const fixedTotal = fixedPx.reduce<number>((acc, px) => acc + (px ?? 0), 0)

    // Nothing left to share: pinned widths alone overflow the container, so
    // they give up space rather than pushing the others below zero. Each one
    // gives up only what it has above its own `min`, in proportion, so a
    // satisfiable minimum is kept while a roomier neighbour absorbs the rest.
    if (fixedTotal >= containerSize.value) {
      const floors = fixedPx.map((px, i) =>
        px === undefined
          ? undefined
          : Math.min(
              px,
              resolveLimit(panels.value[i]?.min, containerSize.value, 0)
            )
      )
      const floorTotal = floors.reduce<number>((acc, px) => acc + (px ?? 0), 0)

      // Not even the minimums fit - nothing can be honoured, so they shrink
      // together as before.
      if (floorTotal >= containerSize.value) {
        const scale = floorTotal ? containerSize.value / floorTotal : 0
        return ptgList.map((ptg, i) =>
          floors[i] === undefined
            ? 0
            : (floors[i]! * scale) / containerSize.value
        )
      }

      const overflow = fixedTotal - containerSize.value
      const totalRoom = fixedPx.reduce<number>(
        (acc, px, i) => acc + (px === undefined ? 0 : px - floors[i]!),
        0
      )

      return ptgList.map((ptg, i) => {
        if (fixedPx[i] === undefined) return 0
        const room = fixedPx[i]! - floors[i]!
        const given = totalRoom ? (overflow * room) / totalRoom : 0
        return (fixedPx[i]! - given) / containerSize.value
      })
    }

    const restPtg = ptgList.reduce<number>(
      (acc, ptg, i) => acc + (fixedPx[i] === undefined ? ptg : 0),
      0
    )
    // Nothing flexible is left to take up the slack - the other panels are
    // collapsed, or every panel is pinned. Holding the pinned widths here
    // would leave part of the container empty, so they share it out as before
    // and the pinned width comes back from the collapse cache on expand.
    if (!restPtg) return ptgList

    const restShare = (containerSize.value - fixedTotal) / containerSize.value

    return ptgList.map((ptg, i) =>
      fixedPx[i] === undefined
        ? (ptg / restPtg) * restShare
        : fixedPx[i]! / containerSize.value
    )
  }

  const ptg2px = (ptg: number) => ptg * containerSize.value
  const pxSizes = computed(() => percentSizes.value.map(ptg2px))

  return { percentSizes, pxSizes }
}
