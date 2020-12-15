<script lang="ts">
import { defineComponent, renderSlot } from 'vue'
import {
  renderBlock,
  PatchFlags,
  isFragment,
  isValidElementNode,
} from '@element-plus/utils/vnode'
import { isArray } from '@element-plus/utils/util'
import { useSpace, defaultProps } from './useSpace'

import type { PropType, VNodeChild, VNode } from 'vue'

export default defineComponent({
  name: 'ElSpace',
  props: defaultProps,
  setup(props) {
    // init here
    return useSpace(props)
  },

  render(ctx, _cache, $props, $setup, $data, $options) {
    const { classes, $slots, style } = ctx

    const children = renderSlot($slots, 'default', { key: 0 }, () => [])
    // retrieve the children out via a simple for loop
    // the edge case here is that when users uses directives like <v-for>, <v-if>
    // we need to go one layer deeper

    if (children.children.length === 0) return null

    if (isArray(children.children)) {
      const extractedChildren = []
      children.children.forEach((child: VNode) => {
        if (isFragment(child)) {
          if (isArray(child.children)) {
            child.children.forEach(nested => {
              extractedChildren.push(nested)
            })
          }
        } else if (isValidElementNode(child)) {
          extractedChildren.push(child)
        }
      })

      console.log(extractedChildren)

      return renderBlock(
        'div',
        {
          class: classes,
          style,
        },
        [],
        PatchFlags.PROPS | PatchFlags.STYLE | PatchFlags.CLASS,
        [''],
      )
    }

    return children.children
  },
})
</script>
<style scoped></style>
