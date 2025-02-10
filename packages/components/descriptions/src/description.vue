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

const getRows = () => {
  if (!slots.default) return []

  const children = flattedChildren(slots.default()).filter(
    (node): node is DescriptionItemVNode =>
      (node as any)?.type?.name === 'ElDescriptionsItem'
  )

  const rows: DescriptionItemVNode[][] = [] // 存储所有行
  let temp: DescriptionItemVNode[] = [] // 当前行内容
  let count = props.column // 当前行剩余列数
  const rowspanMap: number[] = Array.from({ length: props.column }, () => 0) // 每列跨行剩余行数

  children.forEach((node, index) => {
    const span = node.props?.span || 1
    const rowspan = node.props?.rowspan || 1

    // 动态计算当前行的可用列数
    let availableCount = count
    for (let i = 0; i < props.column; i++) {
      if (rowspanMap[i] > 0) {
        availableCount--
      }
    }

    // 如果当前单元格需要的列数超过可用列数，或者跨行未处理完，则强制换行
    if (span > availableCount || count <= 0) {
      rows.push(temp) // 保存当前行
      temp = [] // 开始新行
      count = props.column // 重置列数
      availableCount = count

      // 更新跨行剩余情况
      rowspanMap.forEach((val, i) => {
        if (val > 0) {
          availableCount--
          rowspanMap[i]--
        }
      })
    }

    // 添加当前单元格到行
    temp.push(node)

    // 更新跨行记录
    if (rowspan > 1) {
      const startColumn = props.column - availableCount
      for (let i = 0; i < span; i++) {
        rowspanMap[startColumn + i] += rowspan - 1
      }
    }

    count -= span

    // 如果当前行填满或者到达最后一个子节点，保存行
    if (count <= 0 || index === children.length - 1) {
      rows.push(temp)
      temp = []
      count = props.column
    }
  })

  return rows
}
</script>
