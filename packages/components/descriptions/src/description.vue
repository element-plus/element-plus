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
  if (!slots.default) return []

  const children = flattedChildren(slots.default()).filter(
    (node): node is DescriptionItemVNode =>
      (node as any)?.type?.name === 'ElDescriptionsItem'
  )

  const rows: DescriptionItemVNode[][] = []
  let temp: DescriptionItemVNode[] = []
  let count = props.column
  const rowspanMap: number[] = Array.from({ length: props.column }, () => 0) // 记录每列的跨行剩余行数

  children.forEach((node, index) => {
    const span = node.props?.span || 1
    const rowspan = node.props?.rowspan || 1

    // 动态计算当前行的可用列数
    let availableCount = count
    for (let i = 0; i < props.column; i++) {
      if (rowspanMap[i] > 0) {
        availableCount--
        rowspanMap[i]-- // 减少跨行占用的行数
      }
    }

    // 当前单元格需要的列数超过可用列数，换行处理
    if (span > availableCount) {
      const adjustedSpan = Math.min(span, availableCount)
      temp.push(filledNode(node, adjustedSpan, availableCount))
      rows.push(temp)
      temp = []
      count = props.column
      availableCount = props.column

      // 更新下一行的跨行占用情况
      for (let i = 0; i < props.column; i++) {
        if (rowspanMap[i] > 0) {
          availableCount--
        }
      }
    } else {
      temp.push(node)
    }

    // 更新跨行信息
    if (rowspan > 1) {
      const startColumn = props.column - availableCount
      for (let i = 0; i < span; i++) {
        rowspanMap[startColumn + i] += rowspan - 1
      }
    }

    count -= span

    // 当前行已填满，保存并初始化下一行
    if (count <= 0 || index === children.length - 1) {
      rows.push(temp)
      temp = []
      count = props.column
    }
  })

  return rows
}
</script>
