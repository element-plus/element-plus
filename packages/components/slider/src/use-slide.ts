import { computed, nextTick, ref, shallowRef } from 'vue'
import {
  CHANGE_EVENT,
  UPDATE_MODEL_EVENT,
  INPUT_EVENT,
} from '@element-plus/utils/constants'
import { useFormItem } from '@element-plus/hooks'
import type { SliderButtonInstance } from './slider-button'
import type { SliderProps, SliderEmits, SliderStates } from './slider'
import type { CSSProperties, SetupContext, Ref } from 'vue'

export const useSlide = (
  props: SliderProps,
  initData: SliderStates,
  emit: SetupContext<SliderEmits>['emit']
) => {
  const { formItem, disabled: sliderDisabled } = useFormItem({})

  const slider = shallowRef<HTMLElement>()

  const firstButton: Ref<SliderButtonInstance | undefined> = ref()

  const secondButton: Ref<SliderButtonInstance | undefined> = ref()

  const buttonRefs = {
    firstButton,
    secondButton,
  }

  const minValue = computed(() => {
    return Math.min(initData.firstValue, initData.secondValue)
  })

  const maxValue = computed(() => {
    return Math.max(initData.firstValue, initData.secondValue)
  })

  const barSize = computed(() => {
    return props.range
      ? `${
          (100 * (maxValue.value - minValue.value)) / (props.max - props.min)
        }%`
      : `${
          (100 * (initData.firstValue - props.min)) / (props.max - props.min)
        }%`
  })

  const barStart = computed(() => {
    return props.range
      ? `${(100 * (minValue.value - props.min)) / (props.max - props.min)}%`
      : '0%'
  })

  const runwayStyle = computed<CSSProperties>(() => {
    return props.vertical ? { height: props.height } : {}
  })

  const barStyle = computed<CSSProperties>(() => {
    return props.vertical
      ? {
          height: barSize.value,
          bottom: barStart.value,
        }
      : {
          width: barSize.value,
          left: barStart.value,
        }
  })

  const resetSize = () => {
    if (slider.value) {
      initData.sliderSize =
        slider.value[`client${props.vertical ? 'Height' : 'Width'}`]
    }
  }

  const setPosition = (percent: number) => {
    const targetValue = props.min + (percent * (props.max - props.min)) / 100
    if (!props.range) {
      firstButton.value!.setPosition(percent)
      return
    }
    let buttonRefName: string
    if (
      Math.abs(minValue.value - targetValue) <
      Math.abs(maxValue.value - targetValue)
    ) {
      buttonRefName =
        initData.firstValue < initData.secondValue
          ? 'firstButton'
          : 'secondButton'
    } else {
      buttonRefName =
        initData.firstValue > initData.secondValue
          ? 'firstButton'
          : 'secondButton'
    }
    buttonRefs[buttonRefName].value.setPosition(percent)
  }

  const setFirstValue = (firstValue: number) => {
    initData.firstValue = firstValue
    _emit(props.range ? [minValue.value, maxValue.value] : firstValue)
  }

  const setSecondValue = (secondValue: number) => {
    initData.secondValue = secondValue

    if (props.range) {
      _emit([minValue.value, maxValue.value])
    }
  }

  const _emit = (val: number | number[]) => {
    emit(UPDATE_MODEL_EVENT, val)
    emit(INPUT_EVENT, val)
  }

  const emitChange = async () => {
    await nextTick()
    emit(
      CHANGE_EVENT,
      props.range ? [minValue.value, maxValue.value] : props.modelValue
    )
  }

  const onSliderClick = (event: MouseEvent) => {
    if (sliderDisabled.value || initData.dragging) return
    resetSize()
    if (props.vertical) {
      const sliderOffsetBottom = slider.value!.getBoundingClientRect().bottom
      setPosition(
        ((sliderOffsetBottom - event.clientY) / initData.sliderSize) * 100
      )
    } else {
      const sliderOffsetLeft = slider.value!.getBoundingClientRect().left
      setPosition(
        ((event.clientX - sliderOffsetLeft) / initData.sliderSize) * 100
      )
    }
    emitChange()
  }

  return {
    formItem,
    slider,
    firstButton,
    secondButton,
    sliderDisabled,
    minValue,
    maxValue,
    runwayStyle,
    barStyle,
    resetSize,
    setPosition,
    emitChange,
    onSliderClick,
    setFirstValue,
    setSecondValue,
  }
}
