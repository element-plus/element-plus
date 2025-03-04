import { defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { PropType } from 'vue'
import type { CascaderNode, RenderLabel } from './types'

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
    const { data, label } = node

    return () => (
      <span class={ns.e('label')}>
        {renderLabelFn ? renderLabelFn({ node, data }) : label}
      </span>
    )
  },
})
