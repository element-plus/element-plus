import { ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

export function useCalcInputWidth() {
  const calculatorRef = ref<HTMLElement>()
  const calculatorWidth = ref(0)

  const resetCalculatorWidth = () => {
    calculatorWidth.value =
      calculatorRef.value?.getBoundingClientRect().width ?? 0
  }

  useResizeObserver(calculatorRef, resetCalculatorWidth)

  return {
    calculatorRef,
    calculatorWidth,
  }
}
