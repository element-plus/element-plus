import { defineComponent } from 'vue'

import type { Component, VNode } from 'vue'

export default defineComponent({
  name: 'ElOptions',
  emits: ['update-options'],
  setup(_, { slots, emit }) {
    let oldOptions: any[] = []

    function isSameOptions(a: any[], b: any[]) {
      if (a.length === b.length) {
        for (const [index] of a.entries()) {
          if (a[index] != b[index]) {
            return false
          }
        }
      } else {
        return false
      }
      return true
    }

    return () => {
      const children = slots.default?.()!

      if (children.length) {
        const options = (children![0]?.children as VNode[])?.[0]?.children || []
        if (options && options.length) {
          const filteredOptions = (options as VNode[])
            .filter(
              (item: VNode) =>
                ((item?.type || {}) as Component)?.name === 'ElOption'
            )
            .map((item: VNode) => item.props?.label)

          if (!isSameOptions(filteredOptions, oldOptions)) {
            oldOptions = filteredOptions
            emit('update-options', filteredOptions)
          }
        }
      }

      return children
    }
  },
})
