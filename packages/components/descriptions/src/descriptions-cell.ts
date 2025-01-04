import { defineComponent, h, inject, withDirectives } from 'vue'
import { isNil } from 'lodash-unified'
import { addUnit, getNormalizedProps } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { descriptionsKey } from './token'
import type { DirectiveArguments, PropType, VNode } from 'vue'

import type {
  IDescriptionsInject,
  IDescriptionsItemInject,
} from './descriptions.type'
import type { DescriptionItemVNode } from './description-item'

export default defineComponent({
  name: 'ElDescriptionsCell',
  props: {
    cell: {
      type: Object as PropType<DescriptionItemVNode>,
    },
    tag: {
      type: String,
      default: 'td',
    },
    type: {
      type: String,
    },
  },
  setup() {
    const descriptions = inject(descriptionsKey, {} as IDescriptionsInject)

    return {
      descriptions,
    }
  },
  render() {
    const item = getNormalizedProps(
      this.cell as VNode
    ) as IDescriptionsItemInject

    const directives = (this.cell?.dirs || []).map((dire) => {
      const { dir, arg, modifiers, value } = dire
      return [dir, value, arg, modifiers]
    }) as DirectiveArguments

    const { border, direction } = this.descriptions
    const isVertical = direction === 'vertical'
    const renderLabel = () => this.cell?.children?.label?.() || item.label
    const renderContent = () => this.cell?.children?.default?.()
    const span = item.span
    const rowspan = item.rowspan
    const align = item.align ? `is-${item.align}` : ''
    const labelAlign = item.labelAlign ? `is-${item.labelAlign}` : align
    const className = item.className
    const labelClassName = item.labelClassName
    const width =
      this.type === 'label'
        ? item.labelWidth || this.descriptions.labelWidth || item.width
        : item.width

    const style = {
      width: addUnit(width),
      minWidth: addUnit(item.minWidth),
    }
    const ns = useNamespace('descriptions')

    switch (this.type) {
      case 'label':
        return withDirectives(
          h(
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
              rowspan: isVertical ? 1 : rowspan,
            },
            renderLabel()
          ),
          directives
        )
      case 'content':
        return withDirectives(
          h(
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
              rowspan: isVertical ? rowspan * 2 - 1 : rowspan,
            },
            renderContent()
          ),
          directives
        )
      default: {
        const label = renderLabel()
        const labelStyle: Record<string, any> = {}
        const width = addUnit(item.labelWidth || this.descriptions.labelWidth)
        if (width) {
          labelStyle.width = width
          labelStyle.display = 'inline-block'
        }
        return withDirectives(
          h(
            'td',
            {
              style,
              class: [ns.e('cell'), align],
              colSpan: span,
              rowspan,
            },
            [
              !isNil(label)
                ? h(
                    'span',
                    {
                      style: labelStyle,
                      class: [ns.e('label'), labelClassName],
                    },
                    label
                  )
                : undefined,
              h(
                'span',
                {
                  class: [ns.e('content'), className],
                },
                renderContent()
              ),
            ]
          ),
          directives
        )
      }
    }
  },
})
