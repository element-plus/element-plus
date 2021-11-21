import { computed } from 'vue'
import { debugWarn } from '@element-plus/utils/error'
import type { SliderStates, SliderProps } from './slider'
import type { ComputedRef, CSSProperties } from 'vue'

export const useStops = (
  props: SliderProps,
  initData: SliderStates,
  minValue: ComputedRef<number>,
  maxValue: ComputedRef<number>
) => {
  const stops = computed(() => {
    if (!props.showStops || props.min > props.max) return []
    if (props.step === 0) {
      debugWarn('Slider', 'step should not be 0.')
      return []
    }

    const stopCount = (props.max - props.min) / props.step
    const stepWidth = (100 * props.step) / (props.max - props.min)
    const result = Array.from<number>({ length: stopCount - 1 }).map(
      (_, index) => (index + 1) * stepWidth
    )

    if (props.range) {
      return result.filter((step) => {
        return (
          step <
            (100 * (minValue.value - props.min)) / (props.max - props.min) ||
          step > (100 * (maxValue.value - props.min)) / (props.max - props.min)
        )
      })
    } else {
      return result.filter(
        (step) =>
          step >
          (100 * (initData.firstValue - props.min)) / (props.max - props.min)
      )
    }
  })

  const getStopStyle = (position: number) => {
    return (
      props.vertical ? { bottom: `${position}%` } : { left: `${position}%` }
    ) as CSSProperties
  }

  return {
    stops,
    getStopStyle,
  }
}
