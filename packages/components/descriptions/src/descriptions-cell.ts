import { defineComponent, h, inject } from 'vue'
import { addUnit } from '@element-plus/utils/util'
import { usePrefixClass } from '@element-plus/hooks'
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
    const prefixClass = usePrefixClass('descriptions')
    const descriptions = inject(elDescriptionsKey, {} as IDescriptionsInject)

    return {
      prefixClass,
      descriptions,
    }
  },
  render() {
    const item = getNormalizedProps(
      this.cell as VNode
    ) as IDescriptionsItemInject
    const { prefixClass } = this
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

    switch (this.type) {
      case 'label':
        return h(
          this.tag,
          {
            style,
            class: [
              `${prefixClass}__cell`,
              `${prefixClass}__label`,
              {
                'is-bordered-label': border,
                'is-vertical-label': isVertical,
              },
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
              `${prefixClass}__cell`,
              `${prefixClass}__content`,
              {
                'is-bordered-content': border,
                'is-vertical-content': isVertical,
              },
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
            class: [`${prefixClass}__cell`, align],
            colSpan: span,
          },
          [
            h(
              'span',
              {
                class: [`${prefixClass}__label`, labelClassName],
              },
              label
            ),
            h(
              'span',
              {
                class: [`${prefixClass}__content`, className],
              },
              content
            ),
          ]
        )
    }
  },
})
