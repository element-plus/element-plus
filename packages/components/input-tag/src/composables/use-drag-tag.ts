import { ref } from 'vue'
import { isUndefined } from '@element-plus/utils'

interface UseDragTagOptions {
  afterDragged: (draggedIndex: number, index: number) => void
}

export function useDragTag({ afterDragged }: UseDragTagOptions) {
  const draggedIndex = ref<number>()

  function handleDragStart(event: DragEvent, index: number) {
    draggedIndex.value = index
    event.dataTransfer!.effectAllowed = 'move'
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault()
    event.dataTransfer!.dropEffect = 'move'
  }

  function handleDrop(event: DragEvent, index: number) {
    if (isUndefined(draggedIndex.value)) return
    event.preventDefault()
    afterDragged(draggedIndex.value, index)
    draggedIndex.value = undefined
  }

  return {
    handleDragStart,
    handleDragOver,
    handleDrop,
  }
}
