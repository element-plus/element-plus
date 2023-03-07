import { defineComponent } from 'vue'

import type { Component, VNode } from 'vue'

export default defineComponent({
  name: 'ElOptions',
  emits: ['update-options'],
  setup(_, { slots, emit }) {
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

          emit('update-options', filteredOptions)
        }
      }

      return children
    }
  },
})
