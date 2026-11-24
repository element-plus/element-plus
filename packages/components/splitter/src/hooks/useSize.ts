import { computed, ref, watch } from 'vue'
import { isPercent, isPx, parsePx, percentToRatio } from '@element-plus/utils'

import type { ComputedRef, Ref } from 'vue'
import type { PanelItemState } from '../type'

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

    // Convert the passed props size to a percentage
    for (let i = 0; i < panelCounts.value; i += 1) {
      const itemSize = panels.value[i]?.size

      if (isPercent(itemSize)) {
        ptgList[i] = percentToRatio(itemSize)
      } else if (isPx(itemSize)) {
        ptgList[i] = parsePx(itemSize) / containerSize.value
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

    percentSizes.value = ptgList as number[]
  })

  const ptg2px = (ptg: number) => ptg * containerSize.value
  const pxSizes = computed(() => percentSizes.value.map(ptg2px))

  return { percentSizes, pxSizes }
}
