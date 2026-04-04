import { computed, ref, shallowRef } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { MINIMUM_INPUT_WIDTH } from '@element-plus/constants'

import type { ShallowRef } from 'vue'

export function useCalcInputWidth(
  calculatorRef?: Readonly<ShallowRef<HTMLElement | null | undefined>>
) {
  const _calculatorRef = calculatorRef ?? shallowRef<HTMLElement>()
  const calculatorWidth = ref(0)

  const inputStyle = computed(() => ({
    minWidth: `${Math.max(calculatorWidth.value, MINIMUM_INPUT_WIDTH)}px`,
  }))

  const resetCalculatorWidth = () => {
    calculatorWidth.value =
      _calculatorRef.value?.getBoundingClientRect().width ?? 0
  }

  useResizeObserver(_calculatorRef, resetCalculatorWidth)

  return {
    calculatorRef: _calculatorRef,
    calculatorWidth,
    inputStyle,
  }
}
