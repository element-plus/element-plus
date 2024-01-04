import { defineComponent } from 'vue'
import { flattedChildren, isArray } from '@element-plus/utils'
import { getNormalizedProps, isSameSteps } from './helper'
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
  emits: ['update-steps'],
  setup(props, { slots, emit }) {
    let cachedSteps: any[] = []

    return () => {
      const children = slots.default?.()!
      const filteredSteps: any[] = []
      const result: VNode[] = []

      function filterSteps(children?: FlattenVNodes) {
        if (!isArray(children)) return
        ;(children as VNode[]).forEach((item) => {
          const name = ((item?.type || {}) as Component)?.name

          if (name === 'ElTourStep') {
            const booleanKeys = ['showArrow', 'mask', 'scrollIntoViewOptions']
            filteredSteps.push(getNormalizedProps(item, booleanKeys))
            result.push(item)
          }
        })
      }

      if (children.length) {
        filterSteps(flattedChildren(children![0]?.children))
      }

      if (!isSameSteps(filteredSteps, cachedSteps)) {
        cachedSteps = filteredSteps
        emit('update-steps', filteredSteps)
      }

      if (result.length) {
        return result[props.current]
      }
      return null
    }
  },
})
