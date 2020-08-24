import { computed, inject, nextTick, ref,Ref, ComputedRef } from 'vue'
import { ISliderButton, ISliderInitData, ISliderProps, Slide } from './Slider'

export const useSlide = (props:ISliderProps, initData: ISliderInitData, emit):Slide => {
  const elForm:{ disabled?: boolean;} = inject('elForm', {})

  const slider = ref(null)

  const button1 = ref(null)

  const button2 = ref(null)

  const buttonRefs:{[s:string]:Ref<ISliderButton>;} = {
    button1,
    button2,
  }

  const sliderDisabled = computed(() => {
    return props.disabled || ((elForm || {}).disabled || false)
  })

  const minValue = computed(() => {
    return Math.min(initData.firstValue, initData.secondValue)
  })

  const maxValue = computed(() => {
    return Math.max(initData.firstValue, initData.secondValue)
  })

  const barSize:ComputedRef<string> = computed(() => {
    return props.range
      ? `${ 100 * (maxValue.value - minValue.value) / (props.max - props.min) }%`
      : `${ 100 * (initData.firstValue - props.min) / (props.max - props.min) }%`
  })

  const barStart:ComputedRef<string> = computed(() => {
    return props.range
      ? `${ 100 * (minValue.value - props.min) / (props.max - props.min) }%`
      : '0%'
  })

  const runwayStyle = computed(() => {
    return props.vertical ? { height: props.height } : {}
  })

  const barStyle = computed(() => {
    return props.vertical
      ? {
        height: barSize.value,
        bottom: barStart.value,
      } : {
        width: barSize.value,
        left: barStart.value,
      }
  })

  const resetSize = () => {
    if (slider.value) {
      initData.sliderSize = slider.value[`client${ props.vertical ? 'Height' : 'Width' }`]
    }
  }

  const setPosition = (percent:number) => {
    const targetValue = props.min + percent * (props.max - props.min) / 100
    if (!props.range) {
      button1.value.setPosition(percent)
      return
    }
    let buttonRefName:string
    if (Math.abs(minValue.value - targetValue) < Math.abs(maxValue.value - targetValue)) {
      buttonRefName = initData.firstValue < initData.secondValue ? 'button1' : 'button2'
    } else {
      buttonRefName = initData.firstValue > initData.secondValue ? 'button1' : 'button2'
    }
    buttonRefs[buttonRefName].value.setPosition(percent)
  }

  const emitChange = () => {
    nextTick().then(() => {
      emit('change', props.range ? [minValue.value, maxValue.value] : props.modelValue)
    })
  }

  const onSliderClick = (event:MouseEvent) => {
    if (sliderDisabled.value || initData.dragging) return
    resetSize()
    if (props.vertical) {
      const sliderOffsetBottom = slider.value.getBoundingClientRect().bottom
      setPosition((sliderOffsetBottom - event.clientY) / initData.sliderSize * 100)
    } else {
      const sliderOffsetLeft = slider.value.getBoundingClientRect().left
      setPosition((event.clientX - sliderOffsetLeft) / initData.sliderSize * 100)
    }
    emitChange()
  }

  return {
    slider,
    button1,
    button2,
    sliderDisabled,
    minValue,
    maxValue,
    runwayStyle,
    barStyle,
    resetSize,
    setPosition,
    emitChange,
    onSliderClick,
  }
}
