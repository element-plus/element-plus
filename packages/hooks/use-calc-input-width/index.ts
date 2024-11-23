import { computed, ref, shallowRef } from 'vue'
import { useResizeObserver } from '@vueuse/core'

export function useCalcInputWidth() {
  const calculatorRef = shallowRef<HTMLElement>()
  const calculatorWidth = ref(0)
  const MINIMUM_INPUT_WIDTH = 11

  const inputStyle = computed(() => ({
    minWidth: `${Math.max(calculatorWidth.value, MINIMUM_INPUT_WIDTH)}px`,
  }))

  const resetCalculatorWidth = () => {
    calculatorWidth.value =
      calculatorRef.value?.getBoundingClientRect().width ?? 0
  }

  useResizeObserver(calculatorRef, resetCalculatorWidth)

  return {
    calculatorRef,
    calculatorWidth,
    inputStyle,
  }
}
