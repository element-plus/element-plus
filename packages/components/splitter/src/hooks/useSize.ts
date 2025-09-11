import { computed, ref, watch } from 'vue'
import { isString } from '@element-plus/utils'
import { isEqual } from 'lodash-unified'
import { PanelSizeFlags } from '../type'

import type { PanelItemState } from '../type'
import type { ComputedRef, Ref } from 'vue'

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
  const sizes = computed(() => panels.value.map((panel) => panel.size))
  const propSizes = computed(() =>
    panels.value.map((panel) => panel.props.size)
  )
  const panelCount = computed(() => panels.value.length)
  let pxSizesCache: number[] = []
  const percentSizes = ref<number[]>([])

  watch(
    [sizes, panelCount, containerSize],
    async ([newSizes, , newContainerSize], [oldSizes, , oldContainerSize]) => {
      const notExpand = newContainerSize === 0 && oldContainerSize === 0
      if (notExpand) {
        return
      }
      const panelSizeEqual = isEqual(pxSizesCache, newSizes)
      const containerSizeEqual = newContainerSize === oldContainerSize
      if (panelSizeEqual && containerSizeEqual) {
        return
      }
      const sections: [number | undefined, number | undefined][] = initSections(
        panels.value,
        containerSize.value
      )
      // Because ptg must be number, so the type of ptg is number neither number | undefined
      const ptgs = initPtgs({
        panels: panels.value,
        containerSize: containerSize.value,
        sections,
      })
      const propPtgs = initPropPtgs(propSizes.value, containerSize.value)
      const flags = initFlags(
        oldSizes.map((val) => {
          return parsePtg(val, containerSize.value)
        }),
        newSizes.map((val) => {
          return parsePtg(val, containerSize.value)
        }),
        ptgs,
        propPtgs,
        sections
      )

      const { ptgTotal } = getPtgs({
        ptgs,
        parse(ptg) {
          return ptg
        },
      })

      // Consume the restPtg
      // This is a priority list to ensure corresponding panel to consume restPtg, the first is the highest:
      // 1. has prop size, but panel size not match it
      // 2. not has prop size && not has min(when offset < 0)/max(when offset > 0) && not mutated
      // 3. not has min(when offset < 0)/max(when offset > 0) && not mutated
      // 4. not mutated
      // 5. every panel, force scale them
      const offset = 1 - ptgTotal
      let restPtg = Math.abs(offset)
      if (offset === 0) {
        return
      }
      const minOrMaxFlag = offset < 0 ? PanelSizeFlags.MIN : PanelSizeFlags.MAX
      const lockOrder = [
        (flag: PanelSizeFlags) => !(flag & PanelSizeFlags.NOT_MATCH_SIZED),
        (flag: PanelSizeFlags) =>
          flag & PanelSizeFlags.SIZED ||
          flag & minOrMaxFlag ||
          flag & PanelSizeFlags.MUTATED,
        (flag: PanelSizeFlags) =>
          flag & minOrMaxFlag || flag & PanelSizeFlags.MUTATED,
        (flag: PanelSizeFlags) => flag & PanelSizeFlags.MUTATED,
        () => false,
      ]
      let lockOrderIndex = 0
      // The value of restPtg maybe a number like 1.1102230246251565e-16, so compare restPtg with 0.001
      while (restPtg > 0.001 && lockOrderIndex < lockOrder.length) {
        const { ptgs: targetPtgs, ptgTotal: targetPtgTotal } = getPtgs({
          ptgs,
          parse(ptg, index) {
            const locked = lockOrder[lockOrderIndex](flags[index])
            if (locked) {
              return undefined
            }
            let result
            if (lockOrderIndex === 0) {
              const propPtg = propPtgs[index] ?? 0
              result =
                offset < 0
                  ? ptg > propPtg
                    ? ptg - propPtg
                    : 0
                  : ptg < propPtg
                  ? propPtg - ptg
                  : 0
            }
            if (lockOrderIndex > 0 && lockOrderIndex <= 2) {
              const [min, max] = sections[index]
              result = offset < 0 ? ptg - (min ?? 0) : (max ?? 1) - ptg
            }
            if (lockOrderIndex > 2) {
              result = ptg
            }
            return result === 0 ? undefined : result
          },
        })
        const needConsumePtg =
          targetPtgTotal > restPtg ? restPtg : targetPtgTotal
        restPtg = restPtg > needConsumePtg ? restPtg - needConsumePtg : 0
        ptgs.forEach((ptg, index) => {
          const targetPtg = targetPtgs[index]
          if (targetPtg === undefined) {
            return ptg
          }
          ptgs[index] =
            offset < 0
              ? ptg - (targetPtg / targetPtgTotal) * needConsumePtg
              : ptg + (targetPtg / targetPtgTotal) * needConsumePtg
          return
        })
        lockOrderIndex++
      }
      percentSizes.value = ptgs
      const pxs = ptgs.map((ptg) => ptg2px(ptg, containerSize.value))
      panels.value.forEach((panel, index) => {
        panel.size = pxs[index]
      })
      pxSizesCache = pxs
    }
  )
  const pxSizes = computed(() =>
    panels.value.map((panel) => {
      if (containerSize.value === 0) {
        return 0
      }
      return ptg2px(
        parsePtg(panel.size, containerSize.value) ?? 0,
        containerSize.value
      )
    })
  )
  return { percentSizes, pxSizes }
}

