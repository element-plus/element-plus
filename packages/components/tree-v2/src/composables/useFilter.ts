import { computed, ref } from 'vue'
import { isFunction } from '@element-plus/utils'

import type { Ref } from 'vue'
import type { TreeV2, TreeV2Key, TreeV2Node, TreeV2Props } from '../types'

// When the data volume is very large using filter will cause lag
// I haven't found a better way to optimize it for now
// Maybe this problem should be left to the server side
export function useFilter(props: TreeV2Props, tree: Ref<TreeV2 | undefined>) {
  const hiddenNodeKeySet = ref<Set<TreeV2Key>>(new Set([]))
  const hiddenExpandIconKeySet = ref<Set<TreeV2Key>>(new Set([]))

  const filterable = computed(() => {
    return isFunction(props.filterMethod)
  })

  function doFilter(query: string) {
    if (!filterable.value) {
      return
    }
    const expandKeySet = new Set<TreeV2Key>()
    const hiddenExpandIconKeys = hiddenExpandIconKeySet.value
    const hiddenKeys = hiddenNodeKeySet.value
    const family: TreeV2Node[] = []
    const nodes = tree.value?.treeNodes || []
    const filter = props.filterMethod
    hiddenKeys.clear()
    function traverse(nodes: TreeV2Node[]) {
      nodes.forEach((node) => {
        family.push(node)
        if (filter?.(query, node.data, node)) {
          family.forEach((member) => {
            expandKeySet.add(member.key)
          })
        } else if (node.isLeaf) {
          hiddenKeys.add(node.key)
        }
        const children = node.children
        if (children) {
          traverse(children)
        }
        if (!node.isLeaf) {
          if (!expandKeySet.has(node.key)) {
            hiddenKeys.add(node.key)
          } else if (children) {
            // If all child nodes are hidden, then the expand icon will be hidden
            let allHidden = true
            for (const childNode of children) {
              if (!hiddenKeys.has(childNode.key)) {
                allHidden = false
                break
              }
            }
            if (allHidden) {
              hiddenExpandIconKeys.add(node.key)
            } else {
              hiddenExpandIconKeys.delete(node.key)
            }
          }
        }
        family.pop()
      })
    }
    traverse(nodes)
    return expandKeySet
  }

  function isForceHiddenExpandIcon(node: TreeV2Node): boolean {
    return hiddenExpandIconKeySet.value.has(node.key)
  }

  return {
    hiddenExpandIconKeySet,
    hiddenNodeKeySet,
    doFilter,
    isForceHiddenExpandIcon,
  }
}
