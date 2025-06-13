<template>
  <div :class="descriptionKls">
    <div
      v-if="title || extra || $slots.title || $slots.extra"
      :class="ns.e('header')"
    >
      <div :class="ns.e('title')">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="ns.e('extra')">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>

    <div :class="ns.e('body')">
      <table :class="[ns.e('table'), ns.is('bordered', border)]">
        <tbody>
          <slot />
          <rows-renderer
            :magic-prop="
              () => {
                // `getRows()` returns vnodes that are not reactive,
                // so the render functions cannot fully capture its own deps.
                // This workaround forces Vue to update `rows-renderer`.
              }
            "
          >
            <template v-for="(row, _index) in getRows()" :key="_index">
              <el-descriptions-row :row="row" />
            </template>
          </rows-renderer>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, provide } from 'vue'
import { useNamespace, useOrderedChildren } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import ElDescriptionsRow from './descriptions-row.vue'
import { descriptionsKey } from './token'
import { descriptionProps } from './description'
import { COMPONENT_NAME } from './constants'

import type { DescriptionItemContext } from './type'
import type { DescriptionItemVNode } from './description-item'
import type { Slots } from 'vue'

defineOptions({
  name: 'ElDescriptions',
})

const props = defineProps(descriptionProps)

const ns = useNamespace('descriptions')

const descriptionsSize = useFormSize()

const {
  children: descriptionItems,
  addChild: addDescriptionItem,
  removeChild: removeDescriptionItem,
} = useOrderedChildren<DescriptionItemContext>(
  getCurrentInstance()!,
  COMPONENT_NAME
)

provide(descriptionsKey, {
  props,
  addDescriptionItem,
  removeDescriptionItem,
})

const descriptionKls = computed(() => [ns.b(), ns.m(descriptionsSize.value)])

const filledNode = (
  node: DescriptionItemVNode,
  span: number,
  count: number,
  isLast = false
) => {
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
  const children = descriptionItems.value
  if (children.length === 0) return []

  const rows: DescriptionItemVNode[][] = []
  let temp: DescriptionItemVNode[] = []
  let count = props.column
  let totalSpan = 0 // all spans number of item
  const rowspanTemp: number[] = [] // the number of row spans

  children.forEach((child, index) => {
    const node = child.vnode
    const span = child.props?.span || 1
    const rowspan = child.props?.rowspan || 1
    const rowNo = rows.length
    rowspanTemp[rowNo] ||= 0

    if (rowspan > 1) {
      for (let i = 1; i < rowspan; i++) {
        rowspanTemp[rowNo + i] ||= 0
        rowspanTemp[rowNo + i]++
        totalSpan++
      }
    }
    if (rowspanTemp[rowNo] > 0) {
      count -= rowspanTemp[rowNo]
      rowspanTemp[rowNo] = 0
    }
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

const RowsRenderer = (_: unknown, { slots }: { slots: Slots }) => {
  return slots.default!()
}
</script>
