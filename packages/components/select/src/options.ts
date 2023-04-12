import { defineComponent } from 'vue'
import { isFunction, isString } from '@element-plus/utils'
import type { Component, VNode, VNodeNormalizedChildren } from 'vue'

export default defineComponent({
  name: 'ElOptions',
  emits: ['update-options'],
  setup(_, { slots, emit }) {
    let cachedOptions: VNode[] = []

    function isSameOptions(a: VNode[], b: VNode[]) {
      if (a.length !== b.length) return false
      for (const [index] of a.entries()) {
        if (a[index] != b[index]) {
          return false
        }
      }
      return true
    }

    return () => {
      const children = slots.default?.()!
      const filteredOptions: VNode[] = []

      function filterOptions(children?: VNodeNormalizedChildren) {
        if (!Array.isArray(children)) return
        ;(children as VNode[]).forEach((item) => {
          const name = ((item?.type || {}) as Component)?.name

          if (name === 'ElOptionGroup') {
            filterOptions(
              !isString(item.children) &&
                !Array.isArray(item.children) &&
                isFunction(item.children?.default)
                ? item.children?.default()
                : item.children
            )
          } else if (name === 'ElOption') {
            filteredOptions.push(item)
          } else if (Array.isArray(item.children)) {
            filterOptions(item.children)
          }
        })
      }

      if (children.length) {
        filterOptions(children![0]?.children)
      }

      if (!isSameOptions(filteredOptions, cachedOptions)) {
        cachedOptions = filteredOptions
        emit('update-options', filteredOptions)
      }

      return children
    }
  },
})
