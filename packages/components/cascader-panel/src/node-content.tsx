import { Comment, defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { isArray } from '@element-plus/utils'

import type { PropType, VNode } from 'vue'
import type { CascaderNode, RenderLabel } from './types'

function isVNodeEmpty(vnodes?: VNode[] | VNode) {
  return !!(isArray(vnodes)
    ? vnodes.every(({ type }) => type === Comment)
    : vnodes?.type === Comment)
}

export default defineComponent({
  name: 'NodeContent',
  props: {
    node: {
      type: Object as PropType<CascaderNode>,
      required: true,
    },
    renderLabelFn: Function as PropType<RenderLabel>,
  },
  setup(props) {
    const ns = useNamespace('cascader-node')
    const { renderLabelFn, node } = props
    const { data, label: nodeLabel } = node

    const label = () => {
      const renderLabel = renderLabelFn?.({ node, data })
      return isVNodeEmpty(renderLabel) ? nodeLabel : renderLabel ?? nodeLabel
    }

    return () => <span class={ns.e('label')}>{label()}</span>
  },
})
