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
          <template v-for="(row, index) in getRows()" :key="index">
            <el-descriptions-row :row="row" />
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { computed, provide, useSlots } from 'vue'
import { flattedChildren } from '@element-plus/utils'
import { useNamespace, useSize } from '@element-plus/hooks'
import ElDescriptionsRow from './descriptions-row.vue'
import { descriptionsKey } from './token'
import { descriptionProps } from './description'

defineOptions({
  name: 'ElDescriptions',
})

const props = defineProps(descriptionProps)

const ns = useNamespace('descriptions')

const descriptionsSize = useSize()

const slots = useSlots()

provide(descriptionsKey, props)

const descriptionKls = computed(() => [ns.b(), ns.m(descriptionsSize.value)])

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
</script>
