import { type ShallowRef, ref, shallowRef } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { getStyle, isUndefined, setStyle } from '@element-plus/utils'

type DropType = 'before' | 'after'

interface UseDragTagOptions {
  wrapperRef: ShallowRef<HTMLElement | undefined>
  handleDragged: (
    draggingIndex: number,
    dropIndex: number,
    type: DropType
  ) => void
  afterDragged?: () => void
}

export function useDragTag({
  wrapperRef,
  handleDragged,
  afterDragged,
}: UseDragTagOptions) {
  const ns = useNamespace('input-tag')
  const dropIndicatorRef = shallowRef<HTMLElement>()
  const showDropIndicator = ref(false)

  let draggingIndex: number | undefined
  let draggingTag: HTMLElement | null
  let dropIndex: number | undefined
  let dropType: DropType | undefined

  function getTagClassName(index: number) {
    return `.${ns.e('inner')} .${ns.namespace.value}-tag:nth-child(${
      index + 1
    })`
  }

  function handleDragStart(event: DragEvent, index: number) {
    draggingIndex = index
    draggingTag = wrapperRef.value!.querySelector<HTMLElement>(
      getTagClassName(index)
    )

    if (draggingTag) {
      draggingTag.style.opacity = '0.5'
    }
    event.dataTransfer!.effectAllowed = 'move'
  }

  function handleDragOver(event: DragEvent, index: number) {
    dropIndex = index
    event.preventDefault()
    event.dataTransfer!.dropEffect = 'move'

    if (isUndefined(draggingIndex) || draggingIndex === index) {
      showDropIndicator.value = false
      return
    }

    const dropPosition = wrapperRef
      .value!.querySelector<HTMLElement>(getTagClassName(index))!
      .getBoundingClientRect()
    const dropPrev = !(draggingIndex + 1 === index)
    const dropNext = !(draggingIndex - 1 === index)
    const distance = event.clientX - dropPosition.left
    const prevPercent = dropPrev ? (dropNext ? 0.5 : 1) : -1
    const nextPercent = dropNext ? (dropPrev ? 0.5 : 0) : 1

    if (distance <= dropPosition.width * prevPercent) {
      dropType = 'before'
    } else if (distance > dropPosition.width * nextPercent) {
      dropType = 'after'
    } else {
      dropType = undefined
    }

    const innerEl = wrapperRef.value!.querySelector<HTMLElement>(
      `.${ns.e('inner')}`
    )!
    const innerPosition = innerEl.getBoundingClientRect()
    const gap = Number.parseFloat(getStyle(innerEl, 'gap')) / 2

    const indicatorTop = dropPosition.top - innerPosition.top
    let indicatorLeft = -9999

    if (dropType === 'before') {
      indicatorLeft = Math.max(
        dropPosition.left - innerPosition.left - gap,
        Math.floor(-gap / 2)
      )
    } else if (dropType === 'after') {
      const left = dropPosition.right - innerPosition.left
      indicatorLeft =
        left + (innerPosition.width === left ? Math.floor(gap / 2) : gap)
    }

    setStyle(dropIndicatorRef.value!, {
      top: `${indicatorTop}px`,
      left: `${indicatorLeft}px`,
    })
    showDropIndicator.value = !!dropType
  }

  function handleDragEnd(event: DragEvent) {
    event.preventDefault()

    if (draggingTag) {
      draggingTag.style.opacity = ''
    }

    if (
      dropType &&
      !isUndefined(draggingIndex) &&
      !isUndefined(dropIndex) &&
      draggingIndex !== dropIndex
    ) {
      handleDragged(draggingIndex, dropIndex, dropType)
    }

    showDropIndicator.value = false
    draggingIndex = undefined
    draggingTag = null
    dropIndex = undefined
    dropType = undefined
    afterDragged?.()
  }

  return {
    dropIndicatorRef,
    showDropIndicator,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  }
}
