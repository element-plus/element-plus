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
  itemSize: string | number | undefined
): itemSize is string {
  return isString(itemSize) && itemSize.endsWith('%')
}

export function isPx(
  itemSize: string | number | undefined
): itemSize is string {
  return isString(itemSize) && itemSize.endsWith('px')
}

export function useSize(
  panels: Ref<PanelItemState[]>,
  containerSize: ComputedRef<number>
) {
  const propSizes = computed(() => panels.value.map((i) => i.size))

  const panelCounts = computed(() => panels.value.length)

  const percentSizes = ref<number[]>([])

  watch([propSizes, panelCounts, containerSize], (newVal, oldVal) => {
    const mutatedPanelIndexs: number[] = getMutatedPanelIndexs(
      oldVal[0],
      newVal[0]
    )
    const isNeedFreezeSize =
      mutatedPanelIndexs.length > 0 &&
      mutatedPanelIndexs.length < panelCounts.value

    let ptgList: (number | undefined)[] = []
    let emptyCount = 0

    // Convert the passed props size to a percentage
    for (let i = 0; i < panelCounts.value; i += 1) {
      const itemSize = panels.value[i]?.size
      const ptg = parsePtg(itemSize, containerSize.value)
      if (ptg === undefined) {
        emptyCount += 1
      }
      ptgList[i] = ptg
    }
    let freezedPtg: number = 0
    if (isNeedFreezeSize) {
      freezedPtg = ptgList
        .filter((_, index) => mutatedPanelIndexs.includes(index))
        .reduce<number>((acc, ptg) => acc + (ptg || 0), 0)
    }
    const totalPtg = ptgList.reduce<number>((acc, ptg) => acc + (ptg || 0), 0)
    const distributablePtg = isNeedFreezeSize ? 1 - freezedPtg : 1
    if (distributablePtg < 0) {
      const scale = 1 / totalPtg
      ptgList = ptgList.map((ptg) => (ptg === undefined ? 0 : ptg * scale))
    } else if (emptyCount > 0) {
      // If has empty count, fill the empty count with the average rest
      ptgList = assignPtgToEmpty(
        ptgList,
        distributablePtg,
        emptyCount,
        isNeedFreezeSize,
        mutatedPanelIndexs
      )
    } else {
      // If no empty count, scale the rest with the total percentage
      ptgList = assignPtgScale(
        ptgList,
        mutatedPanelIndexs,
        isNeedFreezeSize,
        distributablePtg,
        totalPtg
      )
    }
    percentSizes.value = ptgList as number[]
  })

  const ptg2px = (ptg: number) => ptg * containerSize.value
  const pxSizes = computed(() => percentSizes.value.map(ptg2px))

  return { percentSizes, pxSizes }
}

function getMutatedPanelIndexs(
  oldVal: (string | number | undefined)[],
  newVal: (string | number | undefined)[]
) {
  const indexs: number[] = []
  if (oldVal) {
    for (const [i, oldPropsSize] of oldVal.entries()) {
      if (oldPropsSize !== newVal[i]) {
        indexs.push(i)
      }
    }
  }
  return indexs
}

function assignPtgScale(
  ptgList: (number | undefined)[],
  mutatedPanelIndexs: number[],
  isNeedFreezeSize: boolean,
  distributablePtg: number,
  totalPtg: number
) {
  const notMutatedPtg = ptgList
    .filter((ptg, index) => !mutatedPanelIndexs.includes(index))
    .reduce<number>((acc, ptg) => acc + (ptg || 0), 0)
  const scale = isNeedFreezeSize
    ? distributablePtg / notMutatedPtg
    : 1 / totalPtg
  ptgList = ptgList.map((ptg, index) => {
    if (isNeedFreezeSize) {
      const isFreezed = mutatedPanelIndexs.includes(index)
      if (isFreezed) {
        return ptg
      }
    }
    return ptg === undefined ? 0 : ptg * scale
  })
  return ptgList
}

function assignPtgToEmpty(
  ptgList: (number | undefined)[],
  distributablePtg: number,
  emptyCount: number,
  isNeedFreezeSize: boolean,
  mutatedPanelIndexs: number[]
) {
  const notEmptyPtg = ptgList.reduce<number>(
    (acc, ptg) => (ptg === undefined ? acc : acc + ptg),
    0
  )
  const avgRest = (distributablePtg - notEmptyPtg) / emptyCount
  ptgList = ptgList.map((ptg, index) => {
    if (isNeedFreezeSize) {
      const isFreezed = mutatedPanelIndexs.includes(index)
      if (isFreezed) {
        return ptg
      }
    }
    return ptg === undefined ? avgRest : ptg
  })
  return ptgList
}

function parsePtg(
  itemSize: number | string | undefined,
  containerSize: number
) {
  if (isPct(itemSize)) {
    return getPct(itemSize)
  }

  if (isPx(itemSize)) {
    return getPx(itemSize) / containerSize
  }

  if (itemSize || itemSize === 0) {
    const num = Number(itemSize)
    return Number.isNaN(num) ? undefined : num / containerSize
  }

  return undefined
}
