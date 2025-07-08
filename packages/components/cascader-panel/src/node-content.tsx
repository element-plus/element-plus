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
    checkOnClickNode: Boolean,
    disabled: Boolean,
  },
  setup(props, { emit }) {
    const ns = useNamespace('cascader-node')
    const { renderLabelFn, node, disabled, checkOnClickNode } = props
    const { data, label: nodeLabel } = node

    const label = () => {
      const renderLabel = renderLabelFn?.({ node, data })
      return isVNodeEmpty(renderLabel) ? nodeLabel : renderLabel ?? nodeLabel
    }
    function handleClick() {
      if (disabled || !checkOnClickNode) return
      emit('handleSelectCheck', !node.checked)
    }
    return () => (
      <span class={ns.e('label')} onClick={handleClick}>
        {label()}
      </span>
    )
  },
})
