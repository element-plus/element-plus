<script lang="ts">
import { h, defineComponent, inject } from 'vue'
import { treeNodeContentProps } from './defaults'
import type { RootTreeType } from './tree.type'

export default defineComponent({
  name: 'ElTreeNodeContent',
  props: treeNodeContentProps,
  setup(props) {
    const tree = inject<RootTreeType>('RootTree')
    return () => {
      const node = props.node
      const { data } = node
      return tree.ctx.slots.default
        ? tree.ctx.slots.default({ node, data })
        : h('span', { class: 'el-tree-node__label' }, [node.label])
    }
  },
})
</script>
