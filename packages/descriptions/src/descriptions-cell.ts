import { computed, defineComponent, h, inject } from 'vue'
import { IDescriptionsInject } from './descriptions.type'

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
    const descriptions: IDescriptionsInject = inject('descriptions')

    const label = computed(() => props.cell?.children?.label?.() || props.cell?.props?.label)
    const content = computed(() => props.cell?.children?.default?.())
    const span = computed(() => props.cell?.props?.span || 1)
    const border = computed(() => descriptions.border)
    const direction = computed(() => descriptions.direction)

    return {
      label: label,
      content: content,
      span: span,
      border: border,
      direction: direction,
    }
  },
  render() {
    if (this.type === 'label') {
      return h(this.tag, {
        class: ['el-descriptions__label', { 'is-bordered-label': this.border }],
        colSpan: this.direction === 'vertical' ? this.span : 1,
      }, this.label)
    } else if (this.type === 'content') {
      return h(this.tag, {
        class: 'el-descriptions__content',
        colSpan: this.direction === 'vertical' ? this.span : this.span * 2 - 1,
      }, this.content)
    } else {
      return h('td', {
        colSpan: this.span,
      }, [
        h('span', {
          class: ['el-descriptions__label', { 'is-bordered-label': this.border }],
        }, this.label),
        h('span', {
          class: 'el-descriptions__content',
        }, this.content)])
    }
  },
})
