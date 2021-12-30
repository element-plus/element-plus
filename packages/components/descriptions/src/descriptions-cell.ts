import { defineComponent, h, inject } from 'vue'
import { addUnit } from '@element-plus/utils/util'
import { getNormalizedProps } from '@element-plus/utils/vnode'
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
        return h(
          this.tag,
          {
            style,
            class: [
              'el-descriptions__cell',
              'el-descriptions__label',
              {
                'is-bordered-label': border,
                'is-vertical-label': direction === 'vertical',
              },
              labelAlign,
              labelClassName,
            ],
            colSpan: direction === 'vertical' ? span : 1,
          },
          label
        )
      case 'content':
        return h(
          this.tag,
          {
            style,
            class: [
              'el-descriptions__cell',
              'el-descriptions__content',
              {
                'is-bordered-content': border,
                'is-vertical-content': direction === 'vertical',
              },
              align,
              className,
            ],
            colSpan: direction === 'vertical' ? span : span * 2 - 1,
          },
          content
        )
      default:
        return h(
          'td',
          {
            style,
            class: ['el-descriptions__cell', align],
            colSpan: span,
          },
          [
            h(
              'span',
              {
                class: ['el-descriptions__label', labelClassName],
              },
              label
            ),
            h(
              'span',
              {
                class: ['el-descriptions__content', className],
              },
              content
            ),
          ]
        )
    }
  },
})
