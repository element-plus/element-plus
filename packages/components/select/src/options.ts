import { defineComponent, inject } from 'vue'
import { isEqual } from 'lodash-unified'
import { isArray, isFunction, isString } from '@element-plus/utils'
import { selectKey } from './token'
import type { Component, VNode, VNodeNormalizedChildren } from 'vue'

export default defineComponent({
  name: 'ElOptions',
  setup(_, { slots }) {
    const select = inject(selectKey)
    let cachedValueList: any[] = []

    return () => {
      const children = slots.default?.()!
      const valueList: any[] = []

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
          } else if (name === 'ElOption') {
            valueList.push(item.props?.value)
          } else if (isArray(item.children)) {
            filterOptions(item.children)
          }
        })
      }

      if (children.length) {
        filterOptions(children[0]?.children)
      }

      if (!isEqual(valueList, cachedValueList)) {
        cachedValueList = valueList
        if (select) {
          select.states.optionValues = valueList
        }
      }

      return children
    }
  },
})
