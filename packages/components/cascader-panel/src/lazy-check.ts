import type Node from './node'
import type { CascaderNode, ElCascaderPanelContext } from './types'

type LoadNode = (node: Node) => Promise<boolean>
type HandleCheckChange = ElCascaderPanelContext['handleCheckChange']

interface LazyCheckTask {
  order: number
  version: number
}

interface LazyCheckOptions {
  loadNode: LoadNode
  handleCheckChange: HandleCheckChange
}

const isSameBranch = (node: Node, target: Node) =>
  node === target ||
  node.pathNodes.includes(target) ||
  target.pathNodes.includes(node)

export const createLazyCheck = ({
  loadNode,
  handleCheckChange,
}: LazyCheckOptions) => {
  let checkVersion = 0
  let checkOrder = 0
  let currentCommitOrder: number | undefined
  const nodeVersionMap = new Map<Node, number>()
  const activeNodeVersionMap = new Map<Node, number>()
  const activeNodeOrderMap = new Map<Node, number>()

  const invalidateAll = () => {
    checkVersion += 1
    nodeVersionMap.clear()
    activeNodeVersionMap.clear()
    activeNodeOrderMap.clear()
  }

  const invalidateBranchBefore = (
    node: CascaderNode,
    preserveOrder: number
  ) => {
    const target = node as Node

    activeNodeOrderMap.forEach((order, lazyCheckNode) => {
      if (order < preserveOrder && isSameBranch(lazyCheckNode, target)) {
        const version = nodeVersionMap.get(lazyCheckNode) ?? 0
        nodeVersionMap.set(lazyCheckNode, version + 1)
        activeNodeVersionMap.delete(lazyCheckNode)
        activeNodeOrderMap.delete(lazyCheckNode)
      }
    })
  }

  const invalidateBranch = (node: CascaderNode) => {
    invalidateBranchBefore(node, currentCommitOrder ?? Number.POSITIVE_INFINITY)
  }

  const createTask = (node: Node, active: boolean): LazyCheckTask => {
    const version = (nodeVersionMap.get(node) ?? 0) + 1
    const order = ++checkOrder
    nodeVersionMap.set(node, version)

    if (active) {
      activeNodeVersionMap.set(node, version)
      activeNodeOrderMap.set(node, order)
    } else {
      activeNodeVersionMap.delete(node)
      activeNodeOrderMap.delete(node)
    }

    invalidateBranchBefore(node, order)

    return {
      order,
      version,
    }
  }

  const finishTask = (node: Node, task: LazyCheckTask) => {
    if (activeNodeVersionMap.get(node) === task.version) {
      activeNodeVersionMap.delete(node)
      activeNodeOrderMap.delete(node)
    }
  }

  const commitTask = (task: LazyCheckTask, commit: () => void) => {
    const previousCommitOrder = currentCommitOrder
    currentCommitOrder = task.order
    try {
      commit()
    } finally {
      currentCommitOrder = previousCommitOrder
    }
  }

  const isTaskStale = (
    node: Node,
    currentCheckVersion: number,
    task: LazyCheckTask
  ) =>
    currentCheckVersion !== checkVersion ||
    task.version !== nodeVersionMap.get(node)

  const loadDescendants = async (node: Node): Promise<boolean> => {
    if (node.isDisabled || node.isLeaf) return true

    if (!node.loaded) {
      if (!(await loadNode(node))) return false
    }

    const results = await Promise.all(node.children.map(loadDescendants))
    return results.every(Boolean)
  }

  const handleLazyCheckChange: ElCascaderPanelContext['handleLazyCheckChange'] =
    async (node, checked, emitClose = true) => {
      const currentNode = node as Node
      const currentCheckVersion = checkVersion
      const currentTask = createTask(currentNode, checked)

      try {
        if (checked === node.checked) return false

        if (checked) {
          const loaded = await loadDescendants(currentNode)
          if (
            isTaskStale(currentNode, currentCheckVersion, currentTask) ||
            !loaded
          )
            return false
        }

        commitTask(currentTask, () =>
          handleCheckChange(node, checked, emitClose)
        )
        return true
      } finally {
        finishTask(currentNode, currentTask)
      }
    }

  const isPending = (node: CascaderNode) =>
    activeNodeVersionMap.has(node as Node)

  return {
    handleLazyCheckChange,
    invalidateAll,
    invalidateBranch,
    isPending,
  }
}
