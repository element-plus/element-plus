// @ts-nocheck
import { Comment, defineComponent, h, inject } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { CASCADER_PANEL_INJECTION_KEY } from './types'

import type { VNode } from 'vue'

function isVNodeEmpty(vnodes?: VNode[]) {
  return !!vnodes?.every((vnode) => vnode.type === Comment)
}

export default defineComponent({
  name: 'NodeContent',
  setup(_, { emit }) {
    const ns = useNamespace('cascader-node')
    const panel = inject(CASCADER_PANEL_INJECTION_KEY)!
    return {
      ns,
      panel,
      emit,
    }
  },
  render() {
    const { ns } = this
    const { node, panel } = this.$parent
    const { data, label: nodeLabel } = node
    const { renderLabelFn } = panel
    const label = () => {
      let renderLabel = renderLabelFn?.({ node, data })
      if (isVNodeEmpty(renderLabel)) {
        renderLabel = nodeLabel
      }
      return renderLabel ?? nodeLabel
    }
    return h(
      'span',
      {
        class: ns.e('label'),
        onclick: () => {
          if (!this.panel.props.hideRadio || this.panel.props.disabled) {
            return
          }
          this.emit('handleSelectCheck', true)
        },
      },
      label()
    )
  },
})
