import { defineComponent, h, inject } from 'vue'
import { addUnit } from '@element-plus/utils/util'
import { getNormalizedProps } from '@element-plus/utils/vnode'
import { elDescriptionsKey } from './token'

import type { VNode } from 'vue'
import type { IDescriptionsInject, IDescriptionsItemInject } from './descriptions.type'

export default defineComponent({
  name: 'ElDescriptionsCell',
  props: {
    cell: {
      type: Object,
    },
    tag: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  setup() {
    const descriptions = inject(elDescriptionsKey, {} as IDescriptionsInject)

    return {
      descriptions,
    }
  },
  render() {
    const item = getNormalizedProps(this.cell as VNode) as IDescriptionsItemInject

    const label = this.cell?.children?.label?.() || item.label
    const content = this.cell?.children?.default?.()
    const span = item.span
    const align = item.align ? `is-${item.align}` : ''
    const labelAlign = item.labelAlign ? `is-${item.labelAlign}` : '' || align
    const className = item.className
    const labelClassName = item.labelClassName
    const style = {
      width: addUnit(item.width),
      minWidth: addUnit(item.minWidth),
    }

    switch (this.type) {
      case 'label':
        return h(this.tag, {
          style: style,
          class: ['el-descriptions__label', { 'is-bordered-label': this.descriptions.border }, labelAlign, labelClassName],
          colSpan: this.descriptions.direction === 'vertical' ? span : 1,
        }, label)
      case 'content':
        return h(this.tag, {
          style: style,
          class: ['el-descriptions__content', align, className],
          colSpan: this.descriptions.direction === 'vertical' ? span : span * 2 - 1,
        }, content)
      default:
        return h('td', {
          style: style,
          class: [align],
          colSpan: span,
        }, [
          h('span', {
            class: ['el-descriptions__label', labelClassName],
          }, label),
          h('span', {
            class: ['el-descriptions__content', className],
          }, content)])
    }
  },
})
