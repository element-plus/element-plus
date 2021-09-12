import {
  defineComponent,
  renderSlot,
  createVNode,
  createTextVNode,
  isVNode,
} from 'vue'
import {
  PatchFlags,
  isFragment,
  isValidElementNode,
} from '@element-plus/utils/vnode'
import { isArray } from '@element-plus/utils/util'
import Item from './item.vue'
import { useSpace, defaultProps } from './useSpace'

import type { VNode, ExtractPropTypes, Slots } from 'vue'

export default defineComponent({
  name: 'ElSpace',
  props: defaultProps,
  setup(props) {
    return useSpace(props)
  },

  render(
    ctx: ReturnType<typeof useSpace> &
      ExtractPropTypes<typeof defaultProps> & { $slots: Slots }
  ) {
    const {
      classes,
      $slots,
      containerStyle,
      itemStyle,
      spacer,
      prefixCls,
      direction,
    } = ctx

    const children = renderSlot($slots, 'default', { key: 0 }, () => [])
    // retrieve the children out via a simple for loop
    // the edge case here is that when users uses directives like <v-for>, <v-if>
    // we need to go one layer deeper

    if (children.children.length === 0) return null

    // loop the children, if current children is rendered via `renderList` or `<v-for>`
    if (isArray(children.children)) {
      let extractedChildren = []
      children.children.forEach((child: VNode, loopKey) => {
        if (isFragment(child)) {
          if (isArray(child.children)) {
            child.children.forEach((nested, key) => {
              extractedChildren.push(
                createVNode(
                  Item,
                  {
                    style: itemStyle,
                    prefixCls,
                    key: `nested-${key}`,
                  },
                  {
                    default: () => [nested as VNode],
                  },
                  PatchFlags.PROPS | PatchFlags.STYLE,
                  ['style', 'prefixCls']
                )
              )
            })
          }
          // if the current child is valid vnode, then append this current vnode
          // to item as child node.
        } else if (isValidElementNode(child)) {
          extractedChildren.push(
            createVNode(
              Item,
              {
                style: itemStyle,
                prefixCls,
                key: `LoopKey${loopKey}`,
              },
              {
                default: () => [child as VNode],
              },
              PatchFlags.PROPS | PatchFlags.STYLE,
              ['style', 'prefixCls']
            )
          )
        }
      })

      if (spacer) {
        // track the current rendering index, when encounters the last element
        // then no need to add a spacer after it.
        const len = extractedChildren.length - 1
        extractedChildren = extractedChildren.reduce((acc, child, idx) => {
          return idx === len
            ? [...acc, child]
            : [
                ...acc,
                child,
                createVNode(
                  'span',
                  // adding width 100% for vertical alignment,
                  // when the spacer inherit the width from the
                  // parent, this span's width was not set, so space
                  // might disappear
                  {
                    style: [
                      itemStyle,
                      direction === 'vertical' ? 'width: 100%' : null,
                    ],
                    key: idx,
                  },
                  [
                    // if spacer is already a valid vnode, then append it to the current
                    // span element.
                    // otherwise, treat it as string.
                    isVNode(spacer)
                      ? spacer
                      : createTextVNode(spacer as string, PatchFlags.TEXT),
                  ],
                  PatchFlags.STYLE
                ),
              ]
        }, [])
      }

      // spacer container.
      return createVNode(
        'div',
        {
          class: classes,
          style: containerStyle,
        },
        extractedChildren,
        PatchFlags.STYLE | PatchFlags.CLASS
      )
    }

    return children.children
  },
})
