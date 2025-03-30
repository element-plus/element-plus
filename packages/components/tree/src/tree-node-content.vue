<script lang="ts">
import { defineComponent, h, inject, renderSlot } from 'vue'

import { useNamespace } from '@element-plus/hooks'
import type { ComponentInternalInstance } from 'vue'
import type { RootTreeType } from './tree.type'

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
    const ns = useNamespace('tree')
    const nodeInstance = inject<ComponentInternalInstance>('NodeInstance')
    const tree = inject<RootTreeType>('RootTree')!
    return () => {
      const node = props.node
      const { data, store } = node
      return props.renderContent
        ? props.renderContent(h, { _self: nodeInstance, node, data, store })
        : renderSlot(tree.ctx.slots, 'default', { node, data }, () => [
            h('span', { class: ns.be('node', 'label') }, [node.label]),
          ])
    }
  },
})
</script>
