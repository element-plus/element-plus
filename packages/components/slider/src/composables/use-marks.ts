import { computed, watchEffect } from 'vue'
import { debugWarn } from '@element-plus/utils'

import type { SliderProps } from '../slider'
import type { SliderMarkerProps } from '../marker'

export interface Mark extends SliderMarkerProps {
  point: number
  position: number
}

export const useMarks = (props: SliderProps) => {
  watchEffect(() => {
    if (props.step === 'mark' && !props.marks) {
      debugWarn('ElSlider', 'marks prop must be provided when step is mark')
    }
    if (props.marks) {
      const keys = Object.keys(props.marks)
      const invalidKeys = keys.filter((key) => {
        const parsed = Number.parseFloat(key)
        return Number.isNaN(parsed) || parsed < props.min || parsed > props.max
      })
      if (invalidKeys.length > 0) {
        debugWarn(
          'ElSlider',
          `Some marks keys are invalid (not a number or out of [min, max]): [${invalidKeys.map((k) => `'${k}'`).join(', ')}] and will be ignored.`
        )
      }
    }
  })

  return computed(() => {
    if (!props.marks) {
      return []
    }

    const marksKeys = Object.keys(props.marks)
    return marksKeys
      .map(Number.parseFloat)
      .sort((a, b) => a - b)
      .filter((point) => point <= props.max && point >= props.min)
      .map(
        (point): Mark => ({
          point,
          position: ((point - props.min) * 100) / (props.max - props.min),
          mark: props.marks![point],
        })
      )
  })
}
