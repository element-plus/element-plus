import { defineComponent, h, inject } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import GText from '@element-plus/components/text'
import { ROOT_TREE_INJECTION_KEY, treeNodeContentProps } from './virtual-tree'

export default defineComponent({
  name: 'GTreeNodeContent',
  props: treeNodeContentProps,
  setup(props) {
    const tree = inject(ROOT_TREE_INJECTION_KEY)
    const ns = useNamespace('tree')
    return () => {
      const node = props.node
      const { data } = node!
      return tree?.ctx.slots.default
        ? tree.ctx.slots.default({ node, data })
        : h(
            GText,
            { tag: 'span', truncated: true, class: ns.be('node', 'label') },
            () => [node?.label]
          )
    }
  },
})
