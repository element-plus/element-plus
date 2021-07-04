<script lang='ts'>
import { h, defineComponent, inject, ComponentInternalInstance } from 'vue'
import { RootTreeType } from './tree.type'

export default defineComponent({
  name: 'ElTreeNodeContent',
  props: {
    node: {
      type: Object,
      required: true,
    },
    renderContent: Function,
  },
  setup(props) {
    const nodeInstance = inject<ComponentInternalInstance>('NodeInstance')
    const tree = inject<RootTreeType>('RootTree')
    return () => {
      const node = props.node
      const { data, store } = node
      return (
        props.renderContent
          ? props.renderContent(h, { _self: nodeInstance, node, data, store })
          : tree.ctx.slots.default
            ? tree.ctx.slots.default({ node, data })
            : h('span', { class: 'el-tree-node__label' }, [node.label])
      )
    }
  },
})
</script>
