import { computed, inject, nextTick, ref, watch } from 'vue'
import { debounce } from 'lodash-unified'
import { useEventListener } from '@vueuse/core'
import { EVENT_CODE, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { sliderContextKey } from '../constants'

import type { CSSProperties, ComputedRef, Ref, SetupContext } from 'vue'
import type { SliderProps } from '../slider'
import type {
  SliderButtonEmits,
  SliderButtonInitData,
  SliderButtonProps,
} from '../button'
import type { TooltipInstance } from '@element-plus/components/tooltip'

const useTooltip = (
  props: SliderButtonProps,
  formatTooltip: Ref<SliderProps['formatTooltip']>,
  showTooltip: Ref<SliderProps['showTooltip']>
) => {
  const tooltip = ref<TooltipInstance>()

  const tooltipVisible = ref(false)

  const enableFormat = computed(() => {
    return formatTooltip.value instanceof Function
  })

  const formatValue = computed(() => {
    return (
      (enableFormat.value && formatTooltip.value!(props.modelValue)) ||
      props.modelValue
    )
  })

  const displayTooltip = debounce(() => {
    showTooltip.value && (tooltipVisible.value = true)
  }, 50)

  const hideTooltip = debounce(() => {
    showTooltip.value && (tooltipVisible.value = false)
  }, 50)

  return {
    tooltip,
    tooltipVisible,
    formatValue,
    displayTooltip,
    hideTooltip,
  }
}

type HTMLType = HTMLDivElement | undefined
type useSliderButtonType = (
  props: SliderButtonProps,
  initData: SliderButtonInitData,
  emit: SetupContext<SliderButtonEmits>['emit']
) => {
  disabled: Ref<boolean>
  button: Ref<HTMLType>
  tooltip: Ref<TooltipInstance | undefined>
  tooltipVisible: Ref<boolean>
  showTooltip: Ref<SliderProps['showTooltip']>
  persistent: Ref<SliderProps['persistent']>
  wrapperStyle: ComputedRef<CSSProperties>
  formatValue: ComputedRef<number | string>
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  onButtonDown: (event: MouseEvent | TouchEvent) => void
  onKeyDown: (event: KeyboardEvent) => void
  setPosition: (newPosition: number) => Promise<void>
}

export const useSliderButton: useSliderButtonType = (
  props: SliderButtonProps,
  initData: SliderButtonInitData,
  emit: SetupContext<SliderButtonEmits>['emit']
) => {
  const {
    disabled,
    min,
    max,
    step,
    showTooltip,
    persistent,
    precision,
    sliderSize,
    formatTooltip,
    emitChange,
    resetSize,
    updateDragging,
  } = inject(sliderContextKey)!

  const { tooltip, tooltipVisible, formatValue, displayTooltip, hideTooltip } =
    useTooltip(props, formatTooltip!, showTooltip)

  const button = ref<HTMLDivElement>()

  const currentPosition = computed(() => {
    return `${
      ((props.modelValue - min.value) / (max.value - min.value)) * 100
    }%`
  })

  const wrapperStyle: ComputedRef<CSSProperties> = computed(() => {
    return props.vertical
      ? { bottom: currentPosition.value }
      : { left: currentPosition.value }
  })

  const handleMouseEnter = () => {
    initData.hovering = true
    displayTooltip()
  }

  const handleMouseLeave = () => {
    initData.hovering = false
    if (!initData.dragging) {
      hideTooltip()
    }
  }

  const onButtonDown = (event: MouseEvent | TouchEvent) => {
    if (disabled.value) return
    event.preventDefault()
    onDragStart(event)
    window.addEventListener('mousemove', onDragging)
    window.addEventListener('touchmove', onDragging)
    window.addEventListener('mouseup', onDragEnd)
    window.addEventListener('touchend', onDragEnd)
    window.addEventListener('contextmenu', onDragEnd)
    button.value!.focus()
  }

  const incrementPosition = (amount: number) => {
    if (disabled.value) return
    initData.newPosition =
      Number.parseFloat(currentPosition.value) +
      (amount / (max.value - min.value)) * 100
    setPosition(initData.newPosition)
    emitChange()
  }

  const onLeftKeyDown = () => {
    incrementPosition(-step.value)
  }

  const onRightKeyDown = () => {
    incrementPosition(step.value)
  }

  const onPageDownKeyDown = () => {
    incrementPosition(-step.value * 4)
  }

  const onPageUpKeyDown = () => {
    incrementPosition(step.value * 4)
  }

  const onHomeKeyDown = () => {
    if (disabled.value) return
    setPosition(0)
    emitChange()
  }

  const onEndKeyDown = () => {
    if (disabled.value) return
    setPosition(100)
    emitChange()
  }

  const onKeyDown = (event: KeyboardEvent) => {
    let isPreventDefault = true

    switch (event.code) {
      case EVENT_CODE.left:
      case EVENT_CODE.down:
        onLeftKeyDown()
        break
      case EVENT_CODE.right:
      case EVENT_CODE.up:
        onRightKeyDown()
        break
      case EVENT_CODE.home:
        onHomeKeyDown()
        break
      case EVENT_CODE.end:
        onEndKeyDown()
        break
      case EVENT_CODE.pageDown:
        onPageDownKeyDown()
        break
      case EVENT_CODE.pageUp:
        onPageUpKeyDown()
        break
      default:
        isPreventDefault = false
        break
    }

    isPreventDefault && event.preventDefault()
  }

  const getClientXY = (event: MouseEvent | TouchEvent) => {
    let clientX: number
    let clientY: number
    if (event.type.startsWith('touch')) {
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

  const onDragStart = (event: MouseEvent | TouchEvent) => {
    initData.dragging = true
    initData.isClick = true
    const { clientX, clientY } = getClientXY(event)
    if (props.vertical) {
      initData.startY = clientY
    } else {
      initData.startX = clientX
    }
    initData.startPosition = Number.parseFloat(currentPosition.value)
    initData.newPosition = initData.startPosition
  }

  const onDragging = (event: MouseEvent | TouchEvent) => {
    if (initData.dragging) {
      initData.isClick = false
      displayTooltip()
      resetSize()
      let diff: number
      const { clientX, clientY } = getClientXY(event)
      if (props.vertical) {
        initData.currentY = clientY
        diff = ((initData.startY - initData.currentY) / sliderSize.value) * 100
      } else {
        initData.currentX = clientX
        diff = ((initData.currentX - initData.startX) / sliderSize.value) * 100
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
        if (!initData.hovering) {
          hideTooltip()
        }
        if (!initData.isClick) {
          setPosition(initData.newPosition)
        }
        emitChange()
      }, 0)
      window.removeEventListener('mousemove', onDragging)
      window.removeEventListener('touchmove', onDragging)
      window.removeEventListener('mouseup', onDragEnd)
      window.removeEventListener('touchend', onDragEnd)
      window.removeEventListener('contextmenu', onDragEnd)
    }
  }

  const setPosition = async (newPosition: number) => {
    if (newPosition === null || Number.isNaN(+newPosition)) return
    if (newPosition < 0) {
      newPosition = 0
    } else if (newPosition > 100) {
      newPosition = 100
    }
    const lengthPerStep = 100 / ((max.value - min.value) / step.value)
    const steps = Math.round(newPosition / lengthPerStep)
    let value =
      steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value
    value = Number.parseFloat(value.toFixed(precision.value))

    if (value !== props.modelValue) {
      emit(UPDATE_MODEL_EVENT, value)
    }

    if (!initData.dragging && props.modelValue !== initData.oldValue) {
      initData.oldValue = props.modelValue
    }

    await nextTick()
    initData.dragging && displayTooltip()
    tooltip.value!.updatePopper()
  }

  watch(
    () => initData.dragging,
    (val) => {
      updateDragging(val)
    }
  )

  useEventListener(button, 'touchstart', onButtonDown, { passive: false })

  return {
    disabled,
    button,
    tooltip,
    tooltipVisible,
    showTooltip,
    persistent,
    wrapperStyle,
    formatValue,
    handleMouseEnter,
    handleMouseLeave,
    onButtonDown,
    onKeyDown,
    setPosition,
  }
}
