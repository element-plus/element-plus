// @ts-nocheck
import { defineComponent, h } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { clearCommentSlot } from './utils'
export default defineComponent({
  name: 'NodeContent',
  setup() {
    const ns = useNamespace('cascader-node')
    return {
      ns,
    }
  },
  render() {
    const { ns } = this
    const { node, panel } = this.$parent
    const { data, label } = node
    const { renderLabelFn } = panel
    let children = label
    if (renderLabelFn) {
      const slots = clearCommentSlot(renderLabelFn({ node, data }))
      children = slots.length > 0 ? slots : label
    }
    return h('span', { class: ns.e('label') }, children)
  },
})
