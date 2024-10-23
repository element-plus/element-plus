import { nextTick, onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import type { SliderInitData, SliderProps } from '../slider'

export const useLifecycle = (
  props: SliderProps,
  initData: SliderInitData,
  resetSize: () => void,
  setFirstValue: (val: number) => void
) => {
  const sliderWrapper = ref<HTMLElement>()

  onMounted(async () => {
    if (props.range) {
      if (Array.isArray(props.modelValue)) {
        initData.firstValue = Math.max(props.min, props.modelValue[0])
        initData.secondValue = Math.min(props.max, props.modelValue[1])
      } else {
        initData.firstValue = props.min
        initData.secondValue = props.max
      }
      initData.oldValue = [initData.firstValue, initData.secondValue]
    } else {
      if (
        typeof props.modelValue !== 'number' ||
        Number.isNaN(props.modelValue)
      ) {
        setFirstValue(props.min)
      } else {
        const clampedValue = Math.min(
          props.max,
          Math.max(props.min, props.modelValue)
        )
        if (clampedValue !== props.modelValue) {
          setFirstValue(clampedValue)
        } else {
          initData.firstValue = clampedValue
        }
      }

      initData.oldValue = initData.firstValue
    }

    useEventListener(window, 'resize', resetSize)

    await nextTick()
    resetSize()
  })

  return {
    sliderWrapper,
  }
}
