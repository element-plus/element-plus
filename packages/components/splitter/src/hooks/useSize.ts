import { computed, ref, watch } from 'vue'
import { isString } from '@element-plus/utils'

import type { ComputedRef, Ref } from 'vue'
import type { OutOfBoundState, PanelItemState } from '../type'

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

  const panelCount = computed(() => panels.value.length)

  const percentSizes = ref<number[]>([])

  const sections = computed<[number, number][]>(() => {
    return panels.value.map((panel) => {
      return [
        panel.min ? parsePtg(panel.min, containerSize.value) : 0,
        panel.max ? parsePtg(panel.max, containerSize.value) : 1,
      ]
    })
  })

  watch([propSizes, panelCount, containerSize], (newVal, oldVal) => {
    if (containerSize.value === 0) {
      percentSizes.value = Array.of(panelCount.value).fill(0)
      return
    }
    let { ptgList, outOfBoundStates } = initPtgList(
      panelCount.value,
      panels.value,
      containerSize.value,
      sections.value
    )

    const emptyCount = ptgList.filter((ptg) => isEmptyPtg(ptg)).length
    const mutatedPanelIndexes: number[] = getMutatedPanelIndexes(
      oldVal[0],
      newVal[0]
    )
    const { mutatedPtg, notMutatedPtg, totalPtg } = groupPtgs(
      ptgList,
      mutatedPanelIndexes
    )
    const isNeedFreezeSize =
      mutatedPanelIndexes.length > 0 &&
      mutatedPanelIndexes.length < panelCount.value
    if (mutatedPtg > 1) {
      ptgList = assignPtgSquash({ totalPtg, ptgList, outOfBoundStates })
    } else if (emptyCount > 0) {
      // If has empty count, fill the empty count with the average rest
      ptgList = assignPtgToEmpty({
        ptgList,
        emptyCount,
        isNeedFreezeSize,
        mutatedPanelIndexes,
        totalPtg,
      })
    } else {
      // If no empty count, scale the rest with the total percentage
      ptgList = assignPtgScale({
        ptgList,
        mutatedPanelIndexes,
        isNeedFreezeSize,
        totalPtg,
        notMutatedPtg,
        mutatedPtg,
      })
    }
    percentSizes.value = ptgList as number[]
  })

  const ptg2px = (ptg: number) => ptg * containerSize.value
  const pxSizes = computed(() => percentSizes.value.map(ptg2px))

  return { percentSizes, pxSizes }
}

function assignPtgSquash({
  totalPtg,
  ptgList,
  outOfBoundStates,
}: {
  totalPtg: number
  ptgList: number[]
  outOfBoundStates: OutOfBoundState[]
}) {
  const approachBoundPtg = ptgList.reduce((acc, ptg, index) => {
    if (outOfBoundStates[index] !== undefined) {
      return acc + ptg
    }
    return acc
  }, 0)
  const scale = (1 - approachBoundPtg) / (totalPtg - approachBoundPtg)
  ptgList = ptgList.map((ptg, index) => {
    if (outOfBoundStates[index] !== undefined) {
      return ptg
    }
    return isEmptyPtg(ptg) ? 0 : ptg * scale
  })
  return ptgList
}

function isEmptyPtg(ptg: number | undefined): ptg is undefined | 0 {
  return ptg === undefined || ptg === 0
}

// Convert the passed props size to a percentage
function initPtgList(
  panelCount: number,
  panels: PanelItemState[],
  containerSize: number,
  sections: [number, number][]
) {
  const ptgList: number[] = []
  const outOfBoundStates: OutOfBoundState[] = []
  for (let i = 0; i < panelCount; i += 1) {
    const [min, max] = sections[i]
    const itemSize = panels[i]?.size
    let ptg = parsePtg(itemSize, containerSize)
    if (ptg < min) {
      ptg = min
      outOfBoundStates[i] = 0
    }
    if (ptg > max) {
      ptg = max
      outOfBoundStates[i] = 1
    }
    ptgList[i] = ptg
  }
  return { ptgList, outOfBoundStates }
}

function getMutatedPanelIndexes(
  oldVal: (string | number | undefined)[],
  newVal: (string | number | undefined)[]
) {
  const indexes: number[] = []
  for (const [i, oldPropsSize] of oldVal.entries()) {
    if (oldPropsSize !== newVal[i]) {
      indexes.push(i)
    }
  }
  return indexes
}

function assignPtgScale({
  ptgList,
  mutatedPanelIndexes,
  isNeedFreezeSize,
  totalPtg,
  notMutatedPtg,
  mutatedPtg,
}: {
  ptgList: number[]
  mutatedPanelIndexes: number[]
  isNeedFreezeSize: boolean
  totalPtg: number
  notMutatedPtg: number
  mutatedPtg: number
}) {
  const remainPtg = isNeedFreezeSize ? 1 - mutatedPtg : 1
  const scale = isNeedFreezeSize
    ? remainPtg / notMutatedPtg
    : remainPtg / totalPtg
  ptgList = ptgList.map((ptg, index) => {
    if (isNeedFreezeSize && mutatedPanelIndexes.includes(index)) {
      return ptg
    }
    return ptg! * scale
  })
  return ptgList
}

function assignPtgToEmpty({
  ptgList,
  emptyCount,
  isNeedFreezeSize,
  mutatedPanelIndexes,
  totalPtg,
}: {
  ptgList: number[]
  emptyCount: number
  isNeedFreezeSize: boolean
  mutatedPanelIndexes: number[]
  totalPtg: number
}) {
  const remainPtg = 1 - totalPtg
  const avgRest = remainPtg / emptyCount
  ptgList = ptgList.map((ptg, index) => {
    if (isNeedFreezeSize && mutatedPanelIndexes.includes(index)) {
      return ptg
    }
    return isEmptyPtg(ptg) ? avgRest : ptg
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
    return Number.isNaN(num) ? 0 : num / containerSize
  }

  return 0
}

function groupPtgs(
  ptgList: (number | undefined)[],
  mutatedPanelIndexes: number[]
) {
  const totalPtg = ptgList.reduce<number>((acc, cur) => acc + (cur || 0), 0)
  const mutatedPtgList = ptgList.filter((_, index) => {
    return mutatedPanelIndexes.includes(index)
  })
  const mutatedPtg = mutatedPtgList.reduce<number>(
    (acc, ptg) => acc + (ptg || 0),
    0
  )
  const notMutatedPtgList = ptgList.filter((_, index) => {
    return !mutatedPanelIndexes.includes(index)
  })
  const notMutatedPtg = notMutatedPtgList.reduce<number>(
    (acc, ptg) => acc + (ptg || 0),
    0
  )
  return {
    totalPtg,
    mutatedPtg,
    notMutatedPtg,
  }
}
