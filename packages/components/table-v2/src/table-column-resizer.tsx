import {
  computed,
  defineComponent,
  onBeforeUnmount,
  ref,
  shallowRef,
  unref,
  watch,
  withModifiers,
} from 'vue'
import { NOOP } from '@vue/shared'
import { useNamespace } from '@element-plus/hooks'
import { tableV2ColumnResizerProps } from './column-resizer'

import type { TableV2ColumnResizerProps } from './column-resizer'

const COMPONENT_NAME = 'ColumnResizer'

const ColumnResizer = defineComponent({
  name: COMPONENT_NAME,
  props: tableV2ColumnResizerProps,
  setup(props) {
    const { resizerRef, onClick, onMousedown, onTouchStart, onDragEnd } =
      useColumnResizer(props)

    return () => (
      <div
        ref={resizerRef}
        onClick={onClick}
        onMousedown={onMousedown}
        onMouseup={onDragEnd}
        onTouchstart={onTouchStart}
        onTouchend={onDragEnd}
        style={props.style}
      />
    )
  },
})

function useColumnResizer(props: TableV2ColumnResizerProps) {
  const ns = useNamespace('')
  const isDragging = shallowRef(false)
  const resizerRef = ref<HTMLElement>()
  const width = shallowRef(0)
  const lastX = shallowRef<null | number>(null)
  const ownerDocument = computed(() => unref(resizerRef)?.ownerDocument)

  const onDragStart = withModifiers(() => {
    isDragging.value = true
    const column = props.column!
    width.value = column.width

    props.onResizeStart?.(column)
  }, ['left'])

  const addEvents = (
    drag: 'mousemove' | 'touchmove',
    end: 'mouseup' | 'touchend'
  ) => {
    const _ownerDocument = unref(ownerDocument)!

    if (!_ownerDocument) return
    _ownerDocument.addEventListener(drag, onDrag)
    _ownerDocument.addEventListener(end, onDragEnd)
  }

  const detachEvents = () => {
    const _ownerDocument = unref(ownerDocument)!

    if (!_ownerDocument) return
    _ownerDocument.removeEventListener('mousemove', onDrag)
    _ownerDocument.removeEventListener('touchmove', onDrag)
    _ownerDocument.removeEventListener('mouseup', onDragEnd)
    _ownerDocument.removeEventListener('touchend', onDragEnd)
  }

  const onDragEnd = () => {
    if (!unref(isDragging)) return
    const { column, onResizeStop } = props
    isDragging.value = false
    onResizeStop?.(column)
    detachEvents()
  }

  const onClick = withModifiers(NOOP, ['stop'])
  const onMousedown = (e: MouseEvent) => {
    onDragStart(e)
    addEvents('mousemove', 'mouseup')
  }

  const onTouchStart = (e: TouchEvent) => {
    onDragStart(e)
    addEvents('touchmove', 'touchend')
  }

  function onDrag(e: MouseEvent | TouchEvent) {
    const { type, preventDefault } = e
    let { clientX } = e as MouseEvent
    const { targetTouches } = e as TouchEvent
    if (type === 'touchmove') {
      preventDefault()
      if (targetTouches?.[0]) clientX = targetTouches[0].clientX
    }

    const { offsetParent } = unref(resizerRef)!
    const offsetParentRect = offsetParent!.getBoundingClientRect()
    const x = clientX + offsetParent!.scrollLeft - offsetParentRect.left

    const _lastX = unref(lastX)

    if (_lastX === null) {
      lastX.value = x
      return
    }

    const { column, minWidth: propMinWidth } = props
    const { width: columnWidth, maxWidth, minWidth = propMinWidth } = column!
    const movedX = x - _lastX
    if (!movedX) return

    width.value = columnWidth + movedX
    lastX.value = x

    let newWidth = unref(width)
    if (maxWidth && newWidth > maxWidth) {
      newWidth = maxWidth
    } else if (newWidth < minWidth) {
      newWidth = minWidth
    }

    if (newWidth === unref(width)) return
    props.onResize?.(column, newWidth)
  }

  watch(isDragging, (val) => {
    const _ownerDocument = unref(ownerDocument)
    if (!_ownerDocument) return

    if (val) {
      _ownerDocument.body.classList.add(`${unref(ns.namespace)}-dragging`)
    } else {
      _ownerDocument.body.classList.remove(`${unref(ns.namespace)}-dragging`)
    }
  })

  onBeforeUnmount(() => {
    detachEvents()
  })

  return {
    resizerRef,
    onClick,
    onMousedown,
    onTouchStart,
    onDragEnd,
  }
}

export default ColumnResizer
export { useColumnResizer }
