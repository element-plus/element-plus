import { defineComponent } from 'vue'
import { isArray } from '@vue/shared'
import { isFunction, isString } from '@element-plus/utils'
import type { Component, VNode, VNodeNormalizedChildren } from 'vue'

export default defineComponent({
  name: 'ElOptions',
  setup(_, { slots }) {
    return () => {
      const children = slots.default?.()!

      function filterOptions(children?: VNodeNormalizedChildren) {
        if (!isArray(children)) return
        ;(children as VNode[]).forEach((item) => {
          const name = ((item?.type || {}) as Component)?.name

          if (name === 'ElOptionGroup') {
            filterOptions(
              !isString(item.children) &&
                !isArray(item.children) &&
                isFunction(item.children?.default)
                ? item.children?.default()
                : item.children
            )
          } else if (isArray(item.children)) {
            filterOptions(item.children)
          }
        })
      }

      if (children.length) {
        filterOptions(children![0]?.children)
      }

      return children
    }
  },
})
