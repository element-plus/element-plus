import { defineComponent } from 'vue'
import { flattedChildren, isArray } from '@element-plus/utils'
import type { FlattenVNodes } from '@element-plus/utils'
import type { Component, VNode } from 'vue'

export default defineComponent({
  name: 'ElTourSteps',
  props: {
    current: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update-total'],
  setup(props, { slots, emit }) {
    let cacheTotal = 0

    return () => {
      const children = slots.default?.()!
      const result: VNode[] = []
      let total = 0

      function filterSteps(children?: FlattenVNodes) {
        if (!isArray(children)) return
        ;(children as VNode[]).forEach((item) => {
          const name = ((item?.type || {}) as Component)?.name

          if (name === 'ElTourStep') {
            result.push(item)
            total += 1
          }
        })
      }

      if (children.length) {
        filterSteps(flattedChildren(children![0]?.children))
      }

      if (cacheTotal !== total) {
        cacheTotal = total
        emit('update-total', total)
      }

      if (result.length) {
        return result[props.current]
      }
      return null
    }
  },
})
