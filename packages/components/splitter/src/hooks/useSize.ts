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
    const mutatedPanelIndexs: number[] = []
    const oldPropsSizes = oldVal[0]
    for (let i = 0; i < propSizes.value.length; i++) {
      if (propSizes.value[i] !== oldPropsSizes[i]) {
        mutatedPanelIndexs.push(i)
      }
    }
    const isNeedFreezeSize =
      mutatedPanelIndexs.length !== 0 &&
      mutatedPanelIndexs.length < panelCounts.value

    let ptgList: (number | undefined)[] = []
    let emptyCount = 0

    // Convert the passed props size to a percentage
    for (let i = 0; i < panelCounts.value; i += 1) {
      const itemSize = panels.value[i]?.size

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
    const freezedPtg = ptgList
      .filter((ptg, index) => mutatedPanelIndexs.includes(index))
      .reduce<number>((acc, ptg) => acc + (ptg || 0), 0)
    const distributablePtg = isNeedFreezeSize ? 1 - freezedPtg : 1

    if (distributablePtg < 0) {
      const scale = 1 / totalPtg
      ptgList = ptgList.map((ptg) => (ptg === undefined ? 0 : ptg * scale))
    } else if (emptyCount) {
      // If has empty count, fill the empty count with the average rest
      const avgRest = distributablePtg / emptyCount
      ptgList = ptgList.map((ptg, index) => {
        const isFreezed = mutatedPanelIndexs.includes(index)
        if (isFreezed) {
          return ptg
        }
        return ptg === undefined ? avgRest : ptg
      })
    } else {
      // If no empty count, scale the rest with the total percentage
      const notMutatedPtg = ptgList
        .filter((ptg, index) => !mutatedPanelIndexs.includes(index))
        .reduce<number>((acc, ptg) => acc + (ptg || 0), 0)
      const scale = distributablePtg / notMutatedPtg
      ptgList = ptgList.map((ptg, index) => {
        const isFreezed = mutatedPanelIndexs.includes(index)
        debugger
        if (isFreezed) {
          return ptg
        }
        return ptg === undefined ? 0 : ptg * scale
      })
    }
    percentSizes.value = ptgList as number[]
  })

  const ptg2px = (ptg: number) => ptg * containerSize.value
  const pxSizes = computed(() => percentSizes.value.map(ptg2px))

  return { percentSizes, pxSizes }
}