function initPropPtgs(
  propSizes: (string | number | undefined)[],
  containerSize: number
) {
  return propSizes.map((size) => {
    return parsePtg(size, containerSize)
  })
}

function initSections(
  panels: PanelItemState[],
  containerSize: number
): [number | undefined, number | undefined][] {
  return panels.map((panel) => {
    return [
      parsePtg(panel.min, containerSize),
      parsePtg(panel.max, containerSize),
    ] as [number | undefined, number | undefined]
  })
}

function ptg2px(ptg: number, containerSize: number) {
  return ptg * containerSize
}

// Convert the passed props size to a percentage and get out-of-bound state
function initPtgs({
  panels,
  containerSize,
  sections,
}: {
  panels: PanelItemState[]
  containerSize: number
  sections: [number | undefined, number | undefined][]
}) {
  return panels.map((panel, index) => {
    let [min, max] = sections[index]
    min = min ?? 0
    max = max ?? 1
    const size = panel?.size
    let ptg = parsePtg(size, containerSize) ?? 0
    const isCollapsed =
      (ptg === 0 && panel.collapsible.start) ||
      (ptg === 1 && panel.collapsible.end)
    if (ptg <= min && !isCollapsed) {
      ptg = min
    }
    if (ptg >= max && !isCollapsed) {
      ptg = max
    }
    return ptg
  })
}

function initFlags(
  oldSizes: (number | undefined)[],
  newSizes: (number | undefined)[],
  ptgs: (number | undefined)[],
  propPtgs: (number | undefined)[],
  sections: [number | undefined, number | undefined][]
) {
  const flags: number[] = []
  newSizes.forEach((newSize, index) => {
    if (newSize !== oldSizes[index]) {
      flags[index] = flags[index] | PanelSizeFlags.MUTATED
    }
  })
  ptgs.forEach((ptg, index) => {
    let [min, max] = sections[index]
    min = min ?? 0
    max = max ?? 1
    const propsPtg = propPtgs[index]
    if (ptg === (min ?? 0)) {
      flags[index] = flags[index] | PanelSizeFlags.MIN
    }
    if (ptg === (max ?? 1)) {
      flags[index] = flags[index] | PanelSizeFlags.MAX
    }
    if (propsPtg !== undefined) {
      flags[index] = flags[index] | PanelSizeFlags.SIZED
    }
    const propPtgValid =
      propsPtg !== undefined && propsPtg >= min && propsPtg <= max
    if (
      flags[index] & PanelSizeFlags.SIZED &&
      ptg !== propsPtg &&
      propPtgValid
    ) {
      flags[index] = flags[index] | PanelSizeFlags.NOT_MATCH_SIZED
    }
  })
  return flags
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

function getPtgs({
  ptgs,
  parse,
}: {
  ptgs: number[]
  // undefined: indicate no effect
  parse: (ptg: number, index: number) => number | undefined
}) {
  const _ptgs = ptgs.map((ptg, index) => {
    return parse(ptg, index)
  })
  return {
    ptgs: _ptgs,
    ptgTotal: _ptgs.reduce<number>((acc, ptg) => acc + (ptg ?? 0), 0),
  }
}
