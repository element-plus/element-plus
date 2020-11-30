import { computed, ComputedRef } from 'vue'
import { ISliderInitData, ISliderProps, Stops } from './slider.type'

export const useStops = (props: ISliderProps, initData: ISliderInitData, minValue: ComputedRef<number>, maxValue: ComputedRef<number>): Stops => {
  const stops = computed(() => {
    if (!props.showStops || props.min > props.max) return []
    if (props.step === 0) {
      process.env.NODE_ENV !== 'production' && console.warn('[Element Warn][Slider]step should not be 0.')
      return []
    }

    const stopCount = (props.max - props.min) / props.step
    const stepWidth = 100 * props.step / (props.max - props.min)
    const result = Array.from<number>({ length: stopCount - 1 }).map((_, index) => ((index + 1) * stepWidth))

    if (props.range) {
      return result.filter(step => {
        return step < 100 * (minValue.value - props.min) / (props.max - props.min)
          || step > 100 * (maxValue.value - props.min) / (props.max - props.min)
      })
    } else {
      return result.filter(step => step > 100 * (initData.firstValue - props.min) / (props.max - props.min))
    }
  })

  const getStopStyle = (position: number) => {
    return (props.vertical ? { 'bottom': position + '%' } : { 'left': position + '%' }) as CSSStyleDeclaration
  }

  return {
    stops,
    getStopStyle,
  }
}
