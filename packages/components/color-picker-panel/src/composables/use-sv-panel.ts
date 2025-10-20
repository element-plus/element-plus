import { computed, getCurrentInstance, onMounted, ref, watch } from 'vue'
import { EVENT_CODE } from '@element-plus/constants'
import { useNamespace } from '@element-plus/hooks'
import { addUnit, getClientXY, getEventCode } from '@element-plus/utils'
import { draggable } from '../utils/draggable'

import type { SvPanelProps } from '../props/sv-panel'

export const useSvPanel = (props: SvPanelProps) => {
  const instance = getCurrentInstance()!

  const cursorRef = ref<HTMLElement>()
  const cursorTop = ref(0)
  const cursorLeft = ref(0)
  const background = ref('hsl(0, 100%, 50%)')

  const saturation = computed(() => props.color.get('saturation'))
  const brightness = computed(() => props.color.get('value'))
  const hue = computed(() => props.color.get('hue'))

  function handleClick(event: MouseEvent | TouchEvent) {
    if (props.disabled) return
    const target = event.target

    if (target !== cursorRef.value) {
      handleDrag(event)
    }
    cursorRef.value?.focus({ preventScroll: true })
  }

  function handleDrag(event: MouseEvent | TouchEvent) {
    if (props.disabled) return

    const el = instance.vnode.el!
    const rect = el.getBoundingClientRect()
    const { clientX, clientY } = getClientXY(event)

    let left = clientX - rect.left
    let top = clientY - rect.top
    left = Math.max(0, left)
    left = Math.min(left, rect.width)

    top = Math.max(0, top)
    top = Math.min(top, rect.height)

    cursorLeft.value = left
    cursorTop.value = top
    props.color.set({
      saturation: (left / rect.width) * 100,
      value: 100 - (top / rect.height) * 100,
    })
  }

  function handleKeydown(event: KeyboardEvent) {
    if (props.disabled) return
    const { shiftKey } = event
    const code = getEventCode(event)
    const step = shiftKey ? 10 : 1
    let isPreventDefault = true

    switch (code) {
      case EVENT_CODE.left:
        incrementSaturation(-step)
        break
      case EVENT_CODE.right:
        incrementSaturation(step)
        break
      case EVENT_CODE.up:
        incrementBrightness(step)
        break
      case EVENT_CODE.down:
        incrementBrightness(-step)
        break
      default:
        isPreventDefault = false
        break
    }

    isPreventDefault && event.preventDefault()
  }

  function incrementSaturation(step: number) {
    let next = saturation.value + step
    next = next < 0 ? 0 : next > 100 ? 100 : next
    props.color.set('saturation', next)
  }

  function incrementBrightness(step: number) {
    let next = brightness.value + step
    next = next < 0 ? 0 : next > 100 ? 100 : next
    props.color.set('value', next)
  }

  return {
    cursorRef,
    cursorTop,
    cursorLeft,
    background,
    saturation,
    brightness,
    hue,
    handleClick,
    handleDrag,
    handleKeydown,
  }
}

export const useSvPanelDOM = (
  props: SvPanelProps,
  {
    cursorTop,
    cursorLeft,
    background,
    handleDrag,
  }: Pick<
    ReturnType<typeof useSvPanel>,
    'cursorTop' | 'cursorLeft' | 'background' | 'handleDrag'
  >
) => {
  const instance = getCurrentInstance()!
  const ns = useNamespace('color-svpanel')

  function update() {
    const saturation = props.color.get('saturation')
    const brightness = props.color.get('value')

    const el = instance.vnode.el!
    const { clientWidth: width, clientHeight: height } = el

    cursorLeft.value = (saturation * width) / 100
    cursorTop.value = ((100 - brightness) * height) / 100

    background.value = `hsl(${props.color.get('hue')}, 100%, 50%)`
  }

  onMounted(() => {
    draggable(instance.vnode.el as HTMLElement, {
      drag: (event) => {
        handleDrag(event)
      },
      end: (event) => {
        handleDrag(event)
      },
    })

    update()
  })

  watch(
    [
      () => props.color.get('hue'),
      () => props.color.get('value'),
      () => props.color.value,
    ],
    () => update()
  )

  const rootKls = computed(() => ns.b())
  const cursorKls = computed(() => ns.e('cursor'))
  const rootStyle = computed(() => ({
    backgroundColor: background.value,
  }))
  const cursorStyle = computed(() => ({
    top: addUnit(cursorTop.value),
    left: addUnit(cursorLeft.value),
  }))

  return {
    rootKls,
    cursorKls,
    rootStyle,
    cursorStyle,
    update,
  }
}
