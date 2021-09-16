import { provide, ref } from 'vue'
import { addClass, removeClass } from '@element-plus/utils/dom'
import type { InjectionKey } from 'vue'
import type Node from './node'

interface TreeNode {
  node: Node
  $el?: HTMLElement
}

interface DragOptions {
  event: DragEvent
  treeNode: TreeNode
}

export interface DragEvents {
  treeNodeDragStart: (options: DragOptions) => void
  treeNodeDragOver: (options: DragOptions) => void
  treeNodeDragEnd: (event: DragEvent) => void
}

export const dragEventsKey: InjectionKey<DragEvents> = Symbol('dragEvents')

export function useDragNodeHandler({ props, ctx, el$, dropIndicator$, store }) {
  const dragState = ref({
    showDropIndicator: false,
    draggingNode: null,
    dropNode: null,
    allowDrop: true,
    dropType: null,
  })

  const treeNodeDragStart = ({ event, treeNode }: DragOptions) => {
    if (
      typeof props.allowDrag === 'function' &&
      !props.allowDrag(treeNode.node)
    ) {
      event.preventDefault()
      return false
    }
    event.dataTransfer.effectAllowed = 'move'

    // wrap in try catch to address IE's error when first param is 'text/plain'
    try {
      // setData is required for draggable to work in FireFox
      // the content has to be '' so dragging a node out of the tree won't open a new tab in FireFox
      event.dataTransfer.setData('text/plain', '')
    } catch (e) {}
    dragState.value.draggingNode = treeNode
    ctx.emit('node-drag-start', treeNode.node, event)
  }

  const treeNodeDragOver = ({ event, treeNode }: DragOptions) => {
    const dropNode = treeNode
    const oldDropNode = dragState.value.dropNode
    if (oldDropNode && oldDropNode !== dropNode) {
      removeClass(oldDropNode.$el, 'is-drop-inner')
    }
    const draggingNode = dragState.value.draggingNode
    if (!draggingNode || !dropNode) return

    let dropPrev = true
    let dropInner = true
    let dropNext = true
    let userAllowDropInner = true
    if (typeof props.allowDrop === 'function') {
      dropPrev = props.allowDrop(draggingNode.node, dropNode.node, 'prev')
      userAllowDropInner = dropInner = props.allowDrop(
        draggingNode.node,
        dropNode.node,
        'inner'
      )
      dropNext = props.allowDrop(draggingNode.node, dropNode.node, 'next')
    }
    event.dataTransfer.dropEffect = dropInner ? 'move' : 'none'
    if ((dropPrev || dropInner || dropNext) && oldDropNode !== dropNode) {
      if (oldDropNode) {
        ctx.emit('node-drag-leave', draggingNode.node, oldDropNode.node, event)
      }
      ctx.emit('node-drag-enter', draggingNode.node, dropNode.node, event)
    }

    if (dropPrev || dropInner || dropNext) {
      dragState.value.dropNode = dropNode
    }

    if (dropNode.node.nextSibling === draggingNode.node) {
      dropNext = false
    }
    if (dropNode.node.previousSibling === draggingNode.node) {
      dropPrev = false
    }
    if (dropNode.node.contains(draggingNode.node, false)) {
      dropInner = false
    }
    if (
      draggingNode.node === dropNode.node ||
      draggingNode.node.contains(dropNode.node)
    ) {
      dropPrev = false
      dropInner = false
      dropNext = false
    }

    const targetPosition = dropNode.$el.getBoundingClientRect()
    const treePosition = el$.value.getBoundingClientRect()

    let dropType
    const prevPercent = dropPrev ? (dropInner ? 0.25 : dropNext ? 0.45 : 1) : -1
    const nextPercent = dropNext ? (dropInner ? 0.75 : dropPrev ? 0.55 : 0) : 1

    let indicatorTop = -9999
    const distance = event.clientY - targetPosition.top
    if (distance < targetPosition.height * prevPercent) {
      dropType = 'before'
    } else if (distance > targetPosition.height * nextPercent) {
      dropType = 'after'
    } else if (dropInner) {
      dropType = 'inner'
    } else {
      dropType = 'none'
    }

    const iconPosition = dropNode.$el
      .querySelector('.el-tree-node__expand-icon')
      .getBoundingClientRect()
    const dropIndicator = dropIndicator$.value
    if (dropType === 'before') {
      indicatorTop = iconPosition.top - treePosition.top
    } else if (dropType === 'after') {
      indicatorTop = iconPosition.bottom - treePosition.top
    }
    dropIndicator.style.top = `${indicatorTop}px`
    dropIndicator.style.left = `${iconPosition.right - treePosition.left}px`

    if (dropType === 'inner') {
      addClass(dropNode.$el, 'is-drop-inner')
    } else {
      removeClass(dropNode.$el, 'is-drop-inner')
    }

    dragState.value.showDropIndicator =
      dropType === 'before' || dropType === 'after'
    dragState.value.allowDrop =
      dragState.value.showDropIndicator || userAllowDropInner
    dragState.value.dropType = dropType
    ctx.emit('node-drag-over', draggingNode.node, dropNode.node, event)
  }

  const treeNodeDragEnd = (event: DragEvent) => {
    const { draggingNode, dropType, dropNode } = dragState.value
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'

    if (draggingNode && dropNode) {
      const draggingNodeCopy = { data: draggingNode.node.data }
      if (dropType !== 'none') {
        draggingNode.node.remove()
      }
      if (dropType === 'before') {
        dropNode.node.parent.insertBefore(draggingNodeCopy, dropNode.node)
      } else if (dropType === 'after') {
        dropNode.node.parent.insertAfter(draggingNodeCopy, dropNode.node)
      } else if (dropType === 'inner') {
        dropNode.node.insertChild(draggingNodeCopy)
      }
      if (dropType !== 'none') {
        store.value.registerNode(draggingNodeCopy)
      }

      removeClass(dropNode.$el, 'is-drop-inner')

      ctx.emit(
        'node-drag-end',
        draggingNode.node,
        dropNode.node,
        dropType,
        event
      )
      if (dropType !== 'none') {
        ctx.emit('node-drop', draggingNode.node, dropNode.node, dropType, event)
      }
    }
    if (draggingNode && !dropNode) {
      ctx.emit('node-drag-end', draggingNode.node, null, dropType, event)
    }

    dragState.value.showDropIndicator = false
    dragState.value.draggingNode = null
    dragState.value.dropNode = null
    dragState.value.allowDrop = true
  }

  provide(dragEventsKey, {
    treeNodeDragStart,
    treeNodeDragOver,
    treeNodeDragEnd,
  })

  return {
    dragState,
  }
}
