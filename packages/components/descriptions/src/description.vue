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
          <template v-for="(row, _index) in getRows()" :key="_index">
            <el-descriptions-row :row="row" />
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, useSlots } from 'vue'
import { flattedChildren } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import ElDescriptionsRow from './descriptions-row.vue'
import { descriptionsKey } from './token'
import { descriptionProps } from './description'
import { COMPONENT_NAME } from './constants'

import type { IDescriptionsInject } from './descriptions.type'
import type { DescriptionItemVNode } from './description-item'

defineOptions({
  name: 'ElDescriptions',
})

const props = defineProps(descriptionProps)

const ns = useNamespace('descriptions')

const descriptionsSize = useFormSize()

const slots = useSlots()

provide(descriptionsKey, props as IDescriptionsInject)

const descriptionKls = computed(() => [ns.b(), ns.m(descriptionsSize.value)])

const getRows = () => {
  if (!slots.default) return []

  const children = flattedChildren(slots.default()).filter(
    (node): node is DescriptionItemVNode =>
      (node as any)?.type?.name === COMPONENT_NAME
  )
  const rows: DescriptionItemVNode[][] = []
  let temp: DescriptionItemVNode[] = []
  let count = props.column
  let totalSpan = 0 // all spans number of item
  const rowspanTemp: number[] = [] // the number of row spans

  children.forEach((node, index) => {
    const span = node.props?.span || 1
    const rowspan = node.props?.rowspan || 1
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

    if (span > count) {
      totalSpan += count
      if (temp.length > 0) {
        rows.push(temp)
      }
      temp = [node]
      totalSpan += span
      count = props.column - span
    } else {
      temp.push(node)
      totalSpan += span
      count -= span
    }

    if (index === children.length - 1) {
      const lastRowRemaining = props.column - (totalSpan % props.column)
      if (lastRowRemaining < props.column) {
        const lastNode = { ...node }
        lastNode.props = { ...lastNode.props, span: span + lastRowRemaining }
        temp[temp.length - 1] = lastNode
      }
      rows.push(temp)
    }
  })

  return rows
}
</script>
