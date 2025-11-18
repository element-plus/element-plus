import { computed, ref, shallowRef } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { MINIMUM_INPUT_WIDTH } from '@element-plus/constants'

export function useCalcInputWidth() {
  const calculatorRef = shallowRef<HTMLElement>()
  const calculatorWidth = ref(0)

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
