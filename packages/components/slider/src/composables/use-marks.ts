import { computed } from 'vue'
import type { SliderProps } from '../slider'
import type { SliderMarkerProps } from '../marker'

export interface Mark extends SliderMarkerProps {
  point: number
  position: number
  snap: { min: number; max: number }
}

export const useMarks = (props: SliderProps) => {
  return computed(() => {
    if (!props.marks) {
      return []
    }
    const snapPercentage = Math.max(0, props.markSnapPercentage)

    const marksKeys = Object.keys(props.marks)
    return marksKeys
      .map(Number.parseFloat)
      .sort((a, b) => a - b)
      .filter((point) => point <= props.max && point >= props.min)
      .map((point): Mark => {
        const position = ((point - props.min) * 100) / (props.max - props.min)
        return {
          point,
          position,
          mark: props.marks![point],
          snap: {
            min: Math.max(0, position - snapPercentage),
            max: Math.min(100, position + snapPercentage),
          },
        }
      })
  })
}
