// @ts-nocheck
import { defineComponent, h } from 'vue'
import { useNamespace } from '@element-plus/hooks'
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
    return h(
      'span',
      { class: ns.e('label') },
      renderLabelFn ? renderLabelFn({ node, data }) : label
    )
  },
})
