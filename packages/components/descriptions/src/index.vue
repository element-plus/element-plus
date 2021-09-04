<template>
  <div class="el-descriptions">
    <div
      v-if="title || extra || $slots.title || $slots.extra"
      class="el-descriptions__header"
    >
      <div class="el-descriptions__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="el-descriptions__extra">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>

    <div class="el-descriptions__body">
      <table
        :class="[
          'el-descriptions__table',
          { 'is-bordered': border },
          descriptionsSize ? `el-descriptions--${descriptionsSize}` : '',
        ]"
      >
        <tbody>
          <template v-for="(row, index) in getRows()" :key="index">
            <el-descriptions-row :row="row" />
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'
import { useGlobalConfig } from '@element-plus/utils/util'
import { isValidComponentSize } from '@element-plus/utils/validators'
import DescriptionsRow from './descriptions-row.vue'
import { elDescriptionsKey } from './token'

import type { PropType } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'

export default defineComponent({
  name: 'ElDescriptions',
  components: {
    [DescriptionsRow.name]: DescriptionsRow,
  },
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Number,
      default: 3,
    },
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    title: {
      type: String,
      default: '',
    },
    extra: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    provide(elDescriptionsKey, props)

    const $ELEMENT = useGlobalConfig()
    const descriptionsSize = computed(() => {
      return props.size || $ELEMENT.size
    })

    const flattedChildren = (children) => {
      const temp = Array.isArray(children) ? children : [children]
      const res = []
      temp.forEach((child) => {
        if (Array.isArray(child.children)) {
          res.push(...flattedChildren(child.children))
        } else {
          res.push(child)
        }
      })
      return res
    }

    const filledNode = (node, span, count, isLast = false) => {
      if (!node.props) {
        node.props = {}
      }
      if (span > count) {
        node.props.span = count
      }
      if (isLast) {
        // set the last span
        node.props.span = span
      }
      return node
    }

    const getRows = () => {
      const children = flattedChildren(slots.default?.()).filter(
        (node) => node?.type?.name === 'ElDescriptionsItem'
      )
      const rows = []
      let temp = []
      let count = props.column
      let totalSpan = 0 // all spans number of item

      children.forEach((node, index) => {
        const span = node.props?.span || 1

        if (index < children.length - 1) {
          totalSpan += span > count ? count : span
        }

        if (index === children.length - 1) {
          // calculate the last item span
          const lastSpan = props.column - (totalSpan % props.column)
          temp.push(filledNode(node, lastSpan, count, true))
          rows.push(temp)
          return
        }

        if (span < count) {
          count -= span
          temp.push(node)
        } else {
          temp.push(filledNode(node, span, count))
          rows.push(temp)
          count = props.column
          temp = []
        }
      })

      return rows
    }

    return {
      descriptionsSize,
      getRows,
    }
  },
})
</script>
