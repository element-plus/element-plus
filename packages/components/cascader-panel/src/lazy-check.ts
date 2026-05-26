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

const isSameOrDescendant = (node: Node, target: Node) =>
  node === target || node.pathNodes.includes(target)

export const hasLoadingDescendant = (node: CascaderNode): boolean =>
  !node.isDisabled &&
  !node.isLeaf &&
  node.children.some((child) => child.loading || hasLoadingDescendant(child))

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
      if (order < preserveOrder && isSameOrDescendant(lazyCheckNode, target)) {
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
      try {
        if (!(await loadNode(node))) return false
      } catch {
        return false
      }
    }

    const results = await Promise.all(node.children.map(loadDescendants))
    return results.every(Boolean)
  }

  const collectUnloadedDescendants = (node: Node): Node[] => {
    if (node.isDisabled || node.isLeaf) return []
    if (!node.loaded) return [node]

    return node.children.flatMap(collectUnloadedDescendants)
  }

  const handleLazyCheckChange: ElCascaderPanelContext['handleLazyCheckChange'] =
    async (node, checked, emitClose = true) => {
      const currentNode = node as Node

      if (
        checked === node.checked ||
        currentNode.loading ||
        hasLoadingDescendant(currentNode)
      )
        return false

      const currentCheckVersion = checkVersion
      const currentTask = createTask(currentNode, checked)
      const commitCheckChange = () =>
        commitTask(currentTask, () =>
          handleCheckChange(node, checked, emitClose)
        )
      const commitLoadedDescendants = (nodes: Node[]) =>
        commitTask(currentTask, () => {
          nodes.forEach((node) => {
            node.loaded && handleCheckChange(node, checked, emitClose)
          })
        })

      try {
        if (checked) {
          const unloadedDescendants = collectUnloadedDescendants(currentNode)

          commitCheckChange()

          const loaded = await loadDescendants(currentNode)
          if (isTaskStale(currentNode, currentCheckVersion, currentTask))
            return false
          commitLoadedDescendants(unloadedDescendants)
          if (!loaded) return false
        }

        if (!checked) {
          commitCheckChange()
        }
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
