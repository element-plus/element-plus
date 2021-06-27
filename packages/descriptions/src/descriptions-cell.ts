import { computed, defineComponent, h, inject } from 'vue'
import { elDescriptionsKey, IDescriptionsInject, IDescriptionsItemInject } from './descriptions.type'
import { addUnit } from '@element-plus/utils/util'

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
  setup(props) {
    const descriptions = inject(elDescriptionsKey, {} as IDescriptionsInject)
    const item = computed(() => {
      return {
        label: props.cell?.props?.label || '',
        span: props.cell?.props?.span || 1,
        width: props.cell?.props?.width || '',
        minWidth: props.cell?.props?.['min-width'] || props.cell?.props?.minWidth || '',
        align: props.cell?.props?.align || 'left',
        labelAlign: props.cell?.props?.['label-align'] || props.cell?.props?.labelAlign || '',
        className: props.cell?.props?.['class-name'] || props.cell?.props?.className || '',
        labelClassName: props.cell?.props?.['label-class-name'] || props.cell?.props?.labelClassName || '',
      } as IDescriptionsItemInject
    })

    const label = computed(() => props.cell?.children?.label?.() || item.value.label)
    const content = computed(() => props.cell?.children?.default?.())
    const span = computed(() => item.value.span)
    const align = computed(() => item.value.align ? `is-${item.value.align}` : '')
    const labelAlign = computed(() => item.value.labelAlign ? `is-${item.value.labelAlign}` : '' || align.value)
    const className = computed(() => item.value.className)
    const labelClassName = computed(() => item.value.labelClassName)
    const style = computed(() => {
      const width = addUnit(item.value.width || '')
      const minWidth = addUnit(item.value.minWidth || '')

      return {
        width,
        minWidth,
      }
    })

    return {
      descriptions,
      label,
      content,
      span,
      align,
      labelAlign,
      className,
      labelClassName,
      style,
    }
  },
  render() {
    switch (this.type) {
      case 'label':
        return h(this.tag, {
          style: this.style,
          class: ['el-descriptions__label', { 'is-bordered-label': this.descriptions.border }, this.labelAlign, this.labelClassName],
          colSpan: this.descriptions.direction === 'vertical' ? this.span : 1,
        }, this.label)
      case 'content':
        return h(this.tag, {
          style: this.style,
          class: ['el-descriptions__content', this.align, this.className],
          colSpan: this.descriptions.direction === 'vertical' ? this.span : this.span * 2 - 1,
        }, this.content)
      default:
        return h('td', {
          style: this.style,
          class: [this.align],
          colSpan: this.span,
        }, [
          h('span', {
            class: ['el-descriptions__label', this.labelClassName],
          }, this.label),
          h('span', {
            class: ['el-descriptions__content', this.className],
          }, this.content)])
    }
  },
})
