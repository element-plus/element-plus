import type { SetupContext } from 'vue'
import type Node from './node'
import type { ElFunc, RootTreeType, TreeKey, TreeNodeData } from '../tree.type'

export const NODE_KEY = '$treeNodeId'

export const markNodeData = function (
  node: Node,
  data: TreeNodeData | null
): void {
  if (!data || data[NODE_KEY]) return
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false,
  })
}

export const getNodeKey = (key: TreeKey | undefined, data: TreeNodeData) =>
  data?.[key || NODE_KEY]

export const handleCurrentChange = (
  store: RootTreeType['store'],
  emit: SetupContext['emit'],
  setCurrent: () => void
) => {
  const preCurrentNode = store.value.currentNode
  setCurrent()
  const currentNode = store.value.currentNode
  if (preCurrentNode === currentNode) return

  emit('current-change', currentNode ? currentNode.data : null, currentNode)
}

/**
 * 当有节点 disabled=true，并在半选状态下 checkbox 为 checked=false，当再次点击节点时变为 checked=true，是导致节点需要点击两次才会更新状态的原因；
 * 解决办法：在半选状态下 input 的 checked 应为 true，当再次点击时 checked 就会变为 false；
 **/
export const updateNodeElementPartially = (
  node: Node,
  $el: ElFunc | undefined,
  half?: boolean,
  all?: boolean
) => {
  setTimeout(() => {
    if ($el && !all && node.store.isAnyDisabledNode) {
      const treeNodeEl = ($el()?.value as HTMLElement).querySelector(
        `.el-tree-node[data-key="${node.key || node.id}"]`
      )
      const nodeContentEl = treeNodeEl?.querySelector('.el-tree-node__content')
      const checkbox = nodeContentEl?.querySelector(
        '.el-checkbox__original'
      ) as HTMLInputElement
      if (checkbox) {
        if (!node.indeterminate && !checkbox?.indeterminate && !node.checked)
          return
        // console.log(node.label, checkbox)
        checkbox.checked =
          !half && !checkbox?.indeterminate ? node.checked : !!half
      }
    }
  })
}
