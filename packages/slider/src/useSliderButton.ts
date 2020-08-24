import { ISliderButton, ISliderButtonProps, ISliderProvider } from './Slider'
import { computed, ComputedRef, inject, nextTick, ref, watch } from 'vue'


const useTooltip = (props:ISliderButtonProps, formatTooltip:(value:number) => number|string, showTooltip:ComputedRef<boolean>) => {

  // add type to tooltip after tooltip refactored
  const tooltip = ref(null)

  const tooltipVisible = ref(false)

  const enableFormat = computed(() => {
    return formatTooltip instanceof Function
  })

  const formatValue = computed(() => {
    return enableFormat.value && formatTooltip(props.modelValue) || props.modelValue
  })

  const displayTooltip = () => {
    showTooltip.value && (tooltipVisible.value = true)
  }

  const hideTooltip = () => {
    showTooltip.value && (tooltipVisible.value = false)
  }

  return {
    tooltip,
    tooltipVisible,
    formatValue,
    displayTooltip,
    hideTooltip,
  }
}


export const useSliderButton = (props, initData, emit):ISliderButton => {
  const {
    disabled,
    min,
    max,
    step,
    showTooltip,
    precision,
    sliderSize,
    formatTooltip,
    emitChange,
    resetSize,
    updateDragging,
  }:ISliderProvider = inject('SliderProvider')

  const {
    tooltip,
    tooltipVisible,
    formatValue,
    displayTooltip,
    hideTooltip,
  } = useTooltip(props, formatTooltip, showTooltip)

  const currentPosition = computed(() => {
    return `${ (props.modelValue - min.value) / (max.value - min.value) * 100 }%`
  })

  const wrapperStyle = computed(() => {
    return props.vertical ? { bottom: currentPosition.value } : { left: currentPosition.value }
  })


  const handleMouseEnter = () => {
    initData.hovering = true
    displayTooltip()
  }

  const handleMouseLeave = () => {
    initData.hovering = false
    hideTooltip()
  }

  const onButtonDown = (event:MouseEvent|TouchEvent) => {
    if (disabled.value) return
    event.preventDefault()
    onDragStart(event)
    window.addEventListener('mousemove', onDragging)
    window.addEventListener('touchmove', onDragging)
    window.addEventListener('mouseup', onDragEnd)
    window.addEventListener('touchend', onDragEnd)
    window.addEventListener('contextmenu', onDragEnd)
  }

  const onLeftKeyDown = () => {
    if (disabled.value) return
    initData.newPosition = parseFloat(currentPosition.value) - step.value / (max.value - min.value) * 100
    setPosition(initData.newPosition)
    emitChange()
  }

  const onRightKeyDown = () => {
    if (disabled.value) return
    initData.newPosition = parseFloat(currentPosition.value) + step.value / (max.value - min.value) * 100
    setPosition(initData.newPosition)
    emitChange()
  }

  const getClientXY = (event:MouseEvent|TouchEvent) => {
    let clientX:number
    let clientY:number
    if (event.type === 'touchstart') {
      clientY = (event as TouchEvent).touches[0].clientY
      clientX = (event as TouchEvent).touches[0].clientX
    } else {
      clientY = (event as MouseEvent).clientY
      clientX = (event as MouseEvent).clientX
    }
    return {
      clientX,
      clientY,
    }
  }

  const onDragStart = (event:MouseEvent|TouchEvent) => {
    initData.dragging = true
    initData.isClick = true
    const {
      clientX,
      clientY,
    } = getClientXY(event)
    if (props.vertical) {
      initData.startY =  clientY
    } else {
      initData.startX =  clientX
    }
    initData.startPosition = parseFloat(currentPosition.value)
    initData.newPosition = initData.startPosition
  }

  const onDragging = (event:MouseEvent|TouchEvent) => {
    if (initData.dragging) {
      initData.isClick = false
      displayTooltip()
      resetSize()
      let diff: number
      const {
        clientX,
        clientY,
      } = getClientXY(event)
      if (props.vertical) {
        initData.currentY = clientY
        diff = (initData.startY - initData.currentY) / sliderSize.value * 100
      } else {
        initData.currentX = clientX
        diff = (initData.currentX - initData.startX) / sliderSize.value * 100
      }
      initData.newPosition = initData.startPosition + diff
      setPosition(initData.newPosition)
    }
  }

  const onDragEnd = () => {
    if (initData.dragging) {
      /*
         * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
         * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
         */
      setTimeout(() => {
        initData.dragging = false
        hideTooltip()
        if (!initData.isClick) {
          setPosition(initData.newPosition)
          emitChange()
        }
      }, 0)
      window.removeEventListener('mousemove', onDragging)
      window.removeEventListener('touchmove', onDragging)
      window.removeEventListener('mouseup', onDragEnd)
      window.removeEventListener('touchend', onDragEnd)
      window.removeEventListener('contextmenu', onDragEnd)
    }
  }

  const setPosition = (newPosition:number) => {
    if (newPosition === null || isNaN(newPosition)) return
    if (newPosition < 0) {
      newPosition = 0
    } else if (newPosition > 100) {
      newPosition = 100
    }
    const lengthPerStep = 100 / ((max.value - min.value) / step.value)
    const steps = Math.round(newPosition / lengthPerStep)
    let value = steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value
    value = parseFloat(value.toFixed(precision.value))
    emit('update:modelValue', value)
    nextTick().then(() => {
      initData.dragging && displayTooltip()
      tooltip.value && tooltip.value.popperInstance.update()
    })
    if (!initData.dragging && props.modelValue !== initData.oldValue) {
      initData.oldValue = props.modelValue
    }
  }

  watch(() => initData.dragging, val => {
    updateDragging(val)
  })

  return {
    tooltip,
    tooltipVisible,
    showTooltip,
    wrapperStyle,
    formatValue,
    handleMouseEnter,
    handleMouseLeave,
    onButtonDown,
    onLeftKeyDown,
    onRightKeyDown,
    setPosition,
  }
}
