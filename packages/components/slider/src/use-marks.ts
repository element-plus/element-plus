import { computed } from 'vue'
import type { SliderProps } from './slider'

export const useMarks = (props: SliderProps) => {
  return computed(() => {
    if (!props.marks) {
      return []
    }

    const marksKeys = Object.keys(props.marks)
    return marksKeys
      .map(parseFloat)
      .sort((a, b) => a - b)
      .filter((point) => point <= props.max && point >= props.min)
      .map((point) => ({
        point,
        position: ((point - props.min) * 100) / (props.max - props.min),
        mark: props.marks![point],
      }))
  })
}
