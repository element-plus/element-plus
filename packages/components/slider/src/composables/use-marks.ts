import { computed, unref } from 'vue'
import { isArray } from '@element-plus/utils'

import type { SliderProps } from '../slider'
import type { SliderMarkerProps } from '../marker'

export interface Mark extends SliderMarkerProps {
  point: number
  position: number
}

export const useMarks = (props: SliderProps) => {
  return computed(() => {
    const marks = unref(props.marks)
    if (!marks) {
      return []
    }

    const min = unref(props.min)
    const max = unref(props.max)

    const marksKeys = isArray(marks)
      ? [...marks]
      : Object.keys(marks).map(Number.parseFloat)

    return marksKeys
      .sort((a, b) => a - b)
      .filter((point) => point <= max && point >= min)
      .map(
        (point): Mark => ({
          point,
          position: ((point - min) * 100) / (max - min),
          mark: isArray(marks) ? { style: {}, label: point } : marks[point],
        })
      )
  })
}
