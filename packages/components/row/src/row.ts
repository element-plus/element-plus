import { defineComponent, computed, h, provide } from 'vue'
import { buildProps } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const rowProps = buildProps({
  tag: {
    type: String,
    default: 'div',
  },
  gutter: {
    type: Number,
    default: 0,
  },
  justify: {
    type: String,
    values: ['start', 'center', 'end', 'space-around', 'space-between'],
    default: 'start',
  },
  align: {
    type: String,
    values: ['top', 'middle', 'bottom'],
    default: 'top',
  },
} as const)
export type RowProps = ExtractPropTypes<typeof rowProps>

export default defineComponent({
  name: 'ElRow',
  props: rowProps,

  setup(props, { slots }) {
    const gutter = computed(() => props.gutter)
    provide('ElRow', {
      gutter,
    })

    const style = computed(() => {
      const ret = {
        marginLeft: '',
        marginRight: '',
      }
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    })

    return () =>
      h(
        props.tag,
        {
          class: [
            'el-row',
            props.justify !== 'start' ? `is-justify-${props.justify}` : '',
            props.align !== 'top' ? `is-align-${props.align}` : '',
          ],
          style: style.value,
        },
        slots.default?.()
      )
  },
})
