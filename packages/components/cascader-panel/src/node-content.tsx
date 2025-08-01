import { Comment, defineComponent, inject } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { isArray } from '@element-plus/utils'
import { CASCADER_PANEL_INJECTION_KEY } from './types'

import type { PropType, VNode } from 'vue'
import type { CascaderNode } from './types'

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
    disabled: Boolean,
  },
  setup(props, { emit }) {
    const ns = useNamespace('cascader-node')
    const { config, renderLabelFn } = inject(CASCADER_PANEL_INJECTION_KEY)!
    const { checkOnClickNode, checkOnClickLeaf } = config
    const { node, disabled } = props
    const { data, label: nodeLabel } = node

    const label = () => {
      const renderLabel = renderLabelFn?.({ node, data })
      return isVNodeEmpty(renderLabel) ? nodeLabel : renderLabel ?? nodeLabel
    }
    function handleClick() {
      if (
        (checkOnClickNode || (node.isLeaf && checkOnClickLeaf)) &&
        !disabled
      ) {
        emit('handleSelectCheck', !node.checked)
      }
    }
    return () => (
      <span class={ns.e('label')} onClick={handleClick}>
        {label()}
      </span>
    )
  },
})
