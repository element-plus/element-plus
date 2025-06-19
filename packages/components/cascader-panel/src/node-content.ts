// @ts-nocheck
import { Comment, defineComponent, h } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { VNode } from 'vue'

function isVNodeEmpty(vnodes?: VNode[]) {
  return !!vnodes?.every((vnode) => vnode.type === Comment)
}

export default defineComponent({
  name: 'NodeContent',
  props: {
    selectOnClick: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const ns = useNamespace('cascader-node')
    return {
      ns,
      props,
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
          if (!this.props.selectOnClick || this.props.disabled) return
          this.emit('handleSelectCheck', true)
        },
      },
      label()
    )
  },
})
