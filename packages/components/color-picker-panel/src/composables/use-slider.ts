import {
  computed,
  getCurrentInstance,
  onMounted,
  ref,
  shallowRef,
  watch,
} from 'vue'
import { addUnit, getClientXY } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { EVENT_CODE } from '@element-plus/constants'
import { draggable } from '../utils/draggable'

import type { SliderProps } from '../props/slider'

interface UseSliderOptions {
  key: 'hue' | 'alpha'
  minValue: number
  maxValue: number
}

export const useSlider = (
  props: SliderProps,
  { key, minValue, maxValue }: UseSliderOptions
) => {
  const instance = getCurrentInstance()!

  const thumb = shallowRef<HTMLElement>()
  const bar = shallowRef<HTMLElement>()

  const currentValue = computed(() => props.color.get(key))

  function handleClick(event: MouseEvent | TouchEvent) {
    if (props.disabled) return
    const target = event.target

    if (target !== thumb.value) {
      handleDrag(event)
    }
    thumb.value?.focus()
  }

  function handleDrag(event: MouseEvent | TouchEvent) {
    if (!bar.value || !thumb.value || props.disabled) return

    const el = instance.vnode.el as HTMLElement
    const rect = el.getBoundingClientRect()
    const { clientX, clientY } = getClientXY(event)
    let value

    if (!props.vertical) {
      let left = clientX - rect.left
      left = Math.max(thumb.value.offsetWidth / 2, left)
      left = Math.min(left, rect.width - thumb.value.offsetWidth / 2)

      value = Math.round(
        ((left - thumb.value.offsetWidth / 2) /
          (rect.width - thumb.value.offsetWidth)) *
          maxValue
      )
    } else {
      let top = clientY - rect.top
      top = Math.max(thumb.value.offsetHeight / 2, top)
      top = Math.min(top, rect.height - thumb.value.offsetHeight / 2)

      value = Math.round(
        ((top - thumb.value.offsetHeight / 2) /
          (rect.height - thumb.value.offsetHeight)) *
          maxValue
      )
    }
    props.color.set(key, value)
  }

  function handleKeydown(event: KeyboardEvent) {
    if (props.disabled) return
    const { code, shiftKey } = event
    const step = shiftKey ? 10 : 1
    // NOTE: The hue slider is opposite in direction to the regular slider, so the hue slider has been reversed here.
    // But this is not the best way to handle it.
    const reverse = key === 'hue' ? -1 : 1
    let isPreventDefault = true

    switch (code) {
      case EVENT_CODE.left:
      case EVENT_CODE.down:
        incrementPosition(-step * reverse)
        break
      case EVENT_CODE.right:
      case EVENT_CODE.up:
        incrementPosition(step * reverse)
        break
      case EVENT_CODE.home:
        props.color.set(key, key === 'hue' ? maxValue : minValue)
        break
      case EVENT_CODE.end:
        props.color.set(key, key === 'hue' ? minValue : maxValue)
        break
      case EVENT_CODE.pageDown:
        incrementPosition(-4 * reverse)
        break
      case EVENT_CODE.pageUp:
        incrementPosition(4 * reverse)
        break
      default:
        isPreventDefault = false
        break
    }

    isPreventDefault && event.preventDefault()
  }

  function incrementPosition(step: number) {
    let next = currentValue.value + step
    next = next < minValue ? minValue : next > maxValue ? maxValue : next
    props.color.set(key, next)
  }

  return {
    thumb,
    bar,
    currentValue,
    handleDrag,
    handleClick,
    handleKeydown,
  }
}

interface UseSliderDOMOptions
  extends Pick<
    ReturnType<typeof useSlider>,
    'bar' | 'thumb' | 'currentValue' | 'handleDrag'
  > {
  namespace: string
  maxValue: number
  getBackground?: () => string
}

export const useSliderDOM = (
  props: SliderProps,
  {
    namespace,
    maxValue,
    bar,
    thumb,
    currentValue,
    handleDrag,
    getBackground,
  }: UseSliderDOMOptions
) => {
  const instance = getCurrentInstance()!
  const ns = useNamespace(namespace)

  const thumbLeft = ref(0)
  const thumbTop = ref(0)
  const background = ref<string>()

  function getThumbLeft() {
    if (!thumb.value) return 0

    if (props.vertical) return 0
    const el = instance.vnode.el
    const value = currentValue.value

    if (!el) return 0
    return Math.round(
      (value * (el.offsetWidth - thumb.value.offsetWidth / 2)) / maxValue
    )
  }

  function getThumbTop() {
    if (!thumb.value) return 0

    const el = instance.vnode.el
    if (!props.vertical) return 0
    const value = currentValue.value

    if (!el) return 0
    return Math.round(
      (value * (el.offsetHeight - thumb.value.offsetHeight / 2)) / maxValue
    )
  }

  function update() {
    thumbLeft.value = getThumbLeft()
    thumbTop.value = getThumbTop()
    background.value = getBackground?.()
  }

  onMounted(() => {
    if (!bar.value || !thumb.value) return

    const dragConfig = {
      drag: (event: MouseEvent | TouchEvent) => {
        handleDrag(event)
      },
      end: (event: MouseEvent | TouchEvent) => {
        handleDrag(event)
      },
    }

    draggable(bar.value, dragConfig)
    draggable(thumb.value, dragConfig)
    update()
  })

  watch(currentValue, () => update())

  watch(
    () => props.color.value,
    () => update()
  )

  const rootKls = computed(() => [
    ns.b(),
    ns.is('vertical', props.vertical),
    ns.is('disabled', props.disabled),
  ])
  const barKls = computed(() => ns.e('bar'))
  const thumbKls = computed(() => ns.e('thumb'))
  const barStyle = computed(() => ({ background: background.value }))
  const thumbStyle = computed(() => ({
    left: addUnit(thumbLeft.value),
    top: addUnit(thumbTop.value),
  }))

  return {
    rootKls,
    barKls,
    barStyle,
    thumbKls,
    thumbStyle,
    thumbLeft,
    thumbTop,
    update,
  }
}
