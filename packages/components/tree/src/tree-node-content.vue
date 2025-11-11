<script lang="ts">
import { defineComponent, h, inject, renderSlot } from 'vue'
import ElText from '@element-plus/components/text'
import { useNamespace } from '@element-plus/hooks'
import { NODE_INSTANCE_INJECTION_KEY, ROOT_TREE_INJECTION_KEY } from './tokens'

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
    const nodeInstance = inject<ComponentInternalInstance>(
      NODE_INSTANCE_INJECTION_KEY
    )
    const tree = inject<RootTreeType>(ROOT_TREE_INJECTION_KEY)!
    return () => {
      const node = props.node
      const { data, store } = node
      return props.renderContent
        ? props.renderContent(h, { _self: nodeInstance, node, data, store })
        : renderSlot(tree.ctx.slots, 'default', { node, data }, () => [
            h(
              ElText,
              { tag: 'span', truncated: true, class: ns.be('node', 'label') },
              () => [node.label]
            ),
          ])
    }
  },
})
</script>
