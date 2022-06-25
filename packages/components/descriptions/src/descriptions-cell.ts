// @ts-nocheck
import { defineComponent, h, inject } from 'vue'
import { addUnit, getNormalizedProps } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { elDescriptionsKey } from './token'

import type { VNode } from 'vue'
import type {
  IDescriptionsInject,
  IDescriptionsItemInject,
} from './descriptions.type'

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
    const item = getNormalizedProps(
      this.cell as VNode
    ) as IDescriptionsItemInject

    const { border, direction } = this.descriptions
    const isVertical = direction === 'vertical'
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
    const ns = useNamespace('descriptions')

    switch (this.type) {
      case 'label':
        return h(
          this.tag,
          {
            style,
            class: [
              ns.e('cell'),
              ns.e('label'),
              ns.is('bordered-label', border),
              ns.is('vertical-label', isVertical),
              labelAlign,
              labelClassName,
            ],
            colSpan: isVertical ? span : 1,
          },
          label
        )
      case 'content':
        return h(
          this.tag,
          {
            style,
            class: [
              ns.e('cell'),
              ns.e('content'),
              ns.is('bordered-content', border),
              ns.is('vertical-content', isVertical),
              align,
              className,
            ],
            colSpan: isVertical ? span : span * 2 - 1,
          },
          content
        )
      default:
        return h(
          'td',
          {
            style,
            class: [ns.e('cell'), align],
            colSpan: span,
          },
          [
            h(
              'span',
              {
                class: [ns.e('label'), labelClassName],
              },
              label
            ),
            h(
              'span',
              {
                class: [ns.e('content'), className],
              },
              content
            ),
          ]
        )
    }
  },
})
