import { h, defineComponent, inject } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
import { ROOT_TREE_INJECTION_KEY, treeNodeContentProps } from './virtual-tree'

export default defineComponent({
  name: 'ElTreeNodeContent',
  props: treeNodeContentProps,
  setup(props) {
    const prefixClass = usePrefixClass('tree-node__label')
    const tree = inject(ROOT_TREE_INJECTION_KEY)
    return () => {
      const node = props.node
      const { data } = node!
      return tree?.ctx.slots.default
        ? tree.ctx.slots.default({ node, data })
        : h('span', { class: prefixClass.value }, [node?.label])
    }
  },
})
